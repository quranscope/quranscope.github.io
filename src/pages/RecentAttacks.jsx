import Head from 'next/head';
import Layout from '../components/Layout';
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  SectionTitle,
  StatsGrid,
  VerseBox,
  HighlightBox,
  Heading,
  Description
} from '../components/ui';

export default function RecentAttacks({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{t.title} - Quran Scope</title>
        <meta name="description" content={t.metaDescription} />
      </Head>

      <Container>
        <BackLink href="/" />
        
        <h1 className="text-4xl font-bold text-center mb-6">{t.title}</h1>
        
        <IntroBox title="📢 Important Information" variant="warning">
          <p>{t.intro}</p>
          <p className="mt-4 font-semibold">{t.warningText}</p>
        </IntroBox>

        {/* Quranic Verses Section */}
        <ContentCard>
          <SectionTitle color="red">{t.versesTitle}</SectionTitle>
          <p className="mb-6">{t.versesIntro}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.verses && t.verses.map((verse, index) => (
              <VerseBox
                key={index}
                text={verse.text}
                reference={verse.reference}
                context={verse.context}
              />
            ))}
          </div>
        </ContentCard>

        {/* 2024-2025 Attacks Section */}
        <ContentCard>
          <SectionTitle color="red">{t.recent2024_2025Title}</SectionTitle>
          <p className="mb-6">{t.recent2024_2025Intro}</p>

          <div className="space-y-6">
            {t.attacks2024_2025 && t.attacks2024_2025.map((attack, index) => (
              <HighlightBox key={index} variant="danger">
                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                    📅 {attack.date}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                    📍 {attack.location}
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                    👥 {attack.casualties}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{attack.title}</h3>
                <p className="text-gray-700 mb-4">{attack.description}</p>
                <div className="flex flex-wrap gap-2">
                  {attack.sources && attack.sources.map((source, idx) => (
                    <a 
                      key={idx} 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 bg-white border border-gray-300 hover:border-primary-500 px-3 py-1 rounded text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      📰 {source.name}
                    </a>
                  ))}
                </div>
              </HighlightBox>
            ))}
          </div>
        </ContentCard>

        {/* 2023 Attacks Section */}
        <ContentCard>
          <SectionTitle color="red">{t.attacks2023Title}</SectionTitle>
          <p className="mb-6">{t.attacks2023Intro}</p>

          <div className="space-y-6">
            {t.attacks2023 && t.attacks2023.map((attack, index) => (
              <HighlightBox key={index} variant="danger">
                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                    📅 {attack.date}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                    📍 {attack.location}
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                    👥 {attack.casualties}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{attack.title}</h3>
                <p className="text-gray-700 mb-4">{attack.description}</p>
                <div className="flex flex-wrap gap-2">
                  {attack.sources && attack.sources.map((source, idx) => (
                    <a 
                      key={idx} 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 bg-white border border-gray-300 hover:border-primary-500 px-3 py-1 rounded text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      📰 {source.name}
                    </a>
                  ))}
                </div>
              </HighlightBox>
            ))}
          </div>
        </ContentCard>

        {/* Statistics Section */}
        <StatsGrid 
          title={t.statisticsTitle}
          stats={[
            { number: t.totalAttacks, label: t.totalAttacksLabel },
            { number: t.totalDeaths, label: t.totalDeathsLabel },
            { number: t.totalInjured, label: t.totalInjuredLabel },
            { number: t.countriesAffected, label: t.countriesAffectedLabel }
          ]}
        />

        {/* Pattern Analysis Section */}
        <ContentCard>
          <SectionTitle color="red">{t.patternTitle}</SectionTitle>
          <div className="space-y-4">
            {t.patterns && t.patterns.map((pattern, index) => (
              <HighlightBox key={index} variant="warning" title={pattern.title}>
                <p>{pattern.description}</p>
              </HighlightBox>
            ))}
          </div>
        </ContentCard>

        {/* Conclusion Section */}
        <ContentCard>
          <SectionTitle color="red">{t.conclusionTitle}</SectionTitle>
          <p className="text-lg leading-relaxed">{t.conclusionText}</p>
        </ContentCard>

        {/* Navigation */}
        <div className="flex gap-4 justify-center mt-8">
          <button 
            onClick={() => router.push(`/${lang === 'en' ? '' : `home-${lang}`}`)} 
            className="bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t.homeButton}
          </button>
          <button 
            onClick={() => router.push(`/jihad-study${lang === 'en' ? '' : `-${lang}`}`)} 
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t.jihadButton}
          </button>
        </div>
      </Container>
    </Layout>
  );
}
