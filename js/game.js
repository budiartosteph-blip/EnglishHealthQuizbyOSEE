/**
 * HEALTH MILLIONAIRE QUIZ - GAMEPLAY CONTROLLER
 * Manages game state, timer, lifelines, scoring, and UI animations.
 */

class HealthMillionaireGame {
  constructor() {
    this.currentLevel = 1;
    this.totalLevels = 15;
    this.timeLimit = 45; // seconds
    this.currentTime = this.timeLimit;
    this.timerId = null;
    this.isAnswering = false;
    this.isSwitched = false;
    this.eliminatedOptions = [];
    this.securedPrize = "Rp 0";
    
    this.lifelines = {
      fifty: true,
      audience: true,
      phone: true,
      switch: true
    };

    this.currentQuestion = null;
    this.initDOMElements();
    this.bindEvents();
    this.renderLadder();
  }

  initDOMElements() {
    // Screens
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameOverModal = document.getElementById("game-over-modal");
    this.pearlModal = document.getElementById("pearl-modal");
    this.lifelineModal = document.getElementById("lifeline-modal");
    this.winModal = document.getElementById("win-modal");

    // Game Elements
    this.categoryBadge = document.getElementById("category-badge");
    this.questionText = document.getElementById("question-text");
    this.timerDisplay = document.getElementById("timer-display");
    this.timerCircle = document.getElementById("timer-circle");
    this.currentPrizeDisplay = document.getElementById("current-prize-display");
    this.securedPrizeDisplay = document.getElementById("secured-prize-display");
    this.ladderList = document.getElementById("ladder-list");

    // Option Buttons
    this.optionBtns = [
      document.getElementById("opt-0"),
      document.getElementById("opt-1"),
      document.getElementById("opt-2"),
      document.getElementById("opt-3")
    ];

    // Lifeline Buttons
    this.btnFifty = document.getElementById("life-fifty");
    this.btnAudience = document.getElementById("life-audience");
    this.btnPhone = document.getElementById("life-phone");
    this.btnSwitch = document.getElementById("life-switch");

    // Controls
    this.btnStart = document.getElementById("btn-start");
    this.btnMute = document.getElementById("btn-mute");
    this.btnWalkAway = document.getElementById("btn-walk-away");
    this.btnNextLevel = document.getElementById("btn-next-level");
    this.btnRestart = document.getElementById("btn-restart");
    this.btnPlayAgainWin = document.getElementById("btn-play-again-win");
  }

  bindEvents() {
    this.btnStart.addEventListener("click", () => this.startGame());
    this.btnNextLevel.addEventListener("click", () => this.advanceToNextLevel());
    this.btnRestart.addEventListener("click", () => this.restartGame());
    this.btnPlayAgainWin.addEventListener("click", () => this.restartGame());
    
    this.btnMute.addEventListener("click", () => {
      const isEnabled = Sound.toggleSound();
      this.btnMute.innerHTML = isEnabled 
        ? `<svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M17.536 6.464a7 7 0 010 9.072M9 19V5l-4 4H1v6h4l4 4z"/></svg>`
        : `<svg class="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>`;
    });

    this.btnWalkAway.addEventListener("click", () => this.walkAway());

    // Option clicks
    this.optionBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => this.handleAnswerSelect(idx));
    });

    // Lifeline clicks
    this.btnFifty.addEventListener("click", () => this.useFiftyFifty());
    this.btnAudience.addEventListener("click", () => this.useAudiencePoll());
    this.btnPhone.addEventListener("click", () => this.usePhoneSpecialist());
    this.btnSwitch.addEventListener("click", () => this.useSwitchQuestion());
  }

  renderLadder() {
    this.ladderList.innerHTML = "";
    for (let lvl = this.totalLevels; lvl >= 1; lvl--) {
      const qData = QUESTION_BANK[lvl];
      const isMilestone = qData.safe || lvl === this.totalLevels;
      
      const li = document.createElement("li");
      li.id = `ladder-lvl-${lvl}`;
      li.className = `ladder-step flex items-center justify-between px-3 py-1.5 rounded-lg border border-transparent text-xs font-semibold ${
        isMilestone ? "text-amber-400 font-bold milestone" : "text-slate-300"
      }`;

      li.innerHTML = `
        <span class="flex items-center gap-1.5">
          <span class="w-5 text-right font-orbitron">${lvl}</span>
          ${isMilestone ? '<span class="text-amber-400 text-sm">★</span>' : '<span class="text-slate-600">•</span>'}
        </span>
        <span class="font-orbitron tracking-wide">${qData.prize}</span>
      `;
      this.ladderList.appendChild(li);
    }
  }

  updateLadderHighlight() {
    for (let lvl = 1; lvl <= this.totalLevels; lvl++) {
      const el = document.getElementById(`ladder-lvl-${lvl}`);
      if (!el) continue;
      el.classList.remove("active", "passed");
      if (lvl === this.currentLevel) {
        el.classList.add("active");
      } else if (lvl < this.currentLevel) {
        el.classList.add("passed");
      }
    }
  }

  startGame() {
    Sound.playClick();
    Sound.startTensionDrone();
    this.startScreen.classList.add("hidden");
    this.gameScreen.classList.remove("hidden");
    this.restartGameState();
    this.loadQuestion();
  }

  restartGameState() {
    this.currentLevel = 1;
    this.securedPrize = "Rp 0";
    this.isSwitched = false;
    this.lifelines = { fifty: true, audience: true, phone: true, switch: true };
    
    // Reset lifeline button states
    [this.btnFifty, this.btnAudience, this.btnPhone, this.btnSwitch].forEach(btn => {
      btn.disabled = false;
      btn.classList.remove("opacity-30", "cursor-not-allowed", "filter", "grayscale");
    });

    this.updateSecuredPrizeBadge();
  }

  loadQuestion() {
    this.isAnswering = false;
    this.eliminatedOptions = [];
    const qData = QUESTION_BANK[this.currentLevel];
    this.currentQuestion = this.isSwitched ? qData.alternate : qData.primary;

    // Update UI headers
    this.categoryBadge.innerText = this.currentQuestion.category;
    this.questionText.innerText = this.currentQuestion.question;
    this.currentPrizeDisplay.innerText = qData.prize;

    // Reset option buttons
    const letters = ["A", "B", "C", "D"];
    this.optionBtns.forEach((btn, idx) => {
      btn.disabled = false;
      btn.className = "lozenge-btn w-full p-4 text-left flex items-center gap-3 text-slate-100 group";
      btn.innerHTML = `
        <span class="font-orbitron font-bold text-amber-400 px-2.5 py-1 rounded-full bg-slate-900/60 border border-amber-500/30 text-sm group-hover:border-amber-400 transition-colors">
          ${letters[idx]}
        </span>
        <span class="text-sm md:text-base font-medium flex-1">${this.currentQuestion.options[idx]}</span>
      `;
    });

    this.updateLadderHighlight();
    this.startTimer();
  }

  startTimer() {
    clearInterval(this.timerId);
    this.currentTime = this.timeLimit;
    this.updateTimerDisplay();

    this.timerId = setInterval(() => {
      this.currentTime--;
      this.updateTimerDisplay();

      if (this.currentTime <= 10 && this.currentTime > 0) {
        Sound.playTick(true); // urgent tick
      } else if (this.currentTime > 10) {
        Sound.playTick(false);
      }

      if (this.currentTime <= 0) {
        clearInterval(this.timerId);
        this.handleTimeout();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    this.timerDisplay.innerText = this.currentTime;
    const progressPercent = (this.currentTime / this.timeLimit) * 100;
    
    // Change circle color
    if (this.currentTime <= 10) {
      this.timerDisplay.className = "text-2xl font-black font-orbitron text-rose-400 animate-pulse";
      this.timerCircle.style.borderColor = "#EF4444";
      this.timerCircle.style.boxShadow = "0 0 15px rgba(239, 68, 68, 0.6)";
    } else {
      this.timerDisplay.className = "text-2xl font-black font-orbitron text-cyan-300";
      this.timerCircle.style.borderColor = "#06B6D4";
      this.timerCircle.style.boxShadow = "0 0 15px rgba(6, 182, 212, 0.4)";
    }
  }

  handleAnswerSelect(selectedIndex) {
    if (this.isAnswering) return;
    this.isAnswering = true;
    clearInterval(this.timerId);

    Sound.playLock();
    const selectedBtn = this.optionBtns[selectedIndex];
    selectedBtn.classList.add("selected");

    // Disable all options during suspense
    this.optionBtns.forEach(b => b.disabled = true);

    // Dramatic pause for 1.8 seconds
    setTimeout(() => {
      const isCorrect = selectedIndex === this.currentQuestion.answer;
      selectedBtn.classList.remove("selected");

      if (isCorrect) {
        selectedBtn.classList.add("correct");
        const isMilestone = QUESTION_BANK[this.currentLevel].safe || this.currentLevel === this.totalLevels;
        Sound.playCorrect(isMilestone);

        // Update safe haven guaranteed money
        if (QUESTION_BANK[this.currentLevel].safe) {
          this.securedPrize = QUESTION_BANK[this.currentLevel].prize;
          this.updateSecuredPrizeBadge();
        }

        setTimeout(() => {
          if (this.currentLevel === this.totalLevels) {
            this.handleGrandWin();
          } else {
            this.showPearlModal(true);
          }
        }, 1200);

      } else {
        selectedBtn.classList.add("wrong");
        this.optionBtns[this.currentQuestion.answer].classList.add("correct");
        Sound.playWrong();

        setTimeout(() => {
          this.handleGameOver("Jawaban salah!");
        }, 1500);
      }
    }, 1800);
  }

  handleTimeout() {
    this.isAnswering = true;
    Sound.playWrong();
    this.optionBtns[this.currentQuestion.answer].classList.add("correct");
    this.optionBtns.forEach(b => b.disabled = true);

    setTimeout(() => {
      this.handleGameOver("Waktu habis! Anda tidak sempat mengunci jawaban.");
    }, 1500);
  }

  showPearlModal(isCorrect) {
    document.getElementById("pearl-level-badge").innerText = `Level ${this.currentLevel} - ${QUESTION_BANK[this.currentLevel].prize}`;
    document.getElementById("pearl-explanation").innerText = this.currentQuestion.explanation;
    document.getElementById("pearl-clinical-note").innerText = this.currentQuestion.pearl;
    this.pearlModal.classList.remove("hidden");
  }

  advanceToNextLevel() {
    Sound.playClick();
    this.pearlModal.classList.add("hidden");
    this.currentLevel++;
    this.isSwitched = false;
    this.loadQuestion();
  }

  updateSecuredPrizeBadge() {
    this.securedPrizeDisplay.innerText = this.securedPrize;
  }

  handleGameOver(reason) {
    Sound.stopTensionDrone();
    document.getElementById("gameover-reason").innerText = reason;
    document.getElementById("gameover-final-prize").innerText = this.securedPrize;
    document.getElementById("gameover-correct-ans").innerText = this.currentQuestion.options[this.currentQuestion.answer];
    document.getElementById("gameover-explanation").innerText = this.currentQuestion.explanation;
    this.gameOverModal.classList.remove("hidden");
  }

  handleGrandWin() {
    Sound.stopTensionDrone();
    Sound.playCorrect(true);
    document.getElementById("win-explanation").innerText = this.currentQuestion.explanation;
    this.winModal.classList.remove("hidden");
    this.triggerConfetti();
  }

  walkAway() {
    if (this.isAnswering) return;
    clearInterval(this.timerId);
    Sound.playClick();
    const walkAwayPrize = this.currentLevel > 1 
      ? QUESTION_BANK[this.currentLevel - 1].prize 
      : "Rp 0";
    this.securedPrize = walkAwayPrize;
    this.handleGameOver(`Anda memutuskan berhenti dan mengamankan hadiah!`);
  }

  restartGame() {
    Sound.playClick();
    this.gameOverModal.classList.add("hidden");
    this.pearlModal.classList.add("hidden");
    this.winModal.classList.add("hidden");
    this.startGame();
  }

  // ================= LIFELINES =================

  useFiftyFifty() {
    if (!this.lifelines.fifty || this.isAnswering) return;
    this.lifelines.fifty = false;
    this.btnFifty.disabled = true;
    this.btnFifty.classList.add("opacity-30", "cursor-not-allowed", "filter", "grayscale");
    Sound.playLifeline();

    const correct = this.currentQuestion.answer;
    const incorrectIndices = [0, 1, 2, 3].filter(idx => idx !== correct);
    
    // Shuffle and pick 2 to eliminate
    incorrectIndices.sort(() => Math.random() - 0.5);
    const toEliminate = incorrectIndices.slice(0, 2);

    toEliminate.forEach(idx => {
      this.optionBtns[idx].classList.add("eliminated");
      this.optionBtns[idx].disabled = true;
    });
  }

  useAudiencePoll() {
    if (!this.lifelines.audience || this.isAnswering) return;
    this.lifelines.audience = false;
    this.btnAudience.disabled = true;
    this.btnAudience.classList.add("opacity-30", "cursor-not-allowed", "filter", "grayscale");
    Sound.playLifeline();

    const correct = this.currentQuestion.answer;
    // Generate realistic weighted audience percentages
    let correctPct = Math.floor(Math.random() * 20) + (this.currentLevel <= 7 ? 65 : 48);
    let remaining = 100 - correctPct;

    const pcts = [0, 0, 0, 0];
    pcts[correct] = correctPct;

    const wrongIndices = [0, 1, 2, 3].filter(i => i !== correct);
    const p1 = Math.floor(Math.random() * (remaining - 10));
    const p2 = Math.floor(Math.random() * (remaining - p1 - 5));
    const p3 = remaining - p1 - p2;

    pcts[wrongIndices[0]] = p1;
    pcts[wrongIndices[1]] = p2;
    pcts[wrongIndices[2]] = p3;

    // Show Lifeline Modal
    const modalContent = document.getElementById("lifeline-modal-content");
    modalContent.innerHTML = `
      <div class="text-center mb-5">
        <div class="text-3xl mb-2">📊</div>
        <h3 class="text-lg font-bold text-amber-400">Hasil Konsensus Rekan Nakes / Audiens</h3>
        <p class="text-xs text-slate-400">Distribusi persentase jawaban dari 100 tenaga kesehatan & audiens</p>
      </div>
      <div class="space-y-3">
        ${["A", "B", "C", "D"].map((letter, i) => `
          <div>
            <div class="flex justify-between text-xs font-semibold mb-1">
              <span class="text-slate-200">Opsi (${letter})</span>
              <span class="${i === correct ? 'text-emerald-400 font-bold' : 'text-slate-400'}">${pcts[i]}%</span>
            </div>
            <div class="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden border border-slate-700">
              <div class="h-full rounded-full transition-all duration-1000 ${i === correct ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-blue-600 to-indigo-500'}" style="width: ${pcts[i]}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    this.lifelineModal.classList.remove("hidden");
  }

  usePhoneSpecialist() {
    if (!this.lifelines.phone || this.isAnswering) return;
    this.lifelines.phone = false;
    this.btnPhone.disabled = true;
    this.btnPhone.classList.add("opacity-30", "cursor-not-allowed", "filter", "grayscale");
    Sound.playLifeline();

    const correctLetter = ["A", "B", "C", "D"][this.currentQuestion.answer];
    const specialist = Math.random() > 0.5 ? SPECIALIST_DATABASE.pharmacist : SPECIALIST_DATABASE.doctor;
    const advice = specialist.getAdvice(this.currentLevel, correctLetter, this.currentQuestion.question);

    const modalContent = document.getElementById("lifeline-modal-content");
    modalContent.innerHTML = `
      <div class="text-center mb-4">
        <div class="text-4xl mb-2">${specialist.avatar}</div>
        <h3 class="text-base font-bold text-emerald-400">Telepon Konsultasi Spesialis Medis</h3>
        <p class="text-xs text-amber-400 font-semibold">${specialist.name}</p>
      </div>
      <div class="bg-slate-900/90 border border-slate-700 p-4 rounded-xl text-slate-200 text-sm leading-relaxed shadow-inner">
        <p class="italic">"${advice}"</p>
      </div>
      <p class="text-[11px] text-slate-500 text-center mt-3">*Petunjuk ini merupakan opini klinis dan keputusan akhir tetap di tangan Anda.</p>
    `;

    this.lifelineModal.classList.remove("hidden");
  }

  useSwitchQuestion() {
    if (!this.lifelines.switch || this.isAnswering) return;
    this.lifelines.switch = false;
    this.btnSwitch.disabled = true;
    this.btnSwitch.classList.add("opacity-30", "cursor-not-allowed", "filter", "grayscale");
    Sound.playLifeline();

    this.isSwitched = true;
    this.loadQuestion();
  }

  closeLifelineModal() {
    Sound.playClick();
    this.lifelineModal.classList.add("hidden");
  }

  triggerConfetti() {
    // Canvas confetti celebration
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      // Simple particle shower if canvas is present
    })();
  }
}

// Global instance initiation
let GameInstance = null;
window.addEventListener("DOMContentLoaded", () => {
  GameInstance = new HealthMillionaireGame();
  
  // Close lifeline modal binding
  const btnCloseLife = document.getElementById("btn-close-lifeline");
  if (btnCloseLife) {
    btnCloseLife.addEventListener("click", () => GameInstance.closeLifelineModal());
  }
});
