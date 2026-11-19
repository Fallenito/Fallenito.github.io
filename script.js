const STORAGE_KEY = "survie_chaine_fever_v13";

const DEFAULT_CHAIN_KEYS = ["Q", "S", "D"];
const DEFAULT_NORMAL_KEYS = ["A", "E", "R"];

const VISUAL_EVENTS = [
  { id: "vis-fog", label: "🌫️ ÉVÉNEMENT VISUEL : BROUILLARD !" },
  { id: "vis-spotlight", label: "🔦 ÉVÉNEMENT VISUEL : SPOT SOMBRE !" },
  { id: "vis-tilt", label: "🌀 ÉVÉNEMENT VISUEL : ARÈNE EN MOUVEMENT !" }
];

const TRACKS = [
  // 5 FACILE
  { id: "lagon-calme", name: "Lagon Calme", diff: "facile", bpm: 82, vibe: "Chill • Cyan & Menthe", notes: [220, 261.6, 329.6, 293.7], wave: "sine", theme: { bg: "#06151c", bgTop: "#0e313d", panel: "#0c222d", accent: "#22d3ee", accent2: "#6ee7b7", glow: "rgba(34,211,238,0.35)" } },
  { id: "brise-soir", name: "Brise du Soir", diff: "facile", bpm: 88, vibe: "Doux • Lavande & Rose", notes: [246.9, 293.7, 370, 329.6], wave: "sine", theme: { bg: "#140d21", bgTop: "#2b1b47", panel: "#1f1433", accent: "#c084fc", accent2: "#f9a8d4", glow: "rgba(192,132,252,0.35)" } },
  { id: "maree-basse", name: "Marée Basse", diff: "facile", bpm: 92, vibe: "Posé • Turquoise & Sable", notes: [196, 246.9, 293.7, 329.6], wave: "triangle", theme: { bg: "#071917", bgTop: "#103833", panel: "#0d2825", accent: "#2dd4bf", accent2: "#fde68a", glow: "rgba(45,212,191,0.35)" } },
  { id: "balade-nocturne", name: "Balade Nocturne", diff: "facile", bpm: 96, vibe: "Lo-Fi • Indigo & Bleu", notes: [220, 246.9, 329.6, 392], wave: "sine", theme: { bg: "#090d24", bgTop: "#172052", panel: "#11173b", accent: "#818cf8", accent2: "#93c5fd", glow: "rgba(129,140,248,0.35)" } },
  { id: "horizon-doux", name: "Horizon Doux", diff: "facile", bpm: 100, vibe: "Solaire • Émeraude & Or", notes: [261.6, 329.6, 392, 440], wave: "triangle", theme: { bg: "#071a12", bgTop: "#113b29", panel: "#0d2b1e", accent: "#34d399", accent2: "#fde047", glow: "rgba(52,211,153,0.35)" } },

  // 5 MOYEN
  { id: "pulse-urbain", name: "Pulse Urbain", diff: "moyen", bpm: 112, vibe: "Électro • Bleu & Corail", notes: [220, 329.6, 293.7, 392], wave: "triangle", theme: { bg: "#081226", bgTop: "#142c5c", panel: "#0f1e3d", accent: "#38bdf8", accent2: "#fb7185", glow: "rgba(56,189,248,0.4)" } },
  { id: "neon-drive", name: "Néon Drive", diff: "moyen", bpm: 118, vibe: "Synthwave • Magenta & Cyan", notes: [246.9, 370, 329.6, 440], wave: "sawtooth", theme: { bg: "#190824", bgTop: "#3d1259", panel: "#280d3b", accent: "#f472b6", accent2: "#22d3ee", glow: "rgba(244,114,182,0.42)" } },
  { id: "rythme-tropical", name: "Rythme Tropical", diff: "moyen", bpm: 122, vibe: "Groove • Orange & Lime", notes: [261.6, 329.6, 392, 523.2], wave: "triangle", theme: { bg: "#1c1106", bgTop: "#472a0d", panel: "#2e1b09", accent: "#fb923c", accent2: "#a3e635", glow: "rgba(251,146,60,0.4)" } },
  { id: "metro-minuit", name: "Métro Minuit", diff: "moyen", bpm: 126, vibe: "Basse • Rubis & Nuit", notes: [196, 293.7, 261.6, 349.2], wave: "sawtooth", theme: { bg: "#170914", bgTop: "#3b1331", panel: "#260c20", accent: "#fb7185", accent2: "#60a5fa", glow: "rgba(251,113,133,0.4)" } },
  { id: "energie-pure", name: "Énergie Pure", diff: "moyen", bpm: 130, vibe: "House • Or & Violet", notes: [293.7, 370, 440, 587.3], wave: "triangle", theme: { bg: "#160e26", bgTop: "#36205e", panel: "#23153d", accent: "#facc15", accent2: "#c084fc", glow: "rgba(250,204,21,0.4)" } },

  // 5 DIFFICILE
  { id: "tension-rouge", name: "Tension Rouge", diff: "difficile", bpm: 142, vibe: "Nerveux • Rouge & Charbon", notes: [220, 233.1, 329.6, 311.1], wave: "sawtooth", theme: { bg: "#1c0709", bgTop: "#471016", panel: "#2b0b0e", accent: "#f87171", accent2: "#fca5a5", glow: "rgba(248,113,113,0.45)" } },
  { id: "circuit-surchauffe", name: "Circuit Surchauffé", diff: "difficile", bpm: 148, vibe: "Serré • Orange & Cyan", notes: [261.6, 311.1, 392, 466.2], wave: "square", theme: { bg: "#1c0e06", bgTop: "#4a230d", panel: "#2e1609", accent: "#fb923c", accent2: "#22d3ee", glow: "rgba(251,146,60,0.45)" } },
  { id: "cyber-assaut", name: "Cyber Assaut", diff: "difficile", bpm: 154, vibe: "Break • Vert Acide & Sombre", notes: [196, 261.6, 311.1, 392], wave: "sawtooth", theme: { bg: "#09170a", bgTop: "#163b19", panel: "#0f2611", accent: "#a3e635", accent2: "#4ade80", glow: "rgba(163,230,53,0.45)" } },
  { id: "eclipse-rythmique", name: "Éclipse Rythmique", diff: "difficile", bpm: 160, vibe: "Rapide • Rose Néon & Acier", notes: [246.9, 329.6, 370, 493.9], wave: "square", theme: { bg: "#18091b", bgTop: "#3d1545", panel: "#260e2b", accent: "#f43f5e", accent2: "#38bdf8", glow: "rgba(244,63,94,0.48)" } },
  { id: "ligne-crete", name: "Ligne de Crête", diff: "difficile", bpm: 165, vibe: "Intense • Ambre & Sang", notes: [220, 293.7, 349.2, 440], wave: "sawtooth", theme: { bg: "#1c0a06", bgTop: "#4a190e", panel: "#2e1009", accent: "#fbbf24", accent2: "#f87171", glow: "rgba(251,191,36,0.48)" } },

  // 5 EXTRÊME
  { id: "overdrive-absolu", name: "Overdrive Absolu", diff: "extreme", bpm: 174, vibe: "DnB • Violet Laser & Blanc", notes: [293.7, 349.2, 440, 587.3], wave: "sawtooth", theme: { bg: "#130724", bgTop: "#331163", panel: "#1f0b3b", accent: "#c084fc", accent2: "#ffffff", glow: "rgba(192,132,252,0.55)" } },
  { id: "tempete-binaire", name: "Tempête Binaire", diff: "extreme", bpm: 180, vibe: "Techno • Cramoisi & Glace", notes: [261.6, 392, 523.2, 311.1], wave: "square", theme: { bg: "#1a060d", bgTop: "#470f23", panel: "#2b0915", accent: "#fb7185", accent2: "#67e8f9", glow: "rgba(251,113,133,0.55)" } },
  { id: "zero-pitie", name: "Zéro Pitié", diff: "extreme", bpm: 186, vibe: "Rafale • Or Feu & Pourpre", notes: [329.6, 440, 493.9, 659.3], wave: "sawtooth", theme: { bg: "#1c0b07", bgTop: "#4f1d11", panel: "#30120b", accent: "#facc15", accent2: "#fb923c", glow: "rgba(250,204,21,0.55)" } },
  { id: "singularite", name: "Singularité", diff: "extreme", bpm: 192, vibe: "Glitch • Toxique & Magenta", notes: [233.1, 349.2, 466.2, 622.3], wave: "square", theme: { bg: "#091712", bgTop: "#163d30", panel: "#0e261e", accent: "#4ade80", accent2: "#f472b6", glow: "rgba(74,222,128,0.55)" } },
  { id: "apocalypse-bpm", name: "Apocalypse BPM", diff: "extreme", bpm: 200, vibe: "Ultime • Magma & Blanc Pur", notes: [293.7, 440, 587.3, 698.5], wave: "sawtooth", theme: { bg: "#1f0505", bgTop: "#590d0d", panel: "#360808", accent: "#ef4444", accent2: "#ffffff", glow: "rgba(239,68,68,0.6)" } }
];

const DIFF_FACTOR = {
  facile: { lifeMult: 1.25, trapBase: 0.08, moveBase: 0.08, scoreMult: 1 },
  moyen: { lifeMult: 1.0, trapBase: 0.16, moveBase: 0.22, scoreMult: 1.3 },
  difficile: { lifeMult: 0.84, trapBase: 0.24, moveBase: 0.36, scoreMult: 1.7 },
  extreme: { lifeMult: 0.72, trapBase: 0.32, moveBase: 0.5, scoreMult: 2.2 }
};

const ACHIEVEMENTS_DEF = [
  { id: "untouchable", label: "🛡️ Intouchable (Palier 4 sans dégâts)" },
  { id: "coldblood", label: "❄️ Sang-froid (10 sauvetages <30% temps)" },
  { id: "overcharged", label: "⚡ Survolté (Combo x4 atteint)" },
  { id: "fever_master", label: "🔥 Enflammé (Mode FEVER activé)" },
  { id: "extreme_survivor", label: "💀 Survivant Extrême (Palier 3 en Extrême)" },
  { id: "veteran", label: "🔥 Accro (10 parties jouées)" }
];

const MUTATORS = [
  { id: "standard", name: "Standard" },
  { id: "drift", name: "Dérive gravitationnelle" },
  { id: "frenzy", name: "Frénésie (Points x2)" },
  { id: "chaos", name: "Cibles instables" }
];

const arena = document.getElementById("arena");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayDesc = document.getElementById("overlayDesc");
const startBtn = document.getElementById("startBtn");
const keysBtn = document.getElementById("keysBtn");
const soundBtn = document.getElementById("soundBtn");
const keybindPanel = document.getElementById("keybindPanel");
const chainKeySlotsEl = document.getElementById("chainKeySlots");
const normalKeySlotsEl = document.getElementById("normalKeySlots");
const resetKeysBtn = document.getElementById("resetKeysBtn");
const keybindHint = document.getElementById("keybindHint");
const activeTrackEl = document.getElementById("activeTrackEl");
const mutatorEl = document.getElementById("mutatorEl");
const scoreEl = document.getElementById("scoreEl");
const comboEl = document.getElementById("comboEl");
const tierEl = document.getElementById("tierEl");
const shieldsEl = document.getElementById("shieldsEl");
const bestEl = document.getElementById("bestEl");
const feverBarWrap = document.querySelector(".fever-bar-wrap");
const feverLabel = document.getElementById("feverLabel");
const feverFill = document.getElementById("feverFill");
const shrinkStatus = document.getElementById("shrinkStatus");
const metaEl = document.getElementById("metaEl");
const achievementsEl = document.getElementById("achievementsEl");
const diffTabs = document.getElementById("diffTabs");
const trackGrid = document.getElementById("trackGrid");

const chainSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
chainSvg.setAttribute("class", "chain-links-svg");
arena.insertBefore(chainSvg, arena.firstChild);

const fogLayer = document.createElement("div");
fogLayer.className = "fog-layer";
arena.insertBefore(fogLayer, overlay);

const spotlightLayer = document.createElement("div");
spotlightLayer.className = "spotlight-layer";
arena.insertBefore(spotlightLayer, overlay);

const visualEventBanner = document.createElement("div");
visualEventBanner.className = "visual-event-banner";
arena.insertBefore(visualEventBanner, overlay);

let stats = loadStats();
let chainKeys = [...stats.chainKeys];
let normalKeys = [...stats.normalKeys];
let listeningTarget = null;

let selectedDiff = "facile";
let selectedTrack = TRACKS[0];
let soundEnabled = true;
let audioCtx = null;

let running = false;
let replayLockUntil = 0;
let replayCountdownInterval = null;
let score = 0;
let combo = 0;
let lastEnduranceMilestone = 0;
let tier = 1;
let hitsInTier = 0;
let shields = 2;
let maxShields = 3;
let tookDamageThisRun = false;
let clutchHits = 0;
let feverCharge = 0;
let feverActive = false;
let feverTimeout = null;
let shrinkUntil = 0;
let magnetUntil = 0;
let visualEventTimeout = null;
let lastVisualEventBeat = -24;
let visualEventIdx = 0;
let timeScale = 1;
let slowmoTimeout = null;
let beatTimeout = null;
let beatStep = 0;
let activeMutator = MUTATORS[0];
let activeNodes = [];
let lastSpawnAnchor = null;
let chainCounter = 0;

function clearReplayLock() {
  replayLockUntil = 0;
  clearInterval(replayCountdownInterval);
  replayCountdownInterval = null;
  startBtn.disabled = false;
}

function startReplayCooldown(seconds = 3, baseLabel = "Rejouer ou changer de piste") {
  clearReplayLock();
  replayLockUntil = performance.now() + seconds * 1000;
  startBtn.disabled = true;

  function updateCountdownLabel() {
    const remMs = replayLockUntil - performance.now();
    if (remMs <= 0) {
      clearReplayLock();
      startBtn.textContent = baseLabel;
      return;
    }
    const remSec = Math.ceil(remMs / 1000);
    startBtn.textContent = `${baseLabel} (${remSec}s)...`;
  }

  updateCountdownLabel();
  replayCountdownInterval = setInterval(updateCountdownLabel, 150);
}

function clearVisualEvent() {
  clearTimeout(visualEventTimeout);
  visualEventTimeout = null;
  VISUAL_EVENTS.forEach((ev) => arena.classList.remove(ev.id));
  visualEventBanner.classList.remove("active");
  visualEventBanner.textContent = "";
}

function triggerVisualEvent() {
  if (!running) return;
  clearVisualEvent();

  const ev = VISUAL_EVENTS[visualEventIdx % VISUAL_EVENTS.length];
  visualEventIdx += 1;

  arena.classList.add(ev.id);
  visualEventBanner.textContent = ev.label;
  visualEventBanner.classList.add("active");

  visualEventTimeout = setTimeout(() => {
    clearVisualEvent();
  }, 3500);
}

function hasAnyDuplicateKeys(cKeys, nKeys) {
  const all = [...cKeys, ...nKeys];
  return new Set(all).size !== all.length;
}

function loadStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const loadedChain = Array.isArray(saved?.chainKeys) && saved.chainKeys.length === 3
      ? saved.chainKeys
      : [...DEFAULT_CHAIN_KEYS];
    const loadedNormal = Array.isArray(saved?.normalKeys) && saved.normalKeys.length === 3
      ? saved.normalKeys
      : [...DEFAULT_NORMAL_KEYS];

    const validKeys = hasAnyDuplicateKeys(loadedChain, loadedNormal)
      ? { chain: [...DEFAULT_CHAIN_KEYS], normal: [...DEFAULT_NORMAL_KEYS] }
      : { chain: loadedChain, normal: loadedNormal };

    return {
      globalBest: saved?.globalBest ?? 0,
      trackBests: saved?.trackBests ?? {},
      gamesPlayed: saved?.gamesPlayed ?? 0,
      unlocked: saved?.unlocked ?? [],
      chainKeys: validKeys.chain,
      normalKeys: validKeys.normal
    };
  } catch {
    return {
      globalBest: 0,
      trackBests: {},
      gamesPlayed: 0,
      unlocked: [],
      chainKeys: [...DEFAULT_CHAIN_KEYS],
      normalKeys: [...DEFAULT_NORMAL_KEYS]
    };
  }
}

function saveStats() {
  stats.chainKeys = [...chainKeys];
  stats.normalKeys = [...normalKeys];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function formatKeyEvent(e) {
  if (e.code === "Space") return "SPACE";
  return e.key.toUpperCase();
}

function isKeyUsedElsewhere(candidateKey, targetPool, targetIndex) {
  for (let i = 0; i < chainKeys.length; i++) {
    if (targetPool === "chain" && i === targetIndex) continue;
    if (chainKeys[i] === candidateKey) return true;
  }
  for (let i = 0; i < normalKeys.length; i++) {
    if (targetPool === "normal" && i === targetIndex) continue;
    if (normalKeys[i] === candidateKey) return true;
  }
  return false;
}

function renderKeybindSlots() {
  chainKeySlotsEl.innerHTML = chainKeys
    .map((k, idx) => {
      const isListening = listeningTarget?.pool === "chain" && listeningTarget?.index === idx;
      return `
        <button type="button" class="key-slot-btn ${isListening ? "listening" : ""}" data-pool="chain" data-index="${idx}">
          #${idx + 1} : ${isListening ? "..." : k}
        </button>
      `;
    })
    .join("");

  normalKeySlotsEl.innerHTML = normalKeys
    .map((k, idx) => {
      const isListening = listeningTarget?.pool === "normal" && listeningTarget?.index === idx;
      return `
        <button type="button" class="key-slot-btn ${isListening ? "listening" : ""}" data-pool="normal" data-index="${idx}">
          T${idx + 1} : ${isListening ? "..." : k}
        </button>
      `;
    })
    .join("");

  keybindPanel.querySelectorAll(".key-slot-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pool = btn.dataset.pool;
      const index = Number(btn.dataset.index);
      listeningTarget = { pool, index };
      const label = pool === "chain" ? `Chaîne #${index + 1}` : `Cible T${index + 1}`;
      keybindHint.textContent = `Appuie sur une touche libre pour "${label}" (Échap pour annuler).`;
      renderKeybindSlots();
    });
  });
}

function applyTheme(track) {
  const r = document.documentElement.style;
  r.setProperty("--bg", track.theme.bg);
  r.setProperty("--bg-top", track.theme.bgTop);
  r.setProperty("--panel", track.theme.panel);
  r.setProperty("--accent", track.theme.accent);
  r.setProperty("--accent-2", track.theme.accent2);
  r.setProperty("--glow", track.theme.glow);
  activeTrackEl.textContent = `🎵 ${track.name} • ${track.bpm} BPM`;
  refreshHud();
}

function renderTrackSelector() {
  document.querySelectorAll(".diff-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.diff === selectedDiff);
  });

  const filtered = TRACKS.filter((t) => t.diff === selectedDiff);
  trackGrid.innerHTML = filtered
    .map((track) => {
      const best = stats.trackBests[track.id] ?? 0;
      const isSelected = track.id === selectedTrack.id;
      return `
        <button type="button" class="track-card ${isSelected ? "selected" : ""}" data-track="${track.id}">
          <div class="track-title">${track.name}</div>
          <div class="track-bpm">${track.bpm} BPM</div>
          <div class="track-vibe">${track.vibe}</div>
          <div class="track-best">Record : ${best}</div>
        </button>
      `;
    })
    .join("");

  trackGrid.querySelectorAll(".track-card").forEach((card) => {
    card.addEventListener("click", () => {
      const found = TRACKS.find((t) => t.id === card.dataset.track);
      if (!found) return;
      selectedTrack = found;
      applyTheme(selectedTrack);
      renderTrackSelector();
      playTone(selectedTrack.notes[0], 0.1, selectedTrack.wave, 0.12);
    });
  });
}

function unlockAchievement(id) {
  if (stats.unlocked.includes(id)) return;
  stats.unlocked.push(id);
  saveStats();
  const def = ACHIEVEMENTS_DEF.find((a) => a.id === id);
  if (def && running) {
    spawnFloatingText(arena.clientWidth / 2, 78, `SUCCÈS : ${def.label}`, "#facc15");
  }
}

function renderAchievements() {
  achievementsEl.innerHTML = ACHIEVEMENTS_DEF.map((ach) => {
    const isUnlocked = stats.unlocked.includes(ach.id);
    return `<span class="ach-badge ${isUnlocked ? "unlocked" : ""}">${isUnlocked ? "✓ " : "🔒 "}${ach.label}</span>`;
  }).join("");
}

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playTone(freq, duration = 0.08, type = "sine", volume = 0.12) {
  if (!soundEnabled) return;
  ensureAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(volume, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playBeatSound(step) {
  if (!soundEnabled) return;
  ensureAudio();
  const now = audioCtx.currentTime;

  if (step % 2 === 0) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(135, now);
    osc.frequency.exponentialRampToValueAtTime(42, now + 0.11);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  const noteFreq = selectedTrack.notes[step % selectedTrack.notes.length];
  playTone(noteFreq, 0.09, selectedTrack.wave, step % 2 === 0 ? 0.07 : 0.09);
}

function activateFever() {
  feverActive = true;
  feverCharge = 100;
  arena.classList.add("fever-mode");
  feverBarWrap.classList.add("fever-active");
  unlockAchievement("fever_master");
  playTone(784, 0.22, "triangle", 0.16);
  spawnFloatingText(arena.clientWidth / 2, 62, "🔥 MODE FEVER ACTIVÉ !", "#fb923c");
  refreshHud();

  clearTimeout(feverTimeout);
  feverTimeout = setTimeout(() => {
    feverActive = false;
    feverCharge = 0;
    arena.classList.remove("fever-mode");
    feverBarWrap.classList.remove("fever-active");
    refreshHud();
  }, 4000);
}

function addFever(amount) {
  if (feverActive) return;
  feverCharge = Math.min(100, feverCharge + amount);
  if (feverCharge >= 100) {
    activateFever();
  } else {
    refreshHud();
  }
}

function checkEnduranceComboReward(x, y) {
  const milestone = Math.floor(combo / 15);
  if (milestone > lastEnduranceMilestone && combo > 0) {
    lastEnduranceMilestone = milestone;
    if (shields < maxShields) {
      shields += 1;
      playTone(698.5, 0.18, "triangle", 0.15);
      spawnFloatingText(x, y - 34, `🛡️ ENDURANCE (${combo} COMBO) : +1 BOUCLIER !`, "#34d399");
    } else {
      addFever(25);
      score += 50;
      playTone(698.5, 0.18, "triangle", 0.15);
      spawnFloatingText(x, y - 34, `🔥 ENDURANCE (${combo} COMBO) : +25% FEVER & +50 !`, "#fb923c");
    }
  }
}

function refreshHud() {
  scoreEl.textContent = score;
  const mult = 1 + Math.floor(combo / 5);
  comboEl.textContent = `${combo} (x${mult})`;
  tierEl.textContent = tier;
  shieldsEl.textContent = shields > 0 ? "🛡️".repeat(shields) : "💔";
  bestEl.textContent = stats.trackBests[selectedTrack.id] ?? 0;
  mutatorEl.textContent = `Mode : ${activeMutator.name}`;
  metaEl.textContent = `Parties jouées : ${stats.gamesPlayed} • Record global : ${stats.globalBest}`;

  feverFill.style.width = `${feverCharge}%`;
  feverLabel.textContent = feverActive
    ? "🔥 FEVER ACTIF (Points x1.5 + Expiration safe !)"
    : `🔥 FEVER : ${Math.round(feverCharge)}%`;

  const now = performance.now();
  const isShrunk = now < shrinkUntil;
  const isMagnet = now < magnetUntil;
  if (isMagnet && isShrunk) {
    shrinkStatus.textContent = "🧲 AIMANT ACTIF • 💥 ONDE DE CHOC";
  } else if (isMagnet) {
    shrinkStatus.textContent = "🧲 AIMANT ACTIF : Cibles regroupées !";
  } else if (isShrunk) {
    shrinkStatus.textContent = "💥 ONDE DE CHOC : Cibles réduites !";
  } else {
    shrinkStatus.textContent = "";
  }

  renderAchievements();
}

function updateChainVisuals() {
  const chains = new Map();
  activeNodes.forEach((n) => {
    if (!n.chainId) return;
    if (!chains.has(n.chainId)) chains.set(n.chainId, []);
    chains.get(n.chainId).push(n);
  });

  let linesHtml = "";
  chains.forEach((group) => {
    const sorted = [...group].sort((a, b) => a.chainStep - b.chainStep);
    const minStep = sorted.length > 0 ? Math.min(...sorted.map((item) => item.chainStep)) : null;

    sorted.forEach((item) => {
      const isNext = item.chainStep === minStep;
      item.el.classList.toggle("chain-locked", !isNext);
    });

    for (let i = 0; i < sorted.length - 1; i++) {
      const a = sorted[i];
      const b = sorted[i + 1];
      linesHtml += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="rgba(250, 204, 21, 0.55)" stroke-width="2.5" stroke-dasharray="6 5" />`;
    }
  });

  chainSvg.innerHTML = linesHtml;
}

function spawnFloatingText(x, y, text, color) {
  const el = document.createElement("div");
  el.className = "floating-text";
  el.textContent = text;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.color = color;
  arena.appendChild(el);
  setTimeout(() => el.remove(), 750);
}

function clearNodes() {
  activeNodes.forEach((n) => {
    cancelAnimationFrame(n.raf);
    n.el.remove();
  });
  activeNodes = [];
  chainSvg.innerHTML = "";
  lastSpawnAnchor = null;
  lastEnduranceMilestone = 0;
  clearTimeout(beatTimeout);
  clearTimeout(slowmoTimeout);
  clearTimeout(feverTimeout);
  clearVisualEvent();
  feverActive = false;
  feverCharge = 0;
  shrinkUntil = 0;
  magnetUntil = 0;
  timeScale = 1;
  arena.classList.remove("slowmo", "beat-pulse", "fever-mode", "magnet-active");
  feverBarWrap.classList.remove("fever-active");
}

function triggerSlowMo(durationMs = 1100, scale = 0.42) {
  timeScale = scale;
  arena.classList.add("slowmo");
  clearTimeout(slowmoTimeout);
  slowmoTimeout = setTimeout(() => {
    timeScale = 1;
    arena.classList.remove("slowmo");
  }, durationMs);
}

function activateHourglassBonus(x, y) {
  triggerSlowMo(3000, 0.52);
  playTone(587.3, 0.2, "sine", 0.16);
  spawnFloatingText(x, y - 24, "⏳ SABLIER : RALENTISSEMENT 3s !", "#e9d5ff");
}

function activateMagnetBonus(x, y) {
  magnetUntil = performance.now() + 3000;
  arena.classList.add("magnet-active");
  playTone(440, 0.18, "triangle", 0.16);
  spawnFloatingText(x, y - 24, "🧲 AIMANT : CIBLES REGROUPÉES 3s !", "#93c5fd");
  refreshHud();
  setTimeout(() => {
    if (performance.now() >= magnetUntil) {
      arena.classList.remove("magnet-active");
      refreshHud();
    }
  }, 3050);
}

function handleDamage(reason, x, y, options = {}) {
  const { isShockTrap = false, isExpired = false } = options;

  if (isExpired && feverActive) {
    spawnFloatingText(x, y, "FEVER : EXPIRATION IGNORÉE", "#fb923c");
    return;
  }

  tookDamageThisRun = true;
  combo = 0;
  lastEnduranceMilestone = 0;
  if (!feverActive) {
    feverCharge = Math.max(0, feverCharge - 20);
  }

  if (isShockTrap) {
    shrinkUntil = performance.now() + 3000;
    spawnFloatingText(x, y - 22, "💥 ONDE DE CHOC !", "#fdba74");
  }

  arena.classList.remove("shake");
  void arena.offsetWidth;
  arena.classList.add("shake");

  if (shields > 0) {
    shields -= 1;
    playTone(150, 0.22, "sawtooth", 0.16);
    spawnFloatingText(x, y, "BOUCLIER BRISÉ !", "#c084fc");
    triggerSlowMo();
    refreshHud();
    return;
  }

  playTone(95, 0.35, "sawtooth", 0.2);
  endGame(reason);
}

function getBeatMs() {
  return 60000 / selectedTrack.bpm;
}

function getDifficultyParams() {
  const beatMs = getBeatMs();
  const cfg = DIFF_FACTOR[selectedTrack.diff];

  const beatsToReact = Math.max(2.1, 3.6 - (tier - 1) * 0.22) * cfg.lifeMult;
  let lifetime = beatMs * beatsToReact;
  if (activeMutator.id === "frenzy") lifetime *= 0.82;

  const trapChance = tier < 2 && selectedTrack.diff === "facile"
    ? 0
    : Math.min(0.42, cfg.trapBase + (tier - 1) * 0.035);
  const movingChance = Math.min(0.65, cfg.moveBase + (tier - 1) * 0.05);
  const goldChance = 0.1;
  const hourglassChance = 0.07;
  const magnetChance = 0.07;
  const keyChance = selectedTrack.diff === "facile" ? 0.15 : 0.35;

  return {
    lifetime,
    trapChance,
    movingChance,
    goldChance,
    hourglassChance,
    magnetChance,
    keyChance,
    scoreMult: cfg.scoreMult
  };
}

function pickMutatorForTier(newTier) {
  if (newTier < 3) {
    activeMutator = MUTATORS[0];
    return;
  }
  const pool = MUTATORS.slice(1);
  activeMutator = pool[(newTier - 3) % pool.length];
}

function getNodeRadius(isShrunk) {
  return (isShrunk ? 50 : 68) / 2;
}

function clampToArena(cx, cy, pad, maxX, maxY) {
  return {
    x: Math.max(pad, Math.min(maxX, cx)),
    y: Math.max(pad, Math.min(maxY, cy))
  };
}

function isPositionFree(cx, cy, radius, margin) {
  return !activeNodes.some((other) => Math.hypot(cx - other.x, cy - other.y) < radius + other.radius + margin);
}

function findMidDistancePosition(radius, margin = 22) {
  const pad = Math.max(62, radius + 28);
  const maxX = Math.max(pad + 10, arena.clientWidth - pad);
  const maxY = Math.max(pad + 10, arena.clientHeight - pad);

  const anchor = lastSpawnAnchor || {
    x: (pad + maxX) / 2,
    y: (pad + maxY) / 2
  };

  const minMidDist = Math.max(radius * 2 + margin + 35, 115);
  const maxMidDist = 235;

  for (let attempt = 0; attempt < 70; attempt++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = minMidDist + Math.random() * (maxMidDist - minMidDist);
    const rawX = anchor.x + Math.cos(angle) * dist;
    const rawY = anchor.y + Math.sin(angle) * dist;
    const clamped = clampToArena(rawX, rawY, pad, maxX, maxY);

    const actualDist = Math.hypot(clamped.x - anchor.x, clamped.y - anchor.y);
    if (actualDist >= minMidDist * 0.75 && isPositionFree(clamped.x, clamped.y, radius, margin)) {
      return clamped;
    }
  }

  for (let attempt = 0; attempt < 60; attempt++) {
    const cx = pad + Math.random() * (maxX - pad);
    const cy = pad + Math.random() * (maxY - pad);
    const distFromAnchor = Math.hypot(cx - anchor.x, cy - anchor.y);
    if (distFromAnchor <= maxMidDist + 70 && isPositionFree(cx, cy, radius, margin)) {
      return { x: cx, y: cy };
    }
  }

  let best = { x: (pad + maxX) / 2, y: (pad + maxY) / 2 };
  let bestScore = -Infinity;
  for (let attempt = 0; attempt < 50; attempt++) {
    const cx = pad + Math.random() * (maxX - pad);
    const cy = pad + Math.random() * (maxY - pad);
    const minOtherDist = activeNodes.length === 0
      ? 200
      : Math.min(...activeNodes.map((other) => Math.hypot(cx - other.x, cy - other.y)));
    const anchorPenalty = Math.abs(Math.hypot(cx - anchor.x, cy - anchor.y) - (minMidDist + maxMidDist) * 0.5);
    const candidateScore = minOtherDist * 2 - anchorPenalty;
    if (candidateScore > bestScore) {
      bestScore = candidateScore;
      best = { x: cx, y: cy };
    }
  }

  return best;
}

function pickRandomChainKeys(length) {
  const shuffled = [...chainKeys].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, length);
}

function spawnChainSequence(length = 3) {
  chainCounter += 1;
  const chainId = `chain-${chainCounter}`;
  const chainBonusLifeMult = 1.3;
  const randomKeys = pickRandomChainKeys(length);

  for (let stepIdx = 0; stepIdx < length; stepIdx++) {
    spawnNode({
      forceType: "target",
      forceKey: randomKeys[stepIdx],
      chainId,
      chainStep: stepIdx + 1,
      chainLength: length,
      lifeBoostMult: chainBonusLifeMult
    });
  }
  updateChainVisuals();
}

function runMusicBeat() {
  if (!running) return;

  playBeatSound(beatStep);

  arena.classList.add("beat-pulse");
  activeNodes.forEach((n) => n.el.classList.add("beat-node"));
  setTimeout(() => {
    arena.classList.remove("beat-pulse");
    activeNodes.forEach((n) => n.el.classList.remove("beat-node"));
  }, 95);

  if (tier >= 2 && beatStep > 0 && beatStep % 16 === 0 && beatStep - lastVisualEventBeat >= 20 && Math.random() < 0.75) {
    lastVisualEventBeat = beatStep;
    triggerVisualEvent();
  }

  const spawnEveryBeats = tier >= 5 || selectedTrack.diff === "extreme" ? 1 : 2;
  if (beatStep % spawnEveryBeats === 0 || activeNodes.length === 0) {
    const hasActiveChain = activeNodes.some((n) => Boolean(n.chainId));
    const canSpawnChain = !hasActiveChain && tier >= 2 && beatStep % 8 === 0 && activeNodes.length <= 1;

    if (canSpawnChain) {
      const chainLen = selectedTrack.diff === "extreme" || tier >= 4 ? 3 : 2;
      spawnChainSequence(chainLen);
    } else if (!hasActiveChain) {
      const canSpawnChord = tier >= 2 && beatStep % 4 === 0 && activeNodes.length < 2;
      if (canSpawnChord) {
        spawnNode({ forceType: "target", forceKey: null });
        const chordKey = normalKeys[Math.floor(Math.random() * normalKeys.length)];
        spawnNode({ forceType: "target", forceKey: chordKey });
      } else {
        spawnNode();
      }
    }
  }

  beatStep += 1;
  refreshHud();
  const nextBeatDelay = getBeatMs() / timeScale;
  beatTimeout = setTimeout(runMusicBeat, nextBeatDelay);
}

function spawnNode(options = {}) {
  if (!running) return;

  const {
    forceType = null,
    forceKey = null,
    chainId = null,
    chainStep = null,
    chainLength = 0,
    lifeBoostMult = 1
  } = options;

  const {
    lifetime,
    trapChance,
    movingChance,
    goldChance,
    hourglassChance,
    magnetChance,
    keyChance,
    scoreMult
  } = getDifficultyParams();
  const roll = Math.random();

  let type = forceType;
  let isShockTrap = false;

  if (!type) {
    if (roll < trapChance) {
      type = "trap";
      isShockTrap = tier >= 2 && Math.random() < 0.35;
    } else if (roll < trapChance + goldChance) {
      type = "gold";
    } else if (roll < trapChance + goldChance + hourglassChance) {
      type = "hourglass";
    } else if (roll < trapChance + goldChance + hourglassChance + magnetChance) {
      type = "magnet";
    } else {
      type = "target";
    }
  }

  const isChainNode = Boolean(chainId);
  const isBonusNode = type === "gold" || type === "hourglass" || type === "magnet";
  const isMoving = !isChainNode && type !== "trap" && (Math.random() < movingChance || activeMutator.id === "chaos");
  const assignedKey = forceKey
    ? forceKey
    : (!isChainNode && type !== "trap" && Math.random() < keyChance
      ? normalKeys[Math.floor(Math.random() * normalKeys.length)]
      : null);

  const isShrunk = performance.now() < shrinkUntil;
  const radius = getNodeRadius(isShrunk);
  const pos = findMidDistancePosition(radius, 22);
  let x = pos.x;
  let y = pos.y;
  lastSpawnAnchor = { x, y };

  const pad = Math.max(58, radius + 14);

  const speed = isMoving ? (selectedTrack.bpm * 0.65) + tier * 12 : 0;
  const angle = Math.random() * Math.PI * 2;
  let vx = Math.cos(angle) * speed;
  let vy = Math.sin(angle) * speed;

  const btn = document.createElement("button");
  const typeClass = type === "trap"
    ? (isShockTrap ? "trap shock-trap" : "trap")
    : type;
  btn.className = `node ${typeClass} ${isMoving ? "moving" : ""} ${isShrunk ? "shrunk" : ""} ${isChainNode ? "chain-node" : ""}`;
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;

  const ring = document.createElement("span");
  ring.className = "approach-ring";
  btn.appendChild(ring);

  if (isChainNode) {
    const mainKeySpan = document.createElement("span");
    mainKeySpan.className = "chain-key-main";
    mainKeySpan.textContent = assignedKey;
    btn.appendChild(mainKeySpan);

    const stepSub = document.createElement("span");
    stepSub.className = "chain-step-sub";
    stepSub.textContent = `${chainStep}/${chainLength}`;
    btn.appendChild(stepSub);
  } else {
    let symbol = "●";
    if (type === "trap") symbol = isShockTrap ? "💥" : "✕";
    else if (type === "gold") symbol = "★";
    else if (type === "hourglass") symbol = "⏳";
    else if (type === "magnet") symbol = "🧲";

    const labelSpan = document.createElement("span");
    labelSpan.textContent = symbol;
    btn.appendChild(labelSpan);

    if (assignedKey) {
      const keyTag = document.createElement("span");
      keyTag.className = "node-key";
      keyTag.textContent = assignedKey;
      btn.appendChild(keyTag);
    }
  }

  let remaining = (isBonusNode ? lifetime * 0.95 : lifetime) * lifeBoostMult;
  const totalLife = remaining;
  let lastFrame = performance.now();

  const nodeObj = {
    el: btn,
    raf: null,
    key: assignedKey,
    type,
    chainId,
    chainStep,
    chainLength,
    x,
    y,
    radius,
    hit: null
  };

  function removeNodeObj() {
    cancelAnimationFrame(nodeObj.raf);
    btn.remove();
    activeNodes = activeNodes.filter((item) => item !== nodeObj);
    updateChainVisuals();
  }

  function hitNode() {
    if (!running) return;

    if (type === "trap") {
      removeNodeObj();
      handleDamage(
        isShockTrap ? "Une onde de choc piège t'a foudroyé !" : "Tu as déclenché un piège rouge !",
        x,
        y,
        { isShockTrap }
      );
      return;
    }

    if (isChainNode) {
      const sameChain = activeNodes.filter((n) => n.chainId === chainId);
      const nextNode = sameChain.reduce((best, curr) => (curr.chainStep < best.chainStep ? curr : best), sameChain[0]);
      if (chainStep !== nextNode.chainStep) {
        spawnFloatingText(x, y - 18, `TOUCHE "${nextNode.key}" EN PREMIER !`, "#fca5a5");
        return;
      }
    }

    const ratioLeft = remaining / totalLife;
    const isPerfect = ratioLeft >= 0.2 && ratioLeft <= 0.65;
    const isGood = !isPerfect;

    if (ratioLeft <= 0.3) {
      clutchHits += 1;
      if (clutchHits >= 10) unlockAchievement("coldblood");
    }

    combo += 1;
    hitsInTier += 1;
    const mult = 1 + Math.floor(combo / 5);
    if (mult >= 4) unlockAchievement("overcharged");

    let chainExtraScore = 1;
    let chainCompleted = false;
    if (isChainNode) {
      const remainingInChainAfterHit = activeNodes.filter((n) => n.chainId === chainId && n !== nodeObj).length;
      if (remainingInChainAfterHit === 0) {
        chainCompleted = true;
        chainExtraScore = 1.6;
        addFever(28);
      } else {
        addFever(isPerfect ? 18 : 12);
      }
    } else {
      addFever(isPerfect ? 18 : 11);
    }

    const mutatorBonus = activeMutator.id === "frenzy" ? 2 : 1;
    const feverMult = feverActive ? 1.5 : 1;
    const precisionMult = isPerfect ? 1.4 : 1;
    const basePoints = isBonusNode ? 25 : (isChainNode ? 15 : 10);
    const gained = Math.max(10, Math.round(basePoints * mult * mutatorBonus * scoreMult * feverMult * precisionMult * chainExtraScore));
    score += gained;

    checkEnduranceComboReward(x, y);

    playTone(
      (isPerfect ? 520 : 340) + Math.min(combo * 16, 520),
      0.07,
      isPerfect ? "sine" : "triangle",
      0.13
    );

    const precisionTag = isPerfect ? "PERFECT !" : (isGood ? "GOOD" : "");
    if (chainCompleted) {
      spawnFloatingText(x, y - 22, `CHAÎNE x${chainLength} COMPLÈTE ! +${gained} • +FEVER`, "#fde047");
    } else if (type === "hourglass") {
      activateHourglassBonus(x, y);
      spawnFloatingText(x, y - 44, `${precisionTag} +${gained}`, "#e9d5ff");
    } else if (type === "magnet") {
      activateMagnetBonus(x, y);
      spawnFloatingText(x, y - 44, `${precisionTag} +${gained}`, "#93c5fd");
    } else if (type === "gold" && shields < maxShields) {
      shields += 1;
      spawnFloatingText(x, y - 22, `${precisionTag} +${gained} • +1 🛡️`, "#facc15");
    } else {
      spawnFloatingText(
        x,
        y - 18,
        `${precisionTag} +${gained}`,
        isPerfect ? "#fde047" : (type === "gold" ? "#facc15" : "#4ade80")
      );
    }

    removeNodeObj();

    if (hitsInTier >= 8) {
      tier += 1;
      hitsInTier = 0;
      pickMutatorForTier(tier);

      if (tier >= 4 && !tookDamageThisRun) unlockAchievement("untouchable");
      if (tier >= 3 && selectedTrack.diff === "extreme") unlockAchievement("extreme_survivor");

      playTone(660, 0.18, "sine", 0.16);
      arena.classList.remove("tier-up");
      void arena.offsetWidth;
      arena.classList.add("tier-up");
      spawnFloatingText(
        arena.clientWidth / 2,
        46,
        `PALIER ${tier} — ${activeMutator.name.toUpperCase()}`,
        "#facc15"
      );
    }

    refreshHud();
  }

  nodeObj.hit = hitNode;

  btn.addEventListener("pointerdown", (e) => {
    e.stopPropagation();
    hitNode();
  });

  function tick(now) {
    if (!running) return;
    const dt = (now - lastFrame) * timeScale;
    lastFrame = now;

    remaining -= dt;
    const ratio = Math.max(0, remaining / totalLife);

    const ringScale = 1 + 0.9 * ratio;
    ring.style.transform = `translate(-50%, -50%) scale(${ringScale.toFixed(3)})`;
    if (!isBonusNode && type !== "trap") {
      if (ratio <= 0.25) {
        ring.style.borderColor = "rgba(239, 68, 68, 0.95)";
      } else if (ratio <= 0.55) {
        ring.style.borderColor = "rgba(250, 204, 21, 0.95)";
      } else {
        ring.style.borderColor = "rgba(255, 255, 255, 0.9)";
      }
    }

    const shrunkNow = now < shrinkUntil;
    btn.classList.toggle("shrunk", shrunkNow);
    nodeObj.radius = getNodeRadius(shrunkNow);

    const dtSec = dt / 1000;
    if (isMoving) {
      x += vx * dtSec;
      y += vy * dtSec;
      if (x < pad || x > arena.clientWidth - pad) {
        vx *= -1;
        x = Math.max(pad, Math.min(arena.clientWidth - pad, x));
      }
      if (y < pad || y > arena.clientHeight - pad) {
        vy *= -1;
        y = Math.max(pad, Math.min(arena.clientHeight - pad, y));
      }
    }

    if (now < magnetUntil && type !== "trap") {
      const centerX = arena.clientWidth / 2;
      const centerY = arena.clientHeight / 2;
      const dx = centerX - x;
      const dy = centerY - y;
      const dist = Math.hypot(dx, dy);
      if (dist > 48) {
        const pullSpeed = 125 * dtSec;
        x += (dx / dist) * pullSpeed;
        y += (dy / dist) * pullSpeed;
      }
    }

    if (activeMutator.id === "drift") {
      y += 42 * dtSec;
      y = Math.min(arena.clientHeight - pad, y);
    }

    nodeObj.x = x;
    nodeObj.y = y;
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;

    if (isChainNode) {
      updateChainVisuals();
    }

    if (ratio <= 0) {
      removeNodeObj();
      if (type !== "trap" && !isBonusNode) {
        handleDamage("Une cible a expiré hors rythme !", x, y, { isExpired: true });
      }
      return;
    }
    nodeObj.raf = requestAnimationFrame(tick);
  }

  arena.appendChild(btn);
  activeNodes.push(nodeObj);
  updateChainVisuals();
  nodeObj.raf = requestAnimationFrame(tick);
}

window.addEventListener("keydown", (e) => {
  if (listeningTarget) {
    e.preventDefault();
    if (e.key === "Escape") {
      listeningTarget = null;
      keybindHint.textContent = "Capture annulée. Astuce : Échap annule la capture en cours • Aucun doublon autorisé.";
      renderKeybindSlots();
      return;
    }

    const newKey = formatKeyEvent(e);
    if (!newKey || newKey === "SHIFT" || newKey === "CONTROL" || newKey === "ALT" || newKey === "META") {
      keybindHint.textContent = "Choisis une touche caractère ou Espace (pas Shift/Ctrl/Alt).";
      return;
    }

    if (isKeyUsedElsewhere(newKey, listeningTarget.pool, listeningTarget.index)) {
      keybindHint.textContent = `Touche "${newKey}" déjà assignée ailleurs ! Choisis une autre touche.`;
      return;
    }

    if (listeningTarget.pool === "chain") {
      chainKeys[listeningTarget.index] = newKey;
    } else {
      normalKeys[listeningTarget.index] = newKey;
    }
    saveStats();
    keybindHint.textContent = `Touche "${newKey}" enregistrée sans doublon !`;
    listeningTarget = null;
    renderKeybindSlots();
    return;
  }

  if (!running) return;
  const pressed = formatKeyEvent(e);
  if (e.code === "Space") e.preventDefault();

  const activeChainNodes = activeNodes.filter((n) => Boolean(n.chainId));
  if (activeChainNodes.length > 0 && chainKeys.includes(pressed)) {
    const matchingChainNode = activeChainNodes.find((n) => n.key === pressed);
    if (matchingChainNode) {
      matchingChainNode.hit();
      return;
    }
  }

  if (!normalKeys.includes(pressed)) return;
  const matchingNode = activeNodes.find((n) => !n.chainId && n.key === pressed && n.type !== "trap");
  if (matchingNode) {
    matchingNode.hit();
  }
});

keysBtn.addEventListener("click", () => {
  if (overlay.classList.contains("hidden")) return;
  const isOpen = !keybindPanel.classList.contains("hidden");
  keybindPanel.classList.toggle("hidden", isOpen);
  keysBtn.classList.toggle("active", !isOpen);
  if (isOpen) {
    listeningTarget = null;
    renderKeybindSlots();
  }
});

resetKeysBtn.addEventListener("click", () => {
  chainKeys = [...DEFAULT_CHAIN_KEYS];
  normalKeys = [...DEFAULT_NORMAL_KEYS];
  listeningTarget = null;
  saveStats();
  keybindHint.textContent = "Touches réinitialisées (Chaînes : Q, S, D • Cibles : A, E, R).";
  renderKeybindSlots();
});

diffTabs.querySelectorAll(".diff-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedDiff = tab.dataset.diff;
    renderTrackSelector();
  });
});

function startGame() {
  if (performance.now() < replayLockUntil) return;
  clearReplayLock();

  listeningTarget = null;
  keybindPanel.classList.add("hidden");
  keysBtn.classList.remove("active");
  renderKeybindSlots();

  clearNodes();
  score = 0;
  combo = 0;
  lastEnduranceMilestone = 0;
  tier = 1;
  hitsInTier = 0;
  shields = 2;
  tookDamageThisRun = false;
  clutchHits = 0;
  feverCharge = 0;
  feverActive = false;
  shrinkUntil = 0;
  magnetUntil = 0;
  lastVisualEventBeat = -24;
  visualEventIdx = 0;
  beatStep = 0;
  activeMutator = MUTATORS[0];
  running = true;

  stats.gamesPlayed += 1;
  if (stats.gamesPlayed >= 10) unlockAchievement("veteran");
  saveStats();
  refreshHud();

  overlay.classList.add("hidden");
  runMusicBeat();
}

function endGame(reason) {
  running = false;
  clearNodes();

  const prevTrackBest = stats.trackBests[selectedTrack.id] ?? 0;
  const isNewTrackBest = score > prevTrackBest;
  if (isNewTrackBest) stats.trackBests[selectedTrack.id] = score;
  if (score > stats.globalBest) stats.globalBest = score;

  saveStats();
  refreshHud();
  renderTrackSelector();
  renderKeybindSlots();

  overlayTitle.textContent = isNewTrackBest ? "NOUVEAU RECORD SUR CETTE PISTE !" : "FIN DE PARTIE";
  overlayDesc.innerHTML = `${reason}<br>Piste : <strong>${selectedTrack.name} (${selectedTrack.bpm} BPM)</strong> • Score : <strong>${score}</strong> • Palier : <strong>${tier}</strong>`;
  overlay.classList.remove("hidden");
  startReplayCooldown(3, "Rejouer ou changer de piste");
}

soundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundBtn.textContent = soundEnabled ? "🔊 Son : ON" : "🔇 Son : OFF";
});

startBtn.addEventListener("click", startGame);
applyTheme(selectedTrack);
renderTrackSelector();
renderKeybindSlots();