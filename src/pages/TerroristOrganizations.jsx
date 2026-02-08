import Head from 'next/head'
import { useState, useEffect } from 'react'
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  StatsGrid,
  PageHeader,
  Heading,
  Description,
  EventBox
} from '../components/ui'
import { PAGES } from '../config/pages'

export default function TerroristOrganizations({ translations, currentLang }) {
  if (!translations) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>{translations.title}</title>
        <meta name="description" content={translations.introParaOverview} />
      </Head>

      <PageHeader 
        title={translations.title} 
        subtitle={translations.subtitle}
        gradient={PAGES.terrorist.backgroundColor}
      />

      <Container>
        <BackLink href="/">← Back to Home</BackLink>

        <IntroBox>
          <p>{translations.introParaOverview}</p>
          <p>{translations.introParaCommonTactics}</p>
          <p>{translations.introParaScope}</p>
        </IntroBox>

        <IntroBox variant="warning" title={translations.warningTitle}>
          <p>{translations.warningText}</p>
        </IntroBox>

        <ContentCard>
          <SectionTitle color="red">{translations.statsTitle}</SectionTitle>
          <StatsGrid stats={[
            { number: '70+', label: translations.statActiveGroupsLabel },
            { number: '100+', label: translations.statCountriesAffectedLabel },
            { number: '25,000+', label: translations.statAnnualDeathsLabel },
            { number: '$100B+', label: translations.statEconomicDamageLabel }
          ]} />
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{translations.categoryBannedTitle}</SectionTitle>
          
          {/* ISIS */}
          <EventBox variant="war">
            <h3 className="text-2xl font-bold mb-3">{translations.isisName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="red">{translations.isisAka}</CategoryTag>
              <CategoryTag color="red">{translations.isisStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.isisLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.isisDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.isisCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.isisCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>

          {/* Al-Qaeda */}
          <EventBox variant="war">
            <h3 className="text-2xl font-bold mb-3">{translations.alqaedaName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="red">{translations.alqaedaAka}</CategoryTag>
              <CategoryTag color="red">{translations.alqaedaStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.alqaedaLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.alqaedaDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.alqaedaCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.alqaedaCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>

          {/* Boko Haram */}
          <EventBox variant="war">
            <h3 className="text-2xl font-bold mb-3">{translations.bokoharamName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="red">{translations.bokoharamAka}</CategoryTag>
              <CategoryTag color="red">{translations.bokoharamStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.bokoharamLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.bokoharamDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.bokoharamCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.bokoharamCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>

          {/* Taliban */}
          <EventBox variant="war">
            <h3 className="text-2xl font-bold mb-3">{translations.talibanName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="red">{translations.talibanAka}</CategoryTag>
              <CategoryTag color="red">{translations.talibanStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.talibanLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.talibanDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.talibanCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.talibanCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="red">{translations.categoryActiveTitle}</SectionTitle>

          {/* Hamas */}
          <EventBox variant="event">
            <h3 className="text-2xl font-bold mb-3">{translations.hamasName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="orange">{translations.hamasAka}</CategoryTag>
              <CategoryTag color="green">{translations.hamasStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.hamasLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.hamasDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.hamasCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.hamasCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>

          {/* Hezbollah */}
          <EventBox variant="event">
            <h3 className="text-2xl font-bold mb-3">{translations.hezbollahName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="orange">{translations.hezbollahAka}</CategoryTag>
              <CategoryTag color="green">{translations.hezbollahStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.hezbollahLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.hezbollahDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.hezbollahCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.hezbollahCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>

          {/* Al-Shabaab */}
          <EventBox variant="event">
            <h3 className="text-2xl font-bold mb-3">{translations.alshabaabName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="orange">{translations.alshabaabAka}</CategoryTag>
              <CategoryTag color="green">{translations.alshabaabStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.alshabaabLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.alshabaabDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.alshabaabCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.alshabaabCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>

          {/* AQAP */}
          <EventBox variant="event">
            <h3 className="text-2xl font-bold mb-3">{translations.aqapName}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <CategoryTag color="orange">{translations.aqapAka}</CategoryTag>
              <CategoryTag color="green">{translations.aqapStatus}</CategoryTag>
              <CategoryTag color="blue">{translations.aqapLocation}</CategoryTag>
            </div>
            <p className="text-gray-700 mb-4">{translations.aqapDesc}</p>
            <div>
              <h4 className="font-bold text-lg mb-2">{translations.aqapCrimesTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {translations.aqapCrimes.map((crime, index) => (
                  <li key={index}>{crime}</li>
                ))}
              </ul>
            </div>
          </EventBox>
        </ContentCard>

        {translations.conclusionTitle && (
          <ContentCard>
            <SectionTitle color="red">{translations.conclusionTitle}</SectionTitle>
            <ul className="list-disc pl-6 space-y-2">
              {translations.conclusionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </ContentCard>
        )}
      </Container>
    </>
  )
}
