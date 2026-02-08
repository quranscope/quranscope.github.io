// Available languages configuration
export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
];

// Global available languages (all pages use all languages)
export const AVAILABLE_LANGUAGES = ['en', 'hi', 'de', 'fr', 'ta', 'pl', 'ml', 'ar'];

// Page routes configuration
export const PAGES = {
  home: {
    path: '/',
    title: 'Quran Scope',
    subtitle: 'Critical Historical & Textual Analysis',
    backgroundColor: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    translationFile: null, // Home uses special handling
    availableLanguages: AVAILABLE_LANGUAGES
  },
  comparative: {
    path: '/comparative-research',
    title: 'Copied & Edited Content',
    subtitle: 'How Quranic Narratives Were Derived from Earlier Sources',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    translationFile: 'comparative',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  scientific: {
    path: '/scientific-errors',
    title: 'Scientific Inaccuracies',
    subtitle: 'Failed Scientific Arguments in the Quran',
    backgroundColor: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    translationFile: 'scientific',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  expansion: {
    path: '/expansion-history',
    title: 'Violent Expansion History',
    subtitle: '14 Centuries of Military Conquest',
    backgroundColor: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    translationFile: 'expansion',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  antisemitism: {
    path: '/antisemitism-christianity',
    title: 'Anti-Semitism & Anti-Christianity',
    subtitle: 'Quranic Verses Against Jews and Christians',
    backgroundColor: 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)',
    translationFile: 'antisemitism',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  harm: {
    path: '/real-world-harm',
    title: 'Real-World Harm',
    subtitle: 'Terrorism, Oppression, and Human Rights Violations',
    backgroundColor: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
    translationFile: 'harm',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  migration: {
    path: '/migration-impact',
    title: 'Migration Impact',
    subtitle: 'How Islamic Migration Destroys Host Nations',
    backgroundColor: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    translationFile: 'migration',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  exmuslim: {
    path: '/ex-muslim-resources',
    title: 'Ex-Muslim Voices',
    subtitle: 'Testimonies, Resources, and Support Networks',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    translationFile: 'exmuslim',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  muhammad: {
    path: '/muhammad-women',
    title: 'Muhammad & Women',
    subtitle: "Prophet's Marriages, Slavery, and Women's Treatment",
    backgroundColor: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    translationFile: 'muhammad_women',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  jihad: {
    path: '/jihad-study',
    title: 'Jihad Study',
    subtitle: 'Quranic Foundation of Islamic Warfare Doctrine',
    backgroundColor: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    translationFile: 'jihad',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  terrorist: {
    path: '/terrorist-organizations',
    title: 'Terrorist Organizations',
    subtitle: 'Global Terrorism and Human Rights Violations',
    backgroundColor: 'linear-gradient(135deg, #8b0000 0%, #dc143c 100%)',
    translationFile: 'terrorist',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  solution: {
    path: '/solution',
    title: 'Solution',
    subtitle: 'How to Address Islamic Ideology\'s Impact',
    backgroundColor: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
    translationFile: 'solution',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  recentAttacks: {
    path: '/recent-attacks',
    title: 'Recent Islamic Terror Attacks',
    subtitle: '100+ Documented Attacks (2023-2025)',
    backgroundColor: 'linear-gradient(135deg, #c31432 0%, #240b36 100%)',
    translationFile: 'recent_attacks',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  wahhabism: {
    path: '/wahhabism',
    title: 'Wahhabism: The Extremist Ideology',
    subtitle: 'Origins, Saudi Funding & Global Terrorism',
    backgroundColor: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    translationFile: 'wahhabism',
    availableLanguages: AVAILABLE_LANGUAGES
  },
  dhimmi: {
    path: '/dhimmi-ideology',
    title: 'Dhimmi Ideology',
    subtitle: 'The Status and Treatment of Non-Muslims Under Islamic Rule',
    backgroundColor: 'linear-gradient(135deg, #8e44ad 0%, #c0392b 100%)',
    translationFile: 'dhimmi',
    availableLanguages: AVAILABLE_LANGUAGES
  }
};

// Helper function to get page config by path
export const getPageConfig = (pathname) => {
  const config = Object.values(PAGES).find(page => page.path === pathname) || PAGES.home;
  // Ensure availableLanguages is always present
  return {
    ...config,
    availableLanguages: config.availableLanguages || AVAILABLE_LANGUAGES
  };
};

// Helper function to get available languages for current page
export const getAvailableLanguages = (pathname) => {
  return LANGUAGES;
};

// Helper function to check if translation exists
export const hasTranslation = (pathname, langCode) => {
  return AVAILABLE_LANGUAGES.includes(langCode);
};
