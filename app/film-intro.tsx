'use client';
import site from '@/lib/site-content.json';
import {useEffect,useRef,useState} from 'react';
import {Volume2,VolumeX,Play,Pause} from 'lucide-react';
import {defaultFilmHero,type FilmHero} from '@/lib/film-hero';
export default function FilmIntro(){const hero=site.hero as FilmHero;const[muted,setMuted]=useState(true),[playing,setPlaying]=useState(false),[error,setError]=useState('');const player=useRef<HTMLVideoElement>(null),root=useRef<HTMLElement>(null),manualPause=useRef(false);

 useEffect(()=>{const video=player.current,section=root.current;if(!hero.video||!video||!section)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');manualPause.current=reduced.matches;let visible=true;
 const sync=()=>{if(!visible||document.hidden||manualPause.current){video.pause();return}video.play().catch(()=>setPlaying(false))};
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:.1});observer.observe(section);const change=()=>{manualPause.current=reduced.matches;sync()};document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',change);sync();return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);reduced.removeEventListener('change',change);video.pause()};
 },[hero.video]);
 async function togglePlay(){const video=player.current;if(!video)return;if(video.paused){manualPause.current=false;try{await video.play();setError('')}catch{setError('無法播放影片，請稍後再試。')}}else{manualPause.current=true;video.pause()}}
 function toggleSound(){const video=player.current;if(!video)return;const next=!video.muted;video.muted=next;setMuted(next);if(!next&&video.paused){manualPause.current=false;video.play().catch(()=>setPlaying(false))}}
 return <section ref={root} className="film-hero" aria-label="影像作品開場影片">{hero.video&&<video ref={player} className="film-hero-video" style={{objectFit:hero.fit}} src={hero.video} poster={hero.poster||undefined} autoPlay muted loop playsInline preload="metadata" aria-label="影像作品開場" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onVolumeChange={e=>setMuted(e.currentTarget.muted)} onError={()=>setError('影片暫時無法播放，請重新整理或瀏覽下方作品。')}/>}
 <div className="film-hero-shade"/><div className="film-hero-brand">KELLY JIANG<span>MOTION PICTURE</span></div><div className="film-hero-copy"><p className="eyebrow">STORIES IN MOTION</p>{hero.title&&<h1>{hero.title}</h1>}{hero.subtitle&&<p>{hero.subtitle}</p>}</div>
 {error&&<p className="film-hero-error" role="status">{error}</p>}<a className="film-explore" href="#/film#film-works">探索影像作品 ↓</a>
 {hero.video&&<div className="film-hero-controls" aria-label="開場影片控制"><button type="button" onClick={togglePlay} aria-label={playing?'暫停開場影片':'播放開場影片'} title={playing?'暫停':'播放'}>{playing?<Pause size={18}/>:<Play size={18}/>}</button><button type="button" className="film-sound-toggle" onClick={toggleSound} aria-label={muted?'開啟影片聲音':'關閉影片聲音'} aria-pressed={!muted}>{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}<span>{muted?'開啟聲音':'聲音已開啟'}</span></button></div>}
 </section>
}
