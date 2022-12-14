const keywords = [
  { name: '간판', fields: ['글자'] },
  { name: '제목', fields: ['글자'] },
  { name: '자막', fields: ['글자'] },
  { name: '타이틀', fields: ['글자'] },
  { name: '타이포그래피', fields: ['글자'] },
  { name: '그래픽디자인', fields: ['글자'] },
  { name: '판독성', fields: ['글자'] },
  { name: '가독성', fields: ['글자'] },
  { name: '폰트', fields: ['글자'] },
  { name: '로고', fields: ['글자'] },
  { name: '레터링', fields: ['글자'] },
  { name: '특수문자', fields: ['글자'] },
  { name: '문자', fields: ['글자'] },
  { name: '한글', fields: ['글자'] },
  { name: '문자의 구조', fields: ['글자'] },
  { name: '한자', fields: ['글자'] },
  { name: '동남아시아 문자', fields: ['글자'] },
  { name: '다국어', fields: ['글자'] },
  { name: 'CJK', fields: ['글자'] },
  { name: '유럽 문자', fields: ['글자'] },
  { name: '아랍 문자', fields: ['글자'] },
  { name: '비-라틴', fields: ['글자'] },
  { name: '라틴', fields: ['글자'] },

  { name: '타이포그래피 기술 트렌드', fields: ['글자', '기술'] },
  { name: '폰트 엔지니어링', fields: ['글자', '기술'] },
  { name: '폰트 포맷', fields: ['글자', '기술'] },
  { name: '가변 폰트', fields: ['글자', '기술'] },
  { name: '벡터 제어 기술', fields: ['글자', '기술'] },
  { name: '한글 알고리즘', fields: ['글자', '기술'] },
  { name: '새로운 폰트 형식', fields: ['글자', '기술'] },
  { name: '폰트 스펙', fields: ['글자', '기술'] },
  { name: '웹폰트', fields: ['글자', '기술'] },
  { name: '반응형 타이포그래피', fields: ['글자', '기술'] },

  { name: '클라우드', fields: ['기술'] },
  { name: '컴퓨터 그래픽스', fields: ['기술'] },
  { name: '벡터', fields: ['기술'] },
  { name: '웹', fields: ['기술'] },
  { name: '웹 기반', fields: ['기술'] },
  { name: '프론트엔드', fields: ['기술'] },
  { name: '웹 기술', fields: ['기술'] },
  { name: '웹서비스', fields: ['기술'] },
  { name: '모바일 서비스', fields: ['기술'] },
  { name: '딥러닝', fields: ['기술'] },
  { name: 'AI', fields: ['기술'] },
  { name: '이미지 분석', fields: ['기술'] },
  { name: 'NFT', fields: ['기술'] },

  { name: 'UI', fields: ['기술', '사람'] },
  { name: '인터랙션', fields: ['기술', '사람'] },
  { name: '사용자 경험', fields: ['기술', '사람'] },
  { name: '접근성', fields: ['기술', '사람'] },
  { name: '사용성', fields: ['기술', '사람'] },
  { name: '모두를 위한 기술', fields: ['기술', '사람'] },
  { name: '툴', fields: ['기술', '사람'] },
  { name: '도구', fields: ['기술', '사람'] },
  { name: '에디터', fields: ['기술', '사람'] },
  { name: '표준', fields: ['기술', '사람'] },
  { name: '오픈소스 기반', fields: ['기술', '사람'] },
  { name: '저작권', fields: ['기술', '사람'] },
  { name: '커뮤니티', fields: ['기술', '사람'] },
  { name: '집단지성', fields: ['기술', '사람'] },
  { name: '큐레이션', fields: ['기술', '사람'] },
  { name: '플랫폼', fields: ['기술', '사람'] },
  { name: '커스터마이징', fields: ['기술', '사람'] },
  { name: '개인화', fields: ['기술', '사람'] },

  { name: '전문가', fields: ['사람'] },
  { name: '폰트 디자이너', fields: ['사람'] },
  { name: '폰트 디자인 학습자', fields: ['사람'] },
  { name: '그래픽 디자이너', fields: ['사람'] },
  { name: '예비 디자이너', fields: ['사람'] },
  { name: '창작자 집단', fields: ['사람'] },
  { name: '폰트 크리에이터', fields: ['사람'] },
  { name: '한글 학습자', fields: ['사람'] },
  { name: '외국인', fields: ['사람'] },
  { name: '어린이', fields: ['사람'] },
  { name: '웹 UI 디자이너', fields: ['사람'] },
  { name: '마케터', fields: ['사람'] },
  { name: '기획자', fields: ['사람'] },
  { name: '개발자', fields: ['사람'] },
  { name: '폰트 소비자', fields: ['사람'] },
  { name: '대중', fields: ['사람'] },
  { name: '사용자', fields: ['사람'] },
  { name: '사용자 친화적', fields: ['사람'] },

  { name: '문화적 영향력', fields: ['사람', '글자'] },
  { name: '다품종 소량생산', fields: ['사람', '글자'] },
  { name: '서체 디자인 프로세스', fields: ['사람', '글자'] },
  { name: '시각문화', fields: ['사람', '글자'] },
  { name: '심미성', fields: ['사람', '글자'] },
  { name: '한글 서체 트렌드', fields: ['사람', '글자'] },
  { name: '서체 트렌드', fields: ['사람', '글자'] },
  { name: '디자인 트렌드', fields: ['사람', '글자'] },
  { name: '폰트 사용현황', fields: ['사람', '글자'] },
]

 // reference: https://bobbyhadz.com/blog/javascript-check-if-two-arrays-have-same-elements
 function areEqual(array1, array2) {
  if (array1.length === array2.length) {
    return array1.every((element, index) => {
      if (element === array2[index]) {
        return true;
      }

      return false;
    });
  }

  return false;
}

// 색상 지정
keywords.forEach((keyword) => {
  if (areEqual(keyword.fields, ['글자'])) {
    keyword.color = '#A1E2A8'
  } else if (areEqual(keyword.fields, ['글자', '기술'])) {
    keyword.color = '#3AEFEF'
  } else if (areEqual(keyword.fields, ['기술'])) {
    keyword.color = '#829CF6'
  } else if (areEqual(keyword.fields, ['기술', '사람'])) {
    keyword.color = '#BE94E8'
  } else if (areEqual(keyword.fields, ['사람'])) {
    keyword.color = '#F097E3'
  } else if (areEqual(keyword.fields, ['사람', '글자'])) {
    keyword.color = '#F2F25D'
  }
})

export default keywords
