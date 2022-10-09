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

  .description {
    height: 200px;
    font-size: 40px;
    width: 100%;
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
