import styles from '../../styles/home/HeaderAndImage.module.css'
import babyIchan from '../../public/babyIchan-removebg.png'
const HeaderAndImage = (): JSX.Element => {
  return (
    <>
      <h1 className={styles.gugiFont}>1st Birthday</h1>
      <h2 className={styles.subHeader1}>어느덧 1년, 그 특별한 날</h2>
      <h2 className={styles.subHeader2}>
        소중한 분들과 함께 기쁨을 나누고 싶습니다.
      </h2>
      <img className={styles.ichanImg} src={babyIchan.src} />
      <h1 className={styles.name}>신이찬 첫돌</h1>
      <div className={styles.parents}>
        <h3>아빠</h3>
        <h4>&nbsp;신지환</h4>
        <span>&nbsp;❤️&nbsp;</span>
        <h3>엄마</h3>
        <h4>&nbsp;김유리</h4>
      </div>
      <div className={styles.place}>
        <p>2024년 4월 20일 토요일 오전 11시</p>
        <p>마벨리에 시흥점</p>
      </div>
    </>
  )
}

export default HeaderAndImage
