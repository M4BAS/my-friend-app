import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    emoji: "🛡️",
    quality: "I've Got Your Back",
    question: "When things get tough, do you feel like I'm actually there for you?",
    options: [
      { label: "Yes, always 🙌", positive: true },
      { label: "Most of the time", positive: true },
      { label: "Sometimes", positive: false },
      { label: "Not really", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `That means everything, ${name}. Showing up for you is something I never take lightly. 💙`
        : `That's fair — and I hear you. I want to do better at being there when it counts most.`,
    color: "#FF6B6B",
  },
  {
    id: 2,
    emoji: "😂",
    quality: "I Make You Laugh",
    question: "Be honest — do I actually make you laugh or am I just cringe?",
    options: [
      { label: "You're genuinely funny 😂", positive: true },
      { label: "Sometimes you crack me up", positive: true },
      { label: "More cringe than funny 😬", positive: false },
      { label: "Both honestly", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `Haha! I'll take it. Making you smile is one of my favourite things, ${name}. 😄`
        : `Okay okay, fair enough. I'll work on my material 😂 but at least we laugh about it!`,
    color: "#FFD93D",
  },
  {
    id: 3,
    emoji: "🎯",
    quality: "I Actually Listen",
    question: "When you're talking, do you feel like I'm genuinely listening — or just waiting to talk?",
    options: [
      { label: "You really listen 💛", positive: true },
      { label: "Usually yes", positive: true },
      { label: "You drift off sometimes", positive: false },
      { label: "Honestly not always", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `I'm so glad you feel heard, ${name}. What you say matters to me — every bit of it.`
        : `You deserve someone who hangs on every word you say. I'm going to do better at that.`,
    color: "#6BCB77",
  },
  {
    id: 4,
    emoji: "🌱",
    quality: "I Push You Forward",
    question: "Do you feel like I encourage your goals and dreams?",
    options: [
      { label: "You're my biggest hype person 🙌", positive: true },
      { label: "You do encourage me", positive: true },
      { label: "You could do more", positive: false },
      { label: "Not really", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `Your dreams are everything, ${name}. I'll keep cheering you on no matter what. 🌟`
        : `Noted. You deserve a friend who never lets you forget how capable you are. That's a promise.`,
    color: "#4D96FF",
  },
  {
    id: 5,
    emoji: "🤝",
    quality: "I'm Real With You",
    question: "Do you feel like I tell you the truth, even when it's hard to hear?",
    options: [
      { label: "Yes — brutally honest 😅", positive: true },
      { label: "You're honest but kind", positive: true },
      { label: "You tell me what I want to hear", positive: false },
      { label: "I'm not sure", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `Good. I'd rather you trust my honesty than doubt my loyalty, ${name}. Always. 💯`
        : `Real talk: you deserve someone who keeps it 100 with you. I'll be more upfront, I promise.`,
    color: "#C77DFF",
  },
  {
    id: 6,
    emoji: "💡",
    quality: "I Keep Things Fun",
    question: "Would you say our time together is actually fun?",
    options: [
      { label: "Always a good time 🎉", positive: true },
      { label: "Yeah, mostly fun", positive: true },
      { label: "It could be more exciting", positive: false },
      { label: "We need new ideas tbh", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `Let's keep that energy going, ${name}! I never want our time together to feel boring. 🎊`
        : `Challenge accepted. I'm already thinking of ideas to make things way more interesting 👀`,
    color: "#FF9A3C",
  },
  {
    id: 7,
    emoji: "🤫",
    quality: "Your Secrets Are Safe",
    question: "Do you trust me with the things you don't tell everyone?",
    options: [
      { label: "With my life 🔒", positive: true },
      { label: "Yes, I trust you", positive: true },
      { label: "I'm still building that trust", positive: false },
      { label: "Not quite yet", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `That trust means more than you know, ${name}. It stays locked — forever. 🔐`
        : `That's okay. Trust is earned, not given — and I'm not done earning yours yet. No rush.`,
    color: "#5BC0EB",
  },
  {
    id: 8,
    emoji: "🧠",
    quality: "I Challenge You",
    question: "Do I ever push you to think differently or step outside your comfort zone?",
    options: [
      { label: "You challenge me a lot 🔥", positive: true },
      { label: "Sometimes you do", positive: true },
      { label: "Not really", positive: false },
      { label: "You just go along with everything", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `Growth is the goal, ${name}. I'll never stop pushing you to become your best self. 💪`
        : `A good friend should challenge you, not just validate you. I'll bring that energy more. 🔑`,
    color: "#9B5DE5",
  },
  {
    id: 9,
    emoji: "📱",
    quality: "I Actually Check In",
    question: "Do you feel like I check on you — not just when I need something?",
    options: [
      { label: "Yes, you always check in 💌", positive: true },
      { label: "You do reach out first", positive: true },
      { label: "It's usually me who texts first", positive: false },
      { label: "Not really", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `You should never have to wonder if I'm thinking about you, ${name}. Because I always am. 💬`
        : `You're right — that's on me. I'm going to be more intentional about reaching out first.`,
    color: "#F15BB5",
  },
  {
    id: 10,
    emoji: "🌧️",
    quality: "I Show Up In Hard Times",
    question: "Last one — when you were going through something rough, was I actually there?",
    options: [
      { label: "You showed up 100% 🫂", positive: true },
      { label: "You were there for me", positive: true },
      { label: "You could've been more present", positive: false },
      { label: "I felt alone in that", positive: false },
    ],
    response: (name, ans) =>
      ans.positive
        ? `The hard moments are when it matters most. I'm glad you didn't face them alone, ${name}. 🌧️❤️`
        : `I'm really sorry I wasn't fully there. You deserved more from me and I won't forget that.`,
    color: "#00BBF9",
  },
];

const poemsByName = {
  sarah:    ["Steady and sure — that's what I see,", "someone who doesn't fold under pressure.", "I want to be the friend who sees that clearly,", "", "and treats your trust like treasure."],
  jessica:  ["There's something bold in how you show up,", "like you know exactly who you are.", "I want to be the friend who keeps that fire,", "", "the one who sees your star."],
  jennifer: ["Warm and real — no pretending,", "just someone you can count on fully.", "That's what I want to give you back,", "", "completely, honestly, truly."],
  ashley:   ["You carry a lot more than people notice,", "behind the smile, behind the laugh.", "I want to be the one who sees the whole you —", "", "not just the easy half."],
  amanda:   ["Worthy of love — that's what it means,", "and every bit of it is true.", "I want to be the kind of friend", "", "who keeps on proving that to you."],
  stephanie: ["Crowned — there's royalty in that,", "even on the ordinary days.", "I want to be the one who reminds you", "", "of your worth in quiet ways."],
  melissa:  ["Sweet like honey — your name carries that,", "a warmth that draws the people near.", "I want to be the one who stays", "", "long after the rest disappear."],
  nicole:   ["Victory of the people — bold,", "a name that carries weight and will.", "I want to be beside that strength,", "", "and be your person still."],
  elizabeth: ["A name that's stood through centuries,", "classic, full of depth and grace.", "I want to be the constant friend —", "", "the one who holds a steady place."],
  rachel:   ["Like a lamb — gentle, but not weak,", "there's more beneath the soft exterior.", "I see the strength you keep inside,", "", "and to me, nothing is superior."],
  laura:    ["Laurel — worn by those who earned it,", "and you earn yours every day.", "I want to be the friend who sees it,", "", "even when you look away."],
  emily:    ["Hardworking, earnest, real —", "that's the spirit of your name.", "I want to match that same devotion,", "", "show up every time you came."],
  mary:     ["Beloved — deep and timeless,", "a name that's carried generations.", "I want to love you back like that —", "", "no conditions, no hesitations."],
  lisa:     ["Devoted — that's the heart of it,", "a loyalty that doesn't bend.", "I want to give that back to you,", "", "be that kind of friend."],
  sandra:   ["Defender of people — strong,", "the kind who stands when others run.", "Let me stand beside you too,", "", "before the hard days come."],
  patricia: ["Noble — and you live up to it,", "in how you carry everything.", "I want to be the friend who honours that,", "", "who sees the grace you bring."],
  linda:    ["Beautiful — and yes, that's true,", "but deeper than the eye can see.", "I want to be the friend who knows you fully —", "", "who you are, who you want to be."],
  barbara:  ["A stranger — and yet somehow,", "the best ones always start that way.", "I want to be less of a stranger,", "", "more of yours, each day."],
  margaret: ["A pearl — rare and patient,", "worth the time it takes to find.", "I want to be the friend who takes that time,", "", "and never leaves you behind."],
  susan:    ["Graceful lily — soft but rooted,", "beautiful in every single light.", "I want to be the one beside you,", "", "in the morning and the night."],
  dorothy:  ["Gift of God — and that's exactly,", "what it feels like knowing you.", "I want to make sure you feel that same thing —", "", "that you're a gift I'm grateful for too."],
  helen:    ["Bright as the sun — and honestly,", "that's the only way I'd say it.", "You light up what was dim before,", "", "and I never want to waste it."],
  diana:    ["Divine — luminous, above,", "a name that reaches for the sky.", "I want to be the friend who keeps you grounded,", "", "while you continue to fly."],
  ruth:     ["Loyal beyond what's expected —", "that's what your name has always meant.", "I want to match that same devotion,", "", "be exactly where I say I went."],
  sharon:   ["A plain — wide, open, honest,", "nothing hidden, nothing fake.", "That's the kind of friendship I want too —", "", "real for real, give and take."],
  carol:    ["A song — joyful and bright,", "the kind that lifts the room.", "I want to be the one who keeps that melody going,", "", "and never lets it tune."],
  janet:    ["God is gracious — yes, always,", "and grace is what you give.", "I want to give it back the same way,", "", "in every day we live."],
  catherine: ["Pure — and there's a quiet power there,", "an honesty that's rare to find.", "I want to be the friend who meets that,", "", "who shows up with the same kind."],
  frances:  ["Free — untethered, full of life,", "a spirit that won't be contained.", "I want to be the one who runs beside you,", "", "through the sunshine and the rain."],
  ann:      ["Grace — short and sure,", "just like the way you carry things.", "I want to be that steady presence,", "", "in the quiet that friendship brings."],
  joyce:    ["Joyful — and yes, you are,", "even when the days are long.", "I want to be the friend who keeps that joy,", "", "helps you hold on to the song."],
  alice:    ["Noble — true and steady,", "a name that doesn't bend or break.", "I want to be that kind of friend —", "", "solid, real, for your sake."],
  anna:     ["Grace — again and again,", "a name that keeps on giving.", "I want to be the grace in your story,", "", "worth the life we're living."],
  grace:    ["One word — and it says everything,", "the way you carry what you've been through.", "I want to be the friend who helps", "", "make carrying it easier for you."],
  rose:     ["Soft but full of thorns when needed —", "you protect what matters most.", "I want to be the one beside you,", "", "on the days that cost the most."],
  cynthia:  ["Moon goddess — radiant, constant,", "lighting up the darkest night.", "I want to be your steady presence,", "", "when you're searching for the light."],
  angela:   ["Messenger — carrying something important,", "worth stopping everything to hear.", "I want to be the one who listens,", "", "every time you come near."],
  brenda:   ["Sword — sharp and purposeful,", "you cut through all the noise.", "I want to be the friend who stands with you,", "", "and amplifies your voice."],
  pamela:   ["All sweetness — soft and full,", "a warmth that doesn't ask for much.", "I want to give it back the same way,", "", "show up gently, keep in touch."],
  virginia: ["Pure and full of spirit —", "a name that holds a lot of life.", "I want to be the kind of friend", "", "who shows up through the strife."],
  victoria: ["Victory — and you've earned yours,", "through every single thing you've faced.", "I want to be the one beside you,", "", "making sure no win goes to waste."],
  stephanie:["Crowned — there's royalty in that,", "even on the ordinary days.", "I want to be the one who reminds you", "", "of your worth in quiet ways."],
  deborah:  ["A bee — industrious, purposeful,", "someone people look up to.", "I see that in the way you move,", "", "and I want to stand behind you too."],
  karen:    ["Pure — clear and uncomplicated,", "you say what you mean and mean what you say.", "I want to be that honest too —", "", "with you, each and every day."],
  donna:    ["Lady — with quiet dignity,", "the kind that doesn't need to shout.", "I see it clearly in you,", "", "inside and out."],
  gloria:   ["Glory — radiant and full,", "a name that demands the light.", "I want to be the one who stands beside you,", "", "and watches you shine bright."],
  cheryl:   ["Beloved — genuinely,", "not just in name but in truth.", "I want to make you feel that daily,", "", "the way I did from the start."],
  joan:     ["God is gracious — steadfast,", "a name with deep roots and weight.", "I want to be that rooted presence,", "", "showing up early, never late."],
  helen:    ["Bright as the sun — and honestly,", "that's the only way I'd say it.", "You light up what was dim before,", "", "and I never want to waste it."],
  betty:    ["Devoted — wholly, truly,", "a heart that doesn't hold back.", "I want to give you that same thing —", "", "full presence, not a lack."],
  dorothy:  ["Gift of God — and that's exactly,", "what it feels like knowing you.", "I want to make sure you feel that same thing —", "", "that you're a gift I'm grateful for too."],
};

const defaultPoems = [
  ["Not everyone stays when things get hard,", "not everyone shows up without a reason.", "But a real friend — the kind worth keeping —", "", "stays through every single season."],
  ["I don't need a reason to be here —", "I just need to know that you're okay.", "That's the kind of friend I want to be,", "", "every single ordinary day."],
  ["Some people drift in and out like tides,", "here for a moment, gone with the wind.", "But I want to be the kind who anchors —", "", "still here when the storm begins."],
  ["Friendship isn't just the good-time laughs,", "it's the 2am, the doubt, the fear.", "It's choosing to show up anyway —", "", "and I want to always choose to be here."],
  ["You deserve someone in your corner,", "who means it when they say they care.", "That's all I'm trying to be for you —", "", "genuinely, honestly there."],
];

const getPoem = (name) => {
  const key = name.trim().toLowerCase();
  if (poemsByName[key]) return poemsByName[key];
  // Fallback: pick a default based on name's char code so it's consistent
  const idx = name.charCodeAt(0) % defaultPoems.length;
  return defaultPoems[idx];
};

const buildPoemLines = (lines) => {
  let delay = 0.2;
  return lines.map(line => {
    const item = { line, delay };
    delay += line === "" ? 0.3 : 0.5;
    return item;
  });
};

const FloatingHeart = ({ style }) => (
  <div style={{
    position: "absolute", fontSize: `${style.size}px`,
    left: `${style.x}%`, top: `${style.y}%`, opacity: style.opacity,
    animation: `floatHeart ${style.duration}s ease-in-out ${style.delay}s infinite alternate`,
    pointerEvents: "none", zIndex: 0,
  }}>
    {style.char}
  </div>
);

// ⚠️ REPLACE THESE WITH YOUR OWN SUPABASE VALUES
const SUPABASE_URL = "https://mxbdtciwxbkhqrlrvqqp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YmR0Y2l3eGJraHFybHJ2cXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMjcyNTksImV4cCI6MjA4NzcwMzI1OX0.Kqn54xAXnBVIVO1XGOM61MKuNOghjnm8TLWXk8FOnlA";

const supabase = {
  async insert(data) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(await res.text());
  },
  async fetchAll() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/responses?order=created_at.desc`, {
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  },
};

const ADMIN_CODE = "showme";

function AdminView({ onExit }) {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    supabase.fetchAll()
      .then(data => setResponses(data || []))
      .catch(e => setError("Could not load responses. Check your Supabase config."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="screen" style={{ justifyContent: "flex-start", paddingTop: 50, gap: 0 }}>
      <div className="tag">Admin View 🔐</div>
      <h1 className="big" style={{ marginBottom: 8 }}>Her <span>Responses</span></h1>
      <p className="sub" style={{ marginBottom: 24 }}>
        {loading ? "Loading..." : error ? error : responses.length === 0 ? "No responses yet — share the link first! 💌" : `${responses.length} response${responses.length > 1 ? "s" : ""} received`}
      </p>

      {!loading && !error && responses.map((r, i) => (
        <div key={i} className="admin-card" style={{ animationDelay: `${i * 0.08}s` }}>
          <div className="admin-card-header">
            <span className="admin-name">{r.name}</span>
            <span className="admin-score admin-score-badge">{r.positive_count}/{r.total_questions} positive</span>
            <span className="admin-time">{new Date(r.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</span>
          </div>
          <div className="admin-score-bar">
            <div className="admin-score-fill" style={{ width: `${(r.positive_count / r.total_questions) * 100}%` }} />
          </div>
          <div className="admin-answers">
            {(r.answers || []).map((a, j) => {
              const qItem = questions.find(q => q.id === a.id);
              return (
                <div key={j} className={`admin-answer-row ${a.positive ? "ans-pos" : "ans-neg"}`}>
                  <span>{qItem?.emoji}</span>
                  <span className="admin-q-label">{qItem?.quality}</span>
                  <span className="admin-ans-label">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <button className="btn-primary" style={{ marginTop: 24 }} onClick={onExit}>
        ← Back
      </button>
    </div>
  );
}

export default function App() {
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResponse, setShowResponse] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [done, setDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [secretInput, setSecretInput] = useState("");
  const [secretVisible, setSecretVisible] = useState(false);
  const [secretError, setSecretError] = useState(false);

  const [hearts] = useState(() =>
    Array.from({ length: 16 }, (_, i) => ({
      size: 10 + Math.random() * 20, x: Math.random() * 100, y: Math.random() * 100,
      opacity: 0.05 + Math.random() * 0.08, duration: 3 + Math.random() * 4,
      delay: Math.random() * 3, char: ["❤️","💕","✨","💫","🌸"][Math.floor(Math.random() * 5)],
    }))
  );

  const q = questions[current];
  const positiveCount = answers.filter(a => a.positive).length;

  const handleAnswer = (opt) => {
    if (showResponse || transitioning) return;
    setSelectedOption(opt);
    setAnswers(prev => [...prev, { id: q.id, ...opt }]);
    setShowResponse(true);
  };

  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent(c => c + 1);
        setShowResponse(false);
        setSelectedOption(null);
      }
      setTransitioning(false);
    }, 400);
  };

  // Save to Supabase when done
  useEffect(() => {
    if (!done || answers.length === 0) return;
    supabase.insert({
      name,
      answers,
      positive_count: answers.filter(a => a.positive).length,
      total_questions: questions.length,
    }).catch(e => console.error("Save failed:", e));
  }, [done]);

  const handleSecretSubmit = () => {
    if (secretInput.trim().toLowerCase() === ADMIN_CODE) {
      setAdminMode(true);
      setSecretError(false);
    } else {
      setSecretError(true);
      setTimeout(() => setSecretError(false), 1500);
    }
    setSecretInput("");
  };

  const progress = ((current + (showResponse ? 1 : 0)) / questions.length) * 100;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0a12; min-height: 100vh; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

        @keyframes floatHeart { from { transform: translateY(0) rotate(-5deg); } to { transform: translateY(-18px) rotate(5deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.88); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 20px rgba(255,107,157,0.3); } 50% { box-shadow: 0 0 45px rgba(255,107,157,0.6); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes heartBeat { 0%,100% { transform: scale(1); } 14% { transform: scale(1.15); } 28% { transform: scale(1); } 42% { transform: scale(1.1); } 70% { transform: scale(1); } }

        .wrap { min-height: 100vh; position: relative; overflow: hidden; }
        .screen { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 40px 20px; text-align: center; animation: fadeUp 0.7s ease both; }
        .tag { display: inline-block; background: linear-gradient(135deg, rgba(255,107,157,0.15), rgba(199,125,255,0.15)); border: 1px solid rgba(255,107,157,0.25); color: #FF6B9D; font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; padding: 6px 16px; border-radius: 100px; margin-bottom: 20px; }
        h1.big { font-family: 'Playfair Display', serif; font-size: clamp(32px, 6vw, 60px); font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 14px; }
        h1.big span { background: linear-gradient(135deg, #FF6B9D, #C77DFF, #FF6B6B); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; }
        .sub { color: rgba(255,255,255,0.45); font-size: 15px; font-weight: 300; max-width: 400px; line-height: 1.7; margin-bottom: 32px; }
        .btn-primary { background: linear-gradient(135deg, #FF6B9D, #C77DFF); color: white; border: none; padding: 15px 38px; border-radius: 100px; font-size: 15px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; animation: pulse 2.5s ease-in-out infinite; }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 8px 30px rgba(255,107,157,0.45); }
        .btn-primary:disabled { opacity: 0.35; animation: none; cursor: not-allowed; }

        .name-wrap { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; max-width: 300px; }
        .name-input { width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,107,157,0.3); border-radius: 100px; padding: 14px 22px; font-size: 16px; font-family: 'DM Sans', sans-serif; color: #fff; outline: none; text-align: center; transition: border-color 0.3s, box-shadow 0.3s; }
        .name-input::placeholder { color: rgba(255,255,255,0.22); }
        .name-input:focus { border-color: rgba(255,107,157,0.65); box-shadow: 0 0 18px rgba(255,107,157,0.15); }

        .progress-wrap { width: 100%; max-width: 480px; padding: 0 4px; margin-bottom: 8px; position: relative; z-index: 1; }
        .progress-meta { display: flex; justify-content: space-between; color: rgba(255,255,255,0.3); font-size: 11px; margin-bottom: 7px; }
        .progress-track { height: 3px; background: rgba(255,255,255,0.07); border-radius: 100px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #FF6B9D, #C77DFF); border-radius: 100px; transition: width 0.5s ease; }

        .q-wrap { width: 100%; max-width: 520px; position: relative; z-index: 1; }
        .q-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 32px 28px; animation: popIn 0.5s ease both; }
        .q-emoji { font-size: 38px; margin-bottom: 10px; display: block; animation: heartBeat 2.5s ease-in-out infinite; }
        .q-quality { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 14px; }
        .q-text { font-family: 'Playfair Display', serif; font-size: clamp(17px, 3vw, 22px); font-weight: 700; color: #fff; line-height: 1.4; margin-bottom: 24px; }
        .options { display: flex; flex-direction: column; gap: 10px; }
        .opt-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 13px 18px; color: rgba(255,255,255,0.75); font-size: 14px; font-family: 'DM Sans', sans-serif; font-weight: 400; cursor: pointer; text-align: left; transition: all 0.2s ease; }
        .opt-btn:hover:not(:disabled) { background: rgba(255,107,157,0.1); border-color: rgba(255,107,157,0.3); color: #fff; transform: translateX(4px); }
        .opt-btn.selected-pos { background: rgba(107,203,119,0.12); border-color: rgba(107,203,119,0.5); color: #6BCB77; }
        .opt-btn.selected-neg { background: rgba(255,107,107,0.1); border-color: rgba(255,107,107,0.4); color: #FF9A9A; }
        .opt-btn:disabled { cursor: default; opacity: 0.45; }
        .opt-btn.selected-pos:disabled, .opt-btn.selected-neg:disabled { opacity: 1; }

        .response-box { margin-top: 18px; background: linear-gradient(135deg, rgba(255,107,157,0.08), rgba(199,125,255,0.08)); border: 1px solid rgba(255,107,157,0.2); border-radius: 16px; padding: 18px 20px; text-align: left; animation: slideDown 0.4s ease both; }
        .response-box p { color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.7; font-style: italic; font-weight: 300; }
        .next-btn { margin-top: 14px; background: none; border: 1px solid rgba(255,107,157,0.35); color: #FF6B9D; padding: 10px 26px; border-radius: 100px; font-size: 13px; font-family: 'DM Sans', sans-serif; font-weight: 500; cursor: pointer; width: 100%; transition: all 0.2s; }
        .next-btn:hover { background: rgba(255,107,157,0.1); border-color: rgba(255,107,157,0.6); }

        .results-grid { display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 480px; margin: 20px 0; max-height: 340px; overflow-y: auto; padding-right: 4px; }
        .results-grid::-webkit-scrollbar { width: 4px; }
        .results-grid::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); border-radius: 4px; }
        .results-grid::-webkit-scrollbar-thumb { background: rgba(255,107,157,0.3); border-radius: 4px; }
        .result-row { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 12px 16px; text-align: left; animation: fadeUp 0.4s ease both; }
        .result-emoji { font-size: 20px; flex-shrink: 0; }
        .result-text { flex: 1; }
        .result-quality { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.8); }
        .result-answer { font-size: 12px; color: rgba(255,255,255,0.35); margin-top: 2px; }
        .result-badge { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; flex-shrink: 0; }
        .badge-pos { background: rgba(107,203,119,0.2); color: #6BCB77; }
        .badge-neg { background: rgba(255,107,107,0.15); color: #FF9A9A; }
        .score-bar { width: 100%; max-width: 480px; margin-bottom: 20px; }
        .score-label { display: flex; justify-content: space-between; color: rgba(255,255,255,0.4); font-size: 12px; margin-bottom: 8px; }
        .score-track { height: 6px; background: rgba(255,255,255,0.07); border-radius: 100px; overflow: hidden; }
        .score-fill { height: 100%; border-radius: 100px; background: linear-gradient(90deg, #FF6B9D, #C77DFF); transition: width 1s ease; }
        .final-msg { background: linear-gradient(135deg, rgba(255,107,157,0.1), rgba(199,125,255,0.1)); border: 1px solid rgba(255,107,157,0.25); border-radius: 20px; padding: 28px 24px; text-align: center; max-width: 480px; width: 100%; animation: popIn 0.6s ease both; }
        .final-msg h2 { font-family: 'Playfair Display', serif; font-size: clamp(18px, 3vw, 24px); color: #fff; margin-bottom: 10px; }
        .final-msg p { color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.75; font-weight: 300; }
        .final-msg p strong { color: #FF6B9D; font-weight: 500; }
        .divider { width: 36px; height: 2px; background: linear-gradient(90deg, #FF6B9D, #C77DFF); margin: 14px auto; border-radius: 100px; }

        .poem-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,107,157,0.15); border-radius: 24px; padding: 32px 28px; max-width: 400px; width: 100%; margin-bottom: 28px; text-align: center; position: relative; overflow: hidden; }
        .poem-card::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at top, rgba(255,107,157,0.05), transparent 70%); pointer-events: none; }
        .poem-line { font-family: 'Playfair Display', serif; font-size: clamp(14px, 2.5vw, 16px); color: rgba(255,255,255,0.75); line-height: 1.9; font-style: italic; font-weight: 400; opacity: 0; animation: fadeUp 0.7s ease both; }
        .poem-divider { width: 30px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,157,0.6), transparent); margin: 16px auto 12px; opacity: 0; animation: fadeUp 0.5s ease both; }
        .poem-sig { font-family: 'DM Sans', sans-serif; font-size: 13px; color: #FF6B9D; letter-spacing: 0.5px; font-weight: 400; opacity: 0; animation: fadeUp 0.5s ease both; }

        .admin-card { width: 100%; max-width: 520px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 20px; margin-bottom: 16px; animation: fadeUp 0.5s ease both; }
        .admin-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
        .admin-name { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: #fff; flex: 1; }
        .admin-score-badge { background: linear-gradient(135deg, rgba(255,107,157,0.2), rgba(199,125,255,0.2)); border: 1px solid rgba(255,107,157,0.3); color: #FF6B9D; font-size: 12px; font-weight: 500; padding: 4px 12px; border-radius: 100px; }
        .admin-time { color: rgba(255,255,255,0.3); font-size: 11px; }
        .admin-score-bar { height: 3px; background: rgba(255,255,255,0.07); border-radius: 100px; overflow: hidden; margin-bottom: 14px; }
        .admin-score-fill { height: 100%; background: linear-gradient(90deg, #FF6B9D, #C77DFF); border-radius: 100px; }
        .admin-answers { display: flex; flex-direction: column; gap: 8px; }
        .admin-answer-row { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 10px; font-size: 13px; }
        .ans-pos { background: rgba(107,203,119,0.08); border: 1px solid rgba(107,203,119,0.2); }
        .ans-neg { background: rgba(255,107,107,0.07); border: 1px solid rgba(255,107,107,0.15); }
        .admin-q-label { color: rgba(255,255,255,0.5); flex: 1; font-size: 12px; }
        .admin-ans-label { color: rgba(255,255,255,0.85); font-weight: 500; font-size: 12px; text-align: right; }

        .secret-wrap { position: fixed; bottom: 20px; right: 20px; z-index: 100; display: flex; gap: 8px; align-items: center; }
        .secret-input { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 100px; padding: 8px 16px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: #fff; outline: none; width: 130px; transition: all 0.3s; }
        .secret-input:focus { border-color: rgba(255,107,157,0.4); width: 160px; }
        .secret-input.error { border-color: rgba(255,80,80,0.6); animation: shake 0.3s ease; }
        .secret-input::placeholder { color: rgba(255,255,255,0.15); }
        .secret-btn { background: rgba(255,107,157,0.15); border: 1px solid rgba(255,107,157,0.3); color: #FF6B9D; padding: 8px 14px; border-radius: 100px; font-size: 12px; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; }
        .secret-btn:hover { background: rgba(255,107,157,0.25); }
        @keyframes shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
      `}</style>

      <div className="wrap">
        {hearts.map((h, i) => <FloatingHeart key={i} style={h} />)}

        {/* ADMIN VIEW */}
        {adminMode && <AdminView onExit={() => setAdminMode(false)} />}

        {/* SECRET CODE ENTRY — always visible in corner */}
        {!adminMode && (
          <div className="secret-wrap">
            <input
              className={`secret-input${secretError ? " error" : ""}`}
              type="password"
              placeholder="🔐 admin"
              value={secretInput}
              onChange={e => setSecretInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSecretSubmit()}
            />
            <button className="secret-btn" onClick={handleSecretSubmit}>→</button>
          </div>
        )}

        {/* USER SCREENS */}
        {!adminMode && (<>
        {/* STEP 1: NAME */}
        {!nameSubmitted && (
          <div className="screen">
            <div className="tag">Hey you 💌</div>
            <h1 className="big">What's your <span>name?</span></h1>
            <p className="sub">made for you ✨</p>
            <div className="name-wrap">
              <input
                className="name-input"
                type="text"
                placeholder="Your name..."
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && name.trim() && setNameSubmitted(true)}
                autoFocus
              />
              <button className="btn-primary" onClick={() => setNameSubmitted(true)} disabled={!name.trim()}>
                Continue ✨
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: WELCOME */}
        {nameSubmitted && !started && (
          <div className="screen">
            <div className="tag">Just for you 💌</div>
            <h1 className="big">Hey <span>{name}</span> 🌸</h1>

            <div className="poem-card">
              {buildPoemLines(getPoem(name)).map((item, i) =>
                item.line === "" ? (
                  <br key={i} />
                ) : (
                  <p key={i} className="poem-line" style={{ animationDelay: `${item.delay}s` }}>
                    {item.line}
                  </p>
                )
              )}
              {(() => {
                const totalDelay = buildPoemLines(getPoem(name)).reduce((acc, item) => Math.max(acc, item.delay), 0) + 0.5;
                return <>
                  <div className="poem-divider" style={{ animationDelay: `${totalDelay}s` }} />
                  <p className="poem-sig" style={{ animationDelay: `${totalDelay + 0.3}s` }}>— your friend 🌸</p>
                </>;
              })()}
            </div>

            <button className="btn-primary" style={{ animationDelay: `${buildPoemLines(getPoem(name)).reduce((acc, item) => Math.max(acc, item.delay), 0) + 1.2}s`, opacity: 0, animation: `fadeUp 0.6s ease ${buildPoemLines(getPoem(name)).reduce((acc, item) => Math.max(acc, item.delay), 0) + 1.2}s forwards, pulse 2.5s ease-in-out ${buildPoemLines(getPoem(name)).reduce((acc, item) => Math.max(acc, item.delay), 0) + 1.8}s infinite` }} onClick={() => setStarted(true)}>
              Let's go 👇
            </button>
          </div>
        )}

        {/* STEP 3: Q&A */}
        {started && !done && (
          <div className="screen" style={{ justifyContent: "flex-start", paddingTop: 50 }}>
            <div className="progress-wrap">
              <div className="progress-meta">
                <span>Question {current + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% done</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="q-wrap" style={{ marginTop: 24 }}>
              <div className="q-card" key={current}>
                <span className="q-emoji">{q.emoji}</span>
                <div className="q-quality">{q.quality}</div>
                <div className="q-text">{q.question}</div>
                <div className="options">
                  {q.options.map((opt, i) => {
                    const isSelected = selectedOption?.label === opt.label;
                    const cls = isSelected
                      ? opt.positive ? "opt-btn selected-pos" : "opt-btn selected-neg"
                      : "opt-btn";
                    return (
                      <button
                        key={i}
                        className={cls}
                        onClick={() => handleAnswer(opt)}
                        disabled={showResponse}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {showResponse && selectedOption && (
                  <div className="response-box">
                    <p>{q.response(name, selectedOption)}</p>
                    <button className="next-btn" onClick={handleNext}>
                      {current + 1 < questions.length ? "Next question →" : "See my results 🎉"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: RESULTS */}
        {done && (
          <div className="screen" style={{ justifyContent: "flex-start", paddingTop: 50, gap: 0 }}>
            <div className="tag">All done 🎉</div>
            <h1 className="big" style={{ marginBottom: 8 }}>
              Here's what <span>{name}</span> thinks
            </h1>
            <p className="sub" style={{ marginBottom: 20 }}>
              {positiveCount >= 8
                ? "Wow — the vibes are immaculate 🌸"
                : positiveCount >= 5
                ? "Pretty solid friendship energy 💛"
                : "Room to grow — and that's okay 🌱"}
            </p>

            <div className="score-bar">
              <div className="score-label">
                <span>Positive responses</span>
                <span>{positiveCount} / {questions.length}</span>
              </div>
              <div className="score-track">
                <div className="score-fill" style={{ width: `${(positiveCount / questions.length) * 100}%` }} />
              </div>
            </div>

            <div className="results-grid">
              {answers.map((a, i) => {
                const qItem = questions.find(q => q.id === a.id);
                return (
                  <div className="result-row" key={i} style={{ animationDelay: `${i * 0.04}s` }}>
                    <span className="result-emoji">{qItem.emoji}</span>
                    <div className="result-text">
                      <div className="result-quality">{qItem.quality}</div>
                      <div className="result-answer">{a.label}</div>
                    </div>
                    <div className={`result-badge ${a.positive ? "badge-pos" : "badge-neg"}`}>
                      {a.positive ? "✓" : "○"}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="final-msg" style={{ marginTop: 16 }}>
              <span style={{ fontSize: 40, display: "block", marginBottom: 10 }}>🫂</span>
              <h2>Thank you for being real, {name}.</h2>
              <div className="divider" />
              <p>
                {positiveCount >= 8
                  ? <><strong>This</strong> is exactly the kind of friendship I want to protect. You matter to me more than words can say.</>
                  : positiveCount >= 5
                  ? <>I see what's working and I see where I can <strong>do better</strong>. That's what this is about — growing together.</>
                  : <>Your honesty is a <strong>gift</strong>. I've got work to do — and I'm going to show up differently for you going forward.</>
                }
              </p>
            </div>
          </div>
        )}
        </>)}
      </div>
    </>
  );
}

