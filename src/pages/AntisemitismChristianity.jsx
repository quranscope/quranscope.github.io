import Head from 'next/head';
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  VerseBox,
  HighlightBox
} from '../components/ui';

export default function AntisemitismChristianity({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg text-gray-600">{t?.loadingText || 'Loading...'}</div>
    </div>;
  }

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href="https://quranscope.github.io/antisemitism-christianity" />
      </Head>
      
      <Container>
        <BackLink>{t.backLink}</BackLink>
        
        <IntroBox title={t.introTitle}>
          <p>{t.introParaOverview}</p>
          <p dangerouslySetInnerHTML={{ __html: t.introParaCommonTactics }} />
        </IntroBox>

        {/* QURANIC VERSES AGAINST JEWS */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryJewishVerses}</CategoryTag>
          <SectionTitle color="red">{t.jewishVersesTitle}</SectionTitle>
          
          <VerseBox text={t.verse582} reference="Quran 5:82" />
          <VerseBox text={t.verse564} reference="Quran 5:64" />
          <VerseBox text={t.verse296} reference="Quran 2:96" />
          <VerseBox text={t.verse542} reference="Quran 5:42" />

          <HighlightBox variant="danger" title={t.apesWarningTitle}>
            <VerseBox text={t.verse265} reference="Quran 2:65" />
            <VerseBox text={t.verse560} reference="Quran 5:60" />
            <VerseBox text={t.verse7166} reference="Quran 7:166" />
          </HighlightBox>

          <VerseBox text={t.verse930} reference="Quran 9:30" />
          <VerseBox text={t.verse578} reference="Quran 5:78" />
        </ContentCard>

        {/* QURANIC VERSES AGAINST CHRISTIANS */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryChristianVerses}</CategoryTag>
          <SectionTitle color="red">{t.christianVersesTitle}</SectionTitle>
          
          <VerseBox text={t.verse551} reference="Quran 5:51" />
          <VerseBox text={t.verse517} reference="Quran 5:17, 5:72" />
          <VerseBox text={t.verse573} reference="Quran 5:73" />
          <VerseBox text={t.verse986} reference="Quran 98:6" />
          <VerseBox text={t.verse4171} reference="Quran 4:171" />
        </ContentCard>

        {/* VERSES COMMANDING FIGHTING */}
        <ContentCard>
          <CategoryTag color="red">{t.categoryFighting}</CategoryTag>
          <SectionTitle color="red">{t.fightingTitle}</SectionTitle>
          
          <HighlightBox variant="danger" title={t.fightCommandTitle}>
            <VerseBox text={t.verse929} reference="Quran 9:29" />
            <p dangerouslySetInnerHTML={{ __html: t.fightExplanation }} />
          </HighlightBox>

                    <VerseBox text={t.verse9123} reference="Quran 9:123" />
          <VerseBox text={t.verse2216} reference="Quran 2:216" />
        </ContentCard>

        {/* HADITH ANTI-JEWISH */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryJewishHadith}</CategoryTag>
          <SectionTitle color="red">{t.jewishHadithTitle}</SectionTitle>
          
          <HighlightBox variant="warning" title={t.hadith1Title}>
            <p dangerouslySetInnerHTML={{ __html: t.hadith1Ref }} />
            <p>{t.hadith1Text}</p>
          </HighlightBox>

          <HighlightBox variant="warning" title={t.hadith2Title}>
            <p dangerouslySetInnerHTML={{ __html: t.hadith2Ref }} />
            <p>{t.hadith2Text}</p>
          </HighlightBox>

          <HighlightBox variant="warning" title={t.hadith3Title}>
            <p dangerouslySetInnerHTML={{ __html: t.hadith3Ref }} />
            <p>{t.hadith3Text}</p>
          </HighlightBox>

          <HighlightBox variant="warning" title={t.hadith4Title}>
            <p dangerouslySetInnerHTML={{ __html: t.hadith4Ref }} />
            <p>{t.hadith4Text}</p>
          </HighlightBox>
        </ContentCard>

        {/* HADITH ANTI-CHRISTIAN */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryChristianHadith}</CategoryTag>
          <SectionTitle color="red">{t.christianHadithTitle}</SectionTitle>
          
          <HighlightBox variant="warning" title={t.hadith5Title}>
            <p dangerouslySetInnerHTML={{ __html: t.hadith5Ref }} />
            <p>{t.hadith5Text}</p>
            <p dangerouslySetInnerHTML={{ __html: t.hadith5Interp }} />
          </HighlightBox>

          <HighlightBox variant="warning" title={t.hadith6Title}>
            <p dangerouslySetInnerHTML={{ __html: t.hadith6Ref }} />
            <p>{t.hadith6Text}</p>
          </HighlightBox>
        </ContentCard>

        {/* HISTORICAL PERSECUTION JEWS */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryJewishHistory}</CategoryTag>
          <SectionTitle color="red">{t.jewishHistoryTitle}</SectionTitle>
          
          <table className="w-full border-collapse my-4 bg-white">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableYearHeader}</th>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableEventHeader}</th>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableLocationHeader}</th>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableDetailsHeader}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event627Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event627Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event627Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event627Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event634Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event634Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event634Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event634Details}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event1011Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1011Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1011Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1011Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event1033Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1033Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1033Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1033Details}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event1066Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1066Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1066Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1066Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event1148Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1148Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1148Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1148Details}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event1941Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1941Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1941Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1941Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event1948Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1948Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1948Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1948Details}</td>
              </tr>
            </tbody>
          </table>

          <HighlightBox variant="info" title={t.jewishPopTitle}>
            <ul className="list-disc list-inside space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t.popIraq }} />
              <li dangerouslySetInnerHTML={{ __html: t.popEgypt }} />
              <li dangerouslySetInnerHTML={{ __html: t.popYemen }} />
              <li dangerouslySetInnerHTML={{ __html: t.popSyria }} />
              <li dangerouslySetInnerHTML={{ __html: t.popLibya }} />
            </ul>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.popResult }} />
          </HighlightBox>
        </ContentCard>

        {/* HISTORICAL PERSECUTION CHRISTIANS */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryJewishHistory}</CategoryTag>
          <SectionTitle color="red">{t.christianHistoryTitle}</SectionTitle>
          
          <table className="w-full border-collapse my-4 bg-white">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableYearHeader}</th>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableEventHeader}</th>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableLocationHeader}</th>
                <th className="border border-gray-300 px-3 py-2 text-left bg-orange-600 text-white font-bold">{t.tableDetailsHeader}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event638Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event638Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event638Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event638Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event642Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event642Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event642Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event642Details}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event1009Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1009Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1009Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1009Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event1453Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1453Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1453Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1453Details}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event1915Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1915Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1915Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1915Details}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event1914aYear}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1914aName}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1914aLocation}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1914aDetails}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">{t.event1914bYear}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1914bName}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1914bLocation}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event1914bDetails}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">{t.event2014Year}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event2014Name}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event2014Location}</td>
                <td className="border border-gray-300 px-3 py-2">{t.event2014Details}</td>
              </tr>
            </tbody>
          </table>

          <HighlightBox variant="info" title={t.christianPopTitle}>
            <ul className="list-disc list-inside space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t.popTurkey }} />
              <li dangerouslySetInnerHTML={{ __html: t.popIraqChristian }} />
              <li dangerouslySetInnerHTML={{ __html: t.popSyriaChristian }} />
              <li dangerouslySetInnerHTML={{ __html: t.popEgyptChristian }} />
            </ul>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.popOverall }} />
          </HighlightBox>
        </ContentCard>

        {/* DHIMMI SYSTEM */}
        <ContentCard>
          <CategoryTag color="purple">{t.categoryDhimmi}</CategoryTag>
          <SectionTitle color="red">{t.dhimmiTitle}</SectionTitle>
          
          <HighlightBox variant="warning" title={t.pactTitle}>
            <ul className="list-disc list-inside space-y-2">
              <li>{t.rule1}</li>
              <li>{t.rule2}</li>
              <li>{t.rule3}</li>
              <li>{t.rule4}</li>
              <li>{t.rule5}</li>
              <li>{t.rule6}</li>
              <li>{t.rule7}</li>
              <li>{t.rule8}</li>
              <li>{t.rule9}</li>
            </ul>
          </HighlightBox>

          <HighlightBox variant="info" title={t.jizyaTitle}>
            <ul className="list-disc list-inside space-y-2">
              <li>{t.jizya1}</li>
              <li>{t.jizya2}</li>
              <li>{t.jizya3}</li>
              <li>{t.jizya4}</li>
            </ul>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.jizyaResult }} />
          </HighlightBox>
        </ContentCard>

        {/* MODERN IMPLICATIONS */}
        <ContentCard>
          <CategoryTag color="red">{t.categoryModern}</CategoryTag>
          <SectionTitle color="red">{t.modernTitle}</SectionTitle>
          
          <HighlightBox variant="danger" title={t.modernWarningTitle}>
            <ul className="list-disc list-inside space-y-2">
              <li dangerouslySetInnerHTML={{ __html: t.modern1 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern2 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern3 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern4 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern5 }} />
              <li dangerouslySetInnerHTML={{ __html: t.modern6 }} />
            </ul>
          </HighlightBox>
        </ContentCard>
      </Container>
    </>
  )
}
