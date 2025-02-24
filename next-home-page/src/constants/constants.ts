import {
  CareerInfo,
  linkInfo,
  ProjectDetail,
  ProjectInfo,
  SkillList
} from '@/types/common'

export const INTRO_SECTION_PAGE_HEIGHT = 7400
export const HEADER_HEIGHT = 74
export const MOTION_OFFSET = {
  WELCOME_CONTAINER_SCALE: [0, 900],
  WELCOME_MAIN_TITLE_OPACITY: [700, 900],
  WELCOME_SUB_TITLE_OPACITY: [500, 700],
  JOKE_MAIN_TITLE_OPACITY: [1400, 2400],
  JOKE_SUB_TITLE_OPACITY: [1400, 2400],
  JOKE_MAIN_TITLE_TRANSLATE_Y: [1000, 1400],
  JOKE_CONTAINER_HOLDUP_Y: 7400,
  READ_MORE_BUTTON_OPACITY: [2800, 3000],
  READ_MORE_BUTTON_TRANSLATE_Y: [2800, 3000]
}

const projectListGX: ProjectDetail[] = [
  {
    title: '학생을 위한 문해력 향상 AI 사이트',
    date: '2024.04 - 2024.08',
    abstract:
      '학원의 AI 활용에 대한 요구사항 검증을 목표로, 학생들의 문해력 향상을 위한 웹 기반 학습 플랫폼을 개발했습니다. 본 프로젝트는 디자인 및 학원 관련자 미팅, 인프라 구축을 제외한 모든 개발 과정을 주도적으로 수행하였습니다.',
    stackList: [
      '프론트엔드: Next.js, shadcn/ui',
      '백엔드: Nest.js, Prisma, langchain.js, chroma db, MySQL, Azure'
    ],
    features: [
      '문제 풀이 화면: 학생들이 직관적인 인터페이스를 통해 문제를 풀고 답변을 제출할 수 있는 환경을 구축했습니다.',
      '지문 생성: 학생들의 문해력 향상을 위해 다양한 지문 파일을 읽고, 이를 바탕으로 맞춤형 문해력 학습 지문을 생성하는 기능을 개발했습니다.',
      '답변 평가: 학생들의 답변을 정확하게 평가하고, 개별 피드백을 제공하여 학습 효과를 높였습니다.',
      '모범 답안 생성: 학생들의 학습을 돕기 위해 각 문제에 대한 모범 답안을 자동 생성하는 기능을 구현했습니다.',
      '결과 PDF 출력: 학습 결과를 PDF 파일로 출력하여 학생과 학부모가 학습 성과를 쉽게 확인할 수 있도록 지원했습니다.'
    ],
    process: [
      '기획 (70%): 학습 플랫폼의 전체적인 구조 설계, 기능 정의, 사용자 흐름 설계 등을 담당하여 프로젝트의 방향성을 설정했습니다.',
      '프론트엔드 개발 (100%): Next.js와 shadcn/ui를 활용하여 사용자 친화적인 인터페이스를 구축하고, 효율적인 사용자 경험을 제공했습니다.',
      '백엔드 개발 (100%): Nest.js 기반 백엔드 서버를 개발하고, Prisma ORM을 통해 데이터베이스를 관리했습니다. langchain.js, chroma db를 활용하여 지문 생성 및 답변 평가 모델을 구축하고, MySQL을 통해 학습 데이터를 저장했습니다.',
      '프롬프트 엔지니어링 (100%): AI 모델이 학습 목표에 맞는 결과를 생성하도록 프롬프트를 설계하고, 지속적으로 개선했습니다.'
    ]
  },
  {
    title: '삼성 스마트 TV에서 실행되는 양방향 채팅 기능 앱',
    date: '2024.01 - 2024.03',
    abstract:
      '모 카드사의 요구사항 검증을 목표로, 삼성 스마트 TV에서 사용할 수 있는 실시간 양방향 채팅 기능을 갖춘 WebRTC 기반 앱을 개발하였습니다.',
    stackList: ['프론트엔드: React', '백엔드: Express, MySQL'],
    features: [
      '상담 화면: 실시간으로 상담자와 삼당원의 음성/영상 채팅 기능을 개발했습니다.',
      '서버: 상담원과 상담자 간의 연결을 중개하고, 미디어 스트림 교환을 위한 정보를 제공'
    ],
    process: [
      '프론트엔드 개발(100%): React 활용하여 상담원과 사용자 화면을 개발하고, 타이젠으로 빌드하여 개발하였습니다. (빌드된 타이젠의 앱에서 카메라 권한을 가질수 없어서 실제 티비에서 테스트 X)',
      '백엔드 개발(100%): 클라이언트들이 서로 주소를 알아내고 통신을 시작하기 위한 시그널링 서버를 Express 기반으로 개발하였습니다.'
    ]
  },
  {
    title: 'MultiCloud',
    date: '2023.04 - 2023.08',
    abstract:
      '삼성 SDP 사이트의 Azure와 AWS 클라우드 인프라를 대상으로, Prometheus를 이용하여 시스템 메트릭을 수집하고 Grafana를 통해 시각화하는 통합 모니터링 시스템을 개발했습니다. 특히, 두 클라우드 환경 간의 데이터 일관성을 유지하고, 다양한 경고 규칙을 설정하여 시스템 장애를 사전에 감지할 수 있는 기능을 구현하였습니다',
    stackList: [
      '시각화 : Grafana',
      '메트릭스 : CloudWatch, AzureMonitor, Prometheus'
    ],
    features: [
      '모니터링 개발: CloudWatch와 AzureMonitor, Prometheus의 메트릭스 정보를 사용하였습니다.',
      '시각화 개발: Grafana의 대시보드를 만들고 Alert 설정을 하였습니다.'
    ],
    process: [
      '모니터링 및 시각화(100%): CloudWatch와 AzureMonitor, Prometheus의 메트릭스 정보를 사용하여 Grafana의 대시보드를 만들고 Alert 설정을 하였습니다.'
    ]
  },
  {
    title: '삼성 스마트 TV 앱 CMS 사이트 개발',
    date: '2022.04 - 2023.12',
    abstract:
      '삼성의 신규 서비스인 Samsung Experience Plus(삼성 스마트 TV 앱)에 사용되는 데이터를 관리하고 편집할 수 있는 CMS(Content Management System) 웹 사이트를 개발하고 유지보수 하였습니다',
    stackList: ['프론트엔드: Vue.js, Vuetify', '백엔드: Express, MySQL, AWS'],
    features: [
      '콘텐츠 관리: 텍스트, 이미지, 동영상 등 콘텐츠를 생성, 수정, 삭제하는 기능',
      '라이브 이벤트 관리: 삼성 라이브 이벤트 생성, 수정, 삭제 관리 기능',
      '유저 관리: 유저 생성, 삭제, 수정 등 관리 권한 기능'
    ],
    process: [
      '프론트엔드(50%): 기존 프로젝트의 제약으로 인해 프론트엔드를 완전히 새롭게 설계하고 개발했습니다. 짧은 개발 기간 내에 페이지 단위로 모듈화하여 빠른 개발을 진행했습니다.',
      '백엔드(50%): 기존 Express, MySQL 기반 백엔드에 AWS S3와 MediaConvert를 연동하여 이미지 및 동영상 저장 기능을 구현했습니다'
    ]
  }
]

const projectListGinnov: ProjectDetail[] = [
  {
    title: '성과 관리 시스템 개발(교육 대학교)',
    date: '2021.02 - 2021.10',
    abstract:
      '대학에 산재되어 있는 데이터를 통합적으로 수집하여 각종 지표를 시각화 하는 프로젝트',
    stackList: ['ETL: Python, Postgresql, Oracle', '시각화: Spotfire'],
    features: [
      'ETL 기능: Oracle의 데이터를 Postgresql 적재하는 기능',
      '시각화 개발: BI를 만들고 해당 지표를 Spotfire통해 시각화 하는 기능'
    ],
    process: [
      'ETL 개발(50%): Python을 사용해서 Oracle의 데이터를 호출하여 Postgresql의 데이터 형태로 변경 후(데이터 타입이 조금씩 다름) 적재 하도록 개발 하였습니다.',
      '시각화 개발(50%): 각 해당 학과의 당담 교직원과 미팅 후 BI를 만들고 해당 지표를 Spotfire를 통해 개발 하였습니다.',
      '프로젝트 관리(100%): 적은 인원으로 프로젝트를 진행 하여서 프로젝트의 미팅 및 ETL, 시각화 개발을 같이 하였습니다. 해당 프로젝트의 1차년도 사업을 성실하게 종료 하였습니다.'
    ]
  }
]

const projectListMju: ProjectDetail[] = [
  {
    title: '국가과제 제안서 작성 및 프로토타입 개발',
    date: '2018.09 - 2019.03',
    abstract:
      '실감 미디어 표준화를 위한 국가 과제 제안서 작성 및 360VR을 포함한 다양한 실감 효과 재생 장치 프로토타입 개발',
    stackList: ['360VR 실감 효과: Unity', '제안서: Word, PowerPoint'],
    features: [
      '360VR 실감 효과: 360VR과 함께 재생되는 실감효과 재생 기능',
      '제안서 : 국가과제의 제안서 작성'
    ],
    process: [
      '360VR 실감 효과(50%): Unity와 Mpeg-v의 서술된 표준 데이터 포멧을 사용하여 360VR 영상에서 오브젝트를 특정 시 실감 효과가 재생되도록 개발하였습니다.',
      '제안서(30%): 제안서의 내용을 만들고 수정 및 보안 하였습니다.'
    ]
  },
  {
    title: '[3-3 차년도]퍼즐형 Ultra-wide viewing 공간 미디어 기술',
    date: '2017.03 - 2018.02',
    abstract:
      '	과학기술정보통신부 및 정보통신기술진흥센터 국가 사업과제로 퍼즐형 Ultra-wide viewing 공간 미디어 생성 및 소비 기술 개발 연구 하였습니다.',
    stackList: [
      '동영상 스티칭: MFC, C++, OpenCV',
      '동영상 촬명 및 데이터 센서 수집: Android, Java'
    ],
    features: [
      '동영상 스티칭: 동영상의 프레임을 안드로이드에서 수집에 데이터와 함께 스티칭 하는 기능',
      '동영상 촬명 및 데이터 센서 수집: 안드로이드 폰을 사용하여 동영상 촬영과 함께 데이터를 수집하는 기능'
    ],
    process: [
      '동영상 스티칭(30%): MFC와 Opencv를 사용하여 동영상과 데이터 센서를 스티칭하는 모듈을 개발 하였습니다.',
      '동영상 촬명 및 데이터 센서 수집(30%): 동영상 촬용과 함꼐 3축 가속도 센서의 데이터를 함께 저장하는 안드로이드를 어플리케션을 개발 하였습니다.'
    ]
  },
  {
    title: '6 DoF 를 지원하는 360° VR 기반 다중 감각 콘텐츠 원천 기술 개발',
    date: '2017.04 - 2017.12',
    abstract:
      '정보통신기술진흥센터의 지원을 받은 국가 과제로 6 DoF 를 지원하는 360° VR 기반 다중 감각 콘텐츠 원천 기술 연구하였습니다.',
    stackList: ['360 VR: Unity'],
    features: ['360 VR: 360도 영상의 2차원 이미지 표현 방법'],
    process: [
      '360 VR(50%): 360도 영상에서 오브젝트의 위치 및 실감 효과를 저작하기 위해여 2차원 이미지에서 표현 방법을 연구 하였습니다.'
    ]
  },
  {
    title:
      '사물인터넷을 위한 카메라/환경센서/IoT 기반 스마트미디어 서비스의 연구개발 및 국제표준화',
    date: '2016.05 - 2017.04',
    abstract:
      '산업통상자원부 및 산업기술평가관리의 국가 사업과제로 MPEG-IoMT에 데이터 표준을 제안 및 연구 하였습니다.',
    stackList: [
      'MEPG-V 디코더 & 인코더: JAVA',
      '미디어 및 IoMT 기동기(Android): Java'
    ],
    features: [
      'MEPG-V 디코더 & 인코더: MPEG-V의 데이터를 전송 및 수신',
      '미디어 및 IoMT 기동기(Android): MPEG-V의 정의된 데이터를 전달 받은 후 제어 명령에 따른 수행'
    ],
    process: [
      'MEPG-V 디코더 & 인코더(30%): MEPG-V의 xml형태의 따른 인코더와 디코더를 JAVA와 SAX를 사용하여 개발하였습니다.',
      '미디어 및 IoMT 기동기(Android)(30%): Android보드와 JAVA를 사용하여 제어 명령에 따른 영상의 재생 및 데이터 표현을 개발 하였습니다.'
    ]
  }
]

export const careerList: CareerInfo[] = [
  {
    imgPath: '/images/tecace-gx.png',
    companyName: '(주)테크에이스 지엑스',
    companyDesc:
      '테크에이스지엑스(TecAce GX)는 테크에이스(TecAce)의 글로벌 비전을 함께 공유하고, 한층 더 강화하기 위해 한국에 설립한 자회사다.',
    date: '2022.08 - 2024.08',
    role: '기본적으로 풀스택 포지션으로 삼성의 신규 서비스 개발 및 운영 업무를 맡았으며, 새로운 사업을 위한 POC 프로젝트의 개발을 맡아 담당 및 진행 하였습니다.',
    projectList: projectListGX
  },
  {
    imgPath: '/images/ginnov.png',
    companyName: '(주)제네럴 이노베이션즈(폐업)',
    companyDesc:
      '(주)제네럴 이노베이션즈는 교육용 솔루션을 개발하고 있던 스타트업 회사다.',
    date: '2021.02 - 2021.10',
    role: '기본적으로 개발팀의 프로젝트 매니저 포지션으로 S대학에 외주 개발 프로젝트를 맡아 담당 및 진행, 개발 하였습니다.',
    projectList: projectListGinnov
  },
  {
    imgPath: '/images/mju.png',
    companyName: '명지대학교 산학협력단',
    companyDesc:
      '서울특별시 서대문구와 경기도 용인시 처인구에 캠퍼스를 둔 4년제 종합 사립대학이다.',
    date: '2016.03 - 2019.03',
    role: '명지대학교 졸업 후 석사과정으로 입학하여 국과 과제를 수행하고 졸업 하였습니다.',
    projectList: projectListMju
  }
]

export const projectCardList: ProjectInfo[] = [
  {
    images: [
      '/images/webrtc-1.png',
      '/images/webrtc-2.png',
      '/images/webrtc-3.png',
      '/images/webrtc-4.png'
    ],
    detail: {
      title: 'WebRTC',
      dateAndparticipants: '2025.01 - (1人)',
      desc: ` 개인 프로젝트로 Next.js와 NestJS를 활용한 화상 채팅 사이트를 개발하고있습니다. Next.js를 사용하여 화상 채팅을 개발하고, NestJS를 사용하여 로그인 및 시그널을 제공하는 서버를 개발했습니다.
      Redis Pub/Sub을 활용하여 서버 증설 시에도 소켓 연결을 안정적으로 유지가 되는지 테스트를 하고있습니다. `,
      features: 'WebRTC를 활용한 채팅',
      stackList: [
        'Next',
        'Nest',
        'MySQL',
        'Docker',
        'redis',
        'Prisma',
        'shadcn/ui',
        'taillwindcss'
      ],
      url: 'https://github.com/LimDragonIron/webrtc-fullstack'
    }
  },
  {
    images: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png',
      '/images/portfolio-4.png'
    ],
    detail: {
      title: 'Portforlio',
      dateAndparticipants: '2024.11 - (1人)',
      desc: `현재 보고 있는 포트폴리오 사이트 입니다. Next js와 Framer Motion Tailwindcss로 제작이 되어있습니다. Vercel을 통해서 배포 되어 있습니다.`,
      features: '포트폴리오 사이트',
      stackList: ['Next', 'Framer Motion', 'shadcn/ui', 'taillwindcss'],
      url: 'https://github.com/LimDragonIron/one-day-portfolio'
    }
  },
  {
    images: ['/images/pj-1-1.png', '/images/pj-1-2.png', '/images/pj-1-3.png'],
    detail: {
      title: '학생을 위한 문해력 향상 AI 사이트',
      dateAndparticipants: '2024.04 - 2024.08 (사내 개발자 1人)',
      desc: `중학생을 위한 비문학 서술형 문제 맞춤형 학습 플랫폼을 개발하였습니다. 
      LangChain JS의 RAG 기능과 OpenAI GPT-4 모델을 활용하여 다양한 분야의 비문학 지문을 기반으로 서술형 문제를 자동 생성하고, 상세한 모범 답안과 오답 분석을 제공합니다. 학생 답변은 루브릭 기준으로 평가하며, AI 자동 채점 결과와 함께 선생님의 개별 피드백을 PDF 보고서 형태로 출력합니다.
      `,
      features: 'GPT-4와 루브릭 활용한 비문학 문제 생성 및 학생에 답변 채점',
      stackList: [
        'Next',
        'Nest',
        'LangChain',
        'MySQL',
        'Azure',
        'Docker',
        'chromaDB',
        'Prisma',
        'shadcn/ui',
        'taillwindcss'
      ]
    }
  },
  {
    images: ['/images/pj-2-1.png', '/images/pj-2-2.png', '/images/pj-2-3.png'],
    detail: {
      title: '삼성 TV 앱 개발 홍보 사이트 개발',
      dateAndparticipants: '2023.01 - 2023.01 (사내 개발자 1人)',
      desc: `Next.js, Framer Motion을 사용하여 부드러운 UI 전환, 마우스 호버 효과, 스크롤 애니메이션 등 다채로운 애니메이션을 적용하여 사용자 몰입도를 높였습니다. 직관적인 UI 디자인을 통해 정보 접근성을 높였습니다. Teams hooks을 사용하여 방문자의 메시지를 기록하였습니다.`,
      features: '삼성 앱 개발 홍보 사이트',
      stackList: ['Next', 'Framer motion']
    }
  },
  {
    images: [
      '/images/pj-3-1.png',
      '/images/pj-3-2.png',
      '/images/pj-3-3.png',
      '/images/pj-3-4.png'
    ],
    detail: {
      title: '삼성 스마트 TV 앱 CMS 사이트 개발 (SEP)',
      dateAndparticipants: '2022.04 - 2023.12 (사내 개발자 6人)',
      desc: `Samsung Experience Plus TV 앱의 콘텐츠 관리 사이트를 개발하여 인도 지역 서비스 운영을 지원했습니다.
      Vue2와 Vuetify, Exress, Mysql를 사용하여 콘텐츠 관리, 사용자 관리 기능을 구현하였습니다. 개발 이후 1년간 인도 지역에서 안정적으로 운영되었습니다.
      `,
      features: '컨텐츠의 데이터 관리, 유저 관리',
      stackList: ['Vue', 'Vuetify', 'Express', 'MySQL', 'AWS']
    }
  },
  {
    images: [
      '/images/pj-4-1.webp',
      '/images/pj-4-2.webp',
      '/images/pj-4-3.webp'
    ],
    detail: {
      title: '유니티 2D 디펜스 게임 (Android)',
      dateAndparticipants: '2020.01 - 2020.05 (1人)',
      desc: `1인 창업으로 2D 캐릭터 디펜스 게임 '몰랑 디펜스'를 개발하여 구글 스토어에 출시했습니다. 포토샵으로 개성 넘치는 캐릭터를 디자인하고, 유니티 엔진을 활용하여 직관적인 UX/UI를 구현하는 등 게임의 모든 과정을 직접 진행했습니다. 출시 후 57명의 다운로드 수를 기록했습니다.`,
      features: '2D 디펜스 게임',
      url: 'https://apkpure.com/kr/mollangdefense/com.Limd.Mallang',
      stackList: ['Unity 2D']
    }
  }
]

export const linkImages: linkInfo[] = [
  {
    imgPath: 'github-1.png',
    title: 'Source Code Repository',
    href: 'https://github.com/LimDragonIron',
    desc: ['개인 프로젝트의 소스코드 저장소']
  },
  {
    imgPath: 'blog.png',
    title: 'Velog',
    href: 'https://ggonmerlimd.tistory.com/',
    desc: ['지식 공유 목적의 블로그']
  }
]

//remove
export const aboutMeTitle = 'FullStack 개발자 임용철'
export const aboutDesc = `학습을 통한 성장을 즐기며, 개발에 대한 열정을 끊임없이 이어가는 개발자입니다.`

//remove
export const introItems = [
  {
    title: '이름',
    content: '임용철'
  },
  {
    title: '생년월일',
    content: '1990.02.27'
  },
  {
    title: '이메일',
    content: 'ciyciygood@gmail.com'
  }
]

export const aboutMeContentDesc = ['ciyciygood@gmail.com', '010-9036-5566']

export const aboutMeVisionDesc = [
  '깨끗하고 효율적인 코드를 작성하기 위한 노력',
  '끊임없는 개선을 통해 더 나은 소프트웨어를 만들고자 하는 열정',
  '사용자 중심의 개발 철학을 바탕으로 가치 있는 제품을 만들고자 하는 의지',
  '협업을 통해 시너지를 창출하고 함께 성장하고자 하는 마음으로 개발을 하고 있습니다'
]

export const jokes = [
  '  저의 직업을 맞혀보세요.',
  '  저는..거북목이 있습니다. ',
  ' 저는..어깨가 말려 있습니다.',
  '저는.. 허리 통증이 있습니다.',
  '        그 렇 습 니 다!       ',
  '             저는 !!         ',
  '     개발자 입니다. ^^    '
]

//remove
export const subDesc = [
  '깨끗하고 효율적인 코드를 작성하기 위한 노력',
  '끊임없는 개선을 통해 더 나은 소프트웨어를 만들고자 하는 열정',
  '사용자 중심의 개발 철학을 바탕으로 가치 있는 제품을 만들고자 하는 의지',
  '협업을 통해 시너지를 창출하고 함께 성장하고자 하는 마음으로 개발을 하고 있습니다'
]

//SKill

export const skillList: SkillList[] = [
  {
    title: 'FrontEnd',
    items: [
      { imgPath: 'html5.png' },
      { imgPath: 'css.png' },
      { imgPath: 'js.png' },
      { imgPath: 'ts.png' },
      { imgPath: 'next.png' },
      { imgPath: 'react.png' },
      { imgPath: 'vue.png' },
      { imgPath: 'tailwind.png' }
    ]
  },
  {
    title: 'BackEnd',
    items: [
      { imgPath: 'nest.png' },
      { imgPath: 'mysql.png' },
      { imgPath: 'postgresql.png' },
      { imgPath: 'typeorm.png' },
      { imgPath: 'langchain.png' },
      { imgPath: 'nodejs.png' }
    ]
  },
  {
    title: 'Deployment',
    items: [{ imgPath: 'amazon.png' }, { imgPath: 'docker.png' }]
  },
  {
    title: 'Extra',
    items: [
      { imgPath: 'jira-confluence.png' },
      { imgPath: 'unity.png' },
      { imgPath: 'opencv.png' }
    ]
  }
]
