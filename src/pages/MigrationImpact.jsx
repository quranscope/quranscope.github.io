import Head from 'next/head'

export default function MigrationImpact({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">Loading...</div>
  }

  const styles = {
    warningBox: { background: '#ffebee', borderLeft: '6px solid #c62828', padding: '2rem', marginBottom: '2rem', borderRadius: '8px' },
    impactItem: { background: '#fff', border: '1px solid #ddd', padding: '1.5rem', margin: '1rem 0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    statsBox: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0' },
    timelineItem: { borderLeft: '3px solid #2196f3', paddingLeft: '1.5rem', marginBottom: '1.5rem' },
    countryTag: { display: 'inline-block', background: '#e3f2fd', color: '#1565c0', padding: '0.25rem 0.75rem', borderRadius: '12px', margin: '0.25rem', fontSize: '0.9rem', fontWeight: 'bold' },
    conclusionBox: { background: '#e8f5e9', borderLeft: '5px solid #4caf50', padding: '1.5rem', marginTop: '2rem', borderRadius: '8px' },
    quoteBox: { background: '#f5f5f5', borderLeft: '4px solid #666', padding: '1rem', margin: '1rem 0', fontStyle: 'italic' },
    newsLink: { color: '#2196f3', textDecoration: 'none', fontWeight: 'bold' },
  };

  return (
    <>
      <Head>
        <title>Islamic Migration Impact - Quran Scope</title>
        <meta name="description" content="Lebanon pattern repeating in Europe: Demographics → Demands → Violence → Takeover. Eastern Europe survival vs Western suicide." />
        <link rel="canonical" href="https://majorqbot.github.io/quranscopycreatedcontents/migration-impact" />
      </Head>
      <div className="page-content">
        <a href="/quranscopycreatedcontents/" className="back-link">← Back to Home</a>
        
        <h1>Islamic Migration: The Lebanon Pattern</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>How Muslim Demographics Transform Nations</p>

        <div style={styles.warningBox}>
          <h2 style={{ color: '#c62828', marginTop: 0 }}>⚠️ The Documented Pattern</h2>
          <ol>
            <li><strong>Phase 1 - Demographics:</strong> Muslims arrive as minority, claim victimhood, demand tolerance</li>
            <li><strong>Phase 2 - Demands:</strong> Request special accommodations (prayer rooms, halal food, Sharia courts, separate laws)</li>
            <li><strong>Phase 3 - Parallel Societies:</strong> Create no-go zones, reject host culture, police can't enter without military backup</li>
            <li><strong>Phase 4 - Violence:</strong> Riots, terror attacks, rape epidemics, grooming gangs target native children</li>
            <li><strong>Phase 5 - Takeover:</strong> Once majority, enforce Sharia, eradicate host culture, persecute minorities</li>
          </ol>
          <p><strong>This pattern happened in Lebanon. It's happening NOW in Western Europe.</strong></p>
        </div>

        <h2>🇱🇧 Lebanon Case Study: From Paradise to Islamic Failed State</h2>
        <div className="content-section">
          <h3>Historical Transformation (1920-2025)</h3>
          
          <div style={styles.timelineItem}>
            <h4 style={{ color: '#2196f3' }}>1920-1975: "Paris of the Middle East"</h4>
            <ul>
              <li><strong>Demographics:</strong> 60% Christian majority, 40% Muslim minority</li>
              <li><strong>Culture:</strong> Western-style democracy, women's rights, religious freedom, thriving arts scene</li>
              <li><strong>Economy:</strong> Banking hub, tourism destination, cosmopolitan lifestyle</li>
              <li><strong>Society:</strong> Mini-skirts common, nightlife vibrant, churches protected</li>
            </ul>
          </div>

          <div style={styles.timelineItem}>
            <h4 style={{ color: '#ff9800' }}>1975-1990: Civil War (Islamic Power Grab)</h4>
            <ul>
              <li><strong>Muslim Birthrate:</strong> Higher fertility changed demographics to 50-50</li>
              <li><strong>Demands:</strong> Muslims demanded power proportional to population</li>
              <li><strong>Violence:</strong> Civil war 1975-1990, 120,000+ killed</li>
              <li><strong>Christian Exodus:</strong> Hundreds of thousands fled to Europe, Americas, Australia</li>
            </ul>
          </div>

          <div style={styles.timelineItem}>
            <h4 style={{ color: '#c62828' }}>1990-2025: Islamic Domination</h4>
            <ul>
              <li><strong>Demographics:</strong> Now 54% Muslim, 40.4% Christian (massive decline)</li>
              <li><strong>Hezbollah Control:</strong> Iranian-backed terror group controls government, military</li>
              <li><strong>Sharia Creep:</strong> Islamic law increasingly enforced, women's dress codes, church attacks</li>
              <li><strong>Economic Collapse:</strong> Currency worthless, electricity 2 hours/day, poverty 80%+</li>
              <li><strong>Failed State:</strong> Port explosion (2020), political chaos, brain drain continues</li>
            </ul>
          </div>

          <div style={styles.statsBox}>
            <h3>Lebanon Transformation Statistics</h3>
            <ul style={{ fontSize: '1.1rem' }}>
              <li><strong>1932:</strong> 60% Christian → <strong>2025:</strong> 40% Christian (33% population loss)</li>
              <li><strong>1932:</strong> 40% Muslim → <strong>2025:</strong> 54% Muslim (35% population gain)</li>
              <li><strong>Outcome:</strong> Paradise → Failed Islamic state in 100 years</li>
            </ul>
          </div>
        </div>

        <h2>🇬🇧 United Kingdom: Grooming Gangs & No-Go Zones</h2>
        <div className="content-section">
          <div style={styles.impactItem}>
            <h3>Demographics</h3>
            <ul>
              <li><strong>1961:</strong> 0.1% Muslim (50,000)</li>
              <li><strong>2021:</strong> 6.5% Muslim (4 million+)</li>
              <li><strong>Projection:</strong> 17% by 2050 (fastest-growing religion)</li>
              <li><strong>Cities:</strong> London 15%, Birmingham 27%, Bradford 25%, Leicester 19%</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>🚨 Grooming Gangs Epidemic</h3>
            <p><strong>Pattern:</strong> Pakistani Muslim men systematically target, drug, rape, and traffic underage white British girls</p>
            
            <h4>Documented Cases (All Muslim Perpetrators)</h4>
            <ul>
              <li><strong>Rotherham (1997-2013):</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/uk-england-south-yorkshire-28939089" target="_blank">1,400+ girls raped</a> - Police ignored due to "fear of being called racist"</li>
              <li><strong>Rochdale (2008-2012):</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/uk-england-17993003" target="_blank">47 girls gang-raped</a> - Victims as young as 13</li>
              <li><strong>Telford (1980s-2018):</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/uk-england-shropshire-43385515" target="_blank">1,000+ girls</a> - UK's worst grooming scandal</li>
              <li><strong>Oxford (2004-2012):</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/uk-england-oxfordshire-22826264" target="_blank">373+ girls</a></li>
              <li><strong>Newcastle (2010-2014):</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/uk-england-tyne-41030867" target="_blank">278+ victims</a> - Girls as young as 14</li>
              <li><strong>Huddersfield (2004-2011):</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/uk-england-leeds-45859261" target="_blank">120+ girls</a></li>
            </ul>
            <p><strong>Estimated Total:</strong> 19,000+ victims across UK (per Quilliam Foundation report)</p>
            <p><strong>Government Response:</strong> Systematic cover-up for 20+ years; whistleblowers fired, called "racists"</p>
          </div>

          <div style={styles.impactItem}>
            <h3>Sharia Patrols & No-Go Zones</h3>
            <ul>
              <li><strong>East London:</strong> "Muslim Patrols" harass women in "immodest" dress, destroy alcohol</li>
              <li><strong>Bradford:</strong> White residents called "infidels," told to leave</li>
              <li><strong>Birmingham:</strong> Areas where police require backup to enter</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>Terrorist Attacks (Islamic-Motivated)</h3>
            <ul>
              <li><strong>July 7, 2005:</strong> London bombings - 52 killed, 700+ injured</li>
              <li><strong>May 22, 2017:</strong> Manchester Arena - 22 killed (many children), 1,000+ injured</li>
              <li><strong>June 3, 2017:</strong> London Bridge - 8 killed, 48 injured</li>
              <li><strong>Nov 29, 2019:</strong> London Bridge stabbing - 2 killed by released terrorist</li>
            </ul>
          </div>
        </div>

        <h2>🇫🇷 France: Charlie Hebdo to Bataclan</h2>
        <div className="content-section">
          <div style={styles.impactItem}>
            <h3>Demographics</h3>
            <ul>
              <li><strong>1980:</strong> 2% Muslim (1.2M)</li>
              <li><strong>2023:</strong> 10% Muslim (7M+) - largest Muslim population in Europe</li>
              <li><strong>Youth:</strong> 25-40% under 18 in urban areas Muslim</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>🚨 Major Terrorist Attacks</h3>
            <ul>
              <li><strong>Jan 7, 2015:</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/world-europe-30708237" target="_blank">Charlie Hebdo</a> - 12 killed for Muhammad cartoons</li>
              <li><strong>Nov 13, 2015:</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/world-europe-34818994" target="_blank">Paris coordinated attacks</a> - 130 killed, 413 injured (Bataclan theatre massacre)</li>
              <li><strong>July 14, 2016:</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/world-europe-36800040" target="_blank">Nice truck attack</a> - 86 killed, 458 injured</li>
              <li><strong>Oct 16, 2020:</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/world-europe-54581827" target="_blank">Samuel Paty beheading</a> - Teacher beheaded for showing Muhammad cartoon</li>
              <li><strong>Oct 13, 2023:</strong> <a style={styles.newsLink} href="https://www.bbc.com/news/world-europe-67108012" target="_blank">Arras school stabbing</a> - Teacher killed by radicalized Muslim</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>No-Go Zones (ZUS - Zones Urbaines Sensibles)</h3>
            <ul>
              <li><strong>Official Count:</strong> 750+ areas where French law doesn't apply</li>
              <li><strong>Population:</strong> 5 million living in Islamic parallel societies</li>
              <li><strong>Reality:</strong> Police enter with army backup; Sharia courts operate; women harassed if unveiled</li>
              <li><strong>Famous Zones:</strong> Seine-Saint-Denis (93% problems), Marseille, Lyon suburbs</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>2005 & 2023 Riots</h3>
            <ul>
              <li><strong>2005:</strong> 3 weeks of riots, 10,000+ cars burned</li>
              <li><strong>2023:</strong> Nationwide riots after police shooting, thousands of cars/buildings burned</li>
            </ul>
          </div>
        </div>

        <h2>🇩🇪 Germany: Merkel's Disaster</h2>
        <div className="content-section">
          <div style={styles.impactItem}>
            <h3>The 2015 Migration Crisis</h3>
            <ul>
              <li><strong>Merkel's Decision:</strong> "Wir schaffen das" (We can do this) - opened borders</li>
              <li><strong>2015-2016:</strong> 1.5 million mostly Muslim migrants admitted</li>
              <li><strong>Demographics:</strong> Muslim population doubled in 10 years</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>🚨 Cologne New Year's Eve Sexual Assaults (2015-16)</h3>
            <ul>
              <li><strong>Event:</strong> 1,200+ women sexually assaulted in single night</li>
              <li><strong>Perpetrators:</strong> Majority recent migrants from Muslim countries</li>
              <li><strong>Government:</strong> Initially tried to cover up, pressured media silence</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>Terrorist Attacks</h3>
            <ul>
              <li><strong>Dec 19, 2016:</strong> Berlin Christmas market truck attack - 13 killed, 56 injured</li>
              <li><strong>2017-2023:</strong> Dozens of knife attacks, ISIS-inspired killings</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>Knife Attack Epidemic</h3>
            <ul>
              <li><strong>2023:</strong> 8,951 knife attacks (24.5 per day)</li>
              <li><strong>Pattern:</strong> Disproportionately committed by migrants</li>
            </ul>
          </div>
        </div>

        <h2>🇸🇪 Sweden: Europe's Rape Capital</h2>
        <div className="content-section">
          <div style={styles.impactItem}>
            <h3>Demographics & Policy</h3>
            <ul>
              <li><strong>Immigration:</strong> Took 400,000+ Muslim migrants 2010-2015</li>
              <li><strong>Muslim Population:</strong> 8.1% (2022), concentrated in Malmö, Stockholm suburbs</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>🚨 Rape Epidemic</h3>
            <ul>
              <li><strong>Statistics:</strong> Sweden now has highest rape rate in Europe (2nd globally after Lesotho)</li>
              <li><strong>58% of rapists:</strong> Foreign-born (per government data)</li>
              <li><strong>Pattern:</strong> Gang rapes by migrant men targeting Swedish girls</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>Gang Violence & Bombings</h3>
            <ul>
              <li><strong>2023:</strong> 149 bombings in Sweden</li>
              <li><strong>Gangs:</strong> Primarily migrant gangs controlling drug trade</li>
              <li><strong>No-Go Zones:</strong> 60+ official "vulnerable areas" where Swedish law barely applies</li>
            </ul>
          </div>
        </div>

        <h2>✅ Eastern Europe: The Survivors (Poland, Hungary, Czech Republic)</h2>
        <div className="content-section">
          <div style={styles.conclusionBox}>
            <h3 style={{ color: '#2e7d32' }}>🛡️ The Countries That Said NO</h3>
            <p>While Western Europe commits cultural suicide, Eastern Europe REJECTED mass Muslim migration. Result? They're thriving.</p>
          </div>

          <div style={styles.impactItem}>
            <h3>🇵🇱 Poland: The Visegrád Group Rebellion</h3>
            <ul>
              <li><strong>EU Migrant Quotas (2015):</strong> Poland, Hungary, Czech Republic, Slovakia REFUSED</li>
              <li><strong>Polish Position:</strong> "We took 2 million Ukrainian refugees (Christian). We will take ZERO Muslims."</li>
              <li><strong>Demographics:</strong> 97.5% Polish, 0.1% Muslim (mostly Tatars)</li>
              <li><strong>Terror Attacks:</strong> Zero major Islamic attacks</li>
              <li><strong>Rape Epidemic:</strong> Doesn't exist</li>
              <li><strong>No-Go Zones:</strong> Zero</li>
              <li><strong>Result:</strong> Safest country in Europe, economic growth, cultural preservation</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>🇭🇺 Hungary: Viktor Orbán's Border Fence</h3>
            <ul>
              <li><strong>2015 Action:</strong> Built border fence, stopped migrant flow</li>
              <li><strong>Orbán Quote:</strong> "We don't want to see significantly sized minorities with different cultural characteristics and backgrounds among us that would create parallel societies."</li>
              <li><strong>Demographics:</strong> 0.4% Muslim</li>
              <li><strong>Terror Attacks:</strong> Zero</li>
              <li><strong>EU Response:</strong> Fined Hungary €200M for not taking Muslims</li>
              <li><strong>Hungarian Response:</strong> Refused to pay, prioritized safety</li>
            </ul>
          </div>

          <div style={styles.impactItem}>
            <h3>🇨🇿 Czech Republic: Learning from Western Mistakes</h3>
            <ul>
              <li><strong>Policy:</strong> Rejected EU migration quotas</li>
              <li><strong>Demographics:</strong> 0.2% Muslim</li>
              <li><strong>Result:</strong> No terror attacks, no rape epidemic, cultural integrity</li>
            </ul>
          </div>

          <div style={styles.statsBox}>
            <h3>Eastern Europe Statistics</h3>
            <ul style={{ fontSize: '1.1rem' }}>
              <li><strong>Terror Attacks (2015-2024):</strong> France 15+, UK 12+, Germany 8+ vs Poland 0, Hungary 0, Czech 0</li>
              <li><strong>No-Go Zones:</strong> France 750+, Sweden 60+, UK 50+ vs Poland 0, Hungary 0, Czech 0</li>
              <li><strong>Grooming Gangs:</strong> UK 19,000+ victims vs Eastern Europe 0</li>
            </ul>
          </div>
        </div>

        <h2>🔍 Pattern Analysis: Why Muslims Don't Integrate</h2>
        <div className="content-section">
          <div style={styles.quoteBox}>
            <p><strong>Quran 5:51</strong> - "O you who have believed, do not take the Jews and the Christians as allies. They are allies of one another. And whoever is an ally to them among you – then indeed, he is one of them."</p>
          </div>

          <ol>
            <li><strong>Theological Prohibition:</strong> Quran forbids close friendship with non-Muslims</li>
            <li><strong>Supremacist Belief:</strong> Islam taught as superior, final, perfect religion</li>
            <li><strong>Self-Segregation:</strong> Parallel halal food, schools, mosques, Sharia courts</li>
            <li><strong>High Birth Rates:</strong> 3-4 children per family vs native 1.5; demographics is destiny</li>
            <li><strong>No Economic Benefit:</strong> 50%+ unemployment in many Muslim areas (France, Belgium)</li>
            <li><strong>Victim Narrative:</strong> Taught West oppresses Muslims, justifies hostility</li>
          </ol>
        </div>

        <h2>📜 Sharia Law Demands</h2>
        <div className="content-section">
          <h3>Stage 1: Special Accommodations</h3>
          <ul>
            <li>Prayer rooms in schools/workplaces</li>
            <li>Halal food requirements</li>
            <li>Islamic holidays recognized</li>
            <li>Hijab/niqab exemptions</li>
          </ul>

          <h3>Stage 2: Legal System Changes</h3>
          <ul>
            <li><strong>UK:</strong> 85+ Sharia courts operating (2023)</li>
            <li><strong>Germany:</strong> Judges increasingly referencing Sharia in family law</li>
            <li><strong>Demand:</strong> Separate legal system for Muslims</li>
          </ul>

          <h3>Stage 3: School & Social Demands</h3>
          <ul>
            <li>Ban pork from school cafeterias</li>
            <li>Separate swimming for boys/girls</li>
            <li>Remove "offensive" content (Holocaust education, LGBT)</li>
            <li>Islamic Studies mandatory</li>
          </ul>

          <h3>Stage 4: Ultimate Goal</h3>
          <div style={styles.warningBox}>
            <p><strong>Full Sharia Implementation:</strong> Women subjugated, apostates killed, blasphemy punished, non-Muslims dhimmis paying jizya tax</p>
          </div>
        </div>

        <h2>🔮 Future Predictions</h2>
        <div className="content-section">
          <h3>Two Europes by 2070</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '1rem 0' }}>
            <div style={{ ...styles.impactItem, borderLeft: '5px solid #c62828' }}>
              <h4 style={{ color: '#c62828' }}>Western Europe (Islamic Majority)</h4>
              <ul>
                <li>France, Germany, UK, Sweden, Belgium</li>
                <li>Sharia law enforced</li>
                <li>Women in hijabs/burqas</li>
                <li>Churches converted to mosques</li>
                <li>Native populations minorities</li>
                <li>Economic collapse</li>
              </ul>
            </div>
            <div style={{ ...styles.impactItem, borderLeft: '5px solid #4caf50' }}>
              <h4 style={{ color: '#2e7d32' }}>Eastern Europe (Christian Survival)</h4>
              <ul>
                <li>Poland, Hungary, Czech Republic</li>
                <li>Christian majority preserved</li>
                <li>Women free and educated</li>
                <li>Churches protected</li>
                <li>Cultural integrity maintained</li>
                <li>Economic prosperity</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>🛑 How to Stop It</h2>
        <div className="content-section">
          <ol>
            <li><strong>Stop All Muslim Immigration:</strong> Follow Poland/Hungary model</li>
            <li><strong>Reject EU Migrant Quotas:</strong> National sovereignty over Brussels bureaucrats</li>
            <li><strong>No Sharia Courts:</strong> One law for all, no parallel legal systems</li>
            <li><strong>Deportation:</strong> Remove illegal migrants and criminal residents</li>
            <li><strong>No Special Accommodations:</strong> Integrate or leave</li>
            <li><strong>Monitor Mosques:</strong> Close those preaching hate/violence</li>
            <li><strong>Protect Borders:</strong> Physical barriers work (see Hungary)</li>
            <li><strong>Learn from Lebanon:</strong> Demographic change = cultural death</li>
          </ol>
        </div>

        <h2>📊 Conclusion</h2>
        <div className="content-section">
          <div style={styles.statsBox}>
            <h3>The Lebanon Pattern is Repeating</h3>
            <ul style={{ fontSize: '1.1rem' }}>
              <li><strong>Lebanon:</strong> Christian 60% → 40% in 100 years = Islamic failed state</li>
              <li><strong>UK:</strong> Muslim 0.1% (1961) → 6.5% (2021) → 17% (2050 projection)</li>
              <li><strong>France:</strong> Muslim 2% (1980) → 10% (2023) → 18% (2050 projection)</li>
              <li><strong>Pattern:</strong> Demographics → Demands → Violence → Takeover</li>
            </ul>
          </div>

          <div style={styles.warningBox}>
            <h3 style={{ color: '#c62828' }}>The Truth Western Leaders Won't Say</h3>
            <p>Mass Muslim migration is not "enriching" Europe—it's destroying it. Grooming gangs rape thousands of children while police do nothing for fear of "racism." Terror attacks kill hundreds. No-go zones multiply. Native populations become minorities in their own cities.</p>
            <p><strong>Eastern Europe saw this coming and said NO. Western Europe chose suicide.</strong></p>
            <p>Lebanon was Christian paradise. It let Muslim population grow. Now it's Islamic failed state. This is Western Europe's future unless immigration stops NOW.</p>
          </div>

          <div style={styles.conclusionBox}>
            <h3 style={{ color: '#2e7d32' }}>The Solution is Simple</h3>
            <p>Do what Poland, Hungary, and Czech Republic did: Reject Muslim migration, protect borders, preserve culture. They have zero terror attacks, zero rape epidemics, zero no-go zones. Western Europe has all three in abundance.</p>
            <p><strong>The question is not whether this pattern exists—the data proves it does. The question is whether European leaders will save their civilization before it's too late.</strong></p>
          </div>
        </div>

        <div className="nav-buttons">
          <a href="/quranscopycreatedcontents/" className="nav-button">🏠 Home</a>
        </div>
      </div>
    </>
  )
}
