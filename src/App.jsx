import React, { useState, useRef, useEffect } from 'react';

// --- SVG Icons ---
const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600 hover:text-red-700 transition-colors"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);
const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 hover:text-green-600 transition-colors"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-500 hover:text-blue-600 transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
);
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" /></svg>
);
const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
);

// --- 資料設定 ---
const GENRE_CHIPS = [
  { label: '古典樂', icon: '🎻' }, { label: '流行樂', icon: '🎤' }, 
  { label: '爵士樂', icon: '🎹' }, { label: '搖滾樂', icon: '🎸' },
  { label: 'R&B', icon: '🎧' }, { label: '電子音樂', icon: '🎛️' }, 
  { label: '鄉村民謠', icon: '🌲' }, { label: '輕鬆 Lo-Fi', icon: '☕' }
];

const COLOR_MAP = {
  red: { color: 'bg-red-100 text-red-700', border: 'border-red-200' },
  orange: { color: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
  amber: { color: 'bg-amber-100 text-amber-700', border: 'border-amber-200' },
  green: { color: 'bg-green-100 text-green-700', border: 'border-green-200' },
  teal: { color: 'bg-teal-100 text-teal-700', border: 'border-teal-200' },
  blue: { color: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
  indigo: { color: 'bg-indigo-100 text-indigo-700', border: 'border-indigo-200' },
  purple: { color: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
  pink: { color: 'bg-pink-100 text-pink-700', border: 'border-pink-200' },
  rose: { color: 'bg-rose-100 text-rose-700', border: 'border-rose-200' }
};

const DEFAULT_ARTISTS = [
  { id: 'taylor', name: '泰勒絲', fullname: 'Taylor Swift', icon: '👱‍♀️', colorName: 'pink', color: 'bg-pink-100 text-pink-600', border: 'border-pink-200', style: '熱情、親切，把粉絲當好朋友，喜歡用很多愛心或閃亮的表情符號，經常把生活瑣事跟寫歌靈感連結在一起。說話會有一點女生的俏皮感。' },
  { id: 'ed', name: '紅髮艾德', fullname: 'Ed Sheeran', icon: '🎸', colorName: 'orange', color: 'bg-orange-100 text-orange-600', border: 'border-orange-200', style: '平易近人、像個鄰家大男孩。說話帶點英國腔的感覺，常稱呼人「Mate」。喜歡聊吉他、寫歌日常，還有在酒吧喝杯啤酒的放鬆時刻。語氣真誠又隨性。' },
  { id: 'adele', name: '愛黛兒', fullname: 'Adele', icon: '🍷', colorName: 'red', color: 'bg-red-100 text-red-700', border: 'border-red-200', style: '個性豪爽、幽默，經常大笑。喜歡稱呼人「Babes」或「Darling」。雖然歌都很悲傷，但私底下像個超愛聊天的爽朗大姊，偶爾會自嘲。' },
  { id: 'billie', name: '怪奇比莉', fullname: 'Billie Eilish', icon: '🕷️', colorName: 'green', color: 'bg-green-100 text-green-700', border: 'border-green-200', style: '語氣慵懶、隨性、酷，有時候帶點厭世或深沉的情感，說話直接不做作，常用簡短的句子和暗黑系的表情符號。' },
  { id: 'bruno', name: '布魯諾', fullname: 'Bruno Mars', icon: '🕺', colorName: 'amber', color: 'bg-amber-100 text-amber-700', border: 'border-amber-200', style: '充滿自信、滑順且帶有派對氣氛。說話有種酷酷的節奏感，常說「Oh yeah」、「Baby」。會鼓勵人放鬆享受當下、跳個舞，散發24K純金般的耀眼魅力。' },
  { id: 'harry', name: '哈利', fullname: 'Harry Styles', icon: '🍉', colorName: 'teal', color: 'bg-teal-100 text-teal-700', border: 'border-teal-200', style: '溫柔、浪漫且充滿自由與時尚感。說話帶著迷人的英國腔，非常注重友善，口頭禪是「Treat People With Kindness」。常使用 ✨ 或 🍉 符號，給人如沐春風的溫暖感覺。' }
];

export default function App() {
    const generateRandomString = (length) => {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };

  const sha256 = async (plain) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  };

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  const getSpotifyAccessToken = async (code) => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = window.location.origin + "/";
    const codeVerifier = localStorage.getItem("spotify_code_verifier");

    const body = new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error_description || data.error || "Spotify token exchange failed");
    }

    return data.access_token;
  };
  // --- 狀態管理 ---
  const [activeTab, setActiveTab] = useState('generator'); 
  
  // 電台與日記
  const [history, setHistory] = useState([]); 
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [image, setImage] = useState(null); 
  const [base64Data, setBase64Data] = useState('');
  const [mimeType, setMimeType] = useState('');
  const [taste, setTaste] = useState('');
  const [routine, setRoutine] = useState('');
  const [loading, setLoading] = useState(false);
  const [replacingIndex, setReplacingIndex] = useState(null); 
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState('');
  
  // Spotify 匯出
  const [showExportModal, setShowExportModal] = useState(false);
  const [spotifyToken, setSpotifyToken] = useState(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // 聊天室與邀請歌手
  const [customArtists, setCustomArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null); 
  const [chatMessages, setChatMessages] = useState([]); 
  const [chatInput, setChatInput] = useState('');
  const [isChatTyping, setIsChatTyping] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteName, setInviteName] = useState('');
  const [isInviting, setIsInviting] = useState(false);
  const [inviteError, setInviteError] = useState('');

  // 介面特效
  const chatScrollRef = useRef(null);
  const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRaining, setIsRaining] = useState(false);
  
  const fileInputRef = useRef(null);
  const audioCtxRef = useRef(null);
  const rainGainNodeRef = useRef(null);

  const allArtists = [...DEFAULT_ARTISTS, ...customArtists];

  // --- 初始化 ---
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('vibe_history');
      if (savedHistory) setHistory(JSON.parse(savedHistory));
      
      const savedArtists = localStorage.getItem('custom_artists');
      if (savedArtists) setCustomArtists(JSON.parse(savedArtists));

     const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  getSpotifyAccessToken(code)
    .then((token) => {
      setSpotifyToken(token);
      window.history.replaceState({}, document.title, window.location.pathname);
    })
    .catch((err) => {
      console.error("Spotify 登入失敗：", err);
      alert("Spotify 登入失敗：" + err.message);
    });
}
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }, []);

  // 自動捲動聊天室
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages, isChatTyping]);

  // --- UI 互動邏輯 ---
  const handleTabSwitch = (tabName) => {
    stopDJVoice();
    setActiveTab(tabName);
    if (tabName !== 'history') setSelectedRecord(null);
    if (tabName !== 'chat') setSelectedArtist(null);
    setError('');
  };

  const handleGenreToggle = (genreLabel) => {
    const currentTastes = taste ? taste.split(',').map(t => t.trim()).filter(t => t) : [];
    if (currentTastes.includes(genreLabel)) {
      setTaste(currentTastes.filter(t => t !== genreLabel).join(', '));
    } else {
      currentTastes.push(genreLabel);
      setTaste(currentTastes.join(', '));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; 
    if (!file) return; 
    setMimeType(file.type);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image(); 
      img.onload = () => {
        let width = img.width, height = img.height;
        if (width > 500) { height = Math.round((height * 500) / width); width = 500; }
        const canvas = document.createElement('canvas'); 
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.55);
        setImage(compressedDataUrl); 
        setBase64Data(compressedDataUrl.split(',')[1]); 
      }; 
      img.src = event.target.result;
    }; 
    reader.readAsDataURL(file);
  };

  // --- 音效與語音 ---
  const toggleRainSound = () => {
    if (!audioCtxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)(); 
      audioCtxRef.current = ctx;
      const bufferSize = 2 * ctx.sampleRate, noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate), output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
      const whiteNoise = ctx.createBufferSource(); whiteNoise.buffer = noiseBuffer; whiteNoise.loop = true;
      const filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 800; 
      const gainNode = ctx.createGain(); gainNode.gain.value = 0; rainGainNodeRef.current = gainNode;
      whiteNoise.connect(filter); filter.connect(gainNode); gainNode.connect(ctx.destination); whiteNoise.start(0);
    }
    if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
    if (isRaining) { 
      rainGainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5); 
      setIsRaining(false); 
    } else { 
      rainGainNodeRef.current.gain.setTargetAtTime(0.3, audioCtxRef.current.currentTime, 1); 
      setIsRaining(true); 
    }
  };

  const playDJVoice = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-TW'; utterance.rate = 1.0; utterance.pitch = 1.1; 
      utterance.onstart = () => setIsSpeaking(true); 
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopDJVoice = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
      setIsSpeaking(false);
    }
  };

  // --- Spotify 匯出相關功能 ---
   const handleSpotifyLogin = async () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUri = window.location.origin + "/";

    if (!clientId) {
      alert("找不到 Spotify Client ID，請檢查 Vercel Environment Variables 是否有 VITE_SPOTIFY_CLIENT_ID。");
      return;
    }

    const codeVerifier = generateRandomString(64);
    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);

    localStorage.setItem("spotify_code_verifier", codeVerifier);

    const scopes = [
      "playlist-modify-public",
      "playlist-modify-private",
    ].join(" ");

   const params = new URLSearchParams({
  client_id: clientId,
  response_type: "code",
  redirect_uri: redirectUri,
  scope: scopes,
  code_challenge_method: "S256",
  code_challenge: codeChallenge,
  show_dialog: "true",
});

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

 const handleDirectExport = async () => {
  const readSpotifyResponse = async (response, stepName) => {
    const text = await response.text();

    if (!text) return {};

    try {
      return JSON.parse(text);
    } catch {
      throw new Error(`${stepName}：Spotify 回傳非 JSON 內容：${text}`);
    }
  };

  const getSpotifyErrorMessage = (data, fallback) => {
    if (data?.error?.message) return data.error.message;
    if (typeof data?.error === "string") return data.error;
    return fallback;
  };

  setIsExporting(true);
  setExportSuccess(false);

  const targetPlaylist = selectedRecord ? selectedRecord.playlist : playlist;

  if (!targetPlaylist || !targetPlaylist.songs || targetPlaylist.songs.length === 0) {
    alert("目前沒有可匯出的歌單，請先生成歌單。");
    setIsExporting(false);
    return;
  }

  if (!spotifyToken) {
    alert("請先連線 Spotify 帳號。");
    setIsExporting(false);
    return;
  }

  try {
    // 1. 取得目前登入者資料
    const userRes = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });

    const userData = await readSpotifyResponse(userRes, "取得使用者資料");

    if (!userRes.ok) {
      throw new Error(
        `取得使用者資料失敗：${userRes.status} ${getSpotifyErrorMessage(userData, userRes.statusText)}`
      );
    }

    const userId = userData.id;

    // 2. 建立新的 Spotify 播放清單
    const createPlaylistRes = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
  name: `🎧 ${targetPlaylist.theme || "Music Vibe 推薦歌單"}`,
  description: targetPlaylist.reasoning || "由 Music Vibe AI 生成的情境歌單",
  public: true,
}),
      }
    );

    const playlistData = await readSpotifyResponse(createPlaylistRes, "建立 Spotify 歌單");

    if (!createPlaylistRes.ok) {
      throw new Error(
        `建立 Spotify 歌單失敗：${createPlaylistRes.status} ${getSpotifyErrorMessage(
          playlistData,
          createPlaylistRes.statusText
        )}`
      );
    }

    const spotifyPlaylistId = playlistData.id;

    // 3. 搜尋每一首歌，取得 Spotify track URI
    const trackUris = [];

    for (const song of targetPlaylist.songs) {
      const query = encodeURIComponent(`${song.title} ${song.artist}`);

      const searchRes = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track&limit=1`,
        {
          headers: {
            Authorization: `Bearer ${spotifyToken}`,
          },
        }
      );

      const searchData = await readSpotifyResponse(searchRes, `搜尋歌曲：${song.title}`);

      if (!searchRes.ok) {
        throw new Error(
          `搜尋 Spotify 歌曲失敗：${searchRes.status} ${getSpotifyErrorMessage(
            searchData,
            searchRes.statusText
          )}`
        );
      }

      const foundTrack = searchData.tracks?.items?.[0];

      if (foundTrack?.uri) {
        trackUris.push(foundTrack.uri);
      } else {
        console.warn("Spotify 找不到歌曲：", song.title, song.artist);
      }
    }

    if (trackUris.length === 0) {
      throw new Error("Spotify 找不到這份歌單中的歌曲，請改用複製歌單文字。");
    }

    // 4. 把歌曲加入剛建立的 Spotify 歌單
    const addTracksRes = await fetch(
      `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: trackUris,
        }),
      }
    );

    const addTracksData = await readSpotifyResponse(addTracksRes, "加入歌曲到 Spotify 歌單");

    if (!addTracksRes.ok) {
      throw new Error(
        `加入歌曲到 Spotify 歌單失敗：${addTracksRes.status} ${getSpotifyErrorMessage(
          addTracksData,
          addTracksRes.statusText
        )}`
      );
    }

    setExportSuccess(true);
  } catch (err) {
    console.error("Spotify 匯出錯誤：", err);
    alert(
      `匯出失敗：${err.message}\n\n如果是授權過期，請重新點「連線至 Spotify 帳號」。`
    );
    setSpotifyToken(null);
  } finally {
    setIsExporting(false);
  }
};

  const copyTracklistToClipboard = () => {
    const targetPlaylist = selectedRecord ? selectedRecord.playlist : playlist;
    if (!targetPlaylist) return;
    
    let textToCopy = `🎧 ${targetPlaylist.theme}\n\n`;
    targetPlaylist.songs.forEach((song) => { 
      textToCopy += `${song.artist} - ${song.title}\n`; 
    });

    const copyAndOpenImportTool = () => {
  copyTracklistToClipboard();
  window.open("https://www.tunemymusic.com/transfer/text-file-to-spotify", "_blank");
};
    
    const textArea = document.createElement("textarea"); 
    textArea.value = textToCopy; 
    document.body.appendChild(textArea); 
    textArea.select();
    try { 
      document.execCommand('copy'); 
      setCopySuccess(true); 
      setTimeout(() => setCopySuccess(false), 2000); 
    } catch (err) { 
      alert('複製失敗，請手動圈選複製喔！'); 
    }
    document.body.removeChild(textArea);
  };

  // --- 歌單生成 API ---
  const generatePlaylist = async () => {
    if (!taste && !routine && !base64Data) {
      setError("請至少提供一些資訊讓我為您推薦！");
      return;
    }
    setLoading(true); setError(''); setPlaylist(null); stopDJVoice();
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const promptText = `作為 AI DJ，根據作息：${routine}，品味：${taste} 推薦專屬情境歌單。要求：推薦正好 6 首真實歌曲。djGreeting(30字開場白)。提供3個極淺粉彩顏色碼(themeColors)。`;
    
    const payload = {
      contents: [{ role: "user", parts: [{ text: promptText }, ...(base64Data ? [{ inlineData: { mimeType: 'image/jpeg', data: base64Data } }] : [])] }],
      generationConfig: { 
        responseMimeType: "application/json", 
        responseSchema: { 
          type: "OBJECT", 
          properties: { 
            theme: { type: "STRING" }, 
            djGreeting: { type: "STRING" }, 
            reasoning: { type: "STRING" }, 
            themeColors: { type: "ARRAY", items: { type: "STRING" } }, 
            songs: { 
              type: "ARRAY", 
              items: { type: "OBJECT", properties: { title: { type: "STRING" }, artist: { type: "STRING" }, reason: { type: "STRING" } }, required: ["title", "artist", "reason"] } 
            } 
          }, 
          required: ["theme", "djGreeting", "reasoning", "themeColors", "songs"] 
        } 
      }
    };

    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const resultText = (await response.json()).candidates?.[0]?.content?.parts?.[0]?.text;
      if (resultText) {
        const parsed = JSON.parse(resultText); 
        setPlaylist(parsed);
        if (parsed.themeColors?.length >= 2) setBgGradient(`linear-gradient(135deg, ${parsed.themeColors.join(', ')})`);
        if (parsed.djGreeting) setTimeout(() => playDJVoice(parsed.djGreeting), 500);
        
        const newRecord = { 
          id: Date.now().toString(), 
          timestamp: new Date().toLocaleString('zh-TW', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }), 
          routine: routine || '未指定', 
          taste: taste || '未指定', 
          image, 
          playlist: parsed 
        };
        const updated = [newRecord, ...history].slice(0, 15);
        setHistory(updated); 
        try { localStorage.setItem('vibe_history', JSON.stringify(updated)); } catch (e) {}
      }
    } catch (err) { 
      setError("生成發生錯誤，請重試"); 
    } finally { 
      setLoading(false); 
    }
  };

  const replaceSingleSong = async (index) => {
    setReplacingIndex(index); stopDJVoice(); 
    const target = playlist.songs[index];
    const list = playlist.songs.map(s => `${s.title} by ${s.artist}`).join(', ');
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const promptText = `換一首歌。❌ 不要推薦：${target.title}-${target.artist}。目前歌單(避重複)：${list}`;
    
    const payload = {
      contents: [{ role: "user", parts: [{ text: promptText }] }],
      generationConfig: { 
        responseMimeType: "application/json", 
        responseSchema: { type: "OBJECT", properties: { title: { type: "STRING" }, artist: { type: "STRING" }, reason: { type: "STRING" } }, required: ["title", "artist", "reason"] } 
      }
    };

    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const newSong = JSON.parse((await response.json()).candidates[0].content.parts[0].text);
      setPlaylist(prev => { 
        const s = [...prev.songs]; 
        s[index] = newSong; 
        return { ...prev, songs: s }; 
      });
      playDJVoice(`為您換成 ${newSong.artist} 的 ${newSong.title}`);
    } catch (e) {
      console.error(e);
    } finally { 
      setReplacingIndex(null); 
    }
  };

  const deleteHistoryItem = (id) => {
    const updated = history.filter(i => i.id !== id);
    setHistory(updated); 
    localStorage.setItem('vibe_history', JSON.stringify(updated));
    if (selectedRecord?.id === id) setSelectedRecord(null);
  };

  // --- 聊天室與邀請 API ---
  const startChatWithArtist = (artist) => {
    setSelectedArtist(artist);
    setChatMessages([{ sender: 'artist', text: `Hey！我是${artist.fullname}。有什麼想聊的嗎？` }]);
    setBgGradient(`linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)`);
  };

  const exitChat = () => {
    setSelectedArtist(null);
    setChatMessages([]);
  };

  const handleSendChatMessage = async () => {
    if (!chatInput.trim() || !selectedArtist) return;
    const userMsg = chatInput.trim(); 
    setChatInput('');
    const newMessages = [...chatMessages, { sender: 'user', text: userMsg }];
    setChatMessages(newMessages); 
    setIsChatTyping(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const conversationHistory = newMessages.slice(-4).map(m => `${m.sender === 'user' ? '粉絲' : selectedArtist.name}: ${m.text}`).join('\n');
    
    const promptText = `你現在是音樂人「${selectedArtist.fullname}」。請完全沉浸角色，絕不說自己是AI。風格：${selectedArtist.style}。對話紀錄：\n${conversationHistory}\n請以「${selectedArtist.name}」的口吻回覆最後一句話。約30~80字，善用Emoji。`;

    try {
      const response = await fetch(apiUrl, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: promptText }] }] }) 
      });
      const data = await response.json();
      const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (aiReply) setChatMessages(prev => [...prev, { sender: 'artist', text: aiReply }]);
    } catch (err) {
      setChatMessages(prev => [...prev, { sender: 'artist', text: '（訊號不太好，等等再聊喔！）' }]);
    } finally { 
      setIsChatTyping(false); 
    }
  };

  const handleInviteArtist = async () => {
    if (!inviteName.trim()) return;
    setIsInviting(true); 
    setInviteError('');
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const promptText = `請為這位音樂人創建聊天角色：${inviteName}。回傳JSON。要求：name(簡短稱呼), fullname, icon(單一Emoji), colorName(red, orange, amber, green, teal, blue, indigo, purple, pink, rose 之一), style(約50字個性設定)`;
    
    const payload = { 
      contents: [{ role: "user", parts: [{ text: promptText }] }], 
      generationConfig: { 
        responseMimeType: "application/json", 
        responseSchema: { 
          type: "OBJECT", 
          properties: { name: { type: "STRING" }, fullname: { type: "STRING" }, icon: { type: "STRING" }, colorName: { type: "STRING" }, style: { type: "STRING" } }, 
          required: ["name", "fullname", "icon", "colorName", "style"] 
        } 
      } 
    };

    try {
      const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error('API Error');
      const data = await response.json();
      const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!resultText) throw new Error('Empty');
      const result = JSON.parse(resultText);
      
      const safeColor = COLOR_MAP[result.colorName] ? result.colorName : 'purple';
      const newArtist = { 
        id: `custom_${Date.now()}`, 
        name: result.name, fullname: result.fullname, icon: result.icon, 
        colorName: safeColor, color: COLOR_MAP[safeColor].color, border: COLOR_MAP[safeColor].border, 
        style: result.style, isCustom: true 
      };

      const updatedCustomArtists = [...customArtists, newArtist];
      setCustomArtists(updatedCustomArtists); 
      localStorage.setItem('custom_artists', JSON.stringify(updatedCustomArtists));
      
      setShowInviteModal(false); 
      setInviteName('');
    } catch (err) { 
      setInviteError('無法生成該歌手，請換個名字試試！'); 
    } finally { 
      setIsInviting(false); 
    }
  };

  const deleteCustomArtist = (e, id) => {
    e.stopPropagation(); 
    const updated = customArtists.filter(a => a.id !== id);
    setCustomArtists(updated); 
    localStorage.setItem('custom_artists', JSON.stringify(updated));
  };

  // --- 捷徑連結 ---
  const getSpotifySearchUrl = (t, a) => `https://open.spotify.com/search/${encodeURIComponent(`track:${t} artist:${a}`)}`;
  const getYouTubeSearchUrl = (t, a) => `https://www.youtube.com/results?search_query=${encodeURIComponent(`${t} ${a}`)}`;

  // --- UI 渲染 ---
  return (
    <div className="min-h-screen text-slate-800 font-sans p-4 md:p-8 transition-all duration-1000 ease-in-out relative" style={{ background: bgGradient }}>
      
      {/* 匯出 Spotify Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
            <button onClick={() => {setShowExportModal(false); setExportSuccess(false);}} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 text-green-600 rounded-full"><SpotifyIcon /></div>
              <h3 className="text-2xl font-bold text-slate-800">匯入至 Spotify</h3>
            </div>
            {exportSuccess ? (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">匯入成功！</h4>
                <button onClick={() => setShowExportModal(false)} className="w-full py-3 mt-4 rounded-lg font-bold bg-green-500 text-white hover:bg-green-600 transition-all">完成</button>
              </div>
            ) : (
              <>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {spotifyToken ? "已獲得 Spotify 授權！可以直接建立。" : "只要兩步驟，就能把這份專屬歌單送進 Spotify 裡！"}
                </p>
                {spotifyToken ? (
                   <button onClick={handleDirectExport} disabled={isExporting} className={`w-full py-3 rounded-lg font-bold text-white transition-all flex justify-center items-center ${isExporting ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 shadow-md'}`}>
                     {isExporting ? <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>建立歌單中...</> : '✨ 一鍵匯入歌單'}
                   </button>
                ) : (
                  <div className="space-y-4">
                    <button onClick={handleSpotifyLogin} className="w-full py-3 rounded-lg font-bold text-slate-800 bg-green-400 hover:bg-green-500 transition-all shadow-md">
                      連線至 Spotify 帳號 (需部署至真實網域)
                    </button>
                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-slate-200"></div>
                      <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-medium uppercase">或使用複製替代方案</span>
                      <div className="flex-grow border-t border-slate-200"></div>
                    </div>
                    <button onClick={copyAndOpenImportTool} className={`w-full py-3 rounded-lg font-bold transition-all flex justify-center items-center ${copySuccess ? 'bg-slate-700 text-white' : 'bg-slate-800 text-white hover:bg-slate-900 shadow-md'}`}>
  {copySuccess ? '✅ 已複製！請在匯入工具貼上' : <><CopyIcon /> 複製並前往 Spotify 匯入工具</>}
</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* 邀請歌手 Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 relative">
            <button onClick={() => setShowInviteModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            <h3 className="text-xl font-bold text-slate-800 mb-2">邀請新歌手 🎟️</h3>
            <p className="text-sm text-slate-500 mb-4">輸入您想聊天的音樂人，AI 將自動還原他的個性和說話方式！</p>
            <input type="text" value={inviteName} onChange={e => setInviteName(e.target.value)} placeholder="例如：Lady Gaga, 周杰倫..." className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none mb-4" onKeyPress={e => e.key === 'Enter' && handleInviteArtist()} />
            {inviteError && <p className="text-xs text-red-500 mb-3">{inviteError}</p>}
            <button onClick={handleInviteArtist} disabled={isInviting || !inviteName.trim()} className={`w-full py-2.5 rounded-lg font-bold transition-all flex justify-center items-center ${isInviting ? 'bg-slate-200 text-slate-500' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
              {isInviting ? <><span className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin mr-2"></span>聯絡經紀人中...</> : '寄出邀請函'}
            </button>
          </div>
        </div>
      )}

      {/* 主要內容區 */}
      <div className="max-w-5xl mx-auto">
        {/* 頂部導覽列 */}
        <header className="mb-6 flex flex-col md:flex-row justify-between items-center bg-white/70 backdrop-blur-md py-4 px-6 rounded-2xl shadow-sm border border-white/60">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 flex items-center gap-2 mb-4 md:mb-0">
            Music Vibe 🎧
            {isSpeaking && (
              <span className="flex space-x-1 items-center h-4 ml-1">
                <span className="w-1 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                <span className="w-1 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                <span className="w-1 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
              </span>
            )}
          </h1>
          <div className="flex flex-wrap justify-center p-1 bg-slate-100/80 rounded-xl gap-1">
            <button onClick={() => handleTabSwitch('generator')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'generator' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>🎧 專屬電台</button>
            <button onClick={() => handleTabSwitch('history')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-1 ${activeTab === 'history' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
              📖 心情日記
              {history.length > 0 && <span className="bg-purple-100 text-purple-600 text-[10px] px-1.5 py-0.5 rounded-full">{history.length}</span>}
            </button>
            <button onClick={() => handleTabSwitch('chat')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'chat' ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>💬 歌手聊天室</button>
          </div>
        </header>

        {/* =========================================
            分頁 1：專屬電台 (主畫面)
        ========================================== */}
        {activeTab === 'generator' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
           {/* 左側：輸入區 */}
           <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/60">
             <div className="mb-6">
               <label className="block text-sm font-medium text-slate-600 mb-2">📸 畫面 (選填)</label>
               <div className="border-2 border-dashed border-slate-300 bg-white/50 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => fileInputRef.current?.click()}>
                 {image ? (
                   <div className="relative inline-block">
                     <img src={image} alt="Preview" className="max-h-48 rounded-lg mx-auto shadow-sm" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity"><span className="text-white text-sm font-medium">點擊更換</span></div>
                   </div>
                 ) : (
                   <div className="py-6 text-slate-400 text-sm">點擊上傳圖片</div>
                 )}
                 <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
               </div>
             </div>
             
             <div className="mb-6">
               <label className="block text-sm font-medium text-slate-600 mb-2">📝 當下情境</label>
               <input type="text" value={routine} onChange={(e) => setRoutine(e.target.value)} placeholder="例：下午喝咖啡..." className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 shadow-sm" />
             </div>
             
             <div className="mb-6">
               <label className="block text-sm font-medium text-slate-600 mb-3">🎵 想聽的曲風</label>
               {/* 8 個曲風分類方塊 */}
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                 {GENRE_CHIPS.map(genre => {
                   const isSelected = taste.split(',').map(t => t.trim()).includes(genre.label);
                   return (
                     <button key={genre.label} onClick={() => handleGenreToggle(genre.label)} className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-medium transition-all border shadow-sm ${isSelected ? 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700' : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'}`}>
                       <span>{genre.icon}</span><span>{genre.label}</span>
                     </button>
                   );
                 })}
               </div>
               <input type="text" value={taste} onChange={(e) => setTaste(e.target.value)} placeholder="或自己輸入其他歌手 / 曲風..." className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-purple-400 shadow-sm" />
             </div>
             
             <button onClick={generatePlaylist} disabled={loading} className={`w-full py-3.5 rounded-xl font-bold text-white transition-all shadow-md flex justify-center items-center gap-2 ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-900 hover:-translate-y-0.5'}`}>
               {loading ? 'DJ 正在為您調配 6 首推薦...' : '✨ 生成並存入日記'}
             </button>
             {error && <p className="mt-4 text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">{error}</p>}
           </div>

           {/* 右側：結果區 */}
           <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white min-h-[400px] flex flex-col relative pb-20">
             <h2 className="text-xl font-semibold mb-4 text-slate-700 flex items-center justify-between">
               <div className="flex items-center gap-2"><span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>專屬電台推薦</div>
               {playlist && !loading && (
                  <button onClick={() => setShowExportModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors shadow-sm">
                    <SpotifyIcon /> 匯出歌單
                  </button>
                )}
             </h2>

             {!playlist && !loading && <div className="flex-1 flex items-center justify-center text-slate-400">等待點播中...</div>}
             {loading && <div className="flex-1 flex items-center justify-center"><p className="text-slate-500">正在為您挑選 6 首歌...</p></div>}
             
             {playlist && !loading && (
               <div className="animate-fade-in flex-1 overflow-y-auto pr-2">
                 <h3 className="text-2xl font-bold text-slate-800 mb-3">{playlist.theme}</h3>
                 <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                   <div className="flex justify-between items-start mb-2">
                     <strong className="text-sm text-blue-700">🎙️ DJ 開場白</strong>
                     <button onClick={() => isSpeaking ? stopDJVoice() : playDJVoice(playlist.djGreeting)} className="text-xs px-2 py-1 bg-white border rounded-md">{isSpeaking ? '暫停' : '播放'}</button>
                   </div>
                   <p className="text-sm leading-relaxed">"{playlist.djGreeting}"</p>
                 </div>
                 
                 <div className="space-y-3">
                   {playlist.songs.map((song, idx) => (
                     <div key={idx} className="flex flex-col sm:flex-row justify-between p-4 bg-white border rounded-xl relative overflow-hidden group hover:border-purple-200 hover:shadow-sm transition-all">
                        {replacingIndex === idx && <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10"><span className="text-purple-700 text-sm font-bold">換歌中...</span></div>}
                       <div className="pr-4">
                         <div className="font-bold text-slate-800"><span className="text-purple-500 mr-2 text-sm">{idx + 1}.</span>{song.title} <span className="text-slate-500 font-normal ml-2 text-sm">/ {song.artist}</span></div>
                         <p className="text-xs text-slate-500 mt-1 pl-5">{song.reason}</p>
                       </div>
                       <div className="flex items-center space-x-1 shrink-0 mt-3 sm:mt-0 pl-5 sm:pl-0">
                         <button onClick={() => replaceSingleSong(idx)} className="p-2 hover:bg-blue-50 rounded-full text-slate-400 hover:text-blue-600"><RefreshIcon /></button>
                         <a href={getYouTubeSearchUrl(song.title, song.artist)} target="_blank" className="p-2 hover:bg-red-50 rounded-full text-slate-400 hover:text-red-500"><YouTubeIcon /></a>
                         <a href={getSpotifySearchUrl(song.title, song.artist)} target="_blank" className="p-2 hover:bg-green-50 rounded-full text-slate-400 hover:text-green-500"><SpotifyIcon /></a>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             )}
             <div className="absolute bottom-0 left-0 right-0 p-4 text-center border-t border-slate-100 bg-white/50 backdrop-blur-sm rounded-b-2xl">
               <button onClick={toggleRainSound} className={`px-5 py-2.5 rounded-full text-sm font-medium border shadow-sm transition-colors ${isRaining ? 'bg-blue-500 text-white border-blue-600' : 'bg-white text-slate-600 hover:bg-slate-50'}`}>
                 {isRaining ? '🌧️ 關閉雨聲' : '☁️ 開啟沉浸雨聲'}
               </button>
             </div>
           </div>
         </div>
        )}

        {/* =========================================
            分頁 2：歷史日記
        ========================================== */}
        {activeTab === 'history' && (
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border p-6 min-h-[600px] animate-fade-in">
             {!selectedRecord ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-800">📖 音樂心情日記</h2>
                    <span className="text-sm text-slate-500">已儲存 {history.length} 篇</span>
                  </div>
                  {history.length === 0 ? <div className="text-center py-20 text-slate-400">日記本是空的！去生成第一份歌單吧。</div> : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {history.map(record => (
                        <div key={record.id} onClick={() => {setSelectedRecord(record); stopDJVoice();}} className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transform transition-all cursor-pointer flex flex-col group">
                          <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex justify-between items-start group-hover:bg-purple-50/50 transition-colors">
                            <div><div className="text-xs font-semibold text-purple-500 mb-1">{record.timestamp}</div><h3 className="font-bold text-slate-800 group-hover:text-purple-700">{record.playlist.theme}</h3></div>
                            <button onClick={(e) => { e.stopPropagation(); deleteHistoryItem(record.id); }} className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2"><TrashIcon /></button>
                          </div>
                          <div className="p-4 flex gap-4 pointer-events-none">
                            {record.image ? <img src={record.image} className="w-16 h-16 rounded-lg object-cover shadow-sm" /> : <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center border">🎧</div>}
                            <div className="text-sm text-slate-700 flex flex-col justify-center gap-1"><span className="truncate">📝 {record.routine}</span><span className="truncate">🎵 {record.taste}</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
             ) : (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-center mb-6 border-b pb-4 border-slate-200">
                    <button onClick={() => { setSelectedRecord(null); stopDJVoice(); }} className="flex items-center gap-2 text-slate-500 hover:text-purple-600 font-bold bg-white px-4 py-2 rounded-lg border shadow-sm"><BackIcon /> 返回列表</button>
                    <button onClick={() => setShowExportModal(true)} className="flex items-center gap-1.5 px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-bold hover:bg-green-100 shadow-sm"><SpotifyIcon /> 匯出歌單</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 bg-white p-6 rounded-2xl border shadow-sm self-start">
                      <div className="text-sm font-bold text-purple-500 mb-4">{selectedRecord.timestamp}</div>
                      {selectedRecord.image && <img src={selectedRecord.image} className="w-full rounded-xl mb-4 border" />}
                      <div className="text-sm bg-slate-50 p-3 rounded-lg border mb-3"><strong>📝 情境：</strong><br/>{selectedRecord.routine}</div>
                      <div className="text-sm bg-slate-50 p-3 rounded-lg border"><strong>🎵 品味：</strong><br/>{selectedRecord.taste}</div>
                    </div>
                    <div className="md:col-span-2 bg-white p-6 rounded-2xl border shadow-sm">
                      <h3 className="text-3xl font-extrabold mb-6 text-slate-800">{selectedRecord.playlist.theme}</h3>
                      <div className="p-5 bg-slate-50 rounded-xl mb-6 border">
                        <div className="flex justify-between items-start mb-2"><strong className="text-blue-700">🎙️ DJ 開場白</strong><button onClick={() => isSpeaking ? stopDJVoice() : playDJVoice(selectedRecord.playlist.djGreeting)} className="text-xs border px-3 py-1.5 bg-white rounded-md font-medium hover:bg-blue-50">{isSpeaking ? '⏸️ 暫停' : '▶️ 播放'}</button></div>
                        <p className="text-sm leading-relaxed text-slate-700">"{selectedRecord.playlist.djGreeting}"</p>
                      </div>
                      <div className="space-y-3">
                        {selectedRecord.playlist.songs.map((song, idx) => (
                           <div key={idx} className="flex flex-col sm:flex-row justify-between p-4 border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                             <div className="font-bold text-slate-800"><span className="text-purple-500 mr-2">{idx+1}.</span>{song.title} <span className="font-normal text-slate-500 text-sm ml-2">/ {song.artist}</span></div>
                             <div className="flex gap-2 mt-3 sm:mt-0">
                               <a href={getYouTubeSearchUrl(song.title, song.artist)} target="_blank" className="p-2 hover:bg-red-50 rounded-full text-slate-400 hover:text-red-500"><YouTubeIcon /></a>
                               <a href={getSpotifySearchUrl(song.title, song.artist)} target="_blank" className="p-2 hover:bg-green-50 rounded-full text-slate-400 hover:text-green-500"><SpotifyIcon /></a>
                             </div>
                           </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
             )}
          </div>
        )}

        {/* =========================================
            分頁 3：歌手聊天室 (Chat)
        ========================================== */}
        {activeTab === 'chat' && (
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/60 overflow-hidden min-h-[600px] flex flex-col animate-fade-in">
            {!selectedArtist ? (
              <div className="p-8 flex-1 flex flex-col items-center">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-extrabold text-slate-800 mb-3">想和誰聊聊呢？</h2>
                  <p className="text-slate-500">跨越時空，與歐美傳奇音樂人一對一對話。</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {allArtists.map(artist => (
                    <button key={artist.id} onClick={() => startChatWithArtist(artist)} className="relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-purple-200 transition-all group">
                      {artist.isCustom && (
                        <div onClick={(e) => deleteCustomArtist(e, artist.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <TrashIcon />
                        </div>
                      )}
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 shadow-inner border-2 ${artist.color} ${artist.border} group-hover:scale-110 transition-transform duration-300`}>{artist.icon}</div>
                      <h3 className="font-bold text-slate-800 text-sm truncate w-full text-center">{artist.name}</h3>
                    </button>
                  ))}
                  
                  {/* 新增歌手按鈕 */}
                  <button onClick={() => setShowInviteModal(true)} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 hover:border-purple-400 hover:bg-purple-50 transition-all group">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-3 bg-white text-slate-400 group-hover:text-purple-600 transition-colors shadow-sm">➕</div>
                    <h3 className="font-bold text-slate-500 group-hover:text-purple-700 text-sm">邀請新歌手</h3>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col h-[600px]">
                <div className="bg-white px-6 py-4 border-b border-slate-100 flex items-center justify-between shadow-sm z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl border ${selectedArtist.color} ${selectedArtist.border}`}>{selectedArtist.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">{selectedArtist.fullname}</h3>
                      <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span><span className="text-xs text-slate-500">在線上</span></div>
                    </div>
                  </div>
                  <button onClick={exitChat} className="text-slate-400 hover:text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 text-sm font-medium transition-colors">離開聊天</button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50/50" ref={chatScrollRef}>
                  <div className="space-y-6">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                        {msg.sender === 'artist' && <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border mr-2 shrink-0 ${selectedArtist.color} ${selectedArtist.border}`}>{selectedArtist.icon}</div>}
                        <div className={`max-w-[80%] md:max-w-[70%] px-4 py-3 rounded-2xl text-sm md:text-base ${msg.sender === 'user' ? 'bg-purple-600 text-white rounded-br-sm shadow-md' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm'}`}>
                          <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    {isChatTyping && (
                      <div className="flex justify-start animate-fade-in">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border mr-2 shrink-0 ${selectedArtist.color} ${selectedArtist.border}`}>{selectedArtist.icon}</div>
                        <div className="bg-white border px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span><span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-2 max-w-4xl mx-auto">
                    <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()} placeholder={`回覆 ${selectedArtist.name}...`} disabled={isChatTyping} className="flex-1 bg-slate-50 border border-slate-200 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white" />
                    <button onClick={handleSendChatMessage} disabled={isChatTyping || !chatInput.trim()} className={`p-3 rounded-full flex items-center justify-center ${isChatTyping || !chatInput.trim() ? 'bg-slate-100 text-slate-400' : 'bg-purple-600 text-white shadow-md hover:bg-purple-700 hover:scale-105'}`}><SendIcon /></button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}