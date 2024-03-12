import type { Metadata } from 'next'
import '../styles/globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import icon from '../public/Icon.png'

declare global {
  interface Window {
    kakao: any
  }
}

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'] // 또는 preload: false
})

export const metadata: Metadata = {
  title: '이찬이의 첫번째 생일에 초대합니다.',
  description: '신이찬의 돌잔치에 초대합니다.',
  icons: {
    icon: icon.src
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
