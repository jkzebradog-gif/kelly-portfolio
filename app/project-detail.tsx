import {useState} from 'react';
import OtherChapters from '@/app/other-chapters';
import site from '@/lib/site-content.json';
import albums from '@/lib/design-albums.json';
import type {Project} from '@/lib/projects';
import type {Work} from '@/lib/portfolio';
import PhotoAlbum from '@/app/photo-album';
import FilmAlbums from '@/app/film-albums';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {Header,Footer} from '@/app/portfolio';
const projectSites = {
 roburn: {
  url: 'https://www.roburn-torch.com/zh-TW/index',
  domain: 'roburn-torch.com',
  title: '勞朋 ROBURN 官網',
  image: './assets/albums/roburn/cover-logo.jpg',
  label: '瀏覽勞朋官網',
 },
 duism: {
  url: 'https://duism.freestore.tw/',
  domain: 'duism.freestore.tw',
  title: '杜森品牌官網',
  image: './assets/albums/duism/1.jpg',
  label: '瀏覽杜森官網',
 },
};

export default function ProjectPage({id}:{id:string}){
 const p=(site.projects as Project[]).find(p=>p.id===id&&!p.hidden);
 const [view,setView]=useState<Work|null>(null);const [zoom,setZoom]=useState(false);
 if(!p)return <main className="project-detail"><h1>找不到專案</h1><a href="#/projects">返回專案列表</a></main>;
 const website=id==='roburn'||id==='duism'?projectSites[id]:null;
 const images=albums.find(a=>a.id===id)?.images||[];
 const items:Work[]=images.map((img,i)=>({id:id+'-'+i,title:`${p.client}｜作品 ${String(i+1).padStart(2,'0')}`,brand:p.client,category:'design',description:'',image:img.src,media:img.src,mediaType:'image',sortOrder:i,hidden:0}));
 const move=(n:number)=>{if(!view)return;setView(items[(items.findIndex(w=>w.id===view.id)+n+items.length)%items.length]);setZoom(false)};
 return <><Header page="projects"/><main className="project-story"><article className="project-detail"><a className="text-link" href="#/projects#projects">← 返回專案列表</a><p className="eyebrow">{p.client} / {p.period}</p><h1>{p.title}</h1><div className="project-story-sections">{p.blocks.map((b,i)=><section key={b.id}><h2><span>{String(i+1).padStart(2,'0')}</span>{b.heading}</h2><ul>{b.text.split('\n').filter(Boolean).map((line,j)=>{const colon=line.indexOf('：');return <li key={j}>{colon>0?<><strong>{line.slice(0,colon)}</strong>{line.slice(colon)}</>:line}</li>})}</ul></section>)}</div></article>{items.length>0&&<PhotoAlbum items={items} loading={false} error={false} onOpen={w=>{setView(w);setZoom(false)}} title="專案作品" subtitle="Project Gallery" eyebrow="SELECTED VISUALS"/>}{website && (
  <a className="project-site-card" href={website.url} target="_blank" rel="noopener noreferrer">
   <img src={website.image} alt="" loading="lazy"/>
   <div className="project-site-copy">
    <p className="eyebrow">LIVE WEBSITE</p>
    <h2>{website.title}</h2>
    <p>{website.domain}</p>
    <span className="project-site-cta">{website.label} ↗</span>
   </div>
  </a>
 )}{id==='duism'&&<FilmAlbums projectId="duism"/>}<div className="project-story-back"><a className="pill" href="#/projects#projects">返回專案列表 ↗</a></div></main><OtherChapters current="projects"/><Footer/><Dialog open={!!view} onOpenChange={open=>{if(!open)setView(null)}}><DialogContent className="portfolio-viewer" aria-describedby="project-image-description" onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}}}><DialogTitle>{view?.title}</DialogTitle><DialogDescription id="project-image-description">{p.client} · 左右翻閱作品</DialogDescription>{view&&<><div className={'media-view '+(zoom?'is-zoomed':'')}><img src={view.media} alt={view.title}/></div><div className="lightbox-controls"><button onClick={()=>move(-1)}>← 上一張</button><button onClick={()=>setZoom(!zoom)} aria-pressed={zoom}>{zoom?'適合畫面 −':'放大細看 ＋'}</button><button onClick={()=>move(1)}>下一張 →</button></div></>}</DialogContent></Dialog></>
}
