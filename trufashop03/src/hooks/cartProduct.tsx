import React, { createContext, useCallback, useState, useContext } from 'react'
import Cookies from 'js-cookie'
import api from '../_services/api'
import Product from '../types/product'
import { useToast } from './toast'
import Prismic from 'prismic-javascript'
import { Console } from 'node:console'

interface CartContextData {
  cart: ProductStock[]
  addToCart(id: string): Promise<void>
  clearCart(): void
  removeProduct(index: number): Promise<void>
  updateAmount(index: number, stock: number): Promise<void>
}

export interface ProductStock {
  itemProduct: {
    stock: number
    product: Product
  }
}

const CartContext = createContext<CartContextData>({} as CartContextData)

const CartProduct: React.FC = ({ children }) => {
  const { addToast } = useToast()
  const [cart, setCart] = useState<ProductStock[]>(() => {
    const productList = Cookies.get('@list:product')

      if (productList) {
      return JSON.parse(productList)
    }

    return [] as ProductStock[]
  })

  const clearCart = useCallback(() => {
    Cookies.remove('@list:product')
    setCart([] as ProductStock[])
  }, [])

  const updateSuccess = useCallback(
    async (id, stock) => {
      const newCart = cart

      const productIndex = newCart.findIndex(
        p => p.itemProduct.product.id === id
      )

      if (productIndex >= 0) {
        newCart[productIndex].itemProduct.stock = Number(stock)

        setCart([...newCart])
        Cookies.set('@list:product', JSON.stringify(newCart))
      }
    },
    [cart]
  )

  const updateAmount = useCallback(
    async (id, stock) => {
      if (stock <= 0) return

      const searchStock = await api.get(`/products/${id}`)
      const stockAmount = searchStock.data.stock

      if (stock > stockAmount) {
        console.log('Erro: não tem mais produtos')

        addToast({
          type: 'error',
          title: 'Falha!',
          description: 'Não temos mais produto para adicionar!'
        })
        return
      }

      updateSuccess(id, stock)
    },
    [addToast, updateSuccess]
  )

  const addToCart = useCallback(
    async id => {
      console.log('++>>>', id)

      const newCart = cart

      const productExists = newCart.find(
        (p: ProductStock) => p.itemProduct.product.id === id
      )

      /*
      const stock = await api.get(`/products/${id}`);

      const stockAmount = stock.data.stock;
*/
      const currentAmount = productExists ? productExists.itemProduct.stock : 0

      const amount = currentAmount + 1

      console.log('++>>> amount', amount)

      /*
      if (amount > stockAmount) {
        console.log('Erro: não tem mais produtos');

        addToast({
          type: 'error',
          title: 'Falha!',
          description: 'Não temos mais produto para adicionar!',
        });

        return;
      }
*/

      console.log('my product vou entra')
      if (productExists) {
        console.log('my product if ')
        updateSuccess(id, amount)
      } else {
        //const res = await api.get(`/products/${id}`);

        //const { data } = res;
        console.log('my product estou no else id: ', id)

        const client = Prismic.client(`${process.env.REACT_APP_PRISMIC_URL}`)
        try {
          const product = await client.query(
            Prismic.Predicates.at('document.id', id),
            {
              lang: '*'
            }
          )

          console.log('my product', product.results[0])
        } catch (error) {
          console.log('Error:', error)
        }
      }
      /*

        const item = { stock: 1, product: data };

        newCart.push({
          itemProduct: {
            ...item,
            stock: 1,
          },
        });

        Cookies.set('@list:product', JSON.stringify(newCart));

        setCart([...newCart]);
      }*/
    },
    [cart]
  )

  const removeProduct = useCallback(async id => {
    const removeCart = cart

    const productIndex = removeCart.findIndex(
      p => p.itemProduct.product.id === id
    )

    if (productIndex >= 0) {
      removeCart.splice(productIndex, 1)
      setCart([...removeCart])
      Cookies.set('@list:product', JSON.stringify(removeCart))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateAmount,
        removeProduct,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCartProduct(): CartContextData {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useProduct mus be used within an CartProduct')
  }

  return context
}




export { CartProduct, useCartProduct }
