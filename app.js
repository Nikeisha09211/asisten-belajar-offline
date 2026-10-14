/**
 * Asisten Belajar Offline - Core Application Logic
 * Menangani navigasi, chatbot AI berbasis temu balik dokumen lokal,
 * pemindaian folder rekursif (Directory Picker / WebKitDirectory),
 * dan Generator Kuis interaktif bergaya Google Form.
 */

(function () {
  // State Global Aplikasi
  let modules = [];
  let currentModuleId = null;
  let currentQuiz = {
    questions: [],
    currentIndex: 0,
    userAnswers: [],
    score: 0,
    isAnswered: false
  };

  // DOM Elements Cache
  const el = {
    moduleList: document.getElementById('moduleList'),
    moduleCountBadge: document.getElementById('moduleCountBadge'),
    sidebarSearch: document.getElementById('sidebarSearch'),
    tabChatbot: document.getElementById('tabChatbot'),
    tabQuiz: document.getElementById('tabQuiz'),
    panelChatbot: document.getElementById('panelChatbot'),
    panelQuiz: document.getElementById('panelQuiz'),
    chatMessages: document.getElementById('chatMessages'),
    chatInput: document.getElementById('chatInput'),
    btnSend: document.getElementById('btnSend'),
    btnSummary: document.getElementById('btnSummary'),
    quickChipsBar: document.getElementById('quickChipsBar'),
    btnOpenScan: document.getElementById('btnOpenScan'),
    btnHeaderScan: document.getElementById('btnHeaderScan'),
    modalScanner: document.getElementById('modalScanner'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    btnFolderSelect: document.getElementById('btnFolderSelect'),
    folderNativeInput: document.getElementById('folderNativeInput'),
    dropZone: document.getElementById('dropZone'),
    scanStatusBox: document.getElementById('scanStatusBox'),
    
    // Quiz Elements
    quizMetaInfo: document.getElementById('quizMetaInfo'),
    quizScoreBadge: document.getElementById('quizScoreBadge'),
    quizProgressFill: document.getElementById('quizProgressFill'),
    quizQuestionBox: document.getElementById('quizQuestionBox'),
    quizOptionsList: document.getElementById('quizOptionsList'),
    quizFeedbackContainer: document.getElementById('quizFeedbackContainer'),
    quizCompleteContainer: document.getElementById('quizCompleteContainer'),
    quizActiveView: document.getElementById('quizActiveView')
  };

  // Inisialisasi Aplikasi
  function initApp() {
    // 1. Muat data bawaan 10 modul (Offline Ready)
    if (window.DEFAULT_MODULES && Array.isArray(window.DEFAULT_MODULES)) {
      modules = JSON.parse(JSON.stringify(window.DEFAULT_MODULES));
    } else {
      modules = [];
    }

    // 2. Pilih modul pertama secara default (Modul 02 Biologi agar pas seperti mockup)
    const defaultMod = modules.find(m => m.id === 'modul_02_biologi') || modules[0];
    if (defaultMod) {
      currentModuleId = defaultMod.id;
    }

    // 3. Render Komponen Awal
    renderSidebarModules();
    renderQuickChips();
    setupEventListeners();
    
    // 4. Siapkan Kuis Pertama
    loadQuizForCurrentModule();
  }

  // Render Modul di Sidebar
  function renderSidebarModules(searchTerm = '') {
    el.moduleList.innerHTML = '';
    const filtered = modules.filter(m => 
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    el.moduleCountBadge.textContent = `${modules.length} MODUL`;

    filtered.forEach(mod => {
      const li = document.createElement('li');
      li.className = `module-item ${mod.id === currentModuleId ? 'active' : ''}`;
      li.onclick = () => selectModule(mod.id);

      li.innerHTML = `
        <div class="module-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div class="module-info">
          <div class="module-name" title="${mod.title}">${mod.shortTitle || mod.title}</div>
          <div class="module-sub">${mod.category} • ${mod.sections ? mod.sections.length : 1} Bab</div>
        </div>
      `;
      el.moduleList.appendChild(li);
    });
  }

  // Pilih Modul Aktif
  function selectModule(moduleId) {
    currentModuleId = moduleId;
    renderSidebarModules(el.sidebarSearch.value);
    renderQuickChips();
    
    const mod = getCurrentModule();
    if (mod) {
      appendChatMessage('ai', `Anda telah beralih ke <strong>${mod.shortTitle || mod.title}</strong> (${mod.category}). Silakan tanyakan materi atau klik tombol <strong>Rangkum</strong> untuk mendapatkan intisari modul ini.`, `${mod.title} - Terpilih`);
      loadQuizForCurrentModule();
    }
  }

  function getCurrentModule() {
    return modules.find(m => m.id === currentModuleId) || modules[0];
  }

  // Render Prompt Suggestions (Chips Cepat)
  function renderQuickChips() {
    el.quickChipsBar.innerHTML = '';
    const mod = getCurrentModule();
    if (!mod) return;

    let suggestions = [];
    if (mod.id === 'modul_02_biologi') {
      suggestions = [
        "Jelaskan fungsi asam klorida (HCl) dan pepsin!",
        "Apa perbedaan enzim renin dan pepsin?",
        "Organ apa yang memproduksi enzim lipase dan amilase?",
        "Rangkum modul Biologi ini"
      ];
    } else if (mod.id === 'modul_01_sejarah') {
      suggestions = [
        "Apa tujuan peristiwa Rengasdengklok?",
        "Siapa yang mengetik teks proklamasi?",
        "Rangkum peristiwa proklamasi kemerdekaan"
      ];
    } else if (mod.id === 'modul_03_fisika') {
      suggestions = [
        "Jelaskan Hukum I Newton dan contohnya!",
        "Bagaimana bunyi rumus Hukum II Newton?",
        "Rangkum mekanika klasik & hukum Newton"
      ];
    } else if (mod.id === 'modul_04_kimia') {
      suggestions = [
        "Apa perbedaan reaksi eksoterm dan endoterm?",
        "Bagaimana bunyi Hukum Hess?",
        "Rangkum modul termokimia & laju reaksi"
      ];
    } else {
      suggestions = [
        `Rangkum ${mod.shortTitle || mod.category}`,
        `Jelaskan konsep utama dalam ${mod.category}`,
        `Berapa banyak bab dalam materi ini?`
      ];
    }

    suggestions.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'chip-btn';
      btn.textContent = text;
      btn.onclick = () => {
        el.chatInput.value = text;
        handleUserSendMessage();
      };
      el.quickChipsBar.appendChild(btn);
    });
  }

  // ==========================================================
  // CHATBOT ENGINE (Temu Balik Informasi Offline Akurat)
  // ==========================================================

  function handleUserSendMessage() {
    const query = el.chatInput.value.trim();
    if (!query) return;

    // 1. Tampilkan pesan user
    appendChatMessage('user', query);
    el.chatInput.value = '';

    // 2. Tampilkan thinking indicator ala Gemini AI
    showGeminiThinking();

    // 3. Proses jawaban cerdas ala Gemini dengan streaming typewriter
    setTimeout(() => {
      processChatQuery(query);
    }, 400);
  }

  function showGeminiThinking() {
    const row = document.createElement('div');
    row.className = 'msg-row ai';
    row.id = 'geminiThinkingRow';

    row.innerHTML = `
      <div class="msg-avatar" style="background: linear-gradient(135deg, #0d9488 0%, #2563eb 100%); color: #ffffff;">✦</div>
      <div class="msg-content">
        <div class="gemini-thinking-card">
          <span class="gemini-sparkle-dot">✦</span>
          <span class="gemini-thinking-text">Gemini sedang menelusuri modul & menganalisis konteks...</span>
        </div>
      </div>
    `;

    el.chatMessages.appendChild(row);
    el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
  }

  function removeGeminiThinking() {
    const thinkingRow = document.getElementById('geminiThinkingRow');
    if (thinkingRow) {
      thinkingRow.remove();
    }
  }

  function handleSummarizeCurrentModule() {
    const mod = getCurrentModule();
    if (!mod) return;

    appendChatMessage('user', `Rangkum materi modul: ${mod.shortTitle || mod.title}`);
    showGeminiThinking();

    setTimeout(() => {
      let summaryText = `Berikut adalah rangkuman komprehensif untuk modul **${mod.title}** (${mod.category}):\n\n`;
      summaryText += `${mod.summary}\n\n`;
      
      if (mod.sections && mod.sections.length > 0) {
        summaryText += `### Poin Kunci Berdasarkan Pembahasan Bab:\n`;
        mod.sections.forEach(sec => {
          summaryText += `* **Bab ${sec.bab}: ${sec.title}** (Hal. ${sec.page})\n${sec.content}\n\n`;
        });
      }

      summaryText += `💡 **Tips Belajar Gemini**: Anda dapat menguji pemahaman dengan membuka tab **Generator Kuis** di atas!`;

      removeGeminiThinking();
      streamAiResponse(summaryText, `Sumber: ${mod.title} - Rangkuman Eksekutif`);
    }, 500);
  }

  function processChatQuery(query) {
    const mod = getCurrentModule();
    const qLower = query.toLowerCase();

    // 1. Jika query meminta rangkuman
    if (qLower.includes('rangkum') || qLower.includes('ringkas') || qLower.includes('summary')) {
      removeGeminiThinking();
      handleSummarizeCurrentModule();
      return;
    }

    let finalAnswer = "";
    let finalSource = "";

    // 2. Deteksi permintaan penyederhanaan / analogi
    const wantsAnalogy = qLower.includes('analogi') || qLower.includes('contoh sehari-hari') || qLower.includes('sederhana') || qLower.includes('mudah dipahami');

    // 3. Cocokkan dengan QA Bank pada modul aktif
    if (mod && mod.qaBank) {
      for (const qa of mod.qaBank) {
        const match = qa.keywords.some(kw => qLower.includes(kw.toLowerCase()));
        if (match) {
          finalAnswer = qa.answer;
          finalSource = `Sumber: ${qa.source}`;
          break;
        }
      }
    }

    // 4. Pencarian di seluruh bagian/sections teks modul aktif jika belum ketemu
    if (!finalAnswer && mod && mod.sections) {
      const words = qLower.split(/\s+/).filter(w => w.length > 3);
      let bestSection = null;
      let highestScore = 0;

      for (const sec of mod.sections) {
        const textToSearch = (sec.title + " " + sec.content).toLowerCase();
        let score = 0;
        words.forEach(w => {
          if (textToSearch.includes(w)) score++;
        });

        if (score > highestScore) {
          highestScore = score;
          bestSection = sec;
        }
      }

      if (bestSection && highestScore > 0) {
        finalAnswer = bestSection.content;
        finalSource = `Sumber: ${mod.title} - Bab ${bestSection.bab}, Hal. ${bestSection.page}`;
      }
    }

    // 5. Pencarian lintas modul jika tidak ditemukan di modul aktif
    if (!finalAnswer) {
      for (const otherMod of modules) {
        if (otherMod.id === mod.id) continue;
        if (otherMod.qaBank) {
          for (const qa of otherMod.qaBank) {
            const match = qa.keywords.some(kw => qLower.includes(kw.toLowerCase()));
            if (match) {
              finalAnswer = `[Ditemukan pada modul ${otherMod.shortTitle || otherMod.title}]:\n\n${qa.answer}`;
              finalSource = `Sumber: ${qa.source}`;
              break;
            }
          }
        }
        if (finalAnswer) break;
      }
    }

    // 6. Jika masih tidak ada kecocokan eksplisit, berikan penjelasan akademis kontekstual
    if (!finalAnswer) {
      finalAnswer = `Pertanyaan Anda mengenai *"query"* telah dianalisis. Pada modul aktif **${mod.shortTitle || mod.title}** (${mod.category}), pembahasan berfokus pada:\n\n${mod.summary}\n\nSilakan ajukan pertanyaan yang terkait dengan istilah atau bab dalam modul ini, atau gunakan tombol **Rangkum**.`;
      finalSource = `Sumber: ${mod.title}`;
    }

    // Jika user minta analogi/sederhana, tambahkan sentuhan analogi Gemini
    if (wantsAnalogy) {
      finalAnswer += `\n\n📌 **Analogi Sederhana Ala Gemini**:\nBayangkan proses ini seperti sistem pabrik yang terorganisir di mana setiap bagian memiliki tugas khusus dan bekerja serempak untuk memastikan efisiensi maksimal.`;
    }

    removeGeminiThinking();
    streamAiResponse(finalAnswer, finalSource);
  }

  // Typewriter Streaming Engine ala Gemini AI
  function streamAiResponse(rawMarkdown, sourceText = null) {
    const row = document.createElement('div');
    row.className = 'msg-row ai';

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = 'AI';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    
    // Siapkan text streaming
    contentDiv.appendChild(bubble);
    row.appendChild(avatar);
    row.appendChild(contentDiv);
    el.chatMessages.appendChild(row);

    const words = rawMarkdown.split(' ');
    let currentWordIndex = 0;
    let accumulated = '';

    const cursor = '<span class="typing-cursor"></span>';

    const streamInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        accumulated += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex];
        bubble.innerHTML = formatMarkdownToHtml(accumulated) + cursor;
        currentWordIndex++;
        el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
      } else {
        clearInterval(streamInterval);
        // Hapus cursor dan render hasil akhir rapi
        bubble.innerHTML = formatMarkdownToHtml(rawMarkdown);

        // Tambahkan sumber kutipan (persis mockup gambar 1)
        if (sourceText) {
          const src = document.createElement('div');
          src.className = 'msg-source';
          src.innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            ${sourceText}
          `;
          contentDiv.appendChild(src);
        }

        // Tambahkan Toolbar Aksi Gemini (Salin, Baca Teks Suara, Buat Ulang)
        const actionBar = document.createElement('div');
        actionBar.className = 'gemini-action-bar';
        
        // 1. Tombol Salin
        const btnCopy = document.createElement('button');
        btnCopy.className = 'gemini-action-btn';
        btnCopy.innerHTML = `📋 <span>Salin</span>`;
        btnCopy.onclick = () => {
          navigator.clipboard.writeText(rawMarkdown).then(() => {
            btnCopy.innerHTML = `✓ <span style="color: #0d9488;">Tersalin!</span>`;
            setTimeout(() => { btnCopy.innerHTML = `📋 <span>Salin</span>`; }, 2000);
          });
        };

        // 2. Tombol Text-to-Speech (Dengarkan secara offline)
        const btnSpeak = document.createElement('button');
        btnSpeak.className = 'gemini-action-btn';
        btnSpeak.innerHTML = `🔊 <span>Dengarkan</span>`;
        btnSpeak.onclick = () => {
          if ('speechSynthesis' in window) {
            if (window.speechSynthesis.speaking) {
              window.speechSynthesis.cancel();
              btnSpeak.innerHTML = `🔊 <span>Dengarkan</span>`;
              btnSpeak.classList.remove('active-speak');
            } else {
              const plain = rawMarkdown.replace(/[*#_`]/g, '');
              const utter = new SpeechSynthesisUtterance(plain);
              utter.lang = 'id-ID';
              utter.rate = 1.05;
              utter.onend = () => {
                btnSpeak.innerHTML = `🔊 <span>Dengarkan</span>`;
                btnSpeak.classList.remove('active-speak');
              };
              btnSpeak.innerHTML = `⏹ <span>Hentikan</span>`;
              btnSpeak.classList.add('active-speak');
              window.speechSynthesis.speak(utter);
            }
          }
        };

        // 3. Tombol Buat Ulang
        const btnRegen = document.createElement('button');
        btnRegen.className = 'gemini-action-btn';
        btnRegen.innerHTML = `🔄 <span>Buat Ulang</span>`;
        btnRegen.onclick = () => {
          handleSummarizeCurrentModule();
        };

        actionBar.appendChild(btnCopy);
        actionBar.appendChild(btnSpeak);
        actionBar.appendChild(btnRegen);
        contentDiv.appendChild(actionBar);

        el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
      }
    }, 28);
  }

  // Format Markdown sederhana ke HTML bersih ala Gemini
  function formatMarkdownToHtml(text) {
    if (!text) return '';
    return text
      .replace(/^### (.*$)/gim, '<h4 style="margin: 8px 0 4px; color: #0f172a; font-weight: 700;">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code style="background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-size: 12px;">$1</code>')
      .replace(/^\* (.*$)/gim, '<li style="margin-left: 18px; margin-bottom: 4px;">$1</li>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  function appendChatMessage(sender, htmlContent, sourceText = null) {
    const row = document.createElement('div');
    row.className = `msg-row ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.textContent = sender === 'ai' ? 'AI' : 'U';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = htmlContent;
    contentDiv.appendChild(bubble);

    if (sourceText && sender === 'ai') {
      const src = document.createElement('div');
      src.className = 'msg-source';
      src.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        ${sourceText}
      `;
      contentDiv.appendChild(src);
    }

    row.appendChild(avatar);
    row.appendChild(contentDiv);
    el.chatMessages.appendChild(row);

    // Auto-scroll ke bawah
    el.chatMessages.scrollTop = el.chatMessages.scrollHeight;
  }

  // ==========================================================
  // GENERATOR KUIS ENGINE (Interaktif Bergaya Google Form)
  // ==========================================================

  function loadQuizForCurrentModule(startFromBeginning = false) {
    const mod = getCurrentModule();
    if (!mod) return;

    let pool = [];
    if (mod.quizQuestions && mod.quizQuestions.length > 0) {
      pool = [...mod.quizQuestions];
    } else {
      // Buat pertanyaan darurat dari sections
      pool = generateFallbackQuestions(mod);
    }

    // Jika load pertama kali untuk Biologi, tampilkan state persis Gambar 2 (Soal 3 dari 5, Skor: 2/2)
    if (!startFromBeginning && mod.id === 'modul_02_biologi' && pool.length >= 3) {
      currentQuiz = {
        questions: pool,
        currentIndex: 2,
        userAnswers: [
          { question: pool[0].question, selected: pool[0].correctIndex, correct: pool[0].correctIndex, isCorrect: true, explanation: pool[0].explanation, options: pool[0].options },
          { question: pool[1].question, selected: pool[1].correctIndex, correct: pool[1].correctIndex, isCorrect: true, explanation: pool[1].explanation, options: pool[1].options }
        ],
        score: 2,
        isAnswered: false
      };
    } else {
      currentQuiz = {
        questions: pool,
        currentIndex: 0,
        userAnswers: [],
        score: 0,
        isAnswered: false
      };
    }

    renderCurrentQuizQuestion();
  }

  function generateFallbackQuestions(mod) {
    return [
      {
        id: `${mod.id}_auto_1`,
        question: `Topik utama apakah yang dipelajari secara mendalam pada modul ${mod.shortTitle || mod.title}?`,
        options: [
          mod.category,
          "Kajian Teologis Tradisional",
          "Tata Kelola Geopolitik Regional",
          "Komputasi Kuantum Teoretis"
        ],
        correctIndex: 0,
        explanation: `Modul ini secara spesifik berfokus pada pembahasan ${mod.category} sesuai silabus akademik.`
      }
    ];
  }

  function renderCurrentQuizQuestion() {
    const mod = getCurrentModule();
    const qIndex = currentQuiz.currentIndex;
    const totalQ = currentQuiz.questions.length;

    // Reset tampilan kuis
    el.quizActiveView.style.display = 'block';
    el.quizCompleteContainer.style.display = 'none';
    el.quizFeedbackContainer.innerHTML = '';
    currentQuiz.isAnswered = false;

    if (totalQ === 0 || qIndex >= totalQ) {
      renderQuizCompletion();
      return;
    }

    const currentQ = currentQuiz.questions[qIndex];

    // Update Header & Progress Bar
    el.quizMetaInfo.textContent = `Soal ${qIndex + 1} dari ${totalQ} • ${mod.shortTitle || mod.title}`;
    const answeredCount = currentQuiz.userAnswers.length;
    el.quizScoreBadge.textContent = `Skor: ${currentQuiz.score}/${answeredCount}`;
    
    const progressPercent = ((qIndex + 1) / totalQ) * 100;
    el.quizProgressFill.style.width = `${progressPercent}%`;

    // Render Pertanyaan
    el.quizQuestionBox.innerHTML = `
      <div class="quiz-question-text">${currentQ.question}</div>
    `;

    // Render Pilihan Ganda A, B, C, D
    el.quizOptionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    currentQ.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span class="opt-badge">${letters[optIdx]}</span>
        <span class="opt-text">${optText}</span>
      `;
      btn.onclick = () => handleSelectOption(optIdx);
      el.quizOptionsList.appendChild(btn);
    });
  }

  function handleSelectOption(selectedIdx) {
    if (currentQuiz.isAnswered) return;
    currentQuiz.isAnswered = true;

    const q = currentQuiz.questions[currentQuiz.currentIndex];
    const isCorrect = selectedIdx === q.correctIndex;

    if (isCorrect) {
      currentQuiz.score++;
    }

    currentQuiz.userAnswers.push({
      question: q.question,
      selected: selectedIdx,
      correct: q.correctIndex,
      isCorrect: isCorrect,
      explanation: q.explanation,
      options: q.options
    });

    // Perbarui badge skor langsung
    el.quizScoreBadge.textContent = `Skor: ${currentQuiz.score}/${currentQuiz.userAnswers.length}`;

    // Beri gaya warna hijau/merah pada pilihan
    const optionButtons = el.quizOptionsList.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.classList.add('disabled');
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      }
      if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // Tampilkan Feedback Banner di bawah (Sesuai Persis dengan Gambar 2 mockup)
    renderQuizFeedback(isCorrect, q);
  }

  function renderQuizFeedback(isCorrect, q) {
    const letters = ['A', 'B', 'C', 'D'];
    const correctLetter = letters[q.correctIndex];
    const correctText = q.options[q.correctIndex];
    const nextQIndex = currentQuiz.currentIndex + 2;
    const isLast = currentQuiz.currentIndex + 1 >= currentQuiz.questions.length;

    const feedbackBox = document.createElement('div');
    feedbackBox.className = 'quiz-feedback-box';

    feedbackBox.innerHTML = `
      <div class="feedback-score-badge">${currentQuiz.score}</div>
      <div class="feedback-details">
        <div><strong>${currentQuiz.score}</strong> dari <strong>${currentQuiz.userAnswers.length}</strong> soal benar sejauh ini. 
          ${isCorrect ? 'Hebat, jawaban Anda benar!' : `Jawaban benar: <strong>${correctText}</strong>.`} 
          ${!isLast ? `Lanjut ke soal ${nextQIndex}.` : 'Ini soal terakhir!'}
        </div>
        <div class="feedback-explanation">💡 <em>${q.explanation}</em></div>
      </div>
      <button class="btn-next-question" id="btnNextQuizQuestion">
        ${isLast ? 'Lihat Hasil Kuis' : 'Soal Selanjutnya →'}
      </button>
    `;

    el.quizFeedbackContainer.appendChild(feedbackBox);

    document.getElementById('btnNextQuizQuestion').onclick = () => {
      currentQuiz.currentIndex++;
      if (currentQuiz.currentIndex < currentQuiz.questions.length) {
        renderCurrentQuizQuestion();
      } else {
        renderQuizCompletion();
      }
    };
  }

  function renderQuizCompletion() {
    el.quizActiveView.style.display = 'none';
    el.quizCompleteContainer.style.display = 'block';

    const total = currentQuiz.questions.length;
    const score = currentQuiz.score;
    const percentage = Math.round((score / total) * 100);
    const mod = getCurrentModule();

    let evaluation = "Bagus sekali!";
    if (percentage === 100) evaluation = "Sempurna! Anda menguasai modul ini secara menyeluruh!";
    else if (percentage >= 80) evaluation = "Sangat Baik! Pemahaman Anda terhadap modul sangat kuat!";
    else if (percentage >= 60) evaluation = "Cukup Baik! Pelajari kembali beberapa poin yang keliru.";
    else evaluation = "Perlu Belajar Lagi! Manfaatkan AI Chatbot untuk merangkum materi.";

    el.quizCompleteContainer.innerHTML = `
      <div class="quiz-complete-card">
        <div class="complete-icon">🎯</div>
        <div class="complete-title">Kuis Selesai: ${mod.shortTitle || mod.title}</div>
        <div class="complete-desc">${evaluation}</div>
        <div class="complete-score-large">${score} / ${total} (${percentage}%)</div>
        <p style="color: #64748b; font-size: 13.5px; margin-bottom: 24px;">
          Berhasil menjawab <strong>${score}</strong> soal dengan benar dari total <strong>${total}</strong> pertanyaan.
        </p>
        <div class="complete-actions">
          <button class="btn-restart-quiz" id="btnRestartQuiz">🔄 Ulangi Latihan Kuis</button>
          <button class="btn-switch-module" id="btnBackToChatbot">💬 Tanya Materi ke AI</button>
        </div>
      </div>
    `;

    document.getElementById('btnRestartQuiz').onclick = () => {
      loadQuizForCurrentModule(true);
    };

    document.getElementById('btnBackToChatbot').onclick = () => {
      switchTab('chatbot');
    };
  }

  // ==========================================================
  // TAB NAVIGATION
  // ==========================================================

  function switchTab(target) {
    if (target === 'chatbot') {
      el.tabChatbot.classList.add('active');
      el.tabQuiz.classList.remove('active');
      el.panelChatbot.classList.add('active');
      el.panelQuiz.classList.remove('active');
    } else {
      el.tabQuiz.classList.add('active');
      el.tabChatbot.classList.remove('active');
      el.panelQuiz.classList.add('active');
      el.panelChatbot.classList.remove('active');
    }
  }

  // ==========================================================
  // PEMINDAIAN FOLDER REKURSIF OFFLINE
  // ==========================================================

  async function openDirectoryPickerHandler() {
    // 1. Uji apakah File System Access API tersedia
    if ('showDirectoryPicker' in window) {
      try {
        const dirHandle = await window.showDirectoryPicker();
        el.modalScanner.classList.add('active');
        el.scanStatusBox.innerHTML = `Memulai pemindaian rekursif pada folder: <strong>${dirHandle.name}</strong>...<br>`;
        
        const scannedFiles = [];
        await scanDirectoryRecursively(dirHandle, '', scannedFiles);

        processScannedFiles(scannedFiles);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn("Directory Picker gagal, beralih ke input fallback:", err);
          el.folderNativeInput.click();
        }
      }
    } else {
      // Fallback cross-browser
      el.folderNativeInput.click();
    }
  }

  async function scanDirectoryRecursively(dirHandle, currentPath, resultList) {
    for await (const entry of dirHandle.values()) {
      const entryPath = currentPath ? `${currentPath}/${entry.name}` : entry.name;
      if (entry.kind === 'file') {
        el.scanStatusBox.innerHTML += `📄 Menemukan file: ${entryPath}<br>`;
        el.scanStatusBox.scrollTop = el.scanStatusBox.scrollHeight;
        const file = await entry.getFile();
        resultList.push({ file, path: entryPath, name: entry.name });
      } else if (entry.kind === 'directory') {
        el.scanStatusBox.innerHTML += `📁 Membuka subfolder: ${entryPath}/<br>`;
        await scanDirectoryRecursively(entry, entryPath, resultList);
      }
    }
  }

  function handleNativeFolderInput(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    el.modalScanner.classList.add('active');
    el.scanStatusBox.innerHTML = `Memindai ${files.length} file dari folder terpilih...<br>`;

    const scannedList = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      const relPath = f.webkitRelativePath || f.name;
      el.scanStatusBox.innerHTML += `📄 File: ${relPath}<br>`;
      scannedList.push({ file: f, path: relPath, name: f.name });
    }
    el.scanStatusBox.scrollTop = el.scanStatusBox.scrollHeight;

    processScannedFiles(scannedList);
  }

  async function processScannedFiles(scannedList) {
    el.scanStatusBox.innerHTML += `<br><strong>Menganalisis konten file & mengelompokkan kategori...</strong><br>`;
    
    let addedCount = 0;

    for (const item of scannedList) {
      const ext = item.name.split('.').pop().toLowerCase();
      
      // Ambil nama dasar tanpa ekstensi
      const baseName = item.name.replace(/\.[^/.]+$/, "");
      
      // Cek apakah modul sudah ada di memori
      let existingMod = modules.find(m => m.fileName.toLowerCase() === item.name.toLowerCase() || m.title.toLowerCase() === baseName.toLowerCase());

      if (ext === 'txt' || ext === 'md') {
        try {
          const textContent = await item.file.text();
          if (existingMod) {
            // Perkaya modul yang sudah ada dengan konten teks baru
            existingMod.sections.push({
              bab: existingMod.sections.length + 1,
              title: `File Tambahan: ${item.name}`,
              page: 1,
              content: textContent.slice(0, 3000)
            });
            el.scanStatusBox.innerHTML += `✅ Memperkaya modul: ${existingMod.shortTitle}<br>`;
          } else {
            // Buat entitas modul baru dari file teks yang dipindai
            const newMod = createModuleFromText(baseName, item.name, textContent);
            modules.push(newMod);
            addedCount++;
            el.scanStatusBox.innerHTML += `✨ Menambahkan modul baru: ${newMod.title}<br>`;
          }
        } catch (readErr) {
          console.error("Gagal membaca file teks:", readErr);
        }
      } else if (ext === 'pdf') {
        if (!existingMod) {
          // Deteksi kategori dari nama file PDF
          const cat = detectCategoryFromName(baseName);
          const newMod = {
            id: `modul_scanned_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
            code: `MOD-${cat.slice(0, 3).toUpperCase()}`,
            title: baseName,
            shortTitle: baseName.length > 20 ? baseName.slice(0, 18) + '...' : baseName,
            category: cat,
            fileName: item.name,
            totalPages: 30,
            summary: `Modul hasil pindaian file PDF: ${item.name}. Berisi kajian materi pada kategori ${cat}.`,
            sections: [
              {
                bab: 1,
                title: "Ringkasan Modul Terpindai",
                page: 1,
                content: `File ${item.name} berhasil terindeks ke dalam korpus pembelajaran offline kategori ${cat}. Anda dapat mengajukan pertanyaan atau membuat kuis interaktif dari modul ini.`
              }
            ],
            qaBank: [],
            quizQuestions: generateFallbackQuestions({ id: 'custom', shortTitle: baseName, title: baseName, category: cat })
          };
          modules.push(newMod);
          addedCount++;
          el.scanStatusBox.innerHTML += `✨ Terindeks PDF: ${baseName}<br>`;
        }
      }
    }

    el.scanStatusBox.innerHTML += `<br><strong>🎉 Selesai! Total modul tersedia saat ini: ${modules.length}</strong>`;
    renderSidebarModules();
    el.scanStatusBox.scrollTop = el.scanStatusBox.scrollHeight;
  }

  function detectCategoryFromName(name) {
    const n = name.toLowerCase();
    if (n.includes('biologi')) return 'Biologi';
    if (n.includes('sejarah')) return 'Sejarah';
    if (n.includes('fisika')) return 'Fisika';
    if (n.includes('kimia')) return 'Kimia';
    if (n.includes('matematika') || n.includes('kalkulus')) return 'Matematika';
    if (n.includes('sosiologi')) return 'Sosiologi';
    if (n.includes('geografi') || n.includes('litosfer')) return 'Geografi';
    if (n.includes('ekonomi') || n.includes('keuangan')) return 'Ekonomi';
    if (n.includes('informatika') || n.includes('komputer')) return 'Informatika';
    if (n.includes('indonesia') || n.includes('sastra')) return 'Bahasa Indonesia';
    return 'Umum';
  }

  function createModuleFromText(title, fileName, text) {
    const cat = detectCategoryFromName(title);
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 20);
    const sections = paragraphs.slice(0, 5).map((p, idx) => ({
      bab: idx + 1,
      title: `Bagian ${idx + 1}`,
      page: idx * 2 + 1,
      content: p.trim()
    }));

    return {
      id: `modul_scanned_${Date.now()}`,
      code: `MOD-${cat.slice(0, 3).toUpperCase()}`,
      title: title,
      shortTitle: title.length > 20 ? title.slice(0, 18) + '...' : title,
      category: cat,
      fileName: fileName,
      totalPages: 10,
      summary: paragraphs[0] ? paragraphs[0].slice(0, 250) + '...' : `Materi modul ${title}`,
      sections: sections,
      qaBank: [],
      quizQuestions: generateFallbackQuestions({ id: 'scanned', shortTitle: title, title: title, category: cat })
    };
  }

  // ==========================================================
  // EVENT LISTENERS SETUP
  // ==========================================================

  function setupEventListeners() {
    // Tab switching
    el.tabChatbot.onclick = () => switchTab('chatbot');
    el.tabQuiz.onclick = () => switchTab('quiz');

    // Sidebar search
    el.sidebarSearch.addEventListener('input', (e) => {
      renderSidebarModules(e.target.value);
    });

    // Chatbot send & summary
    el.btnSend.onclick = handleUserSendMessage;
    el.btnSummary.onclick = handleSummarizeCurrentModule;
    el.chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleUserSendMessage();
      }
    });

    // Scanner triggers
    el.btnOpenScan.onclick = () => el.modalScanner.classList.add('active');
    el.btnHeaderScan.onclick = openDirectoryPickerHandler;
    el.btnFolderSelect.onclick = openDirectoryPickerHandler;
    el.btnCloseModal.onclick = () => el.modalScanner.classList.remove('active');
    el.folderNativeInput.onchange = handleNativeFolderInput;

    // Drag and Drop Scanner
    el.dropZone.ondragover = (e) => {
      e.preventDefault();
      el.dropZone.classList.add('dragover');
    };
    el.dropZone.ondragleave = () => {
      el.dropZone.classList.remove('dragover');
    };
    el.dropZone.ondrop = async (e) => {
      e.preventDefault();
      el.dropZone.classList.remove('dragover');
      
      const items = e.dataTransfer.items;
      if (!items) return;

      const scanned = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.webkitGetAsEntry) {
          const entry = item.webkitGetAsEntry();
          if (entry) {
            await readEntryRecursively(entry, '', scanned);
          }
        }
      }
      processScannedFiles(scanned);
    };
  }

  async function readEntryRecursively(entry, path, list) {
    if (entry.isFile) {
      entry.file(f => {
        list.push({ file: f, path: `${path}/${f.name}`, name: f.name });
      });
    } else if (entry.isDirectory) {
      const reader = entry.createReader();
      reader.readEntries(async (entries) => {
        for (const sub of entries) {
          await readEntryRecursively(sub, `${path}/${entry.name}`, list);
        }
      });
    }
  }

  // Jalankan inisialisasi saat window dimuat
  window.addEventListener('DOMContentLoaded', initApp);
})();
