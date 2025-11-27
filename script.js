// =====================================================
//  類型定義與結果文案
// =====================================================

const RESULT_TYPES = ["DIGITAL", "MARKETING", "MECHANICAL", "ELECTRICAL", "GREEN"];

// 每一題對應的背景圖（依序對應第 1～8 題）
const QUIZ_BACKGROUNDS = [
  "image/background01.png", // 第 1 題
  "image/background02.png", // 第 2 題
  "image/background03.png", // 第 3 題
  "image/background04.png", // 第 4 題
  "image/background05.png", // 第 5 題
  "image/background06.png", // 第 6 題
  "image/background07.png", // 第 7 題
  "image/background08.png"  // 第 8 題（不計分那題）
];

// 各類型結果說明
const TYPE_META = {
  DIGITAL: {
    code: "DIGITAL",
    name: "數位資訊",
    title: "數位資訊狠角色",
    tag: "擅長在數據與程式之間找到答案",
    description:
      "你對數位世界格外敏感，喜歡拆解系統邏輯、整理資訊與優化流程。面對問題，你習慣先查資料、看趨勢、比對數據，再做出精準判斷。你不只是會「用工具」，更在意如何把工具用到最好。",
    industry:
      "你適合往前端／後端工程師、資料分析、系統整合、雲端服務、AI 應用、數位產品設計等方向發展。只要是需要把資料變成決策、把想法變成可運作系統的角色，你都很有發揮空間。",
    courses: [
      "Figma UI/UX 與前端整合實務",
      "Java／Python 軟體工程師就業養成班",
      "WordPress 前端工程師暨視覺設計養成"
    ]
  },
  MARKETING: {
    code: "MARKETING",
    name: "國際行銷企劃",
    title: "國際行銷狠角色",
    tag: "擅長讀懂人心與市場動向",
    description:
      "你對「人」與「故事」特別敏銳，會觀察受眾反應、流行趨勢與品牌氛圍。你喜歡把複雜的資訊整理成好懂又有畫面感的內容，並且願意跨語言、跨文化去理解不同市場的需求。",
    industry:
      "你適合發展在國際行銷企劃、品牌經營、數位內容策略、跨國商務、B2B／B2C 行銷專員等角色。越需要整合資訊、說好一個故事、連結不同市場的工作，你越容易成為關鍵人物。",
    courses: [
      "國際經貿管理與商務溝通實務",
      "跨境電商與整合行銷企劃班",
      "ESG 永續與品牌溝通人才培訓"
    ]
  },
  MECHANICAL: {
    code: "MECHANICAL",
    name: "工業機械",
    title: "工業機械狠角色",
    tag: "擅長把想法做成看得見的實體",
    description:
      "你很有「動手做」的特質，喜歡理解結構、流程與機構如何組合在一起。看到設備與產線，你會直覺去想：這邊能不能更順？這個零件是不是可以改？你享受把複雜機構調整到剛剛好的成就感。",
    industry:
      "你適合往機械設計、機構工程師、自動化設備、智慧製造、產線優化、機台維護與改善等職涯前進。在工廠現場、智慧製造與機械整合領域裡，你會是非常實用的戰力。",
    courses: [
      "智動化機械加工與維修班",
      "工業機械設計與 3D 製圖實務",
      "智慧製造與自動化設備整合培訓"
    ]
  },
  ELECTRICAL: {
    code: "ELECTRICAL",
    name: "電子電機",
    title: "電子電機狠角色",
    tag: "擅長掌控電力、設備與穩定性",
    description:
      "你對電路、設備運作與穩定度格外在意，會主動注意安全、風險與細節。看到機台、配電、設備異常，你會想查清楚原因、確保系統可以長時間安全運轉。你是團隊中很可靠的底層守門員。",
    industry:
      "你適合往電子電機工程、設備維護、智慧電網、工業配電、儀控系統等方向發展。越是牽涉用電安全、設備穩定、系統可靠度的工作，就越需要你的存在。",
    courses: [
      "智慧電機與配電實務班",
      "工業儀控與設備維護培訓",
      "智慧電網與再生能源電力系統"
    ]
  },
  GREEN: {
    code: "GREEN",
    name: "綠能科技",
    title: "綠能科技狠角色",
    tag: "擅長在環境與資源之間找到平衡",
    description:
      "你會注意環境、資源與長期影響，常常在心裡幫世界做風險評估：這樣做到底耗不耗能？有沒有更永續的方式？你願意為了更好的未來多花一點力氣，是很有影響力的穩定力量。",
    industry:
      "你適合投入再生能源、風電／太陽能、節能建築、環境工程、永續顧問與 ESG 管理等領域。只要是把「環境、能源與產業」拉在一起思考的工作，你都能找到自己的舞台。",
    courses: [
      "離岸風電設備與巡檢人才培訓",
      "再生能源與智慧節能系統應用",
      "企業 ESG 永續數位管理人才班"
    ]
  }
};

// =====================================================
// 題目設定（前 7 題計分，第 8 題僅紀錄不計分）
// 主類型 +2 分，副類型 +1 分
// =====================================================

const questions = [
  {
    text: "早晨喚醒你後的第一件事，通常是什麼？",
    scored: true,
    options: [
      {
        text: "查看手機或打開電視，掌握最新社群與新聞動態",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "感受窗外的天氣、光線和溫度變化",
        main: "GREEN",
        sub: "ELECTRICAL"
      },
      {
        text: "思考今天要完成哪些實體工作或流程",
        main: "MECHANICAL",
        sub: "MARKETING"
      }
    ]
  },
  {
    text: "滑手機時，什麼新聞標題最吸引你？",
    scored: true,
    options: [
      {
        text: "AI人工智慧、程式語言、App開發新技術",
        main: "DIGITAL",
        sub: "MECHANICAL"
      },
      {
        text: "最新的手機晶片、顯卡或硬體拆解影片",
        main: "ELECTRICAL",
        sub: "GREEN"
      },
      {
        text: "知名品牌行銷案例、創意廣告、國際市場分析",
        main: "MARKETING",
        sub: "DIGITAL"
      }
    ]
  },
  {
    text: "在目前團隊合作中，你比較常被當成哪一種角色？",
    scored: true,
    options: [
      {
        text: "資訊彙整者：把大家的資料整理成清楚架構",
        main: "DIGITAL",
        sub: "MARKETING"
      },
      {
        text: "技術執行者：處理設備、線路相關工作",
        main: "ELECTRICAL",
        sub: "MECHANICAL"
      },
      {
        text: "永續把關者：熱愛大自然、關注環境永續",
        main: "GREEN",
        sub: "MARKETING"
      },
      {
        text: "策略激發者：幫大家擬定方針，建立策略",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "設備建構者：負責組裝、測試與調整實體設備",
        main: "MECHANICAL",
        sub: "ELECTRICAL"
      }
    ]
  },
  {
    text: "如果全國大停電，伸手不見五指，你的直覺反應是？",
    scored: true,
    options: [
      {
        text: "立刻上網搜尋相關資訊，並做出判斷與分析",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "動手拆解電路或結構，試圖從設備狀況找答案",
        main: "ELECTRICAL",
        sub: "MECHANICAL"
      },
      {
        text: "先觀察這個狀況會對環境、資源造成什麼影響",
        main: "GREEN",
        sub: "DIGITAL"
      }
    ]
  },
  {
    text: "如果你能擁有一種超能力，你最希望是？",
    scored: true,
    options: [
      {
        text: "可以精準掌控電流與能源流動，確保系統永遠穩定運轉",
        main: "ELECTRICAL",
        sub: "GREEN"
      },
      {
        text: "只要看過一次，就能建造出任何精密機構或機械裝置",
        main: "MECHANICAL",
        sub: "DIGITAL"
      },
      {
        text: "一開口就能說服對方，輕鬆處理國際簡報與商業談判",
        main: "MARKETING",
        sub: "ELECTRICAL"
      },
      {
        text: "能感知自然環境變化，快速調整城市與建築資源配置",
        main: "GREEN",
        sub: "MECHANICAL"
      }
    ]
  },
  {
    text: "如果要幫世界解決一個問題，你最想投入哪一塊？",
    scored: true,
    options: [
      {
        text: "守護資訊安全與資料隱私，讓系統更值得被信任",
        main: "DIGITAL",
        sub: "ELECTRICAL"
      },
      {
        text: "解決能源短缺，往永續方向前進",
        main: "GREEN",
        sub: "MARKETING"
      },
      {
        text: "透過自動化與機構設計，讓流程更順、更省力",
        main: "MECHANICAL",
        sub: "DIGITAL"
      },
      {
        text: "協助國際合作，讓好的技術被更多地方看見",
        main: "MARKETING",
        sub: "GREEN"
      },
      {
        text: "建置更穩定的電力基礎設施，避免系統中斷或大規模停電",
        main: "ELECTRICAL",
        sub: "MECHANICAL"
      }
    ]
  },
  {
    text: "終於到了休假，你更想要去哪裡放鬆？",
    scored: true,
    options: [
      {
        text: "高科技展，看看最新設備與應用",
        main: "ELECTRICAL",
        sub: "DIGITAL"
      },
      {
        text: "到大自然走走，或參觀永續建築與綠能展示館",
        main: "GREEN",
        sub: "MECHANICAL"
      },
      {
        text: "去 DIY 工坊，專心組裝、動手做一些東西",
        main: "MECHANICAL",
        sub: "ELECTRICAL"
      },
      {
        text: "逛市集、看展覽，觀察人群與最新流行趨勢",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "參觀電玩或數位娛樂展，體驗沉浸式互動內容",
        main: "DIGITAL",
        sub: "MARKETING"
      }
    ]
  },
  {
    text: "完成這項測驗後，你最期待的是？",
    scored: false,
    options: [
      {
        text: "獲得一份資訊完整的數據分析報告",
        main: null,
        sub: null
      },
      {
        text: "直接行動，準備對世界大展身手",
        main: null,
        sub: null
      },
      {
        text: "得到實質補貼的意外收穫",
        main: null,
        sub: null
      }
    ]
  }
];

const totalQuestions = questions.length; // 包含最後一題不計分

// =====================================================
// 狀態
// =====================================================

let currentIndex = 0; // 目前題目 index
let selectedIndices = new Array(totalQuestions).fill(null); // 每題選到哪個選項
let selectedTexts = new Array(totalQuestions).fill("");     // 每題選項文字（送回表單用）

// =====================================================
// DOM 元素
// =====================================================

const stepIntro   = document.getElementById("step-intro");
const stepQuiz    = document.getElementById("step-quiz");
const stepLoading = document.getElementById("step-loading");
const stepResult  = document.getElementById("step-result");

const nameInput    = document.getElementById("name");
const emailInput   = document.getElementById("email");
const privacyInput = document.getElementById("privacy");

const btnStart = document.getElementById("btnStart");
const btnPrev  = document.getElementById("btnPrev");

const questionContainer = document.getElementById("questionContainer");
const progressInner     = document.getElementById("progressInner");

const resultName        = document.getElementById("resultName");
const resultTitle       = document.getElementById("resultTitle");
const resultTypeTag     = document.getElementById("resultTypeTag");
const resultDescription = document.getElementById("resultDescription");
const resultIndustry    = document.getElementById("resultIndustry");
const resultCourses     = document.getElementById("resultCourses");

const btnRestart = document.getElementById("btnRestart");
const btnShare   = document.getElementById("btnShare");

const statusInput = document.getElementById("status");

// Google 表單相關
const googleForm = document.getElementById("googleForm");
const gfName     = document.getElementById("gf-name");
const gfEmail    = document.getElementById("gf-email");
const gfScore    = document.getElementById("gf-score");
const gfResult   = document.getElementById("gf-result");

const gfStatus = document.createElement("input");
gfStatus.type = "hidden";
gfStatus.name = "entry.1683421796";  // ← 你提供的欄位編號
gfStatus.id = "gf-status";
googleForm.appendChild(gfStatus);

const gfQ = [];
for (let i = 1; i <= 8; i++) {
  gfQ[i] = document.getElementById(`gf-q${i}`);
}

// 隱私權 Modal
const privacyModal     = document.getElementById("privacyModal");
const btnPrivacy       = document.getElementById("btnPrivacy");
const btnPrivacyClose  = document.getElementById("btnPrivacyClose");

// =====================================================
// 工具函式
// =====================================================

// 顯示指定 Step，其他 Step 收起
function showStep(stepElement) {
  [stepIntro, stepQuiz, stepLoading, stepResult].forEach((step) => {
    if (step) step.classList.remove("active");
  });
  stepElement.classList.add("active");

  // 每次切換畫面都回頂端，避免捲動殘留
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });
}

// 設定表單欄位錯誤訊息
function setError(fieldName, message) {
  const el = document.querySelector(`.error-message[data-for="${fieldName}"]`);
  if (el) el.textContent = message || "";
}

// 首頁表單驗證（姓名 / Email / 隱私權勾選）
function validateIntroForm() {
  let valid = true;
  setError("name", "");
  setError("email", "");
  setError("status", "");
  setError("privacy", "");

  if (!nameInput.value.trim()) {
    setError("name", "請輸入姓名");
    valid = false;
  }

  if (!emailInput.value.trim()) {
    setError("email", "請輸入電子信箱");
    valid = false;
  }


  if (!statusInput.value.trim()) {
    setError("status", "請選擇你的身分別");
    valid = false;
  }


   else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      setError("email", "Email 格式看起來有點怪，請再確認一次");
      valid = false;
    }
  }

  if (!privacyInput.checked) {
    setError("privacy", "請勾選同意隱私權聲明後再開始測驗");
    valid = false;
  }

  return valid;
}

// 更新進度條寬度
function updateProgress() {
  const percent = ((currentIndex + 1) / totalQuestions) * 100;
  if (progressInner) {
    progressInner.style.width = `${percent}%`;
  }
}

// 渲染某一題的內容與選項
function renderQuestion(index) {
  const q = questions[index];
  updateProgress();

  // 依照題號切換背景圖
  if (stepQuiz && QUIZ_BACKGROUNDS[index]) {
    stepQuiz.style.backgroundImage = `url('${QUIZ_BACKGROUNDS[index]}')`;
  }

  let html = `<h2 class="question-title">${q.text}</h2>`;
  html += `<div class="options">`;

  const letters = ["A", "B", "C", "D", "E"];
  q.options.forEach((opt, i) => {
    const isSelected    = selectedIndices[index] === i;
    const selectedClass = isSelected ? "selected" : "";
    html += `
      <button
        type="button"
        class="option-btn ${selectedClass}"
        data-option-index="${i}"
      >
        <span class="option-bullet">${letters[i] || ""}</span>
        <span class="option-text">${opt.text}</span>
      </button>
    `;
  });
  html += `</div>`;

  questionContainer.innerHTML = html;

  const optionButtons = questionContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-option-index"));
      handleOptionClick(index, idx);
    });
  });

  // 第一題時「上一題」按鈕禁用
  btnPrev.disabled = index === 0;
}

// 初始化各類型分數
function resetScores() {
  const scores = {};
  RESULT_TYPES.forEach((t) => {
    scores[t] = 0;
  });
  return scores;
}

// 計算分數與最終結果類型
function calculateResult() {
  const scores = resetScores();
  let scoredQuestionCount = 0;

  questions.forEach((q, qIndex) => {
    if (!q.scored) return; // 不計分題略過
    const selected = selectedIndices[qIndex];
    if (selected == null) return;

    const opt = q.options[selected];
    if (!opt) return;

    scoredQuestionCount++;

    if (opt.main && scores.hasOwnProperty(opt.main)) {
      scores[opt.main] += 2;
    }
    if (opt.sub && scores.hasOwnProperty(opt.sub)) {
      scores[opt.sub] += 1;
    }
  });

  // 找出最高分類型
  let bestType = null;
  let bestScore = -1;
  RESULT_TYPES.forEach((t) => {
    if (scores[t] > bestScore) {
      bestScore = scores[t];
      bestType = t;
    }
  });

  const totalMax   = scoredQuestionCount * 3;
  const totalActual = Object.values(scores).reduce((acc, v) => acc + v, 0);
  const percent     = totalMax > 0 ? Math.round((totalActual / totalMax) * 100) : 0;

  return { scores, bestType, bestScore, percent };
}

// 寫入 Google 表單並送出（透過隱藏 iframe）
function sendToGoogleForm(name, email, result) {
  if (!googleForm) return;

  if (gfName)  gfName.value  = name;
  if (gfEmail) gfEmail.value = email;
  if (gfStatus) gfStatus.value = statusInput.value.trim();

  // 題目 1～8（第 8 題為不計分期待題）
  for (let i = 0; i < totalQuestions; i++) {
    const el = gfQ[i + 1];
    if (el) el.value = selectedTexts[i] || "";
  }

  // 最高分數
  if (gfScore) gfScore.value = String(result.bestScore);

  // 結果字串：主類型名稱＋各類型分布
  if (gfResult) {
    const parts = RESULT_TYPES.map((t) => `${t}:${result.scores[t]}`);
    const meta  = TYPE_META[result.bestType];
    const label = meta ? `${meta.name}(${meta.code})` : result.bestType;
    gfResult.value = `${label}｜${parts.join(",")}`;
  }

  try {
    googleForm.submit();
  } catch (e) {
    console.error("送出到 Google 表單時發生錯誤：", e);
  }
}

// 完全重置所有狀態（重新測驗用）
function resetAll() {
  currentIndex     = 0;
  selectedIndices  = new Array(totalQuestions).fill(null);
  selectedTexts    = new Array(totalQuestions).fill("");
  nameInput.value  = "";
  emailInput.value = "";
  privacyInput.checked = false;

  setError("name", "");
  setError("email", "");
  setError("privacy", "");

  updateProgress();
}

// =====================================================
// 事件綁定
// =====================================================

// 首頁：「開始能力值調查」按鈕
btnStart.addEventListener("click", () => {
  if (!validateIntroForm()) return;
  showStep(stepQuiz);
  renderQuestion(currentIndex);
});

// 測驗頁：「上一題」按鈕
btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
  } else {
    // 回到首頁
    showStep(stepIntro);
  }
});

// 點選選項時的處理（核心流程）
function handleOptionClick(index, optionIndex) {
  const q   = questions[index];
  const opt = q.options[optionIndex];
  if (!opt) return;

  selectedIndices[index] = optionIndex;
  selectedTexts[index]   = opt.text;

  // 還有下一題 → 繼續往下
  if (index < totalQuestions - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  } else {
    // 最後一題 → 先切到 Loading 畫面
    showStep(stepLoading);

    const { scores, bestType, bestScore, percent } = calculateResult();
    const meta = TYPE_META[bestType] || TYPE_META.DIGITAL;

    const displayName = nameInput.value.trim() || "你";
    resultName.textContent        = displayName;
    resultTitle.textContent       = meta.title;
    resultTypeTag.textContent     = `${meta.name}｜${meta.tag}`;
    resultDescription.textContent = meta.description;
    resultIndustry.textContent    = meta.industry;

    // 課程清單
    resultCourses.innerHTML = "";
    meta.courses.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      resultCourses.appendChild(li);
    });

    // 送資料到 Google 表單
    sendToGoogleForm(displayName, emailInput.value.trim(), {
      scores,
      bestType,
      bestScore,
      percent
    });

    // 模擬「計算中」的時間，再顯示結果頁
    setTimeout(() => {
      showStep(stepResult);
    }, 1500); // 可依需求調整 1000 / 2000 ms
  }
}

// 結果頁：「重新測驗」按鈕
btnRestart.addEventListener("click", () => {
  resetAll();
  showStep(stepIntro);
});

// 結果頁：「分享結果」按鈕
btnShare.addEventListener("click", () => {
  const { bestType } = calculateResult();
  const meta = TYPE_META[bestType] || TYPE_META.DIGITAL;
  const shareText = `我剛完成「未來世界裡，你是什麼狠角色!?」測驗，結果是：${meta.title}（${meta.name}）。`;

  if (navigator.share) {
    navigator
      .share({
        title: "未來世界裡，你是什麼狠角色!?",
        text: shareText,
        url: window.location.href
      })
      .catch(() => {});
  } else {
    alert(
      "已產生結果文字，請自行截圖或複製網址分享給朋友唷！\n\n" +
      shareText
    );
  }
});

// 隱私權 Modal 開關
btnPrivacy.addEventListener("click", () => {
  privacyModal.classList.remove("hidden");
});

btnPrivacyClose.addEventListener("click", () => {
  privacyModal.classList.add("hidden");
});

privacyModal.addEventListener("click", (e) => {
  if (e.target === privacyModal || e.target.classList.contains("modal-backdrop")) {
    privacyModal.classList.add("hidden");
  }
});

// 初始化進度條
updateProgress();
