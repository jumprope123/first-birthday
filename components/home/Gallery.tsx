'use client'
import styles from '../../styles/home/Gallery.module.css'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../../styles/home/react-image-gallery.css'
import { useEffect, useState } from 'react'
import Ichan1 from '../../public/gallery/Ichan1.jpg'
import Ichan2 from '../../public/gallery/Ichan2.jpg'
import Ichan3 from '../../public/gallery/Ichan3.jpg'
import Ichan4 from '../../public/gallery/Ichan4.jpg'
import Ichan5 from '../../public/gallery/Ichan5.jpg'
import Ichan6 from '../../public/gallery/Ichan6.jpg'

const imageArray = [Ichan1, Ichan2, Ichan3, Ichan4, Ichan5, Ichan6]

const Gallery = (): JSX.Element => {
  const [images, setImages] = useState<any[]>([])

  useEffect(() => {
    void (async () => {
      await makeImage()
    })()
  }, [])

  const makeImage = async (): Promise<any> => {
    const loadedImagesArray = await Promise.all(
      imageArray.map(async (src) => {
        const image = new Image()
        image.src = src.src
        await new Promise((resolve) => {
          image.onload = resolve
        })
        return {
          original: image.src
        }
      })
    )
    setImages(loadedImagesArray)
  }

  return (
    <div className={styles.wrapper}>
      <ImageGallery items={images} />
      <p className={styles.footer}>양 옆으로 스크롤하면 이찬이가 보여요!</p>
    </div>
  )
}

export default Gallery
