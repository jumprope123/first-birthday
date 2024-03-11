import styles from '../../styles/home/Navigation.module.css'
const Navigation = (): JSX.Element => {
  return (
    <>
      <nav className={styles.navigation}>
        <div>INVITATION</div>
        <div>GALLERY</div>
        <div>LOCATION</div>
      </nav>
    </>
  )
}

export default Navigation
