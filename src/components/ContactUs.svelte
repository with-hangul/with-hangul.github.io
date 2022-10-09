<script>
  import Footer from '../components/Footer.svelte';
  import History from '../components/History.svelte';
  import BusinessCard from '../components/BusinessCard.svelte';
  import businesses from '../businesses';
  import video from '../assets/videos/screen1280.mp4'
  import LinkButton from '../components/LinkButton.svelte';
</script>

<main>
  <section id="contact-us">
    <div class="subheading">Contact us</div>
    <div class="cards-container">
      <div class="card">
        <div class="heading">​​​​​​​프로젝트 의뢰는<br />아래의 이메일로</div>
        <p>협업 제안, 리서치 의뢰, 투자 제안 등<br />주저하지 말고 두드려주세요.</p>
        <LinkButton link="mailto:with.hangul@gmail.com" text="메일 보내기" isDark={true} />
      </div>
      <div class="card">
        <div class="heading">가벼운 얘기라면<br />채팅도 좋아요</div>
        <p>서비스에 대한 피드백이나 문의<br />무엇이든 편하게 연락주세요.</p>
        <LinkButton link="https://open.kakao.com/o/seBw5jGe" text="카카오톡 1:1 대화" isDark={true} />
      </div>
    </div>
  </section>
</main>

<style>
  * {
    text-align: start;
  }

  .subheading {
    font-weight: 500;
    font-size: 25px;
  }

  .heading {
    font-weight: 500;
    font-size: 50px;
  }

  p {
    font-weight: 500;
    font-size: 22px;
    margin: 0px;
  }

  #video-background {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
  }

  #about {
    padding-top: 122px;
    padding-bottom: 164px;
    padding-left: 83px;
  }

  #about .subheading {
    color: #888888;
    margin-bottom: 5px;
  }

  #about .heading {
    color: white;
    margin-bottom: 59px;
  }

  #about p {
    color: #BBBBBB;
    width: 800px;
  }

  #history {
    background-color: white;
    padding-top: 102px;
    padding-bottom: 184px;
    padding-left: 83px;
    padding-right: 83px;
  }

  #history .subheading {
    color: #555555;
    margin-bottom: 8px;
  }

  #history .heading {
    color: black;
    margin-bottom: 62px;
  }

  #history p {
    color: black;
    width: 800px;
    margin-bottom: 145px;
  }

  #business {
    background-color: #FFC8FA;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #business .subheading {
    color: black;
    margin-bottom: 5px;
  }

  #business .heading {
    color: black;
    margin-bottom: 80px;
  }

  #business .cards-container {
    border: 2px solid black;
    border-bottom: none;
    margin-left: 48px;
    margin-right: 48px;
    margin-bottom: 64px;
  }

  #contact-us {
    background-color: black;
    padding-top: 58px;
    padding-left: 83px;
    padding-bottom: 140px;
  }

  #contact-us .subheading {
    color: #888888;
    margin-bottom: 70px;
  }

  #contact-us .heading {
    color: white;
    margin-bottom: 39px;
  }

  #contact-us p {
    color: white;
    margin-bottom: 20px;
  }

  #contact-us .cards-container {
    display: flex;
  }

  #contact-us .card {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
</style>
