/* eslint-disable one-var */
'use client'
import { useEffect } from 'react'
import styles from '../../styles/home/Location.module.css'
const Location = (): JSX.Element => {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`
    document.head.appendChild(kakaoMapScript)

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(37.451973, 126.900731),
          level: 3
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new window.kakao.maps.Map(container, options)

        // 마커 생성
        const imageSrc =
            'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new window.kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(37.451973, 126.900731) // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage // 마커이미지 설정
        })

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)
      })
    }

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div id={'map'} className={styles.map}></div>
      </div>
    </>
  )
}

export default Location
