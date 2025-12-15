import Head from 'next/head'
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  StatsGrid,
  HighlightBox,
  PageHeader
} from '../components/ui'
import { PAGES } from '../config/pages'

export default function JihadStudy({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="flex items-center justify-center min-h-screen">{t?.loadingText || 'Loading...'}</div>
  }

  return (
    <>
      <Head>
        <title>{t.title} - Quran Scope</title>
        <meta name="description" content={t.subtitle} />
        <link rel="canonical" href="https://quranscope.github.io/jihad-study" />
        <meta property="og:title" content={t.title} />
      </Head>
      
      <PageHeader 
        title={t.title} 
        subtitle={t.pageSubtitle}
        gradient={PAGES.jihad.backgroundColor}
      />
      
      <Container>
        <BackLink href="/">{t.backLink}</BackLink>

        <IntroBox variant="warning">
          <h3 dangerouslySetInnerHTML={{ __html: t.introTitle }} />
          <p dangerouslySetInnerHTML={{ __html: t.introParaOverview }} />
          <p dangerouslySetInnerHTML={{ __html: t.introParaCommonTactics }} />
        </IntroBox>

        <ContentCard>
          <SectionTitle color="red" dangerouslySetInnerHTML={{ __html: t.etymologyTitle }} />
          
          <HighlightBox variant="success" title={t.lingMeaningTitle}>
            <p dangerouslySetInnerHTML={{ __html: t.lingMeaningText }} />
            <p>{t.lingMeaningText2}</p>
          </HighlightBox>

          <HighlightBox variant="info" title={t.quranDefTitle}>
            <p dangerouslySetInnerHTML={{ __html: t.quranDef1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.quranDef2 }} />
          </HighlightBox>

          <HighlightBox variant="info" title={t.prophetDefTitle} className="bg-purple-50 border-purple-400">
            <p dangerouslySetInnerHTML={{ __html: t.prophetDef1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.prophetDef2 }} />
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red" dangerouslySetInnerHTML={{ __html: t.typesTitle }} />
          
          <h3 className="text-2xl font-bold mb-3">{t.greaterJihadTitle}</h3>
          <p className="mb-2">{t.greaterJihadSubtitle}</p>
          <p className="mb-2">{t.greaterJihadText1}</p>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.greaterJihadText2 }} />

          <h3 className="text-2xl font-bold mb-3">{t.lesserJihadTitle}</h3>
          <HighlightBox variant="danger" title={t.lesserJihadSubtitle}>
            <p>{t.lesserJihadText1}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t.lesserItem1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.lesserItem2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.lesserItem3 }} />
            </ul>
          </HighlightBox>

          <HighlightBox variant="info" title={t.offensiveTitle}>
            <p dangerouslySetInnerHTML={{ __html: t.offensiveText1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.offensiveText2 }} />
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red" dangerouslySetInnerHTML={{ __html: t.quranEvidenceTitle }} />
          
          <h3 className="text-2xl font-bold mb-3">{t.chronologyTitle}</h3>
          <p className="mb-4">{t.chronologyText}</p>

          <HighlightBox variant="info" title={t.meccanTitle}>
            <p dangerouslySetInnerHTML={{ __html: t.meccanText1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.meccanText2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.meccanNote }} />
          </HighlightBox>

          <HighlightBox variant="info" title={t.medinanTitle}>
            <p dangerouslySetInnerHTML={{ __html: t.medinanText1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.medinanText2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.medinanNote }} />
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <h3 className="text-2xl font-bold mb-4">{t.keyVersesTitle}</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.verseHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.commandHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.contextHeader}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-gray-300">Quran 2:191-193</td><td className="p-3 border-b border-gray-300" dangerouslySetInnerHTML={{ __html: t.verse2191 }} /><td className="p-3 border-b border-gray-300">{t.context2191}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">Quran 4:89</td><td className="p-3 border-b border-gray-300" dangerouslySetInnerHTML={{ __html: t.verse489 }} /><td className="p-3 border-b border-gray-300">{t.context489}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">Quran 8:12</td><td className="p-3 border-b border-gray-300" dangerouslySetInnerHTML={{ __html: t.verse812 }} /><td className="p-3 border-b border-gray-300">{t.context812}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">Quran 8:39</td><td className="p-3 border-b border-gray-300" dangerouslySetInnerHTML={{ __html: t.verse839 }} /><td className="p-3 border-b border-gray-300">{t.context839}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">Quran 9:29</td><td className="p-3 border-b border-gray-300" dangerouslySetInnerHTML={{ __html: t.verse929 }} /><td className="p-3 border-b border-gray-300">{t.context929}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">Quran 9:111</td><td className="p-3 border-b border-gray-300" dangerouslySetInnerHTML={{ __html: t.verse9111 }} /><td className="p-3 border-b border-gray-300">{t.context9111}</td></tr>
              </tbody>
            </table>
          </div>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{t.hadithEvidenceTitle}</SectionTitle>
          
          <HighlightBox variant="info" title="Jihad as Best Deed" className="bg-purple-50 border-purple-400">
            <p><strong>Sahih Bukhari 2785</strong> - Muhammad said jihad (fighting) is second-best deed after belief in Allah.</p>
          </HighlightBox>

          <HighlightBox variant="info" title={t.hadith2Title} className="bg-purple-50 border-purple-400">
            <p dangerouslySetInnerHTML={{ __html: t.hadith2Text }} />
          </HighlightBox>

          <HighlightBox variant="info" title={t.hadith4Title} className="bg-purple-50 border-purple-400">
            <p dangerouslySetInnerHTML={{ __html: t.hadith4Text }} />
          </HighlightBox>

          <HighlightBox variant="info" title={t.hadith5Title} className="bg-purple-50 border-purple-400">
            <p dangerouslySetInnerHTML={{ __html: t.hadith5Text }} />
          </HighlightBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{t.historicalTitle}</SectionTitle>
          
          <h3 className="text-2xl font-bold mb-4">{t.muhammadCampaignsTitle}</h3>
          <StatsGrid stats={[
            { number: '27', label: t.statGhazwa },
            { number: '38', label: t.statSaraya },
            { number: '65+', label: t.statTotal },
            { number: '10', label: t.statYears }
          ]} />

          <h3 className="text-2xl font-bold mb-4 mt-6">{t.majorBattlesTitle}</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.battleYearHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.battleNameHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.battleVictimsHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.battleOutcomeHeader}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-gray-300">624</td><td className="p-3 border-b border-gray-300">{t.battleBadr}</td><td className="p-3 border-b border-gray-300">{t.battleBadrVictims}</td><td className="p-3 border-b border-gray-300">{t.battleBadrOutcome}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">627</td><td className="p-3 border-b border-gray-300">{t.battleTrench}</td><td className="p-3 border-b border-gray-300">{t.battleTrenchVictims}</td><td className="p-3 border-b border-gray-300">{t.battleTrenchOutcome}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">628</td><td className="p-3 border-b border-gray-300">{t.battleKhaybar}</td><td className="p-3 border-b border-gray-300">{t.battleKhaybarVictims}</td><td className="p-3 border-b border-gray-300">{t.battleKhaybarOutcome}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">630</td><td className="p-3 border-b border-gray-300">{t.battleMecca}</td><td className="p-3 border-b border-gray-300">{t.battleMeccaVictims}</td><td className="p-3 border-b border-gray-300">{t.battleMeccaOutcome}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">630</td><td className="p-3 border-b border-gray-300">{t.battleHunain}</td><td className="p-3 border-b border-gray-300">{t.battleHunainVictims}</td><td className="p-3 border-b border-gray-300">{t.battleHunainOutcome}</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-3 mt-6">{t.rashidunTitle}</h3>
          <HighlightBox variant="danger">
            <p>{t.rashidunText1}</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem3 }} />
              <li dangerouslySetInnerHTML={{ __html: t.rashidunItem4 }} />
            </ul>
          </HighlightBox>

          <h3 className="text-2xl font-bold mb-3 mt-6">{t.umayyadTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem2 }} />
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem3 }} />
            <li dangerouslySetInnerHTML={{ __html: t.umayyadItem4 }} />
          </ul>

          <h3 className="text-2xl font-bold mb-3 mt-6">{t.abbasidTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t.abbasidItem1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.ottomanItem3 }} />
          </ul>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{t.modernTitle}</SectionTitle>
          
          <h3 className="text-2xl font-bold mb-4">{t.terrorGroupsTitle}</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.groupHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.regionHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.deathsHeader}</th>
                  <th className="bg-red-700 text-white p-3 text-left font-bold">{t.justificationHeader}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-gray-300">{t.groupAlQaeda}</td><td className="p-3 border-b border-gray-300">{t.regionAlQaeda}</td><td className="p-3 border-b border-gray-300">{t.deathsAlQaeda}</td><td className="p-3 border-b border-gray-300">{t.justAlQaeda}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">{t.groupISIS}</td><td className="p-3 border-b border-gray-300">{t.regionISIS}</td><td className="p-3 border-b border-gray-300">{t.deathsISIS}</td><td className="p-3 border-b border-gray-300">{t.justISIS}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">{t.groupBoko}</td><td className="p-3 border-b border-gray-300">{t.regionBoko}</td><td className="p-3 border-b border-gray-300">{t.deathsBoko}</td><td className="p-3 border-b border-gray-300">{t.justBoko}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">{t.groupTaliban}</td><td className="p-3 border-b border-gray-300">{t.regionTaliban}</td><td className="p-3 border-b border-gray-300">{t.deathsTaliban}</td><td className="p-3 border-b border-gray-300">{t.justTaliban}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">{t.groupHamas}</td><td className="p-3 border-b border-gray-300">{t.regionHamas}</td><td className="p-3 border-b border-gray-300">{t.deathsHamas}</td><td className="p-3 border-b border-gray-300">{t.justHamas}</td></tr>
                <tr><td className="p-3 border-b border-gray-300">{t['groupAl-Shabaab']}</td><td className="p-3 border-b border-gray-300">{t.regionShabaab}</td><td className="p-3 border-b border-gray-300">{t.deathsShabaab}</td><td className="p-3 border-b border-gray-300">{t.justShabaab}</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mb-3 mt-6">{t.attacksTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t.attack1 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack3 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack4 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack5 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack9 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack11 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack12 }} />
            <li dangerouslySetInnerHTML={{ __html: t.attack14 }} />
          </ul>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{t.whyTitle}</SectionTitle>
          
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>{t.reason1Title}</strong> {t.reason1Text}</li>
            <li><strong>{t.reason2Title}</strong> {t.reason2Text}</li>
            <li><strong>{t.reason3Title}</strong> {t.reason3Text}</li>
            <li><strong>{t.reason4Title}</strong> {t.reason4Text}</li>
            <li><strong>{t.reason5Title}</strong> {t.reason5Text}</li>
            <li><strong>{t.reason6Title}</strong> {t.reason6Text}</li>
            <li><strong>{t.reason7Title}</strong> {t.reason7Text}</li>
            <li><strong>{t.reason8Title}</strong> {t.reason8Text}</li>
          </ol>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{t.conclusionTitle}</SectionTitle>
          
          <StatsGrid stats={[
            { number: '164', label: t.statJihadVerses },
            { number: '1,400', label: t.statYearsWar },
            { number: '100+', label: t.statCountries },
            { number: '270M+', label: t.statDeaths }
          ]} />

          <IntroBox variant="warning" title={t.finalTitle}>
            <p>{t.finalPara1}</p>
            <p>{t.finalPara2}</p>
            <p dangerouslySetInnerHTML={{ __html: t.finalPara3 }} />
          </IntroBox>
        </ContentCard>

        <div className="flex justify-center mt-8">
          <a href="/" className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all">🏠 Home</a>
        </div>
      </Container>
    </>
  )
}
