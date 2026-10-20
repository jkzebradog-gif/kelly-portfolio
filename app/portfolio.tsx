'use client';
import site from '@/lib/site-content.json';
import About from './about';
import {useState,useEffect} from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import SpaceIntro from './space-intro';
import FilmIntro from './film-intro';
import PhotoAlbum from './photo-album';
import DesignAlbums from './design-albums';
import OtherChapters from './other-chapters';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import {Empty,EmptyHeader,EmptyTitle,EmptyDescription} from '@/components/ui/empty';
import {defaultProfile,type Work,type Profile,type Category} from '@/lib/portfolio';
const pad=(n:number)=>String(n).padStart(2,'0');
export function Header({page,profile=defaultProfile}:{page:string;profile?:Profile}){return <header><a className="wordmark" href="#/">{profile.englishName}<span>PORTFOLIO</span></a><nav aria-label="主選單">{[['about','自介'],['projects','專案介紹'],['design','平面設計'],['photography','攝影作品'],['film','影像作品']].map(([key,label])=><a key={key} href={'#/'+key} aria-current={page===key?'page':undefined}>{label}</a>)}</nav></header>}
export function Footer(){return <footer><a className="wordmark" href="#/">Kelly Jiang</a><p>平面設計 / 攝影 / 影像</p></footer>}
export default function Portfolio({page='home'}:{page?:string}){
 const works=site.works as Work[];const profile={...defaultProfile,...site.profile};const loadError=false;const loading=false;const[view,setView]=useState<Work|null>(null);const[zoom,setZoom]=useState(false);const[motion,setMotion]=useState(true);
 const category:Category=page==='photography'?'photography':page==='film'?'film':'design';const items=works.filter(w=>w.category===category&&!w.hidden);
 useEffect(()=>{setMotion(!matchMedia('(prefers-reduced-motion: reduce)').matches)},[]);
 useEffect(()=>{document.documentElement.classList.toggle('no-motion',!motion);return()=>document.documentElement.classList.remove('no-motion')},[motion]);

 useEffect(()=>{if(!view)return;const key=(e:KeyboardEvent)=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){const i=items.findIndex(w=>w.id===view.id);setView(items[(i+(e.key==='ArrowRight'?1:-1)+items.length)%items.length]);setZoom(false)}};addEventListener('keydown',key);return()=>removeEventListener('keydown',key)},[view,items]);
 const open=(w:Work)=>{setView(w);setZoom(false)};
 return <><Header page={page==='home'?'design':page} profile={profile}/><main>{page==='film'&&<FilmIntro/>}{(page==='home'||page==='design')&&<SpaceIntro/>}{loading&&<div className="portfolio-loading" role="status"><Skeleton className="h-1 w-full"/><span>正在載入作品…</span></div>}{page==='about'?<About profile={profile}/>:<>
 {category==='design'?<><section id="portfolio-start" className="design-intro"><div><p className="eyebrow">KELLY JIANG / SELECTED WORKS</p><h1>平面設計<span>Graphic Design</span></h1></div><div className="design-intro-aside"><p>從想像到畫面，<br/>讓每個細節都有意義。</p><button onClick={()=>dispatchEvent(new Event('kelly-replay-intro'))}>回到太空開場 ↑</button></div></section>
 <DesignAlbums/></>:category==='photography'?<PhotoAlbum items={items} loading={loading} error={loadError} onOpen={open}/>:<section id="film-works" className="collection-page film"><p className="eyebrow">05 / MOTION PICTURE</p><h1>影像作品<br/><span>Motion Picture</span></h1><div className="collection-sub"><h2>精選影片</h2><span>{pad(items.length)} WORKS</span></div>{items.length?<div className="media-grid film">{items.map(w=><button key={w.id} className="media-card" onClick={()=>open(w)}>{w.image?<img src={w.image} alt={w.title} loading="lazy"/>:<div className="film-cover">▶</div>}<h3>{w.title}<span>播放 ↗</span></h3><p>{w.description}</p></button>)}</div>:!loading&&!loadError?<Empty className="empty-collection"><EmptyHeader><EmptyTitle>影像作品整理中</EmptyTitle><EmptyDescription>新的作品，將在這裡與你見面。</EmptyDescription></EmptyHeader></Empty>:null}</section>}</>}{loadError&&<p className="load-notice" role="status">最新內容暫時無法載入，請稍後重新整理。</p>}<OtherChapters current={page==='home'?'design':page}/></main><Footer/>
 <Dialog open={!!view} onOpenChange={o=>{if(!o)setView(null)}}><DialogContent className="portfolio-viewer" aria-describedby="work-description"><DialogTitle>{view?.title}</DialogTitle><DialogDescription id="work-description">{view?.brand} · {view?.description}</DialogDescription>{view&&<><div className={'media-view '+(zoom?'is-zoomed':'')}>{view.mediaType==='image'?<img src={view.media} alt={view.title}/>:view.mediaType==='video'?<video src={view.media} poster={view.image||undefined} controls playsInline preload="metadata"/>:<iframe src={view.media} title={view.title} allow="fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/>}</div><div className="lightbox-controls"><button onClick={()=>{setView(items[(items.findIndex(w=>w.id===view.id)-1+items.length)%items.length]);setZoom(false)}}>← 上一件</button>{view.mediaType==='image'&&<button onClick={()=>setZoom(!zoom)} aria-pressed={zoom}>{zoom?'適合畫面 −':'放大細看 ＋'}</button>}<button onClick={()=>{setView(items[(items.findIndex(w=>w.id===view.id)+1)%items.length]);setZoom(false)}}>下一件 →</button></div></>}</DialogContent></Dialog>
 </>}
