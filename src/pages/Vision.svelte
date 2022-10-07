<script>
  import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import keywords from '../keywords'

  onMount(() => {
    const keywordsContainer = document.getElementById('keywords-container')
    const keywordTags = document.querySelectorAll('.keyword')

    keywordTags.forEach((tag) => {
      tag.style.position = 'absolute'
      tag.style.top = `${keywordsContainer.offsetTop + Math.random() * (keywordsContainer.clientHeight - tag.clientHeight)}px`
      tag.style.left = `${keywordsContainer.offsetLeft + Math.random() * (keywordsContainer.clientWidth - tag.clientWidth)}px`
    })
  })

  function toggle(e) {
    document.querySelectorAll('.toggle').forEach((el) => {
      // @ts-ignore
      el.children[1].style.display = 'none'
    });
    e.target.nextElementSibling.style.display = 'block'
  }
</script>

<main>
  <section>
    <div class="title">비전</div>
    <div class="content vision">
      <div>
        <div id="vision">누구나 자신의 글자를 만드는 세상</div>
        <div id="vision-description">글자랑의 비전은 전세계인 누구나 자신만의 개성있는 폰트를 창작하고<br />이를 활용할 수 있는 세상을 만드는 것입니다.</div>
      </div>
    </div>
  </section>
  <section>
    <div class="title">관심사</div>
    <div class="content">
      <div class="description center border-bottom">사람, 글자, 기술이라는 세 가지 영역을 중심으로<br />그 교점들에 있는 주제들을 탐구합니다.</div>
    </div>
    <div id="interests-container" class="border-bottom">
      <div class="interest center">사람</div>
      <div class="interest center">글자</div>
      <div class="interest center">기술</div>
    </div>
    <div id="keywords-container" class="border-bottom">
      {#each keywords as keyword (keyword.name)}
        <div class="keyword center" style="background-color: {keyword.color};">{keyword.name}</div>
      {/each}
    </div>
  </section>
  <section>
    <div class="title">일하는 방식</div>
    <div class="content">
      <div class="border-bottom description center">글자랑은 아래와 같은 방식으로<br />생각하고 행동합니다</div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>자발적으로 실험하고 한계에 도전합니다</div>
          <div class="border-bottom center">위의 행동강령에 대한 설명 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되
          </div>
        </div>
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>전문성을 가지고 문제를 해결합니다</div>
          <div class="border-bottom center">위의 행동강령에 대한 설명 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되
          </div>
        </div>
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>오픈소스 기반으로 커뮤니티에 기여합니다</div>
          <div class="border-bottom center">위의 행동강령에 대한 설명 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되
          </div>
        </div>
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>디지털 문자 생태계의 다양성을 추구합니다</div>
          <div class="border-bottom center">위의 행동강령에 대한 설명 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음
            <br />아직 확정되지 않음, 아직 확정되지 않음아직 확정되지 않음아직 확정되지 않음아직 확정되
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
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
    height: 600px;
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
  }

  .description {
    height: 200px;
    font-size: 40px;
    width: 100%;
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
  }

  .toggle-container, .toggle-container div {
    width: 100%;
  }

  .toggle > div:first-child {
    height: 80px;
    font-weight: 700;
    font-size: 50px;
  }

  .toggle > div:nth-child(2) {
    background-color: #F4F4F0;
    font-size: 25px;
    display: none;
  }
</style>
