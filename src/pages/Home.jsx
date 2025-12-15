import Head from 'next/head'
import Link from 'next/link'
import { PAGES } from '../config/pages'

export default function Home({ translations, currentLang = 'en' }) {
  if (!translations) return <div>Loading...</div>
  
  // Ensure required properties exist
  const title = translations.title || translations.siteTitle || 'Quran Scope'
  const description = translations.description || translations.siteSubtitle || 'Critical Analysis & Research'

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

      <div className="container">
        <div className="intro">
          <h2>{translations.researchOverview || translations.navigation?.heading || 'Research Sections'}</h2>
          <p>{translations.intro || translations.navigation?.subtitle || 'Explore comprehensive analysis'}</p>
        </div>

        <div className="nav-grid">
          <Link href={currentLang === 'en' ? '/comparative-research' : `/comparative-research-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.comparative.backgroundColor }}>
                <div className="icon">📚</div>
                <h3>{translations.cards.comparative.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.comparative.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.comparative.description}</p>
                <span className="btn-primary">{translations.cards.comparative.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/scientific-errors' : `/scientific-errors-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.scientific.backgroundColor }}>
                <div className="icon">🔬</div>
                <h3>{translations.cards.scientific.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.scientific.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.scientific.description}</p>
                <span className="btn-primary">{translations.cards.scientific.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/expansion-history' : `/expansion-history-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.expansion.backgroundColor }}>
                <div className="icon">⚔️</div>
                <h3>{translations.cards.expansion.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.expansion.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.expansion.description}</p>
                <span className="btn-primary">{translations.cards.expansion.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/antisemitism-christianity' : `/antisemitism-christianity-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.antisemitism.backgroundColor }}>
                <div className="icon">✡️</div>
                <h3>{translations.cards.antisemitism.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.antisemitism.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.antisemitism.description}</p>
                <span className="btn-primary">{translations.cards.antisemitism.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/real-world-harm' : `/real-world-harm-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.harm.backgroundColor }}>
                <div className="icon">⚠️</div>
                <h3>{translations.cards.harm.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.harm.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.harm.description}</p>
                <span className="btn-primary">{translations.cards.harm.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/migration-impact' : `/migration-impact-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.migration.backgroundColor }}>
                <div className="icon">🌍</div>
                <h3>{translations.cards.migration.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.migration.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.migration.description}</p>
                <span className="btn-primary">{translations.cards.migration.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/ex-muslim-resources' : `/ex-muslim-resources-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.exmuslim.backgroundColor }}>
                <div className="icon">🎙️</div>
                <h3>{translations.cards.exmuslim.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.exmuslim.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.exmuslim.description}</p>
                <span className="btn-primary">{translations.cards.exmuslim.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/muhammad-women' : `/muhammad-women-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.muhammad.backgroundColor }}>
                <div className="icon">👥</div>
                <h3>{translations.cards.muhammadWomen.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.muhammadWomen.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.muhammadWomen.description}</p>
                <span className="btn-primary">{translations.cards.muhammadWomen.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/jihad-study' : `/jihad-study-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.jihad.backgroundColor }}>
                <div className="icon">📖</div>
                <h3>{translations.cards.jihad.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.jihad.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.jihad.description}</p>
                <span className="btn-primary">{translations.cards.jihad.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/terrorist-organizations' : `/terrorist-organizations-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.terrorist.backgroundColor }}>
                <div className="icon">☠️</div>
                <h3>{translations.cards.terrorist.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.terrorist.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.terrorist.description}</p>
                <span className="btn-primary">{translations.cards.terrorist.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/recent-attacks' : `/recent-attacks-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.recentAttacks.backgroundColor }}>
                <div className="icon">🚨</div>
                <h3>{translations.cards.recentAttacks.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.recentAttacks.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.recentAttacks.description}</p>
                <span className="btn-primary">{translations.cards.recentAttacks.button}</span>
              </div>
            </div>
          </Link>

          <Link href={currentLang === 'en' ? '/solution' : `/solution-${currentLang}`}>
            <div className="nav-card">
              <div className="nav-card-header" style={{ background: PAGES.solution.backgroundColor }}>
                <div className="icon">💡</div>
                <h3>{translations.cards.solution.title}</h3>
              </div>
              <div className="nav-card-body">
                <p>{translations.cards.solution.subtitle}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{translations.cards.solution.description}</p>
                <span className="btn-primary">{translations.cards.solution.button}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
