// Centralized language configuration and switcher
const LANGUAGES = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
];

// Check if translation file exists for a page and language
async function checkTranslationExists(pageName, langCode) {
    if (langCode === 'en') return true; // English always exists
    
    try {
        const response = await fetch(`lang/${pageName}_${langCode}.json`, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

// Generate language bar HTML (for content pages - checks file existence)
async function generateLanguageBar(currentPage) {
    const languageBar = document.getElementById('languageBar');
    if (!languageBar) return;

    // Show loading state
    languageBar.innerHTML = '<span style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">Loading languages...</span>';

    // Determine the page name for file checking
    const pageName = getPageNameForTranslation(currentPage);
    
    // Check which languages have translations
    const availableLanguages = [];
    for (const lang of LANGUAGES) {
        const exists = await checkTranslationExists(pageName, lang.code);
        if (exists) {
            availableLanguages.push(lang);
        }
    }

    // If only English available, hide the language bar
    if (availableLanguages.length <= 1) {
        languageBar.style.display = 'none';
        return;
    }

    // Generate buttons for available languages only
    let html = '<span style="color: rgba(255,255,255,0.9); font-weight: bold; margin-right: 0.5rem;">Language:</span>';
    availableLanguages.forEach(lang => {
        const url = `${currentPage}.html${lang.code === 'en' ? '' : '?lang=' + lang.code}`;
        const activeClass = (lang.code === getCurrentLanguage()) ? 'active' : '';
        html += `<button onclick="window.location.href='${url}'" class="lang-btn ${activeClass}">${lang.nativeName}</button>`;
    });

    languageBar.innerHTML = html;
}

// Get the page name used for translation files
function getPageNameForTranslation(currentPage) {
    const mapping = {
        'comparative-research': 'comparative',
        'scientific-errors': 'scientific',
        'expansion-history': 'expansion',
        'antisemitism-christianity': 'antisemitism',
        'real-world-harm': 'harm',
        'migration-impact': 'migration'
    };
    return mapping[currentPage] || currentPage;
}

// Get current language from URL
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam) return langParam;

    const path = window.location.pathname;
    const match = path.match(/index_([a-z]{2})\.html$/);
    if (match) return match[1];

    return 'en';
}

// Load language translations for content pages
async function loadLanguageContent(pageName) {
    const lang = getCurrentLanguage();
    if (lang === 'en') return;

    try {
        const response = await fetch(`lang/${pageName}_${lang}.json`);
        if (!response.ok) return;
        
        const data = await response.json();
        
        // Apply translations to elements with IDs
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = data[key];
            }
        });
    } catch (error) {
        console.log('Language file not found, using English');
    }
}

// Load language translations for index pages
async function loadIndexLanguage(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        const data = await response.json();
        
        // Update header
        document.getElementById('siteTitle').textContent = data.siteTitle;
        document.getElementById('siteSubtitle').textContent = data.siteSubtitle;
        document.getElementById('langLabel').textContent = data.languageSwitch;
        
        // Update navigation
        document.getElementById('navHeading').textContent = data.navigation.heading;
        document.getElementById('navSubtitle').textContent = data.navigation.subtitle;
        
        // Update cards
        const cards = ['comparative', 'scientific', 'expansion', 'antisemitism', 'harm', 'migration'];
        cards.forEach((card, index) => {
            const num = index + 1;
            document.getElementById(`emoji${num}`).textContent = data.cards[card].emoji;
            document.getElementById(`title${num}`).textContent = data.cards[card].title;
            document.getElementById(`desc${num}`).textContent = data.cards[card].description;
            document.getElementById(`details${num}`).textContent = data.cards[card].details;
            document.getElementById(`btn${num}`).textContent = data.cards[card].buttonText;
            document.getElementById(`link${num}`).href = data.cards[card].link;
        });
        
        // Update footer
        document.getElementById('footerCopyright').textContent = data.footer.copyright;
        document.getElementById('footerDesc').textContent = data.footer.description;
    } catch (error) {
        console.error('Error loading language:', error);
    }
}
