import KakaoMap from './KakaoMap'
import styles from '../../styles/home/Location.module.css'
const Location = (): JSX.Element => {
  return (
    <>
      <KakaoMap />
      <section className={styles.sectionTitle}>
        <h1>서울 금천구 시흥대로 201</h1>
        <h2>금천구청역 1호선에서 (도보15분) 이내</h2>
        <div className={styles.explain}>
          <section>
            <h1>🚌대중교통 이용시🚌</h1>
            <p className={styles.bus}>
              <p>마을</p>
              &nbsp;07, 04, 06, 01-1
            </p>
            <p className={styles.busDetail}>
              금천구종합청사.금천구청역 -&gt; 시흥사거리 하차
            </p>
          </section>
          <section>
            <h1>🚗자가용 이용시🚗</h1>
            <p className={styles.carDetail}>
              네비에 서울시 금천구 시흥대로 201 또는 홈플러스 시흥점 검색
              <p>홈플러스 건물 주차장에 주차 후 7층 마벨리에</p>
            </p>
          </section>
        </div>
      </section>
    </>
  )
}

export default Location
