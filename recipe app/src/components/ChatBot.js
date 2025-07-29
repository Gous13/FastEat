import React, { useState } from "react";
import "./ChatBot.scss";

// ✅ Inbuilt FAQ list
const FAQ = [
  { q: "hi", a: "Hello! How can I help you with your recipe search today?" },
  { q: "hello", a: "Hi there! Need help finding a recipe or using the app?" },
  { q: "how are you", a: "I'm just a bot, but I'm here to help you with recipes and app questions!" },
  { q: "how do i use this app", a: "1. Search for recipes using the search bar. 2. Browse by category. 3. Click a recipe for details. 4. Register or log in for more features. 5. Use the feedback form to share your thoughts!" },
  { q: "what is the process of using the app", a: "Start by searching or browsing for recipes. Click on any recipe to see details and instructions. Register or log in for personalized features. Use the feedback form to contact us." },
  { q: "how do i search for recipes", a: "Use the search bar at the top to find recipes by name or ingredient." },
  { q: "how do i browse categories", a: "Click on a category to see all recipes in that group." },
  { q: "how do i register", a: "Click the login/register button in the header to create an account." },
  { q: "how do i log in", a: "Click the login/register button in the header to log in to your account." },
  { q: "how do i give feedback", a: "Use the feedback form to share your thoughts about a recipe or the app." },
  { q: "what categories are available", a: "Categories include Chicken, Beef, Vegetarian, Dessert, and more." },
  { q: "how do i search by ingredient", a: "Type the ingredient name in the search bar to find recipes that include it." },
  { q: "can i print a recipe", a: "You can use your browser’s print feature (Ctrl+P or Cmd+P) to print any recipe page." },
  { q: "how do i reset my password", a: "If you forget your password, use the “Forgot password?” link on the login page (if available)." },
  { q: "how do i contact support", a: "Use the feedback form or contact link in the footer to reach support." },
  { q: "can you suggest a recipe", a: "Sure! Try searching for your favorite ingredient or dish in the search bar, or browse categories for inspiration." },
  { q: "can i use this app on mobile", a: "Yes, the app is mobile-friendly and works on most smartphones and tablets." },
  { q: "i want biryani", a: "To find biryani recipes, just type 'biryani' in the search bar at the top!" },
  { q: "i want to cook", a: "Great! What would you like to cook? Type the dish or ingredient in the search bar to get started." }
];

// ✅ Simple matcher
function getBestMatch(userMessage) {
  const cleaned = userMessage.toLowerCase().replace(/[^a-z0-9 ]/g, "");

  // ✅ Handle dynamic recipe requests
  const patterns = [
    /i want to (make|cook) (.+)/i,
    /i want (.+)/i,
    /recipe for (.+)/i,
    /give me a recipe for (.+)/i,
    /can you suggest a recipe for (.+)/i,
    /can you help me find (.+)/i
  ];

  for (const pattern of patterns) {
    const match = userMessage.match(pattern);
    if (match && (match[2] || match[1])) {
      const dish = (match[2] || match[1]).trim();
      return `To find ${dish} recipes, just type "${dish}" in the search bar at the top!`;
    }
  }

  // ✅ Search best matching FAQ
  let best = null;
  let bestScore = 0;
  for (const { q, a } of FAQ) {
    let score = 0;
    q.split(" ").forEach(word => {
      if (cleaned.includes(word)) score++;
    });
    if (score > bestScore) {
      bestScore = score;
      best = a;
    }
  }

  return best || "I'm not sure about that. Try searching or browsing categories!";
}

// ✅ Get Bot Response
const getBotResponse = async (userMessage) => getBestMatch(userMessage);

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I am your recipe assistant. Ask me anything about recipes or how to use the app." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const botReply = await getBotResponse(input);
    setMessages(prev => [...prev, { from: "bot", text: botReply }]);
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([
      { from: "bot", text: "Hi! I am your recipe assistant. Ask me anything about recipes or how to use the app." }
    ]);
  };

  return (
    <div className="chatbot-header-anchor">
      {/* ✅ Floating Action Button */}
      <button className="chatbot-fab" onClick={() => setOpen(o => !o)}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="orangered" />
          <path d="M6.5 10C6.5 8.3 8.1 7 10 7H14C15.9 7 17.5 8.3 17.5 10V14C17.5 15.7 15.9 17 14 17H10.8C10.3 17 9.8 17.2 9.4 17.6L8.3 18.7C7.9 19.1 7.3 18.8 7.3 18.3V14C6.5 13.7 6.5 12.3 6.5 10Z" fill="white" />
          <circle cx="11" cy="13.2" r="1.1" fill="orangered" stroke="white" strokeWidth="0.7" />
          <circle cx="12" cy="13.2" r="1.1" fill="orangered" stroke="white" strokeWidth="0.7" />
          <circle cx="13" cy="13.2" r="1.1" fill="orangered" stroke="white" strokeWidth="0.7" />
        </svg>
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            Recipe ChatBot
            <button onClick={handleClose}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="chatbot-msg chatbot-msg-bot">Typing...</div>}
          </div>

          <form className="chatbot-input-row" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
