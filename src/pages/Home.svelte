<script>
  import logo from '../assets/logo.svg'
  import logoDecorated from '../assets/logo-decorated.svg'
  import Footer from '../components/Footer.svelte';
</script>

<main>
  <section class="center border-bottom" style="background-color: #F4F4F0;">
    <img src={logo} alt="" width="auto" height="85%" />
  </section>
  <section class="center border-bottom" style="background-color: #AC9AFF;">
    <div>
      <img src={logoDecorated} alt="" width="286" height="auto" />
      <div style="font-size: 50px; color: white;"><b>새로운 글자</b>를 <b>쉽고, 빠르게</b></div>
    </div>
  </section>
  <div class="border-bottom" style="background-color: #BDFF00; height: 80px;"></div>
  <section class="center border-bottom" style="height: unset;">
    <div class="keyword center">사람</div>
    <div class="keyword center">글자</div>
    <div class="keyword center">기술</div>
  </section>
  <section class="marquee" style="height: 160px; background-color: black; color: white;">
    <div class="marquee-content">
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
    </div>
    <div class="marquee-content">
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
      <span>글자랑</span>
    </div>
  </section>
  <section id="sixth">
    <div>
      <div>글자:랑</div>
      <div>글자와 함께하다</div>
    </div>
    <div>
      <div>글:자랑</div>
      <div>글을 자랑하다</div>
    </div>
  </section>
  <section id="seventh"></section>
  <Footer />
</main>

<style>
  section {
    height: calc(100vh - 50px); /* Header 높이 제외 */
  }

  .keyword {
    flex: 1;
    height: 200px;
    font-weight: 700;
    font-size: 100px;
  }

  .keyword:not(:last-child) {
    border-right: 2px solid black;
  }

  .marquee {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .marquee-content {
    height: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    animation-name: marquee-content;
    animation-duration: 12s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .marquee-content > span {
    font-weight: 700;
    font-size: 100px;
  }

  @keyframes marquee-content {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>
