import Head from 'next/head'

export default function MuhammadWomen({ translations: t, currentLang = 'en' }) {
  if (!t) return <div>Loading...</div>

  const styles = {
    warningBox: {
      background: '#fff3cd',
      borderLeft: '5px solid #ffc107',
      padding: '20px',
      margin: '30px 0',
      borderRadius: '8px',
      color: '#856404',
    },
    intro: {
      background: '#f8f9fa',
      padding: '25px',
      borderRadius: '10px',
      marginBottom: '30px',
      borderLeft: '5px solid #c94b4b',
    },
    crimesList: {
      listStyle: 'none',
      padding: 0,
    },
    crimeItem: {
      background: 'white',
      padding: '15px 20px',
      margin: '12px 0',
      borderRadius: '8px',
      borderLeft: '4px solid #c94b4b',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.6',
    },
    referenceBox: {
      background: '#e8f4f8',
      borderLeft: '4px solid #0288d1',
      padding: '15px',
      margin: '15px 0',
      borderRadius: '6px',
      fontFamily: '"Courier New", monospace',
    },
    referenceTitle: {
      fontWeight: 'bold',
      color: '#01579b',
      marginBottom: '8px',
    },
    evidenceList: {
      listStylePosition: 'inside',
      margin: '20px 0',
      paddingLeft: '20px',
    },
    evidenceItem: {
      margin: '15px 0',
      padding: '15px',
      background: '#f8f9fa',
      borderRadius: '8px',
      borderLeft: '4px solid #c94b4b',
    },
    countryCard: {
      background: 'white',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      padding: '25px',
      marginBottom: '20px',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    },
    countryName: {
      fontSize: '1.3em',
      fontWeight: 'bold',
      color: '#c94b4b',
      marginBottom: '15px',
      paddingBottom: '10px',
      borderBottom: '2px solid #c94b4b',
    },
  };

  const crimesTitle = "MAJOR CRIMES DOCUMENTED";
  const crimes = [
    "Child Marriage - Married Aisha at 6, consummated at 9 (Sahih Bukhari 5134, Sahih Muslim 1422)",
    "Multiple Wives & Captive Women - 11+ wives including war captives; special Quranic permission exceeding 4-wife limit (Quran 33:50)",
    "Sex Slavery - Took Safiyya bint Huyayy as slave after killing her husband/father (Sahih Bukhari 2229)",
    "Commanding Wife-Beating - Quran 4:34 permits beating disobedient wives",
    "Women as Property - Quran 2:223: 'Your wives are a tilth for you'",
    "Inferior Legal Status - Woman's testimony worth half a man's (Quran 2:282); inheritance half of man's",
    "Forced Marriage - Aisha had no choice; child cannot consent",
  ];

  return (
    <>
      <Head>
        <title>Muhammad & Women - Quran Scope</title>
        <meta name="description" content="Prophet's Marriages, Slavery, and Women's Treatment - Detailed examination of Muhammad's relationships and Islamic gender teachings." />
        <link rel="canonical" href="https://quranscope.github.io/muhammad-women" />
      </Head>
      <div className="page-content">
        <a href="/" className="back-link">{t.homeButton || '← Back to Home'}</a>
        
        <h1>{t.title || 'Muhammad and the Treatment of Women: A Critical Analysis'}</h1>

        <div style={styles.intro}>
          <p style={{ marginBottom: '15px' }}>
            {t.introPara1 || 'Muhammad, considered the perfect moral example for 1.8 billion Muslims, married a 6-year-old child, owned slaves, captured women as war booty, and established legal frameworks treating women as inferior beings.'}
          </p>
          <p style={{ marginBottom: '15px' }}>
            {t.introPara2 || 'This page documents Muhammad\'s treatment of women based on Islam\'s most authentic sources: Sahih (authentic) Hadith collections and the Quran.'}
          </p>
          <p style={{ fontWeight: '600', color: '#c94b4b', fontSize: '1.05em' }}>
            {t.introQuestion || 'If Muhammad lived today, would he be considered a role model, or would he be prosecuted for child sexual abuse, slavery, and war crimes?'}
          </p>
        </div>

        <div style={{ background: '#fff3cd', padding: '30px', borderRadius: '12px', margin: '30px 0', borderLeft: '6px solid #ffc107' }}>
          <h2 style={{ color: '#c94b4b', marginTop: 0, marginBottom: '10px' }}>{t.crimesTitle || crimesTitle}</h2>
          <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '20px' }}>{t.crimesSubtitle || 'All documented in Islam\'s most authentic sources'}</p>
          <ul style={styles.crimesList}>
            {(t.crimesList || crimes).map((crime, index) => (
              <li key={index} style={styles.crimeItem}>{crime}</li>
            ))}
          </ul>
        </div>

        <div style={styles.warningBox}>
          <strong>{t.warningTitle || '⚠️ Content Warning:'}</strong>
          <p style={{ marginTop: '10px' }}>{t.warningText || 'This page discusses child marriage, sexual slavery, domestic violence, and human rights violations documented in Islamic texts.'}</p>
        </div>

        <h2>1. Child Marriage: The Case of Aisha</h2>
        <div className="content-section">
          <p><strong>The single most damaging fact about Muhammad:</strong> He married a 6-year-old child and had sex with her at age 9.</p>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Bukhari 5134:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "The Prophet married Aisha when she was six years old and he consummated his marriage when she was nine years old."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Muslim 1422a:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "Aisha reported that Allah's Apostle married her when she was seven years old, and she was taken to his house as a bride when she was nine, and her dolls were with her."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Bukhari 5158:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "Aisha said: 'The Prophet engaged me when I was a girl of six. We went to Medina and stayed... Then I was delivered to him (for marriage) while I was nine years old, and my dolls were with me.'"
            </div>
          </div>

          <h3>Historical Context and Impact</h3>
          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Age Difference:</strong> Muhammad was 53-54 years old when he consummated marriage with 9-year-old Aisha</li>
            <li style={styles.evidenceItem}><strong>Modern Classification:</strong> In every civilized country today, this would be prosecuted as child rape and pedophilia</li>
            <li style={styles.evidenceItem}><strong>Cannot Be Denied:</strong> Reported in most authentic Hadith collections; accepted by all four major Sunni schools of Islamic jurisprudence</li>
            <li style={styles.evidenceItem}><strong>Ongoing Harm:</strong> Used to justify child marriage in Yemen, Afghanistan, Pakistan, Iran where girls as young as 6-9 are married to adult men</li>
            <li style={styles.evidenceItem}><strong>The Problem:</strong> Muhammad is considered "uswa hasana" (perfect example) for all Muslims to follow (Quran 33:21)</li>
            <li style={styles.evidenceItem}><strong>Death Toll:</strong> Millions of child brides suffer lifelong trauma, health complications, and death due to this precedent</li>
          </ul>
        </div>

        <h2>2. Multiple Wives and Captive Women</h2>
        <div className="content-section">
          <p>Muhammad had special permission from Allah to exceed the 4-wife limit imposed on other Muslims. He married at least 11 women, including war captives.</p>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Quran 33:50:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "O Prophet, indeed We have made lawful to you your wives... and any believing woman who gives herself to the Prophet if the Prophet wishes to marry her - [this is] only for you, excluding the [other] believers."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Bukhari 371:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "The Prophet used to visit all his wives in one night and he had nine wives at that time."
            </div>
          </div>

          <h3>Muhammad's Wives</h3>
          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Khadijah:</strong> First wife; 15 years older; married when Muhammad was 25</li>
            <li style={styles.evidenceItem}><strong>Sawda:</strong> Married after Khadijah's death</li>
            <li style={styles.evidenceItem}><strong>Aisha:</strong> Married at 6, consummated at 9; daughter of Abu Bakr</li>
            <li style={styles.evidenceItem}><strong>Hafsa:</strong> Daughter of Umar; political alliance</li>
            <li style={styles.evidenceItem}><strong>Zaynab bint Khuzayma:</strong> Died shortly after marriage</li>
            <li style={styles.evidenceItem}><strong>Hind (Umm Salama):</strong> Widow of companion</li>
            <li style={styles.evidenceItem}><strong>Zaynab bint Jahsh:</strong> Previously married to Muhammad's adopted son Zayd; Allah "conveniently" revealed verses allowing Muhammad to marry her after Zayd divorced her (Quran 33:37)</li>
            <li style={styles.evidenceItem}><strong>Juwayriya:</strong> War captive from defeated Banu Mustaliq tribe</li>
            <li style={styles.evidenceItem}><strong>Safiyya bint Huyayy:</strong> Jewish captive; Muhammad killed her husband and father in Battle of Khaybar, then took her as wife/slave same day</li>
            <li style={styles.evidenceItem}><strong>Ramlah (Umm Habiba):</strong> Daughter of Abu Sufyan</li>
            <li style={styles.evidenceItem}><strong>Maymunah:</strong> Last wife</li>
            <li style={styles.evidenceItem}><strong>Maria al-Qibtiyya:</strong> Coptic Christian slave gifted to Muhammad; bore him son Ibrahim</li>
          </ul>
        </div>

        <h2>3. Women's Rights and Status in Islam</h2>
        <div className="content-section">
          <p>The Quran and Hadith establish women as legally and morally inferior to men in Islamic law.</p>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Quran 4:34:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "Men are in charge of women... As to those women on whose part you fear disloyalty and ill-conduct, admonish them, refuse to share their beds, and beat them."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Quran 2:282:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "Call upon two of your men as witnesses. If two men are not available, then one man and two women from among those you approve as witnesses - so if one of the women forgets, the other may remind her."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Bukhari 304:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "The Prophet said: 'Isn't the witness of a woman equal to half of that of a man?' The women said: 'Yes.' He said: 'This is because of the deficiency of a woman's mind.'"
            </div>
          </div>

          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Legal Inferiority:</strong> Woman's testimony worth half a man's in court (Quran 2:282)</li>
            <li style={styles.evidenceItem}><strong>Inheritance:</strong> Women inherit half of what men inherit (Quran 4:11)</li>
            <li style={styles.evidenceItem}><strong>Beating Permitted:</strong> Husbands allowed to beat disobedient wives (Quran 4:34)</li>
            <li style={styles.evidenceItem}><strong>Intellectual Deficiency:</strong> Muhammad said women are "deficient in intelligence" (Sahih Bukhari 304)</li>
            <li style={styles.evidenceItem}><strong>Majority in Hell:</strong> Muhammad said he saw hell and most inhabitants were women (Sahih Bukhari 304)</li>
            <li style={styles.evidenceItem}><strong>Obedience Required:</strong> If a woman refuses sex, angels curse her until morning (Sahih Bukhari 5193)</li>
            <li style={styles.evidenceItem}><strong>Male Guardianship:</strong> Women require male permission for travel, work, marriage in strict Islamic societies</li>
          </ul>
        </div>

        <h2>4. War Captives and Sexual Slavery</h2>
        <div className="content-section">
          <p>Islam explicitly permits sexual slavery of war captives. Muhammad practiced this and established it as Islamic law.</p>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Quran 4:24:</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "Also forbidden are married women, except those whom your right hands possess [war captives]."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Muslim 1438a (Banu Mustaliq Raid):</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "We went out with Allah's Messenger on the expedition to Banu Mustaliq and took captive some excellent Arab women; and we desired them, for we were suffering from the absence of our wives... So we asked the Prophet about coitus interruptus."
            </div>
          </div>

          <div style={styles.referenceBox}>
            <div style={styles.referenceTitle}>Sahih Bukhari 2229 (Safiyya bint Huyayy):</div>
            <div style={{ color: '#333', lineHeight: '1.6', fontStyle: 'italic' }}>
              "The Prophet stayed with Safiyya for three days during a journey. When it was the day of Khaybar, he married her. And then I saw the Prophet making a kind of pancake with dates and butter for her."
            </div>
          </div>

          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Quranic Permission:</strong> Sex with married female captives explicitly permitted (Quran 4:24, 23:5-6, 70:29-30)</li>
            <li style={styles.evidenceItem}><strong>Muhammad's Practice:</strong> Took Safiyya as slave/wife after killing her husband Kinana and father; same day of battle</li>
            <li style={styles.evidenceItem}><strong>Mass Rape:</strong> After battle of Banu Mustaliq, Muslim men raped captured women; asked Muhammad only about coitus interruptus to avoid pregnancies</li>
            <li style={styles.evidenceItem}><strong>No Consent:</strong> Captive women had no choice; taken as "spoils of war"</li>
            <li style={styles.evidenceItem}><strong>Modern Application:</strong> ISIS used these verses to justify enslaving Yazidi women (2014-2019); published manual citing Quran 4:24</li>
            <li style={styles.evidenceItem}><strong>Still Practiced:</strong> Sex slavery continues in conflict zones where jihadists operate</li>
          </ul>
        </div>

        <h2>5. Modern Perspective: Is Muhammad Followable Today?</h2>
        <div className="content-section" style={{ background: '#ffebee', padding: '25px', borderRadius: '10px', borderLeft: '5px solid #c94b4b' }}>
          <h3>Ethical and Legal Analysis</h3>
          <p><strong>If Muhammad lived in any modern country and repeated his actions, he would be:</strong></p>

          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Arrested for Child Sexual Abuse:</strong> Marrying and having sex with 9-year-old = statutory rape; decades in prison</li>
            <li style={styles.evidenceItem}><strong>Charged with Human Trafficking:</strong> Owning and selling slaves = modern slavery; life imprisonment</li>
            <li style={styles.evidenceItem}><strong>War Crimes Prosecution:</strong> Genociding Banu Qurayza (600-900 men beheaded), enslaving women and children = crimes against humanity</li>
            <li style={styles.evidenceItem}><strong>Sexual Assault Charges:</strong> Taking war captives as sex slaves without consent = rape; multiple life sentences</li>
            <li style={styles.evidenceItem}><strong>Incitement to Violence:</strong> Commanding violence against apostates, critics, non-Muslims = terrorism charges</li>
            <li style={styles.evidenceItem}><strong>Domestic Violence:</strong> Commanding wife-beating = criminal assault</li>
          </ul>

          <p style={{ marginTop: '20px', fontWeight: '600', fontSize: '1.1em', color: '#c94b4b' }}>
            Yet 1.8 billion Muslims are taught to follow his example as the "perfect man" and "seal of prophets."
          </p>
        </div>

        <h2>6. Legal Consequences in Modern Countries</h2>
        <div className="content-section">
          <p><strong>What would happen to Muhammad if he lived today and repeated his documented actions?</strong></p>

          <div style={styles.countryCard}>
            <div style={styles.countryName}>United States</div>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`• Child marriage (Aisha): Statutory rape = 25 years to life
• Sex slavery: Human trafficking = 15-20 years per victim
• Genocide (Banu Qurayza): War crimes = life without parole
• Multiple life sentences; labeled worst sex offender and terrorist`}
            </p>
          </div>

          <div style={styles.countryCard}>
            <div style={styles.countryName}>Saudi Arabia</div>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`• Ironically: In modern Saudi Arabia, child marriage restricted by 2019 reforms
• But: Muhammad's actions still considered divinely sanctioned; cannot be criticized
• Criticism of Muhammad = execution for blasphemy/apostasy`}
            </p>
          </div>

          <div style={styles.countryCard}>
            <div style={styles.countryName}>India</div>
            <p style={{ whiteSpace: 'pre-line' }}>
              {`• Child marriage: POCSO Act = 10-20 years rigorous imprisonment
• Sex slavery: Immoral Traffic Act + Human Trafficking = 7-14 years
• Genocide: IPC Section 302 + war crimes = death penalty or life imprisonment
• Would be India's most wanted criminal`}
            </p>
          </div>

          <h3>Universal Declaration of Human Rights Violations</h3>
          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Article 1:</strong> All humans born free and equal → Islam establishes women as inferior</li>
            <li style={styles.evidenceItem}><strong>Article 4:</strong> No slavery → Muhammad owned, bought, sold, and took slaves; sex slavery permitted</li>
            <li style={styles.evidenceItem}><strong>Article 5:</strong> No torture/degrading treatment → Beating wives permitted; war captives enslaved</li>
            <li style={styles.evidenceItem}><strong>Article 16:</strong> Free consent to marriage → Child brides cannot consent; war captives forced into marriage</li>
            <li style={styles.evidenceItem}><strong>Article 18:</strong> Freedom of religion → Apostasy punishable by death; forced conversions practiced</li>
            <li style={styles.evidenceItem}><strong>Article 19:</strong> Freedom of expression → Blasphemy/criticism of Islam punishable by death</li>
          </ul>
        </div>

        <h2>7. Conclusion: The Impact on Women</h2>
        <div className="content-section">
          <p style={{ marginBottom: '25px', fontWeight: '500', fontSize: '1.05em' }}>
            Muhammad's treatment of women and the legal frameworks he established have resulted in 1,400 years of systemic oppression affecting hundreds of millions of women.
          </p>
          <ul style={styles.evidenceList}>
            <li style={styles.evidenceItem}><strong>Child Marriage Epidemic:</strong> 12 million girls married yearly in Muslim-majority countries; Muhammad's marriage to Aisha used as justification</li>
            <li style={styles.evidenceItem}><strong>Honor Killings:</strong> 5,000+ women killed annually for "dishonoring" families; rooted in Islamic concepts of male honor</li>
            <li style={styles.evidenceItem}><strong>FGM:</strong> 200 million women mutilated; justified by Hadith</li>
            <li style={styles.evidenceItem}><strong>Legal Discrimination:</strong> Women treated as legal minors requiring male guardianship in Islamic law countries</li>
            <li style={styles.evidenceItem}><strong>Domestic Violence:</strong> 70-90% of women in some Muslim countries experience violence; Quran 4:34 cited as justification</li>
            <li style={styles.evidenceItem}><strong>Sex Slavery:</strong> ISIS enslaved 5,000+ Yazidi women citing Quran 4:24; practice continues in conflict zones</li>
            <li style={styles.evidenceItem}><strong>Forced Conversion:</strong> 1,000+ girls kidnapped yearly in Pakistan alone; forced to convert and marry</li>
            <li style={styles.evidenceItem}><strong>Cannot Reform:</strong> Muhammad's actions considered divinely sanctioned and perfect; criticism = apostasy/blasphemy = death</li>
          </ul>

          <p style={{ marginTop: '30px', padding: '20px', background: '#fff3cd', borderRadius: '10px', fontWeight: '600', fontSize: '1.1em' }}>
            The question is simple: Can a man who married a 6-year-old child, owned slaves, captured women as war booty, commanded wife-beating, and established women as legally inferior truly be considered a moral example for humanity?
          </p>
        </div>

        <div className="nav-buttons">
          <a href="/" className="nav-button">🏠 Home</a>
          <a href="/ex-muslim-resources" className="nav-button">← Ex-Muslim Resources</a>
        </div>
      </div>
    </>
  )
}
