import Head from 'next/head'
import { List, ListItem } from '../components/ui'

export default function Solution({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">Loading...</div>
  }

  const styles = {
    container: { maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' },
    introBox: { background: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)', color: 'white', borderLeft: '5px solid #0d47a1', padding: '2rem', marginBottom: '2rem', borderRadius: '8px' },
    introH2: { marginBottom: '1rem', fontSize: '1.5rem' },
    contentCard: { background: 'white', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    h2: { color: '#2e7d32', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '3px solid #4caf50', fontSize: '1.6rem' },
    h3: { color: '#1976d2', margin: '1.5rem 0 1rem 0', fontSize: '1.3rem' },
    solutionItem: { background: '#e8f5e9', borderLeft: '4px solid #4caf50', padding: '1.5rem', margin: '1.5rem 0', borderRadius: '5px' },
    solutionH3: { color: '#2e7d32', fontSize: '1.2rem', marginBottom: '0.75rem' },
    emphasisBox: { background: '#fff3e0', border: '2px solid #ff9800', padding: '1.5rem', margin: '1.5rem 0', borderRadius: '5px' },
    emphasisH4: { color: '#e65100', marginBottom: '0.75rem', fontSize: '1.15rem' },
    notSolution: { background: '#ffebee', borderLeft: '4px solid #f44336', padding: '1.5rem', margin: '1.5rem 0', borderRadius: '5px' },
    notSolutionH3: { color: '#c62828', fontSize: '1.2rem', marginBottom: '0.75rem' },
    quoteBox: { background: '#e3f2fd', borderLeft: '4px solid #2196f3', padding: '1.5rem', margin: '1.5rem 0', fontStyle: 'italic', borderRadius: '5px', fontSize: '1.05rem' },
    actionList: { background: '#f1f8e9', padding: '1.5rem', margin: '1rem 0', borderRadius: '5px', border: '2px solid #8bc34a' },
    actionListH4: { color: '#33691e', marginBottom: '1rem', fontSize: '1.2rem' },
    ul: { marginLeft: '2rem', lineHeight: '1.7' },
    ol: { marginLeft: '2rem', lineHeight: '1.7' },
    tag: { display: 'inline-block', background: '#2196f3', color: 'white', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.9rem', margin: '0.3rem', fontWeight: 'bold' },
    highlightStat: { background: '#fff176', padding: '0.3rem 0.6rem', borderRadius: '3px', fontWeight: 'bold' },
    backLink: { display: 'inline-block', color: '#667eea', textDecoration: 'none', marginBottom: '1rem', fontSize: '1rem', fontWeight: '500' }
  }

  return (
    <>
      <Head>
        <title>Solutions - Quran Scope</title>
        <meta name="description" content="Path forward for reform and progress." />
        <link rel="canonical" href="https://quranscope.github.io/solution" />
      </Head>
      
      <div style={styles.container}>
        <a href="/" style={styles.backLink}>← Back to Home</a>
        
        <div style={styles.introBox}>
          <h2 style={styles.introH2}>🕊️ Our Position: Freedom of/from Religion, But Truth First</h2>
          <p><strong>The Ex-Muslim community is NOT calling for banning Islam or stopping people from practicing their faith.</strong></p>
          <p style={{ marginTop: '1rem' }}>We believe in <strong>freedom of belief</strong> and <strong>freedom FROM belief</strong>. People have the right to practice any religion - but NOT the right to impose it on others, harm others, or indoctrinate children with violent, hateful ideologies.</p>
          <p style={{ marginTop: '1rem' }}><strong>Our message is direct:</strong> If you want to keep believing, that's your right. But you must:</p>
          <List className="mt-4">
            <ListItem>✋ <strong>STOP LYING ABOUT THE TEXTS</strong> - Admit what the Quran and Hadith actually say</ListItem>
            <ListItem>✋ <strong>STOP TEACHING HATE TO CHILDREN</strong> - Don't pass violence to next generation</ListItem>
            <ListItem>✋ <strong>ADMIT THE QURAN HAS MORAL PROBLEMS</strong> - It contains violence, misogyny, slavery</ListItem>
            <ListItem>✋ <strong>EMBRACE UNIVERSAL HUMAN RIGHTS</strong> - Modern values over 7th-century tribal law</ListItem>
          </List>
        </div>

        <div style={styles.contentCard}>
          <h2 style={styles.h2}>❌ What We Are NOT Saying</h2>
          
          <div style={styles.notSolution}>
            <h3 style={styles.notSolutionH3}>We Are NOT Asking To:</h3>
            <List>
              <ListItem><strong>Ban Islam:</strong> People have the right to believe what they choose</ListItem>
              <ListItem><strong>Force Atheism:</strong> We respect people's need for spirituality</ListItem>
              <ListItem><strong>Discriminate Against Muslims:</strong> Individual Muslims are not the problem</ListItem>
              <ListItem><strong>Promote Hatred:</strong> We oppose hate from all sources</ListItem>
              <ListItem><strong>Blame All Muslims:</strong> Millions are peaceful and reject violence</ListItem>
            </List>
          </div>

          <div style={styles.emphasisBox}>
            <h4 style={styles.emphasisH4}>🎯 Our Core Principle:</h4>
            <p><strong>Ideas can be criticized. Books can be reformed. Ideologies can be challenged.</strong></p>
            <p>This is not about attacking people - it's about protecting humanity from harmful doctrines.</p>
          </div>
        </div>

        <div style={styles.contentCard}>
          <h2 style={styles.h2}>✅ What We ARE Saying: Concrete Solutions</h2>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>1. Reform the Texts</h3>
            <span style={{ ...styles.tag, background: '#4caf50' }}>TEXT REFORM</span>
            <p style={{ marginTop: '1rem' }}><strong>The Problem:</strong> Violent verses are taught as eternal and applicable today.</p>
            <p style={{ marginTop: '0.5rem' }}><strong>The Solution:</strong></p>
            <List>
              <ListItem>Declare violent verses as "historical context only"</ListItem>
              <ListItem>Add disclaimers in printed Qurans</ListItem>
              <ListItem>Remove from children's curriculum</ListItem>
              <ListItem>Islamic scholars issue unified fatwa against violence</ListItem>
            </List>
          </div>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>2. Stop Indoctrinating Children</h3>
            <span style={{ ...styles.tag, background: '#ff9800' }}>EDUCATION</span>
            <p style={{ marginTop: '1rem' }}><strong>The Problem:</strong> Children taught from age 3-4 that Quran is perfect and violent verses are Allah's commands.</p>
            <p style={{ marginTop: '0.5rem' }}><strong>The Solution:</strong></p>
            <List>
              <ListItem>Ban teaching violent verses to minors</ListItem>
              <ListItem>Reform madrasa curriculum - focus on ethics, not violence</ListItem>
              <ListItem>Teach comparative religion and critical thinking</ListItem>
              <ListItem>Monitor extremist content in religious schools</ListItem>
            </List>
          </div>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>3. Embrace Modern Values</h3>
            <span style={{ ...styles.tag, background: '#00bcd4' }}>MODERN VALUES</span>
            <p style={{ marginTop: '1rem' }}><strong>The Solution:</strong></p>
            <List>
              <ListItem>Separation of Mosque and State</ListItem>
              <ListItem>Abolish Sharia criminal law</ListItem>
              <ListItem>Gender equality by law</ListItem>
              <ListItem>Freedom FROM religion - right to leave Islam</ListItem>
              <ListItem>Abolish blasphemy laws</ListItem>
              <ListItem>LGBTQ+ rights - decriminalize homosexuality</ListItem>
              <ListItem>Ban child marriage globally</ListItem>
            </List>
          </div>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>4. Build Universal Ethics</h3>
            <p style={{ marginTop: '1rem' }}><strong>Replace tribal Islamic values with universal human values:</strong></p>
            <div style={styles.actionList}>
              <h4 style={styles.actionListH4}>✅ Universal Human Values:</h4>
              <List>
                <ListItem><strong>True Charity:</strong> Help ALL people regardless of religion</ListItem>
                <ListItem><strong>Universal Community:</strong> Based on shared humanity, not religion</ListItem>
                <ListItem><strong>Genuine Hospitality:</strong> Kindness to everyone</ListItem>
                <ListItem><strong>Personal Autonomy:</strong> Dress how you want</ListItem>
                <ListItem><strong>Secular Humanism:</strong> Morality for all humanity</ListItem>
              </List>
            </div>
          </div>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>5. Support Ex-Muslims</h3>
            <span style={{ ...styles.tag, background: '#9c27b0' }}>PROTECTION</span>
            <p style={{ marginTop: '1rem' }}><strong>The Solution:</strong></p>
            <List>
              <ListItem>Legal protection - grant asylum to ex-Muslims</ListItem>
              <ListItem>Platform their voices - media interviews</ListItem>
              <ListItem>Fund support organizations</ListItem>
              <ListItem>Social acceptance - leaving Islam should be normalized</ListItem>
            </List>
          </div>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>6. Legal and Political Action</h3>
            <p style={{ marginTop: '1rem' }}><strong>International accountability:</strong></p>
            <List>
              <ListItem>UN sanctions on countries with apostasy death penalty</ListItem>
              <ListItem>Trade conditions tied to human rights</ListItem>
              <ListItem>ICC prosecution of honor killings and persecution</ListItem>
              <ListItem>Ban hate preachers</ListItem>
              <ListItem>Monitor extremist mosques</ListItem>
            </List>
          </div>

          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>7. Education and Counter-Narrative</h3>
            <p style={{ marginTop: '1rem' }}><strong>Promote critical thinking:</strong></p>
            <List>
              <ListItem>Teach Islamic history honestly</ListItem>
              <ListItem>Critical analysis of religious texts</ListItem>
              <ListItem>Comparative ethics</ListItem>
              <ListItem>Challenge censorship - "Islamophobia" shouldn't silence criticism</ListItem>
              <ListItem>Ex-Muslim testimonies in education</ListItem>
            </List>
          </div>
        </div>

        <div style={styles.contentCard}>
          <h2 style={styles.h2}>🌟 What Success Looks Like</h2>
          
          <div style={styles.solutionItem}>
            <h3 style={styles.solutionH3}>Imagine a World Where:</h3>
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
          </div>

          <div style={styles.emphasisBox}>
            <h4 style={styles.emphasisH4}>This Is Achievable - But Requires Real Reform:</h4>
            <List>
              <ListItem><strong>Christianity reformed:</strong> No longer burns witches or executes heretics</ListItem>
              <ListItem><strong>Judaism reformed:</strong> Most don't follow Torah's stoning laws</ListItem>
              <ListItem><strong>Buddhism evolved:</strong> Rejected violent elements</ListItem>
              <ListItem><strong>But Islam is uniquely resistant:</strong> "Final, perfect, eternal" doctrine prevents change</ListItem>
            </List>
            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Real solution: <span style={styles.highlightStat}>LEAVE ISLAM ENTIRELY.</span> Build ethics on humanism and universal compassion.</p>
          </div>
        </div>

        <div style={styles.contentCard}>
          <h2 style={styles.h2}>🔥 Call to Action</h2>
          
          <div style={styles.actionList}>
            <h4 style={styles.actionListH4}>For Muslims & Those Still Believing:</h4>
            <List>
              <ListItem>✊ Face the truth about your texts</ListItem>
              <ListItem>✊ Admit Muhammad was not perfect</ListItem>
              <ListItem>✊ Stop teaching violence to children</ListItem>
              <ListItem>✊ Protect ex-Muslims in your family</ListItem>
              <ListItem>✊ Consider leaving entirely - you can be moral without Islam</ListItem>
            </List>
          </div>

          <div style={{ ...styles.actionList, background: '#e1f5fe', borderColor: '#0277bd' }}>
            <h4 style={{ ...styles.actionListH4, color: '#01579b' }}>For Non-Muslims & Allies:</h4>
            <List>
              <ListItem>✊ Amplify ex-Muslim voices</ListItem>
              <ListItem>✊ Support reform organizations</ListItem>
              <ListItem>✊ Distinguish people from ideology</ListItem>
              <ListItem>✊ Demand accountability</ListItem>
              <ListItem>✊ Reject false equivalences - acknowledge reality</ListItem>
            </List>
          </div>

          <div style={{ ...styles.actionList, background: '#fce4ec', borderColor: '#c2185b' }}>
            <h4 style={{ ...styles.actionListH4, color: '#880e4f' }}>For Governments & Policy Makers:</h4>
            <List>
              <ListItem>✊ Grant asylum to ex-Muslims and persecuted minorities</ListItem>
              <ListItem>✊ Sanction countries with apostasy death penalties</ListItem>
              <ListItem>✊ Monitor extremism in mosques</ListItem>
              <ListItem>✊ Ban child marriage - no religious exemptions</ListItem>
              <ListItem>✊ Protect free speech - criticism is legal</ListItem>
            </List>
          </div>
        </div>

        <div style={{ ...styles.introBox, background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)' }}>
          <h2 style={styles.introH2}>💜 Final Message: Hope for Humanity</h2>
          <p><strong>We are NOT anti-Muslim. We are anti-suffering.</strong></p>
          <p style={{ marginTop: '1rem' }}>We want Muslim women to be free. We want Muslim LGBTQ+ to live safely. We want ex-Muslims to breathe without fear. We want Muslim children to learn love, not hate.</p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.15rem' }}><strong>Religion should comfort, not control. It should inspire love, not mandate hate.</strong></p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>🌍 A better world is possible. Reform is the path. The future depends on it.</p>
        </div>
      </div>
    </>
  )
}
