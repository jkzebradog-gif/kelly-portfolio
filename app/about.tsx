import type {Profile} from '@/lib/portfolio';
const strengths=[
 ['01','品牌與視覺統籌','從需求釐清、視覺方向到跨媒介延伸，整合品牌、展會、門市與行銷素材，兼顧溝通目標與製作條件。'],
 ['02','設計職能與資產建置','具企業首位設計人員經驗，從零建立識別使用規範、產品圖庫、版型與檔案管理流程，讓成果可更新、可延續。'],
 ['03','AI 與商業影像整合','將生成影像、商品攝影、Photoshop 合成與後製串接，依品牌需求補足素材，並分享工具與工作流程。'],
 ['04','專案執行與製作協調','具獨立接案與企業協作經驗，能整合需求、報價、時程、印前及廠商製作，掌握品質與交付。']
];
const experience=[
 ['2026.03 — 現在','VIVISPA／海欣國際','資深平面設計師','品牌活動、療程與新品視覺，延伸至連鎖門市招牌、燈箱與陳列；將 AI 影像整合至設計流程，並協助同事運用相關工具。'],
 ['2024.07 — 2025.12','勞朋企業 ROBURN','平面／品牌設計師','擔任公司首位設計人員，建立品牌視覺與產品圖庫，整合型錄、國際展覽、包裝及官網內容，與業務、研發及外部廠商協作。'],
 ['2014.09 — 2024.06','斑馬與狗工作室','獨立平面／視覺設計師','從客戶洽談、需求整理、報價與提案，到攝影、設計、印前及交付，獨立推進專案。合作對象包含 Yamaha 音樂教室、台北市動物保護處。'],
 ['2011.08 — 2014.08','狗屋／果樹出版社','美術編輯','執行書籍封面與內頁、廣告、商品及宣傳物設計，累積出版編排、影像與實體製作經驗。']
];
export default function About({profile}:{profile:Profile}){return <div className="about-editorial"><section className="about-hero"><p className="eyebrow">01 / ABOUT KELLY</p><div className="about-hero-grid"><div><p className="about-kicker">品牌視覺 · 設計統籌 · AI 影像整合</p><h1>{profile.name}<span>{profile.englishName}</span></h1><p className="about-statement">把講不清楚的想法，<br/>變成看得見、做得出的設計。</p><p className="about-intro">{profile.bio}</p><a className="text-link" href={'mailto:'+profile.email}>{profile.email} ↗</a></div><aside className="about-signature" aria-label="工作方法"><span aria-hidden="true">KJ<span>創意與實務之間</span></span><ol><li>理解需求</li><li>整理方向</li><li>整合資源</li><li>推進落地</li></ol></aside></div></section><section className="about-capabilities"><div className="about-section-heading"><p className="eyebrow">WHAT I BRING</p><h2>從畫面，到整體規劃。</h2></div><div className="about-capability-grid">{strengths.map(([n,title,text])=><article key={n}><span className="eyebrow">{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="about-experience"><div className="about-section-heading"><p className="eyebrow">EXPERIENCE</p><h2>在不同場域，累積整合能力。</h2></div>{experience.map(([date,company,role,text])=><article className="about-career" key={company}><p className="about-date">{date}</p><div><p className="about-job">{role}</p><h3>{company}</h3><p>{text}</p>{company.includes('ROBURN')&&<a className="text-link" href="#/projects/roburn">閱讀勞朋專案 ↗</a>}</div></article>)}</section><section className="about-foundation"><div><p className="eyebrow">BACKGROUND & TOOLS</p><h2>設計之外的視角</h2></div><div><p>中國文化大學廣告系畢業，視覺傳達設計背景。廣告與行銷的訓練，讓我在設計之前，先思考受眾、訊息與使用情境。</p><p>另有商業攝影、木雕與雕塑創作經驗，曾入選台中雕塑獎，並於文化大學推廣教育部兼職授課。</p><p className="about-tools">Illustrator / Photoshop / InDesign / Lightroom / Premiere<br/>生成式 AI 影像工具 / ComfyUI</p></div></section><section className="about-contact"><p className="eyebrow">LET’S CONNECT</p><h2>讓想法，成為下一個作品。</h2><a href={'mailto:'+profile.email}>{profile.email} ↗</a></section></div>}
