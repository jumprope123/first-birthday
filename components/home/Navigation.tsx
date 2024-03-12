'use client'
import styles from '../../styles/home/Navigation.module.css'
const Navigation = (): JSX.Element => {
  const scrollToTarget = (id: string): void => {
    window.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <nav className={styles.navigation}>
        <div
          onClick={() => {
            scrollToTarget('invitation')
          }}
        >
          INVITATION
        </div>
        <div
          onClick={() => {
            scrollToTarget('gallery')
          }}
        >
          GALLERY
        </div>
        <div
          onClick={() => {
            scrollToTarget('location')
          }}
        >
          LOCATION
        </div>
      </nav>
    </>
  )
}

export default Navigation
