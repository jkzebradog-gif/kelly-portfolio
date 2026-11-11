import {useState} from 'react';
import type {Profile} from '@/lib/portfolio';
const skillGroups: {label:string; skills:string[]; scopes?:{title:string;description:string}[]}[] = [
 { label: '設計', skills: ['活動主視覺與行銷素材', '品牌設計與識別規範', '陳列設計', '展覽與攤位視覺', '包裝設計', '書籍排版', '產品型錄與規格表', '插畫與資訊圖表', '門市招牌與燈箱設計'] },
 { label: 'AI 應用', skills: ['生成式 AI 影像製作', '商品使用情境圖', '應用影像合成技術，降低 AI 感', 'AI 輔助影片剪輯', 'AI 工具教學與流程導入'] },
 { label: '拍攝與剪輯', skills: ['商品攝影與打燈', '活動攝影與紀錄', '影像剪輯', 'Photoshop 合成與後製'] },
 { label: '客戶訪談與提案', skills: ['客戶訪談與需求釐清', '視覺方向與提案', '報價與預算評估'] },
 { label: '後端執行', scopes: [{ title: '外包廠商評估與管理', description: '門市招牌與燈箱製作、官網建置（架構與內容上架）' }, { title: '印刷製作', description: '印前完稿與檔案檢查、印刷色彩管理、打樣與成品確認' }], skills: ['專案排程與跨部門協作', '材質工法與製作規格', '產品圖庫建置', '版型與檔案命名規則', '版本控管與源檔交付'] },
 { label: '常用工具', skills: ['Illustrator', 'Photoshop', 'InDesign', 'Lightroom', 'Premiere', 'ComfyUI', '生成式 AI 助理'] },
];
const experience=[["2026.03 — 現在", "VIVISPA／海欣國際有限公司", "資深平面設計師", "負責品牌各式平面視覺、門市招牌、活動宣傳物、療程與新品行銷素材，以及特殊陳列設計。除傳統平面設計外，具生成式 AI 影像應用專長，導入 AI 生成圖像與設計整合流程，應用於活動主視覺、療程情境圖、商品宣傳與各式行銷素材，並協助同事理解及使用相關工具，提升團隊整體視覺產出效率與素材彈性。"], ["2024.07 — 2025.12", "勞朋企業有限公司", "平面／品牌設計師｜噴火槍製造商（成立 40 年）", "服務於具有 40 年歷史的噴火槍製造商。入職一年內從零建立企業視覺識別、產品影像與圖庫制度、更新官網資訊架構與版型、以及可持續更新的產品總目錄，成功把原本沒有設計職能的工廠型組織，升級為有品牌資產與一致溝通語言的 B2B 公司。"], ["2014.09 — 2024.06", "斑馬與狗工作室", "個人工作室｜獨立平面／視覺設計師", "承接品牌、活動與平面設計專案，獨立負責從客戶洽談、需求釐清、報價與時程規劃，到視覺提案、設計執行、攝影、印前製作及最終交付。除設計本身外，也直接處理客戶溝通、預算、廠商與製作端協調，累積完整的專案執行與商業實務經驗。"], ["2011.08 — 2014.08", "狗屋／果樹出版社", "美術編輯", "擔任出版社美術編輯，負責書籍封面與內頁編排，並將書籍主題延伸至宣傳、商品贈品和網站社群。與編輯、行銷及印刷廠協作，讓設計從出版製作銜接到對外推廣。"]];
const companyDetails=[[["AI 生成影像與設計流程導入", "發揮生成式 AI 視覺專長，結合自身視覺設計能力與品牌調性，依據療程內容及活動需求生成所需情境影像，並透過平面設計、影像合成與細節後製進一步修整，降低生成影像常見的 AI 痕跡，使成品更貼近真實商業視覺與品牌風格，實際應用於活動主視覺、 DM 、海報、門市宣傳及各式行銷素材，同時降低對既有圖庫與拍攝素材的依賴。"], ["AI 工具經驗分享與團隊協作", "將自身 AI 生成影像與實務操作經驗導入工作流程，協助並教導同事使用相關工具與基本生成方式，使 AI 不僅作為個人設計工具，也逐步成為團隊可運用的視覺製作方式。"], ["品牌∕行銷視覺設計", "負責品牌日常、節慶檔期、 SPA 療程推廣、新品上市及各式促銷活動之視覺設計，依據行銷需求規劃主視覺、資訊層級與版面，延伸製作 DM 、海報、廣告及不同尺寸之宣傳素材，將療程與產品資訊轉化為清楚易懂的消費端視覺，同時維持品牌整體風格與識別一致性。"], ["各式招牌∕燈箱設計", "依據直營店與加盟店不同空間、尺寸及現場條件，進行門面招牌、燈箱、室內外指示及相關視覺設計，兼顧品牌識別、觀看距離及實際輸出製作需求。"], ["專案成本與製作評估", "配合門市招牌與實體視覺專案，依據預算、製作條件與品牌需求提出材質、工法及尺寸建議，協助控制製作成本並確保視覺品質落地。"], ["活動展示與特殊陳列設計", "配合節慶、促銷及主題活動，設計易拉展、立牌及各式展示物，並將活動主視覺延伸至實體空間與特殊陳列，強化活動氛圍與現場視覺完整度。"]], [["品牌視覺系統主導建置", "作為公司首位設計人員，從 0 建立品牌視覺規範、產品圖庫、官網與產品總目錄，並建立設計資產與檔案管理流程。"], ["跨部門與製作專案整合", "與業務、研發及外部製作廠商協作，統整新品、包材、展會與印刷需求，掌握視覺方向、時程、製作規格及實際落地。"], ["生成式 AI 工作流程導入", "將 AI 影像生成導入商業設計，應用於產品情境、展會及行銷素材，補足拍攝與視覺素材的缺口。"], ["產品圖庫制度化", "規劃檔案分類與命名規則(規格∕應用情境)，重拍或重製關鍵產品圖，建立集中式數位資產庫，解決公司「無產品圖庫」的痛點。"], ["流程與品質", "制定檔案管理 SOP 與版本控管，確保印刷∕數位輸出色彩一致性與文件可追溯性。"], ["公司官網建置", "擬定網站架構、產品型錄頁模板與下載節點、 SEO 基礎關鍵字策略，協同上線官網並建立後台更新流程。"], ["產品總目錄", "統一規格表呈現、應用場景頁與安全注意事項版面，建立年度可快速更新的版型，支援展會∕業務快印與 PDF 發送。"], ["展覽海報與攤位視覺", "為海外商展規劃主視覺、背板、海報與攤位訊息版式；根據預算規劃動線與視距設計，強化攤位辨識度與停留意願；並同步製作型錄與隨身 DM ，確保對外溝通一致、提升洽談效率。"]], [["品牌∕活動視覺設計", "依據客戶需求與品牌調性規劃主視覺，延伸製作海報、背板、易拉展、 Banner 、宣傳物及各式線上∕線下素材，維持整體視覺一致性。"], ["插畫與圖像設計", "依專案需求執行商業插畫、資訊圖表、圖標、圖樣與延伸視覺，建立可持續運用於不同媒介的圖像系統。"], ["商業攝影與活動紀錄", "執行產品形象、情境、型錄攝影及活動紀錄，並將攝影素材與後續平面設計整合，使影像風格、色彩與版面呈現保持一致。"], ["端到端專案執行", "獨立完成需求訪談、報價與合約、專案排程、提案、修訂、完稿及交付，依專案規模安排里程碑與交付內容，掌握品質、成本與時程。"], ["印前製作與廠商協作", "熟悉色彩管理、出血、刀模、紙材及後加工等印前流程，依需求尋找合適製作廠商、評估預算並進行打樣與成品確認，確保設計能順利落地。"], ["設計資產與完稿交付", "依客戶需求整理授權及使用範圍，建立完整檔案架構，交付可維護之 AI 、InDesign 、 PSD 等源檔與連結素材，方便客戶後續延伸及管理。"]], [["書籍封面與內頁編排", "依書籍主題設計封面，整理內頁的圖文層級、字級與段落，讓封面風格與內頁閱讀體驗一致。"], ["廣告與宣傳物設計", "配合書籍宣傳需求，將書封、書名及宣傳重點整理成廣告版面，讓讀者能快速辨識書籍與主打訊息。"], ["商品、贈品與標誌設計", "參與商品及贈品的企劃討論，依主題發展圖像與版面，也負責相關 Logo 設計。"], ["商業攝影", "依書籍與商品的呈現需求拍攝影像，提供版面設計和宣傳可使用的素材。"], ["網站與社群維護", "負責網頁設計、網站內容更新與書籍上架，並維護 Facebook 粉絲專頁，讓新書和宣傳資訊能在不同管道被看見。"]]];
const skillLinks: Partial<Record<string, string>> = {
  '活動主視覺與行銷素材': '#/projects/golden-hand-award',
  '陳列設計': '#/projects/fairy-launch',
  '專案排程與跨部門協作': '#/projects/fairy-launch',
  '品牌設計與識別規範': '#/projects/roburn',
  '產品圖庫建置': '#/projects/roburn',
  '版型與檔案命名規則': '#/projects/roburn',
  '展覽與攤位視覺': '#/design/roburn',
  '包裝設計': '#/design/roburn',
  '產品型錄與規格表': '#/design/roburn',
  '門市招牌與燈箱設計': '#/design/haixin',
  '生成式 AI 影像製作': '#/projects/haixin',
  '商品使用情境圖': '#/projects/haixin',
  '應用影像合成技術，降低 AI 感': '#/projects/haixin',
  'AI 工具教學與流程導入': '#/projects/haixin',
  '商品攝影與打燈': '#/photography',
  '影像剪輯': '#/film',
};

function AboutSkills(){
 const [active,setActive]=useState(0);
 return <div className="about-skills" aria-labelledby="about-skills-title">
  <h2 id="about-skills-title">專業能力</h2>
  <div className="about-skill-tabs" role="tablist" aria-label="能力分類" onKeyDown={e=>{
   const n=skillGroups.length;
   const next=e.key==='ArrowRight'?(active+1)%n:e.key==='ArrowLeft'?(active+n-1)%n:e.key==='Home'?0:e.key==='End'?n-1:-1;
   if(next<0)return;
   e.preventDefault();setActive(next);e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }}>{skillGroups.map(({label},i)=><button key={label} type="button" id={`about-skill-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`about-skill-panel-${i}`} tabIndex={active===i?0:-1} onClick={()=>setActive(i)}>{label}</button>)}</div>
  {skillGroups.map(({label,skills,scopes},i)=><div className="about-skill-panel" role="tabpanel" key={label} id={`about-skill-panel-${i}`} aria-labelledby={`about-skill-tab-${i}`} hidden={active!==i} tabIndex={0}>{scopes?.map(({title,description})=><p className="about-skill-scope" key={title}><strong>{title}</strong><span>{description}</span></p>)}<ul>{skills.map(skill=>{
   const href=skillLinks[skill];
   return <li key={skill}>{href?<a className="about-skill-link" href={href}>{skill} <span aria-hidden="true">↗</span></a>:skill}</li>;
  })}</ul></div>)}
 </div>;
}
export default function About({profile}:{profile:Profile}){return <div className="about-editorial"><section className="about-hero" aria-labelledby="about-name">
 <p className="eyebrow">01 / ABOUT KELLY</p>
 <h1 id="about-name">{profile.name}<span>{profile.englishName}</span></h1>
 <p className="about-statement">把講不清楚的想法，<br/>變成看得見、做得出的設計。</p>
 <div className="about-intro"><p>{profile.bio}</p><p>我畢業於中國文化大學廣告系，主修視覺傳達設計。廣告與行銷的訓練讓我習慣先釐清受眾、訊息與使用情境，再決定視覺方向。我也做商業攝影、木雕與雕塑，曾入選台中雕塑獎。</p></div>
 <AboutSkills/>
</section><section className="about-experience"><div className="about-section-heading"><p className="eyebrow">EXPERIENCE</p><h2>在不同場域，累積整合能力。</h2></div>{experience.map(([date,company,role,text],index)=><article className="about-career" key={company}><p className="about-date">{date}</p><div><p className="about-job">{role}</p><h3>{company}</h3><p>{text}</p>{companyDetails[index]?.length>0&&<div className="about-company-functions"><h4>工作職能</h4><ul className="about-company-details">{companyDetails[index].map(([title,body])=><li key={title}><details><summary>{title}</summary><p>{body}</p></details></li>)}</ul></div>}<div className="about-career-links">{company.includes('海欣')&&<a className="career-action" href="#/projects/haixin">閱讀海欣專案 ↗</a>}{company.includes('勞朋')&&<a className="career-action" href="#/projects/roburn">閱讀勞朋專案 ↗</a>}{company==='斑馬與狗工作室'&&<a className="career-action" href="#/projects/duism">閱讀杜森專案 ↗</a>}{company.includes('海欣')&&<>
 <a className="career-action" href="#/projects/golden-hand-award">閱讀金手獎專案 ↗</a>
 <a className="career-action" href="#/projects/fairy-launch">法芮品牌發表會陳列設計 ↗</a>
</>}</div></div></article>)}</section><section className="about-contact"><p className="eyebrow">LET’S CONNECT</p><h2>讓想法，成為下一個作品。</h2><a href={'mailto:'+profile.email}>{profile.email} ↗</a></section></div>}
