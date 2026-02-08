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
  BackLink,
  ResearchItem,
  DetailRow
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
            <ResearchItem title="624 CE - Battle of Badr">
              <DetailRow label="Outcome" value="Muslim victory" />
              <DetailRow label="Details" value="Caravan raid turned battle; 70 Meccans killed; prisoners ransomed or executed" />
            </ResearchItem>
            
            <ResearchItem title="625 CE - Battle of Uhud">
              <DetailRow label="Outcome" value="Muslim defeat" />
              <DetailRow label="Details" value="Revenge attack by Meccans; Muhammad wounded; 70 Muslims killed" />
            </ResearchItem>
            
            <ResearchItem title="627 CE - Battle of the Trench">
              <DetailRow label="Outcome" value="Stalemate/Muslim strategic win" />
              <DetailRow label="Details" value="Siege of Medina; followed by genocide of Banu Qurayza Jews" />
            </ResearchItem>
            
            <ResearchItem title="627 CE - Massacre of Banu Qurayza">
              <DetailRow label="Outcome" value="Genocide" />
              <DetailRow label="Details" value="600-900 Jewish men beheaded; women/children enslaved; total annihilation" />
            </ResearchItem>
            
            <ResearchItem title="628 CE - Treaty of Hudaybiyyah">
              <DetailRow label="Outcome" value="Temporary peace" />
              <DetailRow label="Details" value="Broken by Muhammad two years later" />
            </ResearchItem>
            
            <ResearchItem title="628 CE - Conquest of Khaybar">
              <DetailRow label="Outcome" value="Muslim victory" />
              <DetailRow label="Details" value="Jewish fortress city conquered; wealth seized; jizya imposed" />
            </ResearchItem>
            
            <ResearchItem title="630 CE - Conquest of Mecca">
              <DetailRow label="Outcome" value="Muslim victory (mostly bloodless)" />
              <DetailRow label="Details" value="10,000 troops; idols destroyed; forced conversion or exile" />
            </ResearchItem>
            
            <ResearchItem title="630 CE - Battle of Hunayn">
              <DetailRow label="Outcome" value="Muslim victory" />
              <DetailRow label="Details" value="6,000 captives; massive booty distribution" />
            </ResearchItem>
            
            <ResearchItem title="630 CE - Siege of Taif">
              <DetailRow label="Outcome" value="Initial failure, later submission" />
              <DetailRow label="Details" value="Catapults used; later forced conversion" />
            </ResearchItem>
            
            <ResearchItem title="630 CE - Expedition to Tabuk">
              <DetailRow label="Outcome" value="Show of force" />
              <DetailRow label="Details" value="30,000 troops; Byzantine frontier; submission or jizya demanded" />
            </ResearchItem>
          </HighlightBox>
          <HighlightBox title="🗡️ Ordered Assassinations (Partial List):" variant="danger">
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
        <ContentCard>
          <CategoryTag color="purple">632-661 CE</CategoryTag>
          <SectionTitle color="primary">Rashidun Caliphate Conquests (First 4 Caliphs)</SectionTitle>
          
          <HighlightBox title="📈 Territorial Expansion:" variant="success">
            <p>In just 30 years, Islam expanded from Arabia across:</p>
            <List>
              <ListItem>Entire Arabian Peninsula</ListItem>
              <ListItem>Byzantine Levant (Syria, Palestine, Jordan)</ListItem>
              <ListItem>Entire Sassanid Persian Empire</ListItem>
              <ListItem>Egypt and North Africa</ListItem>
              <ListItem>Parts of Anatolia and Armenia</ListItem>
            </List>
            <p><strong>Result:</strong> One of the fastest military expansions in human history - almost entirely through warfare.</p>
          </HighlightBox>
          <HighlightBox title="⚔️ Major Conquests:" variant="danger">
            <ResearchItem title="632-633 - Ridda Wars (Apostasy Wars)">
              <DetailRow label="Region" value="Arabian Peninsula" />
              <DetailRow label="Result" value="Forced reconversion of Arab tribes who left Islam after Muhammad's death; thousands killed" />
            </ResearchItem>
            
            <ResearchItem title="634 - Battle of Ajnadayn">
              <DetailRow label="Region" value="Palestine" />
              <DetailRow label="Result" value="Defeated Byzantine army; opened path to Syria" />
            </ResearchItem>
            
            <ResearchItem title="636 - Battle of Yarmouk">
              <DetailRow label="Region" value="Syria" />
              <DetailRow label="Result" value="Decisive defeat of Byzantine Empire; Syria conquered" />
            </ResearchItem>
            
            <ResearchItem title="637 - Battle of al-Qadisiyyah">
              <DetailRow label="Region" value="Iraq" />
              <DetailRow label="Result" value="Defeated Persian Sassanid Empire; Iraq conquered" />
            </ResearchItem>
            
            <ResearchItem title="638 - Siege of Jerusalem">
              <DetailRow label="Region" value="Palestine" />
              <DetailRow label="Result" value="Jerusalem surrendered; Christian holy sites taken" />
            </ResearchItem>
            
            <ResearchItem title="642 - Battle of Nahavand">
              <DetailRow label="Region" value="Persia" />
              <DetailRow label="Result" value="Final destruction of Persian Empire; forced Islamization began" />
            </ResearchItem>
            
            <ResearchItem title="642 - Conquest of Egypt">
              <DetailRow label="Region" value="Egypt" />
              <DetailRow label="Result" value="Alexandria fell; Coptic Christians subjugated under jizya" />
            </ResearchItem>
            
            <ResearchItem title="647-709 - Conquest of North Africa">
              <DetailRow label="Region" value="Libya, Tunisia, Algeria, Morocco" />
              <DetailRow label="Result" value="Berbers forcibly converted; Christian communities destroyed" />
            </ResearchItem>
          </HighlightBox>
          <HighlightBox title="🔥 Methods of Conquest:" variant="info">
            <List variant="numbered">
              <ListItem><strong>Ultimatum System:</strong> "Convert to Islam, pay jizya (heavy tax), or face war"</ListItem>
              <ListItem><strong>Jizya Taxation:</strong> Non-Muslims taxed heavily to incentivize conversion</ListItem>
              <ListItem><strong>Slavery:</strong> War captives enslaved; children taken and raised Muslim</ListItem>
              <ListItem><strong>Destruction of Religious Sites:</strong> Churches, temples, synagogues destroyed or converted to mosques</ListItem>
              <ListItem><strong>Dhimmi System:</strong> Non-Muslims made second-class citizens with restricted rights</ListItem>
              <ListItem><strong>Economic Pressure:</strong> Non-Muslims barred from many professions and positions</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        {/* UMAYYAD CALIPHATE */}
        <ContentCard>
          <CategoryTag color="purple">661-750 CE</CategoryTag>
          <SectionTitle color="primary">Umayyad Caliphate Expansion</SectionTitle>
          
          <HighlightBox title="📈 Peak Territorial Extent:" variant="success">
            <p>At its height, the Umayyad Caliphate was one of the largest empires in history, spanning from:</p>
            <List>
              <ListItem><strong>West:</strong> Iberian Peninsula (Spain/Portugal)</ListItem>
              <ListItem><strong>East:</strong> Borders of India and Central Asia</ListItem>
              <ListItem><strong>North:</strong> Southern France (briefly)</ListItem>
              <ListItem><strong>South:</strong> North Africa to the Sahara</ListItem>
            </List>
            <p><strong>Total Area:</strong> ~15 million km² (5.8 million sq mi)</p>
          </HighlightBox>
          <HighlightBox title="⚔️ Major Military Campaigns:" variant="danger">
            <ResearchItem title="711-718 - Conquest of Hispania">
              <DetailRow label="Region" value="Spain/Portugal" />
              <DetailRow label="Result" value="Visigothic Kingdom destroyed; Christian population subjugated; forced conversions" />
            </ResearchItem>
            
            <ResearchItem title="732 - Battle of Tours">
              <DetailRow label="Region" value="France" />
              <DetailRow label="Result" value="Muslim defeat; stopped expansion into Western Europe" />
            </ResearchItem>
            
            <ResearchItem title="674-678 - First Siege of Constantinople">
              <DetailRow label="Region" value="Byzantine Empire" />
              <DetailRow label="Result" value="Failed; Greek fire used by Byzantines" />
            </ResearchItem>
            
            <ResearchItem title="717-718 - Second Siege of Constantinople">
              <DetailRow label="Region" value="Byzantine Empire" />
              <DetailRow label="Result" value="Failed; massive Muslim casualties" />
            </ResearchItem>
            
            <ResearchItem title="705-715 - Conquest of Transoxiana">
              <DetailRow label="Region" value="Central Asia" />
              <DetailRow label="Result" value="Bukhara, Samarkand conquered; Zoroastrian/Buddhist populations forced to convert" />
            </ResearchItem>
            
            <ResearchItem title="712-715 - Conquest of Sindh">
              <DetailRow label="Region" value="Northwest India" />
              <DetailRow label="Result" value="Hindu/Buddhist regions conquered; beginning of Islamic India" />
            </ResearchItem>
          </HighlightBox>
          <HighlightBox title="🔥 Forced Islamization Methods:" variant="danger">
            <List>
              <ListItem><strong>Temple Destruction:</strong> Hindu, Buddhist, Zoroastrian temples systematically destroyed</ListItem>
              <ListItem><strong>Enslavement:</strong> Millions of Hindus, Persians, Europeans enslaved</ListItem>
              <ListItem><strong>Conversion or Death:</strong> In some regions, especially for "pagans," no jizya option given</ListItem>
              <ListItem><strong>Kidnapping Children:</strong> Devshirme-like systems; children taken and raised Muslim</ListItem>
              <ListItem><strong>Economic Exclusion:</strong> Non-Muslims banned from government, military, education</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        {/* ABBASID ERA */}
        <ContentCard>
          <CategoryTag color="purple">750-1258 CE</CategoryTag>
          <SectionTitle color="primary">Abbasid Caliphate & Continued Expansion</SectionTitle>
          
          <HighlightBox title="📜 Systematic Islamization Policies:" variant="info">
            <List>
              <ListItem><strong>Dhimmi Laws Codified:</strong> Non-Muslims required to wear distinctive clothing; restricted from certain professions</ListItem>
              <ListItem><strong>Church/Temple Destruction:</strong> Laws prohibiting new church/temple construction; many forcibly converted to mosques</ListItem>
              <ListItem><strong>Jizya Increases:</strong> Tax burden increased to economically pressure conversion</ListItem>
              <ListItem><strong>Forced Relocation:</strong> Christian and Jewish communities moved or scattered</ListItem>
              <ListItem><strong>Slavery Trade:</strong> Massive African and European slave trade; millions enslaved</ListItem>
            </List>
          </HighlightBox>
          <HighlightBox title="📊 Demographic Changes:" variant="success">
            <p>Over 500 years, formerly Christian/Zoroastrian/Hindu/Buddhist majority regions became Muslim majority through:</p>
            <List>
              <ListItem>Economic pressure via jizya taxation</ListItem>
              <ListItem>Social discrimination and exclusion</ListItem>
              <ListItem>Intermarriage rules (Muslim men could marry non-Muslim women; children raised Muslim)</ListItem>
              <ListItem>Legal discrimination in courts (non-Muslim testimony worth less)</ListItem>
              <ListItem>Educational exclusion (non-Muslims barred from learning)</ListItem>
              <ListItem>Periodic violence and forced conversions</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        {/* OTTOMAN EMPIRE */}
        <ContentCard>
          <CategoryTag color="purple">1299-1922 CE</CategoryTag>
          <SectionTitle color="primary">Ottoman Empire Expansion & Devshirme System</SectionTitle>
          
          <HighlightBox title="⚔️ Major Conquests:" variant="danger">
            <ResearchItem title="1453 - Fall of Constantinople">
              <DetailRow label="Region" value="Byzantine Empire" />
              <DetailRow label="Impact" value="End of Christian Byzantine Empire; Hagia Sophia converted to mosque; massive population displacement" />
            </ResearchItem>
            
            <ResearchItem title="1517 - Conquest of Mamluk Sultanate">
              <DetailRow label="Region" value="Egypt, Syria, Levant" />
              <DetailRow label="Impact" value="Ottoman control of holy cities Mecca/Medina; claimed Caliphate" />
            </ResearchItem>
            
            <ResearchItem title="1526 - Battle of Mohács">
              <DetailRow label="Region" value="Hungary" />
              <DetailRow label="Impact" value="Hungary conquered; Central Europe under threat" />
            </ResearchItem>
            
            <ResearchItem title="1529 - First Siege of Vienna">
              <DetailRow label="Region" value="Austria" />
              <DetailRow label="Impact" value="Failed but terror across Europe" />
            </ResearchItem>
            
            <ResearchItem title="1683 - Second Siege of Vienna">
              <DetailRow label="Region" value="Austria" />
              <DetailRow label="Impact" value="Failed; beginning of Ottoman decline" />
            </ResearchItem>
          </HighlightBox>
          <HighlightBox title="👶 Devshirme System (Blood Tax):" variant="danger">
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
          </HighlightBox>
          <HighlightBox title="💀 Ottoman Genocides & Atrocities:" variant="danger">
            <List>
              <ListItem><strong>Armenian Genocide (1915-1917):</strong> 1.5 million Armenians killed; systematic ethnic cleansing</ListItem>
              <ListItem><strong>Assyrian Genocide:</strong> 250,000-750,000 Assyrian Christians killed</ListItem>
              <ListItem><strong>Greek Genocide:</strong> 450,000-900,000 Greeks killed or expelled</ListItem>
              <ListItem><strong>Forced Islamization:</strong> Millions of Balkan and Caucasus Christians forcibly converted or killed over 600 years</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        {/* MODERN ERA */}
        <ContentCard>
          <CategoryTag color="purple">1900-2025 CE</CategoryTag>
          <SectionTitle color="primary">Modern Era: Political & Demographic Expansion</SectionTitle>
          
          <HighlightBox title="📊 Methods of Modern Expansion:" variant="info">
            <List>
              <ListItem><strong>High Birth Rates:</strong> Demographic conquest through population growth in minority regions</ListItem>
              <ListItem><strong>Immigration & Refusal to Integrate:</strong> Mass migration with self-segregation and demand for Sharia</ListItem>
              <ListItem><strong>Oil Money Influence:</strong> Saudi Arabia funds mosque construction and Wahhabism worldwide</ListItem>
              <ListItem><strong>Blasphemy Laws:</strong> Political pressure to criminalize criticism of Islam in Western countries</ListItem>
              <ListItem><strong>Intimidation & Violence:</strong> Death threats against critics, apostates, and cartoonists</ListItem>
              <ListItem><strong>Lawfare:</strong> Using Western legal systems to impose Islamic restrictions</ListItem>
              <ListItem><strong>Educational Infiltration:</strong> Demanding Islamic content in schools; opposing critical analysis</ListItem>
            </List>
          </HighlightBox>
          <HighlightBox title="⚠️ Contemporary Conflicts & Forced Islamization:" variant="danger">
            <ResearchItem title="Pakistan">
              <DetailRow label="Situation" value="Hindu/Christian minorities declining" />
              <DetailRow label="Methods" value="Forced conversions, kidnapping of girls, blasphemy laws, violence" />
            </ResearchItem>
            
            <ResearchItem title="Bangladesh">
              <DetailRow label="Situation" value="Hindu minority shrinking" />
              <DetailRow label="Methods" value="Violence, land seizure, forced conversion, exodus" />
            </ResearchItem>
            
            <ResearchItem title="Egypt">
              <DetailRow label="Situation" value="Coptic Christians declining" />
              <DetailRow label="Methods" value="Church attacks, discrimination, kidnapping, forced conversion" />
            </ResearchItem>
            
            <ResearchItem title="Nigeria">
              <DetailRow label="Situation" value="Boko Haram expansion" />
              <DetailRow label="Methods" value="Mass kidnappings, forced conversions, village massacres" />
            </ResearchItem>
            
            <ResearchItem title="Iraq/Syria">
              <DetailRow label="Situation" value="ISIS genocide of Yazidis, Christians" />
              <DetailRow label="Methods" value="Systematic genocide, sex slavery, forced conversion, beheadings" />
            </ResearchItem>
            
            <ResearchItem title="Afghanistan">
              <DetailRow label="Situation" value="Taliban rule" />
              <DetailRow label="Methods" value="Forced Sharia, zero religious freedom, death for apostasy" />
            </ResearchItem>
            
            <ResearchItem title="Europe">
              <DetailRow label="Situation" value="Growing Islamic parallel societies" />
              <DetailRow label="Methods" value="No-go zones, Sharia councils, pressure for Islamic law" />
            </ResearchItem>
          </HighlightBox>
          <HighlightBox title="📈 Statistical Growth Mechanisms:" variant="success">
            <List>
              <ListItem><strong>Birth Rate Differential:</strong> Muslim-majority countries have significantly higher birth rates than non-Muslim populations</ListItem>
              <ListItem><strong>Apostasy Prohibition:</strong> Death penalty or social death for leaving Islam = one-way conversion system</ListItem>
              <ListItem><strong>Intermarriage Asymmetry:</strong> Muslim men can marry non-Muslim women (children raised Muslim); Muslim women forbidden from marrying non-Muslims</ListItem>
              <ListItem><strong>Inheritance Laws:</strong> Non-Muslim children receive less inheritance, incentivizing conversion</ListItem>
              <ListItem><strong>Political Dominance:</strong> Once Muslim majority is achieved, Sharia implemented; non-Muslims become second-class</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        {/* SUMMARY */}
        <ContentCard>
          <SectionTitle color="primary">📋 Summary: Patterns of Islamic Expansion</SectionTitle>
          
          <HighlightBox title="Historical Pattern:" variant="info">
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
          </HighlightBox>
          <HighlightBox title="⚠️ Key Conclusion:" variant="danger">
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
          </HighlightBox>
        </ContentCard>
      </Container>
    </>
  );
}
