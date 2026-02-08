import Head from 'next/head';
import { 
  Heading, 
  Description, 
  IntroBox, 
  TimelineCard, 
  YearTag, 
  EventBox, 
  DataTable, 
  TableRow, 
  TableCell,
  List,
  ListItem,
  ListSection
} from '../components/ui';
import { getPageConfig } from '../config/pages';

export default function ExpansionHistory({ translations: t, currentLang = 'en' }) {
  if (!t) return <div>Loading...</div>;
  const pageConfig = getPageConfig('/expansion-history');

  return (
    <>
      <Head>
        <title>Expansion History - Quran Scope</title>
        <meta name="description" content="1,400 Years of Islamic expansion through conquest, coercion, and political domination" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <IntroBox title="⚠️ Historical Context" variant="warning">
          <p>This page documents the historical expansion of Islam primarily through military conquest, political coercion, taxation systems designed to force conversion, and demographic manipulation. All information is sourced from historical records, academic research, and Islamic sources themselves.</p>
          <p className="mt-3"><strong>Key Points:</strong> Islamic expansion was NOT primarily through "peaceful preaching" but through systematic warfare, jizya taxation on non-Muslims, threat of slavery, destruction of religious sites, and political domination.</p>
        </IntroBox>

        {/* MUHAMMAD'S MILITARY CAMPAIGNS */}
        <TimelineCard>
          <YearTag>622-632 CE</YearTag>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">Muhammad's Military Campaigns (27 Battles, 60+ Raids)</Heading>
          
          <EventBox variant="event" title="📊 Statistics from Muhammad's Lifetime:">
            <List>
              <ListItem><strong>27 major battles</strong> personally led or authorized by Muhammad</ListItem>
              <ListItem><strong>60+ raids (Ghazwa/Saraya)</strong> against caravans and tribes</ListItem>
              <ListItem><strong>Hundreds of assassinations</strong> ordered against critics and opponents</ListItem>
              <ListItem><strong>Entire Jewish tribes</strong> expelled or executed (Banu Qaynuqa, Banu Nadir, Banu Qurayza)</ListItem>
              <ListItem><strong>Slavery institutionalized</strong> - captives sold or distributed as war booty</ListItem>
            </List>
          </EventBox>

          <EventBox variant="war" title="⚔️ Major Military Campaigns:">
            <DataTable headers={['Year', 'Battle/Raid', 'Outcome', 'Notes']}>
              <TableRow striped>
                <TableCell>624 CE</TableCell>
                <TableCell>Battle of Badr</TableCell>
                <TableCell>Muslim victory</TableCell>
                <TableCell>Caravan raid turned battle; 70 Meccans killed; prisoners ransomed or executed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>625 CE</TableCell>
                <TableCell>Battle of Uhud</TableCell>
                <TableCell>Muslim defeat</TableCell>
                <TableCell>Revenge attack by Meccans; Muhammad wounded; 70 Muslims killed</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>627 CE</TableCell>
                <TableCell>Battle of the Trench</TableCell>
                <TableCell>Stalemate/Muslim strategic win</TableCell>
                <TableCell>Siege of Medina; followed by genocide of Banu Qurayza Jews</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>627 CE</TableCell>
                <TableCell>Massacre of Banu Qurayza</TableCell>
                <TableCell>Genocide</TableCell>
                <TableCell>600-900 Jewish men beheaded; women/children enslaved; total annihilation</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>628 CE</TableCell>
                <TableCell>Treaty of Hudaybiyyah</TableCell>
                <TableCell>Temporary peace</TableCell>
                <TableCell>Broken by Muhammad two years later</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>628 CE</TableCell>
                <TableCell>Conquest of Khaybar</TableCell>
                <TableCell>Muslim victory</TableCell>
                <TableCell>Jewish fortress city conquered; wealth seized; jizya imposed</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>630 CE</TableCell>
                <TableCell>Conquest of Mecca</TableCell>
                <TableCell>Muslim victory (mostly bloodless)</TableCell>
                <TableCell>10,000 troops; idols destroyed; forced conversion or exile</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>630 CE</TableCell>
                <TableCell>Battle of Hunayn</TableCell>
                <TableCell>Muslim victory</TableCell>
                <TableCell>6,000 captives; massive booty distribution</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>630 CE</TableCell>
                <TableCell>Siege of Taif</TableCell>
                <TableCell>Initial failure, later submission</TableCell>
                <TableCell>Catapults used; later forced conversion</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>630 CE</TableCell>
                <TableCell>Expedition to Tabuk</TableCell>
                <TableCell>Show of force</TableCell>
                <TableCell>30,000 troops; Byzantine frontier; submission or jizya demanded</TableCell>
              </TableRow>
            </DataTable>
          </EventBox>

          <EventBox variant="war" title="🗡️ Ordered Assassinations (Partial List):">
            <List>
              <ListItem><strong>Asma bint Marwan</strong> - Poetess killed for writing critical poetry (624 CE)</ListItem>
              <ListItem><strong>Abu Afak</strong> - 120-year-old poet assassinated for criticizing Muhammad (624 CE)</ListItem>
              <ListItem><strong>Ka'b ibn al-Ashraf</strong> - Jewish poet assassinated (624 CE)</ListItem>
              <ListItem><strong>Abu Rafi</strong> - Jewish leader assassinated in his sleep (624 CE)</ListItem>
              <ListItem><strong>Sallam ibn Abu al-Huqayq</strong> - Jewish leader assassinated (625 CE)</ListItem>
              <ListItem><strong>Al-Nadr ibn al-Harith & Uqba ibn Abu Muayt</strong> - Prisoners of war executed after Badr</ListItem>
            </List>
            <p className="mt-2"><em>Sources: Sahih Bukhari, Sahih Muslim, Sirat Rasul Allah (Ibn Ishaq), Tabari's History</em></p>
          </EventBox>
        </TimelineCard>

        {/* RASHIDUN CALIPHATE */}
        <TimelineCard>
          <YearTag>632-661 CE</YearTag>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">Rashidun Caliphate Conquests (First 4 Caliphs)</Heading>
          
          <EventBox variant="stats" title="📈 Territorial Expansion:">
            <p>In just 30 years, Islam expanded from Arabia across:</p>
            <List>
              <ListItem>Entire Arabian Peninsula</ListItem>
              <ListItem>Byzantine Levant (Syria, Palestine, Jordan)</ListItem>
              <ListItem>Entire Sassanid Persian Empire</ListItem>
              <ListItem>Egypt and North Africa</ListItem>
              <ListItem>Parts of Anatolia and Armenia</ListItem>
            </List>
            <p className="mt-3"><strong>Result:</strong> One of the fastest military expansions in human history - almost entirely through warfare.</p>
          </EventBox>

          <EventBox variant="war" title="⚔️ Major Conquests:">
            <DataTable headers={['Year', 'Campaign', 'Region', 'Result']}>
              <TableRow striped>
                <TableCell>632-633</TableCell>
                <TableCell>Ridda Wars (Apostasy Wars)</TableCell>
                <TableCell>Arabian Peninsula</TableCell>
                <TableCell>Forced reconversion of Arab tribes who left Islam after Muhammad's death; thousands killed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>634</TableCell>
                <TableCell>Battle of Ajnadayn</TableCell>
                <TableCell>Palestine</TableCell>
                <TableCell>Defeated Byzantine army; opened path to Syria</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>636</TableCell>
                <TableCell>Battle of Yarmouk</TableCell>
                <TableCell>Syria</TableCell>
                <TableCell>Decisive defeat of Byzantine Empire; Syria conquered</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>637</TableCell>
                <TableCell>Battle of al-Qadisiyyah</TableCell>
                <TableCell>Iraq</TableCell>
                <TableCell>Defeated Persian Sassanid Empire; Iraq conquered</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>638</TableCell>
                <TableCell>Siege of Jerusalem</TableCell>
                <TableCell>Palestine</TableCell>
                <TableCell>Jerusalem surrendered; Christian holy sites taken</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>642</TableCell>
                <TableCell>Battle of Nahavand</TableCell>
                <TableCell>Persia</TableCell>
                <TableCell>Final destruction of Persian Empire; forced Islamization began</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>642</TableCell>
                <TableCell>Conquest of Egypt</TableCell>
                <TableCell>Egypt</TableCell>
                <TableCell>Alexandria fell; Coptic Christians subjugated under jizya</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>647-709</TableCell>
                <TableCell>Conquest of North Africa</TableCell>
                <TableCell>Libya, Tunisia, Algeria, Morocco</TableCell>
                <TableCell>Berbers forcibly converted; Christian communities destroyed</TableCell>
              </TableRow>
            </DataTable>
          </EventBox>

          <EventBox variant="event" title="🔥 Methods of Conquest:">
            <List variant="numbered">
              <ListItem><strong>Ultimatum System:</strong> "Convert to Islam, pay jizya (heavy tax), or face war"</ListItem>
              <ListItem><strong>Jizya Taxation:</strong> Non-Muslims taxed heavily to incentivize conversion</ListItem>
              <ListItem><strong>Slavery:</strong> War captives enslaved; children taken and raised Muslim</ListItem>
              <ListItem><strong>Destruction of Religious Sites:</strong> Churches, temples, synagogues destroyed or converted to mosques</ListItem>
              <ListItem><strong>Dhimmi System:</strong> Non-Muslims made second-class citizens with restricted rights</ListItem>
              <ListItem><strong>Economic Pressure:</strong> Non-Muslims barred from many professions and positions</ListItem>
            </List>
          </EventBox>
        </TimelineCard>

        {/* UMAYYAD CALIPHATE */}
        <TimelineCard>
          <YearTag>661-750 CE</YearTag>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">Umayyad Caliphate Expansion</Heading>
          
          <EventBox variant="stats" title="📈 Peak Territorial Extent:">
            <p>At its height, the Umayyad Caliphate was one of the largest empires in history, spanning from:</p>
            <List>
              <ListItem><strong>West:</strong> Iberian Peninsula (Spain/Portugal)</ListItem>
              <ListItem><strong>East:</strong> Borders of India and Central Asia</ListItem>
              <ListItem><strong>North:</strong> Southern France (briefly)</ListItem>
              <ListItem><strong>South:</strong> North Africa to the Sahara</ListItem>
            </List>
            <p className="mt-3"><strong>Total Area:</strong> ~15 million km² (5.8 million sq mi)</p>
          </EventBox>

          <EventBox variant="war" title="⚔️ Major Military Campaigns:">
            <DataTable headers={['Year', 'Campaign', 'Region', 'Result']}>
              <TableRow striped>
                <TableCell>711-718</TableCell>
                <TableCell>Conquest of Hispania</TableCell>
                <TableCell>Spain/Portugal</TableCell>
                <TableCell>Visigothic Kingdom destroyed; Christian population subjugated; forced conversions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>732</TableCell>
                <TableCell>Battle of Tours</TableCell>
                <TableCell>France</TableCell>
                <TableCell>Muslim defeat; stopped expansion into Western Europe</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>674-678</TableCell>
                <TableCell>First Siege of Constantinople</TableCell>
                <TableCell>Byzantine Empire</TableCell>
                <TableCell>Failed; Greek fire used by Byzantines</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>717-718</TableCell>
                <TableCell>Second Siege of Constantinople</TableCell>
                <TableCell>Byzantine Empire</TableCell>
                <TableCell>Failed; massive Muslim casualties</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>705-715</TableCell>
                <TableCell>Conquest of Transoxiana</TableCell>
                <TableCell>Central Asia</TableCell>
                <TableCell>Bukhara, Samarkand conquered; Zoroastrian/Buddhist populations forced to convert</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>712-715</TableCell>
                <TableCell>Conquest of Sindh</TableCell>
                <TableCell>Northwest India</TableCell>
                <TableCell>Hindu/Buddhist regions conquered; beginning of Islamic India</TableCell>
              </TableRow>
            </DataTable>
          </EventBox>

          <EventBox variant="war" title="🔥 Forced Islamization Methods:">
            <List>
              <ListItem><strong>Temple Destruction:</strong> Hindu, Buddhist, Zoroastrian temples systematically destroyed</ListItem>
              <ListItem><strong>Enslavement:</strong> Millions of Hindus, Persians, Europeans enslaved</ListItem>
              <ListItem><strong>Conversion or Death:</strong> In some regions, especially for "pagans," no jizya option given</ListItem>
              <ListItem><strong>Kidnapping Children:</strong> Devshirme-like systems; children taken and raised Muslim</ListItem>
              <ListItem><strong>Economic Exclusion:</strong> Non-Muslims banned from government, military, education</ListItem>
            </List>
          </EventBox>
        </TimelineCard>

        {/* ABBASID ERA */}
        <TimelineCard>
          <YearTag>750-1258 CE</YearTag>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">Abbasid Caliphate & Continued Expansion</Heading>
          
          <EventBox variant="event" title="📜 Systematic Islamization Policies:">
            <List>
              <ListItem><strong>Dhimmi Laws Codified:</strong> Non-Muslims required to wear distinctive clothing; restricted from certain professions</ListItem>
              <ListItem><strong>Church/Temple Destruction:</strong> Laws prohibiting new church/temple construction; many forcibly converted to mosques</ListItem>
              <ListItem><strong>Jizya Increases:</strong> Tax burden increased to economically pressure conversion</ListItem>
              <ListItem><strong>Forced Relocation:</strong> Christian and Jewish communities moved or scattered</ListItem>
              <ListItem><strong>Slavery Trade:</strong> Massive African and European slave trade; millions enslaved</ListItem>
            </List>
          </EventBox>

          <EventBox variant="stats" title="📊 Demographic Changes:">
            <p>Over 500 years, formerly Christian/Zoroastrian/Hindu/Buddhist majority regions became Muslim majority through:</p>
            <List>
              <ListItem>Economic pressure via jizya taxation</ListItem>
              <ListItem>Social discrimination and exclusion</ListItem>
              <ListItem>Intermarriage rules (Muslim men could marry non-Muslim women; children raised Muslim)</ListItem>
              <ListItem>Legal discrimination in courts (non-Muslim testimony worth less)</ListItem>
              <ListItem>Educational exclusion (non-Muslims barred from learning)</ListItem>
              <ListItem>Periodic violence and forced conversions</ListItem>
            </List>
          </EventBox>
        </TimelineCard>

        {/* OTTOMAN EMPIRE */}
        <TimelineCard>
          <YearTag>1299-1922 CE</YearTag>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">Ottoman Empire Expansion & Devshirme System</Heading>
          
          <EventBox variant="war" title="⚔️ Major Conquests:">
            <DataTable headers={['Year', 'Conquest', 'Region', 'Impact']}>
              <TableRow striped>
                <TableCell>1453</TableCell>
                <TableCell>Fall of Constantinople</TableCell>
                <TableCell>Byzantine Empire</TableCell>
                <TableCell>End of Christian Byzantine Empire; Hagia Sophia converted to mosque; massive population displacement</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1517</TableCell>
                <TableCell>Conquest of Mamluk Sultanate</TableCell>
                <TableCell>Egypt, Syria, Levant</TableCell>
                <TableCell>Ottoman control of holy cities Mecca/Medina; claimed Caliphate</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>1526</TableCell>
                <TableCell>Battle of Mohács</TableCell>
                <TableCell>Hungary</TableCell>
                <TableCell>Hungary conquered; Central Europe under threat</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1529</TableCell>
                <TableCell>First Siege of Vienna</TableCell>
                <TableCell>Austria</TableCell>
                <TableCell>Failed but terror across Europe</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>1683</TableCell>
                <TableCell>Second Siege of Vienna</TableCell>
                <TableCell>Austria</TableCell>
                <TableCell>Failed; beginning of Ottoman decline</TableCell>
              </TableRow>
            </DataTable>
          </EventBox>

          <EventBox variant="war" title="👶 Devshirme System (Blood Tax):">
            <p><strong>Definition:</strong> Systematic kidnapping of Christian boys to create Janissary soldiers and bureaucrats</p>
            <List>
              <ListItem><strong>Age:</strong> Boys aged 8-18 taken from Christian families</ListItem>
              <ListItem><strong>Forced Conversion:</strong> Forcibly converted to Islam</ListItem>
              <ListItem><strong>Indoctrination:</strong> Raised to be fanatically loyal to Sultan</ListItem>
              <ListItem><strong>Family Separation:</strong> Forbidden from contacting families</ListItem>
              <ListItem><strong>Scale:</strong> Hundreds of thousands of Christian boys stolen over centuries</ListItem>
              <ListItem><strong>Purpose:</strong> Create elite military force loyal only to Islam and Sultan</ListItem>
            </List>
            <p className="mt-2"><em>This constitutes systematic child kidnapping, forced conversion, and cultural genocide.</em></p>
          </EventBox>

          <EventBox variant="war" title="💀 Ottoman Genocides & Atrocities:">
            <List>
              <ListItem><strong>Armenian Genocide (1915-1917):</strong> 1.5 million Armenians killed; systematic ethnic cleansing</ListItem>
              <ListItem><strong>Assyrian Genocide:</strong> 250,000-750,000 Assyrian Christians killed</ListItem>
              <ListItem><strong>Greek Genocide:</strong> 450,000-900,000 Greeks killed or expelled</ListItem>
              <ListItem><strong>Forced Islamization:</strong> Millions of Balkan and Caucasus Christians forcibly converted or killed over 600 years</ListItem>
            </List>
          </EventBox>
        </TimelineCard>

        {/* MODERN ERA */}
        <TimelineCard>
          <YearTag>1900-2025 CE</YearTag>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">Modern Era: Political & Demographic Expansion</Heading>
          
          <EventBox variant="event" title="📊 Methods of Modern Expansion:">
            <List>
              <ListItem><strong>High Birth Rates:</strong> Demographic conquest through population growth in minority regions</ListItem>
              <ListItem><strong>Immigration & Refusal to Integrate:</strong> Mass migration with self-segregation and demand for Sharia</ListItem>
              <ListItem><strong>Oil Money Influence:</strong> Saudi Arabia funds mosque construction and Wahhabism worldwide</ListItem>
              <ListItem><strong>Blasphemy Laws:</strong> Political pressure to criminalize criticism of Islam in Western countries</ListItem>
              <ListItem><strong>Intimidation & Violence:</strong> Death threats against critics, apostates, and cartoonists</ListItem>
              <ListItem><strong>Lawfare:</strong> Using Western legal systems to impose Islamic restrictions</ListItem>
              <ListItem><strong>Educational Infiltration:</strong> Demanding Islamic content in schools; opposing critical analysis</ListItem>
            </List>
          </EventBox>

          <EventBox variant="war" title="⚠️ Contemporary Conflicts & Forced Islamization:">
            <DataTable headers={['Region', 'Situation', 'Methods']}>
              <TableRow striped>
                <TableCell>Pakistan</TableCell>
                <TableCell>Hindu/Christian minorities declining</TableCell>
                <TableCell>Forced conversions, kidnapping of girls, blasphemy laws, violence</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bangladesh</TableCell>
                <TableCell>Hindu minority shrinking</TableCell>
                <TableCell>Violence, land seizure, forced conversion, exodus</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>Egypt</TableCell>
                <TableCell>Coptic Christians declining</TableCell>
                <TableCell>Church attacks, discrimination, kidnapping, forced conversion</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nigeria</TableCell>
                <TableCell>Boko Haram expansion</TableCell>
                <TableCell>Mass kidnappings, forced conversions, village massacres</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>Iraq/Syria</TableCell>
                <TableCell>ISIS genocide of Yazidis, Christians</TableCell>
                <TableCell>Systematic genocide, sex slavery, forced conversion, beheadings</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Afghanistan</TableCell>
                <TableCell>Taliban rule</TableCell>
                <TableCell>Forced Sharia, zero religious freedom, death for apostasy</TableCell>
              </TableRow>
              <TableRow striped>
                <TableCell>Europe</TableCell>
                <TableCell>Growing Islamic parallel societies</TableCell>
                <TableCell>No-go zones, Sharia councils, pressure for Islamic law</TableCell>
              </TableRow>
            </DataTable>
          </EventBox>

          <EventBox variant="stats" title="📈 Statistical Growth Mechanisms:">
            <List>
              <ListItem><strong>Birth Rate Differential:</strong> Muslim-majority countries have significantly higher birth rates than non-Muslim populations</ListItem>
              <ListItem><strong>Apostasy Prohibition:</strong> Death penalty or social death for leaving Islam = one-way conversion system</ListItem>
              <ListItem><strong>Intermarriage Asymmetry:</strong> Muslim men can marry non-Muslim women (children raised Muslim); Muslim women forbidden from marrying non-Muslims</ListItem>
              <ListItem><strong>Inheritance Laws:</strong> Non-Muslim children receive less inheritance, incentivizing conversion</ListItem>
              <ListItem><strong>Political Dominance:</strong> Once Muslim majority is achieved, Sharia implemented; non-Muslims become second-class</ListItem>
            </List>
          </EventBox>
        </TimelineCard>

        {/* SUMMARY */}
        <TimelineCard>
          <Heading level={2} className="text-purple-600 mb-4 pb-2 border-b-2 border-purple-400">📋 Summary: Patterns of Islamic Expansion</Heading>
          
          <EventBox variant="event" title="Historical Pattern:">
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
          </EventBox>

          <EventBox variant="war" title="⚠️ Key Conclusion:">
            <p><strong>Islamic expansion was NOT primarily through "peaceful preaching" as often claimed.</strong></p>
            <p className="mt-2">Historical evidence overwhelmingly shows expansion through:</p>
            <List>
              <ListItem>✗ Military conquest and warfare</ListItem>
              <ListItem>✗ Economic coercion (jizya taxation system)</ListItem>
              <ListItem>✗ Legal discrimination (dhimmi system)</ListItem>
              <ListItem>✗ Political domination and Sharia implementation</ListItem>
              <ListItem>✗ Slavery and forced conversion</ListItem>
              <ListItem>✗ Destruction of religious/cultural heritage</ListItem>
              <ListItem>✗ Demographic manipulation (birth rates + apostasy laws)</ListItem>
            </List>
            <p className="mt-2"><em>These are documented historical facts from Islamic, Western, and neutral sources.</em></p>
          </EventBox>
        </TimelineCard>
      </div>
    </>
  );
}
