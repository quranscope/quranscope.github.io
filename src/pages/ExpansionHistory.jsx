import Head from 'next/head';
import { getPageConfig } from '../config/pages';
import { 
  List, 
  ListItem, 
  Container, 
  IntroBox, 
  ContentCard, 
  CategoryTag, 
  SectionTitle, 
  HighlightBox,
  BackLink 
} from '../components/ui';

export default function ExpansionHistory({ translations: t, currentLang = 'en' }) {
  if (!t) return <div>Loading...</div>;
  const pageConfig = getPageConfig('/expansion-history');

  return (
    <>
      <Head>
        <title>Expansion History - Quran Scope</title>
        <meta name="description" content="1,400 Years of Islamic expansion through conquest, coercion, and political domination" />
      </Head>
      
      <Container>
        <BackLink />
        
        <IntroBox title="⚠️ Historical Context" variant="warning">
          <p>This page documents the historical expansion of Islam primarily through military conquest, political coercion, taxation systems designed to force conversion, and demographic manipulation. All information is sourced from historical records, academic research, and Islamic sources themselves.</p>
          <p><strong>Key Points:</strong> Islamic expansion was NOT primarily through "peaceful preaching" but through systematic warfare, jizya taxation on non-Muslims, threat of slavery, destruction of religious sites, and political domination.</p>
        </IntroBox>

        {/* MUHAMMAD'S MILITARY CAMPAIGNS */}
        <ContentCard>
          <CategoryTag color="purple">622-632 CE</CategoryTag>
          <SectionTitle color="primary">Muhammad's Military Campaigns (27 Battles, 60+ Raids)</SectionTitle>
          
          <HighlightBox title="📊 Statistics from Muhammad's Lifetime:" variant="info">
            <List>
              <ListItem><strong>27 major battles</strong> personally led or authorized by Muhammad</ListItem>
              <ListItem><strong>60+ raids (Ghazwa/Saraya)</strong> against caravans and tribes</ListItem>
              <ListItem><strong>Hundreds of assassinations</strong> ordered against critics and opponents</ListItem>
              <ListItem><strong>Entire Jewish tribes</strong> expelled or executed (Banu Qaynuqa, Banu Nadir, Banu Qurayza)</ListItem>
              <ListItem><strong>Slavery institutionalized</strong> - captives sold or distributed as war booty</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="⚔️ Major Military Campaigns:" variant="danger">
            <table className="w-full border-collapse my-4 bg-white">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Year</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Battle/Raid</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Outcome</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">624 CE</td>
                  <td className="border border-gray-300 p-3">Battle of Badr</td>
                  <td className="border border-gray-300 p-3">Muslim victory</td>
                  <td className="border border-gray-300 p-3">Caravan raid turned battle; 70 Meccans killed; prisoners ransomed or executed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">625 CE</td>
                  <td className="border border-gray-300 p-3">Battle of Uhud</td>
                  <td className="border border-gray-300 p-3">Muslim defeat</td>
                  <td className="border border-gray-300 p-3">Revenge attack by Meccans; Muhammad wounded; 70 Muslims killed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">627 CE</td>
                  <td className="border border-gray-300 p-3">Battle of the Trench</td>
                  <td className="border border-gray-300 p-3">Stalemate/Muslim strategic win</td>
                  <td className="border border-gray-300 p-3">Siege of Medina; followed by genocide of Banu Qurayza Jews</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">627 CE</td>
                  <td className="border border-gray-300 p-3">Massacre of Banu Qurayza</td>
                  <td className="border border-gray-300 p-3">Genocide</td>
                  <td className="border border-gray-300 p-3">600-900 Jewish men beheaded; women/children enslaved; total annihilation</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">628 CE</td>
                  <td className="border border-gray-300 p-3">Treaty of Hudaybiyyah</td>
                  <td className="border border-gray-300 p-3">Temporary peace</td>
                  <td className="border border-gray-300 p-3">Broken by Muhammad two years later</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">628 CE</td>
                  <td className="border border-gray-300 p-3">Conquest of Khaybar</td>
                  <td className="border border-gray-300 p-3">Muslim victory</td>
                  <td className="border border-gray-300 p-3">Jewish fortress city conquered; wealth seized; jizya imposed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">630 CE</td>
                  <td className="border border-gray-300 p-3">Conquest of Mecca</td>
                  <td className="border border-gray-300 p-3">Muslim victory (mostly bloodless)</td>
                  <td className="border border-gray-300 p-3">10,000 troops; idols destroyed; forced conversion or exile</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">630 CE</td>
                  <td className="border border-gray-300 p-3">Battle of Hunayn</td>
                  <td className="border border-gray-300 p-3">Muslim victory</td>
                  <td className="border border-gray-300 p-3">6,000 captives; massive booty distribution</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">630 CE</td>
                  <td className="border border-gray-300 p-3">Siege of Taif</td>
                  <td className="border border-gray-300 p-3">Initial failure, later submission</td>
                  <td className="border border-gray-300 p-3">Catapults used; later forced conversion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">630 CE</td>
                  <td className="border border-gray-300 p-3">Expedition to Tabuk</td>
                  <td className="border border-gray-300 p-3">Show of force</td>
                  <td className="border border-gray-300 p-3">30,000 troops; Byzantine frontier; submission or jizya demanded</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>🗡️ Ordered Assassinations (Partial List):</h4>
            <List>
              <ListItem><strong>Asma bint Marwan</strong> - Poetess killed for writing critical poetry (624 CE)</ListItem>
              <ListItem><strong>Abu Afak</strong> - 120-year-old poet assassinated for criticizing Muhammad (624 CE)</ListItem>
              <ListItem><strong>Ka'b ibn al-Ashraf</strong> - Jewish poet assassinated (624 CE)</ListItem>
              <ListItem><strong>Abu Rafi</strong> - Jewish leader assassinated in his sleep (624 CE)</ListItem>
              <ListItem><strong>Sallam ibn Abu al-Huqayq</strong> - Jewish leader assassinated (625 CE)</ListItem>
              <ListItem><strong>Al-Nadr ibn al-Harith & Uqba ibn Abu Muayt</strong> - Prisoners of war executed after Badr</ListItem>
            </List>
            <p className="mt-4"><em>Sources: Sahih Bukhari, Sahih Muslim, Sirat Rasul Allah (Ibn Ishaq), Tabari's History</em></p>
          </HighlightBox>
        </ContentCard>

        {/* RASHIDUN CALIPHATE */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>632-661 CE</span>
          <h2 style={h2Style}>Rashidun Caliphate Conquests (First 4 Caliphs)</h2>
          
          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📈 Territorial Expansion:</h4>
            <p>In just 30 years, Islam expanded from Arabia across:</p>
            <List>
              <ListItem>Entire Arabian Peninsula</ListItem>
              <ListItem>Byzantine Levant (Syria, Palestine, Jordan)</ListItem>
              <ListItem>Entire Sassanid Persian Empire</ListItem>
              <ListItem>Egypt and North Africa</ListItem>
              <ListItem>Parts of Anatolia and Armenia</ListItem>
            </List>
            <p><strong>Result:</strong> One of the fastest military expansions in human history - almost entirely through warfare.</p>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚔️ Major Conquests:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Year</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Campaign</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Region</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">632-633</td>
                  <td className="border border-gray-300 p-3">Ridda Wars (Apostasy Wars)</td>
                  <td className="border border-gray-300 p-3">Arabian Peninsula</td>
                  <td className="border border-gray-300 p-3">Forced reconversion of Arab tribes who left Islam after Muhammad's death; thousands killed</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">634</td>
                  <td className="border border-gray-300 p-3">Battle of Ajnadayn</td>
                  <td className="border border-gray-300 p-3">Palestine</td>
                  <td className="border border-gray-300 p-3">Defeated Byzantine army; opened path to Syria</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">636</td>
                  <td className="border border-gray-300 p-3">Battle of Yarmouk</td>
                  <td className="border border-gray-300 p-3">Syria</td>
                  <td className="border border-gray-300 p-3">Decisive defeat of Byzantine Empire; Syria conquered</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">637</td>
                  <td className="border border-gray-300 p-3">Battle of al-Qadisiyyah</td>
                  <td className="border border-gray-300 p-3">Iraq</td>
                  <td className="border border-gray-300 p-3">Defeated Persian Sassanid Empire; Iraq conquered</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">638</td>
                  <td className="border border-gray-300 p-3">Siege of Jerusalem</td>
                  <td className="border border-gray-300 p-3">Palestine</td>
                  <td className="border border-gray-300 p-3">Jerusalem surrendered; Christian holy sites taken</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">642</td>
                  <td className="border border-gray-300 p-3">Battle of Nahavand</td>
                  <td className="border border-gray-300 p-3">Persia</td>
                  <td className="border border-gray-300 p-3">Final destruction of Persian Empire; forced Islamization began</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">642</td>
                  <td className="border border-gray-300 p-3">Conquest of Egypt</td>
                  <td className="border border-gray-300 p-3">Egypt</td>
                  <td className="border border-gray-300 p-3">Alexandria fell; Coptic Christians subjugated under jizya</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">647-709</td>
                  <td className="border border-gray-300 p-3">Conquest of North Africa</td>
                  <td className="border border-gray-300 p-3">Libya, Tunisia, Algeria, Morocco</td>
                  <td className="border border-gray-300 p-3">Berbers forcibly converted; Christian communities destroyed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>🔥 Methods of Conquest:</h4>
            <List variant="numbered">
              <ListItem><strong>Ultimatum System:</strong> "Convert to Islam, pay jizya (heavy tax), or face war"</ListItem>
              <ListItem><strong>Jizya Taxation:</strong> Non-Muslims taxed heavily to incentivize conversion</ListItem>
              <ListItem><strong>Slavery:</strong> War captives enslaved; children taken and raised Muslim</ListItem>
              <ListItem><strong>Destruction of Religious Sites:</strong> Churches, temples, synagogues destroyed or converted to mosques</ListItem>
              <ListItem><strong>Dhimmi System:</strong> Non-Muslims made second-class citizens with restricted rights</ListItem>
              <ListItem><strong>Economic Pressure:</strong> Non-Muslims barred from many professions and positions</ListItem>
            </List>
          </div>
        </div>

        {/* UMAYYAD CALIPHATE */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>661-750 CE</span>
          <h2 style={h2Style}>Umayyad Caliphate Expansion</h2>
          
          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📈 Peak Territorial Extent:</h4>
            <p>At its height, the Umayyad Caliphate was one of the largest empires in history, spanning from:</p>
            <List>
              <ListItem><strong>West:</strong> Iberian Peninsula (Spain/Portugal)</ListItem>
              <ListItem><strong>East:</strong> Borders of India and Central Asia</ListItem>
              <ListItem><strong>North:</strong> Southern France (briefly)</ListItem>
              <ListItem><strong>South:</strong> North Africa to the Sahara</ListItem>
            </List>
            <p><strong>Total Area:</strong> ~15 million km² (5.8 million sq mi)</p>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚔️ Major Military Campaigns:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Year</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Campaign</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Region</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">711-718</td>
                  <td className="border border-gray-300 p-3">Conquest of Hispania</td>
                  <td className="border border-gray-300 p-3">Spain/Portugal</td>
                  <td className="border border-gray-300 p-3">Visigothic Kingdom destroyed; Christian population subjugated; forced conversions</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">732</td>
                  <td className="border border-gray-300 p-3">Battle of Tours</td>
                  <td className="border border-gray-300 p-3">France</td>
                  <td className="border border-gray-300 p-3">Muslim defeat; stopped expansion into Western Europe</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">674-678</td>
                  <td className="border border-gray-300 p-3">First Siege of Constantinople</td>
                  <td className="border border-gray-300 p-3">Byzantine Empire</td>
                  <td className="border border-gray-300 p-3">Failed; Greek fire used by Byzantines</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">717-718</td>
                  <td className="border border-gray-300 p-3">Second Siege of Constantinople</td>
                  <td className="border border-gray-300 p-3">Byzantine Empire</td>
                  <td className="border border-gray-300 p-3">Failed; massive Muslim casualties</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">705-715</td>
                  <td className="border border-gray-300 p-3">Conquest of Transoxiana</td>
                  <td className="border border-gray-300 p-3">Central Asia</td>
                  <td className="border border-gray-300 p-3">Bukhara, Samarkand conquered; Zoroastrian/Buddhist populations forced to convert</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">712-715</td>
                  <td className="border border-gray-300 p-3">Conquest of Sindh</td>
                  <td className="border border-gray-300 p-3">Northwest India</td>
                  <td className="border border-gray-300 p-3">Hindu/Buddhist regions conquered; beginning of Islamic India</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>🔥 Forced Islamization Methods:</h4>
            <List>
              <ListItem><strong>Temple Destruction:</strong> Hindu, Buddhist, Zoroastrian temples systematically destroyed</ListItem>
              <ListItem><strong>Enslavement:</strong> Millions of Hindus, Persians, Europeans enslaved</ListItem>
              <ListItem><strong>Conversion or Death:</strong> In some regions, especially for "pagans," no jizya option given</ListItem>
              <ListItem><strong>Kidnapping Children:</strong> Devshirme-like systems; children taken and raised Muslim</ListItem>
              <ListItem><strong>Economic Exclusion:</strong> Non-Muslims banned from government, military, education</ListItem>
            </List>
          </div>
        </div>

        {/* ABBASID ERA */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>750-1258 CE</span>
          <h2 style={h2Style}>Abbasid Caliphate & Continued Expansion</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>📜 Systematic Islamization Policies:</h4>
            <List>
              <ListItem><strong>Dhimmi Laws Codified:</strong> Non-Muslims required to wear distinctive clothing; restricted from certain professions</ListItem>
              <ListItem><strong>Church/Temple Destruction:</strong> Laws prohibiting new church/temple construction; many forcibly converted to mosques</ListItem>
              <ListItem><strong>Jizya Increases:</strong> Tax burden increased to economically pressure conversion</ListItem>
              <ListItem><strong>Forced Relocation:</strong> Christian and Jewish communities moved or scattered</ListItem>
              <ListItem><strong>Slavery Trade:</strong> Massive African and European slave trade; millions enslaved</ListItem>
            </List>
          </div>

          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📊 Demographic Changes:</h4>
            <p>Over 500 years, formerly Christian/Zoroastrian/Hindu/Buddhist majority regions became Muslim majority through:</p>
            <List>
              <ListItem>Economic pressure via jizya taxation</ListItem>
              <ListItem>Social discrimination and exclusion</ListItem>
              <ListItem>Intermarriage rules (Muslim men could marry non-Muslim women; children raised Muslim)</ListItem>
              <ListItem>Legal discrimination in courts (non-Muslim testimony worth less)</ListItem>
              <ListItem>Educational exclusion (non-Muslims barred from learning)</ListItem>
              <ListItem>Periodic violence and forced conversions</ListItem>
            </List>
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
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Year</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Conquest</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Region</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1453</td>
                  <td className="border border-gray-300 p-3">Fall of Constantinople</td>
                  <td className="border border-gray-300 p-3">Byzantine Empire</td>
                  <td className="border border-gray-300 p-3">End of Christian Byzantine Empire; Hagia Sophia converted to mosque; massive population displacement</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">1517</td>
                  <td className="border border-gray-300 p-3">Conquest of Mamluk Sultanate</td>
                  <td className="border border-gray-300 p-3">Egypt, Syria, Levant</td>
                  <td className="border border-gray-300 p-3">Ottoman control of holy cities Mecca/Medina; claimed Caliphate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1526</td>
                  <td className="border border-gray-300 p-3">Battle of Mohács</td>
                  <td className="border border-gray-300 p-3">Hungary</td>
                  <td className="border border-gray-300 p-3">Hungary conquered; Central Europe under threat</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">1529</td>
                  <td className="border border-gray-300 p-3">First Siege of Vienna</td>
                  <td className="border border-gray-300 p-3">Austria</td>
                  <td className="border border-gray-300 p-3">Failed but terror across Europe</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1683</td>
                  <td className="border border-gray-300 p-3">Second Siege of Vienna</td>
                  <td className="border border-gray-300 p-3">Austria</td>
                  <td className="border border-gray-300 p-3">Failed; beginning of Ottoman decline</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>👶 Devshirme System (Blood Tax):</h4>
            <p><strong>Definition:</strong> Systematic kidnapping of Christian boys to create Janissary soldiers and bureaucrats</p>
            <List>
              <ListItem><strong>Age:</strong> Boys aged 8-18 taken from Christian families</ListItem>
              <ListItem><strong>Forced Conversion:</strong> Forcibly converted to Islam</ListItem>
              <ListItem><strong>Indoctrination:</strong> Raised to be fanatically loyal to Sultan</ListItem>
              <ListItem><strong>Family Separation:</strong> Forbidden from contacting families</ListItem>
              <ListItem><strong>Scale:</strong> Hundreds of thousands of Christian boys stolen over centuries</ListItem>
              <ListItem><strong>Purpose:</strong> Create elite military force loyal only to Islam and Sultan</ListItem>
            </List>
            <p><em>This constitutes systematic child kidnapping, forced conversion, and cultural genocide.</em></p>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>💀 Ottoman Genocides & Atrocities:</h4>
            <List>
              <ListItem><strong>Armenian Genocide (1915-1917):</strong> 1.5 million Armenians killed; systematic ethnic cleansing</ListItem>
              <ListItem><strong>Assyrian Genocide:</strong> 250,000-750,000 Assyrian Christians killed</ListItem>
              <ListItem><strong>Greek Genocide:</strong> 450,000-900,000 Greeks killed or expelled</ListItem>
              <ListItem><strong>Forced Islamization:</strong> Millions of Balkan and Caucasus Christians forcibly converted or killed over 600 years</ListItem>
            </List>
          </div>
        </div>

        {/* MODERN ERA */}
        <div style={timelineCardStyle}>
          <span style={yearTagStyle}>1900-2025 CE</span>
          <h2 style={h2Style}>Modern Era: Political & Demographic Expansion</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>📊 Methods of Modern Expansion:</h4>
            <List>
              <ListItem><strong>High Birth Rates:</strong> Demographic conquest through population growth in minority regions</ListItem>
              <ListItem><strong>Immigration & Refusal to Integrate:</strong> Mass migration with self-segregation and demand for Sharia</ListItem>
              <ListItem><strong>Oil Money Influence:</strong> Saudi Arabia funds mosque construction and Wahhabism worldwide</ListItem>
              <ListItem><strong>Blasphemy Laws:</strong> Political pressure to criminalize criticism of Islam in Western countries</ListItem>
              <ListItem><strong>Intimidation & Violence:</strong> Death threats against critics, apostates, and cartoonists</ListItem>
              <ListItem><strong>Lawfare:</strong> Using Western legal systems to impose Islamic restrictions</ListItem>
              <ListItem><strong>Educational Infiltration:</strong> Demanding Islamic content in schools; opposing critical analysis</ListItem>
            </List>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚠️ Contemporary Conflicts & Forced Islamization:</h4>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Region</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Situation</th>
                  <th className="border border-gray-300 p-3 text-left bg-purple-600 text-white font-bold">Methods</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Pakistan</td>
                  <td className="border border-gray-300 p-3">Hindu/Christian minorities declining</td>
                  <td className="border border-gray-300 p-3">Forced conversions, kidnapping of girls, blasphemy laws, violence</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Bangladesh</td>
                  <td className="border border-gray-300 p-3">Hindu minority shrinking</td>
                  <td className="border border-gray-300 p-3">Violence, land seizure, forced conversion, exodus</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Egypt</td>
                  <td className="border border-gray-300 p-3">Coptic Christians declining</td>
                  <td className="border border-gray-300 p-3">Church attacks, discrimination, kidnapping, forced conversion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Nigeria</td>
                  <td className="border border-gray-300 p-3">Boko Haram expansion</td>
                  <td className="border border-gray-300 p-3">Mass kidnappings, forced conversions, village massacres</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Iraq/Syria</td>
                  <td className="border border-gray-300 p-3">ISIS genocide of Yazidis, Christians</td>
                  <td className="border border-gray-300 p-3">Systematic genocide, sex slavery, forced conversion, beheadings</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Afghanistan</td>
                  <td className="border border-gray-300 p-3">Taliban rule</td>
                  <td className="border border-gray-300 p-3">Forced Sharia, zero religious freedom, death for apostasy</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Europe</td>
                  <td className="border border-gray-300 p-3">Growing Islamic parallel societies</td>
                  <td className="border border-gray-300 p-3">No-go zones, Sharia councils, pressure for Islamic law</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={statsBoxStyle}>
            <h4 style={h4StatsStyle}>📈 Statistical Growth Mechanisms:</h4>
            <List>
              <ListItem><strong>Birth Rate Differential:</strong> Muslim-majority countries have significantly higher birth rates than non-Muslim populations</ListItem>
              <ListItem><strong>Apostasy Prohibition:</strong> Death penalty or social death for leaving Islam = one-way conversion system</ListItem>
              <ListItem><strong>Intermarriage Asymmetry:</strong> Muslim men can marry non-Muslim women (children raised Muslim); Muslim women forbidden from marrying non-Muslims</ListItem>
              <ListItem><strong>Inheritance Laws:</strong> Non-Muslim children receive less inheritance, incentivizing conversion</ListItem>
              <ListItem><strong>Political Dominance:</strong> Once Muslim majority is achieved, Sharia implemented; non-Muslims become second-class</ListItem>
            </List>
          </div>
        </div>

        {/* SUMMARY */}
        <div style={timelineCardStyle}>
          <h2 style={h2Style}>📋 Summary: Patterns of Islamic Expansion</h2>
          
          <div style={eventBoxStyle}>
            <h4 style={h4EventStyle}>Historical Pattern:</h4>
            <List variant="numbered">
              <ListItem><strong>Military Conquest:</strong> Invade territory through warfare</ListItem>
              <ListItem><strong>Impose Jizya Tax:</strong> Economic pressure on non-Muslims</ListItem>
              <ListItem><strong>Dhimmi Laws:</strong> Systematic discrimination and humiliation</ListItem>
              <ListItem><strong>Destroy Religious Sites:</strong> Eliminate competing religious identity</ListItem>
              <ListItem><strong>Legal Inequality:</strong> Non-Muslims second-class in courts and society</ListItem>
              <ListItem><strong>Intermarriage Rules:</strong> One-way genetic/cultural conquest</ListItem>
              <ListItem><strong>Apostasy Laws:</strong> No exit allowed from Islam</ListItem>
              <ListItem><strong>Generational Pressure:</strong> Over time, economic and social pressure converts majority</ListItem>
              <ListItem><strong>Final Stage:</strong> Sharia fully implemented; remaining non-Muslims expelled or killed</ListItem>
            </List>
          </div>

          <div style={warBoxStyle}>
            <h4 style={h4WarStyle}>⚠️ Key Conclusion:</h4>
            <p><strong>Islamic expansion was NOT primarily through "peaceful preaching" as often claimed.</strong></p>
            <p>Historical evidence overwhelmingly shows expansion through:</p>
            <List>
              <ListItem>✗ Military conquest and warfare</ListItem>
              <ListItem>✗ Economic coercion (jizya taxation system)</ListItem>
              <ListItem>✗ Legal discrimination (dhimmi system)</ListItem>
              <ListItem>✗ Political domination and Sharia implementation</ListItem>
              <ListItem>✗ Slavery and forced conversion</ListItem>
              <ListItem>✗ Destruction of religious/cultural heritage</ListItem>
              <ListItem>✗ Demographic manipulation (birth rates + apostasy laws)</ListItem>
            </List>
            <p><em>These are documented historical facts from Islamic, Western, and neutral sources.</em></p>
          </div>
        </div>
      </div>
    </>
  );
}
