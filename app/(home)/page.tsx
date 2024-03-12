'use client'
import styles from '../../styles/home/page.module.css'
import Snowfall from 'react-snowfall'
import cherryBlossomsImage from '../../public/cherryBlossoms.png'
import { useEffect, useState } from 'react'
import Invitation from '@/components/home/Invitation'
import Calender from '@/components/home/Calender'
import HeaderAndImage from '@/components/home/HeaderAndImage'
import Navigation from '@/components/home/Navigation'
import Gallery from '@/components/home/Gallery'
import Location from '@/components/home/Loaction'

export default function Home(): JSX.Element {
  const [images, setImages] = useState<HTMLImageElement[]>([])

  useEffect(() => {
    const snowflake1 = document.createElement('img')
    snowflake1.src = cherryBlossomsImage.src
    snowflake1.onload = () => {
      setImages([snowflake1])
    }
    return () => {
      snowflake1.onload = null
    }
  }, [])

  return (
    <main className={styles.container}>
      <Snowfall
        images={images}
        radius={[15, 20]}
        snowflakeCount={10}
        style={{ position: 'fixed', pointerEvents: 'none' }}
      />
      <div className={styles.wrapper}>
        <HeaderAndImage />
        <Navigation />
        <p className={styles.title} id="invitation">
          INVITAION
        </p>
        <Invitation />
        <Calender />
        <p className={styles.title} id="gallery">
          GALLERY
        </p>
        <Gallery />
        <p className={styles.title} id="location">
          LOCATION
        </p>
        <Location />
      </div>
    </main>
  )
}
