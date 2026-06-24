import{d as s,n as l,i as r}from"./hero-HYbOcRqR.js";const e=(a,i="")=>`<span class="material-symbols-outlined ${i}" aria-hidden="true">${a}</span>`,n=s.regions.reduce((a,i)=>a+i.universities.length,0),c=s.regions.reduce((a,i)=>a+i.universities.filter(o=>!o.type.includes("연합")).length,0),t=n-c,d=[{icon:"workspace_premium",label:"사업명",value:s.program},{icon:"flag",label:"목적",value:"AI·Digital 전환을 선도할 전문대학 거점 육성"},{icon:"calendar_month",label:"사업기간",value:`${s.period} (2년 차)`},{icon:"payments",label:"예산 규모",value:s.funding},{icon:"account_tree",label:"추진 유형",value:"단독형 · 연합형(컨소시엄)"},{icon:"school",label:"정리 대상",value:`${s.regions.length}개 권역 · ${n}개 사업단`}],v=[{icon:"security",name:"iStation",cls:"pos",desc:"폐쇄망·보안 환경의 Sovereign/Internal AI. GPU Slicing 으로 다중 사용자에게 GPU 자원을 효율 배분."},{icon:"devices",name:"Dstation",cls:"",desc:"실습용 VDI 환경. 디자인·영상·시뮬레이션 등 GPU 고수요 교과의 표준 실습 데스크톱 제공."},{icon:"rocket_launch",name:"Tstation",cls:"",desc:"브라우저에서 바로 시작하는 GPU 기반 AI 개발·학습 워크스페이스."},{icon:"support_agent",name:"CAS",cls:"neg",desc:"학생지원·교수학습 연계 시스템. 입학~진로 전 주기 데이터 기반 학습자 지원에 결합."}],p=document.querySelector("#app");p.innerHTML=`
  ${l("intro")}

  <header class="hero hero--intro">
    <canvas class="hero__canvas" aria-hidden="true"></canvas>
    <div class="container">
      <span class="eyebrow">${e("description")} 사업 개요</span>
      <h1>${s.program.replace("전환 중점","전환<br>중점")}</h1>
      <p class="lead">
        AI·Digital 전환 중점 전문대학 지원사업의 핵심 개요와,
        틸론이 제안하는 솔루션 맵을 한눈에 정리했습니다.
      </p>
      <div class="brandline">
        <a class="navbtn" href="./regions.html">${e("map")} 권역별 선정 현황 보기</a>
        <span>${e("calendar_month")} 사업기간 ${s.period}</span>
        <span>${e("school")} ${s.regions.length}개 권역 · ${n}개 사업단</span>
      </div>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="container">
        <div class="section__head">
          <h2>사업 개요</h2>
          <p>각 대학 보도자료 및 교육부 자료 기준 · 상세 수치는 사업계획 공개 시 갱신.</p>
        </div>
        <div class="ovgrid">
          ${d.map(a=>`
            <article class="ovcard">
              <div class="ovcard__ic">${e(a.icon)}</div>
              <div>
                <span class="ovcard__label">${a.label}</span>
                <p class="ovcard__value">${a.value}</p>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--cards">
      <div class="container">
        <div class="section__head">
          <h2>권역 구성</h2>
          <p>전국 ${s.regions.length}개 권역 · 단독형 ${c} · 연합형 ${t}.</p>
        </div>
        <div class="pills">
          ${s.regions.map(a=>`
            <a class="pill" href="./regions.html">${e("place")} ${a.region} <b>${a.universities.length}</b></a>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__head">
          <h2>틸론 솔루션 맵</h2>
          <p>권역·대학별 비전에 대응하는 틸론 제품 라인업 (영업 가설 기준).</p>
        </div>
        <div class="prodgrid">
          ${v.map(a=>`
            <article class="prodcard prodcard--${a.cls}">
              <div class="prodcard__ic">${e(a.icon)}</div>
              <h3>${a.name}</h3>
              <p>${a.desc}</p>
            </article>`).join("")}
        </div>
      </div>
    </section>
  </main>

  <footer class="foot">
    <div class="container">
      <span>${s.org} · ${s.purpose}</span>
      <span>${s.disclaimer}</span>
    </div>
  </footer>
`;r(document.querySelector(".hero"));
