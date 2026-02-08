import Head from "next/head"
import Link from "next/link"
import { PAGES } from "../config/pages"
import { Container, ContentCard, SectionTitle } from "../components/ui"

export default function Home({ translations, currentLang = "en" }) {
  if (!translations) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="text-lg text-gray-500 animate-pulse">Loading...</div>
      </div>
    )
  }

  const title = translations.title || "Quran Scope - Historical & Critical Analysis"
  const description =
    translations.description || translations.intro || "Historical, textual, and comparative analysis grounded in evidence."

  const cards = [
    {
      key: "comparative",
      href: currentLang === "en" ? "/comparative-research" : `/comparative-research-${currentLang}`,
      gradient: PAGES.comparative?.backgroundColor,
      icon: "📚",
      title: translations.cards?.comparative?.title || "",
      description: translations.cards?.comparative?.description || "",
      details: translations.cards?.comparative?.details || "",
      button: translations.cards?.comparative?.buttonText || "View"
    },
    {
      key: "scientific",
      href: currentLang === "en" ? "/scientific-errors" : `/scientific-errors-${currentLang}`,
      gradient: PAGES.scientific?.backgroundColor,
      icon: "🔬",
      title: translations.cards?.scientific?.title || "",
      description: translations.cards?.scientific?.description || "",
      details: translations.cards?.scientific?.details || "",
      button: translations.cards?.scientific?.buttonText || "View"
    },
    {
      key: "expansion",
      href: currentLang === "en" ? "/expansion-history" : `/expansion-history-${currentLang}`,
      gradient: PAGES.expansion?.backgroundColor,
      icon: "⚔️",
      title: translations.cards?.expansion?.title || "",
      description: translations.cards?.expansion?.description || "",
      details: translations.cards?.expansion?.details || "",
      button: translations.cards?.expansion?.buttonText || "View"
    },
    {
      key: "antisemitism",
      href: currentLang === "en" ? "/antisemitism-christianity" : `/antisemitism-christianity-${currentLang}`,
      gradient: PAGES.antisemitism?.backgroundColor,
      icon: "✡️",
      title: translations.cards?.antisemitism?.title || "",
      description: translations.cards?.antisemitism?.description || "",
      details: translations.cards?.antisemitism?.details || "",
      button: translations.cards?.antisemitism?.buttonText || "View"
    },
    {
      key: "dhimmi",
      href: currentLang === "en" ? "/dhimmi-ideology" : `/dhimmi-ideology-${currentLang}`,
      gradient: PAGES.dhimmi?.backgroundColor,
      icon: "⚖️",
      title: translations.cards?.dhimmi?.title || "",
      description: translations.cards?.dhimmi?.description || "",
      details: translations.cards?.dhimmi?.details || "",
      button: translations.cards?.dhimmi?.buttonText || "View"
    },
    {
      key: "harm",
      href: currentLang === "en" ? "/real-world-harm" : `/real-world-harm-${currentLang}`,
      gradient: PAGES.harm?.backgroundColor,
      icon: "⚠️",
      title: translations.cards?.harm?.title || "",
      description: translations.cards?.harm?.description || "",
      details: translations.cards?.harm?.details || "",
      button: translations.cards?.harm?.buttonText || "View"
    },
    {
      key: "migration",
      href: currentLang === "en" ? "/migration-impact" : `/migration-impact-${currentLang}`,
      gradient: PAGES.migration?.backgroundColor,
      icon: "🌍",
      title: translations.cards?.migration?.title || "",
      description: translations.cards?.migration?.description || "",
      details: translations.cards?.migration?.details || "",
      button: translations.cards?.migration?.buttonText || "View"
    },
    {
      key: "exmuslim",
      href: currentLang === "en" ? "/ex-muslim-resources" : `/ex-muslim-resources-${currentLang}`,
      gradient: PAGES.exmuslim?.backgroundColor,
      icon: "🎙️",
      title: translations.cards?.exmuslim?.title || "",
      description: translations.cards?.exmuslim?.description || "",
      details: translations.cards?.exmuslim?.details || "",
      button: translations.cards?.exmuslim?.buttonText || "View"
    },
    {
      key: "muhammadWomen",
      href: currentLang === "en" ? "/muhammad-women" : `/muhammad-women-${currentLang}`,
      gradient: PAGES.muhammad?.backgroundColor,
      icon: "👥",
      title: translations.cards?.muhammadWomen?.title || "",
      description: translations.cards?.muhammadWomen?.description || "",
      details: translations.cards?.muhammadWomen?.details || "",
      button: translations.cards?.muhammadWomen?.buttonText || "View"
    },
    {
      key: "jihad",
      href: currentLang === "en" ? "/jihad-study" : `/jihad-study-${currentLang}`,
      gradient: PAGES.jihad?.backgroundColor,
      icon: "📖",
      title: translations.cards?.jihad?.title || "",
      description: translations.cards?.jihad?.description || "",
      details: translations.cards?.jihad?.details || "",
      button: translations.cards?.jihad?.buttonText || "View"
    },
    {
      key: "terrorist",
      href: currentLang === "en" ? "/terrorist-organizations" : `/terrorist-organizations-${currentLang}`,
      gradient: PAGES.terrorist?.backgroundColor,
      icon: "☠️",
      title: translations.cards?.terrorist?.title || "",
      description: translations.cards?.terrorist?.description || "",
      details: translations.cards?.terrorist?.details || "",
      button: translations.cards?.terrorist?.buttonText || "View"
    },
    {
      key: "recentAttacks",
      href: currentLang === "en" ? "/recent-attacks" : `/recent-attacks-${currentLang}`,
      gradient: PAGES.recentAttacks?.backgroundColor,
      icon: "🚨",
      title: translations.cards?.recentAttacks?.subtitle || translations.cards?.recentAttacks?.title || "",
      description: translations.cards?.recentAttacks?.description || "",
      details: translations.cards?.recentAttacks?.details || "",
      button: translations.cards?.recentAttacks?.button || "View"
    },
    {
      key: "solution",
      href: currentLang === "en" ? "/solution" : `/solution-${currentLang}`,
      gradient: PAGES.solution?.backgroundColor,
      icon: "💡",
      title: translations.cards?.solution?.title || "",
      description: translations.cards?.solution?.description || "",
      details: translations.cards?.solution?.details || "",
      button: translations.cards?.solution?.buttonText || "View"
    }
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://quranscope.github.io/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-white">
        <div className="relative overflow-hidden bg-linear-to-b from-gray-50 via-white to-white border-b border-gray-100">
          <div className="absolute -left-10 -top-24 h-64 w-64 rounded-full bg-linear-to-br from-primary-100 via-blue-50 to-white blur-3xl" aria-hidden="true" />
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-linear-to-br from-blue-100 via-primary-50 to-white blur-3xl" aria-hidden="true" />
          <Container className="py-16 md:py-20 relative">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                <span>{translations.researchOverview || "Research Sections"}</span>
              </div>
              <div className="mt-8 rounded-3xl bg-white/80 px-6 py-10 shadow-xl ring-1 ring-gray-200 backdrop-blur">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">{title}</h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="#sections"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-white font-semibold shadow-sm transition hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    <span>{translations.researchOverview || "Explore research sections"}</span>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <span className="text-sm font-medium text-gray-500">Updated weekly with new findings</span>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container id="sections" className="py-12 md:py-16">
          <div className="flex flex-col gap-3 mb-10 text-center md:text-left">
            <SectionTitle color="primary">{translations.researchOverview || "Research Sections"}</SectionTitle>
            <p className="text-gray-600 max-w-3xl mx-auto md:mx-0">
              {translations.intro || "Explore comprehensive analysis across multiple disciplines with clear, structured summaries."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card) => (
              <ContentCard
                key={card.key}
                className="group h-full flex flex-col shadow-sm hover:shadow-lg transition duration-200 ring-1 ring-gray-100"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl" aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <div
                    className="h-10 w-10 rounded-full ring-1 ring-gray-100 shadow-sm transition-transform duration-200 group-hover:scale-105"
                    style={{ background: card.gradient }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">{card.description}</p>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.details}</p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                >
                  <span>{card.button}</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ContentCard>
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
