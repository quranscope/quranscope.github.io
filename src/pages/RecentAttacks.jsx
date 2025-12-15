import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function RecentAttacks() {
  const router = useRouter();
  const [t, setT] = useState({});
  const [loading, setLoading] = useState(true);

  // Extract language from slug or default to 'en'
  const slug = router.query.slug || '';
  const lang = slug ? slug.split('-').pop() : 'en';

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/lang/recent_attacks_${lang}.json`);
        if (!response.ok) throw new Error('Translation file not found');
        const data = await response.json();
        setT(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        const fallback = await fetch('/lang/recent_attacks_en.json');
        const data = await fallback.json();
        setT(data);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [lang]);

  if (loading) {
    return (
      <Layout>
        <div className="loading">{t.loadingText || 'Loading...'}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{t.title} - Quran Scope</title>
        <meta name="description" content={t.metaDescription} />
      </Head>

      <div className="content-wrapper">
        <h1>{t.title}</h1>
        
        <div className="intro-section">
          <p className="intro-text">{t.intro}</p>
          <p className="warning-text">{t.warningText}</p>
        </div>

        {/* Quranic Verses Section */}
        <section className="verses-section">
          <h2>{t.versesTitle}</h2>
          <p>{t.versesIntro}</p>
          
          <div className="verses-grid">
            {t.verses && t.verses.map((verse, index) => (
              <div key={index} className="verse-card">
                <h3>{verse.reference}</h3>
                <blockquote className="verse-text">{verse.text}</blockquote>
                <p className="verse-context">{verse.context}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2024-2025 Attacks Section */}
        <section className="attacks-section">
          <h2>{t.recent2024_2025Title}</h2>
          <p className="section-intro">{t.recent2024_2025Intro}</p>

          <div className="attacks-list">
            {t.attacks2024_2025 && t.attacks2024_2025.map((attack, index) => (
              <div key={index} className="attack-card">
                <div className="attack-header">
                  <span className="attack-date">{attack.date}</span>
                  <span className="attack-location">{attack.location}</span>
                  <span className="attack-casualties">{attack.casualties}</span>
                </div>
                <h3 className="attack-title">{attack.title}</h3>
                <p className="attack-description">{attack.description}</p>
                <div className="attack-sources">
                  {attack.sources && attack.sources.map((source, idx) => (
                    <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="source-link">
                      📰 {source.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2023 Attacks Section */}
        <section className="attacks-section">
          <h2>{t.attacks2023Title}</h2>
          <p className="section-intro">{t.attacks2023Intro}</p>

          <div className="attacks-list">
            {t.attacks2023 && t.attacks2023.map((attack, index) => (
              <div key={index} className="attack-card">
                <div className="attack-header">
                  <span className="attack-date">{attack.date}</span>
                  <span className="attack-location">{attack.location}</span>
                  <span className="attack-casualties">{attack.casualties}</span>
                </div>
                <h3 className="attack-title">{attack.title}</h3>
                <p className="attack-description">{attack.description}</p>
                <div className="attack-sources">
                  {attack.sources && attack.sources.map((source, idx) => (
                    <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="source-link">
                      📰 {source.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section">
          <h2>{t.statisticsTitle}</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{t.totalAttacks}</div>
              <div className="stat-label">{t.totalAttacksLabel}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{t.totalDeaths}</div>
              <div className="stat-label">{t.totalDeathsLabel}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{t.totalInjured}</div>
              <div className="stat-label">{t.totalInjuredLabel}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{t.countriesAffected}</div>
              <div className="stat-label">{t.countriesAffectedLabel}</div>
            </div>
          </div>
        </section>

        {/* Pattern Analysis Section */}
        <section className="analysis-section">
          <h2>{t.patternTitle}</h2>
          <div className="pattern-list">
            {t.patterns && t.patterns.map((pattern, index) => (
              <div key={index} className="pattern-item">
                <h3>{pattern.title}</h3>
                <p>{pattern.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="conclusion-section">
          <h2>{t.conclusionTitle}</h2>
          <p>{t.conclusionText}</p>
        </section>

        {/* Navigation */}
        <div className="navigation-buttons">
          <button onClick={() => router.push(`/${lang === 'en' ? '' : `home-${lang}`}`)} className="nav-button">
            {t.homeButton}
          </button>
          <button onClick={() => router.push(`/jihad-study${lang === 'en' ? '' : `-${lang}`}`)} className="nav-button">
            {t.jihadButton}
          </button>
        </div>
      </div>

      <style jsx>{`
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          color: #c41e3a;
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-align: center;
        }

        h2 {
          color: #8b0000;
          font-size: 2rem;
          margin: 40px 0 20px;
          border-bottom: 3px solid #c41e3a;
          padding-bottom: 10px;
        }

        .intro-section {
          background: #fff3cd;
          border-left: 5px solid #ffc107;
          padding: 20px;
          margin: 30px 0;
          border-radius: 5px;
        }

        .intro-text {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .warning-text {
          color: #856404;
          font-weight: bold;
          background: #fff3cd;
          padding: 15px;
          border-radius: 5px;
          border: 2px solid #ffc107;
        }

        .verses-section {
          margin: 40px 0;
        }

        .verses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .verse-card {
          background: #f8f9fa;
          border: 2px solid #c41e3a;
          border-radius: 8px;
          padding: 20px;
        }

        .verse-card h3 {
          color: #8b0000;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .verse-text {
          background: white;
          padding: 15px;
          border-left: 4px solid #c41e3a;
          margin: 15px 0;
          font-style: italic;
          line-height: 1.6;
        }

        .verse-context {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        .attacks-section {
          margin: 50px 0;
        }

        .section-intro {
          font-size: 1.1rem;
          margin-bottom: 25px;
          color: #333;
        }

        .attacks-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .attack-card {
          background: white;
          border: 1px solid #ddd;
          border-left: 5px solid #c41e3a;
          border-radius: 8px;
          padding: 20px;
          transition: box-shadow 0.3s ease;
        }

        .attack-card:hover {
          box-shadow: 0 4px 12px rgba(196, 30, 58, 0.2);
        }

        .attack-header {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }

        .attack-date {
          background: #8b0000;
          color: white;
          padding: 5px 12px;
          border-radius: 4px;
          font-weight: bold;
        }

        .attack-location {
          background: #dc3545;
          color: white;
          padding: 5px 12px;
          border-radius: 4px;
        }

        .attack-casualties {
          background: #6c757d;
          color: white;
          padding: 5px 12px;
          border-radius: 4px;
          font-weight: bold;
        }

        .attack-title {
          color: #8b0000;
          font-size: 1.4rem;
          margin-bottom: 12px;
        }

        .attack-description {
          line-height: 1.7;
          color: #333;
          margin-bottom: 15px;
        }

        .attack-sources {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .source-link {
          background: #007bff;
          color: white;
          padding: 8px 15px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: background 0.3s ease;
        }

        .source-link:hover {
          background: #0056b3;
        }

        .statistics-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px;
          border-radius: 10px;
          margin: 50px 0;
        }

        .statistics-section h2 {
          color: white;
          border-bottom-color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          padding: 30px;
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .analysis-section {
          margin: 50px 0;
        }

        .pattern-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }

        .pattern-item {
          background: #f8f9fa;
          border-left: 5px solid #007bff;
          padding: 20px;
          border-radius: 5px;
        }

        .pattern-item h3 {
          color: #007bff;
          margin-bottom: 10px;
        }

        .conclusion-section {
          background: #fff3cd;
          border: 2px solid #ffc107;
          border-radius: 10px;
          padding: 30px;
          margin: 50px 0;
        }

        .conclusion-section h2 {
          color: #856404;
          border-bottom-color: #ffc107;
        }

        .navigation-buttons {
          display: flex;
          gap: 15px;
          margin-top: 50px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nav-button {
          background: #007bff;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .nav-button:hover {
          background: #0056b3;
        }

        .loading {
          text-align: center;
          padding: 100px;
          font-size: 1.5rem;
          color: #666;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          .verses-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .attack-header {
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}
