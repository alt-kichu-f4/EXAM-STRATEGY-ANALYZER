// ══════════════════════════════════════════════
//  app.js — Exam Strategy Analyzer (all-in-one)
// ══════════════════════════════════════════════

// ── Quotes ──────────────────────────────────────
window.APP_QUOTES = [
    "You have the right to work, but never to the fruit of work. – Bhagavad Gita",
    "Change is the law of the universe. – Bhagavad Gita",
    "Set thy heart upon thy work, but never on its reward. – Bhagavad Gita",
    "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. – Bhagavad Gita",
    "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. – Bhagavad Gita",
    "Arise, awake, and stop not till the goal is reached. – Katha Upanishad",
    "Truth is one; sages call it by various names. – Rig Veda",
    "Take up one idea. Make that one idea your life; dream of it; think of it; live on that idea. – Swami Vivekananda",
    "Rule your mind or it will rule you. – Buddha",
    "There is no path to happiness: happiness is the path. – Buddha",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. – Proverbs",
    "I can do all things through him who strengthens me. – Philippians 4:13",
    "So verily, with the hardship, there is relief. – Quran",
    "God does not burden a soul beyond that it can bear. – Quran",
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. – Colin Powell",
    "Strive for progress, not perfection. – Unknown",
    "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
    "Don't let what you cannot do interfere with what you can do. – John Wooden",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
    "The successful warrior is the average person, with laser-like focus. – Bruce Lee",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. – Samuel Beckett",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Whether you think you can or you think you can't, you're right. – Henry Ford",
    "I attribute my success to this: I never gave or took any excuse. – Florence Nightingale",
    "Eighty percent of success is showing up. – Woody Allen",
    "Whatever the mind of man can conceive and believe, it can achieve. – Napoleon Hill",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart",
    "We become what we think about. – Earl Nightingale",
    "Life is what happens to you while you're busy making other plans. – John Lennon",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
    "Motivation is what gets you started. Habit is what keeps you going. – Jim Ryun",
    "There are no shortcuts to any place worth going. – Beverly Sills",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Focus on being productive instead of busy. – Tim Ferriss",
    "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. – Stephen King",
    "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
    "Great things are not done by impulse, but by a series of small things brought together. – Vincent Van Gogh",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "It is never too late to be what you might have been. – George Eliot",
    "Opportunities don't happen. You create them. – Chris Grosser",
    "Don't wish it were easier. Wish you were better. – Jim Rohn",
    "Setting goals is the first step in turning the invisible into the visible. – Tony Robbins",
    "Fall seven times, stand up eight. – Japanese Proverb",
    "Only those who dare to fail greatly can ever achieve greatly. – Robert F. Kennedy",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Perseverance is failing 19 times and succeeding the 20th. – Julie Andrews",
    "Genius is one percent inspiration and 99 percent perspiration. – Thomas Edison",
    "If you fell down yesterday, stand up today. – H.G. Wells",
    "A year from now you will wish you had started today. – Karen Lamb",
    "Success consists of going from failure to failure without loss of enthusiasm. – Winston Churchill",
    "He who is not courageous enough to take risks will accomplish nothing in life. – Muhammad Ali",
    "You don't have to be great to start, but you have to start to be great. – Zig Ziglar",
    "The harder the conflict, the more glorious the triumph. – Thomas Paine",
    "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
    "The expert in anything was once a beginner. – Helen Hayes",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. – Brian Herbert",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    "Education is not preparation for life; education is life itself. – John Dewey",
    "He who opens a school door, closes a prison. – Victor Hugo",
    "I have never let my schooling interfere with my education. – Mark Twain",
    "Minds are like parachutes. They only function when they are open. – Thomas Dewar",
    "Learning is not a spectator sport. – D. Blocher",
    "You don't understand anything until you learn it more than one way. – Marvin Minsky",
    "By failing to prepare, you are preparing to fail. – Benjamin Franklin",
    "If you think education is expensive, try ignorance. – Derek Bok",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "Procrastination is the thief of time. – Edward Young",
    "Action is the foundational key to all success. – Pablo Picasso",
    "Never mistake motion for action. – Ernest Hemingway",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "You can't cross the sea merely by standing and staring at the water. – Rabindranath Tagore",
    "Tension is who you think you should be. Relaxation is who you are. – Chinese Proverb",
    "Without continual growth and progress, such words as improvement, achievement, and success have no meaning. – Benjamin Franklin",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "Action may not always bring happiness, but there is no happiness without action. – William James",
    "Nothing will work unless you do. – Maya Angelou",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "If you want to make an easy job seem mighty hard, just keep putting off doing it. – Olin Miller",
    "Do something today that your future self will thank you for. – Sean Patrick Flanery",
];

// ── Data ─────────────────────────────────────────
let studyLogs = JSON.parse(localStorage.getItem("studyLogs") || "[]");
let mockTests  = JSON.parse(localStorage.getItem("mockTests")  || "[]");
let chartInstance;

// ── Theme ─────────────────────────────────────────
function applyTheme(isLight) {
    document.body.classList.toggle("light-mode", isLight);
    const icon  = document.querySelector(".toggle-icon");
    const label = document.getElementById("themeLabel");
    if (icon)  icon.textContent  = isLight ? "☀️" : "🌙";
    if (label) label.textContent = isLight ? "Dark Mode" : "Light Mode";
}
function toggleTheme() {
    const isLight = !document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    applyTheme(isLight);
}

// ── Navigation ────────────────────────────────────
function setActiveNav() {
    const page = (location.pathname.split("/").pop() || "index.html").replace(".html","") || "index";
    document.querySelectorAll(".nav-btn[data-page]").forEach(b =>
        b.classList.toggle("active", b.dataset.page === page)
    );
}

// ── Zone helper ───────────────────────────────────
function getZone(v) {
    if (v < 35) return { label:"Critical", emoji:"🔴", color:"#f87171" };
    if (v < 50) return { label:"Weak",     emoji:"🟠", color:"#fb923c" };
    if (v < 65) return { label:"Average",  emoji:"🟡", color:"#fbbf24" };
    if (v < 85) return { label:"Good",     emoji:"🟢", color:"#34d399" };
    return             { label:"Excellent",emoji:"⭐", color:"#a78bfa" };
}

// ── Study Log ────────────────────────────────────
function addStudyLog() {
    const subject  = document.getElementById("studySubject").value;
    const topic    = document.getElementById("studyTopic").value;
    const duration = Number(document.getElementById("studyDuration").value);
    if (!subject || !topic || duration <= 0) { alert("Enter valid data"); return; }
    studyLogs.push({ subject, topic, duration, date: new Date().toLocaleDateString() });
    localStorage.setItem("studyLogs", JSON.stringify(studyLogs));
    displayStudyLogs();
}
function displayStudyLogs() {
    const c = document.getElementById("studyList"); if (!c) return;
    c.innerHTML = "";
    studyLogs.forEach(log => {
        const d = document.createElement("div");
        d.className = "log-item";
        d.innerText = `${log.date} | ${log.subject} – ${log.topic} (${log.duration} mins)`;
        c.appendChild(d);
    });
}

// ── Mock Tests ────────────────────────────────────
function addMockTest() {
    const name  = document.getElementById("mockName").value;
    const score = Number(document.getElementById("mockScore").value);
    const total = Number(document.getElementById("mockTotal").value);
    if (!name || total <= 0 || score < 0) { alert("Enter valid data"); return; }
    mockTests.push({ name, score, total, accuracy:(score/total)*100, date:new Date().toLocaleDateString() });
    localStorage.setItem("mockTests", JSON.stringify(mockTests));
    displayMockTests();
    analyzePerformance();
}
function displayMockTests() {
    const c = document.getElementById("mockList"); if (!c) return;
    c.innerHTML = "";
    mockTests.forEach(t => {
        const d = document.createElement("div");
        d.className = "log-item";
        d.innerText = `${t.date} | ${t.name}: ${t.score}/${t.total} (${t.accuracy.toFixed(1)}%)`;
        c.appendChild(d);
    });
}

// ── Dashboard stats ───────────────────────────────
function updateDashboard() {
    const el = document.getElementById("totalTime");
    if (el) el.innerText = studyLogs.reduce((s,l) => s+l.duration, 0) + " mins";
    const la = document.getElementById("latestAccuracy");
    if (la && mockTests.length) la.innerText = mockTests[mockTests.length-1].accuracy.toFixed(1) + "%";
}

// ── Analysis ─────────────────────────────────────
function analyzePerformance() {
    const stats = {};
    mockTests.forEach(t => {
        if (!stats[t.name]) stats[t.name] = { score:0, total:0 };
        stats[t.name].score += t.score;
        stats[t.name].total += t.total;
    });
    const zones = { Critical:[], Weak:[], Average:[], Good:[], Excellent:[] };
    for (const s in stats) zones[getZone((stats[s].score/stats[s].total)*100).label].push(s);
    const { Critical:cr, Weak:wk, Average:av, Good:go, Excellent:ex } = zones;

    const weakEl = document.getElementById("weakSubjects");
    if (weakEl) weakEl.innerText = (!cr.length && !wk.length)
        ? "None — all subjects are above Weak threshold 🎉"
        : [cr.length?`🚨 Critical (<35%): ${cr.join(", ")}`:"", wk.length?`🟠 Weak (35–49%): ${wk.join(", ")}`:""].filter(Boolean).join("\n");

    const sugEl = document.getElementById("suggestions");
    if (sugEl) {
        const pl = n => n>1?"are":"is";
        let sug;
        if (cr.length)      sug=`🚨 ${cr.join(", ")} ${pl(cr.length)} Critical (<35%). Revise fundamentals immediately.`;
        else if (wk.length) sug=`🟠 ${wk.join(", ")} ${wk.length>1?"need":"needs"} attention (35–49%). Focus on concept clarity.`;
        else if (av.length) sug=`🟡 Average in ${av.join(", ")} (50–64%). Push past 65% with targeted revision.`;
        else if (ex.length) sug=`⭐ Outstanding! ${ex.join(", ")} ${pl(ex.length)} scoring ≥85%!`;
        else if (go.length) sug="🟢 Good performance (65–84%)! Push into Excellent range (≥85%).";
        else if (Object.keys(stats).length) sug="Performance looks balanced. Keep it up!";
        else sug="Take some mock tests to get personalised suggestions.";
        sugEl.innerText = sug;
    }
    updateSummary(stats);
}

// ── Summary Table ─────────────────────────────────
function updateSummary(stats) {
    const table = document.getElementById("summaryTable"); if (!table) return;
    const insightsEl = document.getElementById("insightsOutput"); // summary page
    table.innerHTML = "";
    for (const s in stats) {
        const acc = (stats[s].score/stats[s].total)*100, z = getZone(acc);
        table.innerHTML += `<tr><td>${s}</td><td>${stats[s].score}/${stats[s].total}</td><td>${acc.toFixed(1)}%</td><td><span class="zone-badge zone-${z.label.toLowerCase()}">${z.emoji} ${z.label}</span></td></tr>`;
    }
}

// ── Chart ─────────────────────────────────────────
const PALETTE = [
    {line:"#38bdf8",fill:"rgba(56,189,248,0.12)"},  {line:"#a78bfa",fill:"rgba(167,139,250,0.12)"},
    {line:"#34d399",fill:"rgba(52,211,153,0.12)"},   {line:"#fb923c",fill:"rgba(251,146,60,0.12)"},
    {line:"#f472b6",fill:"rgba(244,114,182,0.12)"},  {line:"#facc15",fill:"rgba(250,204,21,0.12)"},
    {line:"#818cf8",fill:"rgba(129,140,248,0.12)"},  {line:"#4ade80",fill:"rgba(74,222,128,0.12)"},
    {line:"#f87171",fill:"rgba(248,113,113,0.12)"},  {line:"#22d3ee",fill:"rgba(34,211,238,0.12)"},
];
function subjectColorIndex(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h*31 + name.charCodeAt(i)) >>> 0;
    return h % PALETTE.length;
}

const emojiMarkerPlugin = {
    id: "emojiMarkers",
    afterDatasetsDraw(chart) {
        const { ctx, scales } = chart, isLight = document.body.classList.contains("light-mode");
        ctx.save();
        chart.data.datasets.forEach(ds => {
            const vals = ds.data.filter(v => v != null); if (!vals.length) return;
            const maxV = Math.max(...vals), minV = Math.min(...vals), lc = ds.borderColor;
            ds.data.forEach((val, i) => {
                if (val == null) return;
                const isPeak = val === maxV, isCrit = val === minV && val <= 100/3 && vals.length > 1;
                if (!isPeak && !isCrit) return;
                const x = scales.x.getPixelForValue(i), y = scales.y.getPixelForValue(val);
                const emoji = isPeak ? (vals.length === 1 ? "🎯" : "🏆") : "🚨";
                const [pw,ph,pr] = [36,28,9], px = x-pw/2, py = y-50;
                ctx.shadowColor = lc; ctx.shadowBlur = 8;
                ctx.fillStyle = isLight ? "rgba(255,255,255,0.92)" : "rgba(15,23,42,0.88)";
                ctx.beginPath(); ctx.roundRect(px,py,pw,ph,pr); ctx.fill(); ctx.shadowBlur = 0;
                ctx.strokeStyle = lc; ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.roundRect(px,py,pw,ph,pr); ctx.stroke();
                ctx.setLineDash([3,3]); ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(x,py+ph); ctx.lineTo(x,y-8); ctx.stroke(); ctx.setLineDash([]);
                ctx.font = "18px serif"; ctx.textAlign = "center"; ctx.fillText(emoji, x, py+ph-6);
                ctx.font = "bold 10px Arial"; ctx.fillStyle = isLight ? "#0f172a" : "#e2e8f0";
                ctx.fillText(val.toFixed(0)+"%", x, y+22);
            });
        });
        ctx.restore();
    }
};

function drawChart() {
    const chartEl = document.getElementById("chart"); if (!chartEl) return;
    const hist = {};
    mockTests.forEach(t => { if (!hist[t.name]) hist[t.name]=[]; hist[t.name].push(parseFloat(t.accuracy.toFixed(1))); });
    const subjects = Object.keys(hist), maxN = subjects.length ? Math.max(...subjects.map(s => hist[s].length)) : 0;
    const labels = Array.from({length:maxN}, (_,i) => `Test ${i+1}`);
    const isLight = document.body.classList.contains("light-mode");
    const tp = isLight?"#0f172a":"#e2e8f0", gc = isLight?"rgba(15,23,42,0.07)":"rgba(255,255,255,0.06)", bc = isLight?"rgba(15,23,42,0.13)":"rgba(255,255,255,0.10)";
    const datasets = subjects.map(name => {
        const pal = PALETTE[subjectColorIndex(name)];
        const padded = Array.from({length:maxN}, (_,i) => i < hist[name].length ? hist[name][i] : null);
        return { label:name, data:padded, tension:0.42, fill:true, backgroundColor:pal.fill, borderColor:pal.line, borderWidth:2.5, pointBackgroundColor:padded.map(v => v==null?"transparent":getZone(v).color), pointBorderColor:"#fff", pointBorderWidth:2, pointRadius:padded.map(v => v==null?0:6), pointHoverRadius:9, spanGaps:false };
    });
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(chartEl, {
        type:"line", data:{labels, datasets},
        options:{
            responsive:true, animation:{duration:750,easing:"easeInOutQuart"},
            layout:{padding:{top:48,bottom:8}}, interaction:{mode:"index",intersect:false},
            plugins:{
                legend:{position:"top",labels:{color:tp,font:{size:12,weight:"600"},padding:16,usePointStyle:true,pointStyleWidth:12}},
                tooltip:{backgroundColor:isLight?"#fff":"#1e293b",titleColor:tp,bodyColor:tp,borderWidth:1,padding:12,
                    callbacks:{
                        title:items=>`📋 ${items[0].label}`,
                        label:ctx=>{ if(ctx.parsed.y==null) return null; const z=getZone(ctx.parsed.y); return ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}%  ${z.emoji} ${z.label}`; },
                        labelColor:ctx=>({borderColor:ctx.dataset.borderColor,backgroundColor:ctx.dataset.borderColor,borderRadius:4})
                    }
                }
            },
            scales:{
                x:{grid:{color:gc},border:{color:bc},ticks:{color:tp,font:{size:12}}},
                y:{min:0,max:100,grid:{color:gc},border:{color:bc},ticks:{color:tp,font:{size:12},callback:v=>v+"%"}}
            }
        },
        plugins:[emojiMarkerPlugin]
    });
}

// ── Quotes ────────────────────────────────────────
function generateQuote() {
    const el = document.getElementById("quoteText"); if (!el) return;
    el.innerText = window.APP_QUOTES[Math.floor(Math.random() * window.APP_QUOTES.length)];
}

// ── Reset ─────────────────────────────────────────
function resetData() {
    if (!confirm("⚠️ Reset All Data?\n\nPermanently deletes ALL study logs and mock test results.\nThis cannot be undone.")) return;
    if (!confirm("🗑 Final confirmation — press OK to wipe all data.")) return;
    localStorage.removeItem("studyLogs"); localStorage.removeItem("mockTests");
    studyLogs = []; mockTests = [];
    alert("✅ All data has been reset.");
    location.href = "index.html";
}

// ── INIT (runs on every page) ─────────────────────
applyTheme(localStorage.getItem("theme") === "light");
setActiveNav();
displayStudyLogs();
displayMockTests();
updateDashboard();
analyzePerformance();
drawChart();

// ══════════════════════════════════════════════
//  ADDITIONAL FEATURES — Guidelines Compliance
// ══════════════════════════════════════════════

// ── Set today's date as default for date inputs ──
(function setDefaultDates() {
    const today = new Date().toISOString().split('T')[0];
    ['studyDate', 'mockTestDate'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = today;
    });
})();

// ── New Study Form with comprehensive validation ──
(function setupStudyForm() {
    const form = document.getElementById('studyForm');
    if (!form) return;

    // Use event delegation on the form
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const subject  = document.getElementById('studySubject').value.trim();
        const topic    = document.getElementById('studyTopic').value.trim();
        const duration = Number(document.getElementById('studyDuration').value);
        const notes    = document.getElementById('studyNotes') ? document.getElementById('studyNotes').value.trim() : '';
        const mood     = document.getElementById('studyMood') ? document.getElementById('studyMood').value : 'Medium';
        const isRevision = document.getElementById('studyRevision') ? document.getElementById('studyRevision').checked : false;
        const modeEl   = form.querySelector('input[name="mode"]:checked');
        const studyMode = modeEl ? modeEl.value : 'Solo';
        const dateEl   = document.getElementById('studyDate');
        const dateVal  = dateEl ? dateEl.value : new Date().toLocaleDateString();
        const errEl    = document.getElementById('studyFormError');

        // Real-time field feedback
        if (!subject) { showFormError(errEl, '⚠️ Subject is required.'); document.getElementById('studySubject').focus(); return; }
        if (!topic)   { showFormError(errEl, '⚠️ Topic is required.'); document.getElementById('studyTopic').focus(); return; }
        if (duration <= 0 || isNaN(duration)) { showFormError(errEl, '⚠️ Duration must be a positive number.'); return; }
        if (errEl) { errEl.style.display = 'none'; errEl.classList.remove('visible'); }

        studyLogs.push({ subject, topic, duration, notes, mood, isRevision, studyMode, date: dateVal || new Date().toLocaleDateString() });
        localStorage.setItem('studyLogs', JSON.stringify(studyLogs));
        displayStudyLogs();
        form.reset();
        setDefaultDates();
        updateDashboard();
    });

    // Real-time keydown feedback on number field
    const durInput = document.getElementById('studyDuration');
    if (durInput) {
        durInput.addEventListener('keydown', function(e) {
            if (e.key === '-' || e.key === 'e') e.preventDefault();
        });
        durInput.addEventListener('input', function() {
            const errEl = document.getElementById('studyFormError');
            if (this.value && Number(this.value) > 0) {
                if (errEl) { errEl.style.display = 'none'; errEl.classList.remove('visible'); }
            }
        });
    }
})();

// ── New Mock Form with comprehensive validation ──
(function setupMockForm() {
    const form = document.getElementById('mockForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name     = document.getElementById('mockName').value.trim();
        const score    = Number(document.getElementById('mockScore').value);
        const total    = Number(document.getElementById('mockTotal').value);
        const dateEl   = document.getElementById('mockTestDate');
        const dateVal  = dateEl ? dateEl.value : new Date().toLocaleDateString();
        const diffEl   = form.querySelector('input[name="difficulty"]:checked');
        const difficulty = diffEl ? diffEl.value : 'Medium';
        const isTimed  = document.getElementById('mockTimed') ? document.getElementById('mockTimed').checked : false;
        const errEl    = document.getElementById('mockFormError');

        // Validation with custom error messages
        if (!name)              { showFormError(errEl, '⚠️ Subject name is required.'); return; }
        if (isNaN(total) || total <= 0) { showFormError(errEl, '⚠️ Total marks must be greater than 0.'); return; }
        if (isNaN(score) || score < 0) { showFormError(errEl, '⚠️ Score cannot be negative.'); return; }
        if (score > total)      { showFormError(errEl, '⚠️ Score cannot exceed total marks.'); return; }
        if (errEl) { errEl.style.display = 'none'; errEl.classList.remove('visible'); }

        mockTests.push({ name, score, total, accuracy: (score/total)*100, difficulty, isTimed, date: dateVal || new Date().toLocaleDateString() });
        localStorage.setItem('mockTests', JSON.stringify(mockTests));
        displayMockTests();
        analyzePerformance();
        form.reset();
        setDefaultDates();
        updateDashboard();
    });

    // Event delegation — mouseover on history list
    const mockList = document.getElementById('mockList');
    if (mockList) {
        mockList.addEventListener('mouseover', function(e) {
            const item = e.target.closest('.log-item');
            if (item) item.style.background = 'var(--nav-active-bg)';
        });
        mockList.addEventListener('mouseout', function(e) {
            const item = e.target.closest('.log-item');
            if (item) item.style.background = '';
        });
    }
})();

// ── Form Error Helper ──
function showFormError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.style.display = 'block';
    el.classList.add('visible');
}

// ── createElement + append for DOM Manipulation ──
// Override displayStudyLogs to use createElement/append
displayStudyLogs = function() {
    const c = document.getElementById('studyList');
    if (!c) return;
    c.innerHTML = '';
    if (!studyLogs.length) {
        const empty = document.createElement('p');
        empty.textContent = 'No study sessions logged yet. Add one!';
        empty.style.cssText = 'color:var(--text-secondary);font-size:.88em;';
        c.appendChild(empty);
        return;
    }
    // Use document fragment for performance
    const frag = document.createDocumentFragment();
    studyLogs.slice().reverse().forEach(log => {
        const d = document.createElement('div');
        d.className = 'log-item';
        const dateSpan = document.createElement('span');
        dateSpan.style.cssText = 'color:var(--text-secondary);font-size:.8em;';
        dateSpan.textContent = log.date + ' ';
        const subSpan = document.createElement('strong');
        subSpan.textContent = log.subject;
        const rest = document.createTextNode(` – ${log.topic} (${log.duration} mins)`);
        const badge = document.createElement('span');
        badge.className = 'zone-badge zone-good';
        badge.style.cssText = 'float:right;font-size:.72em;';
        badge.textContent = log.mood || 'Medium';
        d.appendChild(badge);
        d.appendChild(dateSpan);
        d.appendChild(subSpan);
        d.appendChild(rest);
        frag.appendChild(d);
    });
    c.appendChild(frag);
};

// Override displayMockTests to use createElement/append
displayMockTests = function() {
    const c = document.getElementById('mockList');
    if (!c) return;
    c.innerHTML = '';
    if (!mockTests.length) {
        const empty = document.createElement('p');
        empty.textContent = 'No test results yet. Add one to see analysis!';
        empty.style.cssText = 'color:var(--text-secondary);font-size:.88em;';
        c.appendChild(empty);
        return;
    }
    const frag = document.createDocumentFragment();
    mockTests.slice().reverse().forEach(t => {
        const d = document.createElement('div');
        d.className = 'log-item';
        const z = getZone(t.accuracy);
        const badge = document.createElement('span');
        badge.className = `zone-badge zone-${z.label.toLowerCase()}`;
        badge.style.cssText = 'float:right;font-size:.72em;';
        badge.textContent = z.emoji + ' ' + z.label;
        const dateSpan = document.createElement('span');
        dateSpan.style.cssText = 'color:var(--text-secondary);font-size:.8em;';
        dateSpan.textContent = t.date + ' ';
        const nameEl = document.createElement('strong');
        nameEl.textContent = t.name;
        const scoreText = document.createTextNode(`: ${t.score}/${t.total} (${t.accuracy.toFixed(1)}%)`);
        d.appendChild(badge);
        d.appendChild(dateSpan);
        d.appendChild(nameEl);
        d.appendChild(scoreText);
        frag.appendChild(d);
    });
    c.appendChild(frag);
};

// ── Event Handling: keydown on search ──
document.addEventListener('keydown', function(e) {
    // Press Escape to clear active form errors
    if (e.key === 'Escape') {
        ['studyFormError', 'mockFormError'].forEach(id => {
            const el = document.getElementById(id);
            if (el) { el.style.display = 'none'; el.classList.remove('visible'); }
        });
    }
});

// ── Scroll event: add shadow to page header on scroll ──
(function setupScrollEvents() {
    const mainEl = document.querySelector('.main');
    const headerEl = document.querySelector('.page-header');
    if (!mainEl || !headerEl) return;
    mainEl.addEventListener('scroll', function() {
        if (mainEl.scrollTop > 10) {
            headerEl.style.boxShadow = '0 4px 16px var(--card-shadow)';
        } else {
            headerEl.style.boxShadow = 'none';
        }
    });
})();

// ── Mouseover on nav for tooltip-like title ──
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseover', function() {
        this.title = 'Go to ' + (this.textContent.trim());
    });
});

// Re-run display functions with new implementations
displayStudyLogs();
displayMockTests();
