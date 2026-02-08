import Head from 'next/head'
import { List, ListItem } from '../components/ui'

export default function RealWorldHarm({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">Loading...</div>
  }

  const styles = {
    warningBox: { background: '#ffebee', borderLeft: '6px solid #c62828', padding: '2rem', marginBottom: '2rem', borderRadius: '8px' },
    harmItem: { background: '#fff', border: '1px solid #e0e0e0', padding: '1.5rem', margin: '1rem 0', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
    detailRow: { background: '#f9f9f9', padding: '1rem', margin: '0.5rem 0', borderLeft: '3px solid #2196f3', borderRadius: '4px' },
    scriptureRef: { background: '#e3f2fd', borderLeft: '4px solid #2196f3', padding: '1rem', margin: '1rem 0', borderRadius: '4px', fontFamily: 'Georgia, serif' },
    countryTag: { display: 'inline-block', background: '#ffcdd2', color: '#c62828', padding: '0.25rem 0.75rem', borderRadius: '12px', margin: '0.25rem', fontSize: '0.85rem', fontWeight: 'bold' },
    victimTag: { display: 'inline-block', background: '#fff3e0', color: '#e65100', padding: '0.25rem 0.75rem', borderRadius: '12px', margin: '0.25rem', fontSize: '0.85rem', fontWeight: 'bold' },
    categoryTag: { display: 'inline-block', background: '#f3e5f5', color: '#6a1b9a', padding: '0.25rem 0.75rem', borderRadius: '12px', margin: '0.25rem', fontSize: '0.85rem', fontWeight: 'bold' },
    quoteBox: { background: '#fff8e1', borderLeft: '4px solid #fbc02d', padding: '1rem', margin: '1rem 0', fontStyle: 'italic' },
    statsBox: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', padding: '1.5rem', borderRadius: '8px', margin: '1rem 0' },
    newsLink: { color: '#2196f3', textDecoration: 'none', fontWeight: 'bold' },
  };

  return (
    <>
      <Head>
        <title>Real-World Harm From Islam - Quran Scope</title>
        <meta name="description" content="18+ categories of documented harm: terrorism, slavery, child marriage, honor killings, FGM, apostasy executions, grooming gangs, and systematic oppression." />
        <link rel="canonical" href="https://quranscope.github.io/real-world-harm" />
      </Head>
      <div className="page-content">
        <a href="/" className="back-link">← Back to Home</a>
        
        <h1>Real-World Harm From Islamic Texts</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>18+ Categories of Documented Violence, Oppression & Human Rights Violations</p>

        <div style={styles.warningBox}>
          <h2 style={{ color: '#c62828', marginTop: 0 }}>⚠️ The Connection is Direct</h2>
          <p>This is not about \"misinterpretation\" or \"extremism.\" Every category of harm documented here is <strong>explicitly commanded or permitted in Islamic texts</strong> (Quran, Hadith, Sira). Perpetrators cite these texts to justify their actions. The texts ARE the problem.</p>
          <div style={styles.statsBox}>
            <h3>Overall Statistics</h3>
            <List className="text-white text-[1.1rem]">
              <ListItem><strong>270 million</strong> people killed in jihad over 1,400 years</ListItem>
              <ListItem><strong>90%+</strong> of terrorism globally motivated by Islamic texts</ListItem>
              <ListItem><strong>600 million+</strong> women oppressed under Sharia law</ListItem>
              <ListItem><strong>13 countries</strong> execute apostates by law</ListItem>
              <ListItem><strong>200 million</strong> women/girls subjected to FGM</ListItem>
            </List>
          </div>
        </div>

        <h2>1. 👩 Women as Property</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 2:223</strong> - "Your wives are a place of sowing of seed for you, so come to your place of cultivation however you wish."</p>
            <p><em>Interpretation: Women are fields (tilth) for men to plow. Sexual consent not required.</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>Real-World Impact</h3>
            <ul>
              <li><strong>Saudi Arabia (until 2019):</strong> Women couldn't drive, travel, work, or undergo surgery without male guardian permission</li>
              <li><strong>Afghanistan (2021-present):</strong> Taliban ban women from education, work, parks, gyms; must be fully covered</li>
              <li><strong>Iran:</strong> Women beaten/killed for improper hijab (Mahsa Amini, 2022)</li>
              <li><strong>Guardianship Laws:</strong> Women treated as legal minors in most Muslim-majority countries</li>
            </ul>
          </div>
        </div>

        <h2>2. ⛓️ Sex Slavery Commanded</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 4:24</strong> - "And [also prohibited to you are all] married women except those your right hands possess [i.e., female captives]."</p>
            <p><em>Translation: You can have sex with married women you capture in war. Her marriage is nullified by her enslavement.</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 ISIS Yazidi Genocide (2014)</h3>
            <div style={styles.detailRow}>
              <h4>What Happened</h4>
              <ul>
                <li><strong>August 2014:</strong> ISIS attacked Yazidi minority in Sinjar, Iraq</li>
                <li><strong>5,000+</strong> Yazidi men and boys massacred</li>
                <li><strong>7,000+</strong> women and girls kidnapped into sex slavery</li>
                <li><strong>Justification:</strong> ISIS cited Quran 4:24, called Yazidis "polytheists" whose enslavement is halal</li>
              </ul>
            </div>
            <div style={styles.detailRow}>
              <h4>Slave Markets</h4>
              <ul>
                <li>ISIS ran official slave markets in Mosul, Raqqa</li>
                <li>Price lists published: Girls 1-9 years = $172, Women 40-50 = $43</li>
                <li>Distributed slaves as "gifts" to fighters per Quran 4:24</li>
                <li>Gang rape common; pregnancy forced; escape attempts punished by torture/death</li>
              </ul>
            </div>
            <div style={styles.quoteBox}>
              <p><strong>Nadia Murad (Nobel Peace Prize winner, Yazidi survivor):</strong> "They destroyed us systematically. ISIS gave us Quran verses before raping us. They said it was halal because we were infidels."</p>
            </div>
          </div>
          <div style={styles.harmItem}>
            <h3>Other Recent Cases</h3>
            <ul>
              <li><strong>Boko Haram (Nigeria, 2014):</strong> Kidnapped 276 Chibok schoolgirls, enslaved, forced into marriage</li>
              <li><strong>Al-Shabaab (Somalia):</strong> Systematic kidnapping of Christian girls for sex slavery</li>
              <li><strong>Kashmir (ongoing):</strong> Hindu girls kidnapped, converted, married to older Muslim men</li>
            </ul>
          </div>
        </div>

        <h2>3. 🤜 Wife Beating Permitted</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 4:34</strong> - "Men are in charge of women... But those [wives] from whom you fear arrogance - [first] advise them; [then if they persist], forsake them in bed; and [finally], strike them."</p>
            <p><em>Arabic word: "wadribuhunna" (ضربوهن) = "strike/beat them"</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>How Scholars Interpret It</h3>
            <ul>
              <li><strong>Traditional View:</strong> Husband may beat wife if she's disobedient, but not severely</li>
              <li><strong>Ibn Kathir:</strong> "If the husband beats her, he should avoid her face and should not make the beating excessively painful"</li>
              <li><strong>Modern Apologists:</strong> Claim it means "light tap," but Arabic doesn't support this</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Real-World Statistics</h3>
            <ul>
              <li><strong>Pakistan:</strong> 70-90% women experience domestic violence</li>
              <li><strong>Egypt:</strong> 89% of ever-married women beaten by husbands</li>
              <li><strong>Afghanistan:</strong> 87% report physical, sexual, or psychological violence</li>
              <li><strong>Legal:</strong> Many Muslim countries don't prosecute domestic violence if "light"</li>
            </ul>
          </div>
        </div>

        <h2>4. ⛓️ Slavery Institutionalized</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran References:</strong> 4:3, 4:24, 4:25, 4:36, 16:71, 23:6, 24:31, 24:33, 24:58, 30:28, 33:50, 33:52, 33:55, 70:30</p>
            <p><em>Islam permits slavery, regulates treatment of slaves, allows sex with female slaves</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>Islamic History of Slavery</h3>
            <ul>
              <li><strong>Muhammad:</strong> Owned slaves (male & female), bought/sold slaves, gave slaves as gifts</li>
              <li><strong>Sahih Bukhari 2556:</strong> Muhammad bought slaves in market</li>
              <li><strong>Conquest Pattern:</strong> Men killed, women/children enslaved (Battle of Hunayn: 6,000 enslaved)</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Countries That Abolished Slavery Late</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
              <thead>
                <tr style={{ background: '#c62828', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Country</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Abolished</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>Saudi Arabia</td>
                  <td style={{ padding: '0.75rem' }}>1962</td>
                  <td style={{ padding: '0.75rem' }}>Under international pressure</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>Yemen</td>
                  <td style={{ padding: '0.75rem' }}>1962</td>
                  <td style={{ padding: '0.75rem' }}>After revolution</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>Oman</td>
                  <td style={{ padding: '0.75rem' }}>1970</td>
                  <td style={{ padding: '0.75rem' }}>Last Middle Eastern country</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>Mauritania</td>
                  <td style={{ padding: '0.75rem' }}>1981 (criminalized 2007)</td>
                  <td style={{ padding: '0.75rem' }}>Last country globally</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Modern Slavery Still Exists</h3>
            <ul>
              <li><strong>Mauritania:</strong> 90,000-140,000 people still enslaved (1-2% population), mostly dark-skinned Haratin by Arab-Berber masters</li>
              <li><strong>Niger:</strong> 600,000+ enslaved (2020 Global Slavery Index)</li>
              <li><strong>Sudan:</strong> South Sudanese Christians enslaved during civil war (1983-2005); children sold for $50-100</li>
            </ul>
          </div>
        </div>

        <h2>5. 📜 Arab Slave Trade (1,300 Years)</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>Scale & Duration</h3>
            <ul>
              <li><strong>Duration:</strong> 7th century to 1960s (13 centuries)</li>
              <li><strong>Victims:</strong> 17-18 million Africans enslaved (per historians)</li>
              <li><strong>Routes:</strong> Trans-Saharan, Red Sea, Indian Ocean</li>
              <li><strong>Death Rate:</strong> 80% died during capture/transport (worse than Atlantic slave trade)</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Systematic Castration</h3>
            <ul>
              <li><strong>Practice:</strong> Male slaves castrated to serve as eunuchs in harems</li>
              <li><strong>Mortality:</strong> 75-90% died from procedure</li>
              <li><strong>Purpose:</strong> Prevent African genetic lineage (explains why few Black Arabs today despite millions enslaved)</li>
              <li><strong>Contrast:</strong> Atlantic slave trade didn't practice mass castration; African Americans exist; Black Arabs don't</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Racism in Islam</h3>
            <div style={styles.quoteBox}>
              <p><strong>Sahih Muslim 2334:</strong> Muhammad described Ethiopians as having "heads like raisins"</p>
              <p><strong>Arab Term:</strong> "Abd" (عبد) = slave, still used today to mean "Black person" in Arabic</p>
            </div>
          </div>
        </div>

        <h2>6. 🏗️ Modern Kafala System (30M+ Victims)</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>What is Kafala?</h3>
            <p>Sponsorship system in Gulf Arab states where migrant workers' visas tied to employer. Employer controls workers' movement, pay, ability to leave country. Essentially modern slavery.</p>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Abuses Documented</h3>
            <ul>
              <li><strong>Passport Confiscation:</strong> Employers seize passports so workers can't leave</li>
              <li><strong>Wage Theft:</strong> 6-12 months unpaid wages common</li>
              <li><strong>Physical Abuse:</strong> Beatings, sexual assault, starvation of domestic workers</li>
              <li><strong>No Exit:</strong> Can't change jobs or leave country without employer permission</li>
              <li><strong>Deaths:</strong> Thousands die from workplace accidents, suicide, abuse</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Qatar World Cup 2022</h3>
            <ul>
              <li><strong>Workers:</strong> 2 million+ migrant workers from India, Bangladesh, Nepal, Pakistan</li>
              <li><strong>Deaths:</strong> 6,500+ workers died (per Guardian investigation)</li>
              <li><strong>Conditions:</strong> 120°F heat, no breaks, 14-hour days, wages stolen</li>
              <li><strong>FIFA Response:</strong> Ignored until international pressure</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Countries Using Kafala</h3>
            <div>
              <span style={styles.countryTag}>Saudi Arabia</span>
              <span style={styles.countryTag}>UAE</span>
              <span style={styles.countryTag}>Qatar</span>
              <span style={styles.countryTag}>Kuwait</span>
              <span style={styles.countryTag}>Bahrain</span>
              <span style={styles.countryTag}>Oman</span>
              <span style={styles.countryTag}>Lebanon</span>
              <span style={styles.countryTag}>Jordan</span>
            </div>
          </div>
        </div>

        <h2>7. ⚔️ Kill Polytheists Command</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 9:5 (Sword Verse)</strong> - "And when the sacred months have passed, then kill the polytheists wherever you find them and capture them and besiege them and sit in wait for them at every place of ambush."</p>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Kashmir: Ongoing Hindu Genocide</h3>
            <h4>Pahalgam Terror Attack (December 2024)</h4>
            <ul>
              <li><strong>Date:</strong> December 2024</li>
              <li><strong>Location:</strong> Pahalgam, Kashmir, India</li>
              <li><strong>Victims:</strong> Hindu tourists targeted, multiple killed</li>
              <li><strong>Pattern:</strong> Latest in 35+ years of Islamic terrorism against Hindus in Kashmir</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Kashmir Pandit Genocide (1989-1990)</h3>
            <div style={styles.detailRow}>
              <h4>What Happened</h4>
              <ul>
                <li><strong>Population Before:</strong> 300,000-600,000 Hindu Pandits in Kashmir Valley</li>
                <li><strong>Killed:</strong> 1,500-2,000 murdered (unofficial estimates higher)</li>
                <li><strong>Expelled:</strong> 300,000-600,000 forced to flee (99%+ of Hindu population)</li>
                <li><strong>Method:</strong> Targeted killings, gang rapes, house burnings, mosque loudspeakers announcing "Convert, leave, or die"</li>
              </ul>
            </div>
            <div style={styles.detailRow}>
              <h4>Famous Victims</h4>
              <ul>
                <li><strong>Girija Tickoo (1990):</strong> Nurse gang-raped, cut in half with saw while alive</li>
                <li><strong>BK Ganjoo (1990):</strong> Judge dragged out of home, shot in street</li>
                <li><strong>Hundreds:</strong> Killed in similar brutal fashion</li>
              </ul>
            </div>
            <div style={styles.quoteBox}>
              <p><strong>Mosque Announcements (January 19, 1990):</strong> "Leave Kashmir, leave your women behind, but leave immediately"</p>
            </div>
          </div>
          <div style={styles.harmItem}>
            <h3>Current Status</h3>
            <ul>
              <li><strong>Diaspora:</strong> Kashmiri Pandits scattered across India, living in refugee camps</li>
              <li><strong>Return:</strong> Attempted returns met with more killings</li>
              <li><strong>Population:</strong> From 99% to less than 1% in 30 years = ethnic cleansing</li>
            </ul>
          </div>
        </div>

        <h2>8. 🕌 Fight Until All Religion for Allah</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 8:39</strong> - "And fight them until there is no fitnah [polytheism] and [until] the religion, all of it, is for Allah."</p>
            <p><em>Scholars agree: Fight until entire world submits to Islam</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>Modern Implementation</h3>
            <ul>
              <li><strong>ISIS (2014-2019):</strong> Declared caliphate, forced conversion, killed/enslaved minorities (Yazidis, Christians)</li>
              <li><strong>Taliban (Afghanistan):</strong> Destroyed Bamiyan Buddhas (2001), banned all non-Islamic religion</li>
              <li><strong>Boko Haram (Nigeria):</strong> "Western education is sin," forced conversions, church bombings</li>
            </ul>
          </div>
        </div>

        <h2>9. 💣 Terror Commanded</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 8:12</strong> - "I will cast terror into the hearts of those who disbelieved, so strike [them] upon the necks and strike from them every fingertip."</p>
            <p><strong>Quran 8:60</strong> - "And prepare against them whatever you are able of power and of steeds of war by which you may terrify the enemy of Allah and your enemy."</p>
          </div>
          <div style={styles.harmItem}>
            <h3>Major Islamic Terror Attacks (21st Century)</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
              <thead>
                <tr style={{ background: '#c62828', color: 'white' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Date</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Attack</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Deaths</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Group</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>Sept 11, 2001</td><td style={{ padding: '0.75rem' }}>9/11 (USA)</td><td style={{ padding: '0.75rem' }}>2,977</td><td style={{ padding: '0.75rem' }}>Al-Qaeda</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>Sept 1-3, 2004</td><td style={{ padding: '0.75rem' }}>Beslan School (Russia)</td><td style={{ padding: '0.75rem' }}>385 (186 children)</td><td style={{ padding: '0.75rem' }}>Chechen jihadists</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>March 11, 2004</td><td style={{ padding: '0.75rem' }}>Madrid trains</td><td style={{ padding: '0.75rem' }}>191</td><td style={{ padding: '0.75rem' }}>Al-Qaeda</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>July 7, 2005</td><td style={{ padding: '0.75rem' }}>London bombings</td><td style={{ padding: '0.75rem' }}>52</td><td style={{ padding: '0.75rem' }}>Al-Qaeda inspired</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>Nov 26-29, 2008</td><td style={{ padding: '0.75rem' }}>Mumbai attacks</td><td style={{ padding: '0.75rem' }}>166</td><td style={{ padding: '0.75rem' }}>Lashkar-e-Taiba</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>Nov 13, 2015</td><td style={{ padding: '0.75rem' }}>Paris coordinated</td><td style={{ padding: '0.75rem' }}>130</td><td style={{ padding: '0.75rem' }}>ISIS</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>March 22, 2016</td><td style={{ padding: '0.75rem' }}>Brussels bombings</td><td style={{ padding: '0.75rem' }}>32</td><td style={{ padding: '0.75rem' }}>ISIS</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>May 22, 2017</td><td style={{ padding: '0.75rem' }}>Manchester Arena</td><td style={{ padding: '0.75rem' }}>22 (many children)</td><td style={{ padding: '0.75rem' }}>ISIS inspired</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>April 21, 2019</td><td style={{ padding: '0.75rem' }}>Sri Lanka Easter</td><td style={{ padding: '0.75rem' }}>269</td><td style={{ padding: '0.75rem' }}>ISIS inspired</td></tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}><td style={{ padding: '0.75rem' }}>Oct 7, 2023</td><td style={{ padding: '0.75rem' }}>Israel massacre</td><td style={{ padding: '0.75rem' }}>1,200+</td><td style={{ padding: '0.75rem' }}>Hamas</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>10. ✡️ Jews as Eternal Enemies</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 5:51</strong> - "O you who have believed, do not take the Jews and the Christians as allies."</p>
            <p><strong>Quran 5:60</strong> - "Those whom Allah has cursed and with whom He became angry and made of them apes and pigs."</p>
            <p><em>Traditional interpretation: Jews transformed into apes and pigs as punishment</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Hamas October 7, 2023 Massacre</h3>
            <div style={styles.detailRow}>
              <h4>What Happened</h4>
              <ul>
                <li><strong>Date:</strong> October 7, 2023 (Simchat Torah holiday)</li>
                <li><strong>Victims:</strong> 1,200+ Israelis killed (largest single-day Jewish massacre since Holocaust)</li>
                <li><strong>Methods:</strong> Beheadings, burning families alive, gang rapes, mutilation</li>
                <li><strong>Kidnapped:</strong> 240+ hostages taken to Gaza</li>
                <li><strong>Targets:</strong> Music festival (260+ youth killed), kibbutzim (entire families massacred)</li>
              </ul>
            </div>
            <div style={styles.detailRow}>
              <h4>Hamas Justification</h4>
              <ul>
                <li><strong>Hamas Charter Article 7:</strong> Cites hadith about killing Jews before Day of Judgment</li>
                <li><strong>Quran 9:29:</strong> Fight Jews until they pay jizya in humiliation</li>
                <li><strong>Social Media:</strong> Terrorists live-streamed murders, celebrating with "Allahu Akbar"</li>
              </ul>
            </div>
            <div style={styles.quoteBox}>
              <p><strong>Sahih Muslim 2922 (cited in Hamas Charter):</strong> "The Day of Judgment will not come until Muslims fight the Jews, when the Jew will hide behind stones and trees. The stones and trees will say, 'O Muslim, O servant of Allah, there is a Jew behind me, come and kill him.'"</p>
            </div>
          </div>
        </div>

        <h2>11. ⚰️ Apostasy Death Penalty</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Sahih Bukhari 6922:</strong> Muhammad said: "Whoever changed his Islamic religion, then kill him."</p>
            <p><strong>Sahih Bukhari 3017:</strong> "The blood of a Muslim... cannot be shed except in three [cases]: the married person who commits adultery; a life for a life; and the one who forsakes his religion and leaves the community."</p>
          </div>
          <div style={styles.harmItem}>
            <h3>13 Countries with Death Penalty for Apostasy</h3>
            <div>
              <span style={styles.countryTag}>Afghanistan</span>
              <span style={styles.countryTag}>Iran</span>
              <span style={styles.countryTag}>Malaysia</span>
              <span style={styles.countryTag}>Maldives</span>
              <span style={styles.countryTag}>Mauritania</span>
              <span style={styles.countryTag}>Nigeria (12 states)</span>
              <span style={styles.countryTag}>Qatar</span>
              <span style={styles.countryTag}>Saudi Arabia</span>
              <span style={styles.countryTag}>Somalia</span>
              <span style={styles.countryTag}>Sudan</span>
              <span style={styles.countryTag}>UAE</span>
              <span style={styles.countryTag}>Yemen</span>
              <span style={styles.countryTag}>Pakistan (effective)</span>
            </div>
          </div>
          <div style={styles.harmItem}>
            <h3>Famous Cases</h3>
            <ul>
              <li><strong>Raif Badawi (Saudi Arabia):</strong> 10 years prison, 1,000 lashes for blogging about secularism</li>
              <li><strong>Asia Bibi (Pakistan):</strong> Christian woman sentenced to death for "blasphemy" (drinking from Muslim cup), acquitted after 8 years</li>
              <li><strong>Meriam Ibrahim (Sudan, 2014):</strong> Sentenced to death for being Christian (born to Muslim father), international pressure freed her</li>
            </ul>
          </div>
        </div>

        <h2>12. 🗣️ Blasphemy Death Penalty</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>Major Attacks Over Blasphemy</h3>
            <ul>
              <li><strong>Charlie Hebdo (Jan 2015):</strong> 12 killed for Muhammad cartoons</li>
              <li><strong>Theo van Gogh (2004):</strong> Dutch filmmaker murdered, stabbed 8 times, throat slit</li>
              <li><strong>Samuel Paty (Oct 2020):</strong> French teacher beheaded for showing Muhammad cartoon</li>
              <li><strong>Salman Rushdie (Aug 2022):</strong> Author stabbed 10+ times, lost eye, decades after fatwa for "Satanic Verses"</li>
            </ul>
          </div>
        </div>

        <h2>13. 👧 Child Marriage (Aisha Precedent)</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Sahih Bukhari 5134:</strong> Aisha said: "The Prophet married me when I was six years old and consummated the marriage when I was nine."</p>
            <p><strong>Sahih Muslim 1422:</strong> Confirms Aisha was 6 at marriage, 9 at consummation</p>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Global Child Marriage Epidemic</h3>
            <ul>
              <li><strong>12 million+</strong> girls married before 18 each year globally</li>
              <li><strong>Highest Rates:</strong> Niger (76%), Chad (68%), Mali (55%) - all Muslim-majority</li>
              <li><strong>Justification:</strong> "If it was good enough for Prophet, it's good enough for us"</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Tragic Cases</h3>
            <ul>
              <li><strong>Rawan (Yemen, 2013):</strong> 8-year-old bride died from internal injuries on wedding night</li>
              <li><strong>Nujood Ali (Yemen, 2008):</strong> 10-year-old forced to marry 30-year-old, escaped, wrote book</li>
              <li><strong>Yemen Statistics:</strong> 32% girls married before 18, 9% before 15</li>
            </ul>
          </div>
        </div>

        <h2>14. 🚨 UK Grooming Gangs</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>Pattern</h3>
            <p>Pakistani Muslim men systematically target white British girls (11-16 years), ply with drugs/alcohol, gang-rape, traffic to other cities</p>
          </div>
          <div style={styles.harmItem}>
            <h3>Major Scandals</h3>
            <ul>
              <li><strong>Rotherham (1997-2013):</strong> 1,400+ girls raped by Pakistani gangs; police/council ignored for fear of being called racist</li>
              <li><strong>Telford (1980s-2018):</strong> 1,000+ girls; UK's worst grooming scandal</li>
              <li><strong>Rochdale, Oxford, Newcastle, Huddersfield:</strong> Hundreds more victims in each city</li>
              <li><strong>Total Estimate:</strong> 19,000+ victims UK-wide (Quilliam Foundation)</li>
            </ul>
          </div>
        </div>

        <h2>15. 🕌 Madrasa Child Abuse</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>🚨 Systematic Sexual Abuse in Islamic Schools</h3>
            <ul>
              <li><strong>Kerala, India:</strong> Rising epidemic of madrasa abuse cases; Islamic teachers (maulanas) raping students</li>
              <li><strong>Pakistan:</strong> 1.5-2 million children in madrasas; systematic abuse documented by human rights groups</li>
              <li><strong>Bangladesh (2019):</strong> Nusrat Jahan Rafi burned alive for reporting madrasa principal's sexual harassment</li>
            </ul>
          </div>
        </div>

        <h2>16. 💔 Honor Killings (5,000+/year)</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>What Are Honor Killings?</h3>
            <p>Murders (usually of women) by family members to restore family "honor" after perceived shame</p>
            <h4>Triggers</h4>
            <ul>
              <li>Refusing arranged marriage</li>
              <li>Dating "wrong" person</li>
              <li>Wearing "immodest" clothing</li>
              <li>Seeking divorce</li>
              <li>Being raped (victim blamed)</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Statistics & Cases</h3>
            <ul>
              <li><strong>Global:</strong> 5,000+ honor killings per year (UNFPA estimate)</li>
              <li><strong>Pakistan:</strong> 1,000+ per year official; actual higher</li>
              <li><strong>Qandeel Baloch (Pakistan, 2016):</strong> Social media star strangled by brother for "bringing dishonor"</li>
              <li><strong>Shafilea Ahmed (UK, 2003):</strong> 17-year-old killed by parents for being "too Westernized"</li>
            </ul>
          </div>
        </div>

        <h2>17. ✂️ Female Genital Mutilation (200M Victims)</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>What is FGM?</h3>
            <p>Partial/total removal of external female genitalia or injury to female genital organs for non-medical reasons</p>
            <h4>Purpose</h4>
            <ul>
              <li>Control female sexuality</li>
              <li>Preserve "purity" for marriage</li>
              <li>Religious/cultural tradition</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>🚨 Statistics</h3>
            <ul>
              <li><strong>Victims:</strong> 200 million women/girls alive today have undergone FGM</li>
              <li><strong>Somalia:</strong> 98% prevalence</li>
              <li><strong>Guinea:</strong> 97%</li>
              <li><strong>Djibouti:</strong> 93%</li>
              <li><strong>Egypt:</strong> 87%</li>
              <li><strong>Indonesia:</strong> 50%+ (Muslim-majority country)</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Health Consequences</h3>
            <ul>
              <li>Severe pain, bleeding, death during procedure</li>
              <li>Infections, urinary problems, complications in childbirth</li>
              <li>Lifelong pain, loss of sexual pleasure</li>
              <li>Psychological trauma</li>
            </ul>
          </div>
        </div>

        <h2>18. ✝️ Forced Conversions</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>🚨 Pakistan: 1,000+ Hindu/Christian Girls Abducted Yearly</h3>
            <ul>
              <li><strong>Pattern:</strong> Young non-Muslim girls kidnapped, raped, forced to convert to Islam, married to Muslim men (often much older)</li>
              <li><strong>Legal System:</strong> Courts side with kidnappers; forced conversion certificates used as "proof" of consent</li>
              <li><strong>Huma Younus (2019):</strong> 14-year-old Christian girl kidnapped, court forced her to stay with 45-year-old Muslim kidnapper</li>
              <li><strong>Arzoo Raja (2020):</strong> 13-year-old Christian girl abducted, forcibly converted; court ruled it was "consensual marriage"</li>
            </ul>
          </div>
        </div>

        <h2>19. 🌸 72 Virgins: Martyrdom Incentive</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 44:54</strong> - "We will marry them to fair women with large, beautiful eyes."</p>
            <p><strong>Quran 52:20</strong> - "They will recline on thrones arranged in ranks. And We will marry them to fair women with large, beautiful eyes."</p>
            <p><strong>Multiple Sahih Hadiths:</strong> Martyrs get 72 virgins in paradise</p>
          </div>
          <div style={styles.harmItem}>
            <h3>Real-World Impact</h3>
            <ul>
              <li><strong>9/11 Hijackers:</strong> Letters found referencing martyrdom paradise rewards</li>
              <li><strong>ISIS Propaganda:</strong> Recruitment videos promising 72 virgins to foreign fighters</li>
              <li><strong>Palestinian Terrorists:</strong> Families celebrate sons' martyrdom, expect paradise rewards</li>
            </ul>
          </div>
        </div>

        <h2>20. 💣 Suicide Bombings (Guaranteed Paradise)</h2>
        <div className="content-section">
          <div style={styles.scriptureRef}>
            <p><strong>Quran 9:111</strong> - "Indeed, Allah has purchased from the believers their lives and their properties [in exchange] for that they will have Paradise. They fight in the cause of Allah, so they kill and are killed."</p>
            <p><em>Direct promise: Dying in jihad = guaranteed paradise</em></p>
          </div>
          <div style={styles.harmItem}>
            <h3>Major Suicide Bombing Campaigns</h3>
            <ul>
              <li><strong>Iraq (2003-2017):</strong> 1,800+ suicide bombings, 20,000+ killed</li>
              <li><strong>Afghanistan (2001-2021):</strong> 1,650+ suicide attacks</li>
              <li><strong>Pakistan (2002-2018):</strong> 500+ suicide bombings, 5,000+ killed</li>
              <li><strong>9/11 (2001):</strong> Ultimate suicide attack, 2,977 killed</li>
              <li><strong>Sri Lanka Easter (2019):</strong> 269 killed in coordinated church bombings</li>
            </ul>
          </div>
        </div>

        <h2>📊 Regional Breakdown</h2>
        <div className="content-section">
          <div style={styles.harmItem}>
            <h3>Kashmir</h3>
            <ul>
              <li><strong>Hindu Population:</strong> 99% → less than 1% (ethnic cleansing)</li>
              <li><strong>300,000-600,000</strong> Pandits expelled</li>
              <li><strong>1,500+</strong> murdered</li>
              <li><strong>Ongoing:</strong> Terror attacks continue (Pahalgam Dec 2024)</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Pakistan</h3>
            <ul>
              <li><strong>1,000+</strong> honor killings/year</li>
              <li><strong>1,000+</strong> Hindu/Christian girls abducted, forced conversions yearly</li>
              <li><strong>Blasphemy law:</strong> 1,500+ accused since 1987, 75+ killed by mobs</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Bangladesh</h3>
            <ul>
              <li><strong>Hindu Population:</strong> 22% (1951) → 8% (2011) - demographic collapse</li>
              <li><strong>Persecution:</strong> Temple destruction, forced conversions, property seizure</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Iran</h3>
            <ul>
              <li><strong>Women:</strong> Mandatory hijab; morality police beat/kill violators (Mahsa Amini, 2022)</li>
              <li><strong>Executions:</strong> 500+/year, including minors</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Yemen</h3>
            <ul>
              <li><strong>Child Marriage:</strong> 32% girls married before 18</li>
              <li><strong>No minimum age</strong> for marriage</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Saudi Arabia</h3>
            <ul>
              <li><strong>Male Guardianship:</strong> Women need male permission for travel, work, marriage</li>
              <li><strong>Public Beheadings:</strong> 100+/year for apostasy, witchcraft, blasphemy</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Nigeria</h3>
            <ul>
              <li><strong>Boko Haram:</strong> 35,000+ killed, 2.3M displaced, Chibok girls kidnapping</li>
              <li><strong>Sharia States:</strong> Amputations, stonings, public floggings</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Somalia</h3>
            <ul>
              <li><strong>FGM:</strong> 98% prevalence</li>
              <li><strong>Al-Shabaab:</strong> 10,000+ killed, controls large areas</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Afghanistan</h3>
            <ul>
              <li><strong>Taliban 2021-Present:</strong> Women banned from education, work, parks; must be fully covered</li>
              <li><strong>Public Executions:</strong> Stonings, hangings in stadiums</li>
            </ul>
          </div>
          <div style={styles.harmItem}>
            <h3>Gaza</h3>
            <ul>
              <li><strong>Hamas Rule:</strong> Sharia courts, public executions</li>
              <li><strong>Oct 7, 2023:</strong> 1,200+ Israelis massacred, 240+ kidnapped</li>
            </ul>
          </div>
        </div>

        <h2>🎯 Conclusion</h2>
        <div className="content-section">
          <div style={styles.statsBox}>
            <h3>The Numbers Don't Lie</h3>
            <List className="text-white text-[1.1rem]">
              <ListItem><strong>270 million</strong> deaths from Islamic jihad (1,400 years)</ListItem>
              <ListItem><strong>90%+</strong> of modern terrorism motivated by Islamic texts</ListItem>
              <ListItem><strong>600 million+</strong> women oppressed under Sharia</ListItem>
              <ListItem><strong>200 million</strong> victims of FGM</ListItem>
              <ListItem><strong>12 million+</strong> child brides yearly</ListItem>
              <ListItem><strong>5,000+</strong> honor killings yearly</ListItem>
              <ListItem><strong>13 countries</strong> execute apostates by law</ListItem>
              <ListItem><strong>30 million+</strong> modern slaves in Kafala system</ListItem>
              <ListItem><strong>19,000+</strong> UK grooming gang victims</ListItem>
            </List>
          </div>

          <div style={styles.warningBox}>
            <h3 style={{ color: '#c62828' }}>This is Not "Misinterpretation"</h3>
            <p>Every category of harm documented above is <strong>explicitly commanded, permitted, or exemplified in Islamic source texts</strong>:</p>
            <ul>
              <li>Sex slavery → Quran 4:24</li>
              <li>Wife beating → Quran 4:34</li>
              <li>Killing polytheists → Quran 9:5</li>
              <li>Terror → Quran 8:12, 8:60</li>
              <li>Fighting Jews → Quran 9:29, Sahih Muslim 2922</li>
              <li>Killing apostates → Sahih Bukhari 6922</li>
              <li>Child marriage → Muhammad's marriage to Aisha (Sahih Bukhari 5134)</li>
              <li>Martyrdom paradise → Quran 9:111</li>
            </ul>
            <p><strong>When ISIS enslaved Yazidi women, they cited Quran 4:24. When Hamas massacred Jews on Oct 7, they cited Quran 9:29. When Pakistani men abduct Christian girls, they follow Muhammad's example of taking war captives. When terrorists blow themselves up, they expect the paradise promised in Quran 9:111.</strong></p>
            <p>These are not "misinterpretations." They are textually accurate implementations of 7th-century commands. The texts ARE the problem.</p>
          </div>

          <div style={{ background: '#e8f5e9', borderLeft: '5px solid #4caf50', padding: '1.5rem', marginTop: '2rem', borderRadius: '8px' }}>
            <h3 style={{ color: '#2e7d32' }}>What Needs to Happen</h3>
            <ol>
              <li><strong>Acknowledge Reality:</strong> Stop saying "nothing to do with Islam" when attackers cite Quranic verses</li>
              <li><strong>Support Ex-Muslims:</strong> Those leaving Islam risk death; they need protection, not censorship</li>
              <li><strong>Demand Reform:</strong> Muslims must reject violent verses or admit Islam incompatible with modern values</li>
              <li><strong>Protect Victims:</strong> Stop political correctness that enables grooming gangs, honor killings, forced conversions</li>
              <li><strong>Legal Action:</strong> Prosecute FGM, child marriage, honor killings as serious crimes regardless of "culture"</li>
              <li><strong>End Denial:</strong> Facing uncomfortable truths is better than letting harm continue</li>
            </ol>
          </div>
        </div>

        <div className="nav-buttons">
          <a href="/" className="nav-button">🏠 Home</a>
        </div>
      </div>
    </>
  )
}
