import React, { useCallback, useEffect, useState } from 'react'

import { Container, ContainerImage, ButtonImage } from './styles'
import Image from 'next/image'
import IProduct from '../../types/product'

interface IImage {
  id: string
  url320x240: string
  url60x50: string
}

interface IImages {
  images: IImage[]
}

interface IProps {
  product: IProduct
}

const ImageTop: React.FC<IProps> = ({ product }) => {

//const ImageTop: React.FC<IImages> = ({ images }) => {

  const [imageSelected, setImageSelected] = useState<IImage>({} as IImage)

  useEffect(() => {
    setImageSelected(product.data.images[0])
  }, [])

  const upDataImageSelected = useCallback(
    image => {
      setImageSelected(image)
    },
    [setImageSelected]
  )

  return (
    <Container>
      <header>
        <article>
          <h1>{product.data.name}</h1>
          <strong>{product.data.name}</strong>
        </article>
      </header>
      <div>
        <ContainerImage url={imageSelected.id}>
          <img src={imageSelected.url320x240} alt={imageSelected.url320x240} />
        </ContainerImage>
        <section>
          {product.data.images.map((image, index) => {
            return (
              <ButtonImage
                key={index}
                type="button"
                url={image.url60x50}
                onClick={() => upDataImageSelected(image)}
              ></ButtonImage>
            )
          })}
        </section>
      </div>
    </Container>
  )
}

export default ImageTop
