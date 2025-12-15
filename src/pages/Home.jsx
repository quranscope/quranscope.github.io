import Head from 'next/head'
import Link from 'next/link'
import { PAGES } from '../config/pages'

export default function Home({ translations, currentLang = 'en' }) {
  if (!translations) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-lg text-slate-600 animate-pulse">Loading...</div>
    </div>
  )
  
  // Ensure required properties exist
  const title = translations.title || 'Quran Scope - Historical & Critical Analysis'
  const description = translations.description || 'Critical Analysis & Research'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://quranscope.github.io/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quran Scope
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Critical Historical & Textual Analysis
            </p>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {translations.intro || 'Comprehensive historical, textual, and critical analysis examining sources, claims, and historical development'}
            </p>
          </div>
        </div>
      </div>

      {/* Research Overview Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {translations.researchOverview || 'Research Sections'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore comprehensive analysis across multiple disciplines
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href={currentLang === 'en' ? '/comparative-research' : `/comparative-research-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.comparative.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">📚</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_comparative_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_comparative_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_comparative_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_comparative_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/scientific-errors' : `/scientific-errors-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.scientific.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">🔬</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_scientific_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_scientific_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_scientific_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_scientific_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/expansion-history' : `/expansion-history-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.expansion.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">⚔️</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_expansion_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_expansion_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_expansion_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_expansion_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/antisemitism-christianity' : `/antisemitism-christianity-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.antisemitism.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">✡️</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_antisemitism_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_antisemitism_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_antisemitism_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_antisemitism_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/real-world-harm' : `/real-world-harm-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.harm.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">⚠️</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_harm_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_harm_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_harm_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_harm_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/migration-impact' : `/migration-impact-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.migration.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">🌍</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_migration_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_migration_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_migration_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_migration_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/ex-muslim-resources' : `/ex-muslim-resources-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.exmuslim.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">🎙️</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_exmuslim_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_exmuslim_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_exmuslim_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_exmuslim_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/muhammad-women' : `/muhammad-women-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.muhammad.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">👥</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_muhammadWomen_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_muhammadWomen_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_muhammadWomen_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_muhammadWomen_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/jihad-study' : `/jihad-study-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.jihad.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">📖</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_jihad_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_jihad_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_jihad_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_jihad_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/terrorist-organizations' : `/terrorist-organizations-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.terrorist.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">☠️</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_terrorist_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_terrorist_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_terrorist_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_terrorist_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/recent-attacks' : `/recent-attacks-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.recentAttacks.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">🚨</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_recentAttacks_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_recentAttacks_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_recentAttacks_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_recentAttacks_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/solution' : `/solution-${currentLang}`} className="group block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer h-full flex flex-col border border-slate-100">
              <div className="text-white p-8 text-center relative overflow-hidden" style={{ background: PAGES.solution.backgroundColor }}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-500">💡</div>
                <h3 className="text-2xl font-bold relative z-10">{translations.cards_solution_title}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-900 font-bold text-lg mb-3">{translations.cards_solution_subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{translations.cards_solution_description}</p>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span>{translations.cards_solution_button}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}
