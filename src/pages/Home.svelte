<script>
  import { onMount } from 'svelte'
  import P5 from 'p5-svelte'
  import Footer from '../components/Footer.svelte';
  import ContactUs from '../components/ContactUs.svelte';
  import HowToWork from '../components/HowToWork.svelte';
  import Keywords from '../components/Keywords.svelte';
  import Vision from '../components/Vision.svelte';
  import Sprite from '../components/Sprite.svelte';

  import logo from '../assets/logo.svg'
  import logoDecorated from '../assets/logo-decorated.svg'

  import geulStraight from '../assets/stickers/geul-straight.svg'
  import geulDigital from '../assets/stickers/geul-digital.svg'
  import jaStraight from '../assets/stickers/ja-straight.svg'
  import jaCurved from '../assets/stickers/ja-curved.svg'
  import rangStraight from '../assets/stickers/rang-straight.svg'
  import rangCurved from '../assets/stickers/rang-curved.svg'

  import dynamicLogo from '../dynamicLogo.js'

  let innerWidth = window.innerWidth;
  onMount(() => {
    const stickersContainer = document.getElementById('stickers-container')
    const stickers = document.querySelectorAll('.sticker')

    stickers.forEach((sticker) => {
      sticker.style.position = 'absolute'
      sticker.style.top = `${stickersContainer.offsetTop + (1 + Math.random()) * (stickersContainer.clientHeight)}px`
      sticker.style.left = `${(stickersContainer.offsetLeft - sticker.clientWidth / 2) + Math.random() * stickersContainer.clientWidth}px`
      sticker.style.transform = `rotate(${Math.floor(-30 + Math.random()*60)}deg)`;
    })

    // Canvas API 사용 예시
    const canvas = document.getElementById('canvas-sample')
    const ctx = canvas.getContext('2d')
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = map(window.innerHeight, 1, 2000, 2, 1500);

    drawLogo(ctx)
    let frame = requestAnimationFrame(drawLogo);
    let interval = setInterval(intervalLogo, 1200)

    console.log(document)
  console.log(document.getElementsByClassName("sticker"))
  dragElement(document.getElementsByClassName("sticker"))
  })


  function intervalLogo() {
    dynamicLogo.types.forEach(type => {
      type.lines.forEach(line => {
        line.setType('straight')
        if(Math.random(1) < 0.2) {line.setType('wave')}
      })
    })
  }

  function drawLogo() {
    const canvas = document.getElementById('canvas-sample')
    const ctx = canvas.getContext('2d')
    function percentX(value) {
      return value.x*ctx.canvas.width/100
    }
    function percentY(value) {
      return value.y*ctx.canvas.height/100
    }
   let frame = requestAnimationFrame(drawLogo);

    ctx.lineWidth = ctx.canvas.width/30;
    ctx.strokeStyle = "black"
    ctx.clearRect(0, 0,   ctx.canvas.width,   ctx.canvas.height)
    dynamicLogo.types.forEach(type => {
      type.lines.forEach(line => {
        line.drawSelf(ctx, frame)
      })
      type.graphics.forEach(graphic => {
        ctx.beginPath()
        ctx.arc(percentX(graphic), percentY(graphic)+ctx.canvas.width/10, ctx.canvas.width/10, 0, Math.PI*2)
        ctx.stroke()
      })
    })
  }

  function canvasResize(ctx) {
    const canvas = document.getElementById('canvas-sample')
    ctx = canvas.getContext('2d')
    ctx.canvas.width  = window.innerWidth;
    if(window.innerWidth < 500) {
      ctx.canvas.height = 250
    } else if (window.innerWidth < 1000) {
      ctx.canvas.height = 500
    } else {
      ctx.canvas.height = 700
    }
  }

  function mousemove(ctx) {
    const canvas = document.getElementById('canvas-sample')
    ctx = canvas.getContext('2d')
  }

  function map(value, inputStart, inputEnd, outputStart, outputEnd) {
      const scale = (outputEnd - outputStart) / (inputEnd - inputStart)
      return value * scale +  (outputStart - inputStart * scale)
  }


  function dragElement(elmnts) {
    console.log(elmnts)
    console.log(typeof elmnts)
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  for(let i = 0; i< elmnts.length; i++) {
    const elmnt = elmnts[i]
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  }

  let target

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

    target = null
    if(e.target.tagName === 'IMG') {
      target = e.target.parentNode
    }
    else if(e.target.tagName === 'DIV') {
      target = e.target
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    target.style.top = (target.offsetTop - pos2) + "px";
    target.style.left = (target.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

  // p5-svelte 사용 예시
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

<svelte:window
  bind:innerWidth
  on:resize={canvasResize}
  />

<main>
  <!-- <div>
    Width: {innerWidth}
  </div> -->
  <canvas id="canvas-sample" class="border-bottom" on:mousemove={mousemove} >이 브라우저는 Javascript Canvas API를 지원하지 않습니다.</canvas>
  <section id="stickers-container" class="border-bottom" style="height: 460px; background-color: #F4F4F0;">
    <div class="title">글자로 디지털 세상을 이롭게</div>
    <div class="description center">
      <p>글자랑은 서체의 디지털화·시스템화·대중화에 대한 솔루션을 고민하는 스타트업입니다. 현재는 UX, 웹개발, 서체 디자인 분야의 전문가가 모여 새로운 웹서비스를 개발하고 있습니다.</p>
    </div>
    <div class="sticker"> <img src={geulStraight} alt="" /> </div>
    <div class="sticker"> <img src={geulDigital} alt="" /> </div>
    <div class="sticker"> <img src={jaStraight} alt="" /> </div>
    <div class="sticker"> <img src={jaCurved} alt="" /> </div>
    <div class="sticker"> <img src={rangStraight} alt="" /> </div>
    <div class="sticker"> <img src={rangCurved} alt="" /> </div>
    <div class="sticker"> <img src={geulStraight} alt="" /> </div>
    <div class="sticker"> <img src={geulDigital} alt="" /> </div>
    <div class="sticker"> <img src={jaStraight} alt="" /> </div>
    <div class="sticker"> <img src={jaCurved} alt="" /> </div>
    <div class="sticker"> <img src={rangStraight} alt="" /> </div>
    <div class="sticker"> <img src={rangCurved} alt="" /> </div>
  </section>

  <!-- <section id="container" class="center border-bottom" style="background-color: #F4F4F0;"> -->
    <!-- <img src={logo} alt="" width="auto" height="85%" /> -->
  <!-- </section> -->
  <Sprite />
  <section class="center border-bottom" style="background-color: #AC9AFF;">
    <div>
      <img src={logoDecorated} alt="" width="286" height="auto" />
      <div style="font-size: 50px; color: white;"><b>새로운 글자</b>를 <b>쉽고, 빠르게</b></div>
    </div>
  </section>

  <Sprite />
  <Vision />
  <Keywords />
  <div class="border-bottom" style="background-color: #BDFF00; height: 80px;"></div>
  <!-- <section class="center border-bottom" style="height: unset;">
    <div class="keyword center">사람</div>
    <div class="keyword center">글자</div>
    <div class="keyword center">기술</div>
  </section> -->
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
  <HowToWork />
  <ContactUs />
  <Footer />
</main>
<!-- <P5 {sketch} /> -->

<style>
  section {
    height: calc(100vh - 50px); /* Header 높이 제외 */
  }


  .title {
    height: 160px;
    font-weight: 700;
    font-size: 60px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description {
    font-size: 40px;
    width: 100%;
  }

  .description p {
    margin: 0px;
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

  .stickers-container {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    border: 1px solid #d3d3d3;
    text-align: center;
  }

  .sticker {
    padding: 10px;
    cursor: move;
    z-index: 10;
    color: #fff;
  }
</style>
