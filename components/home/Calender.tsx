import styles from '../../styles/home/Calender.module.css'
import heart from '../../public/emptyHeart-removebg.png'

const Calender = (): JSX.Element => {
  return (
    <>
      <section className={styles.calenderSection}>
        <header>2024년 4월</header>
        <article className={styles.articleCalender}>
          {['월', '화', '수', '목', '금', '토', '일'].map((item) => (
            <section
              className={styles.yoil}
              key={item}
              style={{
                color:
                  item === '토' ? 'blue' : item === '일' ? 'red' : 'inherit'
              }}
            >
              {item}
            </section>
          ))}
          {new Array(30).fill(1).map((date, index) =>
            index === 19 ? (
              <div key={index + 1} className={styles.heartWrapper}>
                <img className={styles.heartImage} src={heart.src}></img>
                <div>{index + 1}</div>
                <span>돌잔치</span>
              </div>
            ) : (
              <div key={index + 1}>{index + 1}</div>
            )
          )}
        </article>
      </section>
    </>
  )
}

export default Calender
