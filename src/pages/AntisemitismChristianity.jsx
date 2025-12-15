import Head from 'next/head'

export default function AntisemitismChristianity({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">{t?.loadingText || 'Loading...'}</div>
  }

  const styles = {
    container: { maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' },
    intro: { background: '#fff3cd', borderLeft: '5px solid #ffc107', padding: '1.5rem', marginBottom: '2rem', borderRadius: '5px' },
    introH3: { color: '#856404', marginBottom: '0.5rem' },
    introP: { color: '#856404', margin: '0.5rem 0' },
    contentCard: { background: 'white', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    h2: { color: '#d35400', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #e67e22' },
    categoryTag: { display: 'inline-block', background: '#d35400', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 'bold' },
    verseBox: { background: '#f8f9fa', borderLeft: '4px solid #e67e22', padding: '1rem', margin: '1rem 0', fontStyle: 'italic' },
    verseRef: { color: '#d35400', fontWeight: 'bold', marginTop: '0.5rem', display: 'block' },
    hadithBox: { background: '#ffebee', borderLeft: '4px solid #f44336', padding: '1rem', margin: '1rem 0' },
    hadithH4: { color: '#c62828', marginBottom: '0.5rem' },
    historicalBox: { background: '#e8f5e9', borderLeft: '4px solid #4caf50', padding: '1rem', margin: '1rem 0' },
    historicalH4: { color: '#2e7d32', marginBottom: '0.5rem' },
    warningBox: { background: '#ffccbc', border: '2px solid #d84315', padding: '1rem', margin: '1rem 0', borderRadius: '5px' },
    warningH4: { color: '#bf360c', marginBottom: '0.5rem' },
    table: { width: '100%', borderCollapse: 'collapse', margin: '1rem 0', background: 'white' },
    th: { border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left', background: '#d35400', color: 'white', fontWeight: 'bold' },
    td: { border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' },
    ul: { marginLeft: '1.5rem', marginTop: '0.5rem' },
    ol: { marginLeft: '1.5rem', marginTop: '0.5rem' },
    backLink: { display: 'inline-block', color: '#667eea', textDecoration: 'none', marginBottom: '1rem', fontSize: '1rem', fontWeight: '500' }
  }

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href="https://quranscope.github.io/antisemitism-christianity" />
      </Head>
      
      <div style={styles.container}>
        <a href="/" style={styles.backLink}>{t.backLink}</a>
        
        <div style={styles.intro}>
          <h3 style={styles.introH3}>{t.introTitle}</h3>
          <p style={styles.introP}>{t.introPara1}</p>
          <p style={styles.introP} dangerouslySetInnerHTML={{ __html: t.introPara2 }} />
        </div>

        {/* QURANIC VERSES AGAINST JEWS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryJewishVerses}</span>
          <h2 style={styles.h2}>{t.jewishVersesTitle}</h2>
          
          <div style={styles.verseBox}>
            {t.verse582}
            <span style={styles.verseRef}>Quran 5:82</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse564}
            <span style={styles.verseRef}>Quran 5:64</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse296}
            <span style={styles.verseRef}>Quran 2:96</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse542}
            <span style={styles.verseRef}>Quran 5:42</span>
          </div>

          <div style={styles.warningBox}>
            <h4 style={styles.warningH4}>{t.apesWarningTitle}</h4>
            <div style={styles.verseBox}>
              {t.verse265}
              <span style={styles.verseRef}>Quran 2:65</span>
            </div>
            <div style={styles.verseBox}>
              {t.verse560}
              <span style={styles.verseRef}>Quran 5:60</span>
            </div>
            <div style={styles.verseBox}>
              {t.verse7166}
              <span style={styles.verseRef}>Quran 7:166</span>
            </div>
          </div>

          <div style={styles.verseBox}>
            {t.verse930}
            <span style={styles.verseRef}>Quran 9:30</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse578}
            <span style={styles.verseRef}>Quran 5:78</span>
          </div>
        </div>

        {/* QURANIC VERSES AGAINST CHRISTIANS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryChristianVerses}</span>
          <h2 style={styles.h2}>{t.christianVersesTitle}</h2>
          
          <div style={styles.verseBox}>
            {t.verse551}
            <span style={styles.verseRef}>Quran 5:51</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse517}
            <span style={styles.verseRef}>Quran 5:17, 5:72</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse573}
            <span style={styles.verseRef}>Quran 5:73</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse986}
            <span style={styles.verseRef}>Quran 98:6</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse4171}
            <span style={styles.verseRef}>Quran 4:171</span>
          </div>
        </div>

        {/* VERSES COMMANDING FIGHTING */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryFighting}</span>
          <h2 style={styles.h2}>{t.fightingTitle}</h2>
          
          <div style={styles.warningBox}>
            <h4 style={styles.warningH4}>{t.fightCommandTitle}</h4>
            <div style={styles.verseBox}>
              {t.verse929}
              <span style={styles.verseRef}>Quran 9:29</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: t.fightExplanation }} />
          </div>

          <div style={styles.verseBox}>
            {t.verse9123}
            <span style={styles.verseRef}>Quran 9:123</span>
          </div>

          <div style={styles.verseBox}>
            {t.verse2216}
            <span style={styles.verseRef}>Quran 2:216</span>
          </div>
        </div>

        {/* HADITH ANTI-JEWISH */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryJewishHadith}</span>
          <h2 style={styles.h2}>{t.jewishHadithTitle}</h2>
          
          <div style={styles.hadithBox}>
            <h4 style={styles.hadithH4}>{t.hadith1Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.hadith1Ref }} />
            <p>{t.hadith1Text}</p>
          </div>

          <div style={styles.hadithBox}>
            <h4 style={styles.hadithH4}>{t.hadith2Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.hadith2Ref }} />
            <p>{t.hadith2Text}</p>
          </div>

          <div style={styles.hadithBox}>
            <h4 style={styles.hadithH4}>{t.hadith3Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.hadith3Ref }} />
            <p>{t.hadith3Text}</p>
          </div>

          <div style={styles.hadithBox}>
            <h4 style={styles.hadithH4}>{t.hadith4Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.hadith4Ref }} />
            <p>{t.hadith4Text}</p>
          </div>
        </div>

        {/* HADITH ANTI-CHRISTIAN */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryChristianHadith}</span>
          <h2 style={styles.h2}>{t.christianHadithTitle}</h2>
          
          <div style={styles.hadithBox}>
            <h4 style={styles.hadithH4}>{t.hadith5Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.hadith5Ref }} />
            <p>{t.hadith5Text}</p>
            <p dangerouslySetInnerHTML={{ __html: t.hadith5Interp }} />
          </div>

          <div style={styles.hadithBox}>
            <h4 style={styles.hadithH4}>{t.hadith6Title}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.hadith6Ref }} />
            <p>{t.hadith6Text}</p>
          </div>
        </div>

        {/* HISTORICAL PERSECUTION JEWS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryJewishHistory}</span>
          <h2 style={styles.h2}>{t.jewishHistoryTitle}</h2>
          
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{t.tableYearHeader}</th>
                <th style={styles.th}>{t.tableEventHeader}</th>
                <th style={styles.th}>{t.tableLocationHeader}</th>
                <th style={styles.th}>{t.tableDetailsHeader}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event627Year}</td>
                <td style={styles.td}>{t.event627Name}</td>
                <td style={styles.td}>{t.event627Location}</td>
                <td style={styles.td}>{t.event627Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event634Year}</td>
                <td style={styles.td}>{t.event634Name}</td>
                <td style={styles.td}>{t.event634Location}</td>
                <td style={styles.td}>{t.event634Details}</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event1011Year}</td>
                <td style={styles.td}>{t.event1011Name}</td>
                <td style={styles.td}>{t.event1011Location}</td>
                <td style={styles.td}>{t.event1011Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event1033Year}</td>
                <td style={styles.td}>{t.event1033Name}</td>
                <td style={styles.td}>{t.event1033Location}</td>
                <td style={styles.td}>{t.event1033Details}</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event1066Year}</td>
                <td style={styles.td}>{t.event1066Name}</td>
                <td style={styles.td}>{t.event1066Location}</td>
                <td style={styles.td}>{t.event1066Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event1148Year}</td>
                <td style={styles.td}>{t.event1148Name}</td>
                <td style={styles.td}>{t.event1148Location}</td>
                <td style={styles.td}>{t.event1148Details}</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event1941Year}</td>
                <td style={styles.td}>{t.event1941Name}</td>
                <td style={styles.td}>{t.event1941Location}</td>
                <td style={styles.td}>{t.event1941Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event1948Year}</td>
                <td style={styles.td}>{t.event1948Name}</td>
                <td style={styles.td}>{t.event1948Location}</td>
                <td style={styles.td}>{t.event1948Details}</td>
              </tr>
            </tbody>
          </table>

          <div style={styles.historicalBox}>
            <h4 style={styles.historicalH4}>{t.jewishPopTitle}</h4>
            <ul style={styles.ul}>
              <li dangerouslySetInnerHTML={{ __html: t.popIraq }} />
              <li dangerouslySetInnerHTML={{ __html: t.popEgypt }} />
              <li dangerouslySetInnerHTML={{ __html: t.popYemen }} />
              <li dangerouslySetInnerHTML={{ __html: t.popSyria }} />
              <li dangerouslySetInnerHTML={{ __html: t.popLibya }} />
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.popResult }} />
          </div>
        </div>

        {/* HISTORICAL PERSECUTION CHRISTIANS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryJewishHistory}</span>
          <h2 style={styles.h2}>{t.christianHistoryTitle}</h2>
          
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{t.tableYearHeader}</th>
                <th style={styles.th}>{t.tableEventHeader}</th>
                <th style={styles.th}>{t.tableLocationHeader}</th>
                <th style={styles.th}>{t.tableDetailsHeader}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event638Year}</td>
                <td style={styles.td}>{t.event638Name}</td>
                <td style={styles.td}>{t.event638Location}</td>
                <td style={styles.td}>{t.event638Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event642Year}</td>
                <td style={styles.td}>{t.event642Name}</td>
                <td style={styles.td}>{t.event642Location}</td>
                <td style={styles.td}>{t.event642Details}</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event1009Year}</td>
                <td style={styles.td}>{t.event1009Name}</td>
                <td style={styles.td}>{t.event1009Location}</td>
                <td style={styles.td}>{t.event1009Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event1453Year}</td>
                <td style={styles.td}>{t.event1453Name}</td>
                <td style={styles.td}>{t.event1453Location}</td>
                <td style={styles.td}>{t.event1453Details}</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event1915Year}</td>
                <td style={styles.td}>{t.event1915Name}</td>
                <td style={styles.td}>{t.event1915Location}</td>
                <td style={styles.td}>{t.event1915Details}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event1914aYear}</td>
                <td style={styles.td}>{t.event1914aName}</td>
                <td style={styles.td}>{t.event1914aLocation}</td>
                <td style={styles.td}>{t.event1914aDetails}</td>
              </tr>
              <tr style={{ background: '#f8f9fa' }}>
                <td style={styles.td}>{t.event1914bYear}</td>
                <td style={styles.td}>{t.event1914bName}</td>
                <td style={styles.td}>{t.event1914bLocation}</td>
                <td style={styles.td}>{t.event1914bDetails}</td>
              </tr>
              <tr>
                <td style={styles.td}>{t.event2014Year}</td>
                <td style={styles.td}>{t.event2014Name}</td>
                <td style={styles.td}>{t.event2014Location}</td>
                <td style={styles.td}>{t.event2014Details}</td>
              </tr>
            </tbody>
          </table>

          <div style={styles.historicalBox}>
            <h4 style={styles.historicalH4}>{t.christianPopTitle}</h4>
            <ul style={styles.ul}>
              <li dangerouslySetInnerHTML={{ __html: t.popTurkey }} />
              <li dangerouslySetInnerHTML={{ __html: t.popIraqChristian }} />
              <li dangerouslySetInnerHTML={{ __html: t.popSyriaChristian }} />
              <li dangerouslySetInnerHTML={{ __html: t.popEgyptChristian }} />
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.popOverall }} />
          </div>
        </div>

        {/* DHIMMI SYSTEM */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryDhimmi}</span>
          <h2 style={styles.h2}>{t.dhimmiTitle}</h2>
          
          <div style={styles.warningBox}>
            <h4 style={styles.warningH4}>{t.pactTitle}</h4>
            <ul style={styles.ul}>
              <li>{t.rule1}</li>
              <li>{t.rule2}</li>
              <li>{t.rule3}</li>
              <li>{t.rule4}</li>
              <li>{t.rule5}</li>
              <li>{t.rule6}</li>
              <li>{t.rule7}</li>
              <li>{t.rule8}</li>
              <li>{t.rule9}</li>
            </ul>
          </div>

          <div style={styles.historicalBox}>
            <h4 style={styles.historicalH4}>{t.jizyaTitle}</h4>
            <ul style={styles.ul}>
              <li>{t.jizya1}</li>
              <li>{t.jizya2}</li>
              <li>{t.jizya3}</li>
              <li>{t.jizya4}</li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.jizyaResult }} />
          </div>
        </div>

        {/* MODERN IMPLICATIONS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>{t.categoryModern}</span>
          <h2 style={styles.h2}>{t.modernTitle}</h2>
          
          <div style={styles.warningBox}>
            <h4 style={styles.warningH4}>{t.modernWarningTitle}</h4>
            <ul style={styles.ul}>
              <li dangerouslySetInnerHTML={{ __html: t.modern1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern3 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern4 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern5 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern6 }} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
