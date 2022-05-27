const data = [
  {
    num: 3,
    name: "마더텅 수능 기출문제집 국어 독서(2022)2023 대비",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/126/x9791162727126.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "어렵다",
  },
  {
    num: 4,
    name: "마더텅 수능기출문제집 국어 문학(2022)(2023 수능대비)",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/373/x9791162729373.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 5,
    name: "상상국어 N제 언어와 매체(2022) 2023 대비",
    imgSrc:
      "https://bimage.interpark.com/partner/goods_image/9/3/3/7/354469337g.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 6,
    name: "상상국어 N제 화법과 작문(2022) 2023 대비",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/233/x9791161123233.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 7,
    name: "윤혜정의 개념의 나비효과 수능국어개념(2022) (2023대비)",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/380/x9788954762380.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 8,
    name: "마르고 닳도록 1",
    imgSrc:
      "https://image.aladin.co.kr/product/22214/25/cover500/scm3058848427082.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 9,
    name: "숨마쿰라우데 국어 독서강화 과학기술",
    imgSrc:
      "https://image.yes24.com/momo/TopCate988/MidCate006/98750493(1).jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 10,
    name: "매3비 매일 지문 3개씩 푸는 비문학 독서 수능 기출",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/207/x9791165261207.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 11,
    name: "디딤돌 국어 고등 문제로 국어문법",
    imgSrc: "https://image.yes24.com/goods/104429147/XL",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 12,
    name: "능률 EBS 수능특강 변형 문제 508제 독서",
    imgSrc: "https://image.yes24.com/goods/108550174/XL",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 13,
    name: "마더텅 수능 기출문제집 국어 화법과작문(2022)2023 대비",
    imgSrc: "https://image.yes24.com/goods/105488493/XL",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 14,
    name: "자이스토리 수능 국어 문학 실전(2022)(2023수능대비):수능기출문제집",
    imgSrc:
      "https://image.aladin.co.kr/product/28428/27/cover/k922835411_1.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 15,
    name: "자이스토리 수능 국어 독서 실전(2022)(2023수능대비):수능기출문제집",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/396/x9791162403396.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 16,
    name: "EBS 수능특강 국어영역 문학(2022)(2023수능대비)",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/939/x9788954762939.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 17,
    name: "씨뮬 10th 유형+씨뮬 고3 국어 문학 수능 기출 문제집(2022)(2023 대비) : 24일의 기적! 유형도 실전처럼",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/807/x9791166080807.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 18,
    name: "매3문: 매일 지문 3개씩 푸는 문학 수능 기출(2022)(2023 대비): 수능 국어 영역 문학 대비",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/214/x9791165261214.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },

  {
    num: 19,
    name: "메가스터디 EBS 분석노트 국어영역 문학 고전 문학 + 현대 문학(2022) (2023 수능대비)",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/178/x9791129707178.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },

  {
    num: 20,
    name: "P.I.R.A.M(피램) 수능 국어 생각의 전개 문학 1(2023)",
    imgSrc:
      "https://image.aladin.co.kr/product/28738/62/cover500/k342836785_1.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 21,
    name: "P.I.R.A.M(피램) 수능 국어 생각의 전개 독서 1(2023)",
    imgSrc:
      "https://bimage.interpark.com/partner/goods_image/4/8/2/1/354484821g.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
  {
    num: 22,
    name: "Full수록(풀수록) 고등 국어 독서 수능기출문제집(2022)(2023 수능대비)",
    imgSrc:
      "http://image.kyobobook.co.kr/images/book/xlarge/877/x9791166096877.jpg",
    subject: "국어",
    compare: "비슷한",
    level: "쉽다",
  },
];

export default data;

// {
//   num: 1,
//   name: "마더텅 ,.,.,.1,s",
//   imgSrc: "../img/bookBible.png",
//   subject: "수학",
//   compare: "비슷한",
//   level: "쉽다",
// },
