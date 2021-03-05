import React, { useCallback, useEffect, useState } from 'react'

import { Container, ContainerImage, ButtonImage } from './styles'
import Image from 'next/image'

interface IImage {
  id: string
  url320x240: string
  url60x50: string
}

interface IImages {
  images: IImage[]
}

const ImageTop: React.FC<IImages> = ({ images }) => {
  const [imageSelected, setImageSelected] = useState<IImage>({} as IImage)

  useEffect(() => {
    setImageSelected(images[0])
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
          <h1>WOMEN'S RUNNING SHOE </h1>
          <strong>NIKE EPIC REACT FLYKNIT</strong>
          <span>$150</span>
        </article>
      </header>
      <div>
        <ContainerImage url={imageSelected.id}>
          <img src={imageSelected.url320x240} alt={imageSelected.url320x240} />
        </ContainerImage>
        <section>
          {images.map((image, index) => {
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
