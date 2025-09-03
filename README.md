
# NebulaIoT

一個包含前端與後端的 IoT 與電力設備雲端管理平台雛形。

## 專案結構

- `frontend`: Vue 3 + Vite 前端專案
- `backend`: Node.js + Express 後端 API 服務

## 先決條件

- Node.js 18+ 建議
- npm 9+

## 安裝依賴

在前端與後端資料夾各自安裝依賴：

```bash
cd backend && npm install
cd ../frontend && npm install
```

## 啟動方式

### 後端（Express API）

預設在 `http://0.0.0.0:3000` 啟動，提供測試 API `GET /devices`。

```bash
cd backend
node index.js
```

### 前端（Vite + Vue 3）

預設在 `http://0.0.0.0:5173` 啟動，並呼叫後端 API `http://localhost:3000`。

```bash
cd frontend
npm run dev
```

若要修改 API 位址，可調整 `frontend/src/api/index.ts` 內的 `baseURL`。

## 建置與預覽（前端）

```bash
cd frontend
npm run build
npm run preview
```

## API 範例

```http
GET /devices
[
  { "id": 1, "name": "電錶-001", "status": "online" },
  { "id": 2, "name": "逆變器-002", "status": "offline" }
]
```

## 開發說明

- 前端開發伺服器：`vite`，已設定 `host=0.0.0.0`、`port=5173`。
- 後端服務：`express` 監聽 `0.0.0.0:3000`。
- 跨來源：已於後端啟用 `cors`。
