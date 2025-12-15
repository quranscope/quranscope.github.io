import fs from 'fs'
import path from 'path'
import Home from '../src/pages/Home'

export default function IndexPage({ translations }) {
  if (!translations) {
    return <div>Loading...</div>
  }
  
  return <Home translations={translations} currentLang="en" />
}

export async function getStaticProps() {
  // Load English translations for home page
  const translationPath = path.join(process.cwd(), 'public', 'lang', 'en.json')
  
  let translations = null
  if (fs.existsSync(translationPath)) {
    const fileContents = fs.readFileSync(translationPath, 'utf8')
    translations = JSON.parse(fileContents)
  }

  return {
    props: {
      translations: translations || {}
    }
  }
}
