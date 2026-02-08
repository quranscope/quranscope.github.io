import Head from 'next/head';
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  VerseBox,
  DetailRow,
  HighlightBox,
  PageHeader,
  EventBox
} from '../components/ui';
import { PAGES } from '../config/pages';

export default function DhimmiIdeology({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg text-gray-600">{t?.loadingText || 'Loading...'}</div>
    </div>;
  }

  return (
    <>
      <Head>
        <title>{t.title} - Quran Scope</title>
        <meta name="description" content={t.subtitle} />
        <link rel="canonical" href="https://quranscope.github.io/dhimmi-ideology" />
      </Head>
      
      <PageHeader 
        title={t.title} 
        subtitle={t.subtitle}
        gradient={PAGES.dhimmi.backgroundColor}
      />
      
      <Container>
        <BackLink>{t.backToHome}</BackLink>
        
        <IntroBox title={t.warningTitle} variant="warning">
          <p>{t.warningText}</p>
        </IntroBox>

        {/* INTRODUCTION */}
        <ContentCard>
          <p className="mb-4">{t.introPara1}</p>
          <p className="mb-4">{t.introPara2}</p>
          <p>{t.introPara3}</p>
        </ContentCard>

        {/* RELIGIOUS FOUNDATIONS */}
        <ContentCard>
          <CategoryTag color="purple">{t.sectionFoundationsTitle}</CategoryTag>
          <SectionTitle color="primary">{t.sectionFoundationsTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionFoundationsIntro}</p>

          {/* Quranic Basis */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.quranFoundationTitle}</h3>
            <p className="mb-4">{t.quranFoundationText}</p>
            
            <VerseBox 
              text={t.verseJizyaText}
              reference={t.verseJizyaReference}
              context={t.verseJizyaContext}
            />
            
            <VerseBox 
              text={t.verseFightingText}
              reference={t.verseFightingReference}
              context={t.verseFightingContext}
            />
          </div>

          {/* Hadith Elaborations */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t.hadithFoundationTitle}</h3>
            <p className="mb-4">{t.hadithFoundationIntro}</p>
            
            <EventBox variant="event">
              <h4 className="font-bold text-lg mb-2">{t.hadithUmarTitle}</h4>
              <p className="italic mb-3">{t.hadithUmarText}</p>
              <DetailRow label="Reference" value={t.hadithUmarReference} />
              <p className="mt-3 text-sm text-gray-700">{t.hadithUmarContext}</p>
            </EventBox>
            
            <EventBox variant="event">
              <h4 className="font-bold text-lg mb-2">{t.hadithHumiliationTitle}</h4>
              <p className="italic mb-3">{t.hadithHumiliationText}</p>
              <DetailRow label="Reference" value={t.hadithHumiliationReference} />
              <p className="mt-3 text-sm text-gray-700">{t.hadithHumiliationContext}</p>
            </EventBox>
          </div>
        </ContentCard>

        {/* JIZYA TAX SYSTEM */}
        <ContentCard>
          <CategoryTag color="orange">{t.sectionJizyaTitle}</CategoryTag>
          <SectionTitle color="red">{t.sectionJizyaTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionJizyaIntro}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.jizyaPurposeTitle}</h3>
              <p>{t.jizyaPurposeText}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.jizyaAmountTitle}</h3>
              <p>{t.jizyaAmountText}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.jizyaExemptionTitle}</h3>
              <p>{t.jizyaExemptionText}</p>
            </div>

            <HighlightBox variant="danger" title={t.jizyaConsequencesTitle}>
              <p>{t.jizyaConsequencesText}</p>
            </HighlightBox>
          </div>
        </ContentCard>

        {/* LEGAL AND SOCIAL RESTRICTIONS */}
        <ContentCard>
          <CategoryTag color="red">{t.sectionRestrictionsTitle}</CategoryTag>
          <SectionTitle color="red">{t.sectionRestrictionsTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionRestrictionsIntro}</p>

          <div className="space-y-8">
            {/* Religious Practice Limitations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.restrictionReligiousTitle}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.restrictionReligiousItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Legal Discrimination */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.restrictionLegalTitle}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.restrictionLegalItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Social Humiliation */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.restrictionSocialTitle}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.restrictionSocialItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </ContentCard>

        {/* HISTORICAL IMPLEMENTATION */}
        <ContentCard>
          <CategoryTag color="blue">{t.sectionHistoricalTitle}</CategoryTag>
          <SectionTitle color="blue">{t.sectionHistoricalTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionHistoricalIntro}</p>

          <div className="space-y-6">
            <EventBox variant="event">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.historicalEarlyIslamTitle}</h3>
              <p>{t.historicalEarlyIslamText}</p>
            </EventBox>

            <EventBox variant="event">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.historicalMiddleAgesTitle}</h3>
              <p>{t.historicalMiddleAgesText}</p>
            </EventBox>

            <EventBox variant="event">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.historicalOttomanTitle}</h3>
              <p>{t.historicalOttomanText}</p>
            </EventBox>

            <EventBox variant="event">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.historicalModernTitle}</h3>
              <p>{t.historicalModernText}</p>
            </EventBox>
          </div>
        </ContentCard>

        {/* ISLAMIC SCHOLARLY CONSENSUS */}
        <ContentCard>
          <CategoryTag color="purple">{t.sectionScholarlyTitle}</CategoryTag>
          <SectionTitle color="primary">{t.sectionScholarlyTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionScholarlyIntro}</p>

          <div className="space-y-6">
            <div className="bg-gray-50 border-l-4 border-purple-500 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.scholarIbnKathirTitle}</h3>
              <p className="italic mb-3">"{t.scholarIbnKathirQuote}"</p>
              <p className="text-sm text-gray-700">{t.scholarIbnKathirContext}</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-purple-500 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.scholarQaradawiTitle}</h3>
              <p className="italic mb-3">"{t.scholarQaradawiQuote}"</p>
              <p className="text-sm text-gray-700">{t.scholarQaradawiContext}</p>
            </div>

            <div className="bg-gray-50 border-l-4 border-purple-500 p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.scholarIbnTaymiyyahTitle}</h3>
              <p className="italic mb-3">"{t.scholarIbnTaymiyyahQuote}"</p>
              <p className="text-sm text-gray-700">{t.scholarIbnTaymiyyahContext}</p>
            </div>
          </div>
        </ContentCard>

        {/* MODERN MANIFESTATIONS */}
        <ContentCard>
          <CategoryTag color="red">{t.sectionModernTitle}</CategoryTag>
          <SectionTitle color="red">{t.sectionModernTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionModernIntro}</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.modernConstitutionalTitle}</h3>
              <p>{t.modernConstitutionalText}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.modernViolenceTitle}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {t.modernViolenceItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <HighlightBox variant="danger" title={t.modernISISTitle}>
              <p>{t.modernISISText}</p>
            </HighlightBox>
          </div>
        </ContentCard>

        {/* STATISTICAL IMPACT */}
        <ContentCard>
          <CategoryTag color="orange">{t.sectionImpactTitle}</CategoryTag>
          <SectionTitle color="red">{t.sectionImpactTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionImpactIntro}</p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.statDemographicTitle}</h3>
            <p className="mb-6">{t.statDemographicText}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{t.statChristiansMiddleEastValue}</div>
              <div className="text-sm text-gray-700">{t.statChristiansMiddleEastLabel}</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{t.statChristiansMiddleEastTodayValue}</div>
              <div className="text-sm text-gray-700">{t.statChristiansMiddleEastTodayLabel}</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{t.statArmenianGenocideValue}</div>
              <div className="text-sm text-gray-700">{t.statArmenianGenocideLabel}</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{t.statISISYazidisValue}</div>
              <div className="text-sm text-gray-700">{t.statISISYazidisLabel}</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{t.statPakistanBlasphemyValue}</div>
              <div className="text-sm text-gray-700">{t.statPakistanBlasphemyLabel}</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{t.statIraqChristiansValue}</div>
              <div className="text-sm text-gray-700">{t.statIraqChristiansLabel}</div>
            </div>
          </div>
        </ContentCard>

        {/* COMMON JUSTIFICATIONS AND RESPONSES */}
        <ContentCard>
          <CategoryTag color="green">{t.sectionResponseTitle}</CategoryTag>
          <SectionTitle color="green">{t.sectionResponseTitle}</SectionTitle>
          
          <p className="mb-6">{t.sectionResponseIntro}</p>

          <div className="space-y-6">
            <div>
              <HighlightBox variant="warning" title={t.responseToleranceClaimTitle}>
                <p className="mb-3"><strong>{t.responseToleranceResponseTitle}</strong></p>
                <p>{t.responseToleranceResponse}</p>
              </HighlightBox>
            </div>

            <div>
              <HighlightBox variant="warning" title={t.responseProtectionClaimTitle}>
                <p className="mb-3"><strong>{t.responseProtectionResponseTitle}</strong></p>
                <p>{t.responseProtectionResponse}</p>
              </HighlightBox>
            </div>

            <div>
              <HighlightBox variant="warning" title={t.responseContextClaimTitle}>
                <p className="mb-3"><strong>{t.responseContextResponseTitle}</strong></p>
                <p>{t.responseContextResponse}</p>
              </HighlightBox>
            </div>

            <div>
              <HighlightBox variant="warning" title={t.responseBetterThanClaimTitle}>
                <p className="mb-3"><strong>{t.responseBetterThanResponseTitle}</strong></p>
                <p>{t.responseBetterThanResponse}</p>
              </HighlightBox>
            </div>
          </div>
        </ContentCard>

        {/* CONCLUSION */}
        <ContentCard>
          <CategoryTag color="blue">{t.sectionConclusionTitle}</CategoryTag>
          <SectionTitle color="blue">{t.sectionConclusionTitle}</SectionTitle>
          
          <p className="text-lg leading-relaxed">{t.sectionConclusionText}</p>
        </ContentCard>

        {/* PRIMARY SOURCES */}
        <ContentCard>
          <CategoryTag color="purple">{t.sectionSourcesTitle}</CategoryTag>
          <SectionTitle color="primary">{t.sectionSourcesTitle}</SectionTitle>
          
          <p className="mb-4">{t.sectionSourcesIntro}</p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {t.sourcesListItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </ContentCard>
      </Container>
    </>
  );
}
