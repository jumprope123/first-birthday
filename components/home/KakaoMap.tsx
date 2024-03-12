/* eslint-disable one-var */
'use client'
import { useEffect } from 'react'
import styles from '../../styles/home/KakaoMap.module.css'
import '../../styles/home/kakaoMap.css'
import Ichanhead from '../../public/IchanMarker-removebg.png'
const KakaoMap = (): JSX.Element => {
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
          level: 5,
          disableDoubleClickZoom: true
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new window.kakao.maps.Map(container, options)

        // 마커 생성
        const imageSrc = Ichanhead.src,
          imageSize = new window.kakao.maps.Size(69, 69), // 마커이미지의 크기입니다
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

        // 움직임 봉쇄
        map.setDraggable(false)
        map.setZoomable(false)

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)

        // 마커 클릭 이벤트 추가
        window.kakao.maps.event.addListener(marker, 'click', function () {
          window.open('https://map.kakao.com/link/map/598016577')
        })

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        const content =
          '<div class="customoverlay">' +
          '  <a href="https://map.kakao.com/link/map/598016577" target="_blank">' +
          '    <span class="title">마벨리에 시흥점</span>' +
          '  </a>' +
          '</div>'

        // 커스텀 오버레이가 표시될 위치입니다
        const position = new window.kakao.maps.LatLng(37.451973, 126.900731)

        // 커스텀 오버레이를 생성합니다
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 1
        })
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

export default KakaoMap
