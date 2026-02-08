import Head from 'next/head';
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  StatsGrid,
  HighlightBox,
  DetailRow,
  PageHeader,
  Heading,
  Description,
  List,
  ListItem
} from '../components/ui';
import { PAGES } from '../config/pages';

export default function Wahhabism({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg text-gray-600">{t?.loadingText || 'Loading...'}</div>
    </div>;
  }

  const stats = [
    { number: t.statFunding, label: t.statFundingLabel },
    { number: t.statMadrasas, label: t.statMadrasasLabel },
    { number: t.statTerrorists, label: t.statTerroristsLabel },
    { number: t.statCountries, label: t.statCountriesLabel }
  ];

  return (
    <>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href="https://quranscope.github.io/wahhabism" />
      </Head>
      
      <PageHeader 
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        gradient={PAGES.wahhabism.backgroundColor}
      />
      
      <Container>
        <BackLink>{t.backLink}</BackLink>
        
        <IntroBox title={t.introTitle} variant="warning">
          <p>{t.introPara1}</p>
          <p dangerouslySetInnerHTML={{ __html: t.introPara2 }} />
          <p>{t.introPara3}</p>
        </IntroBox>

        <StatsGrid title={t.statsTitle} stats={stats} />

        {/* HISTORICAL ORIGINS */}
        <ContentCard>
          <CategoryTag color="purple">{t.categoryOrigins}</CategoryTag>
          <SectionTitle color="primary">{t.originsTitle}</SectionTitle>
          
          <HighlightBox variant="info" title={t.founderTitle}>
            <p>{t.founderPara1}</p>
            <p>{t.founderPara2}</p>
            <List className="mt-4">
              <ListItem>{t.founderList1}</ListItem>
              <ListItem>{t.founderList2}</ListItem>
              <ListItem>{t.founderList3}</ListItem>
              <ListItem>{t.founderList4}</ListItem>
              <ListItem>{t.founderList5}</ListItem>
              <ListItem>{t.founderList6}</ListItem>
            </List>
          </HighlightBox>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.allianceTitle}</h3>
            <p className="mb-4">{t.alliancePara1}</p>
            <p className="font-bold mb-2" dangerouslySetInnerHTML={{ __html: t.alliancePara2 }} />
            <List className="mb-4">
              <ListItem><strong>{t.allianceTermPolitical.split(':')[0]}:</strong> {t.allianceTermPolitical.split(':')[1]}</ListItem>
              <ListItem><strong>{t.allianceTermReligious.split(':')[0]}:</strong> {t.allianceTermReligious.split(':')[1]}</ListItem>
              <ListItem><strong>{t.allianceTermJihad.split(':')[0]}:</strong> {t.allianceTermJihad.split(':')[1]}</ListItem>
            </List>
            <p>{t.alliancePara3}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-red-700 mb-4">{t.conquestTitle}</h3>
            <p className="mb-4">{t.conquestPara1}</p>
            
            <div className="space-y-4">
              <HighlightBox variant="danger">
                <h4 className="font-bold text-lg mb-2">{t.conquestEventKarbala}</h4>
                <p>{t.conquestEventKarbalaDesc}</p>
              </HighlightBox>
              
              <HighlightBox variant="danger">
                <h4 className="font-bold text-lg mb-2">{t.conquestEventMecca}</h4>
                <p>{t.conquestEventMeccaDesc}</p>
              </HighlightBox>
              
              <HighlightBox variant="warning">
                <h4 className="font-bold text-lg mb-2">{t.conquestEventOttoman}</h4>
                <p>{t.conquestEventOttomanDesc}</p>
              </HighlightBox>
            </div>
            
            <p className="mt-4">{t.conquestPara2}</p>
          </div>
        </ContentCard>

        {/* CORE IDEOLOGY */}
        <ContentCard>
          <CategoryTag color="red">{t.categoryIdeology}</CategoryTag>
          <SectionTitle color="red">{t.ideologyTitle}</SectionTitle>
          
          <p className="mb-6">{t.ideologyIntro}</p>

          <div className="space-y-4">
            <DetailRow label={t.beliefTakfir} value={t.beliefTakfirDesc} />
            <DetailRow label={t.beliefLiteralism} value={t.beliefLiteralismDesc} />
            <DetailRow label={t.beliefBidah} value={t.beliefBidahDesc} />
            <DetailRow label={t.beliefShirk} value={t.beliefShirkDesc} />
            <DetailRow label={t.beliefJihad} value={t.beliefJihadDesc} />
            <DetailRow label={t.beliefWomen} value={t.beliefWomenDesc} />
            <DetailRow label={t.beliefDemocracy} value={t.beliefDemocracyDesc} />
          </div>
        </ContentCard>

        {/* CULTURAL DESTRUCTION */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryDestruction}</CategoryTag>
          <SectionTitle color="red">{t.destructionTitle}</SectionTitle>
          
          <p className="mb-6">{t.destructionIntro}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <HighlightBox variant="danger" title={t.destructionMeccaTitle}>
              <ul className="space-y-2">
                <li>• {t.destructionMeccaHouseMuhammad}</li>
                <li>• {t.destructionMeccaHouseKhadija}</li>
                <li>• {t.destructionMeccaHouseAbuBakr}</li>
                <li>• {t.destructionMeccaCemeteryJannat}</li>
                <li>• {t.destructionMeccaFortress}</li>
              </ul>
            </HighlightBox>

            <HighlightBox variant="danger" title={t.destructionMedinaTitle}>
              <ul className="space-y-2">
                <li>• {t.destructionMedinaHouseMuhammad}</li>
                <li>• {t.destructionMedinaBaqi}</li>
                <li>• {t.destructionMedinaFatima}</li>
                <li>• {t.destructionMedinaGrave}</li>
              </ul>
            </HighlightBox>
          </div>

          <HighlightBox variant="warning" title="⚠️">
            <p className="font-bold">{t.destructionEstimate}</p>
          </HighlightBox>
        </ContentCard>

        {/* GLOBAL FUNDING */}
        <ContentCard>
          <CategoryTag color="blue">{t.categoryFunding}</CategoryTag>
          <SectionTitle color="primary">{t.fundingTitle}</SectionTitle>
          
          <p className="mb-6">{t.fundingIntro}</p>

          <div className="space-y-4">
            <HighlightBox variant="info" title={t.fundingMosques}>
              <p>{t.fundingMosquesDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.fundingMadrasas}>
              <p>{t.fundingMadrasasDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.fundingTextbooks}>
              <p>{t.fundingTextbooksDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.fundingImams}>
              <p>{t.fundingImamsDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.fundingOrganizations}>
              <p>{t.fundingOrganizationsDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.fundingMedia}>
              <p>{t.fundingMediaDesc}</p>
            </HighlightBox>
          </div>
        </ContentCard>

        {/* TERRORISM CONNECTION */}
        <ContentCard>
          <CategoryTag color="red">{t.categoryTerrorism}</CategoryTag>
          <SectionTitle color="red">{t.terrorismTitle}</SectionTitle>
          
          <p className="mb-6">{t.terrorismIntro}</p>

          <div className="space-y-4">
            <HighlightBox variant="danger" title={t.terrorGroupAlQaeda}>
              <p>{t.terrorGroupAlQaedaDesc}</p>
            </HighlightBox>

            <HighlightBox variant="danger" title={t.terrorGroupISIS}>
              <p>{t.terrorGroupISISDesc}</p>
            </HighlightBox>

            <HighlightBox variant="danger" title={t.terrorGroupBokoharam}>
              <p>{t.terrorGroupBokoharamDesc}</p>
            </HighlightBox>

            <HighlightBox variant="danger" title={t.terrorGroupAlShabaab}>
              <p>{t.terrorGroupAlShabaabDesc}</p>
            </HighlightBox>

            <HighlightBox variant="danger" title={t.terrorGroupTaliban}>
              <p>{t.terrorGroupTalibanDesc}</p>
            </HighlightBox>

            <HighlightBox variant="danger" title={t.terrorGroupTTP}>
              <p>{t.terrorGroupTTPDesc}</p>
            </HighlightBox>
          </div>

          <HighlightBox variant="warning" title="⚠️">
            <p className="font-bold">{t.terrorConnection}</p>
          </HighlightBox>
        </ContentCard>

        {/* PRIMARY VICTIMS */}
        <ContentCard>
          <CategoryTag color="purple">{t.categoryVictims}</CategoryTag>
          <SectionTitle color="red">{t.victimsTitle}</SectionTitle>
          
          <p className="mb-6">{t.victimsIntro}</p>

          <div className="space-y-4">
            <DetailRow label={t.victimShia} value={t.victimShiaDesc} />
            <DetailRow label={t.victimSufi} value={t.victimSufiDesc} />
            <DetailRow label={t.victimModerate} value={t.victimModerateDesc} />
            <DetailRow label={t.victimWomen} value={t.victimWomenDesc} />
            <DetailRow label={t.victimMinorities} value={t.victimMinoritiesDesc} />
          </div>
        </ContentCard>

        {/* GLOBAL RESPONSE */}
        <ContentCard>
          <CategoryTag color="green">{t.categoryResponse}</CategoryTag>
          <SectionTitle color="primary">{t.responseTitle}</SectionTitle>
          
          <p className="mb-6">{t.responseIntro}</p>

          <div className="space-y-4">
            <HighlightBox variant="success" title={t.responseMuslim}>
              <p>{t.responseMuslimDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.responseGovernments}>
              <p>{t.responseGovernmentsDesc}</p>
            </HighlightBox>

            <HighlightBox variant="info" title={t.responseWestern}>
              <p>{t.responseWesternDesc}</p>
            </HighlightBox>

            <HighlightBox variant="warning" title={t.responseReform}>
              <p>{t.responseReformDesc}</p>
            </HighlightBox>
          </div>
        </ContentCard>

        {/* SOCIETAL IMPACT */}
        <ContentCard>
          <CategoryTag color="orange">{t.categoryImpact}</CategoryTag>
          <SectionTitle color="red">{t.impactTitle}</SectionTitle>
          
          <p className="mb-6">{t.impactIntro}</p>

          <div className="space-y-4">
            <DetailRow label={t.impactPakistan} value={t.impactPakistanDesc} />
            <DetailRow label={t.impactIndonesia} value={t.impactIndonesiaDesc} />
            <DetailRow label={t.impactMalaysia} value={t.impactMalaysiaDesc} />
            <DetailRow label={t.impactWestAfrica} value={t.impactWestAfricaDesc} />
            <DetailRow label={t.impactEurope} value={t.impactEuropeDesc} />
          </div>
        </ContentCard>

        {/* CONCLUSION */}
        <ContentCard>
          <CategoryTag color="blue">{t.categoryConclusion}</CategoryTag>
          <SectionTitle color="primary">{t.conclusionTitle}</SectionTitle>
          
          <p className="mb-4">{t.conclusionPara1}</p>
          <List className="mb-6">
            <ListItem>{t.conclusionList1}</ListItem>
            <ListItem>{t.conclusionList2}</ListItem>
            <ListItem>{t.conclusionList3}</ListItem>
            <ListItem>{t.conclusionList4}</ListItem>
            <ListItem>{t.conclusionList5}</ListItem>
            <ListItem>{t.conclusionList6}</ListItem>
          </List>

          <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.conclusionPara2 }} />
          <p>{t.conclusionPara3}</p>
        </ContentCard>

        {/* SOURCES */}
        <ContentCard>
          <SectionTitle color="primary">{t.sourcesTitle}</SectionTitle>
          
          <div className="space-y-3">
            <p>📖 {t.sourceBook1}</p>
            <p>📖 {t.sourceBook2}</p>
            <p>📖 {t.sourceBook3}</p>
            <p>📖 {t.sourceBook4}</p>
            <p>📄 {t.sourceReport1}</p>
            <p>📄 {t.sourceReport2}</p>
            <p>📄 {t.sourceReport3}</p>
            <p>🎓 {t.sourceAcademic}</p>
          </div>
        </ContentCard>
      </Container>
    </>
  );
}
