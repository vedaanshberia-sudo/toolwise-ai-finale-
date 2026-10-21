// Comprehensive Built-in Dataset of AI Tools
const aiToolsDataset = [
    {
        name: "Perplexity AI",
        category: "Research",
        pricing: "both", // free tier + pro
        rank: 1,
        sectorBest: "Best overall for Deep Research & Live Citations",
        description: "An AI-powered conversational search engine that delivers real-time web answers backed by verifiable source citations.",
        url: "https://www.perplexity.ai",
        badge: "Top Research Pick",
        rating: 4.9
    },
    {
        name: "ChatGPT (OpenAI)",
        category: "Writing",
        pricing: "both",
        rank: 2,
        sectorBest: "Best for general writing, reasoning, and multi-purpose tasks",
        description: "Versatile assistant supporting deep document analysis, creative drafting, brainstorming, and image creation workflows.",
        url: "https://chatgpt.com",
        badge: "Industry Standard",
        rating: 4.8
    },
    {
        name: "Google Gemini",
        category: "Research",
        pricing: "both",
        rank: 3,
        sectorBest: "Best for massive context windows & Google Workspace integration",
        description: "Multimodal powerhouse capable of ingesting massive PDF documents, handling long videos, and executing deep research summaries.",
        url: "https://gemini.google.com",
        badge: "Multimodal Leader",
        rating: 4.8
    },
    {
        name: "Claude (Anthropic)",
        category: "Coding",
        pricing: "both",
        rank: 4,
        sectorBest: "Best for advanced coding, software debugging, and long-form writing",
        description: "Renowned for precise code architecture, complex repository understanding, and nuanced prose generation with high context reliability.",
        url: "https://claude.ai",
        badge: "Top Developer Choice",
        rating: 4.9
    },
    {
        name: "Midjourney",
        category: "Image",
        pricing: "paid",
        rank: 5,
        sectorBest: "Best for hyper-realistic artistic images and concept visuals",
        description: "The gold standard for generating stylized, cinematic, and professional-grade artistic graphics from plain-text prompts.",
        url: "https://www.midjourney.com",
        badge: "Visual Leader",
        rating: 4.7
    },
    {
        name: "Recraft AI",
        category: "Image",
        pricing: "both",
        rank: 6,
        sectorBest: "Best free-tier option for vector graphics, icons, and illustrations",
        description: "A professional design suite enabling creation of scalable vector art, brand sets, and 3D illustrations with generous free limits.",
        url: "https://www.recraft.ai",
        badge: "Best Free Image Suite",
        rating: 4.5
    },
    {
        name: "Cursor",
        category: "Coding",
        pricing: "both",
        rank: 7,
        sectorBest: "Best AI-native Code Editor for building software rapidly",
        description: "An AI-first fork of VS Code built for multi-file codebase edits, rapid background code generation, and intelligent auto-completions.",
        url: "https://www.cursor.com",
        badge: "Elite IDE",
        rating: 4.9
    },
    {
        name: "Sora / Veo (Google Labs)",
        category: "Video",
        pricing: "both",
        rank: 8,
        sectorBest: "Best for cinematic text-to-video generation & motion physics",
        description: "Generates high-definition, story-driven video clips with realistic lighting, smooth camera movement, and natural motion dynamics.",
        url: "https://labs.google",
        badge: "Video Pioneer",
        rating: 4.6
    },
    {
        name: "ElevenLabs",
        category: "Audio",
        pricing: "both",
        rank: 9,
        sectorBest: "Best for ultra-realistic voice cloning, text-to-speech, and narration",
        description: "Industry-leading synthetic voice platform producing emotionally rich voiceovers, audiobooks, and real-time conversational agents.",
        url: "https://elevenlabs.io",
        badge: "Audio Leader",
        rating: 4.8
    },
    {
        name: "Gamma App",
        category: "Writing",
        pricing: "both",
        rank: 10,
        sectorBest: "Best for turning rough notes into polished presentations & docs",
        description: "Quickly formats structured slide decks, web pages, and executive documents using AI layout styling and responsive templates.",
        url: "https://gamma.app",
        badge: "Productivity Favorite",
        rating: 4.6
    },
    {
        name: "NotebookLM (Google)",
        category: "Research",
        pricing: "free",
        rank: 11,
        sectorBest: "Best free tool for private document analysis & audio summaries",
        description: "Upload your PDFs, study notes, or web links to generate grounded Q&A study guides and engaging audio podcast summaries for free.",
        url: "https://notebooklm.google.com",
        badge: "100% Free",
        rating: 4.9
    }
];

// Sector Champions Highlights Data
const sectorChampions = [
    { sector: "Research & Fact-Checking", leader: "Perplexity AI", desc: "Best for live web search and bulletproof citations.", icon: "search", color: "text-blue-400" },
    { sector: "Writing & Brainstorming", leader: "ChatGPT & Claude", desc: "Best for creative writing, document analysis, and prose.", icon: "pen-tool", color: "text-emerald-400" },
    { sector: "Image & Graphic Art", leader: "Midjourney & Recraft", desc: "Best for photorealism, artistic style, and vector graphics.", icon: "image", color: "text-purple-400" },
    { sector: "Coding & Engineering", leader: "Cursor & Claude", desc: "Best for repository-wide edits and AI-native programming.", icon: "code", color: "text-indigo-400" }
];

// Active State Variables
let currentPriceFilter = 'all'; // 'all', 'free', 'paid'
let searchQuery = '';
let selectedCategory = 'All';

// Initialize application on load
document.addEventListener('DOMContentLoaded', () => {
    renderHighlights();
    renderTools();
    setupEventListeners();
    lucide.createIcons();
});

// Render Sector Champions
function renderHighlights() {
    const container = document.getElementById('highlights-container');
    container.innerHTML = sectorChampions.map(item => `
        <div class="bg-cardbg border border-bordercol rounded-2xl p-5 flex flex-col justify-between space-y-3 hover:border-indigo-500/50 transition">
            <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-wider font-semibold text-gray-400">${item.sector}</span>
                <i data-lucide="${item.icon}" class="h-5 w-5 ${item.color}"></i>
            </div>
            <div>
                <h4 class="font-bold text-base text-white">${item.leader}</h4>
                <p class="text-xs text-gray-400 mt-1">${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// Event Listeners Setup
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderTools();
    });

    document.getElementById('categorySelect').addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderTools();
    });
}

// Handle Pricing Filter Clicks
function setPriceFilter(filterType) {
    currentPriceFilter = filterType;
    
    // Update button styles
    ['all', 'free', 'paid'].forEach(type => {
        const btn = document.getElementById(`btn-price-${type}`);
        if (type === filterType) {
            btn.className = "py-2 text-xs font-semibold rounded-lg bg-indigo-600 text-white transition";
        } else {
            btn.className = "py-2 text-xs font-semibold rounded-lg text-gray-400 hover:text-white transition";
        }
    });

    renderTools();
}

// Filter and Render Tools
function renderTools() {
    const grid = document.getElementById('tools-grid');
    const emptyState = document.getElementById('empty-state');
    const countLabel = document.getElementById('result-count');

    // Filter Logic
    const filteredTools = aiToolsDataset.filter(tool => {
        // Search Match
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery) || 
                              tool.description.toLowerCase().includes(searchQuery) ||
                              tool.sectorBest.toLowerCase().includes(searchQuery);

        // Category Match
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;

        // Pricing Match Logic based on user criteria
        let matchesPricing = true;
        if (currentPriceFilter === 'free') {
            matchesPricing = tool.pricing === 'free' || tool.pricing === 'both'; // Tools with free tiers
        } else if (currentPriceFilter === 'paid') {
            matchesPricing = tool.pricing === 'paid' || tool.pricing === 'both'; // Tools offering paid versions
        }

        return matchesSearch && matchesCategory && matchesPricing;
    });

    // Sort by rank
    filteredTools.sort((a, b) => a.rank - b.rank);

    countLabel.textContent = `Showing ${filteredTools.length} AI platform${filteredTools.length === 1 ? '' : 's'}`;

    if (filteredTools.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    grid.innerHTML = filteredTools.map(tool => `
        <div class="bg-cardbg border border-bordercol rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-indigo-500/40 transition shadow-xl group">
            <div class="space-y-3">
                <div class="flex items-start justify-between">
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            ${tool.badge}
                        </span>
                        <h4 class="font-bold text-lg text-white mt-2 group-hover:text-indigo-400 transition">${tool.name}</h4>
                    </div>
                    <span class="text-xs font-semibold px-2 py-1 bg-darkbg border border-bordercol rounded-lg text-gray-400">
                        Rank #${tool.rank}
                    </span>
                </div>

                <p class="text-xs text-indigo-300 font-medium bg-indigo-950/30 border border-indigo-900/40 p-2.5 rounded-xl">
                    🌟 ${tool.sectorBest}
                </p>

                <p class="text-xs text-gray-400 leading-relaxed">
                    ${tool.description}
                </p>
            </div>

            <div class="pt-4 border-t border-bordercol flex items-center justify-between">
                <div class="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <i data-lucide="star" class="h-3.5 w-3.5 fill-amber-400"></i> ${tool.rating} / 5.0
                </div>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
                    class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition shadow-lg shadow-indigo-600/20">
                    Visit Tool <i data-lucide="external-link" class="h-3.5 w-3.5"></i>
                </a>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}
