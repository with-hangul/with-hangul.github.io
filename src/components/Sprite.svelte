<script>
  import { onMount } from 'svelte'
  import P5 from 'p5-svelte'
  import Footer from '../components/Footer.svelte';
  import ContactUs from '../components/ContactUs.svelte';
  import HowToWork from '../components/HowToWork.svelte';
  import Keywords from '../components/Keywords.svelte';
  import Vision from '../components/Vision.svelte';
  
  import logo from '../assets/logo.svg'
  import logoDecorated from '../assets/logo-decorated.svg'

  import geulStraight from '../assets/stickers/geul-straight.svg'
  import geulDigital from '../assets/stickers/geul-digital.svg'
  import jaStraight from '../assets/stickers/ja-straight.svg'
  import jaCurved from '../assets/stickers/ja-curved.svg'
  import rangStraight from '../assets/stickers/rang-straight.svg'
  import rangCurved from '../assets/stickers/rang-curved.svg'

  import dynamicLogo from '../dynamicLogo.js'

  onMount(() => {

  })
</script>

<main>
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
</main>
<!-- <P5 {sketch} /> -->

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
