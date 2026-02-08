import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Home from '../src/pages/Home'
import ComparativeResearch from '../src/pages/ComparativeResearch'
import ScientificErrors from '../src/pages/ScientificErrors'
import ExpansionHistory from '../src/pages/ExpansionHistory'
import AntisemitismChristianity from '../src/pages/AntisemitismChristianity'
import RealWorldHarm from '../src/pages/RealWorldHarm'
import MigrationImpact from '../src/pages/MigrationImpact'
import ExMuslimResources from '../src/pages/ExMuslimResources'
import MuhammadWomen from '../src/pages/MuhammadWomen'
import JihadStudy from '../src/pages/JihadStudy'
import Solution from '../src/pages/Solution'
import RecentAttacks from '../src/pages/RecentAttacks'
import TerroristOrganizations from '../src/pages/TerroristOrganizations'
import { PAGES, LANGUAGES, AVAILABLE_LANGUAGES } from '../src/config/pages'

const pageComponents = {
  'home': Home,
  'comparative-research': ComparativeResearch,
  'scientific-errors': ScientificErrors,
  'expansion-history': ExpansionHistory,
  'antisemitism-christianity': AntisemitismChristianity,
  'real-world-harm': RealWorldHarm,
  'migration-impact': MigrationImpact,
  'ex-muslim-resources': ExMuslimResources,
  'muhammad-women': MuhammadWomen,
  'jihad-study': JihadStudy,
  'solution': Solution,
  'recent-attacks': RecentAttacks,
  'terrorist-organizations': TerroristOrganizations,
}

export default function DynamicPage({ pageKey, lang, translations, pageConfig }) {
  const PageComponent = pageComponents[pageKey]
  
  if (!PageComponent) {
    return <div>Page not found</div>
  }
  
  if (!translations) {
    return <div>Loading...</div>
  }

  // Handle different translation key formats
  // Home page uses 'title', other pages use 'pageTitle'
  const title = translations?.pageTitle || translations?.title || pageConfig.title
  const description = translations?.pageSubtitle || translations?.subtitle || pageConfig.subtitle

  return (
    <>
      <Head>
        <title>{title} - Quran Scope</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="language" content={lang} />
      </Head>
      <PageComponent translations={translations} currentLang={lang} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = []
  
  // Add home page language variants
  LANGUAGES.forEach(({ code }) => {
    if (code !== 'en') {
      paths.push({ params: { slug: `home-${code}` } })
    }
  })
  
  // Generate paths for all page-language combinations
  Object.keys(pageComponents).forEach(pageKey => {
    const pageInfo = Object.values(PAGES).find(p => p.path === `/${pageKey}`)
    
    if (pageInfo) {
      // Add base page (English)
      paths.push({ params: { slug: pageKey } })
      
      // Add language variants for pages that have translations
      if (pageInfo.translationFile) {
        LANGUAGES.forEach(({ code }) => {
          if (code !== 'en') {
            paths.push({ params: { slug: `${pageKey}-${code}` } })
          }
        })
      }
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  
  // Parse slug to extract page key and language
  let pageKey = slug
  let lang = 'en'
  
  // Check if slug ends with a language code (e.g., "scientific-errors-ml")
  const langMatch = slug.match(/-(en|hi|de|fr|ta|pl|ml|ar)$/)
  if (langMatch) {
    lang = langMatch[1]
    pageKey = slug.replace(/-[a-z]{2}$/, '')
  }

  // Get page configuration
  let pageInfo = Object.values(PAGES).find(p => p.path === `/${pageKey}`)
  
  // Handle home page
  if (pageKey === 'home') {
    pageInfo = PAGES.home
  }
  
  if (!pageInfo) {
    return { notFound: true }
  }

  // Load translations
  let translations = null
  
  if (pageKey === 'home') {
    // Home page uses {lang}.json format
    const translationPath = path.join(process.cwd(), 'public', 'lang', `${lang}.json`)
    if (fs.existsSync(translationPath)) {
      const fileContents = fs.readFileSync(translationPath, 'utf8')
      translations = JSON.parse(fileContents)
    }
  } else if (pageInfo.translationFile) {
    // Other pages use {pagename}_{lang}.json format
    const translationPath = path.join(process.cwd(), 'public', 'lang', `${pageInfo.translationFile}_${lang}.json`)
    if (fs.existsSync(translationPath)) {
      const fileContents = fs.readFileSync(translationPath, 'utf8')
      translations = JSON.parse(fileContents)
    }
  }

  return {
    props: {
      pageKey,
      lang,
      translations,
      pageConfig: {
        title: pageInfo.title,
        subtitle: pageInfo.subtitle,
        backgroundColor: pageInfo.backgroundColor,
      }
    }
  }
}
