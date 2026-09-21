import { Project, SkillItem, Specialization, EducationItem, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: "손정원",
  englishName: "Jeongwon Son",
  role: "Software Major Student | AI & Web Development",
  email: "coconut0107@naver.com",
  phone: "+82 10-5498-0169",
  location: "부산, 대한민국 (Busan, South Korea)",
  githubUrl: "https://github.com",
};

export const specializations: Specialization[] = [
  { title: "Agentic & RAG Systems", projectCount: 2 },
  { title: "LLM & Prompt Engineering", projectCount: 3 },
  { title: "Web & Automation (Streamlit, n8n)", projectCount: 3 },
  { title: "Python & API Integration", projectCount: 3 },
];

export const skillItems: SkillItem[] = [
  {
    name: "LangChain",
    category: "agentic",
    categoryLabel: "Agentic & Gen AI",
    percentage: 92,
    description: "RAG 파이프라인, 벡터 임베딩, 문서 체인 및 프롬프트 흐름 제어",
    iconName: "BrainCircuit"
  },
  {
    name: "RAG Systems",
    category: "agentic",
    categoryLabel: "Agentic & Gen AI",
    percentage: 90,
    description: "FAISS 벡터 저장소 기반 의미 검색, 문서 전처리 및 청킹",
    iconName: "Database"
  },
  {
    name: "Prompt Engineering",
    category: "agentic",
    categoryLabel: "Agentic & Gen AI",
    percentage: 94,
    description: "Few-shot 프롬프트, 역할 기반 추론, 정형 데이터 추출 최적화",
    iconName: "Sparkles"
  },
  {
    name: "Anthropic Claude",
    category: "llm",
    categoryLabel: "LLM Models",
    percentage: 88,
    description: "Claude 3.5 Sonnet 기반 정교한 추론 및 독후감 심층 텍스트 분석",
    iconName: "Cpu"
  },
  {
    name: "Google Gemini",
    category: "llm",
    categoryLabel: "LLM Models",
    percentage: 88,
    description: "다양한 멀티모달 프롬프트와 고성능 LLM API 연동 및 테스트",
    iconName: "Bot"
  },
  {
    name: "Cursor",
    category: "tools",
    categoryLabel: "Development Tools",
    percentage: 95,
    description: "AI 기반 지능형 코드 작성, 디버깅 및 풀스택 개발 워크플로우 가속",
    iconName: "Code2"
  },
  {
    name: "Streamlit",
    category: "web",
    categoryLabel: "Web & Automation",
    percentage: 90,
    description: "반응형 데이터 웹 애플리케이션 신속 프로토타이핑 및 클라우드 배포",
    iconName: "Layout"
  },
  {
    name: "n8n",
    category: "web",
    categoryLabel: "Web & Automation",
    percentage: 86,
    description: "외부 API 결합 데이터 수집 자동화 워크플로우 및 이메일 연동",
    iconName: "Workflow"
  },
  {
    name: "Python",
    category: "languages",
    categoryLabel: "Languages",
    percentage: 92,
    description: "데이터 전처리, 비동기 API 요청, 알고리즘 구현 및 백엔드 로직",
    iconName: "Terminal"
  }
];

export const projectsData: Project[] = [
  {
    id: "cnn-news-vocabulary-ai",
    number: "01",
    title: "CNN News Vocabulary AI",
    subtitle: "CNN 뉴스 문서를 활용한 RAG 기반 영어 학습 웹 서비스",
    category: "Agentic & RAG",
    bootcampLevel: "AI 부트캠프 중급",
    date: "Jul. 2026",
    description: "CNN 뉴스 문서를 활용하여 영어 단어의 의미와 실제 뉴스 문맥을 친절하게 설명하는 RAG 기반의 인터랙티브 영어 학습 웹 애플리케이션입니다.",
    features: [
      "CNN 실제 뉴스 문서를 활용한 실전 문맥 중심 영어 학습",
      "검색된 뉴스 내용을 기반으로 영어 단어의 한국어 맞춤 설명 자동 생성",
      "의미론적 문서 검색을 통한 관련 원문 뉴스 문맥 및 예문 제공"
    ],
    implementations: [
      "Python을 활용한 CNN 뉴스 텍스트 데이터 정제 및 문서 전처리 파이프라인 구축",
      "RAG(Retrieval-Augmented Generation) 기반 질의응답 문서 검색 시스템 구축",
      "LangChain과 FAISS(Facebook AI Similarity Search)를 활용한 고차원 벡터 임베딩 및 의미 기반 유사도 검색 구현",
      "OpenAI API를 활용하여 학습자의 난이도에 맞춘 영어 단어 및 뉴스 문맥 한국어 설명 생성",
      "Streamlit을 활용한 직관적인 웹 인터페이스 개발 및 실시간 배포"
    ],
    techStack: ["Python", "LangChain", "FAISS", "RAG", "OpenAI API", "Streamlit"],
    metrics: [
      { label: "검색 정확도", value: "95%+" },
      { label: "응답 속도", value: "< 1.8s" },
      { label: "임베딩 모델", value: "text-emb-3" }
    ],
    accentColor: "#2b2b2b",
    imageTheme: "news"
  },
  {
    id: "ai-book-recommendation",
    number: "02",
    title: "AI 기반 도서 추천 웹 서비스",
    subtitle: "독후감 분석을 통한 도서 추천 및 주변 도서관 위치 안내 서비스",
    category: "LLM & Web Service",
    bootcampLevel: "AI 부트캠프 고급",
    date: "Sep. 2026",
    description: "사용자가 자유롭게 작성한 독후감에서 주요 감정, 주제, 표현을 추출하여 개인화된 맞춤 도서를 추천하고 인근 도서관의 실시간 소장 여부와 위치를 제공하는 통합 서비스입니다.",
    features: [
      "사용자 작성 독후감의 텍스트 마이닝 및 감성·주제 기반 맞춤 도서 추천",
      "핵심 주제 및 인상 깊은 문장/표현 자동 추출 및 요약",
      "추천 도서의 상세 메타데이터 및 줄거리 정보 제공",
      "사용자 현재 위치 기반 주변 도서관 위치 및 실시간 소장 여부 정보 제공",
      "카카오 맵 API를 활용한 지도 기반 주변 도서관 인터랙티브 시각화"
    ],
    implementations: [
      "독후감에서 도서 추천에 활용할 주요 주제와 핵심 표현을 추출하는 다단계 프롬프트 추천 알고리즘 설계",
      "OpenAI API와 국립중앙도서관 '도서관 정보나루(도서마루) API' 유기적 연동",
      "도서 메타데이터 및 전국 도서관 소장 데이터 실시간 수집 및 가공",
      "도서마루 DB를 활용한 주변 도서관의 실시간 도서 대출/소장 상태 및 지점 위치 제공",
      "Kakao Map SDK를 활용하여 사용자 반경 내 도서관 위치 핀 마킹 및 길찾기 시각화",
      "Cursor AI 도구를 적극 활용하여 Streamlit 웹 서비스를 고속 개발 및 프로덕션 배포"
    ],
    techStack: ["Python", "OpenAI API", "도서마루 API", "Kakao Map API", "Cursor", "Streamlit"],
    metrics: [
      { label: "추천 만족도", value: "94%" },
      { label: "소장 도서관 연계", value: "전국 공공도서관" },
      { label: "분석 파이프라인", value: "2단계 LLM Chain" }
    ],
    accentColor: "#343a40",
    imageTheme: "library"
  },
  {
    id: "busan-travel-search-system",
    number: "03",
    title: "부산 여행정보 검색 시스템",
    subtitle: "n8n 자동화와 공공 API를 결합한 부산 지역 원스톱 여행 큐레이션",
    category: "Automation & API",
    bootcampLevel: "AI 부트캠프 초급",
    date: "May. 2026",
    description: "사용자가 원하는 부산 지역명(해운대, 광안리, 남포동 등)을 입력하면 해당 지역의 명소, 맛집, 쇼핑 정보를 종합 큐레이션하고 개인 여행 가이드를 이메일로 즉시 발송하는 자동화 서비스입니다.",
    features: [
      "지역명 입력 기반 원스톱 관광지 및 명소 정보 검색",
      "로컬 맛집 및 추천 쇼핑 플레이스 맞춤 정보 제공",
      "글로벌 신뢰도를 반영한 Google Places 별점, 최신 리뷰 데이터 제공",
      "방문 전 확인 가능한 실시간 영업 여부 및 상세 영업시간 안내",
      "Kakao Static Map 기반 직관적인 지도 이미지 제공",
      "수집 및 정제된 여행 코스 가이드를 사용자 메일로 원클릭 자동 발송"
    ],
    implementations: [
      "n8n 워크플로우 자동화 엔진을 활용한 복수 API 데이터 파이프라인 오케스트레이션",
      "Kakao Local API를 연동하여 입력된 지역명의 지리적 위경도 좌표 정밀 변환",
      "한국관광공사 TourAPI를 활용하여 반경 3km 이내의 검증된 관광지·맛집·쇼핑 정보 수집",
      "Google Places API를 연계하여 실시간 평점, 사용자 리뷰, 영업 상태 및 영업시간 데이터 취합",
      "수집된 다중 이기종 데이터를 사용자 친화적인 반응형 HTML 템플릿으로 구조화",
      "Streamlit 기반 사용자 맞춤 인터랙티브 프론트엔드 구축",
      "SMTP/Webhook 기반의 개인화 여행 가이드 리포트 이메일 자동 발송 모듈 구현"
    ],
    techStack: ["n8n", "Python", "Kakao Local API", "한국관광공사 TourAPI", "Google Places API", "Streamlit"],
    metrics: [
      { label: "연동 API", value: "4개 공공/빅테크 API" },
      { label: "데이터 취합 속도", value: "자동화 파이프라인" },
      { label: "안내 커버리지", value: "부산 전역 16개 구·군" }
    ],
    accentColor: "#222222",
    imageTheme: "travel"
  }
];

export const educationData: EducationItem[] = [
  {
    school: "부산외국어대학교 (Busan University of Foreign Studies)",
    degree: "소프트웨어전공 (Software Major)",
    period: "2024 – 현재 재학 중",
    description: "컴퓨터 과학의 기초(자료구조, 알고리즘, 데이터베이스)를 탄탄히 다지는 동시에, 최신 AI 및 거대 언어 모델(LLM) 생태계에 주목하여 실사용자 중심의 웹 서비스를 구축하고 있습니다.",
    highlights: [
      "소프트웨어 기초 및 프로그래밍 방법론 학습",
      "RAG 및 LangChain 기반 생성형 AI 기술 응용 연구",
      "다수의 AI 부트캠프 프로젝트 주도적 기획 및 구현 (초급·중급·고급 수료)",
      "Cursor, Streamlit, n8n을 활용한 신속한 소프트웨어 프로토타이핑 및 배포"
    ]
  }
];
