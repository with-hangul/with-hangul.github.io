import sample from './assets/sample.png'
import hangulhanok from './assets/images/hangulhanok.png'
import koreatypography from './assets/images/koreatypography.png'
import owl from './assets/images/owl.png'
import withhangul from './assets/images/withhangul.png'
import interactive from './assets/images/interactive.png'

const projects = [
  {
    imgURL: withhangul,
    year: 2022,
    title: '글자랑 beta',
    description: '나만의 글자를 쉽고 빠르게 만드는 폰트/레터링 서비스. 벡터 편집, 심볼 생성 및 변환 등을 통해 폰트 파일, 이미지, SVG 등으로 추출 가능',
    note: '*2023년 상반기 베타테스트 오픈 예정',
    tags: ['#폰트편집기', '#한글타이포그래피', '#사용자인터페이스', '#자모공간'],
    link: 'https://with-hangul.notion.site/About-8f65165cb94a4f128a8072eb22ff3338',
  },
  {
    imgURL: owl,
    year: 2022,
    title: '아울(OWL): 웹폰트 병합 서비스',
    description: '오픈소스 폰트파일을 자유롭게 경량화하거나 둘 이상의 폰트파일을 병합하고, 편집한 폰트를 다운로드할 수 있는 웹서비스.',
    note: '*2022년 10월 오픈 베타 테스트 예정',
    tags: ['#오픈소스', '#폰트병합', '#섞어짜기', '#웹폰트', '#WRM'],
    link: 'https://with-hangul.notion.site/OWL-d0e2f20dbb07468ca062c426f7f4da67',
  },
  {
    imgURL: interactive,
    year: 2022,
    title: '인터랙티브 글자 실험',
    description: '웹 프로그래밍을 통해 글자의 벡터 데이터를 활용하여 사용자와 상호작용하는 이미지, 모션 그래픽 사이트를 설계하였다. 커스텀 폰트 디자인의 확장 가능성을 보여준다.',
    note: '',
    tags: ['#javascript', '#generative art', '#p5.js', '#interactive'],
    link: 'https://editor.p5js.org/design.teo.ryu/collections',
  },
  {
    imgURL: koreatypography,
    year: 2020,
    title: '연구논문 : 한글 폰트 디자인 인터페이스',
    description: '한글 자모의 개수는 11,172자로, 한글 디자인은 다른 문자 디자인보다 훨씬 많은 시간과 노력이 필요하다. 본 연구에서는 한글만이 갖는 고유한 조합 방식을 고려한 폰트 제작 방식을 제안한다. (한글타이포그라피학회지 글짜씨 19 논문 게재)',
    note: '',
    tags: ['#폰트편집기', '#한글타이포그래피', '#사용자인터페이스', '#자모공간'],
    link: 'http://koreantypography.org/ko/paper/paper_view.asp?paper_seq=109&key=title&keyWord=&sh_paper_gb=&page=1',
  },
  {
    imgURL: hangulhanok,
    year: 2018,
    title: '남산골한옥마을 전시프로젝트 : 한옥한글',
    description: '남산골한옥마을에서 전환이 무궁한 ‘한글’과 우리 전통의 ‘한옥’의 어울림을 현대의 작가들이 자신이 해석한 결과물로 선보인다. 전시 작가로 참여',
    note: '',
    tags: ['#폰트편집기', '#한글타이포그래피', '#사용자인터페이스', '#자모공간'],
    link: 'https://www.hanokmaeul.or.kr/ko/h/exh/%ED%95%9C%EC%98%A5%ED%95%9C%EA%B8%80',
  },
]

export default projects
