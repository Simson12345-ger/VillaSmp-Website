/* ============================================
   VILLA SMP — JAVASCRIPT
   All interactivity, AI logic, and animations
   ============================================ */

/* ===== CONFIGURATION ===== */
// Edit these values to customize your server info
const CONFIG = {
    serverIp: 'VillaSmp.eagler.host',
    serverPort: 25565,
    discordUrl: 'https://discord.gg/mHzAqf7GyN',
    voteUrl: 'https://vote.villasmp.com',
    email: 'staff@villasmp.com',
};

/* ===== EMBEDDED KNOWLEDGE BASE FOR AI & FAQ ===== */
// To ensure the site works perfectly on local file:// testing without CORS issues,
// the knowledge base is embedded directly here.
const KNOWLEDGE_BASE = {
    faqs: [
        {
            question: "What is Villa SMP?",
            answer: "Villa SMP is a Minecraft Survival server focused on community, progression, and fun. We offer custom features, ranks, crates, events, and a player-driven economy."
        },
        {
            question: "How do I join the server?",
            answer: "Open Minecraft Java Edition 1.8.8, go to Multiplayer, click Add Server, enter VillaSmp.eagler.host as the address, and click Join. You can copy the IP from our homepage!"
        },
        {
            question: "What version of Minecraft do I need?",
            answer: "Villa SMP runs on Minecraft Java Edition 1.8.8. Make sure you're using the correct version to connect."
        },
        {
            question: "How do I earn money on the server?",
            answer: "You can earn money by selling items at the shop (/warp shop), participating in events, voting daily, and trading with other players."
        },
        {
            question: "How do I get a rank?",
            answer: "Player is the default rank. Supporter can be obtained by supporting the server. Moderator, Manager, Developer, and Owner are staff positions you can apply for via Discord."
        },
        {
            question: "Can I claim land to protect my builds?",
            answer: "Yes! Use /claim to protect your land from griefing. Claimed land prevents other players from breaking blocks or accessing your chests."
        },
        {
            question: "How do I report a player or issue?",
            answer: "Use /ticket to create a support ticket, or message a staff member on Discord. Please provide evidence (screenshots) if possible."
        },
        {
            question: "Is the server free to play?",
            answer: "Yes! Villa SMP is completely free to play. Optional Supporter perks are available but not required to enjoy the full survival experience."
        }
    ],
    knowledge: [
        { id: 1, keywords: ["what", "villa", "smp", "about", "tell", "server"], answer: "Villa SMP is a Minecraft Survival server focused on community, progression and fun. We offer custom features, ranks, crates, events, and a friendly player-driven economy." },
        { id: 2, keywords: ["join", "connect", "play", "how", "enter", "start"], answer: "Connect using the server address shown on the website! Open Minecraft Java Edition 1.8.8, go to Multiplayer, click 'Add Server', enter <strong>VillaSmp.eagler.host</strong> as the address, and click Join. You can copy the IP using the copy button on our homepage." },
        { id: 3, keywords: ["ip", "address", "server ip", "connect to"], answer: "The server IP is <strong>VillaSmp.eagler.host</strong>. You can copy it by clicking the copy button next to the IP on our homepage." },
        { id: 4, keywords: ["version", "minecraft version", "what version", "edition"], answer: "Villa SMP runs on <strong>Minecraft Java Edition 1.8.8</strong>. Make sure you select this version in your Minecraft launcher before connecting." },
        { id: 5, keywords: ["ranks", "rank", "hierarchy", "staff", "roles"], answer: "Villa SMP has the following ranks: <strong>Player</strong>, <strong>Supporter</strong>, <strong>Moderator</strong>, <strong>Manager</strong>, <strong>Developer</strong>, and <strong>Owner</strong>. Player is the default rank. Supporter is obtained by supporting the server. The rest are staff positions you can apply for on Discord." },
        { id: 6, keywords: ["commands", "command", "cmd", "use", "what can i do"], answer: "Use <strong>/help</strong> to see all available commands! Some essential ones include: <code>/spawn</code> (teleport to spawn), <code>/warp</code> (open warp menu), <code>/tpa</code> (request teleport), <code>/home</code> (go home), <code>/sethome</code> (set home), <code>/money</code> (check balance), and <code>/rtp</code> (random teleport)." },
        { id: 7, keywords: ["spawn", "teleport to spawn", "go to spawn"], answer: "Use the command <strong>/spawn</strong> to teleport to the server spawn area." },
        { id: 8, keywords: ["shop", "buy", "sell", "store", "warp shop", "economy", "money"], answer: "Use <strong>/warp shop</strong> to visit the shop area where you can buy and sell items. You can check your balance with <strong>/money</strong>." },
        { id: 9, keywords: ["discord", "community", "chat", "join discord"], answer: "Click the Discord button on our website to join our community server! It's the best place to chat with other players, get support, and stay updated on server news." },
        { id: 10, keywords: ["vote", "voting", "rewards", "vote rewards"], answer: "Click the Vote button on our website to visit our voting pages. Voting daily earns you rewards like crate keys, money, and other perks!" },
        { id: 11, keywords: ["rules", "rule", "allowed", "not allowed", "banned"], answer: "Our main rules are: No griefing or stealing, be respectful to everyone, no cheats or hacks, no spamming, keep chat family-friendly, and report issues with /ticket. Full rules are on our Discord." },
        { id: 12, keywords: ["crates", "crate", "keys", "loot", "rewards"], answer: "Crates are special reward containers you can open with keys. You earn keys by voting, participating in events, or as rewards. They contain rare items, cosmetics, and powerful gear!" },
        { id: 13, keywords: ["events", "event", "tournament", "competition"], answer: "Yes! We host regular events including build battles, PvP tournaments, scavenger hunts, and seasonal celebrations. Check our Discord for the event schedule!" },
        { id: 14, keywords: ["claim", "land", "protect", "grief", "griefing"], answer: "Use <strong>/claim</strong> to protect your land from griefing. Claimed land prevents other players from breaking blocks, opening chests, or interacting with your builds." },
        { id: 15, keywords: ["home", "sethome", "teleport home"], answer: "Use <strong>/sethome</strong> to set a home location, and <strong>/home</strong> to teleport back to it. Players get 3 homes, Supporters get 8!" },
        { id: 16, keywords: ["tpa", "teleport", "teleport to player", "tp"], answer: "Use <strong>/tpa &lt;playername&gt;</strong> to send a teleport request to another player. They need to accept it with /tpaccept for you to teleport." },
        { id: 17, keywords: ["report", "player", "issue", "ticket", "staff", "help"], answer: "Use <strong>/ticket</strong> to create a support ticket, or message a staff member on our Discord. Please include screenshots or evidence if possible." },
        { id: 18, keywords: ["supporter", "donate", "donation", "support", "perks", "premium"], answer: "You can become a Supporter by supporting the server through our store. Supporters get perks like more homes, colored chat, /hat, /nick, priority queue, and monthly crate keys!" },
        { id: 19, keywords: ["apply", "staff", "moderator", "application", "become staff"], answer: "Staff applications are open on our Discord! Join the Discord, check the #applications channel, and follow the instructions. We look for active, helpful, and friendly community members." },
        { id: 20, keywords: ["economy", "money", "earn", "balance", "currency"], answer: "Villa SMP has a player-driven economy. You can earn money by selling items at the shop (/warp shop), voting daily, participating in events, and trading with other players. Check your balance with /money." },
        { id: 21, keywords: ["features", "what can i do", "things to do", "activities"], answer: "Villa SMP features: Survival gameplay, player economy, ranks, crates, events, community projects, custom systems, land claiming, warps, and an active friendly community!" },
        { id: 22, keywords: ["free", "cost", "pay", "price", "money to play"], answer: "Yes! Villa SMP is completely free to play. Optional Supporter perks are available for those who want to support the server, but they're not required to enjoy the full survival experience." },
        { id: 23, keywords: ["type", "gamemode", "survival", "creative", "what kind"], answer: "Villa SMP is a <strong>Minecraft Survival server</strong>. We focus on the classic survival experience enhanced with quality-of-life features, custom systems, and a great community." },
        { id: 24, keywords: ["lag", "slow", "performance", "tps", "server lag"], answer: "If you experience lag, try: lowering your render distance, using OptiFine, or checking your internet connection. If the issue persists, report it with /ticket or on Discord." },
        { id: 25, keywords: ["reset", "wipe", "new map", "new world", "season"], answer: "World resets happen at the start of each season. We announce resets well in advance on Discord. Check our updates section and Discord for the latest info!" }
    ]
};

/* ===== FALLBACK UPDATES (For local file:// testing) ===== */
const FALLBACK_UPDATES = [
    {
        version: "1.3",
        date: "2025-01-15",
        title: "Community Hub & Season 3 Launch",
        description: "A massive update kicking off Season 3 with a brand new community hub, improved performance, and exciting new features for all players.",
        features: [
            "New community hub at spawn",
            "Season 3 world reset with fresh seed",
            "Improved server performance by 40%",
            "New custom crates with rare items",
            "Updated rank permissions",
            "Bug fixes and stability improvements"
        ]
    },
    {
        version: "1.2",
        date: "2024-12-20",
        title: "Winter Event & Economy Update",
        description: "Get ready for the holiday season with our winter event, a rebalanced economy, and quality-of-life improvements based on community feedback.",
        features: [
            "Winter event with exclusive rewards",
            "Rebalanced player economy",
            "New /ah auction house system",
            "Improved anti-cheat detection",
            "Added /nick for Supporters",
            "New daily vote rewards"
        ]
    },
    {
        version: "1.1",
        date: "2024-11-05",
        title: "Ranks, Warps & Holograms",
        description: "Introducing new ranks, additional warps, custom holograms, and various server improvements to enhance your survival experience.",
        features: [
            "New ranks system with 6 tiers",
            "New warps: shop, spawn, pvp, events",
            "Custom holograms at key locations",
            "New server improvements",
            "Updated /help command menu",
            "Enhanced player statistics tracking"
        ]
    },
    {
        version: "1.0",
        date: "2024-10-01",
        title: "Villa SMP Grand Opening",
        description: "The official launch of Villa SMP! After months of development, we're excited to welcome our first players to the ultimate survival experience.",
        features: [
            "Official server launch",
            "Custom survival gameplay",
            "Player economy system",
            "Land claiming with /claim",
            "Starter kits for new players",
            "Friendly community guidelines"
        ]
    }
];

/* ===== LOADING SCREEN ===== */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1200);
});

/* ===== NAVIGATION ===== */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ===== PARTICLE BACKGROUND ===== */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.size = Math.random() * 4 + 2;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '74, 222, 128' : '96, 165, 250';
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y < -10) this.reset();
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ===== COPY IP BUTTON ===== */
const copyIpBtn = document.getElementById('copyIpBtn');
const ipCopied = document.getElementById('ipCopied');
const serverIpElement = document.getElementById('serverIp');

serverIpElement.textContent = CONFIG.serverIp;

function copyIp() {
    navigator.clipboard.writeText(CONFIG.serverIp).then(() => {
        ipCopied.classList.add('show');
        setTimeout(() => ipCopied.classList.remove('show'), 2000);
    }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = CONFIG.serverIp;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        ipCopied.classList.add('show');
        setTimeout(() => ipCopied.classList.remove('show'), 2000);
    });
}

copyIpBtn.addEventListener('click', copyIp);

document.getElementById('footerCopyIp')?.addEventListener('click', (e) => {
    e.preventDefault();
    copyIp();
});

/* ===== BUTTON ACTIONS ===== */
document.getElementById('joinBtn').addEventListener('click', copyIp);
document.getElementById('navDiscordBtn').href = CONFIG.discordUrl;
document.getElementById('discordBtn').href = CONFIG.discordUrl;
document.getElementById('voteBtn').href = CONFIG.voteUrl;
document.getElementById('contactDiscord').href = CONFIG.discordUrl;
document.getElementById('contactVote').href = CONFIG.voteUrl;
document.getElementById('footerDiscord').href = CONFIG.discordUrl;
document.getElementById('footerVote').href = CONFIG.voteUrl;

/* ===== SERVER STATUS ===== */
async function checkServerStatus() {
    const statusElement = document.getElementById('heroStatus');
    try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${CONFIG.serverIp}`);
        const data = await response.json();
        
        if (data.online) {
            const players = data.players?.online || 0;
            const max = data.players?.max || 0;
            statusElement.innerHTML = `<span class="status-dot online"></span> Server Online — ${players}/${max} players`;
            statusElement.parentElement.querySelector('.status-dot').classList.add('online');
        } else {
            statusElement.innerHTML = `<span class="status-dot"></span> Server Offline`;
        }
    } catch (error) {
        statusElement.innerHTML = `<span class="status-dot online"></span> Server Online — Join now!`;
        statusElement.parentElement.querySelector('.status-dot').classList.add('online');
    }
}
checkServerStatus();
setInterval(checkServerStatus, 60000);

/* ===== SCROLL REVEAL ANIMATIONS ===== */
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => observer.observe(el));

/* ===== LOAD UPDATES FROM JSON (with fallback for local testing) ===== */
async function loadUpdates() {
    const updatesList = document.getElementById('updatesList');
    try {
        // Attempt to fetch the JSON file
        const response = await fetch('data/updates.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        renderUpdates(data.updates);
    } catch (error) {
        console.warn('Could not fetch updates.json. Using fallback data for local testing.', error);
        renderUpdates(FALLBACK_UPDATES);
    }
}

function renderUpdates(updates) {
    const updatesList = document.getElementById('updatesList');
    updatesList.innerHTML = '';
    
    updates.forEach(update => {
        const featuresHtml = update.features.map(f => 
            `<div class="update-feature">${f}</div>`
        ).join('');
        
        const updateCard = document.createElement('div');
        updateCard.className = 'update-card reveal';
        updateCard.innerHTML = `
            <div class="update-header">
                <span class="update-version">v${update.version}</span>
                <span class="update-date">${update.date}</span>
            </div>
            <h3>${update.title}</h3>
            <p class="update-desc">${update.description}</p>
            <div class="update-features">${featuresHtml}</div>
        `;
        updatesList.appendChild(updateCard);
        observer.observe(updateCard);
    });
}
loadUpdates();

/* ===== LOAD FAQ FROM EMBEDDED KNOWLEDGE BASE ===== */
function loadFAQ() {
    const faqList = document.getElementById('faqList');
    faqList.innerHTML = '';
    
    KNOWLEDGE_BASE.faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item reveal';
        faqItem.innerHTML = `
            <div class="faq-question">
                <span>${faq.question}</span>
                <div class="faq-toggle">+</div>
            </div>
            <div class="faq-answer">${faq.answer}</div>
        `;
        faqList.appendChild(faqItem);
        observer.observe(faqItem);
        
        const question = faqItem.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItem.classList.toggle('open');
        });
    });
}
loadFAQ();

/* ============================================
   VILLAAI — AI ASSISTANT LOGIC
   ============================================ */

const aiFab = document.getElementById('aiFab');
const aiChat = document.getElementById('aiChat');
const aiClose = document.getElementById('aiClose');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');
const aiChatBody = document.getElementById('aiChatBody');
const aiSuggestions = document.getElementById('aiSuggestions');

aiFab.addEventListener('click', () => {
    aiChat.classList.toggle('open');
    if (aiChat.classList.contains('open')) {
        setTimeout(() => aiInput.focus(), 300);
    }
});

aiClose.addEventListener('click', () => {
    aiChat.classList.remove('open');
});

document.querySelectorAll('.ai-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-q');
        aiInput.value = question;
        sendMessage();
    });
});

aiSend.addEventListener('click', sendMessage);

aiInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `ai-message ${isUser ? 'user-message' : ''}`;
    
    if (isUser) {
        messageDiv.innerHTML = `<div class="user-bubble">${escapeHtml(text)}</div>`;
    } else {
        messageDiv.innerHTML = `
            <div class="ai-avatar small">🤖</div>
            <div class="ai-bubble">${text}</div>
        `;
    }
    
    aiChatBody.appendChild(messageDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'ai-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="ai-avatar small">🤖</div>
        <div class="ai-typing"><span></span><span></span><span></span></div>
    `;
    aiChatBody.appendChild(typingDiv);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

function hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function sendMessage() {
    const text = aiInput.value.trim();
    if (!text) return;
    
    if (aiSuggestions) aiSuggestions.style.display = 'none';
    
    addMessage(text, true);
    aiInput.value = '';
    
    showTyping();
    
    await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));
    
    const response = getAIResponse(text);
    hideTyping();
    addMessage(response, false);
}

function getAIResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    if (/^(hi|hello|hey|yo|sup|howdy|greetings)\b/.test(message)) {
        return "Hello there! 👋 I'm <strong>VillaAI</strong>, your assistant for Villa SMP. How can I help you today? You can ask me about the server, ranks, commands, rules, and more!";
    }
    if (/\b(thanks|thank you|thx|ty|appreciate)\b/.test(message)) {
        return "You're very welcome! 😊 Is there anything else you'd like to know about Villa SMP?";
    }
    if (/\b(bye|goodbye|see you|cya|farewell)\b/.test(message)) {
        return "Goodbye! Have fun on Villa SMP! 🎮 Come back anytime if you have more questions.";
    }
    if (/how are you|how's it going|what's up/.test(message)) {
        return "I'm doing great, thanks for asking! I'm always here and ready to help you with anything about Villa SMP. What would you like to know?";
    }
    
    let bestMatch = null;
    let bestScore = 0;
    
    for (const entry of KNOWLEDGE_BASE.knowledge) {
        let score = 0;
        for (const keyword of entry.keywords) {
            const kw = keyword.toLowerCase();
            if (message.includes(kw)) {
                score += kw.length;
                if (message.includes(kw)) score += 5;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = entry;
        }
    }
    
    if (bestMatch && bestScore > 5) {
        return bestMatch.answer;
    }
    
    const fallbacks = [
        "I'm not quite sure about that, but I can help with info about our server, ranks, commands, rules, or how to join! Try asking me something like 'What is Villa SMP?' or 'How do I join?'",
        "Hmm, I don't have info on that specific topic. Could you try rephrasing? I'm best at answering questions about Villa SMP's features, ranks, commands, and rules. 🤖",
        "I'd love to help, but I'm not sure I understand. Try asking about joining the server, available ranks, commands, or our community features!",
    ];
    
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

/* ===== SMOOTH SCROLLING FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
