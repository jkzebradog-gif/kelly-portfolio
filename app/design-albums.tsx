'use client';
import {useEffect,useRef,useState} from 'react';
import albums from '@/lib/design-albums.json';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
const pad=(n:number)=>String(n).padStart(2,'0');
export default function DesignAlbums(){
 const[selected,setSelected]=useState<string|null>(null);
 const[active,setActive]=useState(0);
 const[zoom,setZoom]=useState(false);
 const start=useRef<number|null>(null);
 const album=albums.find(a=>a.id===selected);
 const move=(direction:number)=>{if(!album)return;setActive(i=>(i+direction+album.images.length)%album.images.length);setZoom(false)};
 useEffect(()=>{if(!album)return;const key=(e:KeyboardEvent)=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();setActive(i=>(i+(e.key==='ArrowRight'?1:-1)+album.images.length)%album.images.length);setZoom(false)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[album]);
 return <section className="index-section era-albums" id="design-albums"><div className="section-heading"><div><p className="eyebrow">DESIGN THROUGH THE YEARS</p><h2>不同時期，同樣專注。</h2></div><span className="index-caption">依時期翻閱作品相簿</span></div><div className="era-grid">{albums.map(a=><button className="era-card" key={a.id} onClick={()=>{setSelected(a.id);setActive(0);setZoom(false)}} aria-label={'開啟'+a.title+'相簿'}><div className="era-cover"><img src={a.cover.src} alt={a.cover.alt} loading="lazy"/><span>{pad(a.images.length)} 張展板</span></div><div className="era-previews" aria-hidden="true">{a.images.slice(1,4).map(img=><img key={img.src} src={img.src} alt="" loading="lazy"/>)}</div><div className="era-caption"><div><p>{a.period}</p><h3>{a.title}</h3></div><span>翻閱相簿 ↗</span></div></button>)}</div>
 <Dialog open={!!album} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent className="portfolio-viewer era-viewer" aria-describedby="era-description"><DialogTitle>{album?.title}</DialogTitle><DialogDescription id="era-description">{album?.period} · <span aria-live="polite">{pad(active+1)} / {pad(album?.images.length||0)}</span></DialogDescription>{album&&<><div className={'media-view '+(zoom?'is-zoomed':'')} onTouchStart={e=>{start.current=e.touches.length===1?e.touches[0].clientX:null}} onTouchEnd={e=>{if(!zoom&&start.current!==null){const distance=e.changedTouches[0].clientX-start.current;if(Math.abs(distance)>60)move(distance<0?1:-1)}start.current=null}}><img src={album.images[active].src} alt={album.images[active].alt}/></div><div className="era-filmstrip" aria-label="展板預覽">{album.images.map((img,i)=><button key={img.src} aria-label={'查看第'+(i+1)+'張展板'} aria-pressed={i===active} onClick={()=>{setActive(i);setZoom(false)}} ref={el=>{if(el&&i===active)el.scrollIntoView({block:'nearest',inline:'nearest'})}}><img src={img.src} alt="" loading="lazy"/><span>{pad(i+1)}</span></button>)}</div><div className="lightbox-controls"><button onClick={()=>move(-1)}>← 上一張</button><button aria-pressed={zoom} onClick={()=>setZoom(!zoom)}>{zoom?'適合畫面 −':'放大細看 ＋'}</button><button onClick={()=>move(1)}>下一張 →</button></div></>}</DialogContent></Dialog>
 </section>
}
