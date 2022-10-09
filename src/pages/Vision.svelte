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

  function highlight(e) {
    const keyword = e.target
    const fields = keyword.dataset.fields.split(',')

    keyword.style.backgroundColor = keyword.dataset.color
    document.querySelectorAll('.interest').forEach((interest) => {
      if (fields.includes(interest.textContent)) interest.style.backgroundColor = keyword.style.backgroundColor
    })
  }

  function removeHighlight(e) {
    const keyword = e.target

    keyword.style.backgroundColor = 'white'
    document.querySelectorAll('.interest').forEach((interest) => {
      interest.style.backgroundColor = 'white'
    })
  }

  function toggle(e) {
    if (e.target.classList.contains('selected')) {
      // 그냥 classList 더했다 뺐다 해서 스타일이 자동으로 적용되게 할 수 있는데 스벨트에서는 그게 안 먹히는 듯...ㅠㅠ 일단 이렇게 냅둠
      e.target.classList.remove('selected')
      e.target.style.backgroundColor = 'white'
      e.target.style.color = 'black'
      e.target.nextElementSibling.style.display = 'none'
      return
    }

    document.querySelectorAll('.toggle').forEach((el) => {
      el.children[0].style.backgroundColor = 'white'
      el.children[0].style.color = 'black'
      el.children[1].style.display = 'none'
    });
    e.target.classList.add('selected')
    e.target.style.backgroundColor = 'black'
    e.target.style.color = 'white'
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
        <div
          class="keyword center"
          data-color={keyword.color}
          data-fields={keyword.fields}
          on:mouseenter={highlight}
          on:mouseleave={removeHighlight}
          on:touchstart={highlight}
          on:touchend={removeHighlight}
        >
          {keyword.name}
        </div>
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
          <div class="border-bottom center script">
            우리는 우리가 원하는 것, 좋아하는 것을 자발적으로 찾아내고 그 분야가 가진 기존의 관점을 탈피하여 새로운 방식으로 접근합니다. 한 번의 시도에 그치지 않고 끊임없이 도전하여 한계를 넘어서려고 합니다. 실패라는 것은 없습니다. 성장이 있을 뿐입니다.
          </div>
        </div>
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>전문성을 가지고 문제를 해결합니다</div>
          <div class="border-bottom center script">
            문제를 해결하기 위해서는 전문성이 필요하다고 믿습니다. 우리가 관심 두는 것들에 대해서 인류가 지금까지 쌓아온 것들을 습득하고 사람들이 고민하는 것 이상으로 더 많이 고민하여 사람들에게 진정으로 가치를 주는 해결책을 도출하겠습니다.
          </div>
        </div>
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>오픈소스 기반으로 커뮤니티에 기여합니다</div>
          <div class="border-bottom center script">
            웹 창시자 Tim Berners-Lee는 ‘웹의 정신은 공개와 공유’라고 했습니다. 우리는 많은 사람이 함께 기여할 수 있는 집단지성의 가치를 믿습니다. 그리고 우리가 이뤄가는 것들에 대해서 함께 나누고 같이 발전하려고 합니다.
          </div>
        </div>
        <div class="toggle">
          <div class="border-bottom center" on:click={toggle}>디지털 문자 생태계의 다양성을 추구합니다</div>
          <div class="border-bottom center script">
            생물 다양성이 생태계를 위해 중요한 것처럼, 문화와 언어의 다양성은 인류를 위해 중요한 문제입니다. 따라서 우리는 라틴 중심의 문자 문화로 획일화되는 것을 경계하며 개성 있는 타이포그래피 시도들이 세상에 등장하는 것을 추구합니다
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
