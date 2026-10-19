# Kelly Jiang — 作品集

純前台 React/Vite 作品集，部署至 GitHub Pages。不需要 Cloudflare、R2、資料庫或線上後台。

## 本機預覽
Node.js 22：`npm ci` → `npm run dev`。
建置：`npm run build`。輸出位於 `dist/`。

## 更新內容
- 平面設計相簿：`lib/design-albums.json`；圖片：`public/assets/albums/`。
- 個人資料、攝影、影片與專案：`lib/site-content.json`。
- 圖片／影片路徑使用 `./assets/…`，對應 `public/assets/`。
- 封面可獨立指定，不會改變相簿內頁排序。

## 發布
Repository Settings → Pages → Source 選 GitHub Actions。推送 main 會執行 Pages 發布。
使用免費公開儲存庫，展示圖片、影片及程式碼皆公開。不使用付費服務或 Git LFS。
使用 hash 路由（例如 `#/film`），讓 GitHub Pages 的重新整理及分享連結正常運作。

保留原版於電腦的「作品集網站預覽」資料夾；不要把該資料夾的 .wrangler、資料庫、帳號設定上傳。
