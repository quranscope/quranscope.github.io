import Head from 'next/head'

export default function ScientificErrors({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">Loading...</div>
  }

  const styles = {
    container: { maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' },
    intro: { background: '#fff3cd', borderLeft: '5px solid #ffc107', padding: '1.5rem', marginBottom: '2rem', borderRadius: '5px' },
    introH3: { color: '#856404', marginBottom: '0.5rem' },
    introP: { color: '#856404', margin: 0 },
    errorCard: { background: 'white', borderRadius: '8px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    errorCardH2: { color: '#c0392b', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #e74c3c' },
    categoryTag: { display: 'inline-block', background: '#e74c3c', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '1rem' },
    verseBox: { background: '#f8f9fa', borderLeft: '4px solid #e74c3c', padding: '1rem', margin: '1rem 0', fontStyle: 'italic' },
    verseRef: { color: '#c0392b', fontWeight: 'bold', marginTop: '0.5rem', display: 'block' },
    scientificFact: { background: '#d4edda', borderLeft: '4px solid #28a745', padding: '1rem', margin: '1rem 0' },
    factH4: { color: '#155724', marginBottom: '0.5rem' },
    problem: { background: '#f8d7da', borderLeft: '4px solid #dc3545', padding: '1rem', margin: '1rem 0' },
    problemH4: { color: '#721c24', marginBottom: '0.5rem' },
    backLink: { display: 'inline-block', color: '#667eea', textDecoration: 'none', marginBottom: '1rem', fontSize: '1rem', fontWeight: '500' }
  }

  return (
    <>
      <Head>
                <title>{t.pageTitle} - Quran Scope</title>
        <meta name="description" content={t.pageSubtitle} />
        <link rel="canonical" href="https://quranscope.github.io/scientific-errors" />
        <meta property="og:title" content={t.pageTitle} />
      </Head>

      <div style={styles.container}>
        <a href="/" style={styles.backLink}>← Back to Home</a>
        
        <div style={styles.intro}>
          <h3 style={styles.introH3}>⚠️ Important Note</h3>
          <p style={styles.introP}>This page documents scientific claims made in the Quran that contradict established scientific knowledge. All claims are evaluated against modern scientific understanding and peer-reviewed research.</p>
        </div>

        {/* FLAT EARTH */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>COSMOLOGY</span>
          <h2 style={styles.errorCardH2}>1. Flat Earth Cosmology</h2>
          
          <div style={styles.verseBox}>
            "And the earth - We have spread it out and cast therein firmly set mountains and made to grow therein something of every well-balanced thing."
            <span style={styles.verseRef}>Quran 15:19</span>
          </div>

          <div style={styles.verseBox}>
            "And at the earth - how it is spread out?"
            <span style={styles.verseRef}>Quran 88:20</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>The Earth is an oblate spheroid with a circumference of approximately 40,075 km at the equator. This has been proven through satellite imagery, circumnavigation, ships disappearing hull-first over the horizon, different star constellations from different latitudes, time zones, and the curved shadow during lunar eclipses.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran repeatedly uses words like "spread out" (مَدَّ madda), "carpet" (بِسَاطًا bisatan), "bed" (فِرَاشًا firashen) - all implying a flat surface. The Arabic root words historically meant flat spreading, not spherical expansion.</p>
          </div>
        </div>

        {/* SUN SETS IN MUDDY SPRING */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>ASTRONOMY</span>
          <h2 style={styles.errorCardH2}>2. Sun Sets in a Muddy Spring</h2>
          
          <div style={styles.verseBox}>
            "Until, when he reached the setting of the sun, he found it setting in a spring of dark mud, and he found near it a people."
            <span style={styles.verseRef}>Quran 18:86</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>The Sun does not set into any body of water or mud. The Sun is approximately 150 million kilometers from Earth. "Sunset" is an optical phenomenon caused by Earth's rotation, not the Sun physically descending.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The verse describes Dhul-Qarnayn finding the actual setting place of the sun in a muddy spring. Classical tafsir interpreted this literally. The text presents it as a physical location.</p>
          </div>
        </div>

        {/* Continue with remaining errors... */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>ASTRONOMY</span>
          <h2 style={styles.errorCardH2}>3. The Moon Was Split in Two</h2>
          
          <div style={styles.verseBox}>
            "The Hour has come near, and the moon has split [in two]."
            <span style={styles.verseRef}>Quran 54:1</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>There is zero geological or astronomical evidence that the Moon was ever split. Such an event would have been visible globally, recorded by Chinese, Roman, Indian, and Mayan astronomers, left massive geological evidence, and caused catastrophic tidal disruptions. No civilization outside Arabia recorded this.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>Hadith traditions claim Muhammad physically split the moon as a miracle. Modern science shows this never occurred. No crater pattern, no geological disruption, no global records.</p>
          </div>
        </div>

        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>ASTRONOMY</span>
          <h2 style={styles.errorCardH2}>4. Stars Are Missiles Against Demons</h2>
          
          <div style={styles.verseBox}>
            "And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils and have prepared for them the punishment of the Blaze."
            <span style={styles.verseRef}>Quran 67:5</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Stars are massive balls of plasma undergoing nuclear fusion, located light-years away. Shooting stars (meteors) are small rocks burning up in Earth's atmosphere, not stars being thrown. Stars do not move to hit anything.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran confuses meteors with stars. It presents pre-scientific Arabian mythology that shooting stars are missiles thrown by angels to drive away demons (jinn) trying to eavesdrop on heaven.</p>
          </div>
        </div>

        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>BIOLOGY</span>
          <h2 style={styles.errorCardH2}>5. Semen Comes from Between Backbone and Ribs</h2>
          
          <div style={styles.verseBox}>
            "So let man observe from what he was created. He was created from a fluid, ejected, emerging from between the backbone and the ribs."
            <span style={styles.verseRef}>Quran 86:5-7</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Semen is produced in the testicles (located in the scrotum), not between the backbone and ribs. The testicles produce sperm; the prostate, seminal vesicles contribute fluids. None of these organs are between the spine and chest cavity.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>This reflects ancient Greek medical errors. The verse is anatomically false. Apologists claim "backbone" means the entire spine or refers to the male's back area - neither fixes the anatomical error.</p>
          </div>
        </div>

        {/* SIX. SUN ORBITS EARTH */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>ASTRONOMY</span>
          <h2 style={styles.errorCardH2}>6. Sun and Moon Orbit Around Earth</h2>
          
          <div style={styles.verseBox}>
            "And it is He who created the night and the day and the sun and the moon; all [heavenly bodies] in an orbit are swimming."
            <span style={styles.verseRef}>Quran 21:33</span>
          </div>

          <div style={styles.verseBox}>
            "And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing."
            <span style={styles.verseRef}>Quran 36:38</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>The Sun does not orbit Earth. Earth orbits the Sun (heliocentric model). The Sun does move through the galaxy, but the Quranic verses describe the Sun's motion in relation to Earth's day/night cycle, implying geocentrism. Day and night are caused by Earth's rotation, not the Sun's movement around Earth.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran presents a geocentric view where the Sun travels across the sky and has a resting place. This reflects 7th-century Arabian understanding, not cosmic reality. The Sun doesn't "run" in the sense of causing day/night - Earth rotates.</p>
          </div>
        </div>

        {/* SEVEN. MOUNTAINS AS PEGS */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>GEOLOGY</span>
          <h2 style={styles.errorCardH2}>7. Mountains as Stakes to Prevent Earthquake</h2>
          
          <div style={styles.verseBox}>
            "Have We not made the earth a resting place? And the mountains as stakes?"
            <span style={styles.verseRef}>Quran 78:6-7</span>
          </div>

          <div style={styles.verseBox}>
            "And He has cast into the earth firmly set mountains, lest it shift with you."
            <span style={styles.verseRef}>Quran 16:15</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Mountains are formed by tectonic plate collisions and do not prevent earthquakes - they are often located ON fault lines where earthquakes occur most. Mountains are the result of seismic activity, not stabilizers against it. The most earthquake-prone regions (Himalayas, Andes, Rockies) are mountainous.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran claims mountains were placed like tent pegs to stabilize Earth. This is false. Mountains don't prevent shaking; plate tectonics cause both mountains and earthquakes. The "peg" analogy reflects ancient Near Eastern cosmology, not geology.</p>
          </div>
        </div>

        {/* EIGHT. EMBRYOLOGY */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>BIOLOGY / EMBRYOLOGY</span>
          <h2 style={styles.errorCardH2}>8. Incorrect Embryological Development</h2>
          
          <div style={styles.verseBox}>
            "We created man from an extract of clay. Then We made him as a drop in a place of settlement, firmly fixed. Then We made the drop into an alaqah (leech, clot, clinging thing), then We made the alaqah into a mudghah (chewed substance)... Then We made out of that lump bones and clothed the bones with flesh."
            <span style={styles.verseRef}>Quran 23:12-14</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Modern embryology shows continuous development, not distinct stages. The terms used (clot, chewed lump) don't accurately describe embryonic development. There's no "clot" stage - blood cells and circulatory system develop gradually. Bones and flesh develop simultaneously from mesoderm, not sequentially as claimed.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quranic description matches Galen's (2nd century CE) flawed Greek embryology, which was known in 7th-century Arabia. It incorrectly states bones form before flesh, when in reality they develop together. "Alaqah" (clot/leech) is inaccurate; embryos never resemble leeches or clots.</p>
          </div>
        </div>

        {/* NINE. SEVEN HEAVENS */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>COSMOLOGY</span>
          <h2 style={styles.errorCardH2}>9. Seven Stacked Physical Heavens</h2>
          
          <div style={styles.verseBox}>
            "It is Allah who has created seven heavens and of the earth, the like of them."
            <span style={styles.verseRef}>Quran 65:12</span>
          </div>

          <div style={styles.verseBox}>
            "Then He completed them as seven heavens within two days and inspired in each heaven its command."
            <span style={styles.verseRef}>Quran 41:12</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>There are no seven physical layers or "heavens" above Earth. The atmosphere has multiple layers (troposphere, stratosphere, etc.), but not seven distinct "heavens." The universe is one continuous space governed by physics, not stacked divine layers. The cosmos extends billions of light-years, not in layers, but in all directions.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The seven-heavens model comes from ancient Mesopotamian and Greek cosmology (Ptolemaic system) where each heaven was a sphere carrying a celestial body. This is outdated, geocentric, pre-scientific cosmology, not divine revelation.</p>
          </div>
        </div>

        {/* TEN. SKY AS CEILING */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>COSMOLOGY</span>
          <h2 style={styles.errorCardH2}>10. Sky as a Physical Ceiling/Roof</h2>
          
          <div style={styles.verseBox}>
            "And We made the sky a protected ceiling, but they, from its signs, are turning away."
            <span style={styles.verseRef}>Quran 21:32</span>
          </div>

          <div style={styles.verseBox}>
            "Allah is He Who raised the heavens without any pillars that you can see."
            <span style={styles.verseRef}>Quran 13:2</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>There is no physical "ceiling" or "roof" above Earth. Space is a vacuum extending infinitely. The atmosphere is a thin layer of gases held by gravity, not a solid structure. The "ceiling" concept reflects ancient cosmology where the sky was imagined as a solid dome (firmament) over a flat Earth.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran describes the sky as a "ceiling" or "canopy" that could potentially fall or needs to be held up. This is the ancient conception of a solid sky-dome, not modern cosmology. Space has no ceiling, roof, or protective barrier.</p>
          </div>
        </div>

        {/* ELEVEN. SALT WATER */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>HYDROLOGY</span>
          <h2 style={styles.errorCardH2}>11. Unmixable Salt and Fresh Water</h2>
          
          <div style={styles.verseBox}>
            "And it is He who has released [simultaneously] the two seas, one fresh and sweet and one salty and bitter, and He placed between them a barrier and prohibiting partition."
            <span style={styles.verseRef}>Quran 25:53</span>
          </div>

          <div style={styles.verseBox}>
            "He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses."
            <span style={styles.verseRef}>Quran 55:19-20</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Salt water and fresh water DO mix. At river mouths (estuaries), there is a gradual mixing zone called a halocline where salinity gradually changes. There is no invisible barrier preventing mixing - it's a natural gradient caused by density differences, and mixing absolutely occurs through diffusion and turbulence.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran claims an unmixable barrier exists. This is false. Estuaries have brackish water (mixed). The visible line at river-sea meeting points is temporary and due to sediment/density, not a divine barrier. Water molecules freely cross and mix.</p>
          </div>
        </div>

        {/* TWELVE. HUMAN FROM CLAY */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>BIOLOGY / ANTHROPOLOGY</span>
          <h2 style={styles.errorCardH2}>12. Humans Created from Clay/Mud</h2>
          
          <div style={styles.verseBox}>
            "And certainly did We create man from an extract of clay."
            <span style={styles.verseRef}>Quran 23:12</span>
          </div>

          <div style={styles.verseBox}>
            "He created man from clay like [that of] pottery."
            <span style={styles.verseRef}>Quran 55:14</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Humans evolved over millions of years from earlier primate ancestors through natural selection. Homo sapiens emerged approximately 300,000 years ago in Africa. Genetic, fossil, and anatomical evidence overwhelmingly support evolution. Humans were never created from clay, mud, or pottery.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The clay/mud creation story is borrowed from Mesopotamian mythology (Epic of Gilgamesh, Atrahasis). It contradicts evolutionary biology, genetics, and paleontology. No transition from clay to living organism has ever occurred or been observed.</p>
          </div>
        </div>

        {/* THIRTEEN. ALL CREATURES IN PAIRS */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>BIOLOGY</span>
          <h2 style={styles.errorCardH2}>13. All Creatures Created in Pairs</h2>
          
          <div style={styles.verseBox}>
            "And of everything We have created pairs, that perhaps you may remember."
            <span style={styles.verseRef}>Quran 51:49</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Many organisms reproduce asexually without male/female pairs: bacteria, many plants, fungi, some reptiles (parthenogenesis), amoebas, hydras, and many more. Not all life comes in pairs. Asexual reproduction is extremely common in nature.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The verse claims everything is created in pairs, which is biologically false. Millions of species reproduce without sexual pairing. Apologists reinterpret "pairs" to mean matter/antimatter or positive/negative, which is not what the verse or classical tafsir says.</p>
          </div>
        </div>

        {/* FOURTEEN. ANTS TALKING */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>BIOLOGY / ZOOLOGY</span>
          <h2 style={styles.errorCardH2}>14. Ants Talk in Human Language</h2>
          
          <div style={styles.verseBox}>
            "Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'"
            <span style={styles.verseRef}>Quran 27:18</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>Ants communicate through pheromones (chemical signals), not spoken language. They cannot form complex sentences or understand human speech. They don't have vocal cords, language processing, or the cognitive ability for grammatical speech.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The Quran presents a literal talking ant giving warning in structured language. This is a fairy tale, not biology. Apologists claim it's metaphorical, but the text and tafsir treat it as literal speech that Solomon understood.</p>
          </div>
        </div>

        {/* FIFTEEN. NOAH'S FLOOD */}
        <div style={styles.errorCard}>
          <span style={styles.categoryTag}>GEOLOGY / HYDROLOGY</span>
          <h2 style={styles.errorCardH2}>15. Global Flood Covering All Earth</h2>
          
          <div style={styles.verseBox}>
            "So We opened the gates of the heaven with rain pouring down, And caused the earth to burst with springs, and the waters met for a matter already predestined."
            <span style={styles.verseRef}>Quran 54:11-12</span>
          </div>

          <div style={styles.scientificFact}>
            <h4 style={styles.factH4}>✓ Scientific Reality:</h4>
            <p>There is zero geological evidence for a global flood covering all mountains. Ice cores, tree rings, coral reefs, and sediment layers show continuous uninterrupted records going back tens of thousands of years. A global flood would leave unmistakable global geological signatures - none exist.</p>
          </div>

          <div style={styles.problem}>
            <h4 style={styles.problemH4}>✗ The Problem:</h4>
            <p>The flood story is copied from earlier Mesopotamian myths (Epic of Gilgamesh). It's geologically impossible - not enough water exists on Earth to cover all mountains. Two of every species couldn't fit on a wooden boat, and genetic bottlenecks would be detectable. It never happened.</p>
          </div>
        </div>
      </div>
    </>
  )
}
