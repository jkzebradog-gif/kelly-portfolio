const chapters=[
 {key:'about',number:'01',english:'ABOUT',label:'自介'},
 {key:'projects',number:'02',english:'PROJECT STORIES',label:'專案介紹'},
 {key:'design',number:'03',english:'GRAPHIC DESIGN',label:'平面設計'},
 {key:'photography',number:'04',english:'PHOTOGRAPHY',label:'攝影作品'},
 {key:'film',number:'05',english:'MOTION PICTURE',label:'影像作品'},
];
export default function OtherChapters({current}:{current:string}){
 return <section className="other-chapters" aria-label="探索其他主題"><p className="eyebrow">BEYOND THE FRAME</p><div>{chapters.filter(c=>c.key!==current).map(c=><a key={c.key} href={'#/'+c.key}><span>{c.number} / {c.english}</span><h2>{c.label} ↗</h2></a>)}</div></section>
}
