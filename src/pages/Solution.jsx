import Head from 'next/head'
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  SectionTitle,
  HighlightBox,
  CategoryTag,
  List,
  ListItem
} from '../components/ui'

export default function Solution({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Solutions - Quran Scope</title>
        <meta name="description" content="Path forward for reform and progress." />
        <link rel="canonical" href="https://quranscope.github.io/solution" />
      </Head>
      
      <Container>
        <BackLink href="/" />
        
        <IntroBox title="🕊️ Our Position: Freedom of/from Religion, But Truth First" variant="info">
          <p><strong>The Ex-Muslim community is NOT calling for banning Islam or stopping people from practicing their faith.</strong></p>
          <p className="mt-4">We believe in <strong>freedom of belief</strong> and <strong>freedom FROM belief</strong>. People have the right to practice any religion - but NOT the right to impose it on others, harm others, or indoctrinate children with violent, hateful ideologies.</p>
          <p className="mt-4"><strong>Our message is direct:</strong> If you want to keep believing, that's your right. But you must:</p>
          <List className="mt-4">
            <ListItem>✋ <strong>STOP LYING ABOUT THE TEXTS</strong> - Admit what the Quran and Hadith actually say</ListItem>
            <ListItem>✋ <strong>STOP TEACHING HATE TO CHILDREN</strong> - Don't pass violence to next generation</ListItem>
            <ListItem>✋ <strong>ADMIT THE QURAN HAS MORAL PROBLEMS</strong> - It contains violence, misogyny, slavery</ListItem>
            <ListItem>✋ <strong>EMBRACE UNIVERSAL HUMAN RIGHTS</strong> - Modern values over 7th-century tribal law</ListItem>
          </List>
        </IntroBox>

        <ContentCard>
          <SectionTitle color="green">❌ What We Are NOT Saying</SectionTitle>
          
          <HighlightBox title="We Are NOT Asking To:" variant="danger">
            <List>
              <ListItem><strong>Ban Islam:</strong> People have the right to believe what they choose</ListItem>
              <ListItem><strong>Force Atheism:</strong> We respect people's need for spirituality</ListItem>
              <ListItem><strong>Discriminate Against Muslims:</strong> Individual Muslims are not the problem</ListItem>
              <ListItem><strong>Promote Hatred:</strong> We oppose hate from all sources</ListItem>
              <ListItem><strong>Blame All Muslims:</strong> Millions are peaceful and reject violence</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="🎯 Our Core Principle:" variant="warning">
            <p><strong>Ideas can be criticized. Books can be reformed. Ideologies can be challenged.</strong></p>
            <p>This is not about attacking people - it's about protecting humanity from harmful doctrines.</p>
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="green">✅ What We ARE Saying: Concrete Solutions</SectionTitle>

          <HighlightBox title="1. Reform the Texts" variant="success">
            <CategoryTag color="green">TEXT REFORM</CategoryTag>
            <p className="mt-4"><strong>The Problem:</strong> Violent verses are taught as eternal and applicable today.</p>
            <p className="mt-2"><strong>The Solution:</strong></p>
            <List>
              <ListItem>Declare violent verses as "historical context only"</ListItem>
              <ListItem>Add disclaimers in printed Qurans</ListItem>
              <ListItem>Remove from children's curriculum</ListItem>
              <ListItem>Islamic scholars issue unified fatwa against violence</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="2. Stop Indoctrinating Children" variant="success">
            <CategoryTag color="orange">EDUCATION</CategoryTag>
            <p className="mt-4"><strong>The Problem:</strong> Children taught from age 3-4 that Quran is perfect and violent verses are Allah's commands.</p>
            <p className="mt-2"><strong>The Solution:</strong></p>
            <List>
              <ListItem>Ban teaching violent verses to minors</ListItem>
              <ListItem>Reform madrasa curriculum - focus on ethics, not violence</ListItem>
              <ListItem>Teach comparative religion and critical thinking</ListItem>
              <ListItem>Monitor extremist content in religious schools</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="3. Embrace Modern Values" variant="success">
            <CategoryTag color="blue">MODERN VALUES</CategoryTag>
            <p className="mt-4"><strong>The Solution:</strong></p>
            <List>
              <ListItem>Separation of Mosque and State</ListItem>
              <ListItem>Abolish Sharia criminal law</ListItem>
              <ListItem>Gender equality by law</ListItem>
              <ListItem>Freedom FROM religion - right to leave Islam</ListItem>
              <ListItem>Abolish blasphemy laws</ListItem>
              <ListItem>LGBTQ+ rights - decriminalize homosexuality</ListItem>
              <ListItem>Ban child marriage globally</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="4. Build Universal Ethics" variant="success">
            <p className="mt-4"><strong>Replace tribal Islamic values with universal human values:</strong></p>
            <HighlightBox title="✅ Universal Human Values:" variant="info" className="mt-4">
              <List>
                <ListItem><strong>True Charity:</strong> Help ALL people regardless of religion</ListItem>
                <ListItem><strong>Universal Community:</strong> Based on shared humanity, not religion</ListItem>
                <ListItem><strong>Genuine Hospitality:</strong> Kindness to everyone</ListItem>
                <ListItem><strong>Personal Autonomy:</strong> Dress how you want</ListItem>
                <ListItem><strong>Secular Humanism:</strong> Morality for all humanity</ListItem>
              </List>
            </HighlightBox>
          </HighlightBox>

          <HighlightBox title="5. Support Ex-Muslims" variant="success">
            <CategoryTag color="purple">PROTECTION</CategoryTag>
            <p className="mt-4"><strong>The Solution:</strong></p>
            <List>
              <ListItem>Legal protection - grant asylum to ex-Muslims</ListItem>
              <ListItem>Platform their voices - media interviews</ListItem>
              <ListItem>Fund support organizations</ListItem>
              <ListItem>Social acceptance - leaving Islam should be normalized</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="6. Legal and Political Action" variant="success">
            <p className="mt-4"><strong>International accountability:</strong></p>
            <List>
              <ListItem>UN sanctions on countries with apostasy death penalty</ListItem>
              <ListItem>Trade conditions tied to human rights</ListItem>
              <ListItem>ICC prosecution of honor killings and persecution</ListItem>
              <ListItem>Ban hate preachers</ListItem>
              <ListItem>Monitor extremist mosques</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="7. Education and Counter-Narrative" variant="success">
            <p className="mt-4"><strong>Promote critical thinking:</strong></p>
            <List>
              <ListItem>Teach Islamic history honestly</ListItem>
              <ListItem>Critical analysis of religious texts</ListItem>
              <ListItem>Comparative ethics</ListItem>
              <ListItem>Challenge censorship - "Islamophobia" shouldn't silence criticism</ListItem>
              <ListItem>Ex-Muslim testimonies in education</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="green">🌟 What Success Looks Like</SectionTitle>
          
          <HighlightBox title="Imagine a World Where:" variant="success">
            <List>
              <ListItem>✅ Muslim women walk freely without hijab or male guardianship</ListItem>
              <ListItem>✅ Ex-Muslims openly discuss their journey without death threats</ListItem>
              <ListItem>✅ LGBTQ+ Muslims live authentically without risk of execution</ListItem>
              <ListItem>✅ Non-Muslims in Muslim countries have equal rights</ListItem>
              <ListItem>✅ Children learn ethics instead of violent verses</ListItem>
              <ListItem>✅ Mosques preach love and tolerance, not jihad</ListItem>
              <ListItem>✅ Islamic countries prosper with secular law</ListItem>
              <ListItem>✅ Terrorism ends because religious justification is rejected</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="This Is Achievable - But Requires Real Reform:" variant="warning">
            <List>
              <ListItem><strong>Christianity reformed:</strong> No longer burns witches or executes heretics</ListItem>
              <ListItem><strong>Judaism reformed:</strong> Most don't follow Torah's stoning laws</ListItem>
              <ListItem><strong>Buddhism evolved:</strong> Rejected violent elements</ListItem>
              <ListItem><strong>But Islam is uniquely resistant:</strong> "Final, perfect, eternal" doctrine prevents change</ListItem>
            </List>
            <p className="mt-4 font-bold">Real solution: <span className="bg-yellow-300 px-2 py-1 rounded font-bold">LEAVE ISLAM ENTIRELY.</span> Build ethics on humanism and universal compassion.</p>
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="green">🔥 Call to Action</SectionTitle>
          
          <HighlightBox title="For Muslims & Those Still Believing:" variant="success">
            <List>
              <ListItem>✊ Face the truth about your texts</ListItem>
              <ListItem>✊ Admit Muhammad was not perfect</ListItem>
              <ListItem>✊ Stop teaching violence to children</ListItem>
              <ListItem>✊ Protect ex-Muslims in your family</ListItem>
              <ListItem>✊ Consider leaving entirely - you can be moral without Islam</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="For Non-Muslims & Allies:" variant="info">
            <List>
              <ListItem>✊ Amplify ex-Muslim voices</ListItem>
              <ListItem>✊ Support reform organizations</ListItem>
              <ListItem>✊ Distinguish people from ideology</ListItem>
              <ListItem>✊ Demand accountability</ListItem>
              <ListItem>✊ Reject false equivalences - acknowledge reality</ListItem>
            </List>
          </HighlightBox>

          <HighlightBox title="For Governments & Policy Makers:" variant="danger">
            <List>
              <ListItem>✊ Grant asylum to ex-Muslims and persecuted minorities</ListItem>
              <ListItem>✊ Sanction countries with apostasy death penalties</ListItem>
              <ListItem>✊ Monitor extremism in mosques</ListItem>
              <ListItem>✊ Ban child marriage - no religious exemptions</ListItem>
              <ListItem>✊ Protect free speech - criticism is legal</ListItem>
            </List>
          </HighlightBox>
        </ContentCard>

        <IntroBox title="💜 Final Message: Hope for Humanity" variant="success">
          <p><strong>We are NOT anti-Muslim. We are anti-suffering.</strong></p>
          <p className="mt-4">We want Muslim women to be free. We want Muslim LGBTQ+ to live safely. We want ex-Muslims to breathe without fear. We want Muslim children to learn love, not hate.</p>
          <p className="mt-6 text-lg"><strong>Religion should comfort, not control. It should inspire love, not mandate hate.</strong></p>
          <p className="mt-6 text-xl font-bold">🌍 A better world is possible. Reform is the path. The future depends on it.</p>
        </IntroBox>
      </Container>
    </>
  )
}
