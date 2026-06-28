import Head from 'next/head'
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  SectionTitle,
  HighlightBox,
  CategoryTag,
  List,
  ListItem
} from '../components/ui'

export default function ExMuslimResources({ translations: t, currentLang = 'en' }) {
  if (!t) {
    return <div className="loading">{t?.loadingText || 'Loading...'}</div>
  }

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
      <Container>
        <BackLink href="/">{t.homeButton}</BackLink>
        <h1 className="text-4xl font-bold text-center mb-6">{t.pageTitle}</h1>

        <IntroBox title="" variant="info">
          <p>{t.intro}</p>
        </IntroBox>

        <ContentCard>
          <SectionTitle color="primary">{t.youtubeTitle}</SectionTitle>

          <HighlightBox title="💡 Tip" variant="info">
            <p>Many channels offer subtitles in multiple languages. Click the CC button on YouTube videos to enable subtitles if available.</p>
          </HighlightBox>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {channels.map((channel, index) => (
              <HighlightBox key={index} variant="info">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.name}</h3>
                <CategoryTag color="purple" className="mb-3">{channel.language}</CategoryTag>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {channel.desc}
                </p>
                <a href={channel.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-md font-medium transition-colors">{t.visitChannelButton}</a>
              </HighlightBox>
            ))}
          </div>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="primary">{t.websitesTitle}</SectionTitle>

          <div className="space-y-4">
            {websites.map((website, index) => (
              <HighlightBox key={index} variant="success">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{website.name}</h3>
                <p className="text-gray-600 mb-3">{website.desc}</p>
                <a href={website.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">{website.link}</a>
              </HighlightBox>
            ))}
          </div>
        </ContentCard>

        <ContentCard>
          <SectionTitle color="primary">{t.reasonsTitle}</SectionTitle>

          <HighlightBox title={t.reasonsSubtitle} variant="warning">
            <List variant="none">
              {reasons.map((reason, index) => (
                <ListItem key={index} className="mb-3 p-3 bg-white rounded-md">{reason}</ListItem>
              ))}
            </List>
          </HighlightBox>
        </ContentCard>

        <div className="flex gap-4 justify-center mt-8">
          <a href="/" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors">{t.homeButton}</a>
          <a href="/muhammad-women" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-colors">{t.muhammadButton}</a>
        </div>
      </Container>
    </>
  )
}
