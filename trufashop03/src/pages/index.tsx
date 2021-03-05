import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Prismic from 'prismic-javascript'
import uuid from '@kuoruan/uuidv4'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import MyHome from '../components/Home'
import IProduct from '../types/product'

interface ProductProps {
  products: IProduct[]
}

const Home: React.FC<ProductProps> = ({ products }) => {

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <MyHome products={products} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = Prismic.client(`${process.env.REACT_APP_PRISMIC_URL}`)

  const products = await client.query(
    Prismic.Predicates.at('document.type', 'product')
  )

  const data = products.results.map(item => {
    const images = item.data.images.map(image => {
      return [
        {
          id: uuid(),
          url320x240: image.image01.url,
          url60x50: image.image01.image01.url
        },
        {
          id: uuid(),
          url320x240: image.image02.url,
          url60x50: image.image02.image02.url
        },

        {
          id: uuid(),
          url320x240: image.image03.url,
          url60x50: image.image03.image03.url
        },
        {
          id: uuid(),
          url320x240: image.image04.url,
          url60x50: image.image04.image04.url
        }
      ]
    })

    return {
      id: item.id,
      data: { ...item.data, images: [...images[0]] }
    }
  })

  return {
    props: {
      products: data
    }
  }
}
export default Home
