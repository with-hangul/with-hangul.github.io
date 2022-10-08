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
  import dynamicLogo from '../dynamicLogo.js'

  let innerWidth = window.innerWidth;
  onMount(() => {
    const stickersContainer = document.getElementById('stickers-container')
    const stickers = document.querySelectorAll('.sticker')

    stickers.forEach((sticker) => {
      sticker.style.position = 'absolute'
      sticker.style.top = `${stickersContainer.offsetTop + Math.random() * (stickersContainer.clientHeight - sticker.clientHeight)}px`
      sticker.style.left = `${(stickersContainer.offsetLeft - sticker.clientWidth / 2) + Math.random() * stickersContainer.clientWidth}px`
    })

    // Canvas API 사용 예시
    const canvas = document.getElementById('canvas-sample')
    const ctx = canvas.getContext('2d')
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = map(window.innerHeight, 1, 2000, 2, 1500);

    drawLogo(ctx)
    // 2:1 사이즈부터 ~ 900 // 1:2 사이즈로 할까?
    let frame = requestAnimationFrame(loop);

    function loop(t) {
      frame = requestAnimationFrame(loop);
      // ctx.fillRect(0, 0, frame, 80)
    }
  })



  function drawLogo(ctx) {
    function percentX(value) {
      return value.x*ctx.canvas.width/100
    }
    function percentY(value) {
      return value.y*ctx.canvas.height/100
    }

    function sinLine(ctx, points) {
      const p1 = points[0]
      const p2 = points[1]
      function getAtan2(dotA, dotB) {
        return Math.atan2(
          dotB.y - dotA.y,
          dotB.x - dotA.x
        )
      }

      const angle = getAtan2(p1, p2)
      const cnt = 40
      const size = 5
      const ax = percentX(p1)
      const bx = percentX(p2)
      const ay = percentY(p1)
      const by = percentY(p2)
      // 0 - 100
      // 1 - 99
      ctx.moveTo(percentX(p1), percentY(p1))
      ctx.beginPath()
      for(let i = 1; i < cnt; i++) {
        console.log(angle, Math.sin(angle), Math.cos(angle))
        ctx.lineTo(
          (ax*(i/cnt)+bx*(cnt-i)/cnt) + Math.cos(angle) * size, 
          (ay*(i/cnt)+by*(cnt-i)/cnt) + Math.sin(angle) * size
        )
      }
      ctx.stroke()
    }
    ctx.lineWidth = ctx.canvas.width/30;
    ctx.strokeStyle = "black"

    // height/2 + amplitude * Math.sin(x/frequency);
    
    dynamicLogo.types.forEach(type => {
      type.lines.forEach(line => {
        ctx.beginPath()
        // for(let i = 0; i < line.points.length; i++) {
        //   const point = line.points[i]
        //   if(i === 0) ctx.moveTo(percentX(point), percentY(point))
        //   else ctx.lineTo(percentX(point), percentY(point))
        // }
        sinLine(ctx, line.points)
        ctx.stroke()
      })
      type.graphics.forEach(graphic => {
        console.log(percentX(graphic), percentY(graphic))
        ctx.beginPath()
        ctx.arc(percentX(graphic), percentY(graphic)+ctx.canvas.width/10, ctx.canvas.width/10, 0, Math.PI*2)
        ctx.stroke()
        //ctx.fill()
      })
    })
  }


  function canvasResize(ctx) {

    const canvas = document.getElementById('canvas-sample')
    ctx = canvas.getContext('2d')
    ctx.canvas.width  = window.innerWidth;
    // canvas.height = map(window.innerWidth, 1, 2000, 2, 1000);
    if(window.innerWidth < 500) {
      ctx.canvas.height = 250
    } else if (window.innerWidth < 1000) {
      ctx.canvas.height = 500
    } else {
      ctx.canvas.height = 700
    }
    

    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    drawLogo(ctx)
  
    console.log("resize")
  }

  function mousemove(ctx) {
    const canvas = document.getElementById('canvas-sample')
    ctx = canvas.getContext('2d')
    // ctx.fillRect(0, 0, 300, 280)
    console.log("mousemove")
  }

  function map(value, inputStart, inputEnd, outputStart, outputEnd) {
      const scale = (outputEnd - outputStart) / (inputEnd - inputStart) 
      return value * scale +  (outputStart - inputStart * scale)            
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
  <div>
    Width: {innerWidth}
  </div>
  <canvas id="canvas-sample" on:mousemove={mousemove} >이 브라우저는 Javascript Canvas API를 지원하지 않습니다.</canvas>
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
