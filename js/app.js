const VALID_LANGUAGES = [
  "en", "zh", "ja", "ko", "es", "fr", "de", "pt", "ru", "it",
  "ar", "az", "bg", "bn", "ca", "cs", "da", "el", "fa", "fi",
  "he", "hi", "hr", "ht", "hu", "id", "is", "la", "lt", "ms",
  "ne", "nl", "no", "pa", "pl", "ro", "sa", "sk", "sr", "sv",
  "sw", "ta", "te", "th", "tl", "tr", "uk", "ur", "vi", "yue",
  "unknown",
];

const EXAMPLES = {
  funk: {
    sampleQuery: "a funk rock song with groovy bass and punchy drums, tight rhythm section, wah guitar stabs",
    caption: "tight and groovy disco-funk track driven by a hyper-articulate slap bassline weaving syncopated sixteenth-note grooves with percussive thumb pops and ghost-note textures, locked into a crisp four-on-the-floor drum machine beat. Clean, funky guitar provides sparse chord stabs to leave sonic space for the bass, while filtered synth pads swell subtly in the background.",
    lyrics: "[Intro]\n[Heavy guitar riff and drums]\n[Vocal scream] Yeah!\n\n[Verse 1]\nFeeling the groove tonight\nEverything feels so right\n\n[Chorus]\nLet the music take control\nFunky rhythms free your soul\n\n[Outro]\n[Song ends with a fade]"
  },
  hiphop: {
    sampleQuery: "boom bap hip hop beat with gritty drums, soulful sample, and deep 808 bass",
    caption: "classic boom bap hip hop production featuring hard-hitting dusty drum samples, a chopped soulful vocal sample, deep rolling 808 bass, and vinyl crackle atmosphere",
    lyrics: "[Intro]\n[Scratching and beat drops]\nYeah... check the mic\nOne two, one two\n\n[Verse 1]\nSpitting fire on the mic\nEvery word hits just right\nFlowing like water in the night\nStreet lights guide my way\nEvery bar I write today\n\n[Chorus]\nWe keep it real, we keep it true\nHip hop lives in me and you\nFrom the block to the booth\nWe represent the truth\n\n[Verse 2]\nBass kicks hard, snare snaps back\nLaying down tracks, staying on track\nWords become weapons, beats become bread\nThis is how we get ahead\n\n[Outro]\nYeah... peace out\n[Beat fades with scratches]"
  },
  electronic: {
    sampleQuery: "deep house track with warm analog synths, atmospheric pads, and a driving 4/4 beat",
    caption: "deep house track with warm analog synth chords, atmospheric pads swelling in and out, a deep rolling bassline, crisp hi-hats on the off-beat, and a soulful vocal sample echoing through the mix",
    lyrics: ""
  },
  jazz: {
    sampleQuery: "smooth jazz with saxophone lead, gentle piano comping, and brushed drums",
    caption: "smooth contemporary jazz ensemble featuring a warm tenor saxophone melody, gentle piano comping with extended chords, upright bass walking lines, and brushed drums creating a soft swinging feel",
    lyrics: "[Verse 1]\nMoonlight shadows on the wall\nWhispers of a late night call\n\n[Chorus]\nJazz dreams floating by\nUnderneath the velvet sky"
  },
  metal: {
    sampleQuery: "aggressive heavy metal with dual distorted guitars, driving drums, and powerful male vocals",
    caption: "An aggressive, high-energy heavy metal track that explodes from the start with dual, heavily distorted guitars playing tight, chugging riffs over a powerful, driving drum beat. The male vocalist delivers a forceful, slightly raspy performance in a mid-to-high range, perfectly matching the song's intensity.",
    lyrics: "[Intro - Guitar Riff]\n\n[Verse 1]\nRip the script, break the mold\nShatter chains, dare the bold\nTook your crown, you can't ignore\nFreedom's knock on every door\n\n[Chorus]\nBreak the chains, let it pour\nShout it loud, beg no more\nBurn the rules, end the war\nWe're alive, can't ignore\n\n[Verse 2]\nTear it down, brick by brick\nEvery lie, every trick\nSkies on fire, won't obey\nChaos calls, don't delay\n\n[Guitar Solo]\n\n[Outro - Guitar Riff]\n[abrupt silence]"
  },
  synthpop: {
    sampleQuery: "romantic synthpop anthem with bright engaging female vocals, feelgood and danceable",
    caption: "Romantic and active synthpop anthem. Captures the joyful energy and irresistible charm, delivered with bright, engaging female vocals. Feelgood and danceable with pulsing synth bass and crisp electronic drums.",
    lyrics: "[Verse 1]\nMidnight talks with my regrets\nWhiskey lips and cigarettes\nPromises like shattered glass\nCut me deep but never last\n\n[Chorus]\nI was right, I was left\nCaught between the lines, no regrets\nI was wrong, I was left behind\nLike a shadow fading with the light"
  },
  lofi: {
    sampleQuery: "smooth jazzy lo-fi hip hop with gentle piano melody and relaxed drum groove",
    caption: "A smooth, jazzy lo-fi hip-hop track built on a foundation of a gentle piano melody and a relaxed, steady drum machine groove. A warm, round bassline provides a solid harmonic base with tasteful saxophone fills.",
    lyrics: ""
  },
  country: {
    sampleQuery: "classic country folk ballad with acoustic guitar, harmonica, and earnest male vocal",
    caption: "A classic country-folk ballad driven by a steady acoustic guitar rhythm and a warm, earnest male vocal with a gentle twang. A plaintive harmonica weaves in and out, providing melodic fills.",
    lyrics: "[Verse 1]\nFound you standing in the river's roar\nHeartbeats racing like never before\nEyes met mine and time stood still\nDreams were spinning 'round this hill\n\n[Chorus]\nI'll ride these heartstrings all night long\nSing our song where we belong\nYour heartbeat's my favorite song"
  },
  dubstep: {
    sampleQuery: "dark dubstep with gritty bass, melodic arpeggios, emotional female vocals at 140bpm",
    caption: "Adult mature female vocals, dubstep, gritty bass, melodic, arpeggio, fast, 140bpm, emotional. Dark ominous high energy with heavily processed vocal chops and synth melodies.",
    lyrics: "[Verse]\nIn a sliver of moonlight\nA shadow man saw the light\nAnd turned to what's right\nIn the dark\n\n[Chorus]\nAll is as it seems\nWe haunt each other's dreams\nWith no hate no fear\nWe pull each other near"
  },
  dnb: {
    sampleQuery: "energetic drum and bass with processed vocal chops and high-tempo breakbeat",
    caption: "An energetic drum and bass track driven by heavily processed vocal chops that serve as both rhythmic and melodic hooks. High-tempo breakbeat with powerful synth bassline and dynamic build-ups.",
    lyrics: ""
  },
  phonk: {
    sampleQuery: "aggressive phonk with cowbell pattern, dark synths, distorted 808 bass and deep rap vocals",
    caption: "An aggressive, high-energy phonk track, driven by a sharp, repetitive cowbell pattern that defines the groove. Dark minor-key synths blend with gritty trap framework and overdriven, distorted 808 bass.",
    lyrics: "[Intro]\nYeah... meow...\n\n[Verse 1]\nI got nine lives, zero clue\nGarageBand cryin' like what you do\nMic smell like tuna, cables in knots\nEvery time I rap I just knock down pots"
  },
  postpunk: {
    sampleQuery: "driving post-punk with layered electric guitars, angsty male vocals, and powerful drums",
    caption: "A driving post-punk arrangement kicks off with layered electric guitars—one clean and arpeggiated, the other providing distorted chordal texture—over a solid bassline and powerful live drums. Male lead vocal delivered with angsty, strained quality.",
    lyrics: "[Verse 1]\nUnder neon lights, they flicker and fade\nLost in the hum of this restless parade\nA city's heartbeat pulses in my veins\nSearching for answers in the acid rain\n\n[Chorus]\nOh, shadows of neon\nWhere do you run?\nBleeding out the night just to make us one"
  },
  symphonicmetal: {
    sampleQuery: "epic symphonic metal duet with orchestral strings, choirs, and soaring harmonies",
    caption: "Duet, symphonic metal, epic. Orchestral strings swelling into a heavy, marching rhythm with operatic backing choirs. Male baritone and female soprano vocals with anthemic, soaring harmonies.",
    lyrics: "[Verse 1 - Female]\nI see you walking through the ash and the grey\nA king without a kingdom, lost in the fray\n\n[Chorus - Duet]\nWe stand upon the edge of the night\nBetween the shadow and the dying light\nThe heavens fall, the earth divides"
  },
  chiptune: {
    sampleQuery: "intense chiptune with rapid breakbeat drums and frantic arpeggiated synth leads",
    caption: "An intense, high-octane chiptune track driven by rapid-fire breakbeat drum patterns and frantic, arpeggiated square-wave synth leads that evoke classic video game soundscapes.",
    lyrics: ""
  }
};

const DEFAULT_CAPTION = EXAMPLES.funk.caption;
const DEFAULT_LYRICS = EXAMPLES.funk.lyrics;

let state = {
  mode: 'sample',
  taskType: 'text2music',
  apiMode: 'worker',
  workerUrl: 'https://ace-step.drbaph.workers.dev',
  apiKey: '',
  isGenerating: false,
  srcAudioData: null,
  referAudioData: null
};

const elements = {};

async function init() {
  cacheElements();
  populateLanguages();
  setupEventListeners();
  loadSettings();
  await initDB();
  await loadGenerations();
  updateUI();
}

function cacheElements() {
  elements.sampleQuery = document.getElementById('sampleQuery');
  elements.vocalLanguage = document.getElementById('vocalLanguage');
  elements.isInstrumental = document.getElementById('isInstrumental');
  elements.caption = document.getElementById('caption');
  elements.lyrics = document.getElementById('lyrics');
  elements.vocalLanguageManual = document.getElementById('vocalLanguageManual');
  elements.autoMetas = document.getElementById('autoMetas');
  elements.bpm = document.getElementById('bpm');
  elements.keyScale = document.getElementById('keyScale');
  elements.duration = document.getElementById('duration');
  elements.timeSignature = document.getElementById('timeSignature');
  elements.coverStrength = document.getElementById('coverStrength');
  elements.remixStrength = document.getElementById('remixStrength');
  elements.repaintStart = document.getElementById('repaintStart');
  elements.repaintEnd = document.getElementById('repaintEnd');
  elements.srcAudio = document.getElementById('srcAudio');
  elements.srcAudioRepaint = document.getElementById('srcAudioRepaint');
  elements.referAudio = document.getElementById('referAudio');
  elements.seed = document.getElementById('seed');
  elements.thinking = document.getElementById('thinking');
  elements.useCotCaption = document.getElementById('useCotCaption');
  elements.useCotLanguage = document.getElementById('useCotLanguage');
  elements.temperature = document.getElementById('temperature');
  elements.lmCfgScale = document.getElementById('lmCfgScale');
  elements.lmTopP = document.getElementById('lmTopP');
  elements.lmTopK = document.getElementById('lmTopK');
  elements.ditGuidanceScale = document.getElementById('ditGuidanceScale');
  elements.ditInferenceSteps = document.getElementById('ditInferenceSteps');
  elements.ditInferMethod = document.getElementById('ditInferMethod');
  elements.apiMode = document.getElementById('apiMode');
  elements.apiModeHint = document.getElementById('apiModeHint');
  elements.apiKey = document.getElementById('apiKey');
  elements.generationsList = document.getElementById('generationsList');
  elements.clearAllBtn = document.getElementById('clearAllBtn');
  elements.clearAllModal = document.getElementById('clearAllModal');
  elements.statusText = document.getElementById('statusText');
  elements.generateBtn = document.getElementById('generateBtn');
  elements.settingsBtn = document.getElementById('settingsBtn');
  elements.settingsModal = document.getElementById('settingsModal');
  elements.toastContainer = document.getElementById('toastContainer');
  elements.showMoreBtn = document.getElementById('showMoreBtn');
}

function populateLanguages() {
  const languageNames = {
    en: 'English', zh: 'Chinese', ja: 'Japanese', ko: 'Korean', es: 'Spanish',
    fr: 'French', de: 'German', pt: 'Portuguese', ru: 'Russian', it: 'Italian',
    ar: 'Arabic', az: 'Azerbaijani', bg: 'Bulgarian', bn: 'Bengali', ca: 'Catalan',
    cs: 'Czech', da: 'Danish', el: 'Greek', fa: 'Persian', fi: 'Finnish',
    he: 'Hebrew', hi: 'Hindi', hr: 'Croatian', ht: 'Haitian Creole', hu: 'Hungarian',
    id: 'Indonesian', is: 'Icelandic', la: 'Latin', lt: 'Lithuanian', ms: 'Malay',
    ne: 'Nepali', nl: 'Dutch', no: 'Norwegian', pa: 'Punjabi', pl: 'Polish',
    ro: 'Romanian', sa: 'Sanskrit', sk: 'Slovak', sr: 'Serbian', sv: 'Swedish',
    sw: 'Swahili', ta: 'Tamil', te: 'Telugu', th: 'Thai', tl: 'Tagalog',
    tr: 'Turkish', uk: 'Ukrainian', ur: 'Urdu', vi: 'Vietnamese', yue: 'Cantonese',
    unknown: 'Auto Detect'
  };

  [elements.vocalLanguage, elements.vocalLanguageManual].forEach(select => {
    VALID_LANGUAGES.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang;
      option.textContent = languageNames[lang] || lang;
      if (lang === 'en') option.selected = true;
      select.appendChild(option);
    });
  });
}

function setupEventListeners() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode;
      updateUI();
    });
  });

  document.querySelectorAll('input[name="taskType"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.taskType = radio.value;
      updateUI();
    });
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => loadExample(btn.dataset.example));
  });

  elements.autoMetas.addEventListener('change', updateUI);

  document.querySelectorAll('input[type="range"]').forEach(slider => {
    slider.addEventListener('input', () => {
      const valueEl = slider.parentElement.querySelector('.slider-value');
      if (valueEl) {
        valueEl.textContent = parseFloat(slider.value).toFixed(2);
      }
    });
  });

  elements.srcAudio.addEventListener('change', (e) => handleAudioUpload(e, 'src'));
  elements.srcAudioRepaint.addEventListener('change', (e) => handleAudioUpload(e, 'src'));
  elements.referAudio.addEventListener('change', (e) => handleAudioUpload(e, 'refer'));

  elements.settingsBtn.addEventListener('click', () => {
    elements.settingsModal.classList.add('active');
  });

  document.querySelector('.modal-close').addEventListener('click', () => {
    elements.settingsModal.classList.remove('active');
  });

  elements.settingsModal.addEventListener('click', (e) => {
    if (e.target === elements.settingsModal) {
      elements.settingsModal.classList.remove('active');
    }
  });

  document.getElementById('cancelSettings').addEventListener('click', () => {
    elements.settingsModal.classList.remove('active');
  });

  document.getElementById('saveSettings').addEventListener('click', saveSettings);

  elements.apiMode.addEventListener('change', () => {
    const mode = elements.apiMode.value;
    const hints = {
      worker: 'Shared proxy - no key needed',
      custom: 'Enter your own ACE-Step API key'
    };
    elements.apiModeHint.textContent = hints[mode] || '';
    
    document.querySelector('.custom-mode').classList.toggle('hidden', mode !== 'custom');
  });

  elements.generateBtn.addEventListener('click', generateMusic);
  elements.clearAllBtn.addEventListener('click', clearAllGenerations);
  
  document.getElementById('cancelClearAll').addEventListener('click', cancelClearAll);
  document.getElementById('confirmClearAll').addEventListener('click', confirmClearAll);
  
  elements.clearAllModal.addEventListener('click', (e) => {
    if (e.target === elements.clearAllModal) {
      elements.clearAllModal.classList.remove('active');
    }
  });
}

function updateUI() {
  const isSample = state.mode === 'sample';
  const isText2Music = state.taskType === 'text2music';
  const isCover = state.taskType === 'cover';
  const isRepaint = state.taskType === 'repaint';
  const autoMetas = elements.autoMetas.checked;

  document.querySelector('.sample-mode-fields').classList.toggle('hidden', !isSample);
  document.querySelector('.manual-mode-fields').classList.toggle('hidden', isSample);
  document.querySelector('.cover-fields').classList.toggle('hidden', isText2Music);
  document.querySelector('.repaint-fields').classList.toggle('hidden', !isRepaint);
  document.querySelector('.manual-metas').classList.toggle('hidden', autoMetas);
}

function loadExample(name) {
  const example = EXAMPLES[name];
  if (!example) return;

  elements.sampleQuery.value = example.sampleQuery;
  elements.caption.value = example.caption;
  elements.lyrics.value = example.lyrics;

  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  const manualBtn = document.querySelector('.mode-btn[data-mode="manual"]');
  manualBtn.classList.add('active');
  state.mode = 'manual';
  updateUI();

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector('.tab[data-tab="params"]').classList.add('active');
  document.getElementById('params').classList.add('active');

  toast('Example loaded! Switched to Manual Mode', 'success');
}

function handleAudioUpload(event, type) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    if (type === 'src') {
      state.srcAudioData = e.target.result;
    } else {
      state.referAudioData = e.target.result;
    }
    
    const container = event.target.closest('.file-upload');
    const fileName = container.querySelector('.file-name');
    fileName.textContent = file.name;
    fileName.classList.remove('hidden');
    
    toast(`Audio file loaded: ${file.name}`, 'success');
  };
  reader.readAsDataURL(file);
}

function saveSettings() {
  state.apiMode = elements.apiMode.value;
  state.apiKey = elements.apiKey.value;

  localStorage.setItem('acestep_settings', JSON.stringify({
    apiMode: state.apiMode,
    apiKey: state.apiKey
  }));

  elements.settingsModal.classList.remove('active');
  toast('Settings saved!', 'success');
}

function loadSettings() {
  const saved = localStorage.getItem('acestep_settings');
  if (saved) {
    const settings = JSON.parse(saved);
    state.apiMode = settings.apiMode || 'worker';
    state.apiKey = settings.apiKey || '';
  }

  elements.apiMode.value = state.apiMode;
  elements.apiKey.value = state.apiKey;

  const hints = {
    worker: 'Shared proxy - no key needed',
    custom: 'Enter your own ACE-Step API key'
  };
  elements.apiModeHint.textContent = hints[state.apiMode] || '';
  
  document.querySelector('.custom-mode').classList.toggle('hidden', state.apiMode !== 'custom');

  elements.caption.value = DEFAULT_CAPTION;
  elements.lyrics.value = DEFAULT_LYRICS;
}

function buildRequestBody() {
  const isSample = state.mode === 'sample';
  const autoMetas = elements.autoMetas.checked;
  const isInstrumental = elements.isInstrumental.checked;
  const hasLyrics = elements.lyrics.value.trim() !== '';

  let taskType = state.taskType;
  if (taskType === 'text2music' && state.srcAudioData) {
    taskType = 'cover';
  }

  const audioList = [];
  if (state.referAudioData) {
    audioList.push(state.referAudioData);
  }
  if (state.srcAudioData) {
    audioList.push(state.srcAudioData);
  }

  const prompt = isSample ? elements.sampleQuery.value : elements.caption.value;
  let content = prompt;
  if (audioList.length > 0) {
    content = [{ type: 'text', text: prompt }];
    audioList.forEach(audioData => {
      content.push({
        type: 'input_audio',
        input_audio: { data: audioData.split(',')[1], format: 'wav' }
      });
    });
  }

  const body = {
    model: 'acemusic/acestep-v15-turbo',
    messages: [{ role: 'user', content }],
    modalities: ['audio'],
    stream: false,
    task_type: taskType,
    thinking: elements.thinking.checked,
    temperature: parseFloat(elements.temperature.value),
    top_p: parseFloat(elements.lmTopP.value),
    use_cot_caption: elements.useCotCaption.checked,
    use_cot_language: elements.useCotLanguage.checked,
    use_cot_metas: autoMetas,
    guidance_scale: parseFloat(elements.ditGuidanceScale.value),
    audio_config: {
      format: 'wav',
      vocal_language: isSample ? elements.vocalLanguage.value : elements.vocalLanguageManual.value,
      instrumental: isSample ? isInstrumental : !hasLyrics,
    },
  };

  if (isSample) {
    body.sample_mode = true;
  }

  const lmCfg = parseFloat(elements.lmCfgScale.value);
  if (lmCfg) body.lm_cfg_scale = lmCfg;

  const lmTopK = parseInt(elements.lmTopK.value);
  if (lmTopK > 0) body.top_k = lmTopK;

  const steps = parseInt(elements.ditInferenceSteps.value);
  if (steps) body.inference_steps = steps;

  body.infer_method = elements.ditInferMethod.value;

  if (!autoMetas && !isSample) {
    const duration = parseFloat(elements.duration.value);
    if (duration > 0) body.audio_config.duration = duration;

    const bpm = parseInt(elements.bpm.value);
    if (bpm > 0) body.audio_config.bpm = bpm;

    const keyScale = elements.keyScale.value.trim();
    if (keyScale) body.audio_config.key_scale = keyScale;

    const timeSig = elements.timeSignature.value.trim();
    if (timeSig) body.audio_config.time_signature = timeSig;
  }

  const lyrics = elements.lyrics.value;
  if (lyrics && !isSample) body.lyrics = lyrics;

  const seed = elements.seed.value.trim();
  if (seed && seed !== '-1') body.seed = seed;

  if (taskType === 'cover' || taskType === 'repaint') {
    body.thinking = false;
    body.use_cot_caption = false;
    body.use_cot_language = false;
    body.use_cot_metas = false;

    if (taskType === 'cover') {
      body.audio_cover_strength = parseFloat(elements.remixStrength.value);
      const coverStrength = parseFloat(elements.coverStrength.value);
      if (coverStrength > 0) body.cover_noise_strength = coverStrength;
    }

    if (taskType === 'repaint') {
      body.repainting_start = parseFloat(elements.repaintStart.value);
      const repaintEnd = parseFloat(elements.repaintEnd.value);
      if (repaintEnd > 0) body.repainting_end = repaintEnd;
    }
  }

  return body;
}

async function generateMusic() {
  if (state.isGenerating) return;

  if (state.apiMode === 'worker' && !state.workerUrl) {
    toast('Please set your Worker URL in settings', 'error');
    elements.settingsModal.classList.add('active');
    return;
  }

  if (state.apiMode === 'custom' && !state.apiKey) {
    toast('Please set your API key in settings', 'error');
    elements.settingsModal.classList.add('active');
    return;
  }

  state.isGenerating = true;
  elements.generateBtn.disabled = true;
  elements.generateBtn.classList.add('loading');
  elements.generateBtn.querySelector('span').textContent = 'Generating...';
  elements.statusText.textContent = '🔄 Connecting...';

  const WORKER_URL = 'https://ace-step.drbaph.workers.dev';
  
  const url = state.apiMode === 'worker'
    ? `${WORKER_URL}/v1/chat/completions`
    : 'https://api.acemusic.ai/v1/chat/completions';

  const body = buildRequestBody();

  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': 'AceMusic-WebUI/1.0',
  };

  if (state.apiMode === 'custom' && state.apiKey) {
    headers['Authorization'] = `Bearer ${state.apiKey}`;
  }

  const progressInterval = setInterval(() => {
    const dots = '.'.repeat((elements.statusText.textContent.split('.').length % 3) + 1);
    if (elements.statusText.textContent.includes('Connecting')) {
      elements.statusText.textContent = `🔄 Sending request${dots}`;
    } else if (elements.statusText.textContent.includes('Sending')) {
      elements.statusText.textContent = `🎵 Generating audio${dots}`;
    } else if (elements.statusText.textContent.includes('Generating')) {
      elements.statusText.textContent = `⏳ Processing${dots}`;
    }
  }, 500);

  try {
    elements.statusText.textContent = '🔄 Sending request...';
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    elements.statusText.textContent = '⏳ Processing response...';
    const result = await response.json();

    const audioData = parseAudioResponse(result);
    if (audioData) {
      const isSample = state.mode === 'sample';
      const caption = isSample ? elements.sampleQuery.value : elements.caption.value;
      const lyrics = isSample ? '' : elements.lyrics.value;
      
      const audioBlob = await fetch(audioData).then(r => r.blob());
      
      await saveGeneration({
        id: Date.now(),
        audioBlob,
        caption,
        lyrics,
        timestamp: new Date().toISOString()
      });
      
      elements.statusText.textContent = '✅ Complete!';
      toast('Music generated successfully!', 'success');
      
      document.querySelector('.tab[data-tab="output"]').click();
    } else {
      throw new Error('No audio data in response');
    }
  } catch (error) {
    console.error('Generation error:', error);
    elements.statusText.textContent = '❌ Error';
    toast(`Generation failed: ${error.message}`, 'error');
  } finally {
    clearInterval(progressInterval);
    state.isGenerating = false;
    elements.generateBtn.disabled = false;
    elements.generateBtn.classList.remove('loading');
    elements.generateBtn.querySelector('span').textContent = 'Generate Music';
  }
}

function parseAudioResponse(result) {
  const choices = result.choices || [];
  let audioItems = [];

  if (choices.length > 0) {
    const message = choices[0].message || {};
    audioItems = message.audio || [];
  } else {
    audioItems = result.audio || [];
  }

  for (const item of audioItems) {
    let url = '';
    if (typeof item === 'object') {
      url = item?.audio_url?.url || item?.url || '';
    }
    if (url) {
      return url;
    }
  }

  return null;
}

const DB_NAME = 'acestep_db';
const STORE_NAME = 'generations';
let db = null;

async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };
    
    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

async function loadGenerations() {
  try {
    if (!db) await initDB();
    
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => {
        const generations = request.result.sort((a, b) => b.id - a.id);
        renderGenerations(generations);
        resolve(generations);
      };
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error('Error loading generations:', e);
    renderGenerations([]);
  }
}

async function saveGeneration(generation) {
  try {
    if (!db) await initDB();
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    const countRequest = store.count();
    
    return new Promise((resolve, reject) => {
      countRequest.onsuccess = async () => {
        const count = countRequest.result;
        
        if (count >= 20) {
          const allRequest = store.getAll();
          allRequest.onsuccess = async () => {
            const all = allRequest.result.sort((a, b) => a.id - b.id);
            const toDelete = all.slice(0, count - 19);
            
            for (const item of toDelete) {
              await new Promise((res, rej) => {
                const delTx = db.transaction([STORE_NAME], 'readwrite');
                const delStore = delTx.objectStore(STORE_NAME);
                const delReq = delStore.delete(item.id);
                delReq.onsuccess = res;
                delReq.onerror = rej;
              });
            }
            
            const addTx = db.transaction([STORE_NAME], 'readwrite');
            const addStore = addTx.objectStore(STORE_NAME);
            const addReq = addStore.add(generation);
            addReq.onsuccess = () => {
              loadGenerations();
              resolve();
            };
            addReq.onerror = () => reject(addReq.error);
          };
        } else {
          const addReq = store.add(generation);
          addReq.onsuccess = () => {
            loadGenerations();
            resolve();
          };
          addReq.onerror = () => reject(addReq.error);
        }
      };
    });
  } catch (e) {
    console.error('Error saving generation:', e);
    toast('Failed to save generation', 'error');
  }
}

async function deleteGeneration(id) {
  try {
    if (!db) await initDB();
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    return new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => {
        loadGenerations();
        toast('Generation deleted', 'success');
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error('Error deleting generation:', e);
  }
}

async function downloadGeneration(id) {
  try {
    if (!db) await initDB();
    
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    
    return new Promise((resolve, reject) => {
      const request = store.get(id);
      request.onsuccess = () => {
        const generation = request.result;
        if (generation && generation.audioBlob) {
          const url = URL.createObjectURL(generation.audioBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `acestep-${id}.wav`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          toast('Download started', 'success');
          resolve();
        } else {
          toast('Audio not found', 'error');
          reject();
        }
      };
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error('Error downloading generation:', e);
    toast('Download failed', 'error');
  }
}

async function clearAllGenerationsDB() {
  try {
    if (!db) await initDB();
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    return new Promise((resolve, reject) => {
      const request = store.clear();
      request.onsuccess = () => {
        renderGenerations([]);
        toast('All generations cleared', 'success');
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error('Error clearing generations:', e);
  }
}

function clearAllGenerations() {
  elements.clearAllModal.classList.add('active');
}

async function confirmClearAll() {
  try {
    if (!db) await initDB();
    
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    await new Promise((resolve, reject) => {
      const request = store.clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
    
    renderGenerations([]);
    elements.clearAllModal.classList.remove('active');
    toast('All generations cleared', 'success');
  } catch (e) {
    console.error('Error clearing generations:', e);
    toast('Failed to clear generations', 'error');
  }
}

function cancelClearAll() {
  elements.clearAllModal.classList.remove('active');
}

function renderGenerations(generations) {
  if (generations.length === 0) {
    elements.generationsList.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10,8 16,12 10,16" fill="currentColor"/>
        </svg>
        <span>No generations yet</span>
        <p>Generate some music to see it here</p>
      </div>
    `;
    return;
  }

  elements.generationsList.innerHTML = generations.map(g => `
    <div class="generation-item" data-id="${g.id}">
      <div class="generation-header">
        <span class="generation-time">${formatTime(g.timestamp)}</span>
        <div class="generation-actions">
          <button class="btn-download" onclick="downloadGeneration(${g.id})" title="Download">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </button>
          <button class="btn-delete" onclick="deleteGeneration(${g.id})" title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="generation-audio" id="audio-container-${g.id}">
        <audio controls></audio>
      </div>
      <div class="generation-info" onclick="toggleExpand(${g.id})">
        <div class="generation-caption" id="caption-${g.id}">${escapeHtml(g.caption || 'No caption')}</div>
        ${g.lyrics ? `<div class="generation-lyrics" id="lyrics-${g.id}">${escapeHtml(g.lyrics)}</div>` : ''}
        <div class="generation-expand">Click to expand</div>
      </div>
    </div>
  `).join('');

  generations.forEach(g => {
    if (g.audioBlob) {
      const audioUrl = URL.createObjectURL(g.audioBlob);
      const audioEl = document.querySelector(`#audio-container-${g.id} audio`);
      if (audioEl) {
        audioEl.src = audioUrl;
      }
    }
  });
}

function toggleExpand(id) {
  const caption = document.getElementById(`caption-${id}`);
  const lyrics = document.getElementById(`lyrics-${id}`);
  const expand = document.querySelector(`[data-id="${id}"] .generation-expand`);
  
  if (caption) caption.classList.toggle('expanded');
  if (lyrics) lyrics.classList.toggle('expanded');
  
  if (expand) {
    expand.textContent = caption?.classList.contains('expanded') ? 'Click to collapse' : 'Click to expand';
  }
}

function formatTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diff = now - date;
  
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function toast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function setupShowMore() {
  const btn = document.getElementById('showMoreBtn');
  const hiddenBtns = document.querySelectorAll('#examplesList .example-btn.hidden');
  
  btn.addEventListener('click', () => {
    const isExpanded = btn.dataset.expanded === 'true';
    
    if (isExpanded) {
      hiddenBtns.forEach(b => b.classList.add('hidden'));
      btn.textContent = 'Show More';
      btn.dataset.expanded = 'false';
    } else {
      hiddenBtns.forEach(b => b.classList.remove('hidden'));
      btn.textContent = 'Show Less';
      btn.dataset.expanded = 'true';
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await init();
  setupShowMore();
});

window.ACESTEP_API_KEY = window.ACESTEP_API_KEY || null;
