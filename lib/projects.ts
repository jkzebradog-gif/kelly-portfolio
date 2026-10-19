export type ProjectBlock = {id:string;heading:string;text:string;image:string;caption:string};
export type Project = {id:string;title:string;client:string;period:string;summary:string;role:string;cover:string;blocks:ProjectBlock[];sortOrder:number;hidden:boolean};
export const seedProjects:Project[]=[{
 id:'roburn',title:'把零散素材，整理成可延續的設計基礎',client:'勞朋企業 ROBURN',period:'2024.07 — 2025.12',
 summary:'在約 40 年歷史的噴火槍製造商，擔任第一位正式設計人員。延續既有 Logo，逐步整理品牌識別、產品影像與資訊，並將它們應用在官網、型錄及海外展覽。',
 role:'主導設計資產建立與視覺執行，並與業務、研發及外部製作廠商協作。公司原有 Logo 非本人設計。',cover:'',sortOrder:0,hidden:false,
 blocks:[
 {id:'background',heading:'專案背景',text:'公司已有產品與製造技術，但品牌視覺、產品圖片、官網資訊與型錄缺乏系統性的整理。我的工作從盤點既有素材開始，逐步建立後續設計可以沿用的基礎。',image:'',caption:''},
 {id:'identity',heading:'延續既有識別，整理使用依據',text:'保留公司原有 Logo，整理深淺背景的應用版本、標誌使用優先順序與色彩資訊，製作識別參考文件。這部分的工作範圍是既有識別整理，而非 Logo 原創設計。',image:'',caption:''},
 {id:'assets',heading:'整理產品影像與資訊',text:'進行產品拍攝與情境影像製作，整理圖庫分類、命名與版本管理；同時參與官網的產品分類、資訊層級與視覺版型，以及產品總目錄的規格整理、頁面模板與印刷製作。',image:'',caption:''},
 {id:'collaboration',heading:'把設計帶進實際使用',text:'配合海外展覽製作主視覺、大型輸出與產品介紹素材，並與業務、研發及製作廠商協調規格、時程、成本與製作方式。',image:'',caption:''},
 {id:'ai',heading:'將 AI 放進商業影像流程',text:'面對產品情境照不足、拍攝成本與素材取得的限制，將 AI 場景生成、真實產品合成及 Photoshop 後製串接，應用於官網、型錄、展覽與行銷素材。',image:'',caption:''},
 {id:'outcome',heading:'完成的設計基礎',text:'整理並建立識別參考文件、產品圖庫與檔案管理方式，完成官網視覺、產品總目錄及展覽素材，並將 AI 影像製作導入日常工作流程。',image:'',caption:''}
 ]
}];
