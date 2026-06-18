# AID

2026 AID(AI+Digital) 전환 중점 전문대학 지원사업 — **틸론(TILON) 영업 준비사항 보고용 웹페이지**

권역별 선정대학의 비전·추진 방향과, 틸론 솔루션(iStation · Dstation · DaaS · CAS) 관점의 영업 가설을
정리해 보고하는 정적 웹사이트입니다.

## 기술 스택

- **Vite 5** + Vanilla JS/CSS (빌드 도구 + 정적 번들)
- **Pretendard** 본문/제목 폰트
- **Material Symbols(흑백)** + **Font Awesome** 아이콘 — 컬러 이모지 미사용

## 컬러 시스템

| 구분 | 색상 | 토큰 |
|---|---|---|
| 주컬러 | 다크블루 | `--navy-800` `#0a2342` |
| 주컬러 | 로열블루 | `--royal-600` `#2546d6` |
| 포인트 | 다크그린 | `--green-700` `#14532d` |
| 포인트 | 다크레드 | `--red-700` `#7f1d1d` |

전체 토큰은 `src/styles/tokens.css` 참조.

## 폴더 구조

```
AID/
├─ index.html              # 메인 보고 페이지 (권역 지도 + 대학 카드)
├─ intro.html              # AID 사업소개 페이지
├─ vite.config.js          # 멀티페이지(main/intro) 설정
├─ package.json
├─ src/
│  ├─ main.js              # 메인 페이지 엔트리
│  ├─ intro.js             # 사업소개 페이지 엔트리
│  ├─ map.js               # 인터랙티브 권역 지도(SVG+JS)
│  ├─ nav.js               # 공통 상단 내비게이션
│  ├─ partners.js          # 권역별 영업 파트너사
│  ├─ data/
│  │  └─ universities.json # 권역별 선정대학 비전·틸론 관점 (엑셀 변환본)
│  ├─ styles/
│  │  ├─ tokens.css        # 디자인 토큰(컬러/타이포/간격)
│  │  ├─ base.css          # 리셋 + 아이콘 시스템
│  │  └─ app.css           # 페이지 스타일(지도/탭/카드/내비/소개)
│  └─ assets/              # 이미지 에셋(업로드 예정)
└─ (원본 자료) *.pdf, *.xlsx
```

## 페이지 구성

- **권역별 선정 현황**(`index.html`) — 인터랙티브 한국 지도(호버·선택·글로우 효과) + 권역 탭 + 19개 사업단 카드(비전·추진방향·틸론 관점·영업 파트너사). 출처 클릭 시 새 창으로 자료 검색.
- **AID 사업소개**(`intro.html`) — 사업 개요·권역 구성·틸론 솔루션 맵. (PDF 한글 추출 이슈로 엑셀 데이터 기반 구성)

## 실행

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # dist/ 정적 빌드
npm run preview  # 빌드 결과 미리보기
```

## 원본 자료

- `2026 AID(AI+Digital) 전환 중점 전문대학 지원사업.pdf` — 사업 개요/예산/일정/제품맵
- `*_선정대학_비전정리.xlsx` (수도권·강원·충청·부산울산경남·호남제주) — `src/data/universities.json`으로 변환됨

> 비전·추진방향은 각 대학 보도자료 및 교육부 자료 기반이며, 틸론 관점 제안 내용은 영업 가설입니다.
