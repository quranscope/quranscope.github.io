import Head from 'next/head';
import { getPageConfig } from '../config/pages';

export default function ExpansionHistory({ translations: t, currentLang = 'en' }) {
  if (!t) return <div>Loading...</div>;
  const pageConfig = getPageConfig('/expansion-history');

  const containerStyle = {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '0 1rem'
  };

  const introStyle = {
    background: '#fff3cd',
    borderLeft: '5px solid #ffc107',
    padding: '1.5rem',
    marginBottom: '2rem',
    borderRadius: '5px'
  };

  const introH3Style = {
    color: '#856404',
    marginBottom: '0.5rem'
  };

  const introPStyle = {
    color: '#856404',
    margin: '0.5rem 0'
  };

  const timelineCardStyle = {
    background: 'white',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const h2Style = {
    color: '#8e44ad',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #9b59b6'
  };

  const yearTagStyle = {
    display: 'inline-block',
    background: '#8e44ad',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  };

  const eventBoxStyle = {
    background: '#f8f9fa',
    borderLeft: '4px solid #9b59b6',
    padding: '1rem',
    margin: '1rem 0'
  };

  const statsBoxStyle = {
    background: '#e8f5e9',
    borderLeft: '4px solid #4caf50',
    padding: '1rem',
    margin: '1rem 0'
  };

  const warBoxStyle = {
    background: '#ffebee',
    borderLeft: '4px solid #f44336',
    padding: '1rem',
    margin: '1rem 0'
  };

  const h4EventStyle = {
    color: '#8e44ad',
    marginBottom: '0.5rem'
  };

  const h4StatsStyle = {
    color: '#2e7d32',
    marginBottom: '0.5rem'
  };

  const h4WarStyle = {
    color: '#c62828',
    marginBottom: '0.5rem'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '1rem 0',
    background: 'white'
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '0.75rem',
    textAlign: 'left',
    background: '#8e44ad',
    color: 'white',
    fontWeight: 'bold'
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '0.75rem',
    textAlign: 'left'
  };

  const ulStyle = {
    marginLeft: '1.5rem',
    marginTop: '0.5rem'
  };

  const olStyle = {
    marginLeft: '1.5rem',
    marginTop: '0.5rem'
  };

  return (
    <>
      <Head>
        <title>Expansion History - Quran Scope</title>
        <meta name="description" content="1,400 Years of Islamic expansion through conquest, coercion, and political domination" />
      </Head>
      
      <div style={containerStyle}>
        <div style={introStyle}>
          <h3 style={introH3Style}>⚠️ Historical Context</h3>
          <p style={introPStyle}>This page documents the historical expansion of Islam primarily through military conquest, political coercion, taxation systems designed to force conversion, and demographic manipulation. All information is sourced from historical records, academic research, and Islamic sources themselves.</p>
          <p style={introPStyle}><strong>Key Points:</strong> Islamic expansion was NOT primarily through "peaceful preaching" but through systematic warfare, jizya taxation on non-Muslims, threat of slavery, destruction of religious sites, and political domination.</p>
        </div>

        {/* MUHAMMAD'S MILITARY CAMPAIGNS */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>622-632 CE</span>
          <h2 style={h2Style}>Muhammad's Military Campaigns (27 Battles, 60+ Raids)</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>📊 Statistics from Muhammad's Lifetime:</h4>
            <ul style={ulStyle}>
              <li><strong>27 major battles</strong> personally led or authorized by Muhammad</li>
              <li><strong>60+ raids (Ghazwa/Saraya)</strong> against caravans and tribes</li>
              <li><strong>Hundreds of assassinations</strong> ordered against critics and opponents</li>
              <li><strong>Entire Jewish tribes</strong> expelled or executed (Banu Qaynuqa, Banu Nadir, Banu Qurayza)</li>
              <li><strong>Slavery institutionalized</strong> - captives sold or distributed as war booty</li>
            </ul>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚔️ Major Military Campaigns:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Year</th>
                  <th style={thStyle}>Battle/Raid</th>
                  <th style={thStyle}>Outcome</th>
                  <th style={thStyle}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>624 CE</td>
                  <td style={tdStyle}>Battle of Badr</td>
                  <td style={tdStyle}>Muslim victory</td>
                  <td style={tdStyle}>Caravan raid turned battle; 70 Meccans killed; prisoners ransomed or executed</td>
                </tr>
                <tr>
                  <td style={tdStyle}>625 CE</td>
                  <td style={tdStyle}>Battle of Uhud</td>
                  <td style={tdStyle}>Muslim defeat</td>
                  <td style={tdStyle}>Revenge attack by Meccans; Muhammad wounded; 70 Muslims killed</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>627 CE</td>
                  <td style={tdStyle}>Battle of the Trench</td>
                  <td style={tdStyle}>Stalemate/Muslim strategic win</td>
                  <td style={tdStyle}>Siege of Medina; followed by genocide of Banu Qurayza Jews</td>
                </tr>
                <tr>
                  <td style={tdStyle}>627 CE</td>
                  <td style={tdStyle}>Massacre of Banu Qurayza</td>
                  <td style={tdStyle}>Genocide</td>
                  <td style={tdStyle}>600-900 Jewish men beheaded; women/children enslaved; total annihilation</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>628 CE</td>
                  <td style={tdStyle}>Treaty of Hudaybiyyah</td>
                  <td style={tdStyle}>Temporary peace</td>
                  <td style={tdStyle}>Broken by Muhammad two years later</td>
                </tr>
                <tr>
                  <td style={tdStyle}>628 CE</td>
                  <td style={tdStyle}>Conquest of Khaybar</td>
                  <td style={tdStyle}>Muslim victory</td>
                  <td style={tdStyle}>Jewish fortress city conquered; wealth seized; jizya imposed</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>630 CE</td>
                  <td style={tdStyle}>Conquest of Mecca</td>
                  <td style={tdStyle}>Muslim victory (mostly bloodless)</td>
                  <td style={tdStyle}>10,000 troops; idols destroyed; forced conversion or exile</td>
                </tr>
                <tr>
                  <td style={tdStyle}>630 CE</td>
                  <td style={tdStyle}>Battle of Hunayn</td>
                  <td style={tdStyle}>Muslim victory</td>
                  <td style={tdStyle}>6,000 captives; massive booty distribution</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>630 CE</td>
                  <td style={tdStyle}>Siege of Taif</td>
                  <td style={tdStyle}>Initial failure, later submission</td>
                  <td style={tdStyle}>Catapults used; later forced conversion</td>
                </tr>
                <tr>
                  <td style={tdStyle}>630 CE</td>
                  <td style={tdStyle}>Expedition to Tabuk</td>
                  <td style={tdStyle}>Show of force</td>
                  <td style={tdStyle}>30,000 troops; Byzantine frontier; submission or jizya demanded</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>🗡️ Ordered Assassinations (Partial List):</h4>
            <ul style={ulStyle}>
              <li><strong>Asma bint Marwan</strong> - Poetess killed for writing critical poetry (624 CE)</li>
              <li><strong>Abu Afak</strong> - 120-year-old poet assassinated for criticizing Muhammad (624 CE)</li>
              <li><strong>Ka'b ibn al-Ashraf</strong> - Jewish poet assassinated (624 CE)</li>
              <li><strong>Abu Rafi</strong> - Jewish leader assassinated in his sleep (624 CE)</li>
              <li><strong>Sallam ibn Abu al-Huqayq</strong> - Jewish leader assassinated (625 CE)</li>
              <li><strong>Al-Nadr ibn al-Harith & Uqba ibn Abu Muayt</strong> - Prisoners of war executed after Badr</li>
            </ul>
            <p><em>Sources: Sahih Bukhari, Sahih Muslim, Sirat Rasul Allah (Ibn Ishaq), Tabari's History</em></p>
          </div>
        </div>

        {/* RASHIDUN CALIPHATE */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>632-661 CE</span>
          <h2 style={h2Style}>Rashidun Caliphate Conquests (First 4 Caliphs)</h2>
          
          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📈 Territorial Expansion:</h4>
            <p>In just 30 years, Islam expanded from Arabia across:</p>
            <ul style={ulStyle}>
              <li>Entire Arabian Peninsula</li>
              <li>Byzantine Levant (Syria, Palestine, Jordan)</li>
              <li>Entire Sassanid Persian Empire</li>
              <li>Egypt and North Africa</li>
              <li>Parts of Anatolia and Armenia</li>
            </ul>
            <p><strong>Result:</strong> One of the fastest military expansions in human history - almost entirely through warfare.</p>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚔️ Major Conquests:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Year</th>
                  <th style={thStyle}>Campaign</th>
                  <th style={thStyle}>Region</th>
                  <th style={thStyle}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>632-633</td>
                  <td style={tdStyle}>Ridda Wars (Apostasy Wars)</td>
                  <td style={tdStyle}>Arabian Peninsula</td>
                  <td style={tdStyle}>Forced reconversion of Arab tribes who left Islam after Muhammad's death; thousands killed</td>
                </tr>
                <tr>
                  <td style={tdStyle}>634</td>
                  <td style={tdStyle}>Battle of Ajnadayn</td>
                  <td style={tdStyle}>Palestine</td>
                  <td style={tdStyle}>Defeated Byzantine army; opened path to Syria</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>636</td>
                  <td style={tdStyle}>Battle of Yarmouk</td>
                  <td style={tdStyle}>Syria</td>
                  <td style={tdStyle}>Decisive defeat of Byzantine Empire; Syria conquered</td>
                </tr>
                <tr>
                  <td style={tdStyle}>637</td>
                  <td style={tdStyle}>Battle of al-Qadisiyyah</td>
                  <td style={tdStyle}>Iraq</td>
                  <td style={tdStyle}>Defeated Persian Sassanid Empire; Iraq conquered</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>638</td>
                  <td style={tdStyle}>Siege of Jerusalem</td>
                  <td style={tdStyle}>Palestine</td>
                  <td style={tdStyle}>Jerusalem surrendered; Christian holy sites taken</td>
                </tr>
                <tr>
                  <td style={tdStyle}>642</td>
                  <td style={tdStyle}>Battle of Nahavand</td>
                  <td style={tdStyle}>Persia</td>
                  <td style={tdStyle}>Final destruction of Persian Empire; forced Islamization began</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>642</td>
                  <td style={tdStyle}>Conquest of Egypt</td>
                  <td style={tdStyle}>Egypt</td>
                  <td style={tdStyle}>Alexandria fell; Coptic Christians subjugated under jizya</td>
                </tr>
                <tr>
                  <td style={tdStyle}>647-709</td>
                  <td style={tdStyle}>Conquest of North Africa</td>
                  <td style={tdStyle}>Libya, Tunisia, Algeria, Morocco</td>
                  <td style={tdStyle}>Berbers forcibly converted; Christian communities destroyed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>🔥 Methods of Conquest:</h4>
            <ol style={olStyle}>
              <li><strong>Ultimatum System:</strong> "Convert to Islam, pay jizya (heavy tax), or face war"</li>
              <li><strong>Jizya Taxation:</strong> Non-Muslims taxed heavily to incentivize conversion</li>
              <li><strong>Slavery:</strong> War captives enslaved; children taken and raised Muslim</li>
              <li><strong>Destruction of Religious Sites:</strong> Churches, temples, synagogues destroyed or converted to mosques</li>
              <li><strong>Dhimmi System:</strong> Non-Muslims made second-class citizens with restricted rights</li>
              <li><strong>Economic Pressure:</strong> Non-Muslims barred from many professions and positions</li>
            </ol>
          </div>
        </div>

        {/* UMAYYAD CALIPHATE */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>661-750 CE</span>
          <h2 style={h2Style}>Umayyad Caliphate Expansion</h2>
          
          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📈 Peak Territorial Extent:</h4>
            <p>At its height, the Umayyad Caliphate was one of the largest empires in history, spanning from:</p>
            <ul style={ulStyle}>
              <li><strong>West:</strong> Iberian Peninsula (Spain/Portugal)</li>
              <li><strong>East:</strong> Borders of India and Central Asia</li>
              <li><strong>North:</strong> Southern France (briefly)</li>
              <li><strong>South:</strong> North Africa to the Sahara</li>
            </ul>
            <p><strong>Total Area:</strong> ~15 million km² (5.8 million sq mi)</p>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚔️ Major Military Campaigns:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Year</th>
                  <th style={thStyle}>Campaign</th>
                  <th style={thStyle}>Region</th>
                  <th style={thStyle}>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>711-718</td>
                  <td style={tdStyle}>Conquest of Hispania</td>
                  <td style={tdStyle}>Spain/Portugal</td>
                  <td style={tdStyle}>Visigothic Kingdom destroyed; Christian population subjugated; forced conversions</td>
                </tr>
                <tr>
                  <td style={tdStyle}>732</td>
                  <td style={tdStyle}>Battle of Tours</td>
                  <td style={tdStyle}>France</td>
                  <td style={tdStyle}>Muslim defeat; stopped expansion into Western Europe</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>674-678</td>
                  <td style={tdStyle}>First Siege of Constantinople</td>
                  <td style={tdStyle}>Byzantine Empire</td>
                  <td style={tdStyle}>Failed; Greek fire used by Byzantines</td>
                </tr>
                <tr>
                  <td style={tdStyle}>717-718</td>
                  <td style={tdStyle}>Second Siege of Constantinople</td>
                  <td style={tdStyle}>Byzantine Empire</td>
                  <td style={tdStyle}>Failed; massive Muslim casualties</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>705-715</td>
                  <td style={tdStyle}>Conquest of Transoxiana</td>
                  <td style={tdStyle}>Central Asia</td>
                  <td style={tdStyle}>Bukhara, Samarkand conquered; Zoroastrian/Buddhist populations forced to convert</td>
                </tr>
                <tr>
                  <td style={tdStyle}>712-715</td>
                  <td style={tdStyle}>Conquest of Sindh</td>
                  <td style={tdStyle}>Northwest India</td>
                  <td style={tdStyle}>Hindu/Buddhist regions conquered; beginning of Islamic India</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>🔥 Forced Islamization Methods:</h4>
            <ul style={ulStyle}>
              <li><strong>Temple Destruction:</strong> Hindu, Buddhist, Zoroastrian temples systematically destroyed</li>
              <li><strong>Enslavement:</strong> Millions of Hindus, Persians, Europeans enslaved</li>
              <li><strong>Conversion or Death:</strong> In some regions, especially for "pagans," no jizya option given</li>
              <li><strong>Kidnapping Children:</strong> Devshirme-like systems; children taken and raised Muslim</li>
              <li><strong>Economic Exclusion:</strong> Non-Muslims banned from government, military, education</li>
            </ul>
          </div>
        </div>

        {/* ABBASID ERA */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>750-1258 CE</span>
          <h2 style={h2Style}>Abbasid Caliphate & Continued Expansion</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>📜 Systematic Islamization Policies:</h4>
            <ul style={ulStyle}>
              <li><strong>Dhimmi Laws Codified:</strong> Non-Muslims required to wear distinctive clothing; restricted from certain professions</li>
              <li><strong>Church/Temple Destruction:</strong> Laws prohibiting new church/temple construction; many forcibly converted to mosques</li>
              <li><strong>Jizya Increases:</strong> Tax burden increased to economically pressure conversion</li>
              <li><strong>Forced Relocation:</strong> Christian and Jewish communities moved or scattered</li>
              <li><strong>Slavery Trade:</strong> Massive African and European slave trade; millions enslaved</li>
            </ul>
          </div>

          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📊 Demographic Changes:</h4>
            <p>Over 500 years, formerly Christian/Zoroastrian/Hindu/Buddhist majority regions became Muslim majority through:</p>
            <ul style={ulStyle}>
              <li>Economic pressure via jizya taxation</li>
              <li>Social discrimination and exclusion</li>
              <li>Intermarriage rules (Muslim men could marry non-Muslim women; children raised Muslim)</li>
              <li>Legal discrimination in courts (non-Muslim testimony worth less)</li>
              <li>Educational exclusion (non-Muslims barred from learning)</li>
              <li>Periodic violence and forced conversions</li>
            </ul>
          </div>
        </div>

        {/* OTTOMAN EMPIRE */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>1299-1922 CE</span>
          <h2 style={h2Style}>Ottoman Empire Expansion & Devshirme System</h2>
          
          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚔️ Major Conquests:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Year</th>
                  <th style={thStyle}>Conquest</th>
                  <th style={thStyle}>Region</th>
                  <th style={thStyle}>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>1453</td>
                  <td style={tdStyle}>Fall of Constantinople</td>
                  <td style={tdStyle}>Byzantine Empire</td>
                  <td style={tdStyle}>End of Christian Byzantine Empire; Hagia Sophia converted to mosque; massive population displacement</td>
                </tr>
                <tr>
                  <td style={tdStyle}>1517</td>
                  <td style={tdStyle}>Conquest of Mamluk Sultanate</td>
                  <td style={tdStyle}>Egypt, Syria, Levant</td>
                  <td style={tdStyle}>Ottoman control of holy cities Mecca/Medina; claimed Caliphate</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>1526</td>
                  <td style={tdStyle}>Battle of Mohács</td>
                  <td style={tdStyle}>Hungary</td>
                  <td style={tdStyle}>Hungary conquered; Central Europe under threat</td>
                </tr>
                <tr>
                  <td style={tdStyle}>1529</td>
                  <td style={tdStyle}>First Siege of Vienna</td>
                  <td style={tdStyle}>Austria</td>
                  <td style={tdStyle}>Failed but terror across Europe</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>1683</td>
                  <td style={tdStyle}>Second Siege of Vienna</td>
                  <td style={tdStyle}>Austria</td>
                  <td style={tdStyle}>Failed; beginning of Ottoman decline</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>👶 Devshirme System (Blood Tax):</h4>
            <p><strong>Definition:</strong> Systematic kidnapping of Christian boys to create Janissary soldiers and bureaucrats</p>
            <ul style={ulStyle}>
              <li><strong>Age:</strong> Boys aged 8-18 taken from Christian families</li>
              <li><strong>Forced Conversion:</strong> Forcibly converted to Islam</li>
              <li><strong>Indoctrination:</strong> Raised to be fanatically loyal to Sultan</li>
              <li><strong>Family Separation:</strong> Forbidden from contacting families</li>
              <li><strong>Scale:</strong> Hundreds of thousands of Christian boys stolen over centuries</li>
              <li><strong>Purpose:</strong> Create elite military force loyal only to Islam and Sultan</li>
            </ul>
            <p><em>This constitutes systematic child kidnapping, forced conversion, and cultural genocide.</em></p>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>💀 Ottoman Genocides & Atrocities:</h4>
            <ul style={ulStyle}>
              <li><strong>Armenian Genocide (1915-1917):</strong> 1.5 million Armenians killed; systematic ethnic cleansing</li>
              <li><strong>Assyrian Genocide:</strong> 250,000-750,000 Assyrian Christians killed</li>
              <li><strong>Greek Genocide:</strong> 450,000-900,000 Greeks killed or expelled</li>
              <li><strong>Forced Islamization:</strong> Millions of Balkan and Caucasus Christians forcibly converted or killed over 600 years</li>
            </ul>
          </div>
        </div>

        {/* MODERN ERA */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>1900-2025 CE</span>
          <h2 style={h2Style}>Modern Era: Political & Demographic Expansion</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>📊 Methods of Modern Expansion:</h4>
            <ul style={ulStyle}>
              <li><strong>High Birth Rates:</strong> Demographic conquest through population growth in minority regions</li>
              <li><strong>Immigration & Refusal to Integrate:</strong> Mass migration with self-segregation and demand for Sharia</li>
              <li><strong>Oil Money Influence:</strong> Saudi Arabia funds mosque construction and Wahhabism worldwide</li>
              <li><strong>Blasphemy Laws:</strong> Political pressure to criminalize criticism of Islam in Western countries</li>
              <li><strong>Intimidation & Violence:</strong> Death threats against critics, apostates, and cartoonists</li>
              <li><strong>Lawfare:</strong> Using Western legal systems to impose Islamic restrictions</li>
              <li><strong>Educational Infiltration:</strong> Demanding Islamic content in schools; opposing critical analysis</li>
            </ul>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚠️ Contemporary Conflicts & Forced Islamization:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Region</th>
                  <th style={thStyle}>Situation</th>
                  <th style={thStyle}>Methods</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>Pakistan</td>
                  <td style={tdStyle}>Hindu/Christian minorities declining</td>
                  <td style={tdStyle}>Forced conversions, kidnapping of girls, blasphemy laws, violence</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Bangladesh</td>
                  <td style={tdStyle}>Hindu minority shrinking</td>
                  <td style={tdStyle}>Violence, land seizure, forced conversion, exodus</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>Egypt</td>
                  <td style={tdStyle}>Coptic Christians declining</td>
                  <td style={tdStyle}>Church attacks, discrimination, kidnapping, forced conversion</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Nigeria</td>
                  <td style={tdStyle}>Boko Haram expansion</td>
                  <td style={tdStyle}>Mass kidnappings, forced conversions, village massacres</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>Iraq/Syria</td>
                  <td style={tdStyle}>ISIS genocide of Yazidis, Christians</td>
                  <td style={tdStyle}>Systematic genocide, sex slavery, forced conversion, beheadings</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Afghanistan</td>
                  <td style={tdStyle}>Taliban rule</td>
                  <td style={tdStyle}>Forced Sharia, zero religious freedom, death for apostasy</td>
                </tr>
                <tr style={{ background: '#f8f9fa' }}>
                  <td style={tdStyle}>Europe</td>
                  <td style={tdStyle}>Growing Islamic parallel societies</td>
                  <td style={tdStyle}>No-go zones, Sharia councils, pressure for Islamic law</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📈 Statistical Growth Mechanisms:</h4>
            <ul style={ulStyle}>
              <li><strong>Birth Rate Differential:</strong> Muslim-majority countries have significantly higher birth rates than non-Muslim populations</li>
              <li><strong>Apostasy Prohibition:</strong> Death penalty or social death for leaving Islam = one-way conversion system</li>
              <li><strong>Intermarriage Asymmetry:</strong> Muslim men can marry non-Muslim women (children raised Muslim); Muslim women forbidden from marrying non-Muslims</li>
              <li><strong>Inheritance Laws:</strong> Non-Muslim children receive less inheritance, incentivizing conversion</li>
              <li><strong>Political Dominance:</strong> Once Muslim majority is achieved, Sharia implemented; non-Muslims become second-class</li>
            </ul>
          </div>
        </div>

        {/* SUMMARY */}
        <div style={timelineCardStyle}>
          <h2 style={h2Style}>📋 Summary: Patterns of Islamic Expansion</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>Historical Pattern:</h4>
            <ol style={olStyle}>
              <li><strong>Military Conquest:</strong> Invade territory through warfare</li>
              <li><strong>Impose Jizya Tax:</strong> Economic pressure on non-Muslims</li>
              <li><strong>Dhimmi Laws:</strong> Systematic discrimination and humiliation</li>
              <li><strong>Destroy Religious Sites:</strong> Eliminate competing religious identity</li>
              <li><strong>Legal Inequality:</strong> Non-Muslims second-class in courts and society</li>
              <li><strong>Intermarriage Rules:</strong> One-way genetic/cultural conquest</li>
              <li><strong>Apostasy Laws:</strong> No exit allowed from Islam</li>
              <li><strong>Generational Pressure:</strong> Over time, economic and social pressure converts majority</li>
              <li><strong>Final Stage:</strong> Sharia fully implemented; remaining non-Muslims expelled or killed</li>
            </ol>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚠️ Key Conclusion:</h4>
            <p><strong>Islamic expansion was NOT primarily through "peaceful preaching" as often claimed.</strong></p>
            <p>Historical evidence overwhelmingly shows expansion through:</p>
            <ul style={ulStyle}>
              <li>✗ Military conquest and warfare</li>
              <li>✗ Economic coercion (jizya taxation system)</li>
              <li>✗ Legal discrimination (dhimmi system)</li>
              <li>✗ Political domination and Sharia implementation</li>
              <li>✗ Slavery and forced conversion</li>
              <li>✗ Destruction of religious/cultural heritage</li>
              <li>✗ Demographic manipulation (birth rates + apostasy laws)</li>
            </ul>
            <p><em>These are documented historical facts from Islamic, Western, and neutral sources.</em></p>
          </div>
        </div>
      </div>
    </>
  );
}
