<script>
  import { onMount } from 'svelte'
  import P5 from 'p5-svelte'
  import Footer from '../components/Footer.svelte';
  import logo from '../assets/logo.svg'
  import logoDecorated from '../assets/logo-decorated.svg'
  import geulStraight from '../assets/geul-straight.svg'
  import jaStraight from '../assets/ja-straight.svg'
  import jaCurved from '../assets/ja-curved.svg'
  import rangStraight from '../assets/rang-straight.svg'
  import rangCurved from '../assets/rang-curved.svg'

  onMount(() => {
    const stickersContainer = document.getElementById('stickers-container')
    const stickers = document.querySelectorAll('.sticker')

    stickers.forEach((sticker) => {
      sticker.style.position = 'absolute'
      sticker.style.top = `${stickersContainer.offsetTop + Math.random() * (stickersContainer.clientHeight - sticker.clientHeight)}px`
      sticker.style.left = `${(stickersContainer.offsetLeft - sticker.clientWidth / 2) + Math.random() * stickersContainer.clientWidth}px`
    })
  })

  const sketch = (p5) => {
    let logoImg;
    p5.preload = () => {
      logoImg = p5.loadImage(logo)
    }

    p5.setup = () => {
      const container = document.getElementById('container')
      const canvas = p5.createCanvas(container.clientWidth, container.clientHeight)
      canvas.parent('container')

      p5.image(logoImg, 0, 0)
    }

    p5.draw = () => {
      p5.ellipse(p5.width / 2, p5.height / 2, 100, 100);
    }
  }
</script>

<main>
  <section id="container" class="center border-bottom" style="background-color: #F4F4F0;">
    <!-- <img src={logo} alt="" width="auto" height="85%" /> -->
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
  <section class="marquee" style="height: unset; background-color: black; color: white;">
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
  <section id="meanings-container" class="border-bottom center" style="background-color: #FED35D; height: unset;">
    <div class="center meaning">
      <div>글자:랑</div>
      <div>글자와 함께하다</div>
    </div>
    <div class="center meaning">
      <div>글:자랑</div>
      <div>글을 자랑하다</div>
    </div>
  </section>
  <section id="stickers-container" style="height: 460px; background-color: #F4F4F0;">
    <img class="sticker" src={geulStraight} alt="" />
    <img class="sticker" src={jaStraight} alt="" />
    <img class="sticker" src={jaCurved} alt="" />
    <img class="sticker" src={rangStraight} alt="" />
    <img class="sticker" src={rangCurved} alt="" />
  </section>
  <Footer />
</main>
<P5 {sketch} />

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
    height: 160px;
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

  .meaning {
    flex: 1;
    flex-direction: column;
    height: 250px;
  }

  .meaning:first-child {
    border-right: 2px solid black;
  }

  .meaning > div:first-child {
    font-weight: 600;
    font-size: 50px;
  }

  .meaning >div:nth-child(2) {
    font-size: 30px;
  }

  @media (orientation: portrait) {
    #meanings-container {
      flex-direction: column;
    }

    .meaning {
      width: 100%;
      padding: 30px 0px;
    }

    .meaning:first-child {
      border-right: none;
      border-bottom: 2px solid black;
    }
  }
</style>
