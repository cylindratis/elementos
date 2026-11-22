const icons = {
  map: '<circle cx="5" cy="18" r="2"/><circle cx="18" cy="5" r="2"/><path d="M7 18h9a3 3 0 0 0 0-6H8a3.5 3.5 0 0 1 0-7h8"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  book: '<path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1Zm0 0v15"/>',
  chart: '<path d="M4 4v16h16M8 15l4-5 4 2 4-6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  loop: '<path d="M20 11a8 8 0 0 0-14-5L3 9m0-5v5h5m-4 4a8 8 0 0 0 14 5l3-3m0 5v-5h-5"/>',
  split: '<path d="M5 21V8m0 6h8a5 5 0 0 0 5-5V4m-3 3 3-3 3 3M2 11l3-3 3 3"/>',
  spark: '<path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z"/>',
  shuffle: '<path d="M3 6h3c4 0 7 12 11 12h4m-4-4 4 4-4 4M3 18h3c4 0 7-12 11-12h4m-4-4 4 4-4 4"/>',
  clock: '<circle cx="12" cy="13" r="8"/><path d="M10 2h4m-2 7v4l3 2m3-9 2-2"/>',
  trophy: '<path d="M8 21h8m-4-4v4M7 4h10v7a5 5 0 1 1-10 0V4ZM7 6H3v2a4 4 0 0 0 4 4m10-6h4v2a4 4 0 0 1-4 4"/>',
  flame: '<path d="M12 22c-5 0-8-3-8-7 0-3 2-5 4-7 0 3 2 4 2 4-1-5 2-8 5-10-1 5 5 7 5 13 0 4-3 7-8 7Z"/>',
  heart: '<path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-2 2-2 5 0 7l8 8 8-8c2-2 2-5 0-7Z"/>',
  volume: '<path d="M3 9h4l5-4v14l-5-4H3Zm13 0a4 4 0 0 1 0 6m3-9a8 8 0 0 1 0 12"/>',
  mute: '<path d="M3 9h4l5-4v14l-5-4H3Zm13 1 5 5m0-5-5 5"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  bulb: '<path d="M9 18h6m-5 4h4m-2-20a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-12 5h6"/>'
};

const icon = (name, cls = "") => '<svg aria-hidden="true" class="icon '+cls+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+icons[name]+'</svg>';
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const unitById = Object.fromEntries(units.map(unit => [unit.id, unit]));
const questions = units.flatMap(unit => questionGroups[unit.id]);
const questionById = Object.fromEntries(questions.map(question => [question.id, question]));
const menu = [["trilhas", "map", "Trilhas"], ["revisao", "shuffle", "Revisão"], ["simulado", "clock", "Simulado"], ["progresso", "chart", "Progresso"]];
const modeTitles = { random: "Prática aleatória", review: "Revisão espaçada", recovery: "Recuperar vidas" };
const labels = { choice: "Múltipla escolha", fill: "Preenchimento", match: "Associação" };
const root = document.querySelector("#app");
const maxHearts = 5;
const recoveryTime = 30 * 60 * 1000;
const examTime = 100 * 60 * 1000;
const intervals = [1, 3, 7, 14, 30];
const storageKey = "elementos.study.v1";
const fresh = () => ({
  xp: 0, hearts: maxHearts, refillAt: 0, days: [], completed: {}, history: {}, badges: [],
  sound: true, track: "algebra", run: null, paused: null, examRun: null, exams: 0, perfect: false
});
let storageAvailable = true;
let state = fresh();
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && typeof saved === "object") state = { ...state, ...saved };
} catch {
  // A malformed older save does not prevent a new session.
}

function save() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { storageAvailable = false; }
}

function day(offset = 0) {
  const now = new Date();
  now.setDate(now.getDate() + offset);
  return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
}

function streak() {
  const played = new Set(state.days);
  let offset = played.has(day()) ? 0 : -1;
  let consecutive = 0;
  while (played.has(day(offset))) { consecutive++; offset--; }
  return consecutive;
}

function touchDay() {
  if (!state.days.includes(day())) state.days.push(day());
}

const achievements = [
  ["first", "Primeiro passo", "Conclua uma lição.", "spark", () => Object.keys(state.completed).length > 0],
  ["perfect", "Lição perfeita", "Acerte todas as questões de uma lição sem consultar a resolução.", "trophy", () => state.perfect],
  ["three", "Em ritmo", "Estude por 3 dias seguidos.", "flame", () => streak() >= 3],
  ["algebra", "Mestre das matrizes", "Conclua toda a trilha de Álgebra.", "grid", () => allDone("algebra")],
  ["economia", "Olhar clássico", "Conclua toda a trilha de Pensamento econômico.", "book", () => allDone("economia")],
  ["exam", "Dia de prova", "Entregue um simulado com pelo menos uma resposta.", "clock", () => state.exams > 0]
];

function allDone(track) {
  return units.filter(unit => unit.track === track).every(unit => state.completed[unit.id]);
}

function rewardBadges() {
  const newlyEarned = [];
  for (const [id, title, , , eligible] of achievements) {
    if (!state.badges.includes(id) && eligible()) {
      state.badges.push(id);
      state.xp += 20;
      newlyEarned.push(title);
    }
  }
  return newlyEarned;
}

function refreshHearts() {
  if (!state.refillAt || Date.now() < state.refillAt) return false;
  const recovered = 1 + Math.floor((Date.now() - state.refillAt) / recoveryTime);
  state.hearts = Math.min(maxHearts, state.hearts + recovered);
  state.refillAt = state.hearts < maxHearts ? state.refillAt + recovered * recoveryTime : 0;
  save();
  return true;
}

function loseHeart() {
  state.hearts = Math.max(0, state.hearts - 1);
  if (!state.refillAt) state.refillAt = Date.now() + recoveryTime;
}

function gainHeart() {
  state.hearts = Math.min(maxHearts, state.hearts + 1);
  if (state.hearts === maxHearts) state.refillAt = 0;
}

function shuffle(entries) {
  const result = [...entries];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function mixed(count) {
  return shuffle(tracks.flatMap(track => shuffle(questions.filter(q => unitById[q.unit].track === track.id)).slice(0, count / 2)));
}

function record(question, correct, assisted) {
  const previous = state.history[question.id] ?? { attempts: 0, correct: 0, box: 0 };
  const solid = correct && !assisted;
  const next = solid ? Math.min(intervals.length, previous.box + 1) : 0;
  state.history[question.id] = {
    attempts: previous.attempts + 1,
    correct: previous.correct + Number(solid),
    box: next,
    due: day(solid ? intervals[next - 1] : 0)
  };
}

function reviewPool() {
  return questions.filter(q => state.history[q.id]?.due <= day()).sort((a, b) => {
    const first = state.history[a.id];
    const second = state.history[b.id];
    return first.box - second.box || first.due.localeCompare(second.due);
  });
}

function weakPool() {
  const weak = units.filter(unit => topicStats(unit).status === "A reforçar");
  return shuffle(weak.flatMap(unit => questionGroups[unit.id]));
}

function topicStats(unit) {
  let correct = 0;
  let attempts = 0;
  let practiced = 0;
  let weak = 0;
  for (const q of questionGroups[unit.id]) {
    const history = state.history[q.id];
    if (!history) continue;
    practiced++;
    attempts += history.attempts;
    correct += history.correct;
    if (history.box === 0) weak++;
  }
  const accuracy = attempts ? Math.round(100 * correct / attempts) : 0;
  const mastered = practiced >= Math.ceil(questionGroups[unit.id].length * .75) && accuracy >= 80 && !weak;
  return { accuracy, attempts, status: !attempts ? "A começar" : mastered ? "Dominado" : weak || accuracy < 80 ? "A reforçar" : "Em prática" };
}

let audio;
function chime(correct) {
  if (!state.sound) return;
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    audio ??= new Audio();
    void audio.resume().catch(() => {});
    const notes = correct ? [520, 660, 780] : [270, 186];
    notes.forEach((frequency, index) => {
      const when = audio.currentTime + index * .085;
      const wave = audio.createOscillator();
      const volume = audio.createGain();
      wave.type = "sine";
      wave.frequency.value = frequency;
      volume.gain.setValueAtTime(.001, when);
      volume.gain.exponentialRampToValueAtTime(.12, when + .02);
      volume.gain.exponentialRampToValueAtTime(.001, when + .18);
      wave.connect(volume).connect(audio.destination);
      wave.start(when);
      wave.stop(when + .19);
    });
  } catch { /* The visual feedback is always available. */ }
}

function route() {
  const hash = location.hash.slice(1).split("/");
  return hash[0] ? hash : ["trilhas"];
}

function go(destination) {
  if (location.hash === "#" + destination) render(true);
  else location.hash = destination;
}

function available(unit) {
  const trail = units.filter(candidate => candidate.track === unit.track);
  const index = trail.indexOf(unit);
  return index === 0 || Boolean(state.completed[trail[index - 1].id]);
}

function button(action, label, theme = "primary", symbol = "", key = "", disabled = false) {
  return '<button type="button" class="button '+theme+'" data-action="'+action+'"'+(key ? ' data-key="'+key+'"' : "")+(disabled ? " disabled" : "")+'>'+escapeHtml(label)+(symbol ? icon(symbol) : "")+'</button>';
}

function meter(value, max, label = "Progresso") {
  return '<progress class="meter" value="'+value+'" max="'+max+'" aria-label="'+label+'"></progress>';
}

function navigation(active) {
  return menu.map(([id, symbol, title]) => '<a href="#'+id+'" '+(id === active ? 'aria-current="page"' : '')+'>'+icon(symbol)+'<span>'+title+'</span></a>').join("");
}

function shell(content, active) {
  return '<div class="layout"><aside class="sidebar"><a href="#trilhas" class="brand"><span class="brand-mark" aria-hidden="true">E</span><span>Elementos<small>ECO02113</small></span></a>'+
    '<nav aria-label="Estudo">'+navigation(active)+'</nav><div class="side-foot">'+icon("calendar")+'<span>2ª avaliação<br><strong>03 de dezembro</strong></span></div></aside>'+
    '<div class="workspace"><header class="topbar"><a href="#trilhas" class="mobile-brand"><span class="brand-mark" aria-hidden="true">E</span>Elementos</a>'+
    '<div class="top-stats"><span class="counter flame" title="Sequência de dias">'+icon("flame")+'<b>'+streak()+'</b><span class="sr-only">dias seguidos</span></span>'+
    '<span class="counter xp" title="Pontos de experiência">'+icon("spark")+'<b>'+state.xp+'</b><small>XP</small></span>'+
    '<button class="counter life" data-action="lives" title="Corações" aria-label="'+state.hearts+' de '+maxHearts+' corações">'+icon("heart")+'<b>'+state.hearts+'</b></button>'+
    '<button class="sound" data-action="sound" aria-label="Som de resposta" aria-pressed="'+state.sound+'">'+icon(state.sound ? "volume" : "mute")+'</button></div></header>'+
    '<main id="main" tabindex="-1" class="main">'+(storageAvailable ? "" : '<p role="status" class="notice">O navegador bloqueou o armazenamento. Mantenha esta aba aberta para conservar o progresso da sessão.</p>')+content+'</main>'+
    '<nav class="bottom-nav" aria-label="Estudo">'+navigation(active)+'</nav></div></div>';
}

function viewHeader(title, subtitle) {
  return '<header class="section-head"><h1>'+title+'</h1><p>'+subtitle+'</p></header>';
}

function trackView() {
  const selected = tracks.find(track => track.id === state.track) ?? tracks[0];
  const trail = units.filter(unit => unit.track === selected.id);
  const current = trail.find(unit => !state.completed[unit.id]);
  const completed = trail.filter(unit => state.completed[unit.id]).length;
  const due = reviewPool().length;
  const xpLevel = state.xp % 100;
  const running = state.run && !state.run.result;
  return '<section class="hero"><div class="hero-content"><span class="hero-label"><i></i> PREPARAÇÃO · 2ª PROVA</span><h1>Elementos de<br>Matemática</h1>'+
    '<p>Economia Política, da matriz ao argumento.</p>'+button(running ? "resume" : current ? "open-unit" : "random", running ? "Retomar sessão" : current ? "Continuar estudando" : "Praticar os dois trilhos", "hero-button", "arrow", current?.id)+
    '</div><div class="hero-art" aria-hidden="true"><span class="art-orbit orbit-a"></span><span class="art-orbit orbit-b"></span><b class="tile tile-one">Σ</b><b class="tile tile-two">λ</b><b class="tile tile-three">π</b><b class="tile tile-four">+</b><span class="art-cross">✧</span><span class="art-point"></span></div></section>'+
    '<div class="dashboard"><section class="trail"><div class="trail-heading"><div><h2>Sua trilha</h2><p>Escolha um trilho para estudar.</p></div><span class="trail-count">'+completed+' / '+trail.length+' lições</span></div>'+
    '<div class="track-tabs" role="group" aria-label="Trilhos">'+tracks.map(track => '<button data-action="track" data-key="'+track.id+'" class="track-tab '+track.color+' '+(selected.id === track.id ? "selected" : "")+'" aria-pressed="'+(selected.id === track.id)+'">'+icon(track.icon)+track.title+'</button>').join("")+'</div>'+
    '<ol class="unit-list">'+trail.map((unit, i) => {
      const done = Boolean(state.completed[unit.id]);
      const open = available(unit);
      const status = done ? "Concluída" : open ? "Disponível" : "Bloqueada";
      return '<li class="'+selected.color+' '+(open ? "unlocked" : "locked")+'"><button class="unit" data-action="open-unit" data-key="'+unit.id+'" '+(open ? "" : "disabled")+'><span class="unit-symbol">'+icon(done ? "check" : open ? unit.icon : "lock")+'</span><span class="unit-copy"><small>Lição '+(i + 1)+' · '+questionGroups[unit.id].length+' questões</small><strong>'+unit.name+'</strong></span><span class="unit-status">'+status+(open ? icon("arrow") : "")+'</span></button></li>';
    }).join("")+'</ol></section><aside class="cards" aria-label="Resumo de estudo">'+
    '<section class="card level-card"><div class="card-heading"><span class="mini-symbol yellow">'+icon("spark")+'</span><div><h3>Nível '+(Math.floor(state.xp / 100) + 1)+'</h3><p>'+state.xp+' XP acumulados</p></div></div>'+meter(xpLevel, 100, "Experiência até o próximo nível")+'<small class="card-foot">Faltam '+(100 - xpLevel)+' XP para subir de nível.</small></section>'+
    '<section class="card"><div class="card-heading"><span class="mini-symbol purple">'+icon("loop")+'</span><div><h3>Revisão de hoje</h3><p>'+(due ? due+' '+(due === 1 ? "questão para revisar" : "questões para revisar") : "Nenhuma revisão pendente")+'</p></div></div><a class="card-link" href="#revisao">Ir para revisão '+icon("arrow")+'</a></section>'+
    '<section class="card"><div class="card-heading"><span class="mini-symbol green">'+icon("clock")+'</span><div><h3>Simulado</h3><p>5 discursivas · 100 min</p></div></div><a class="card-link" href="#simulado">Ver simulado '+icon("arrow")+'</a></section>'+
    '</aside></div>';
}

function unitView(unit) {
  return '<a class="back" href="#trilhas">Voltar às trilhas</a>'+viewHeader(unit.name, 'Leia os pontos principais antes de começar.')+
    '<section class="card content-card"><h2>Antes de praticar</h2><ol class="steps">'+unit.lesson.map(line => '<li>'+line+'</li>').join("")+
    '</ol><p class="source">Fonte · '+unit.source+'</p>'+button("lesson", state.completed[unit.id] ? "Refazer lição" : "Começar lição", "primary", "arrow", unit.id)+
    '<p class="fine">Acerte pelo menos 60% sem consultar a resolução para liberar a próxima lição.</p></section>';
}

function reviewView() {
  const due = reviewPool();
  const weak = weakPool();
  return viewHeader("Revisão", "Pratique os dois trilhos e retome os assuntos em que você errou.")+
    '<div class="mode-grid"><section class="card mode-card"><span class="mini-symbol purple">'+icon("loop")+'</span><h2>Revisão espaçada</h2><p>'+due.length+' '+(due.length === 1 ? "questão programada" : "questões programadas")+' para hoje. Os acertos ampliam o intervalo até a próxima revisão.</p>'+
    button("review", due.length ? "Revisar agora" : weak.length ? "Reforçar temas" : "Nada para revisar", "primary", "arrow", "", !due.length && !weak.length)+'</section>'+
    '<section class="card mode-card"><span class="mini-symbol green">'+icon("shuffle")+'</span><h2>Prática aleatória</h2><p>Oito questões combinam Álgebra e Pensamento econômico, com correção a cada resposta.</p>'+button("random", "Começar prática", "secondary", "arrow")+'</section>'+
    '<section class="card mode-card"><span class="mini-symbol pink">'+icon("heart")+'</span><h2>Recuperar vidas</h2><p>Ganhe um coração a cada três acertos na prática de recuperação. Você também recebe um coração a cada 30 minutos.</p>'+
    button("recover", state.hearts === maxHearts ? "Corações completos" : "Praticar para recuperar", "secondary", "heart", "", state.hearts === maxHearts)+'</section></div>'+
    (state.paused && state.hearts > 0 ? '<p>'+button("return", "Retomar lição pausada", "primary", "arrow")+'</p>' : "");
}

function progressView() {
  const studied = state.days.length;
  const counters = [["chart", state.xp+" XP", "Nível "+(Math.floor(state.xp / 100) + 1)], ["flame", streak()+" "+(streak() === 1 ? "dia" : "dias"), "Sequência atual"], ["check", Object.keys(state.completed).length+" / "+units.length, "Lições concluídas"], ["calendar", studied, "Dias estudados"]];
  return viewHeader("Seu progresso", "Veja o que já domina e o que ainda precisa praticar.")+
    '<div class="stat-grid">'+counters.map(([symbol, number, title]) => '<div class="card stat">'+icon(symbol)+'<strong>'+number+'</strong><small>'+title+'</small></div>').join("")+'</div>'+
    '<section class="card content-card"><h2>Desempenho por tema</h2><p class="fine">O domínio exige 80% de acertos sem ajuda, prática de ao menos 75% do banco do tema e nenhum erro pendente nas questões respondidas.</p>'+
    '<div class="topics">'+tracks.map(track => '<div><h3>'+track.title+'</h3>'+units.filter(unit => unit.track === track.id).map(unit => {
      const result = topicStats(unit);
      return '<div class="topic"><div><strong>'+unit.name+'</strong><small>'+(result.attempts ? result.accuracy+'% de acertos · '+result.attempts+' respostas' : 'Ainda sem respostas')+'</small></div><span class="tag '+({"Dominado":"green","A reforçar":"pink","Em prática":"purple"}[result.status] ?? "")+'">'+result.status+'</span></div>';
    }).join("")+'</div>').join("")+'</div></section>'+
    '<section class="card content-card"><h2>Conquistas · '+state.badges.length+'/'+achievements.length+'</h2><div class="badges">'+achievements.map(([id, title, desc, symbol]) => {
      const earned = state.badges.includes(id);
      return '<div class="badge '+(earned ? "earned" : "")+'"><span class="mini-symbol '+(earned ? "yellow" : "")+'">'+icon(earned ? symbol : "lock")+'</span><div><strong>'+title+'</strong><small>'+desc+(earned ? " Conquistada · +20 XP" : "")+'</small></div></div>';
    }).join("")+'</div></section>';
}

function newRun(mode, selected, unit = "") {
  if (state.run && !state.run.result && state.run !== state.paused) {
    if (mode === "recovery" && !state.paused) state.paused = state.run;
    else if (!window.confirm("Começar outra sessão e encerrar a atual? O XP e as respostas registradas ficam salvos.")) return;
  }
  if (mode !== "recovery" && !state.hearts) { livesDialog(); return; }
  if (!selected.length) return;
  state.run = {
    mode, unit, ids: selected.map(q => q.id), index: 0, right: 0, xp: 0, earned: [],
    draft: null, feedback: null, helped: false, result: null,
    order: Object.fromEntries(selected.map(q => [q.id, shuffle(q.type === "choice" ? q.options : q.type === "match" ? q.pairs.map(pair => pair[1]) : [])]))
  };
  save();
  go("sessao");
}

function livesDialog() {
  document.querySelector("#lives")?.remove();
  const dialog = document.createElement("dialog");
  dialog.id = "lives";
  dialog.innerHTML = '<form method="dialog"><button class="close-dialog" aria-label="Fechar">'+icon("close")+'</button></form>'+
    '<span class="mini-symbol pink">'+icon("heart")+'</span><h2>Seus corações</h2><p>'+state.hearts+' de '+maxHearts+' disponíveis. Você perde um coração por erro nas lições e nas práticas comuns.</p>'+
    (state.refillAt ? '<p>Próximo coração em <strong id="refill-clock">'+clockText(state.refillAt)+'</strong>.</p>' : "")+
    (state.hearts < maxHearts ? button("recover", "Praticar para recuperar", "primary", "heart") : "");
  root.append(dialog);
  dialog.showModal();
}

function numeric(value) {
  const cleaned = value.replace(/\s/g, "").replace(/,/g, ".").replace(/−/g, "-");
  const number = "[+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)";
  const fraction = cleaned.match(new RegExp("^("+number+")/("+number+")$"));
  if (fraction && Number(fraction[2])) return Number(fraction[1]) / Number(fraction[2]);
  if (new RegExp("^"+number+"%?$").test(cleaned)) return Number(cleaned.replace("%", "")) / (cleaned.endsWith("%") ? 100 : 1);
  return NaN;
}

function normalize(value) {
  return value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.]/g, "").replace(/[-\s]+/g, " ");
}

function grade(q, draft) {
  if (q.type === "choice") return draft === q.answer;
  if (q.type === "match") return q.pairs.every((pair, i) => draft?.[i] === pair[1]);
  return q.answer.some(answer => {
    const expected = numeric(answer);
    return Number.isFinite(expected) ? Math.abs(numeric(draft) - expected) < 1e-7 : normalize(draft) === normalize(answer);
  });
}

function showSteps(q) {
  return '<div class="explanation"><ol class="steps">'+q.steps.map(step => '<li>'+step+'</li>').join("")+'</ol><p class="source">Fonte · '+(q.source ?? unitById[q.unit].source)+'</p></div>';
}

function quizView() {
  const run = state.run;
  if (!run) return viewHeader("Sessão de estudo", "Escolha uma lição para começar.")+button("home", "Ir para trilhas");
  const title = run.unit ? unitById[run.unit].name : modeTitles[run.mode];
  const back = run.mode === "lesson" ? "trilhas" : "revisao";
  if (run.result) {
    const res = run.result;
    return '<section class="card quiz-result"><span class="mini-symbol '+(res.passed ? "yellow" : "purple")+'">'+icon(res.passed ? "trophy" : "loop")+'</span>'+
      '<h1>'+res.title+'</h1><p>'+res.description+'</p><div class="result-line"><strong>'+run.right+' / '+run.ids.length+'</strong><span>acertos sem ajuda</span><strong>+'+run.xp+' XP</strong></div>'+
      (run.earned.length ? '<p class="earned-line">Conquistas · '+run.earned.join(", ")+'</p>' : "")+
      '<div class="actions">'+(state.paused && state.hearts ? button("return", "Retomar atividade", "primary", "arrow") : '<a class="button primary" href="#'+back+'">Continuar estudando</a>')+'</div></section>';
  }
  const q = questionById[run.ids[run.index]];
  const feedback = run.feedback;
  const outOfLives = !state.hearts && run.mode !== "recovery" && !feedback;
  if (outOfLives) return '<section class="card quiz-result"><span class="mini-symbol pink">'+icon("heart")+'</span><h1>Hora de recuperar vidas</h1><p>Sua atividade está salva. Recupere um coração para continuar.</p>'+button("recover", "Recuperar vidas", "primary", "heart")+'</section>';
  const order = run.order[q.id];
  let fields;
  if (q.type === "choice") {
    fields = '<fieldset class="options"><legend class="sr-only">Escolha uma resposta</legend>'+order.map((option, i) => {
      const status = feedback && option === q.answer ? " correct" : feedback && run.draft === option ? " wrong" : "";
      return '<label class="option'+status+'"><input type="radio" name="answer" value="'+escapeHtml(option)+'" '+(run.draft === option ? "checked " : "")+(feedback ? "disabled" : "")+'><span class="option-key">'+String.fromCharCode(65 + i)+'</span><span>'+escapeHtml(option)+'</span></label>';
    }).join("")+'</fieldset>';
  } else if (q.type === "fill") {
    fields = '<label class="fill-label" for="fill">Sua resposta</label><input id="fill" name="answer" class="fill" autocomplete="off" value="'+escapeHtml(run.draft)+'" '+(feedback ? "disabled" : "")+'>';
  } else {
    fields = '<div class="matching">'+q.pairs.map(([term], i) => '<label><span>'+term+'</span><select name="pair" data-index="'+i+'" '+(feedback ? "disabled" : "")+'><option value="">Selecione uma opção</option>'+order.map(option => '<option value="'+escapeHtml(option)+'" '+(run.draft?.[i] === option ? "selected" : "")+'>'+escapeHtml(option)+'</option>').join("")+'</select></label>').join("")+'</div>';
  }
  return '<section class="quiz"><div class="quiz-top"><a class="quiet" href="#'+back+'" aria-label="Pausar sessão">'+icon("close")+'</a>'+meter(run.index + Number(Boolean(feedback)), run.ids.length, "Progresso da atividade")+
    '<span>'+(run.index + 1)+' / '+run.ids.length+'</span></div><form id="quiz-form" class="card quiz-card"><p class="eyebrow">'+title+' · '+labels[q.type]+'</p>'+
    '<h1 id="question" tabindex="-1">'+escapeHtml(q.prompt)+'</h1>'+fields+
    (feedback ? '<div class="feedback '+(feedback.correct ? "correct" : "wrong")+'" aria-live="polite"><strong>'+icon(feedback.correct ? "check" : "close")+(feedback.correct ? (run.helped ? "Resposta correta com ajuda" : "Resposta certa! +"+feedback.xp+" XP") : "Vamos revisar o raciocínio")+'</strong>'+
      (feedback.correct ? '<details><summary>Ver resolução</summary>'+showSteps(q)+'</details>' : showSteps(q))+'</div>' : run.helped ? '<div class="help"><strong>Resolução comentada</strong>'+showSteps(q)+'</div>' : "")+
    '<div class="quiz-actions">'+(!feedback && !run.helped ? button("help", "Preciso de ajuda", "quiet", "bulb") : "")+
    (feedback ? button("next", (run.index + 1 === run.ids.length ? "Ver resultado" : "Próxima questão"), "primary", "arrow") : '<button class="button primary" type="submit">Verificar '+icon("check")+'</button>')+'</div>'+
    '<p class="validation" id="validation" role="alert"></p></form></section>';
}

function finishRun(run) {
  const passed = run.mode !== "lesson" || run.right >= Math.ceil(run.ids.length * .6);
  if (run.mode === "lesson" && passed) {
    if (!state.completed[run.unit]) { run.xp += 15; state.xp += 15; }
    state.completed[run.unit] = { best: Math.max(run.right, state.completed[run.unit]?.best ?? 0) };
    if (run.right === run.ids.length) state.perfect = true;
  }
  if (run.mode === "recovery" && run.right >= 3) gainHeart();
  const earned = rewardBadges();
  run.earned.push(...earned);
  run.xp += earned.length * 20;
  const resultTitle = run.mode === "lesson" ? (passed ? "Lição concluída!" : "Mais uma rodada?") : run.mode === "recovery" && run.right >= 3 ? "Coração recuperado!" : "Prática concluída";
  const description = run.mode === "lesson" ?
    (passed ? "Seu avanço na trilha foi salvo." : "Revise os passos e tente a lição de novo para abrir a próxima.") :
    run.mode === "recovery" && run.right < 3 ? "Faça três acertos sem ajuda na mesma rodada para ganhar um coração." : "Seu desempenho foi registrado.";
  run.result = { passed, title: resultTitle, description };
}

function clockText(deadline) {
  const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  return String(Math.floor(seconds / 60)).padStart(2, "0")+":"+String(seconds % 60).padStart(2, "0");
}

function finishExam(expired = false) {
  const run = state.examRun;
  if (!run || run.finished) return;
  run.finished = true;
  run.expired = expired;
  if (run.answers.some(answer => answer.trim())) {
    touchDay();
    state.exams++;
    state.xp += 25;
    run.badges = rewardBadges();
  }
  save();
}

function examView() {
  const run = state.examRun;
  if (run?.finished) {
    const criteria = exam.reduce((total, item) => total + item.steps.length, 0);
    const marked = Object.values(run.marks).filter(Boolean).length;
    return viewHeader("Correção do simulado", (run.expired ? "O tempo terminou. " : "")+"Confira o espelho e marque os passos que você apresentou.")+
      '<section class="card content-card"><p><strong id="exam-score">'+marked+' de '+criteria+'</strong> critérios atendidos · autoavaliação</p>'+
      exam.map((item, i) => '<details class="rubric"><summary>Questão '+(i + 1)+' · '+item.title+'</summary><p>'+item.prompt+'</p><h3>Sua resposta</h3><p class="submitted">'+escapeHtml(run.answers[i].trim() || "Em branco")+'</p><h3>Espelho de correção</h3>'+
        item.steps.map((step, j) => '<label class="criterion"><input type="checkbox" data-mark="'+i+'-'+j+'" '+(run.marks[i+"-"+j] ? "checked" : "")+'>'+escapeHtml(step)+'</label>').join("")+'<p class="source">Fonte · '+item.source+'</p></details>').join("")+
      '<div class="actions">'+button("exam-reset", "Novo simulado", "secondary")+'</div></section>';
  }
  if (!run) return viewHeader("Simulado de prova", "Resolva os cálculos e justifique suas respostas por escrito.")+
    '<section class="card mode-card exam-intro"><span class="mini-symbol green">'+icon("clock")+'</span><h2>Segunda avaliação</h2><p>5 questões discursivas · 100 minutos. Os enunciados foram adaptados das listas e da estrutura da 1ª avaliação.</p><p>As respostas são salvas enquanto você escreve. O espelho abre na entrega ou quando o tempo se esgota.</p>'+
    button("exam-start", "Iniciar simulado", "primary", "arrow")+'</section>';
  return viewHeader("Simulado de prova", "Os rascunhos ficam salvos neste navegador.")+
    '<div class="exam-toolbar"><span class="timer">'+icon("clock")+'<strong id="exam-clock" role="timer">'+clockText(run.deadline)+'</strong></span><span>'+run.answers.filter(answer => answer.trim()).length+' / '+exam.length+' respondidas</span>'+button("exam-finish", "Entregar", "primary", "check")+'</div>'+
    exam.map((item, i) => '<section class="card content-card exam-item"><p class="eyebrow">Questão '+(i + 1)+'</p><h2>'+item.title+'</h2><p>'+item.prompt+'</p><label class="fill-label" for="exam-'+i+'">Sua resposta</label><textarea id="exam-'+i+'" data-exam="'+i+'" rows="5" placeholder="Desenvolva o cálculo ou a justificativa">'+escapeHtml(run.answers[i])+'</textarea></section>').join("");
}

function render(focus = false, target = "#main") {
  refreshHearts();
  if (state.examRun && !state.examRun.finished && Date.now() >= state.examRun.deadline) finishExam(true);
  const [page, key] = route();
  const views = { trilhas: trackView, revisao: reviewView, progresso: progressView, simulado: examView, sessao: quizView };
  const unit = page === "licao" ? unitById[key] : null;
  const active = page === "sessao" ? (state.run?.mode === "lesson" ? "trilhas" : "revisao") : menu.some(([id]) => id === page) ? page : "trilhas";
  root.innerHTML = shell(unit && available(unit) ? unitView(unit) : (views[page] ?? trackView)(), active);
  if (focus) {
    window.scrollTo(0, 0);
    (document.querySelector(target) ?? document.querySelector("#main")).focus({ preventScroll: true });
  }
}

root.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, key } = target.dataset;
  const run = state.run;
  const unit = unitById[key];
  switch (action) {
    case "home": go("trilhas"); break;
    case "lives": livesDialog(); break;
    case "resume": go("sessao"); break;
    case "sound":
      state.sound = !state.sound;
      target.setAttribute("aria-pressed", state.sound);
      target.innerHTML = icon(state.sound ? "volume" : "mute");
      save();
      if (state.sound) chime(true);
      break;
    case "track":
      state.track = key;
      save();
      render();
      document.querySelector('[data-action="track"][data-key="'+key+'"]')?.focus();
      break;
    case "open-unit":
      if (unit && available(unit)) go("licao/"+key);
      break;
    case "lesson":
      if (unit && available(unit)) {
        if (run?.unit === key && !run.result) go("sessao");
        else newRun("lesson", questionGroups[key], key);
      }
      break;
    case "random": newRun("random", mixed(8)); break;
    case "review": {
      const due = reviewPool();
      newRun("review", (due.length ? due : weakPool()).slice(0, 8));
      break;
    }
    case "recover":
      document.querySelector("#lives")?.close();
      if (run?.mode === "recovery" && !run.result) go("sessao");
      else if (state.hearts < maxHearts) newRun("recovery", mixed(4));
      break;
    case "return":
      if (state.paused && state.hearts) {
        state.run = state.paused;
        state.paused = null;
        save();
        go("sessao");
      }
      break;
    case "help":
      if (!run || run.feedback) break;
      run.helped = true;
      save();
      render();
      document.querySelector('#quiz-form button[type="submit"]')?.focus();
      break;
    case "next":
      if (!run?.feedback) break;
      if (run.index + 1 >= run.ids.length) finishRun(run);
      else {
        run.index++;
        run.feedback = null;
        run.draft = null;
        run.helped = false;
      }
      save();
      render(true, "#question");
      break;
    case "exam-start":
      if (state.examRun) break;
      state.examRun = { deadline: Date.now() + examTime, answers: exam.map(() => ""), marks: {}, finished: false };
      save();
      render(true);
      break;
    case "exam-finish":
      if (window.confirm("Entregar o simulado e abrir a correção?")) {
        finishExam();
        render(true);
      }
      break;
    case "exam-reset":
      if (window.confirm("Abrir um novo simulado? Os rascunhos e a autoavaliação desta tentativa serão substituídos.")) {
        state.examRun = null;
        save();
        render(true);
      }
      break;
  }
});

root.addEventListener("input", event => {
  const el = event.target;
  if (el.matches("[data-exam]") && state.examRun && !state.examRun.finished) {
    state.examRun.answers[Number(el.dataset.exam)] = el.value;
    const answered = document.querySelector(".exam-toolbar > span:nth-child(2)");
    if (answered) answered.textContent = state.examRun.answers.filter(answer => answer.trim()).length+" / "+exam.length+" respondidas";
    save();
    return;
  }
  if (!state.run || state.run.feedback || !el.closest("#quiz-form")) return;
  if (el.name === "answer") state.run.draft = el.value;
  if (el.name === "pair") {
    state.run.draft ??= [];
    state.run.draft[Number(el.dataset.index)] = el.value;
  }
  save();
});

root.addEventListener("change", event => {
  const el = event.target;
  if (!el.matches("[data-mark]") || !state.examRun?.finished) return;
  state.examRun.marks[el.dataset.mark] = el.checked;
  document.querySelector("#exam-score").textContent = Object.values(state.examRun.marks).filter(Boolean).length+" de "+exam.reduce((sum, item) => sum + item.steps.length, 0);
  save();
});

root.addEventListener("submit", event => {
  if (event.target.id !== "quiz-form") return;
  event.preventDefault();
  const run = state.run;
  if (!run || run.feedback) return;
  if (!state.hearts && run.mode !== "recovery") { livesDialog(); return; }
  const q = questionById[run.ids[run.index]];
  const draft = run.draft;
  if (q.type === "match" ? !q.pairs.every((_, i) => draft?.[i]) : !draft?.trim()) {
    document.querySelector("#validation").textContent = "Preencha a resposta para verificar.";
    return;
  }
  const correct = grade(q, draft);
  const independent = correct && !run.helped;
  const xp = independent ? 10 : 0;
  if (independent) run.right++;
  if (!correct && run.mode !== "recovery") loseHeart();
  state.xp += xp;
  run.xp += xp;
  touchDay();
  record(q, correct, run.helped);
  const earned = rewardBadges();
  run.earned.push(...earned);
  run.xp += earned.length * 20;
  run.feedback = { correct, xp };
  save();
  chime(correct);
  render();
  const result = document.querySelector(".feedback");
  result.tabIndex = -1;
  result.focus();
});

window.addEventListener("hashchange", () => render(true));
setInterval(() => {
  const clock = document.querySelector("#exam-clock");
  const run = state.examRun;
  if (run && !run.finished && Date.now() >= run.deadline) {
    finishExam(true);
    if (clock) render(true);
  } else if (clock) clock.textContent = clockText(run.deadline);
  const refill = document.querySelector("#refill-clock");
  if (refreshHearts()) {
    const life = document.querySelector(".counter.life");
    life?.setAttribute("aria-label", state.hearts+" de "+maxHearts+" corações");
    if (life) life.querySelector("b").textContent = state.hearts;
    if (refill) livesDialog();
    if (state.hearts === 1 && route()[0] === "sessao" && !document.querySelector("#quiz-form") && !refill) render();
  } else if (refill) refill.textContent = clockText(state.refillAt);
}, 1000);

save();
render();
