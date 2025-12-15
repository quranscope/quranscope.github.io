import { Helmet } from 'react-helmet-async'
import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../pages/PageContent.css'

export default function TerroristOrganizations() {
  const { currentLang } = useOutletContext()
  const [translations, setTranslations] = useState(null)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/lang/terrorist_${currentLang}.json`)
        if (response.ok) {
          const data = await response.json()
          setTranslations(data)
        }
      } catch (error) {
        console.error('Error loading terrorist translations:', error)
      }
    }
    loadTranslations()
  }, [currentLang])

  if (!translations) return <div>Loading...</div>

  return (
    <>
      <Helmet>
        <title>{translations.title}</title>
        <meta name="description" content={translations.introParaOverview} />
      </Helmet>

      <div className="page-container">
        <header className="page-header" style={{ background: 'linear-gradient(135deg, #8b0000 0%, #dc143c 100%)' }}>
          <h1>{translations.title}</h1>
          <p className="page-subtitle">{translations.subtitle}</p>
        </header>

        <div className="page-content">
          <section className="intro-section">
            <p>{translations.introParaOverview}</p>
            <p>{translations.introParaCommonTactics}</p>
            <p>{translations.introParaScope}</p>
          </section>

          <section className="warning-box">
            <h3>{translations.warningTitle}</h3>
            <p>{translations.warningText}</p>
          </section>

          <section className="stats-section">
            <h2>{translations.statsTitle}</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">70+</div>
                <div className="stat-label">{translations.statActiveGroupsLabel}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">{translations.statCountriesAffectedLabel}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25,000+</div>
                <div className="stat-label">{translations.statAnnualDeathsLabel}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$100B+</div>
                <div className="stat-label">{translations.statEconomicDamageLabel}</div>
              </div>
            </div>
          </section>

          <section className="organizations-section">
            <h2>{translations.categoryBannedTitle}</h2>
            
            {/* ISIS */}
            <div className="org-card">
              <h3>{translations.isisName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.isisAka}</span>
                <span className="org-status">{translations.isisStatus}</span>
                <span className="org-location">{translations.isisLocation}</span>
              </div>
              <p className="org-description">{translations.isisDesc}</p>
              <div className="org-crimes">
                <h4>{translations.isisCrimesTitle}</h4>
                <ul>
                  {translations.isisCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Al-Qaeda */}
            <div className="org-card">
              <h3>{translations.alqaedaName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.alqaedaAka}</span>
                <span className="org-status">{translations.alqaedaStatus}</span>
                <span className="org-location">{translations.alqaedaLocation}</span>
              </div>
              <p className="org-description">{translations.alqaedaDesc}</p>
              <div className="org-crimes">
                <h4>{translations.alqaedaCrimesTitle}</h4>
                <ul>
                  {translations.alqaedaCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Boko Haram */}
            <div className="org-card">
              <h3>{translations.bokoharamName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.bokoharamAka}</span>
                <span className="org-status">{translations.bokoharamStatus}</span>
                <span className="org-location">{translations.bokoharamLocation}</span>
              </div>
              <p className="org-description">{translations.bokoharamDesc}</p>
              <div className="org-crimes">
                <h4>{translations.bokoharamCrimesTitle}</h4>
                <ul>
                  {translations.bokoharamCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PFI */}
            <div className="org-card">
              <h3>{translations.talibanName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.talibanAka}</span>
                <span className="org-status">{translations.talibanStatus}</span>
                <span className="org-location">{translations.talibanLocation}</span>
              </div>
              <p className="org-description">{translations.talibanDesc}</p>
              <div className="org-crimes">
                <h4>{translations.talibanCrimesTitle}</h4>
                <ul>
                  {translations.talibanCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="organizations-section">
            <h2>{translations.categoryActiveTitle}</h2>

            {/* Hamas */}
            <div className="org-card">
              <h3>{translations.hamasName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.hamasAka}</span>
                <span className="org-status active">{translations.hamasStatus}</span>
                <span className="org-location">{translations.hamasLocation}</span>
              </div>
              <p className="org-description">{translations.hamasDesc}</p>
              <div className="org-crimes">
                <h4>{translations.hamasCrimesTitle}</h4>
                <ul>
                  {translations.hamasCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hezbollah */}
            <div className="org-card">
              <h3>{translations.hezbollahName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.hezbollahAka}</span>
                <span className="org-status active">{translations.hezbollahStatus}</span>
                <span className="org-location">{translations.hezbollahLocation}</span>
              </div>
              <p className="org-description">{translations.hezbollahDesc}</p>
              <div className="org-crimes">
                <h4>{translations.hezbollahCrimesTitle}</h4>
                <ul>
                  {translations.hezbollahCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Taliban */}
            <div className="org-card">
              <h3>{translations.alshabaabName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.alshabaabAka}</span>
                <span className="org-status active">{translations.alshabaabStatus}</span>
                <span className="org-location">{translations.alshabaabLocation}</span>
              </div>
              <p className="org-description">{translations.alshabaabDesc}</p>
              <div className="org-crimes">
                <h4>{translations.alshabaabCrimesTitle}</h4>
                <ul>
                  {translations.alshabaabCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Al-Shabaab */}
            <div className="org-card">
              <h3>{translations.aqapName}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.aqapAka}</span>
                <span className="org-status active">{translations.aqapStatus}</span>
                <span className="org-location">{translations.aqapLocation}</span>
              </div>
              <p className="org-description">{translations.aqapDesc}</p>
              <div className="org-crimes">
                <h4>{translations.aqapCrimesTitle}</h4>
                <ul>
                  {translations.aqapCrimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {translations.conclusionTitle && (
            <section className="conclusion-section">
              <h2>{translations.conclusionTitle}</h2>
              <ul>
                {translations.conclusionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
