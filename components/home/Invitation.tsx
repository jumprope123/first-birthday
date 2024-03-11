import styles from '../../styles/home/Invitation.module.css'
const Invitation = (): JSX.Element => {
  return (
    <>
      <section className={styles.invitationSection}>
        <p>2023년 4월 22일에 태어난 사랑스러운 이찬이가</p>
        <p>무럭무럭 자라 첫 생일을 맞이하였습니다.</p>
        <p>예쁜 아이로 성장할 수 있게 관심을 가져주신 분들께</p>
        <p>감사의 마음을 담아 조촐한 자리를 마련했습니다.</p>
        <p>꼭 참석하셔서 이찬이가 앞으로도 건강하게 자랄 수 있도록</p>
        <p>함께 축복해 주세요</p>
      </section>
    </>
  )
}

export default Invitation
