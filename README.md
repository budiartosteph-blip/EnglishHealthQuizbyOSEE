# EnglishHealthQuizbyOSEE 🩺💰
> **Interactive Medical & Pharmacy Trivia Game by OSEE.CO.ID**  
> Reverse engineered and adapted from the legendary TV game show mechanics of *Who Wants to Be a Millionaire* (CrazyGames) specifically tailored for **Medical Sciences, Clinical Pharmacy, Pharmacology, and Good Distribution Practice (GDP) Regulations**.

![EnglishHealthQuizbyOSEE Banner](https://img.shields.io/badge/EnglishHealthQuizbyOSEE-Medical%20%26%20Pharmacy-blue?style=for-the-badge&logo=medscape)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20WebAudioAPI-amber?style=for-the-badge)
![Status](https://img.shields.io/badge/Offline-100%25%20Zero%20Dependencies-emerald?style=for-the-badge)
![Brand](https://img.shields.io/badge/Powered%20By-osee.co.id-orange?style=for-the-badge)

---

## 🌟 Core Game Features & Mechanics

Engineered to deliver an authentic TV-studio suspense atmosphere with rigorous educational rigor:

### 1. 🪜 15 Progressive Tiers (Rp 100,000 to Rp 1,000,000,000)
Question difficulty is systematically stratified according to medical and pharmaceutical curricula:
- **Tiers 1 – 5 (Foundation - Public Health & Wellness)**: Hydration, nutritional biochemistry, fat vs water-soluble vitamins, acute first aid (R.I.C.E.), vital sign benchmarks (SpO2, pulse), and safe household drug disposal.
- **Tiers 6 – 10 (Intermediate - Practical Pharmacotherapy & Clinical Pathology)**: Pharmaceutical OTC/POM regulatory scheduling symbols, Latin prescription abbreviations (*p.c., a.c., p.r.n.*), Antimicrobial Resistance (AMR), multivalent metal cation chelation, Dengue vector bionomics, and fasting plasma glucose diagnostic cutoffs.
- **Tiers 11 – 15 (Advanced - Clinical Pharmacology & GDP Regulations)**: Good Distribution Practice (GDP) cold chain validation (+2°C to +8°C) and Vaccine Vial Monitors (VVM), specific antidotes (N-Acetylcysteine for acetaminophen, Naloxone for opioids), clinical bioavailability & CYP3A4 interactions, ACEI bradykinin dry cough, and recombinant monoclonal antibodies targeting HER2 (Trastuzumab).

### 2. 🛡️ 2 Guaranteed Safe Havens
- **Tier 5**: Locks in guaranteed prize of **Rp 1,000,000**.
- **Tier 10**: Locks in guaranteed prize of **Rp 32,000,000**.
- If a player falters at higher tiers, accumulated winnings never drop to zero; the player takes home the prize from the last cleared safe haven.

### 3. 🩺 4 Thematic Clinical Lifelines
- 🧪 **50:50 (Lab Elimination)**: Automatically purges 2 incorrect clinical distractor choices.
- 📊 **Colleague Consensus (Peer Poll)**: Displays dynamic bar charts reflecting voting percentages from a simulated panel of 100 healthcare practitioners.
- 🩺 **Specialist Consult (Tele-Consultation)**: Consult recognized clinicians (**Pharmacist Budiarto, B.Pharm.** or **Dr. Farhan, Pediatrician**) who provide rationale and clinical confidence levels.
- 🔄 **Case Referral (Switch Question)**: Swaps out an intractable question for an alternate clinical case at the exact same tier value.

### 4. 🔊 Synthetic Audio Engine (Web Audio API)
- 100% pure client-side mathematical sound synthesis using HTML5 Web Audio API oscillators and gain nodes.
- Produces cinematic tension drone, urgent heartbeat ticks, answer lock-in clangs, fanfare chords, and buzzer SFX without any external MP3 files.
- Operates 100% offline with zero latency and zero CORS complications.

### 5. 💡 Clinical Pearl Educational Insights
- Every round presents an evidence-based clinical pearl detailing the pathophysiology, pharmacodynamics, and relevant regulatory literature (WHO, CDC, FDA, USP).

---

## 📂 Project Architecture

```
E:\Belajar GitHub\health-millionaire-quiz\
├── index.html            # Main game layout, OSEE branding, and interactive modals
├── assets\
│   ├── logo_osee.png     # Official high-resolution OSEE logo
│   └── logo_osee_web.png # Transparent web banner logo of osee.co.id
├── css\
│   └── style.css         # TV studio stage lighting, lozenge buttons, and animations
├── js\
│   ├── audio.js          # Web Audio API procedural sound engine
│   ├── questions.js      # 30 Curated clinical questions (15 primary + 15 alternates)
│   └── game.js           # Core state machine, countdown timer, lifelines, and modals
└── README.md             # Project documentation and deployment guide
```

---

## 🚀 How to Run Locally & Deploy

### Run on Localhost:
1. Open PowerShell and start a local HTTP server:
   ```bash
   cd "E:\Belajar GitHub\health-millionaire-quiz"
   python -m http.server 8080
   ```
2. Navigate in any browser to:
   **`http://localhost:8080`**

### Deploy to GitHub Pages:
1. Push to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: release EnglishHealthQuizbyOSEE interactive trivia game"
   git branch -M main
   git remote add origin https://github.com/USERNAME/EnglishHealthQuizbyOSEE.git
   git push -u origin main
   ```
2. In the repository settings on GitHub, navigate to **Settings** -> **Pages**, set source branch to `main`, and click **Save**.

---

*Designed and engineered by OSEE (osee.co.id) for global medical, pharmacy, and healthcare continuing education.*
