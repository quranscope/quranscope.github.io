import Head from 'next/head'

export default function ExMuslimResources({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">{t?.loadingText || 'Loading...'}</div>
  }

  const styles = {
    intro: {
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '30px',
      borderLeft: '5px solid #667eea',
    },
    subtitle: {
      background: '#e3f2fd',
      borderLeft: '5px solid #2196F3',
      marginBottom: '30px',
      padding: '20px',
      borderRadius: '10px',
      color: '#1976D2',
      fontWeight: '500',
    },
    channelGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '25px',
      margin: '30px 0',
    },
    channelCard: {
      background: 'white',
      border: '2px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    channelName: {
      fontSize: '1.3em',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '10px',
    },
    channelLanguage: {
      color: '#667eea',
      fontWeight: '600',
      fontSize: '0.9em',
      marginBottom: '15px',
      display: 'block',
    },
    channelLink: {
      display: 'inline-block',
      background: '#667eea',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: '500',
    },
    websiteItem: {
      background: '#f8f9fa',
      margin: '15px 0',
      padding: '20px',
      borderRadius: '10px',
      borderLeft: '5px solid #764ba2',
    },
    websiteName: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '8px',
    },
    websiteLink: {
      color: '#667eea',
      textDecoration: 'none',
      fontWeight: '500',
    },
    reasonSection: {
      background: '#fff3cd',
      padding: '25px',
      borderRadius: '10px',
      margin: '30px 0',
      borderLeft: '5px solid #ffc107',
    },
    reasonList: {
      listStylePosition: 'inside',
      paddingLeft: '20px',
    },
    reasonItem: {
      margin: '12px 0',
      padding: '10px',
      background: 'white',
      borderRadius: '6px',
    },
  };

  const channels = [
    { name: 'Arif Hussain Theruvath', language: '🗣️ Malayalam', link: 'https://www.youtube.com/@ArifHussainTheruvath', desc: t.channel1Desc },
    { name: 'ExMuslim Sahil', language: '🗣️ Hindi / Urdu', link: 'https://www.youtube.com/@ExMuslimSahil', desc: t.channel2Desc },
    { name: 'Apostate Prophet', language: '🗣️ English', link: 'https://www.youtube.com/@ApostateProphet', desc: t.channel3Desc },
    { name: 'Harris Sultan', language: '🗣️ English / Urdu', link: 'https://www.youtube.com/@HarrisSultanAtheist', desc: t.channel4Desc },
    { name: 'Adam Seeker', language: '🗣️ Urdu / Hindi', link: 'https://www.youtube.com/@AdamSeekerUrdu', desc: t.channel5Desc },
    { name: 'Christian Prince', language: '🗣️ English / Arabic', link: 'https://www.youtube.com/@ChristianPrince1', desc: t.channel6Desc },
    { name: 'Liyakkathali CM', language: '🗣️ Malayalam / Tamil', link: 'https://www.youtube.com/@LiyakkathaliCM', desc: t.channel7Desc },
    { name: 'Mr. and Mrs. Friendly Exmuslim', language: '🗣️ English', link: 'https://www.youtube.com/@FriendlyExmuslim', desc: t.channel8Desc },
  ];

  const websites = [
    { name: t.website1Name, link: 'https://exmuslims.org/', desc: t.website1Desc },
    { name: t.website2Name, link: 'https://ex-muslim.org.uk/', desc: t.website2Desc },
    { name: t.website3Name, link: 'https://www.reddit.com/r/exmuslim/', desc: t.website3Desc },
    { name: t.website4Name, link: 'https://www.faithtofaithless.com/', desc: t.website4Desc },
    { name: t.website5Name, link: 'https://abdullahsameer.com/', desc: t.website5Desc },
    { name: t.website6Name, link: 'https://wikiislam.net/', desc: t.website6Desc },
    { name: t.website7Name, link: 'https://www.atheistrepublic.com/', desc: t.website7Desc },
  ];

  const reasons = t.reasons || [];

  return (
    <>
      <Head>
        <title>{t.title} - Quran Scope</title>
        <meta name="description" content={t.intro} />
        <link rel="canonical" href="https://quranscope.github.io/ex-muslim-resources" />
      </Head>
      <div className="container">
        <a href="/" className="back-link">{t.homeButton}</a>
        <h1>{t.pageTitle}</h1>

        <div style={styles.intro}>
          <p>{t.intro}</p>
        </div>

        <h2>{t.youtubeTitle}</h2>

        <div style={styles.subtitle}>
          💡 Tip: Many channels offer subtitles in multiple languages. Click the CC button on YouTube videos to enable subtitles if available.
        </div>

        <div style={styles.channelGrid}>
          {channels.map((channel, index) => (
            <div key={index} style={styles.channelCard}>
              <div style={styles.channelName}>{channel.name}</div>
              <span style={styles.channelLanguage}>{channel.language}</span>
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                {channel.desc}
              </p>
              <a href={channel.link} target="_blank" rel="noopener noreferrer" style={styles.channelLink}>{t.visitChannelButton}</a>
            </div>
          ))}
        </div>

        <h2>{t.websitesTitle}</h2>

        <div style={{ listStyle: 'none', padding: 0 }}>
          {websites.map((website, index) => (
            <div key={index} style={styles.websiteItem}>
              <div style={styles.websiteName}>{website.name}</div>
              <p style={{ color: '#666', marginBottom: '10px' }}>{website.desc}</p>
              <a href={website.link} target="_blank" rel="noopener noreferrer" style={styles.websiteLink}>{website.link}</a>
            </div>
          ))}
        </div>

        <h2>{t.reasonsTitle}</h2>

        <div style={styles.reasonSection}>
          <h3 style={{ color: '#555', marginBottom: '15px' }}>{t.reasonsSubtitle}</h3>
          <ul style={styles.reasonList}>
            {reasons.map((reason, index) => (
              <li key={index} style={styles.reasonItem}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="navigation">
          <a href="/" className="nav-button">{t.homeButton}</a>
          <a href="/muhammad-women" className="nav-button">{t.muhammadButton}</a>
        </div>
      </div>
    </>
  )
}
