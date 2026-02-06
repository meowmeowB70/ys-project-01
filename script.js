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
    title: "程式汪汪犬",
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
    title: "喵喵企劃精靈",
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
    title: "齒輪咚咚熊",
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
    title: "泡泡電光企鵝",
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
    title: "陽光暖暖龍",
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
    text: "早晨起床後的第一件事是什麼？",
    scored: true,
    options: [
      {
        text: "查看最新社群與新聞動態",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "感受窗外的天氣、光線和溫度變化",
        main: "GREEN",
        sub: "ELECTRICAL"
      },
      {
        text: "思考今天要完成的目標",
        main: "MECHANICAL",
        sub: "MARKETING"
      }
    ]
  },
  {
    text: "哪一個新聞標題最吸引你？",
    scored: true,
    options: [
      {
        text: "AI人工智慧、程式語言",
        main: "DIGITAL",
        sub: "MECHANICAL"
      },
      {
        text: "手機晶片、顯卡或硬體拆解影片",
        main: "ELECTRICAL",
        sub: "GREEN"
      },
      {
        text: "知名品牌行銷案例、國際市場分析",
        main: "MARKETING",
        sub: "DIGITAL"
      }
    ]
  },
  {
    text: "在團隊合作中，你比較常是哪一種角色？",
    scored: true,
    options: [
      {
        text: "把大家的資料整理成清楚架構",
        main: "DIGITAL",
        sub: "MARKETING"
      },
      {
        text: "處理設備、線路相關工作",
        main: "ELECTRICAL",
        sub: "MECHANICAL"
      },
      {
        text: "關注專案的ESG及環境永續",
        main: "GREEN",
        sub: "MARKETING"
      },
      {
        text: "擬定方針，建立策略",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "負責組裝、測試實體設備",
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
        text: "觀察這個狀況會對環境、資源造成什麼影響",
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
        text: "精準掌控電流與能源，確保系統穩定運轉",
        main: "ELECTRICAL",
        sub: "GREEN"
      },
      {
        text: "只要看過一次，就能建造精密機械裝置",
        main: "MECHANICAL",
        sub: "DIGITAL"
      },
      {
        text: "一開口就能說服對方，處理國際商業談判",
        main: "MARKETING",
        sub: "ELECTRICAL"
      },
      {
        text: "能感知自然環境變化，快速調整城市資源配置",
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
        text: "守護資訊安全與隱私，讓系統更值得被信任",
        main: "DIGITAL",
        sub: "ELECTRICAL"
      },
      {
        text: "解決能源短缺，往永續方向前進",
        main: "GREEN",
        sub: "MARKETING"
      },
      {
        text: "透過自動化設計，讓流程更順暢",
        main: "MECHANICAL",
        sub: "DIGITAL"
      },
      {
        text: "協助國際合作，讓技術應用於各地",
        main: "MARKETING",
        sub: "GREEN"
      },
      {
        text: "建置更穩定的電力設施，避免系統中斷",
        main: "ELECTRICAL",
        sub: "MECHANICAL"
      }
    ]
  },
  {
    text: "終於到了休假，你最想去哪裡放鬆？",
    scored: true,
    options: [
      {
        text: "高科技展，看看最新設備與應用",
        main: "ELECTRICAL",
        sub: "DIGITAL"
      },
      {
        text: "到大自然走走或參觀綠能建築",
        main: "GREEN",
        sub: "MECHANICAL"
      },
      {
        text: "去 DIY 工坊，組裝、動手做東西",
        main: "MECHANICAL",
        sub: "ELECTRICAL"
      },
      {
        text: "逛市集、看展覽，觀察流行趨勢",
        main: "MARKETING",
        sub: "DIGITAL"
      },
      {
        text: "參觀電玩或數位娛樂展，體驗沉浸式互動",
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
        text: "獲得一份完整的分析報告",
        main: null,
        sub: null
      },
      {
        text: "直接行動，準備大展身手",
        main: null,
        sub: null
      },
      {
        text: "得到實質補貼的收穫",
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

const stepIntro = document.getElementById("step-intro");
const stepQuiz = document.getElementById("step-quiz");
const stepLoading = document.getElementById("step-loading");
const stepResult = document.getElementById("step-result");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const privacyInput = document.getElementById("privacy");

const btnStart = document.getElementById("btnStart");
const btnPrev = document.getElementById("btnPrev");

const questionContainer = document.getElementById("questionContainer");
const progressInner = document.getElementById("progressInner");

const resultName = document.getElementById("resultName");
const resultTitle = document.getElementById("resultTitle");
const resultTypeTag = document.getElementById("resultTypeTag");
const resultDescription = document.getElementById("resultDescription");
const resultIndustry = document.getElementById("resultIndustry");
const resultCourses = document.getElementById("resultCourses");

const btnRestart = document.getElementById("btnRestart");
const btnShare = document.getElementById("btnShare");

const statusInput = document.getElementById("status");
const btnHome = document.getElementById("btnHome");

// 一般錯誤訊息 (紅字)
const generalError = document.getElementById("general-error");

// 音效物件 (預設路徑：sound/click.mp3，請確認檔案存在)
const clickAudio = new Audio("sound/click.mp3");

// 選項音效 (A~E)
const optionAudios = [
  new Audio("sound/optionA.mp3"),
  new Audio("sound/optionB.mp3"),
  new Audio("sound/optionC.mp3"),
  new Audio("sound/optionD.mp3"),
  new Audio("sound/optionE.mp3")
];

function playClickSound() {
  // 嘗試播放音效，若檔案不存在或瀏覽器阻擋則忽略錯誤
  clickAudio.currentTime = 0;
  clickAudio.play().catch(() => { });
}

function playOptionSound(index) {
  // 依照選項 index (0=A, 1=B...) 播放對應音效
  if (index >= 0 && index < optionAudios.length) {
    const audio = optionAudios[index];
    audio.currentTime = 0;
    audio.play().catch(() => { });
  } else {
    //如果在範圍外，就播預設音效
    playClickSound();
  }
}

// Google 表單相關
const googleForm = document.getElementById("googleForm");
const gfName = document.getElementById("gf-name");
const gfEmail = document.getElementById("gf-email");
const gfScore = document.getElementById("gf-score");
const gfResult = document.getElementById("gf-result");

const gfStatus = document.getElementById("gf-status");

const gfQ = [];
for (let i = 1; i <= 8; i++) {
  gfQ[i] = document.getElementById(`gf-q${i}`);
}

// 隱私權 Modal
const privacyModal = document.getElementById("privacyModal");
const btnPrivacy = document.getElementById("btnPrivacy");
const btnPrivacyClose = document.getElementById("btnPrivacyClose");

// =====================================================
// 工具函式
// =====================================================

// 顯示指定 Step，其他 Step 收起（含淡入淡出效果）
function showStep(stepElement) {
  // 1. 找出目前正顯示的 step (如果有)
  const currentActive = document.querySelector(".step.active");

  // 如果目前沒有 active，或要顯示的跟目前的一樣，直接顯示即可 (初始化狀況)
  if (!currentActive || currentActive === stepElement) {
    if (currentActive) currentActive.classList.remove("active");
    stepElement.classList.add("active");
    stepElement.classList.add("fade-in");
    // 移除動畫 class 避免殘留
    setTimeout(() => stepElement.classList.remove("fade-in"), 200);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  // 2. 有舊的 step：先淡出舊的
  currentActive.classList.add("fade-out");

  // 等待淡出動畫結束 (400ms)
  setTimeout(() => {
    currentActive.classList.remove("active", "fade-out");

    // 3. 顯示新的 step 並淡入
    stepElement.classList.add("active", "fade-in");

    // 滾動回頂端
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // 動畫結束後移除 fade-in class
    setTimeout(() => {
      stepElement.classList.remove("fade-in");
    }, 200);

  }, 200); // 配合 CSS animation-duration: 0.2s
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
    const isSelected = selectedIndices[index] === i;
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

      // 播放對應選項音效
      playOptionSound(idx);

      handleOptionClick(index, idx);
    });
  });

  // 第一題時隱藏「上一題」按鈕
  if (index === 0) {
    btnPrev.style.visibility = "hidden";
  } else {
    btnPrev.style.visibility = "visible";
    btnPrev.disabled = false;
  }
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

  const totalMax = scoredQuestionCount * 3;
  const totalActual = Object.values(scores).reduce((acc, v) => acc + v, 0);
  const percent = totalMax > 0 ? Math.round((totalActual / totalMax) * 100) : 0;

  return { scores, bestType, bestScore, percent };
}

// 寫入 Google 表單並送出（透過隱藏 iframe）
function sendToGoogleForm(name, email, result) {
  if (!googleForm) return;

  if (gfName) gfName.value = name;
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
    const meta = TYPE_META[result.bestType];
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
  currentIndex = 0;
  selectedIndices = new Array(totalQuestions).fill(null);
  selectedTexts = new Array(totalQuestions).fill("");
  nameInput.value = "";
  emailInput.value = "";
  privacyInput.checked = false;

  setError("name", "");
  setError("email", "");
  setError("privacy", "");

  if (generalError) {
    generalError.classList.remove("show");
  }

  updateProgress();
}

// =====================================================
// 事件綁定
// =====================================================

// 幫所有按鈕加上音效
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    // 排除被禁用(disabled)的按鈕
    if (!btn.disabled) {
      playClickSound();
    }
  });
});

// 首頁：「開始能力值調查」按鈕
btnStart.addEventListener("click", () => {
  if (!validateIntroForm()) {
    if (generalError) {
      generalError.classList.add("show");
    }
    return;
  }

  // 驗證通過，隱藏錯誤訊息
  if (generalError) {
    generalError.classList.remove("show");
  }

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
  const q = questions[index];
  const opt = q.options[optionIndex];
  if (!opt) return;

  selectedIndices[index] = optionIndex;
  selectedTexts[index] = opt.text;

  // 還有下一題 → 繼續往下
  if (index < totalQuestions - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  } else {
    // 最後一題 → 先切到 Loading 畫面
    showStep(stepLoading);

    // 強制重跑 Loading GIF (重新賦值 src)
    const loadingIcon = document.querySelector(".loading-icon");
    if (loadingIcon) {
      const src = loadingIcon.src;
      loadingIcon.src = "";
      loadingIcon.src = src;
    }

    const { scores, bestType, bestScore, percent } = calculateResult();
    const meta = TYPE_META[bestType] || TYPE_META.DIGITAL;

    const displayName = nameInput.value.trim() || "你";
    resultName.textContent = displayName;

    // 設定結果圖
    // 檔名規則：image/result_digital.png 等 (全小寫)
    const typeKey = bestType.toLowerCase();
    const resultImg = document.getElementById("resultMainImage");
    if (resultImg) {
      resultImg.src = `image/result_${typeKey}.png`;
    }

    /* 舊有文字邏輯已不使用，若有需要可移除或註解
    resultTitle.textContent = meta.title;
    resultTypeTag.textContent = `${meta.name}｜${meta.tag}`;
    resultDescription.textContent = meta.description;
    resultIndustry.textContent = meta.industry;

    resultCourses.innerHTML = "";
    meta.courses.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      resultCourses.appendChild(li);
    });
    */

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
    }, 3000);
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
  const shareText = `我剛完成「萌力全開！你的潛能角色大揭曉」測驗，結果是：${meta.title}，快來看看你是什麼角色吧！`;

  if (navigator.share) {
    navigator
      .share({
        title: "萌力全開！你的潛能角色大揭曉",
        text: shareText,
        url: window.location.href
      })
      .catch(() => { });
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

// 測驗頁：「回首頁」Icon
if (btnHome) {
  btnHome.addEventListener("click", () => {
    // 簡單確認是否放棄
    if (confirm("確定要回首頁嗎？目前的進度將不會保存。")) {
      resetAll();
      showStep(stepIntro);
    }
  });
}

// 初始化進度條
updateProgress();
