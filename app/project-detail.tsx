import OtherChapters from '@/app/other-chapters';
import site from '@/lib/site-content.json';
import type {Project} from '@/lib/projects';

import {Header,Footer} from '@/app/portfolio';

export default function ProjectPage({id}:{id:string}){const p=(site.projects as Project[]).find(p=>p.id===id);if(!p)return <main><h1>找不到專案</h1><a href="#/projects">返回專案列表</a></main>;return <><Header page="projects"/><main className="project-detail"><a className="text-link" href="#/projects">← 返回專案列表</a><p className="eyebrow">{p.client}{p.period&&' / '+p.period}</p><h1>{p.title}</h1><p className="project-lead">{p.summary}</p>{p.role&&<div className="project-role"><h2>我的角色</h2><p>{p.role}</p></div>}{p.cover&&<img className="project-full-image" src={p.cover} alt={p.title}/>}<div className="project-blocks">{p.blocks.map(b=><section key={b.id}>{b.heading&&<h2>{b.heading}</h2>}{b.text&&<p>{b.text}</p>}{b.image&&<figure><img className="project-full-image" src={b.image} alt={b.caption||b.heading||p.title} loading="lazy"/>{b.caption&&<figcaption>{b.caption}</figcaption>}</figure>}</section>)}</div><a className="pill" href="#/projects">返回專案列表 ↗</a></main><OtherChapters current="projects"/><Footer/></>}
