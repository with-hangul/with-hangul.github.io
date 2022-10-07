<div id="history" class="center">
  <!-- 이런 그래프를 뭐라고 부르더라....?? -->
  <div class="leaves left">
    <div class="leaf">
      <div class="year">2018</div>
      <div class="title">학내 해커톤 1위</div>
      <div class="description">서울대학교 웹 개발 동아리<br />'멋쟁이 사자처럼' 6기</div>
    </div>
    <div class="leaf"></div>
    <div class="leaf">
      <div class="year">2019</div>
      <div class="title">글자랑 데모 영상 공개</div>
    </div>
    <div class="leaf"></div>
    <div class="leaf">
      <div class="year">2022</div>
      <div class="title">예비창업패키지 선정</div>
      <div class="description">주관 : 세종창조경제혁신센터</div>
    </div>
    <div class="leaf"></div>
    <div class="leaf">
      <div class="title">아울 OWL 오픈 베타테스트 (예정)</div>
      <div class="description">웹 폰트 병합 서비스</div>
    </div>
  </div>
  <div class="stem"></div>
  <div class="leaves right">
    <div class="leaf"></div>
    <div class="leaf">
      <div class="title">전시 참여 &lt;한옥한글&gt;</div>
      <div class="description">남산골한옥마을 기획전</div>
    </div>
    <div class="leaf"></div>
    <div class="leaf">
      <div class="year">2020</div>
      <div class="title">학회지 논문 게재</div>
      <div class="description">한글타이포그라피학회<br />한글 폰트 디자인 인터페이스</div>
    </div>
    <div class="leaf"></div>
    <div class="leaf">
      <div class="title">3, 2, wrm, Action!</div>
      <div class="description">프로젝트 선정<br />후원사 : wrm</div>
    </div>
    <div class="leaf"></div>
  </div>
</div>

<style>
  #history {
    display: grid;
    grid-template-columns: 1fr 10px 1fr;
    grid-template-rows: repeat(7);
    column-gap: 10px;
  }

  .stem {
    width: 10px;
    height: 100%;
    background-color: #673EFF;
  }

  .leaves.left .leaf * {
    text-align: right;
  }

  .leaves.right .leaf * {
    text-align: left;
  }

  .leaf {
    height: 100px;
  }

  .leaf .year {
    font-size: 25px;
    font-weight: 700;
    color: #673EFF;
  }

  .leaf .title {
    font-size: 25px;
    font-weight: 700;
    color: black;
  }

  .leaf .description {
    font-size: 25px;
    color: black;
  }
</style>
