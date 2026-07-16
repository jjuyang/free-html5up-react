# 📚 HTML5 UP Editorial - Next.js & TypeScript 마이그레이션

> **HTML5 UP의 정교한 매거진 스타일 템플릿을 Next.js(App Router)와 TypeScript 기반의 고성능 컴포넌트 시스템으로 마이그레이션한 프로젝트입니다.**
> **무료 이미지 unsplash.com / 무료 사이트 html5up.net**

---

## 🌐 Live Demo

- **배포 주소:** [https://free-html5up-react.vercel.app/]

---

## 🛠️ 사용 기술 및 개발 환경

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **State Management:** React Reactivity Hooks (useState, useEffect, useRef)
- **Styling:** Vanilla CSS (원작 메인 레이아웃 및 디자인 시스템 100% 보존)
- **Deployment:** Vercel

---

## 📁 디렉토리 구조 (Directory Structure)

```text
free-html5up-react-main/
├── app/                  # Next.js App Router (글로벌 라우팅 기지)
│   ├── assets/           # 전역 스타일시트(main.css) 및 웹 폰트 에셋
│   ├── components/       # 독립식 UI 및 메인 뼈대 컴포넌트
│   ├── data/             # 콘텐츠 비즈니스 데이터 분리 (sidebarData, imageData)
│   ├── Elements/         # /Elements 서브 가이드 페이지 및 UI 킷
│   ├── Generic/          # /Generic 서브 매거진 상세 페이지
│   ├── favicon.ico       # 브라우저 파비콘 아이콘
│   ├── globals.css       # Next.js 기본 전역 스타일시트
│   ├── layout.tsx        # 글로벌 레이아웃 (사이드바 반응형 클래스 훅 탑재)
│   └── page.tsx          # 메인 홈 페이지 컴포넌트 (Banner, Posts 조립)
└── public/               # ★ Next.js 정적 이미지 창고 (images/ 절대 경로 서빙)
```
