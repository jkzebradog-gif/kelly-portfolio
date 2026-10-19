export type Category='design'|'photography'|'film';
export type Work={id:string;title:string;brand:string;category:Category;description:string;image:string;media:string;mediaType:'image'|'video'|'youtube'|'vimeo';sortOrder:number;hidden:number};
export type Profile={name:string;englishName:string;headline:string;bio:string;email:string;portrait:string};
export const defaultProfile:Profile={name:'江婉婷',englishName:'Kelly Jiang',headline:'讓想像，有了形狀。',bio:'',email:'',portrait:''};
export const labels:Record<Category,string>={design:'平面設計',photography:'攝影作品',film:'影像作品'};
export const seedWorks:Work[]=[
{id:'fairy',title:'頭皮的渡假村',brand:'FAIRY 法芮',category:'design',description:'活動海報與實景呈現',image:'./assets/work-1.jpg',media:'./assets/work-1.jpg',mediaType:'image',sortOrder:0,hidden:0},
{id:'vivi-water',title:'極潤透氧，賦活新生',brand:'VIVIBEAUTY',category:'design',description:'產品形象視覺',image:'./assets/work-2.jpg',media:'./assets/work-2.jpg',mediaType:'image',sortOrder:1,hidden:0},
{id:'vivi-nature',title:'將身體，還與自然',brand:'VIVIBEAUTY',category:'design',description:'芳療形象海報',image:'./assets/work-3.jpg',media:'./assets/work-3.jpg',mediaType:'image',sortOrder:2,hidden:0},
{id:'heat',title:'生活裡的熱度',brand:'PRODUCT VISUALS',category:'design',description:'產品情境合成',image:'./assets/work-4.jpg',media:'./assets/work-4.jpg',mediaType:'image',sortOrder:3,hidden:0},
{id:'space',title:'想像，不設限',brand:'TUNG JINN',category:'design',description:'太空主題系列視覺',image:'./assets/work-5.jpg',media:'./assets/work-5.jpg',mediaType:'image',sortOrder:4,hidden:0}];
