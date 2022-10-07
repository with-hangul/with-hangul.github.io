<script>
  import Footer from '../components/Footer.svelte';
  import BusinessCard from '../components/BusinessCard.svelte';
  import businesses from '../businesses';
</script>

<main>
  <section id="about">
    <!-- h1, h2 이런 거 쓰고 싶은데 어떻게 써야 할지 고민됨... -->
    <div class="subheading">About</div>
    <div class="heading">글자로 디지털 세상을 이롭게</div>
    <p>글자랑은 서체의 디지털화·시스템화·대중화에 대한 솔루션을 고민하는 스타트업입니다. 현재는 UX, 웹개발, 서체 디자인 분야의 전문가가 모여 새로운 웹서비스를 개발하고 있습니다.
      <br /><br />
      한글 서체 창작자와 사용자들이 오늘날의 디지털 타이포그래피 환경에서 겪는 크고 작은 불편들을 해결하고, 창작자의 워크플로우와 밀접한 서체 솔루션을 만듭니다.</p>
  </section>
  <section id="history">
    <div class="subheading">History</div>
    <div class="heading">디자인과 기술의 만남</div>
    <p>이 아이디어는 한글타이포학교의 활자 디자인 과정 수강생의 작은 게으름에서 출발했습니다. 서울대학교 웹 개발 동아리 ‘멋쟁이 사자처럼’에서 첫 아이디어 피칭을 시작으로, 글자에 관심을 가진 사람들이 모였습니다.
      <br /><br />
      작지만 강한 아이디어가 서비스로 거듭날 수 있도록 2022년 글자랑은 기업의 형태로 탈바꿈합니다. 이제 새로운 사업 기회에 도전하며, 폰트 창작자들의 생존도 보장할 수 있는 팀으로 거듭나겠습니다.</p>
  </section>
  <section id="business">
    <div class="subheading">Business</div>
    <div class="heading">글자랑에게 요청하세요</div>
    <div class="cards-container">
      {#each businesses as business (business.title)}
        <BusinessCard title={business.title} description={business.description} tags={business.tags} imgURL={business.imgURL} />
      {/each}
    </div>
  </section>
  <section id="contact-us">
    <div class="subheading">Contact us</div>
    <div class="cards-container">
      <div class="card">
        <div class="heading">​​​​​​​프로젝트 의뢰는<br />아래의 이메일로</div>
        <p>협업 제안, 리서치 의뢰, 투자 제안 등<br />주저하지 말고 두드려주세요.</p>
        <a href="mailto:with.hangul@gmail.com">with.hangul@gmail.com</a>
      </div>
      <div class="card">
        <div class="heading">가벼운 얘기라면<br />채팅도 좋아요</div>
        <p>서비스에 대한 피드백이나 문의<br />무엇이든 편하게 연락주세요.</p>
        <a href="https://open.kakao.com/o/seBw5jGe">open.kakao.com/o/seBw5jGe</a>
      </div>
    </div>
  </section>
  <Footer />
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

  #about {
    background-color: black;
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

  #contact-us a {
    color: white;
  }

  #contact-us .cards-container {
    display: flex;
  }

  #contact-us .card {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
