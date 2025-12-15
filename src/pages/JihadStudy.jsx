import Head from 'next/head'

export default function JihadStudy({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">{t?.loadingText || 'Loading...'}</div>
  }

  const styles = {
    intro: { background: '#fff3cd', borderLeft: '5px solid #ffc107', padding: '1.5rem', marginBottom: '2rem', borderRadius: '5px' },
    verseBox: { background: '#e3f2fd', borderLeft: '4px solid #2196f3', padding: '1rem', margin: '1rem 0', borderRadius: '4px' },
    verseRef: { fontWeight: 'bold', color: '#1565c0', marginBottom: '0.5rem' },
    hadithBox: { background: '#f3e5f5', borderLeft: '4px solid #9c27b0', padding: '1rem', margin: '1rem 0', borderRadius: '4px' },
    hadithRef: { fontWeight: 'bold', color: '#6a1b9a', marginBottom: '0.5rem' },
    warBox: { background: '#ffebee', borderLeft: '4px solid #f44336', padding: '1rem', margin: '1rem 0', borderRadius: '4px' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' },
    statBox: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' },
    table: { width: '100%', borderCollapse: 'collapse', margin: '1rem 0', background: 'white' },
    th: { background: '#c0392b', color: 'white', padding: '0.75rem', textAlign: 'left', fontWeight: 'bold' },
    td: { padding: '0.75rem', borderBottom: '1px solid #ddd' },
  };

  return (
    <>
      <Head>
                <title>{t.title} - Quran Scope</title>
        <meta name="description" content={t.subtitle} />
        <link rel="canonical" href="https://quranscope.github.io/jihad-study" />
        <meta property="og:title" content={t.title} />
      </Head>
      <div className="page-content">
        <a href="/" className="back-link">{t.backLink}</a>
        
        <h1>{t.title}</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>{t.pageSubtitle}</p>

        <div style={styles.intro}>
          <h3 dangerouslySetInnerHTML={{ __html: t.introTitle }} />
          <p dangerouslySetInnerHTML={{ __html: t.introParaOverview }} />
          <p dangerouslySetInnerHTML={{ __html: t.introParaCommonTactics }} />
        </div>

        <h2 dangerouslySetInnerHTML={{ __html: t.etymologyTitle }} />
        <div className="content-section">
          <div style={{ background: '#e8f5e9', borderLeft: '4px solid #4caf50', padding: '1rem', margin: '1rem 0', borderRadius: '4px' }}>
            <h4 style={{ color: '#2e7d32' }}>{t.lingMeaningTitle}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.lingMeaningText }} />
            <p>{t.lingMeaningText2}</p>
          </div>

          <div style={styles.verseBox}>
            <div style={styles.verseRef}>{t.quranDefTitle}</div>
            <p dangerouslySetInnerHTML={{ __html: t.quranDef1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.quranDef2 }} />
          </div>

          <div style={styles.hadithBox}>
            <div style={styles.hadithRef}>{t.prophetDefTitle}</div>
            <p dangerouslySetInnerHTML={{ __html: t.prophetDef1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.prophetDef2 }} />
          </div>
        </div>

        <h2 dangerouslySetInnerHTML={{ __html: t.typesTitle }} />
        <div className="content-section">
          <h3>{t.greaterJihadTitle}</h3>
          <p>{t.greaterJihadSubtitle}</p>
          <p>{t.greaterJihadText1}</p>
          <p dangerouslySetInnerHTML={{ __html: t.greaterJihadText2 }} />

          <h3>{t.lesserJihadTitle}</h3>
          <div style={styles.warBox}>
            <h4 style={{ color: '#c62828' }}>{t.lesserJihadSubtitle}</h4>
            <p>{t.lesserJihadText1}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.lesserItem1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.lesserItem2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.lesserItem3 }} />
            </ul>
          </div>

          <div style={styles.verseBox}>
            <div style={styles.verseRef}>
              {t.offensiveTitle}
            </div>
            <p dangerouslySetInnerHTML={{ __html: t.offensiveText1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.offensiveText2 }} />
          </div>
        </div>

        <h2 dangerouslySetInnerHTML={{ __html: t.quranEvidenceTitle }} />
        <div className="content-section">
          <h3>{t.chronologyTitle}</h3>
          <p>{t.chronologyText}</p>

          <div style={styles.verseBox}>
            <div style={styles.verseRef}>{t.meccanTitle}</div>
            <p dangerouslySetInnerHTML={{ __html: t.meccanText1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.meccanText2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.meccanNote }} />
          </div>

          <div style={styles.verseBox}>
            <div style={styles.verseRef}>{t.medinanTitle}</div>
            <p dangerouslySetInnerHTML={{ __html: t.medinanText1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.medinanText2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.medinanNote }} />
          </div>
        </div>

        <div className="content-section">
          <h3>{t.keyVersesTitle}</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{t.verseHeader}</th>
                <th style={styles.th}>{t.commandHeader}</th>
                <th style={styles.th}>{t.contextHeader}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>Quran 2:191-193</td><td style={styles.td} dangerouslySetInnerHTML={{ __html: t.verse2191 }} /><td style={styles.td}>{t.context2191}</td></tr>
              <tr><td style={styles.td}>Quran 4:89</td><td style={styles.td} dangerouslySetInnerHTML={{ __html: t.verse489 }} /><td style={styles.td}>{t.context489}</td></tr>
              <tr><td style={styles.td}>Quran 8:12</td><td style={styles.td} dangerouslySetInnerHTML={{ __html: t.verse812 }} /><td style={styles.td}>{t.context812}</td></tr>
              <tr><td style={styles.td}>Quran 8:39</td><td style={styles.td} dangerouslySetInnerHTML={{ __html: t.verse839 }} /><td style={styles.td}>{t.context839}</td></tr>
              <tr><td style={styles.td}>Quran 9:29</td><td style={styles.td} dangerouslySetInnerHTML={{ __html: t.verse929 }} /><td style={styles.td}>{t.context929}</td></tr>
              <tr><td style={styles.td}>Quran 9:111</td><td style={styles.td} dangerouslySetInnerHTML={{ __html: t.verse9111 }} /><td style={styles.td}>{t.context9111}</td></tr>
            </tbody>
          </table>
        </div>

        <h2>{t.hadithEvidenceTitle}</h2>
        <div className="content-section">
          <div style={styles.hadithBox}>
            <div style={styles.hadithRef}>Jihad as Best Deed</div>
            <p><strong>Sahih Bukhari 2785</strong> - Muhammad said jihad (fighting) is second-best deed after belief in Allah.</p>
          </div>

          <div style={styles.hadithBox}>
            <div style={styles.hadithRef}>{t.hadith2Title}</div>
            <p dangerouslySetInnerHTML={{ __html: t.hadith2Text }} />
          </div>

          <div style={styles.hadithBox}>
            <div style={styles.hadithRef}>{t.hadith4Title}</div>
            <p dangerouslySetInnerHTML={{ __html: t.hadith4Text }} />
          </div>

          <div style={styles.hadithBox}>
            <div style={styles.hadithRef}>{t.hadith5Title}</div>
            <p dangerouslySetInnerHTML={{ __html: t.hadith5Text }} />
          </div>
        </div>

        <h2>{t.historicalTitle}</h2>
        <div className="content-section">
          <h3>{t.muhammadCampaignsTitle}</h3>
          <div style={styles.statsGrid}>
            <div style={styles.statBox}><h3>27</h3><p>{t.statGhazwa}</p></div>
            <div style={styles.statBox}><h3>38</h3><p>{t.statSaraya}</p></div>
            <div style={styles.statBox}><h3>65+</h3><p>{t.statTotal}</p></div>
            <div style={styles.statBox}><h3>10</h3><p>{t.statYears}</p></div>
          </div>

          <h3>{t.majorBattlesTitle}</h3>
          <table style={styles.table}>
            <thead>
              <tr><th style={styles.th}>{t.battleYearHeader}</th><th style={styles.th}>{t.battleNameHeader}</th><th style={styles.th}>{t.battleVictimsHeader}</th><th style={styles.th}>{t.battleOutcomeHeader}</th></tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>624</td><td style={styles.td}>{t.battleBadr}</td><td style={styles.td}>{t.battleBadrVictims}</td><td style={styles.td}>{t.battleBadrOutcome}</td></tr>
              <tr><td style={styles.td}>627</td><td style={styles.td}>{t.battleTrench}</td><td style={styles.td}>{t.battleTrenchVictims}</td><td style={styles.td}>{t.battleTrenchOutcome}</td></tr>
              <tr><td style={styles.td}>628</td><td style={styles.td}>{t.battleKhaybar}</td><td style={styles.td}>{t.battleKhaybarVictims}</td><td style={styles.td}>{t.battleKhaybarOutcome}</td></tr>
              <tr><td style={styles.td}>630</td><td style={styles.td}>{t.battleMecca}</td><td style={styles.td}>{t.battleMeccaVictims}</td><td style={styles.td}>{t.battleMeccaOutcome}</td></tr>
              <tr><td style={styles.td}>630</td><td style={styles.td}>{t.battleHunain}</td><td style={styles.td}>{t.battleHunainVictims}</td><td style={styles.td}>{t.battleHunainOutcome}</td></tr>
            </tbody>
          </table>

          <h3>{t.rashidunTitle}</h3>
          <div style={styles.warBox}>
            <p>{t.rashidunText1}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem3 }} />
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem4 }} />
            </ul>
          </div>

          <h3>{t.umayyadTitle}</h3>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem2 }} />
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem3 }} />
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem4 }} />
          </ul>

          <h3>{t.abbasidTitle}</h3>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t.abbasidItem1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.ottomanItem3 }} />
          </ul>
        </div>

        <h2>{t.modernTitle}</h2>
        <div className="content-section">
          <h3>{t.terrorGroupsTitle}</h3>
          <table style={styles.table}>
            <thead>
              <tr><th style={styles.th}>{t.groupHeader}</th><th style={styles.th}>{t.regionHeader}</th><th style={styles.th}>{t.deathsHeader}</th><th style={styles.th}>{t.justificationHeader}</th></tr>
            </thead>
            <tbody>
              <tr><td style={styles.td}>{t.groupAlQaeda}</td><td style={styles.td}>{t.regionAlQaeda}</td><td style={styles.td}>{t.deathsAlQaeda}</td><td style={styles.td}>{t.justAlQaeda}</td></tr>
              <tr><td style={styles.td}>{t.groupISIS}</td><td style={styles.td}>{t.regionISIS}</td><td style={styles.td}>{t.deathsISIS}</td><td style={styles.td}>{t.justISIS}</td></tr>
              <tr><td style={styles.td}>{t.groupBoko}</td><td style={styles.td}>{t.regionBoko}</td><td style={styles.td}>{t.deathsBoko}</td><td style={styles.td}>{t.justBoko}</td></tr>
              <tr><td style={styles.td}>{t.groupTaliban}</td><td style={styles.td}>{t.regionTaliban}</td><td style={styles.td}>{t.deathsTaliban}</td><td style={styles.td}>{t.justTaliban}</td></tr>
              <tr><td style={styles.td}>{t.groupHamas}</td><td style={styles.td}>{t.regionHamas}</td><td style={styles.td}>{t.deathsHamas}</td><td style={styles.td}>{t.justHamas}</td></tr>
              <tr><td style={styles.td}>{t['groupAl-Shabaab']}</td><td style={styles.td}>{t.regionShabaab}</td><td style={styles.td}>{t.deathsShabaab}</td><td style={styles.td}>{t.justShabaab}</td></tr>
            </tbody>
          </table>

          <h3>{t.attacksTitle}</h3>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t.attack1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack3 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack4 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack5 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack9 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack11 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack12 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack14 }} />
          </ul>
        </div>

        <h2>{t.whyTitle}</h2>
        <div className="content-section">
          <ol>
            <li><strong>{t.reason1Title}</strong> {t.reason1Text}</li>
            <li><strong>{t.reason2Title}</strong> {t.reason2Text}</li>
            <li><strong>{t.reason3Title}</strong> {t.reason3Text}</li>
            <li><strong>{t.reason4Title}</strong> {t.reason4Text}</li>
            <li><strong>{t.reason5Title}</strong> {t.reason5Text}</li>
            <li><strong>{t.reason6Title}</strong> {t.reason6Text}</li>
            <li><strong>{t.reason7Title}</strong> {t.reason7Text}</li>
            <li><strong>{t.reason8Title}</strong> {t.reason8Text}</li>
          </ol>
        </div>

        <h2>{t.conclusionTitle}</h2>
        <div className="content-section">
          <div style={styles.statsGrid}>
            <div style={styles.statBox}><h3>164</h3><p>{t.statJihadVerses}</p></div>
            <div style={styles.statBox}><h3>1,400</h3><p>{t.statYearsWar}</p></div>
            <div style={styles.statBox}><h3>100+</h3><p>{t.statCountries}</p></div>
            <div style={styles.statBox}><h3>270M+</h3><p>{t.statDeaths}</p></div>
          </div>

          <div style={styles.intro}>
            <h3>{t.finalTitle}</h3>
            <p>{t.finalPara1}</p>
            <p>{t.finalPara2}</p>
            <p dangerouslySetInnerHTML={{ __html: t.finalPara3 }} />
          </div>
        </div>

        <div className="nav-buttons">
          <a href="/" className="nav-button">🏠 Home</a>
        </div>
      </div>
    </>
  )
}
