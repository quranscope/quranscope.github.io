import Head from 'next/head'

export default function ComparativeResearch({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">Loading...</div>
  }

  const styles = {
    container: { maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' },
    intro: { background: '#fff3cd', borderLeft: '5px solid #ffc107', padding: '1.5rem', marginBottom: '2rem', borderRadius: '5px' },
    introH3: { color: '#856404', marginBottom: '0.5rem' },
    introP: { color: '#856404', margin: '0.5rem 0' },
    statsBox: { background: 'white', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' },
    statsH2: { color: '#667eea', marginBottom: '1rem' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' },
    statItem: { background: '#f8f9fa', padding: '1rem', borderRadius: '5px', borderLeft: '4px solid #667eea' },
    statNumber: { fontSize: '2rem', fontWeight: 'bold', color: '#764ba2' },
    statLabel: { color: '#666', fontSize: '0.9rem' },
    contentCard: { background: 'white', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    contentCardH2: { color: '#667eea', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #764ba2' },
    categoryTag: { display: 'inline-block', background: '#764ba2', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 'bold' },
    researchItem: { background: '#f8f9fa', borderLeft: '4px solid #667eea', padding: '1.5rem', margin: '1.5rem 0', borderRadius: '5px' },
    researchItemH3: { color: '#2c3e50', fontSize: '1.2rem', marginBottom: '0.75rem' },
    detailRow: { margin: '0.5rem 0', padding: '0.25rem 0' },
    detailLabel: { fontWeight: 'bold', color: '#667eea', display: 'inline' },
    detailValue: { color: '#555' },
    verseRef: { background: '#e3f2fd', color: '#1565c0', padding: '0.2rem 0.5rem', borderRadius: '3px', fontSize: '0.85rem', margin: '0.2rem', display: 'inline-block' },
    sourceDate: { background: '#fff3e0', color: '#e65100', padding: '0.2rem 0.5rem', borderRadius: '3px', fontWeight: 'bold', fontSize: '0.85rem' },
    backLink: { display: 'inline-block', color: '#667eea', textDecoration: 'none', marginBottom: '1rem', fontSize: '1rem', fontWeight: '500' }
  }

  return (
    <>
      <Head>
        <title>Copied & Edited Content - Quran Scope</title>
        <meta name="description" content="How Quranic Narratives Were Derived from Earlier Sources - 80 documented parallels between Quranic stories and earlier Jewish, Christian, Zoroastrian, and Arabian sources (100-1,300 years older)." />
        <link rel="canonical" href="https://quranscope.github.io/comparative-research" />
        <meta property="og:title" content="Copied & Edited Content - Quran Analysis" />
        <meta property="og:description" content="80 documented parallels between Quranic stories and sources 100-1,300 years older" />
      </Head>

      <div style={styles.container}>
        <a href="/" style={styles.backLink}>← Back to Home</a>
        
        <div style={styles.intro}>
          <h3 style={styles.introH3}>⚠️ Research Overview</h3>
          <p style={styles.introP}>This page documents 80 specific parallels between Quranic stories and earlier Jewish, Christian, Zoroastrian, and Arabian sources, covering every major narrative and concept in the Quran.</p>
          <p style={styles.introP}>Each entry includes Quran verse references, source dates, similarities, differences, and academic citations demonstrating chronological dependence.</p>
          <p style={styles.introP}><strong>Key Finding:</strong> The Quran extensively borrows and modifies stories from pre-existing religious and cultural traditions (100-1,300 years older), demonstrating human compilation rather than divine revelation.</p>
        </div>

        <div style={styles.statsBox}>
          <h2 style={styles.statsH2}>📊 Documentation Statistics</h2>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>80</div>
              <div style={styles.statLabel}>Documented Parallels</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>6</div>
              <div style={styles.statLabel}>Source Categories</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100-1,300</div>
              <div style={styles.statLabel}>Years Earlier Than Quran</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>60+</div>
              <div style={styles.statLabel}>Academic Source Citations</div>
            </div>
          </div>
        </div>

        {/* TORAH SOURCES */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>TORAH / HEBREW BIBLE (6th-5th Century BCE)</span>
          <h2 style={styles.contentCardH2}>Stories from Jewish Scripture</h2>
          
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>1. Adam & Eve Creation</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:30-39</span>
              <span style={styles.verseRef}>7:11-25</span>
              <span style={styles.verseRef}>20:115-123</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 1:26-27, 2:7-25, 3:1-24</span>{' '}
              <span style={styles.sourceDate}>6th-5th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>God creates Adam from earth/clay, garden placement, temptation, expulsion</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>No serpent; no rib creation; Iblis refuses to bow; no original sin</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>2. Noah and the Flood</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:59-64</span>
              <span style={styles.verseRef}>11:25-49</span>
              <span style={styles.verseRef}>71:1-28</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 6-9; Epic of Gilgamesh Tablet XI</span>{' '}
              <span style={styles.sourceDate}>18th-13th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Righteous man warned of flood; builds ark; animals saved; global flood</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Son drowns (not in Bible); ark lands on Mt. Judi not Ararat; emphasis on preaching role</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>3. Joseph (Yusuf) - Complete Story</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>12:4-111</span>{' '}
              <span style={styles.detailValue}>(Entire Surah)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 37-50</span>{' '}
              <span style={styles.sourceDate}>10th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Brothers' jealousy; thrown in well; slavery; false accusation by master's wife; prison; dreams; rise to power</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Extensive dialogue added; Zulaikha more developed; shirt evidence; palace women cut hands scene</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>4. Moses - Complete Narrative</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:51-54</span>
              <span style={styles.verseRef}>7:103-137</span>
              <span style={styles.verseRef}>20:9-98</span>
              <span style={styles.verseRef}>28:7-43</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 2-14; Numbers 13-14, 19-20</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Baby in basket; burning bush; Pharaoh confrontation; plagues; Red Sea splitting; golden calf</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Fewer plagues; magicians convert immediately; Samiri blamed for golden calf; condensed narratives</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>5. Solomon & Queen of Sheba</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>27:15-44</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>1 Kings 10:1-13</span>{' '}
              <span style={styles.sourceDate}>10th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Foreign queen visits Solomon; tests wisdom; impressed by kingdom</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Hoopoe bird messenger; jinn helpers; throne transported; glass floor; she converts to monotheism</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>6. David Receives Psalms & Judgment Wisdom</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>4:163</span>
              <span style={styles.verseRef}>17:55</span>
              <span style={styles.verseRef}>38:17-26</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Book of Psalms; 2 Samuel 11-12</span>{' '}
              <span style={styles.sourceDate}>10th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>David receives divine revelation (Zabur/Psalms); wisdom in judgment; repentance narrative</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>7. Jonah Swallowed by Fish</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>37:139-148</span>
              <span style={styles.verseRef}>21:87-88</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Book of Jonah chapters 1-4</span>{' '}
              <span style={styles.sourceDate}>8th-5th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Prophet flees mission; thrown overboard; swallowed by large fish; prays inside; delivered; sent to city</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>No Nineveh mentioned by name; condensed narrative; emphasis on repentance formula</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>8. Lot & Sodom/Gomorrah Destruction</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:80-84</span>
              <span style={styles.verseRef}>11:77-83</span>
              <span style={styles.verseRef}>15:51-77</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 18-19</span>{' '}
              <span style={styles.sourceDate}>10th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Angels visit Lot; city destroyed for sexual immorality; Lot's wife looks back and turns to salt/stone</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Emphasis on homosexuality as primary sin; rain of stones; wife not explicitly named</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>9. Abraham Tested with Sacrificing Son</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>37:99-111</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 22:1-19 (Binding of Isaac)</span>{' '}
              <span style={styles.sourceDate}>10th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Father commanded to sacrifice son; obedience tested; angel stops him; ram substituted</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Son not named (Islamic tradition says Ishmael); son agrees willingly; different location</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>10. Job's Trials & Patience</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>21:83-84</span>
              <span style={styles.verseRef}>38:41-44</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Book of Job chapters 1-42</span>{' '}
              <span style={styles.sourceDate}>6th-4th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Righteous man tested with suffering; loses health and wealth; maintains faith; restored by God</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Much shorter version; no dialogues with friends; Satan role minimized</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>11. Aaron Makes Golden Calf</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:148-153</span>
              <span style={styles.verseRef}>20:83-98</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 32</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>While Moses on mountain; people worship golden calf; Moses returns angry; calf destroyed</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>"Samiri" character added (from Midrash); living calf that moos; Aaron less culpable</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>12. Pharaoh's Magicians Convert</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:103-126</span>
              <span style={styles.verseRef}>20:56-73</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 7-8 (Aaron's staff vs. magicians)</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Moses confronts Pharaoh; magicians perform miracles; Moses' staff overcomes them</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Magicians immediately convert and accept crucifixion (NOT in Torah)</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>13. Israelites Receive Manna & Quail</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:57</span>
              <span style={styles.verseRef}>7:160</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 16; Numbers 11</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>God provides manna (bread from heaven) and quail in wilderness</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>14. Moses Strikes Rock for Water</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:60</span>
              <span style={styles.verseRef}>7:160</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 17:1-7; Numbers 20:2-13</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>People thirsty in desert; Moses strikes rock with staff; water gushes out</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Quran mentions 12 springs for 12 tribes (from Midrash tradition)</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>15. Israelites Refuse to Enter Promised Land</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>5:20-26</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Numbers 13-14 (Twelve Spies)</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Moses commands entry to Holy Land; people fear giants; refuse and are punished to wander 40 years</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>16. Ten Commandments on Tablets</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:145</span>
              <span style={styles.verseRef}>7:154</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 20:1-17; 31:18; 34:1</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Moses receives divine law written on tablets at Mount Sinai; breaks them in anger</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>17. Saul (Talut) Chosen as King</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:247-251</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>1 Samuel 8-17 (Saul, David, Goliath)</span>{' '}
              <span style={styles.sourceDate}>10th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Israelites demand king; Saul chosen; army tested by river; David defeats Goliath</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>River test added (from Judges 7 - Gideon story); Ark of Covenant brings assurance</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>18. Elijah/Elisha Miracles</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>37:123-132</span>
              <span style={styles.verseRef}>6:85-86</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>1 Kings 17-19; 2 Kings 2-13</span>{' '}
              <span style={styles.sourceDate}>9th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Prophet Elijah confronts false prophets of Baal; performs miracles</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>19. Ezra Called "Son of God"</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>9:30</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Unclear - possibly confused tradition</span>{' '}
              <span style={styles.sourceDate}>Post-exilic period</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Claims Jews called Ezra "son of God" - NO Jewish source supports this; likely confusion or local Arabian Jewish sect</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>20. Zechariah & John the Baptist Birth</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:38-41</span>
              <span style={styles.verseRef}>19:2-15</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Luke 1:5-25 (Gospel)</span>{' '}
              <span style={styles.sourceDate}>1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Elderly Zechariah; barren wife; angel announces son; struck mute as sign; John born</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Differences:</span>{' '}
              <span style={styles.detailValue}>Name "Yahya" (John); mute for 3 days vs. until birth; prays in temple sanctuary</span>
            </div>
          </div>
        </div>

        {/* MIDRASH/JEWISH LEGENDS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>JEWISH MIDRASH & LEGENDS (2nd-8th Century CE)</span>
          <h2 style={styles.contentCardH2}>Stories from Post-Biblical Jewish Tradition</h2>
          
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>21. Abraham Destroys Idols</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>21:51-70</span>
              <span style={styles.verseRef}>6:74-83</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis Rabbah 38:13; Midrash tradition</span>{' '}
              <span style={styles.sourceDate}>3rd-5th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Abraham challenges idolatry; smashes idols; confronts father and community</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}><strong>NOT IN TORAH AT ALL</strong> - Pure Midrashic legend adopted into Quran; fire trial added</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>22. Abraham Thrown into Fire by Nimrod</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>21:68-70</span>
              <span style={styles.verseRef}>29:24</span>
              <span style={styles.verseRef}>37:97-98</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis Rabbah 38:13; Midrash Rabbah</span>{' '}
              <span style={styles.sourceDate}>3rd-5th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}><strong>NOT IN TORAH</strong> - Midrashic legend: Nimrod throws Abraham into furnace; fire becomes cool and safe</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>23. Cain & Abel - Raven Burial</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>5:27-32</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 4 + Pirke De-Rabbi Eliezer; Midrash Tanchuma</span>{' '}
              <span style={styles.sourceDate}>2nd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Raven shows how to bury body - detail FROM MIDRASH, NOT Torah itself</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>24. "Killing One Person = Killing All Humanity"</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>5:32</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Mishnah Sanhedrin 4:5; Talmud</span>{' '}
              <span style={styles.sourceDate}>2nd c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Famous verse is DIRECT QUOTE from Jewish Talmud - presented as if revealed to "Children of Israel"</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>25. Golden Calf & Samiri</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>20:83-98</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 32 + Pirke De-Rabbi Eliezer</span>{' '}
              <span style={styles.sourceDate}>2nd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>"Samiri" character and living calf sound from MIDRASH tradition, not Biblical account</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>26. Moses' Staff Turns to Serpent</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:107</span>
              <span style={styles.verseRef}>20:20</span>
              <span style={styles.verseRef}>27:10</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus 4:1-5; 7:8-13 + Midrashic expansions</span>{' '}
              <span style={styles.sourceDate}>Torah + 2nd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Biblical miracle with Midrashic embellishments - staff moves "as if a serpent"</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>27. Solomon Controls Jinn & Wind</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>21:81-82</span>
              <span style={styles.verseRef}>27:15-19</span>
              <span style={styles.verseRef}>34:12-13</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Testament of Solomon; Targum; rabbinic legends</span>{' '}
              <span style={styles.sourceDate}>1st-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>NOT Biblical - from Jewish magical/mystical traditions post-dating Torah by centuries</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>28. Solomon's Death - Jinn Don't Know</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>34:14</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Midrash tradition; Second Targum of Esther</span>{' '}
              <span style={styles.sourceDate}>2nd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Solomon dies standing on staff; termite eats it; body falls; jinn realize he's dead - pure Midrashic legend</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>29. Solomon Talks to Ants</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>27:18-19</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Targum Sheni; Jewish folklore</span>{' '}
              <span style={styles.sourceDate}>7th-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Solomon understands animal speech; ant warns colony - from Jewish folklore, NOT Torah</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>30. Sabbath-Breakers Turned to Apes</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:65</span>
              <span style={styles.verseRef}>7:163-166</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Talmudic interpretation of Sabbath violations</span>{' '}
              <span style={styles.sourceDate}>2nd-5th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Literal transformation into apes - Talmudic legend, not Torah narrative</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>31. Mount Sinai Held Over Israelites' Heads</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:63</span>
              <span style={styles.verseRef}>2:93</span>
              <span style={styles.verseRef}>7:171</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Talmud Shabbat 88a; Avodah Zarah 2b</span>{' '}
              <span style={styles.sourceDate}>3rd-5th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>God lifts mountain and threatens to drop it if they refuse Torah - pure Talmudic aggadah, NOT in Torah</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>32. Moses Challenges Angel of Death</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Implied in various hadith</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Midrash Petirat Moshe; Deuteronomy Rabbah</span>{' '}
              <span style={styles.sourceDate}>3rd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Moses boxes Angel of Death's ear - famous hadith based on Midrashic legend</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>33. Baby Moses Refuses Egyptian Wet Nurses</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>28:12</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Exodus Rabbah 1:25; Midrash tradition</span>{' '}
              <span style={styles.sourceDate}>3rd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Moses refuses non-Hebrew wet nurses; mother brought in - NOT in Torah, from Midrash</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>34. Pharaoh's Wife Believes (Asiya)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>66:11</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Midrash tradition; Exodus Rabbah</span>{' '}
              <span style={styles.sourceDate}>3rd-8th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Pharaoh's wife converts and is tortured - Midrashic legend, NOT Biblical</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>35. Haman Builds Tower for Pharaoh</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>28:38</span>
              <span style={styles.verseRef}>40:36-37</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Confused with Book of Esther (Persian Haman) + Tower of Babel</span>{' '}
              <span style={styles.sourceDate}>Various periods</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>MAJOR ERROR - Haman is in Persian period (5th c. BCE), not Egyptian Moses period (13th c. BCE) - 800+ year gap!</span>
            </div>
          </div>
        </div>

        {/* CHRISTIAN SOURCES */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>CHRISTIAN GOSPELS & APOCRYPHA (1st-6th Century CE)</span>
          <h2 style={styles.contentCardH2}>Stories from Christian Sources</h2>
          
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>36. Mary's Birth & Childhood in Temple</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:35-37</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Protoevangelium of James chapters 1-8</span>{' '}
              <span style={styles.sourceDate}>~150 CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>NOT in canonical Gospels - from APOCRYPHAL text; Mary raised in temple, Zechariah as guardian, miraculous food provision</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>12. Jesus Speaks from Cradle as Infant</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:46</span>
              <span style={styles.verseRef}>19:29-33</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Arabic Infancy Gospel ch.1; Syriac Infancy Gospel</span>{' '}
              <span style={styles.sourceDate}>5th-6th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>NOT in canonical Gospels - from APOCRYPHAL infancy narratives</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>13. Jesus Creates Bird from Clay</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:49</span>
              <span style={styles.verseRef}>5:110</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Infancy Gospel of Thomas chapter 2</span>{' '}
              <span style={styles.sourceDate}>2nd c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>NOT in canonical Gospels - from APOCRYPHAL childhood stories rejected by mainstream Christianity</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>14. Mary Gives Birth Under Palm Tree</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>19:22-26</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Gospel of Pseudo-Matthew chapter 20</span>{' '}
              <span style={styles.sourceDate}>8th-9th c. CE or earlier oral</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Palm tree shakes dates; stream flows - from APOCRYPHAL tradition, NOT canonical Gospels</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>40. Jesus NOT Crucified - Substitution Theory</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>4:157-158</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Gnostic texts (Second Treatise of the Great Seth; Gospel of Basilides)</span>{' '}
              <span style={styles.sourceDate}>2nd-3rd c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Docetic Gnostic heresy rejected by mainstream Christianity - "made to appear so"; someone else crucified instead</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>41. Jesus Heals Blind & Lepers</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:49</span>
              <span style={styles.verseRef}>5:110</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>All four Gospels (Matthew, Mark, Luke, John)</span>{' '}
              <span style={styles.sourceDate}>1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Jesus performs healing miracles by God's permission</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>42. Jesus Raises the Dead</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:49</span>
              <span style={styles.verseRef}>5:110</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Gospels (Lazarus: John 11; widow's son: Luke 7; Jairus' daughter: Mark 5)</span>{' '}
              <span style={styles.sourceDate}>1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Jesus brings dead back to life by God's power</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>43. Table Spread from Heaven</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>5:112-115</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Christian Last Supper tradition + Feeding miracles</span>{' '}
              <span style={styles.sourceDate}>1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Disciples ask Jesus for miraculous feast from heaven - combines Last Supper with feeding of 5,000</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>44. Trinity Misunderstood as Father-Mary-Jesus</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>5:116</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Misunderstanding of Christian Trinity or Collyridian heresy</span>{' '}
              <span style={styles.sourceDate}>4th-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Quran asks if Jesus said "take me and my mother as deities" - NO Christian denomination teaches this; possible confusion with Collyridian sect</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>45. Virgin Birth of Jesus</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:45-47</span>
              <span style={styles.verseRef}>19:16-21</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Matthew 1:18-25; Luke 1:26-38</span>{' '}
              <span style={styles.sourceDate}>1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Angel announces; Mary virgin; miraculous conception by God's word</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>46. Jesus' Disciples as "Helpers"</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>3:52</span>
              <span style={styles.verseRef}>61:14</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>New Testament (Hawariyyun = disciples/apostles)</span>{' '}
              <span style={styles.sourceDate}>1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Jesus has faithful followers who support his mission</span>
            </div>
          </div>
        </div>

        {/* CHRISTIAN LEGENDS */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>CHRISTIAN LEGENDS (5th-6th Century CE)</span>
          <h2 style={styles.contentCardH2}>Stories from Later Christian Folklore</h2>
          
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>47. People of the Cave (Seven Sleepers)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>18:9-26</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Christian legend of Seven Sleepers of Ephesus (Syriac sources; Gregory of Tours)</span>{' '}
              <span style={styles.sourceDate}>5th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Young believers flee persecution; sleep centuries in cave; wake to prove resurrection - 5th century Christian legend adopted wholesale</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>48. Dhul-Qarnayn (Alexander Romance)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>18:83-98</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Syriac Alexander Legend (Syriac Christian version)</span>{' '}
              <span style={styles.sourceDate}>6th-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Alexander the Great reimagined as monotheist; travels to ends of earth; builds wall against Gog & Magog - from romanticized Christian legend, NOT history</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>49. Gog & Magog Apocalypse</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>18:94</span>
              <span style={styles.verseRef}>21:96</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Ezekiel 38-39; Revelation 20:7-10; Syriac Alexander Legend</span>{' '}
              <span style={styles.sourceDate}>6th c. BCE to 7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Apocalyptic nations trapped behind barrier; will break free at end times</span>
            </div>
          </div>
        </div>

        {/* ARABIAN SOURCES */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>PRE-ISLAMIC ARABIAN TRADITION</span>
          <h2 style={styles.contentCardH2}>Stories from Arabian Folklore</h2>
          
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>50. Hud sent to 'Ad People</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:65-72</span>
              <span style={styles.verseRef}>11:50-60</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian tribal legends (oral tradition)</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Local Arabian legend about ancient tribe; destroyed by wind; archaeological ruins referenced</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>19. Salih sent to Thamud People</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:73-79</span>
              <span style={styles.verseRef}>11:61-68</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian tradition; rock-cut tombs at Madain Salih</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Local Arabian legend; miraculous she-camel; tribe carves houses in rocks; destroyed by earthquake</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>20. Kaaba Built by Abraham & Ishmael</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:125-127</span>
              <span style={styles.verseRef}>3:96-97</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian tradition linking Kaaba to Abraham</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>NOT in Torah - local Arabian tradition connecting Biblical figure to Meccan sanctuary; retrofitted into Islamic narrative</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>53. Hajj Pilgrimage Rituals</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:196-203</span>
              <span style={styles.verseRef}>22:26-37</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Meccan pilgrimage customs</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Pagan Arabian pilgrimage rituals reframed as Abrahamic; circumambulation, Sa'i, stone-throwing continued from pre-Islamic practice</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>54. Black Stone (Hajar al-Aswad)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Referenced indirectly; explicit in hadith</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian sacred stone worship</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Kissing/touching black stone - pagan practice incorporated; Muhammad himself said "it can neither benefit nor harm"</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>55. Safa & Marwa Running (Sa'i)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:158</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic ritual between two hills; idols Isaf & Naila</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Pagan ritual retroactively attributed to Hagar searching for water - rebranded pre-Islamic practice</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>56. Zamzam Well Legend</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Not explicitly mentioned; in tradition</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian tradition + Genesis 21:14-19 (Hagar & Ishmael)</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Biblical Hagar story relocated to Mecca; sacred well incorporated into Islamic narrative</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>57. Luqman the Wise</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>31:12-19</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian folklore; possibly Aesop's Fables influence</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Wise man from Arabian legends given Islamic moral teachings; fable tradition</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>58. Shu'ayb sent to Midian/Madyan</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:85-93</span>
              <span style={styles.verseRef}>11:84-95</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Possibly Jethro from Exodus 18 + Arabian legend</span>{' '}
              <span style={styles.sourceDate}>Mixed origins</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Prophet to Midianites; warns against dishonest business; destroyed by earthquake</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>59. Arabian Month Names</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>9:36</span>
              <span style={styles.detailValue}>(12 months system)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian calendar system</span>{' '}
              <span style={styles.sourceDate}>Pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Sacred months concept from pagan Arabia; intercalation banned but month count retained</span>
            </div>
          </div>
        </div>

        {/* ZOROASTRIAN & OTHER */}
        <div style={styles.contentCard}>
          <span style={styles.categoryTag}>ZOROASTRIAN & OTHER SOURCES</span>
          <h2 style={styles.contentCardH2}>Stories from Persian & Other Traditions</h2>
          
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>60. Eschatology: Heaven, Hell, Judgment Day</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Multiple surahs (esp. 75, 81, 82, 99, 101)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Jewish apocalyptic (Daniel 12); Christian (Revelation); Zoroastrian eschatology</span>{' '}
              <span style={styles.sourceDate}>Ancient Iran to 1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Resurrection, judgment, heaven/hell, bridge (sirat), weighing deeds - synthesized from Zoroastrian, Jewish, and Christian eschatology</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>61. Sirat Bridge Over Hell</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>19:71</span>
              <span style={styles.verseRef}>36:66</span>
              <span style={styles.detailValue}>(Explicit in hadith)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Zoroastrian Chinvat Bridge</span>{' '}
              <span style={styles.sourceDate}>Ancient Iran 1500-1000 BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Bridge over hell; righteous pass, sinners fall - directly borrowed from Zoroastrian eschatology</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>62. Weighing of Deeds (Mizan)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>7:8-9</span>
              <span style={styles.verseRef}>21:47</span>
              <span style={styles.verseRef}>23:102-103</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Egyptian Book of the Dead (weighing heart); Zoroastrian judgment</span>{' '}
              <span style={styles.sourceDate}>Ancient Egypt + Persia</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Scales weighing good vs. evil deeds - ancient Near Eastern concept, not unique to Islam</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>63. Jinn (Invisible Spirit Beings)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>72:1-28</span>{' '}
              <span style={styles.detailValue}>(Plus multiple surahs)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Pre-Islamic Arabian belief + ancient Near Eastern spirits</span>{' '}
              <span style={styles.sourceDate}>Ancient to pre-7th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Invisible beings from smokeless fire; Arabian folklore integrated into Islamic theology</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>64. Iblis/Satan Refuses to Bow to Adam</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:34</span>
              <span style={styles.verseRef}>7:11-18</span>
              <span style={styles.verseRef}>38:71-85</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Life of Adam and Eve (Vita Adae); Christian/Jewish apocrypha</span>{' '}
              <span style={styles.sourceDate}>1st-5th c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Devil refuses to prostrate to Adam; cast out - NOT in Torah, from apocryphal texts</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>65. Houris (Virgins of Paradise)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>44:54</span>
              <span style={styles.verseRef}>52:20</span>
              <span style={styles.verseRef}>56:22-23</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Possibly Zoroastrian "pairikas" (celestial beauties); Persian influence</span>{' '}
              <span style={styles.sourceDate}>Ancient Persia</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Beautiful maidens in paradise - concept may derive from Zoroastrian/Persian traditions</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>66. Seven Heavens Concept</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:29</span>
              <span style={styles.verseRef}>23:86</span>
              <span style={styles.verseRef}>67:3</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Ancient Mesopotamian cosmology; Jewish 2nd Temple period texts</span>{' '}
              <span style={styles.sourceDate}>Ancient to 2nd c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Seven-layered heaven - ancient Near Eastern cosmological concept predating Islam by millennia</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>67. Night Journey (Isra & Mi'raj)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>17:1</span>
              <span style={styles.detailValue}>(Detailed in hadith & sira)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Zoroastrian Arda Viraf; Jewish Enoch's ascension; Christian apocalypses</span>{' '}
              <span style={styles.sourceDate}>Ancient traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Key Point:</span>{' '}
              <span style={styles.detailValue}>Ascension through heavens meeting prophets - parallels multiple ascension narratives from earlier religions</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>68. Angels Created from Light</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Explicit in hadith; implied in Quran</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Jewish and Christian angelology</span>{' '}
              <span style={styles.sourceDate}>1st Temple period onwards</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Heavenly beings of light who serve God and deliver messages</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>69. Angel of Death (Azrael)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>32:11</span>
              <span style={styles.detailValue}>(Named in tradition)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Jewish tradition (Malakh ha-Mavet); Christian traditions</span>{' '}
              <span style={styles.sourceDate}>Post-Biblical</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Specific angel assigned to take souls at death</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>70. Gabriel & Michael as Chief Angels</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:97-98</span>
              <span style={styles.verseRef}>66:4</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Jewish and Christian angelology (Gabriel: Daniel 8-9, Luke 1; Michael: Daniel 10, Revelation 12)</span>{' '}
              <span style={styles.sourceDate}>6th c. BCE to 1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Same two archangels with similar roles - messenger and warrior</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>71. Recording Angels (Kiraman Katibin)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>82:10-12</span>
              <span style={styles.verseRef}>50:17-18</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Jewish tradition; possibly Zoroastrian record-keeping in afterlife</span>{' '}
              <span style={styles.sourceDate}>Ancient traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Angels record all human actions for judgment day</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>72. Prophets Sent to Every Nation</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>10:47</span>
              <span style={styles.verseRef}>16:36</span>
              <span style={styles.verseRef}>35:24</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Jewish concept; Noahide laws for all nations</span>{' '}
              <span style={styles.sourceDate}>Rabbinic period</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>God sends messengers to all peoples throughout history</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>73. Fasting for Spiritual Purification</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:183-185</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Jewish Yom Kippur & other fasts; Christian Lent; Zoroastrian practices</span>{' '}
              <span style={styles.sourceDate}>Ancient traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Month-long fasting prescribed "as it was prescribed for those before you"</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>74. Charity/Almsgiving as Religious Duty</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:43</span>
              <span style={styles.verseRef}>9:60</span>
              <span style={styles.detailValue}>(Zakat system)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Jewish tzedakah; Christian tithing; ancient Near Eastern temple taxes</span>{' '}
              <span style={styles.sourceDate}>Ancient traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Mandatory giving to poor as religious obligation</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>75. Ritual Prayer Postures (Prostration)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:43</span>
              <span style={styles.verseRef}>3:43</span>
              <span style={styles.verseRef}>22:77</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Jewish prayer postures; Christian prostration; Zoroastrian prayers; ancient Near Eastern worship</span>{' '}
              <span style={styles.sourceDate}>Ancient traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Bowing and prostrating in prayer - universal ancient practice, not unique revelation</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>76. Dietary Laws (Halal/Haram)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>2:173</span>
              <span style={styles.verseRef}>5:3</span>
              <span style={styles.verseRef}>6:145</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Jewish kashrut laws (Leviticus 11; Deuteronomy 14)</span>{' '}
              <span style={styles.sourceDate}>13th-6th c. BCE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Prohibition of pork, blood, carrion, improperly slaughtered animals - simplified version of Jewish dietary law</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>77. Circumcision Practice</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Not explicitly mentioned; established in hadith</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Genesis 17:10-14 (Abrahamic covenant); ancient practice</span>{' '}
              <span style={styles.sourceDate}>Ancient Near East</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Male circumcision as covenant sign - adopted from Jewish practice attributed to Abraham</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>78. Paradise Garden (Jannah)</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Multiple surahs (esp. 47:15, 55:46-78, 56:10-40)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Garden of Eden (Genesis 2); Persian paradaeza gardens; Jewish Gan Eden</span>{' '}
              <span style={styles.sourceDate}>Ancient traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Paradise as garden with rivers, trees, eternal bliss - synthesized from Jewish and Persian concepts</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>79. Book/Scrolls Given to Every Person</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.verseRef}>17:13-14</span>
              <span style={styles.verseRef}>69:19-25</span>
              <span style={styles.verseRef}>84:7-12</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Source:</span>{' '}
              <span style={styles.detailValue}>Egyptian Book of the Dead; Jewish tradition of books in heaven</span>{' '}
              <span style={styles.sourceDate}>Ancient Egypt + Judaism</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Record of deeds given right hand (saved) or left hand (damned) - ancient concept</span>
            </div>
          </div>

          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>80. End Times Signs & Apocalypse</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Quran:</span>{' '}
              <span style={styles.detailValue}>Multiple surahs (esp. 75, 81, 82, 99, 101)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Sources:</span>{' '}
              <span style={styles.detailValue}>Jewish apocalyptic (Daniel, Ezekiel); Christian Revelation; Zoroastrian Frashokereti</span>{' '}
              <span style={styles.sourceDate}>6th c. BCE to 1st c. CE</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Similarity:</span>{' '}
              <span style={styles.detailValue}>Cosmic signs, earthquakes, sky splitting, sun darkening, resurrection - synthesized apocalyptic imagery from multiple traditions</span>
            </div>
          </div>
        </div>

        {/* CONCLUSION */}
        <div style={styles.contentCard}>
          <h2 style={styles.contentCardH2}>📋 Conclusion: Evidence of Human Authorship</h2>
          <div style={styles.researchItem}>
            <h3 style={styles.researchItemH3}>What This Documentation Proves:</h3>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>1. Extensive Borrowing:</span>{' '}
              <span style={styles.detailValue}>80 documented parallels show clear dependence on earlier sources across all major categories</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>2. Chronological Impossibility:</span>{' '}
              <span style={styles.detailValue}>Quran borrows from sources 100-1,300 years OLDER (Midrash: 2nd-8th c. CE; Christian apocrypha: 2nd-6th c. CE)</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>3. Preference for Non-Canonical Sources:</span>{' '}
              <span style={styles.detailValue}>Frequently adopts APOCRYPHAL and LEGENDARY material rejected by Judaism and Christianity</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>4. Regional Context:</span>{' '}
              <span style={styles.detailValue}>Reflects 7th century Arabian knowledge of Jewish, Christian, and local traditions</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>5. Human Authorship:</span>{' '}
              <span style={styles.detailValue}>Pattern demonstrates Muhammad compiled existing stories, NOT divine revelation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
