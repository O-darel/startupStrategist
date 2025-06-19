# startupStrategist

Sure! Here's a clean and professional `README.md` tailored for your **AI-powered Node.js API** using Gemini:

---

# 🚀 Startup Strategist API

> **AI-powered brainstorming and planning tool for entrepreneurs**, built with Node.js and Gemini (free version).

---

## 🧠 What is this?

The **Startup Strategist API** is a simple yet powerful backend service that helps users:

* Brainstorm innovative startup ideas
* Generate business plans
* Estimate market size
* Create pitch decks
* Perform SWOT analysis

It uses Google’s **Gemini (Generative AI)** model and exposes all tools through easy-to-use API endpoints.

---

## 🔧 Tech Stack

* **Node.js + Express**
* **TypeScript**
* **Google Gemini API (Free via Makersuite)**
* Modular design for tool expansion

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/O-darel/startupStrategist.git
cd startupStrategist
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add your Gemini API Key

Create a `.env` file:

```env
GEMINI_API_KEY=your_google_generative_ai_key
```

> 🔑 You can get your API key at [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

---

### 4. Start the Server

```bash
npm run dev     # For development (using ts-node-dev)
npm run build   # Compile TypeScript
npm start       # Run compiled app
```

---

## 📡 API Endpoints

All endpoints accept `POST` requests with `Content-Type: application/json`.

---

### `/api/brainstorm`

**Body:**

```json
{
  "topic": "AI in agriculture",
  "stream": false
}
```

**Returns:** 5 innovative startup ideas around the topic.

---

### `/api/business-plan`

**Body:**

```json
{
  "idea": "AI nutrition coach",
  "stream": false
}
```

**Returns:** A business plan including mission, product, market, and monetization.

---

### `/api/market-size`

**Body:**

```json
{
  "industry": "personalized health tech",
  "stream": false
}
```

**Returns:** Global market estimate with reasoning.

---

### `/api/pitch-deck`

**Body:**

```json
{
  "idea": "Smart fridge that orders groceries",
  "stream": false
}
```

**Returns:** A text-based pitch deck with key sections.

---

### `/api/swot`

**Body:**

```json
{
  "idea": "Remote team-building VR app",
  "stream": false
}
```

**Returns:** SWOT analysis (Strengths, Weaknesses, Opportunities, Threats).

---

## 🧪 Sample cURL Request

```bash
curl -X POST http://localhost:3000/api/brainstorm \
  -H "Content-Type: application/json" \
  -d '{"topic": "mental health apps", "stream": false}'
```

---

## 🧱 Project Structure

```
.
├── agents/              # Gemini wrapper functions
├── config/              # Configs import
├── controllers/         # Route handlers
├── customMiddlewares/   # Middlewares
├── services/            # Tool logic (prompt templates)
├── utils/               # Custom error handling
├── routes/              # Express routers
├── index.ts             # Entry point
└── .env                 # API Key
```

---

## ✅ TODO / Ideas

* [ ] Stream output via SSE (for real-time UX)
* [ ] Add user authentication
* [ ] Save and retrieve past analyses
* [ ] Deploy to Railway/Render/Vercel

---

## 📄 License

MIT – feel free to fork, modify, and use it for your own startup tooling!

---
