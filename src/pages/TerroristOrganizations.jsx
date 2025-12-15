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
        <meta name="description" content={translations.introPara1} />
      </Helmet>

      <div className="page-container">
        <header className="page-header" style={{ background: 'linear-gradient(135deg, #8b0000 0%, #dc143c 100%)' }}>
          <h1>{translations.title}</h1>
          <p className="page-subtitle">{translations.subtitle}</p>
        </header>

        <div className="page-content">
          <section className="intro-section">
            <p>{translations.introPara1}</p>
            <p>{translations.introPara2}</p>
            <p>{translations.introPara3}</p>
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
                <div className="stat-label">{translations.stat1Label}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">{translations.stat2Label}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">25,000+</div>
                <div className="stat-label">{translations.stat3Label}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$100B+</div>
                <div className="stat-label">{translations.stat4Label}</div>
              </div>
            </div>
          </section>

          <section className="organizations-section">
            <h2>{translations.category1Title}</h2>
            
            {/* ISIS */}
            <div className="org-card">
              <h3>{translations.org1Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org1Aka}</span>
                <span className="org-status">{translations.org1Status}</span>
                <span className="org-location">{translations.org1Location}</span>
              </div>
              <p className="org-description">{translations.org1Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org1CrimesTitle}</h4>
                <ul>
                  {translations.org1Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Al-Qaeda */}
            <div className="org-card">
              <h3>{translations.org2Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org2Aka}</span>
                <span className="org-status">{translations.org2Status}</span>
                <span className="org-location">{translations.org2Location}</span>
              </div>
              <p className="org-description">{translations.org2Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org2CrimesTitle}</h4>
                <ul>
                  {translations.org2Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Boko Haram */}
            <div className="org-card">
              <h3>{translations.org3Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org3Aka}</span>
                <span className="org-status">{translations.org3Status}</span>
                <span className="org-location">{translations.org3Location}</span>
              </div>
              <p className="org-description">{translations.org3Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org3CrimesTitle}</h4>
                <ul>
                  {translations.org3Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PFI */}
            <div className="org-card">
              <h3>{translations.org4Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org4Aka}</span>
                <span className="org-status">{translations.org4Status}</span>
                <span className="org-location">{translations.org4Location}</span>
              </div>
              <p className="org-description">{translations.org4Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org4CrimesTitle}</h4>
                <ul>
                  {translations.org4Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="organizations-section">
            <h2>{translations.category2Title}</h2>

            {/* Hamas */}
            <div className="org-card">
              <h3>{translations.org5Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org5Aka}</span>
                <span className="org-status active">{translations.org5Status}</span>
                <span className="org-location">{translations.org5Location}</span>
              </div>
              <p className="org-description">{translations.org5Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org5CrimesTitle}</h4>
                <ul>
                  {translations.org5Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hezbollah */}
            <div className="org-card">
              <h3>{translations.org6Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org6Aka}</span>
                <span className="org-status active">{translations.org6Status}</span>
                <span className="org-location">{translations.org6Location}</span>
              </div>
              <p className="org-description">{translations.org6Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org6CrimesTitle}</h4>
                <ul>
                  {translations.org6Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Taliban */}
            <div className="org-card">
              <h3>{translations.org7Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org7Aka}</span>
                <span className="org-status active">{translations.org7Status}</span>
                <span className="org-location">{translations.org7Location}</span>
              </div>
              <p className="org-description">{translations.org7Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org7CrimesTitle}</h4>
                <ul>
                  {translations.org7Crimes.map((crime, index) => (
                    <li key={index}>{crime}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Al-Shabaab */}
            <div className="org-card">
              <h3>{translations.org8Name}</h3>
              <div className="org-meta">
                <span className="org-aka">{translations.org8Aka}</span>
                <span className="org-status active">{translations.org8Status}</span>
                <span className="org-location">{translations.org8Location}</span>
              </div>
              <p className="org-description">{translations.org8Desc}</p>
              <div className="org-crimes">
                <h4>{translations.org8CrimesTitle}</h4>
                <ul>
                  {translations.org8Crimes.map((crime, index) => (
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
