import {createRoot} from 'react-dom/client';
import {useEffect,useState} from 'react';
import Portfolio,{Header,Footer} from './app/portfolio';
import OtherChapters from './app/other-chapters';
import ProjectSection from './app/project-section';
import ProjectDetail from './app/project-detail';
import MushroomIntro from './app/mushroom-intro';
import './app/globals.css';
import './app/projects.css';
function route(){return location.hash.startsWith('#/')?location.hash.slice(2).split('#')[0]:'design'}
function App(){const[page,setPage]=useState(route());useEffect(()=>{const change=()=>{const next=route();setPage(next);const anchor=location.hash.split('#')[2];requestAnimationFrame(()=>{if(anchor)document.getElementById(anchor)?.scrollIntoView();else window.scrollTo(0,0)})};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change)},[]);
 if(page.startsWith('projects/'))return <ProjectDetail key={page} id={page.slice(9)}/>;
 if(page==='projects')return <><Header page="projects"/><main className="projects-page"><MushroomIntro/><ProjectSection/></main><OtherChapters current="projects"/><Footer/></>;
 if(['','design','about','photography','film'].includes(page))return <Portfolio key={page} page={page||'design'}/>;
 return <><Header page=""/><main className="about-page"><h1>找不到這個頁面</h1><a href="#/design">返回作品集</a></main><Footer/></>;
}
createRoot(document.getElementById('root')!).render(<App/>);
