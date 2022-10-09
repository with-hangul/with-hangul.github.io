<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import keywords from '../keywords'
  import video from '../assets/videos/screen1280.mp4'

  onMount(() => {

  })
</script>

<main>
  <section>

    <div class="title">비전</div>
    <div class="content vision">
      <video autoplay muted loop id="video-background">
        <source src={video} type="video/mp4">
      </video>
      <div>
        <div id="vision">누구나 자신의 글자를 만드는 세상</div>
        <div id="vision-description">글자랑의 비전은 전세계인 누구나 자신만의 개성있는 폰트를 창작하고<br />이를 활용할 수 있는 세상을 만드는 것입니다.</div>
      </div>
    </div>
  </section>
</main>

<style>
  .title {
    background-color: #AC9AFF;
    height: 160px;
    font-weight: 700;
    font-size: 100px;
    color: black;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content.vision {
    background-color: black;
    color: white;
  }

  .content.vision > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #vision {
    font-weight: 700;
    font-size: 80px;
    margin-bottom: 45px;
  }

  #vision-description {
    font-size: 25px;
    text-align: center;
    margin: 0px;
    padding : 50px;
  }

  .description {
    font-size: 40px;
    width: 100%;
  }
  
  .description p {
 
  }

  #interests-container {
    display: flex;
  }

  .interest {
    flex: 1;
    height: 200px;
    font-weight: 700;
    font-size: 50px;
  }

  .interest:not(:last-child) {
    border-right: 2px solid black;
  }

  #keywords-container {
    height: 920px;
    background-color: #F4F4F0;
  }

  .keyword {
    border-radius: 20px;
    border: 1px solid black;
    padding: 8px 14px;
    overflow: hidden;
    white-space: nowrap;
    background-color: white;
    transition: transform 0.5s;
  }

  .toggle-container, .toggle-container div {
    width: 100%;
  }

  .toggle > div:first-child {
    height: 80px;
    font-weight: 700;
    font-size: 50px;
  }

  .toggle > div:first-child:hover {
    background-color: #FFC8FA;
    cursor: pointer;
  }

  .toggle > div:first-child.selected {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .toggle > div:nth-child(2) {
    background-color: #F4F4F0;
    font-size: 25px;
    display: none;
  }
</style>
