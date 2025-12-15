import Head from 'next/head';
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  VerseBox,
  HighlightBox,
  PageHeader
} from '../components/ui';
import { PAGES } from '../config/pages';

export default function ScientificErrors({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg text-gray-600">Loading...</div>
    </div>;
  }

  return (
    <>
      <Head>
        <title>{t.pageTitle} - Quran Scope</title>
        <meta name="description" content={t.pageSubtitle} />
        <link rel="canonical" href="https://quranscope.github.io/scientific-errors" />
        <meta property="og:title" content={t.pageTitle} />
      </Head>

      <PageHeader 
        title={t.pageTitle} 
        subtitle={t.pageSubtitle}
        gradient={PAGES.scientific.backgroundColor}
      />

      <Container>
        <BackLink />
        
        <IntroBox title="⚠️ Important Note">
          <p>This page documents scientific claims made in the Quran that contradict established scientific knowledge. All claims are evaluated against modern scientific understanding and peer-reviewed research.</p>
        </IntroBox>

        {/* FLAT EARTH */}
        <ContentCard>
          <CategoryTag color="red">COSMOLOGY</CategoryTag>
          <SectionTitle color="red">1. Flat Earth Cosmology</SectionTitle>
          
          <VerseBox 
            text="And the earth - We have spread it out and cast therein firmly set mountains and made to grow therein something of every well-balanced thing."
            reference="Quran 15:19"
          />

          <VerseBox 
            text="And at the earth - how it is spread out?"
            reference="Quran 88:20"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>The Earth is an oblate spheroid with a circumference of approximately 40,075 km at the equator. This has been proven through satellite imagery, circumnavigation, ships disappearing hull-first over the horizon, different star constellations from different latitudes, time zones, and the curved shadow during lunar eclipses.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran repeatedly uses words like "spread out" (مَدَّ madda), "carpet" (بِسَاطًا bisatan), "bed" (فِرَاشًا firashen) - all implying a flat surface. The Arabic root words historically meant flat spreading, not spherical expansion.</p>
          </HighlightBox>
        </ContentCard>

        {/* SUN SETS IN MUDDY SPRING */}
        <ContentCard>
          <CategoryTag color="red">ASTRONOMY</CategoryTag>
          <SectionTitle color="red">2. Sun Sets in a Muddy Spring</SectionTitle>
          
          <VerseBox 
            text="Until, when he reached the setting of the sun, he found it setting in a spring of dark mud, and he found near it a people."
            reference="Quran 18:86"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>The Sun does not set into any body of water or mud. The Sun is approximately 150 million kilometers from Earth. "Sunset" is an optical phenomenon caused by Earth's rotation, not the Sun physically descending.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The verse describes Dhul-Qarnayn finding the actual setting place of the sun in a muddy spring. Classical tafsir interpreted this literally. The text presents it as a physical location.</p>
          </HighlightBox>
        </ContentCard>

        {/* Continue with remaining errors... */}
        <ContentCard>
          <CategoryTag color="red">ASTRONOMY</CategoryTag>
          <SectionTitle color="red">3. The Moon Was Split in Two</SectionTitle>
          
          <VerseBox 
            text="The Hour has come near, and the moon has split [in two]."
            reference="Quran 54:1"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>The Moon has never split apart. If it had, there would be massive geological evidence visible today, global documentation from multiple civilizations, and catastrophic tidal effects. Ancient Chinese, Indian, Roman, and Mayan astronomers kept detailed records - none mention a split moon.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>Muhammad allegedly performed this "miracle" but only his followers claim to have seen it. No independent verification exists. Modern apologists reinterpret it as a future event or metaphor, contradicting classical tafsir and hadith which describe it as a past miracle.</p>
          </HighlightBox>
        </ContentCard>

        {/* STARS AS MISSILES */}
        <ContentCard>
          <CategoryTag color="red">ASTRONOMY</CategoryTag>
          <SectionTitle color="red">4. Stars Are Missiles Against Demons</SectionTitle>
          
          <VerseBox 
            text="And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils and have prepared for them the punishment of the Blaze."
            reference="Quran 67:5"
          />

          <VerseBox 
            text="Indeed, We have adorned the nearest heaven with an adornment of stars, And as protection against every rebellious devil."
            reference="Quran 37:6-7"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Stars are massive balls of plasma undergoing nuclear fusion, located light-years away. The nearest star (Proxima Centauri) is 4.24 light-years (40 trillion km) from Earth. Shooting stars (meteors) are small rocks burning up in Earth's atmosphere, not stars being thrown. Stars do not move to hit anything - they follow orbital mechanics.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran confuses meteors (small rocks) with stars (giant celestial bodies). It presents pre-scientific Arabian mythology that shooting stars are missiles thrown by angels to drive away demons (jinn) trying to eavesdrop on heaven. This is astronomical nonsense.</p>
          </HighlightBox>
        </ContentCard>

        {/* SEVEN HEAVENS */}
        <ContentCard>
          <CategoryTag color="red">COSMOLOGY</CategoryTag>
          <SectionTitle color="red">5. Seven Stacked Physical Heavens</SectionTitle>
          
          <VerseBox 
            text="It is Allah who has created seven heavens and of the earth, the like of them."
            reference="Quran 65:12"
          />

          <VerseBox 
            text="Then He completed them as seven heavens within two days and inspired in each heaven its command."
            reference="Quran 41:12"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>There are no seven physical layers or "heavens" above Earth. The atmosphere has multiple layers (troposphere, stratosphere, etc.), but not seven distinct "heavens." The universe is one continuous space governed by physics, not stacked divine layers. The cosmos extends billions of light-years, not in layers, but in all directions.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The seven-heavens model comes from ancient Mesopotamian and Greek cosmology (Ptolemaic system) where each heaven was a sphere carrying a celestial body. This is outdated, geocentric, pre-scientific cosmology, not divine revelation.</p>
          </HighlightBox>
        </ContentCard>

        {/* SUN ORBITS EARTH */}
        <ContentCard>
          <CategoryTag color="red">ASTRONOMY</CategoryTag>
          <SectionTitle color="red">6. Sun and Moon Orbit Around Earth</SectionTitle>
          
          <VerseBox 
            text="And it is He who created the night and the day and the sun and the moon; all [heavenly bodies] in an orbit are swimming."
            reference="Quran 21:33"
          />

          <VerseBox 
            text="And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing."
            reference="Quran 36:38"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>The Sun does not orbit Earth. Earth orbits the Sun (heliocentric model). The Sun does move through the galaxy, but the Quranic verses describe the Sun's motion in relation to Earth's day/night cycle, implying geocentrism. Day and night are caused by Earth's rotation, not the Sun's movement around Earth.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran presents a geocentric view where the Sun travels across the sky and has a resting place. This reflects 7th-century Arabian understanding, not cosmic reality. The Sun doesn't "run" in the sense of causing day/night - Earth rotates.</p>
          </HighlightBox>
        </ContentCard>

        {/* MOUNTAINS AS PEGS */}
        <ContentCard>
          <CategoryTag color="red">GEOLOGY</CategoryTag>
          <SectionTitle color="red">7. Mountains as Stakes to Prevent Earthquake</SectionTitle>
          
          <VerseBox 
            text="Have We not made the earth a resting place? And the mountains as stakes?"
            reference="Quran 78:6-7"
          />

          <VerseBox 
            text="And He has cast into the earth firmly set mountains, lest it shift with you."
            reference="Quran 16:15"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Mountains are formed by tectonic plate collisions and do not prevent earthquakes - they are often located ON fault lines where earthquakes occur most. Mountains are the result of seismic activity, not stabilizers against it. The most earthquake-prone regions (Himalayas, Andes, Rockies) are mountainous.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran claims mountains were placed like tent pegs to stabilize Earth. This is false. Mountains don't prevent shaking; plate tectonics cause both mountains and earthquakes. The "peg" analogy reflects ancient Near Eastern cosmology, not geology.</p>
          </HighlightBox>
        </ContentCard>

        {/* EMBRYOLOGY */}
        <ContentCard>
          <CategoryTag color="red">BIOLOGY / EMBRYOLOGY</CategoryTag>
          <SectionTitle color="red">8. Incorrect Embryological Development</SectionTitle>
          
          <VerseBox 
            text="We created man from an extract of clay. Then We made him as a drop in a place of settlement, firmly fixed. Then We made the drop into an alaqah (leech, clot, clinging thing), then We made the alaqah into a mudghah (chewed substance)..."
            reference="Quran 23:12-14"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Modern embryology shows continuous development, not distinct stages. The terms used (clot, chewed lump) don't accurately describe embryonic development. There's no "clot" stage - blood cells and circulatory system develop gradually. Bones and flesh develop simultaneously from mesoderm, not sequentially as claimed.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quranic description matches Galen's (2nd century CE) flawed Greek embryology, which was known in 7th-century Arabia. It incorrectly states bones form before flesh, when in reality they develop together. "Alaqah" (clot/leech) is inaccurate; embryos never resemble leeches or clots.</p>
          </HighlightBox>
        </ContentCard>

        {/* SEMEN PRODUCTION */}
        <ContentCard>
          <CategoryTag color="red">BIOLOGY / REPRODUCTION</CategoryTag>
          <SectionTitle color="red">9. Semen Comes from Between Backbone and Ribs</SectionTitle>
          
          <VerseBox 
            text="So let man observe from what he was created. He was created from a fluid, ejected, emerging from between the backbone and the ribs."
            reference="Quran 86:5-7"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Semen is produced in the testicles (located in the scrotum), not between the backbone and ribs. The testicles produce sperm; the prostate, seminal vesicles, and bulbourethral glands contribute fluids. None of these organs are located between the backbone (spine) and ribs (chest cavity).</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>This reflects ancient Greek medical errors (Hippocrates believed semen came from the brain/spinal cord). The verse is anatomically false. Apologists claim "backbone" means the entire spine or refers to the male's back area during intercourse - neither interpretation fixes the anatomical error.</p>
          </HighlightBox>
        </ContentCard>

        {/* SKY AS CEILING */}
        <ContentCard>
          <CategoryTag color="red">COSMOLOGY</CategoryTag>
          <SectionTitle color="red">10. Sky as a Physical Ceiling/Roof</SectionTitle>
          
          <VerseBox 
            text="And We made the sky a protected ceiling, but they, from its signs, are turning away."
            reference="Quran 21:32"
          />

          <VerseBox 
            text="Allah is He Who raised the heavens without any pillars that you can see."
            reference="Quran 13:2"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>There is no physical "ceiling" or "roof" above Earth. Space is a vacuum extending infinitely. The atmosphere is a thin layer of gases held by gravity, not a solid structure. The "ceiling" concept reflects ancient cosmology where the sky was imagined as a solid dome (firmament) over a flat Earth.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran describes the sky as a "ceiling" or "canopy" that could potentially fall or needs to be held up. This is the ancient conception of a solid sky-dome, not modern cosmology. Space has no ceiling, roof, or protective barrier.</p>
          </HighlightBox>
        </ContentCard>

        {/* SALT AND FRESH WATER */}
        <ContentCard>
          <CategoryTag color="red">HYDROLOGY</CategoryTag>
          <SectionTitle color="red">11. Unmixable Salt and Fresh Water</SectionTitle>
          
          <VerseBox 
            text="And it is He who has released [simultaneously] the two seas, one fresh and sweet and one salty and bitter, and He placed between them a barrier and prohibiting partition."
            reference="Quran 25:53"
          />

          <VerseBox 
            text="He released the two seas, meeting [side by side]; Between them is a barrier [so] neither of them transgresses."
            reference="Quran 55:19-20"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Salt water and fresh water DO mix. At river mouths (estuaries), there is a gradual mixing zone called a halocline where salinity gradually changes. There is no invisible barrier preventing mixing - it's a natural gradient caused by density differences, and mixing absolutely occurs through diffusion and turbulence.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran claims an unmixable barrier exists. This is false. Estuaries have brackish water (mixed). The visible line at river-sea meeting points is temporary and due to sediment/density, not a divine barrier. Water molecules freely cross and mix.</p>
          </HighlightBox>
        </ContentCard>

        {/* HUMAN FROM CLAY */}
        <ContentCard>
          <CategoryTag color="red">BIOLOGY / ANTHROPOLOGY</CategoryTag>
          <SectionTitle color="red">12. Humans Created from Clay/Mud</SectionTitle>
          
          <VerseBox 
            text="And certainly did We create man from an extract of clay."
            reference="Quran 23:12"
          />

          <VerseBox 
            text="He created man from clay like [that of] pottery."
            reference="Quran 55:14"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Humans evolved over millions of years from earlier primate ancestors through natural selection. Homo sapiens emerged approximately 300,000 years ago in Africa. Genetic, fossil, and anatomical evidence overwhelmingly support evolution. Humans were never created from clay, mud, or pottery.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The clay/mud creation story is borrowed from Mesopotamian mythology (Epic of Gilgamesh, Atrahasis). It contradicts evolutionary biology, genetics, and paleontology. No transition from clay to living organism has ever occurred or been observed.</p>
          </HighlightBox>
        </ContentCard>

        {/* ALL CREATURES IN PAIRS */}
        <ContentCard>
          <CategoryTag color="red">BIOLOGY</CategoryTag>
          <SectionTitle color="red">13. All Creatures Created in Pairs</SectionTitle>
          
          <VerseBox 
            text="And of everything We have created pairs, that perhaps you may remember."
            reference="Quran 51:49"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Many organisms reproduce asexually without male/female pairs: bacteria, many plants, fungi, some reptiles (parthenogenesis), amoebas, hydras, and many more. Not all life comes in pairs. Asexual reproduction is extremely common in nature.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The verse claims everything is created in pairs, which is biologically false. Millions of species reproduce without sexual pairing. Apologists reinterpret "pairs" to mean matter/antimatter or positive/negative, which is not what the verse or classical tafsir says.</p>
          </HighlightBox>
        </ContentCard>

        {/* ANTS TALKING */}
        <ContentCard>
          <CategoryTag color="red">BIOLOGY / ZOOLOGY</CategoryTag>
          <SectionTitle color="red">14. Ants Talk in Human Language</SectionTitle>
          
          <VerseBox 
            text="Until, when they came upon the valley of the ants, an ant said, 'O ants, enter your dwellings that you not be crushed by Solomon and his soldiers while they perceive not.'"
            reference="Quran 27:18"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>Ants communicate through pheromones (chemical signals), not spoken language. They cannot form complex sentences or understand human speech. They don't have vocal cords, language processing, or the cognitive ability for grammatical speech.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The Quran presents a literal talking ant giving warning in structured language. This is a fairy tale, not biology. Apologists claim it's metaphorical, but the text and tafsir treat it as literal speech that Solomon understood.</p>
          </HighlightBox>
        </ContentCard>

        {/* NOAH'S FLOOD */}
        <ContentCard>
          <CategoryTag color="red">GEOLOGY / HYDROLOGY</CategoryTag>
          <SectionTitle color="red">15. Global Flood Covering All Earth</SectionTitle>
          
          <VerseBox 
            text="So We opened the gates of the heaven with rain pouring down, And caused the earth to burst with springs, and the waters met for a matter already predestined."
            reference="Quran 54:11-12"
          />

          <HighlightBox variant="success" title="✓ Scientific Reality:">
            <p>There is zero geological evidence for a global flood covering all mountains. Ice cores, tree rings, coral reefs, and sediment layers show continuous uninterrupted records going back tens of thousands of years. A global flood would leave unmistakable global geological signatures - none exist.</p>
          </HighlightBox>

          <HighlightBox variant="danger" title="✗ The Problem:">
            <p>The flood story is copied from earlier Mesopotamian myths (Epic of Gilgamesh). It's geologically impossible - not enough water exists on Earth to cover all mountains. Two of every species couldn't fit on a wooden boat, and genetic bottlenecks would be detectable. It never happened.</p>
          </HighlightBox>
        </ContentCard>
      </Container>
    </>
  );
}
          
