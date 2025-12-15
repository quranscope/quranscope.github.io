# GitHub Copilot Instructions for QuranScope Project

> **Project Type**: Multi-language React 18 + Vite 7 SPA  
> **Purpose**: Educational documentation website exposing human rights issues  
> **Deployment**: GitHub Pages at `/quranscopycreatedcontents/`  
> **Languages Supported**: 8 languages (EN, AR, DE, FR, HI, ML, PL, TA)

---

## 🎯 Big Picture Architecture

### Core Stack
```
React 18.3.1          → UI framework (functional components only)
Next.js 16.0.10       → Build tool and SSG framework
Tailwind CSS 3.x      → Utility-first CSS framework
react-helmet-async    → SEO meta tags per page
```

### Project Structure
```
src/
├── components/
│   ├── Header.jsx             # Site header with navigation
│   ├── Footer.jsx             # Footer with Related Pages + Go to Top
│   ├── LanguageBar.jsx        # Language switcher
│   ├── Layout.jsx             # Shared layout wrapper
│   └── ui/                    # ✨ Reusable Tailwind components
│       ├── BackLink.jsx       # Navigation back link
│       ├── IntroBox.jsx       # Warning/info boxes
│       ├── ContentCard.jsx    # Content container cards
│       ├── CategoryTag.jsx    # Category badges
│       ├── SectionTitle.jsx   # Section headings
│       ├── StatsGrid.jsx      # Statistics display grid
│       ├── VerseBox.jsx       # Quranic verse display
│       ├── DetailRow.jsx      # Label-value pairs
│       ├── VerseReference.jsx # Verse reference badges
│       ├── SourceDate.jsx     # Source date badges
│       ├── ResearchItem.jsx   # Research entry containers
│       ├── HighlightBox.jsx   # Colored highlight boxes
│       ├── Container.jsx      # Max-width container
│       └── index.js           # Barrel exports
├── config/
│   └── pages.js               # Central page configuration (SINGLE SOURCE OF TRUTH)
├── pages/
│   ├── Home.jsx               # Landing page with category cards
│   ├── ComparativeResearch.jsx
│   ├── ScientificErrors.jsx
│   ├── TerroristOrganizations.jsx
│   └── ... (13 pages total)
└── utils/
    └── analytics.js           # Analytics tracking

pages/
├── index.js                   # Next.js home route
├── [slug].js                  # Dynamic page routing
├── _app.js                    # Next.js app wrapper
└── _document.js               # HTML document structure

public/
└── lang/                      # Translation JSON files
    ├── en.json                # Global translations (navigation, etc.)
    ├── home_en.json           # Page-specific translations
    ├── terrorist_en.json
    └── ... (8 languages × multiple files)
```

### Routing Architecture
- **Base Path**: `/quranscopycreatedcontents/` (GitHub Pages)
- **Layout Wrapper**: All routes wrapped in `<Layout>` component
- **Shared Context**: `useOutletContext()` provides `{ currentLang, showWarning }`
- **Configuration**: All routes defined in `src/config/pages.js` and `src/App.jsx`

### State Management Pattern
```jsx
// Layout.jsx provides context
<Outlet context={{ currentLang, showWarning }} />

// Child pages consume context
const { currentLang, showWarning } = useOutletContext()
```

---

## 🚨 CRITICAL RULES - Read First!

### 1. Translation Key Naming Convention (MOST IMPORTANT)

**🔴 NEVER USE NUMBERS IN TRANSLATION KEYS 🔴**

```json
// ❌ WRONG - Numbers will break when content changes
{
  "crime1": "First crime",
  "crime2": "Second crime",
  "org1Name": "ISIS"
}

// ✅ CORRECT - Descriptive sentence-based keys
{
  "crimeGenocide": "First crime",
  "crimeSlavery": "Second crime",
  "isisName": "ISIS"
}
```

**Why?** When content is reordered or new items are added, number indices change, causing translation mismatches across all 8 language files.

**Correct Pattern**:
- Use descriptive, content-based keys: `"introPara1"`, `"warningTitle"`, `"stat1Label"`
- Use semantic prefixes: `org{Name}`, `crime{Type}`, `section{Topic}`
- Keep keys readable and self-documenting
- Never use pure numbers: `"1"`, `"2"`, `"item3"`

**🔴 NEVER USE NESTED OBJECTS IN TRANSLATION FILES 🔴**

```json
// ❌ WRONG - Nested objects make keys harder to manage
{
  "cards": {
    "comparative": {
      "title": "Research",
      "button": "View"
    }
  }
}

// ✅ CORRECT - Flat structure with underscores
{
  "cards_comparative_title": "Research",
  "cards_comparative_button": "View"
}
```

**Why?** Flat structure is easier to maintain, search, and refactor. Use underscores to separate logical groupings: `{group}_{subgroup}_{property}`.

**Correct Pattern**:
- Flatten all nested objects: `cards.comparative.title` → `cards_comparative_title`
- Use underscores for hierarchy: `section_intro_paragraph`, `stats_total_label`
- Keep consistent naming: `{page}_{component}_{property}`
- Access in code: `translations.cards_comparative_title` instead of `translations.cards.comparative.title`

### 2. HTML to JSX Conversion Rules

From `REACT_CONVERSION_INSTRUCTIONS.md`:

1. **NEVER** edit styles or content during conversion
2. **ONLY** convert structure: `class` → `className`, `style` → inline objects
3. **ALWAYS** use reusable components (Header, Footer, Layout)
4. **PRESERVE** all original content exactly
5. **ROUTING**: Add new pages to both `src/config/pages.js` AND `src/App.jsx`

### 3. Pages Configuration (`src/config/pages.js`)

**SINGLE SOURCE OF TRUTH** for all page metadata:

```javascript
export const PAGES = {
  home: {
    path: '/',
    title: 'Home',
    subtitle: 'Research Hub',
    backgroundColor: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    translationFile: null, // Home uses special handling
    availableLanguages: ['en', 'ar', 'de', 'fr', 'hi', 'ml', 'pl', 'ta']
  },
  comparative: {
    path: '/comparative-research',
    title: 'Comparative Research',
    subtitle: 'Analysis',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    translationFile: 'comparative', // Loads lang/comparative_{lang}.json
    availableLanguages: ['en', 'ar', 'de', 'fr', 'hi', 'ml', 'pl', 'ta']
  }
  // ... more pages
}
```

**Required Properties**:
- `path`: React Router route path
- `title`: Page title (English reference)
- `subtitle`: Short description
- `backgroundColor`: CSS gradient for page header
- `translationFile`: Basename for `/lang/{file}_{lang}.json` (null for home)
- `availableLanguages`: Array of 2-letter language codes

### 4. Translation File Loading Pattern

```jsx
// Standard pattern for all pages (except Home)
import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function MyPage() {
  const { currentLang } = useOutletContext()
  const [translations, setTranslations] = useState(null)

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // translationFile from pages.js config
        const response = await fetch(`/lang/mypage_${currentLang}.json`)
        if (response.ok) {
          const data = await response.json()
          setTranslations(data)
        }
      } catch (error) {
        console.error('Error loading translations:', error)
      }
    }
    loadTranslations()
  }, [currentLang])

  if (!translations) return <div>Loading...</div>

  return (
    <>
      <Helmet>
        <title>{translations.title}</title>
        <meta name="description" content={translations.introPara1} />
      </Helmet>
      {/* Access flattened keys with underscores */}
      <h1>{translations.cards_comparative_title}</h1>
      <p>{translations.section_intro_paragraph}</p>
      {/* Rest of component */}
    </>
  )
}
```

---

## 🎨 Tailwind CSS & UI Components

### 🎯 DESIGN SYSTEM REQUIREMENTS

**CRITICAL: Follow Tailwind CSS Official UI Patterns**

**Required References** (MUST consult before creating any new UI):
1. **Application UI Blocks**: https://tailwindcss.com/plus/ui-blocks/application-ui
   - Forms, tables, lists, navigation patterns
2. **Marketing UI Blocks**: https://tailwindcss.com/plus/ui-blocks/marketing
   - Hero sections, feature grids, CTAs, testimonials
3. **E-commerce UI Blocks**: https://tailwindcss.com/plus/ui-blocks/ecommerce
   - Product cards, pricing tables, checkout flows
4. **Syntax Template**: https://tailwindcss.com/plus/templates/syntax
   - Documentation layout patterns
5. **Spotlight Template**: https://tailwindcss.com/plus/templates/spotlight
   - Professional landing page patterns

**Design System Rules**:
- ✅ **WHITE THEME ONLY** - No dark mode, no color themes
- ✅ Use official Tailwind UI patterns from above links
- ✅ Match professional spacing, typography, and layout
- ✅ Follow accessibility best practices from templates
- ✅ Use semantic color utilities (gray-50, blue-600, etc.)
- ✅ Implement responsive patterns from official examples
- ❌ NO custom CSS files (use Tailwind utilities only)
- ❌ NO inline styles (except dynamic values)
- ❌ NO theme variants (white theme only)

**Color Palette** (White Theme):
```javascript
// Use these semantic colors only
colors: {
  gray: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 },
  blue: { 50, 100, 500, 600, 700 },    // Primary actions
  red: { 50, 100, 500, 600, 700 },     // Danger/warnings
  green: { 50, 100, 500, 600, 700 },   // Success
  yellow: { 50, 100, 500, 600, 700 },  // Warnings
  orange: { 50, 100, 500, 600, 700 }   // Highlights
}
```

**Layout Standards**:
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`
- Spacing scale: 4, 6, 8, 12, 16, 20, 24 (use `space-y-*` classes)
- Border radius: `rounded-lg` (8px) or `rounded-xl` (12px)
- Shadows: `shadow-sm`, `shadow`, `shadow-lg` only

### Tailwind Configuration

**Setup** (already installed):
- Tailwind CSS v4 with @tailwindcss/postcss plugin
- Configuration in `tailwind.config.js` with custom colors and gradients
- Tailwind directives in `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

**Custom Theme Extensions**:
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: { 500: '#667eea', 600: '#5568d3', ... },
      accent: { purple: '#764ba2', green: '#11998e', ... }
    },
    backgroundImage: {
      'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'gradient-green': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      // ... more gradients
    }
  }
}
```

### Reusable UI Components (`src/components/ui/`)

**ALL pages MUST use these components** instead of inline styles or custom CSS:

#### 1. **Container** - Main content wrapper
```jsx
import { Container } from '../components/ui';
<Container className="optional-extra-classes">
  {/* Page content */}
</Container>
```
- Provides max-width (1200px) and responsive padding
- Replaces: `<div style={{maxWidth: '1200px', margin: '2rem auto', ...}}>`

#### 2. **BackLink** - Navigation back to home
```jsx
import { BackLink } from '../components/ui';
<BackLink href="/" />  // Default: "← Back to Home"
<BackLink href="/other">Custom text</BackLink>
```
- Replaces: `<a href="/" style={{...}}>← Back to Home</a>`

#### 3. **IntroBox** - Warning/info boxes at page top
```jsx
import { IntroBox } from '../components/ui';
<IntroBox title="⚠️ Important Note" variant="warning">
  <p>First paragraph</p>
  <p>Second paragraph</p>
</IntroBox>
```
- Variants: `warning` (yellow), `info` (blue), `success` (green), `danger` (red)
- Replaces: Yellow intro boxes with `style={{background: '#fff3cd', ...}}`

#### 4. **ContentCard** - Main content sections
```jsx
import { ContentCard } from '../components/ui';
<ContentCard>
  <CategoryTag color="purple">CATEGORY</CategoryTag>
  <SectionTitle>Section Heading</SectionTitle>
  {/* Content */}
</ContentCard>
```
- Provides white background, rounded corners, shadow
- Replaces: `<div style={{background: 'white', borderRadius: '8px', ...}}>`

#### 5. **CategoryTag** - Colored category badges
```jsx
import { CategoryTag } from '../components/ui';
<CategoryTag color="purple">TORAH SOURCES</CategoryTag>
<CategoryTag color="red">ASTRONOMY</CategoryTag>
```
- Colors: `purple`, `green`, `orange`, `red`, `blue`, `pink`
- Replaces: `<span style={{background: '#764ba2', color: 'white', ...}}>`

#### 6. **SectionTitle** - Section headings with bottom border
```jsx
import { SectionTitle } from '../components/ui';
<SectionTitle color="primary">Stories from Scripture</SectionTitle>
<SectionTitle color="red">Scientific Errors</SectionTitle>
```
- Colors: `primary` (purple), `red`, `green`, `blue`
- Replaces: `<h2 style={{color: '#667eea', borderBottom: '2px solid #764ba2', ...}}>`

#### 7. **StatsGrid** - Statistics display grid
```jsx
import { StatsGrid } from '../components/ui';
const stats = [
  { number: "80", label: "Documented Parallels" },
  { number: "6", label: "Source Categories" },
  { number: "100-1,300", label: "Years Earlier Than Quran" }
];
<StatsGrid title="📊 Statistics" stats={stats} />
```
- Responsive grid layout (1-4 columns)
- Replaces: Custom stats boxes with inline styles

#### 8. **ResearchItem** - Research entry container
```jsx
import { ResearchItem } from '../components/ui';
<ResearchItem title="1. Adam & Eve Creation">
  <DetailRow label="Quran">
    <VerseReference>2:30-39</VerseReference>
  </DetailRow>
  <DetailRow label="Source" value="Genesis 1:26-27" />
</ResearchItem>
```
- Gray background with left border
- Replaces: `<div style={{background: '#f8f9fa', borderLeft: '4px solid #667eea', ...}}>`

#### 9. **DetailRow** - Label-value pairs
```jsx
import { DetailRow } from '../components/ui';
<DetailRow label="Source" value="Genesis 1:26-27" />
<DetailRow label="Quran">
  <VerseReference>2:30-39</VerseReference>
</DetailRow>
```
- Supports both `value` prop and children for complex content

#### 10. **VerseReference** - Quran verse badges
```jsx
import { VerseReference } from '../components/ui';
<VerseReference>2:30-39</VerseReference>
<VerseReference>7:11-25</VerseReference>
```
- Blue background, small text
- Replaces: `<span style={{background: '#e3f2fd', color: '#1565c0', ...}}>`

#### 11. **SourceDate** - Historical date badges
```jsx
import { SourceDate } from '../components/ui';
<SourceDate>6th-5th c. BCE</SourceDate>
```
- Orange background, bold text
- Replaces: `<span style={{background: '#fff3e0', color: '#e65100', ...}}>`

#### 12. **VerseBox** - Display Quranic verses
```jsx
import { VerseBox } from '../components/ui';
<VerseBox 
  text="And the earth - We have spread it out..."
  reference="Quran 15:19"
  context="Optional explanation of the verse"
/>
```
- Italic text, reference in red, optional context section

#### 13. **HighlightBox** - Colored highlight boxes
```jsx
import { HighlightBox } from '../components/ui';
<HighlightBox variant="success" title="✓ Scientific Reality:">
  <p>Explanation of actual science...</p>
</HighlightBox>
<HighlightBox variant="danger" title="✗ The Problem:">
  <p>Explanation of the issue...</p>
</HighlightBox>
```
- Variants: `success` (green), `danger` (red), `warning` (yellow), `info` (blue)
- Replaces: Custom colored boxes with inline styles

### Styling Conventions

**DO**:
- ✅ Use Tailwind utility classes: `className="bg-white rounded-lg p-8 mb-8"`
- ✅ Use UI components from `src/components/ui/`
- ✅ Use custom colors from Tailwind config: `text-primary-500`, `bg-accent-purple`
- ✅ Use responsive utilities: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

**DON'T**:
- ❌ Use inline `style={{}}` objects (except for dynamic values)
- ❌ Create component-specific CSS files for layout/colors
- ❌ Duplicate styling code across components
- ❌ Use arbitrary pixel values - use Tailwind spacing scale

**Example Pattern**:
```jsx
// ❌ OLD WAY (inline styles)
<div style={{
  maxWidth: '1200px',
  margin: '2rem auto',
  padding: '0 1rem'
}}>
  <div style={{
    background: '#fff3cd',
    borderLeft: '5px solid #ffc107',
    padding: '1.5rem',
    marginBottom: '2rem',
    borderRadius: '5px'
  }}>
    <h3 style={{color: '#856404'}}>Warning</h3>
  </div>
</div>

// ✅ NEW WAY (Tailwind + UI components)
<Container>
  <IntroBox title="⚠️ Warning">
    <p>Content here</p>
  </IntroBox>
</Container>
```

### Import Pattern
```jsx
// Import multiple UI components at once
import {
  Container,
  BackLink,
  IntroBox,
  ContentCard,
  CategoryTag,
  SectionTitle,
  StatsGrid,
  VerseBox,
  DetailRow,
  VerseReference,
  SourceDate,
  ResearchItem,
  HighlightBox
} from '../components/ui';
```

---

## 🔄 Critical Workflows

### Translation Workflow

**Available Scripts** (from `package.json`):

```bash
# Development & Build
npm run dev                         # Start Next.js dev server (http://localhost:3000)
npm run build                       # Production build with validation (sync → validate → build)
npm run build:force                 # Force build without validation checks
npm run start                       # Start production server
npm run deploy                      # Deploy to GitHub Pages
npm run sync                        # Sync translation files across languages
npm run lint                        # Run ESLint

# Validation Commands
npm run validate                    # Validate all translation files structure
npm run validate:keys               # Verify JSX uses valid translation keys (checks against *_en.json)
npm run validate:key-format         # Check for numbers in translation keys (CRITICAL)
npm run validate:language           # Validate language-specific content
npm run validate:usage              # Check translation key usage patterns
npm run validate:all                # Run all validation checks sequentially
npm run validate:report             # Generate translation validation report
npm run validate:watch              # Watch lang/ folder and auto-validate on changes

# Translation - DeepL API (premium, high quality, 500k chars/month)
npm run translate                   # Translate all files via DeepL
npm run translate:usage             # Check DeepL API usage/quota
npm run translate:antisemitism      # Translate antisemitism_en.json only
npm run translate:jihad             # Translate jihad_en.json only
npm run translate:exmuslim          # Translate exmuslim_en.json only
npm run translate:all               # Translate specific files (antisemitism, jihad, exmuslim)

# Translation - Google Translate (fallback, free, lower quality)
npm run translate:google            # Auto-translate all files via Google
npm run translate:google:antisemitism  # Translate antisemitism_en.json via Google
npm run translate:google:jihad      # Translate jihad_en.json via Google
npm run translate:google:exmuslim   # Translate exmuslim_en.json via Google
npm run translate:google:all        # Translate specific files via Google

# Translation Status
npm run translate:check             # Check translation completion status across all languages

# Refactoring Tools
npm run refactor:keys               # Refactor translation keys (rename, fix issues)
npm run refactor:keys:dry-run       # Preview key refactoring without applying changes

# Testing (Playwright)
npm run test                        # Run all Playwright tests
npm run test:ui                     # Run tests with Playwright UI
npm run test:headed                 # Run tests in headed mode (visible browser)
npm run test:debug                  # Run tests in debug mode
npm run test:report                 # Show Playwright test report
```

**Important Notes**:
- **ALWAYS run `npm run validate:keys`** before committing to catch missing translation keys
- **ALWAYS run `npm run validate:key-format`** to detect numbers in keys (violates naming convention)
- Build command automatically runs validation - fix errors before deployment
- DeepL is preferred for quality translations (check quota with `translate:usage`)
- Google Translate is fallback when DeepL quota exhausted

**Translation Process** (from `TRANSLATION-COMMANDS.md`):

1. Create/edit `public/lang/{page}_en.json` (English is source)
2. Run `npm run validate:translation-keys` to verify structure
3. Run `npm run translate:deepl` (preferred) or `:google` (fallback)
4. Check `npm run translate:status` to verify completion
5. Review generated files in `public/lang/{page}_{lang}.json`

**DeepL API Configuration**:
- API key stored in environment/script
- Premium account: 500,000 chars/month quota
- Priority order: DeepL first, Google fallback
- Check quota: `npm run translate:deepl:status`

### Adding a New Page

**Step-by-step checklist**:

1. **Create translation file**: `public/lang/newpage_en.json`
   ```json
   {
     "title": "Page Title",
     "subtitle": "Page Subtitle",
     "introPara1": "First paragraph...",
     "sectionTitle": "Section title"
   }
   ```
   ⚠️ Remember: NO NUMBERS in keys!

2. **Add to pages config**: `src/config/pages.js`
   ```javascript
   export const PAGES = {
     // ... existing pages
     newpage: {
       path: '/new-page',
       title: 'New Page',
       subtitle: 'Description',
       backgroundColor: 'linear-gradient(135deg, #color1 0%, #color2 100%)',
       translationFile: 'newpage',
       availableLanguages: ['en', 'ar', 'de', 'fr', 'hi', 'ml', 'pl', 'ta']
     }
   }
   ```

3. **Create JSX component**: `src/pages/NewPage.jsx`
   - Use standard translation loading pattern (see above)
   - Include `<Helmet>` for SEO
   - Use `useOutletContext()` for shared state

4. **Add route**: `src/App.jsx`
   ```jsx
   import NewPage from './pages/NewPage'
   
   // In BrowserRouter routes:
   <Route element={<Layout />}>
     <Route path="/new-page" element={<NewPage />} />
   </Route>
   ```

5. **Add to Home page**: `src/pages/Home.jsx`
   - Add card in appropriate category grid
   - Update `public/lang/home_{lang}.json` with new card data

6. **Translate**: Run `npm run translate:deepl`

7. **Validate**: Run `npm run validate:all`

### Translation Key Validation

**CRITICAL for avoiding runtime errors!**

Before building, always validate translation keys:

```bash
# Validate translation keys used in JSX files exist
npm run validate:keys

# Validate translation key format (NO NUMBERS!)
npm run validate:key-format

# Validate all (includes both validations above + structure validation)
npm run validate:all
```

**How `validate:keys` works**:
- Scans all `.jsx` files in `src/pages/`
- Extracts translation keys: `translations.keyName` or `t.keyName`
- Checks if keys exist in corresponding `*_en.json` files
- Reports missing keys that would cause runtime errors
- Automatically runs during `npm run build`

**How `validate:key-format` works**:
- Scans all `*_en.json` files in `public/lang/`
- Checks for numbers in translation keys
- Detects problematic patterns: `crime1`, `stat1Label`, `org2Name`
- Warns about nested object notation (dots in keys)
- Provides suggestions for better naming
- Automatically runs during `npm run build`

**Example output**:
```
🔍 Validating Home.jsx...
   Found 55 translation key(s) used
   Translation file has 52 key(s)
❌ Missing 3 translation key(s) in home_en.json:
   - navigation
   - siteSubtitle
   - siteTitle
```

**File mapping** (JSX → Translation file):
- `Home.jsx` → `home_en.json`
- `ComparativeResearch.jsx` → `comparative_en.json`
- `ScientificErrors.jsx` → `scientific_en.json`
- `JihadStudy.jsx` → `jihad_en.json`
- *(Add new mappings in `scripts/validate-translation-keys.js`)*

**Adding new page validation**:
When creating a new page, update the `mapping` object in `scripts/validate-translation-keys.js`:
```javascript
const mapping = {
  'NewPage.jsx': 'newpage_en.json',
  // ... other mappings
};
```

### Building & Deployment

```bash
# Development
npm run dev                 # Start dev server (http://localhost:5173)

# Production build
npm run build              # Creates dist/ folder
npm run preview            # Preview production build locally

# GitHub Pages deployment
git add .
git commit -m "Description"
git push origin main       # Auto-deploys to GitHub Pages
```

**Build Configuration** (`vite.config.js`):
- Production base: `/quranscopycreatedcontents/`
- Development base: `/`
- `.nojekyll` file required in public/ for GitHub Pages

---

## 📋 Project Conventions

### Component Patterns

**Functional Components Only**:
```jsx
// ✅ CORRECT
export default function MyComponent() {
  const [state, setState] = useState(initial)
  return <div>...</div>
}

// ❌ WRONG - Don't use class components
class MyComponent extends React.Component { }
```

**Styling Approach**:
- CSS files in same directory as components: `Footer.jsx` + `Footer.css`
- Page styles: `src/pages/PageContent.css` (shared across pages)
- Inline styles for dynamic values: `style={{ background: pageConfig.backgroundColor }}`

**File Naming**:
- Components: PascalCase (`Header.jsx`, `LanguageBar.jsx`)
- Utilities: camelCase (`analytics.js`)
- Config: lowercase (`pages.js`)

### Color Scheme & Gradients

Each page has unique gradient defined in `pages.js`:
- Comparative: Purple gradient `#667eea → #764ba2`
- Scientific: Green gradient `#11998e → #38ef7d`
- Expansion: Orange gradient `#ee0979 → #ff6a00`
- Antisemitism: Red gradient `#eb3349 → #f45c43`
- Harm: Dark red `#c31432 → #240b36`
- Migration: Blue gradient `#1e3c72 → #2a5298`
- Terrorist: Dark red `#8b0000 → #dc143c`

**Footer Styling**: Glass-morphism effect
```css
.related-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Code Organization

**Import Order**:
```jsx
// 1. React & third-party
import { Helmet } from 'react-helmet-async'
import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

// 2. Components
import Header from '../components/Header'

// 3. Utils/Config
import { PAGES } from '../config/pages'

// 4. Styles
import './PageContent.css'
```

**File Structure Preferences**:
- Keep related files together (component + CSS)
- Page components in `src/pages/`
- Reusable components in `src/components/`
- Configuration in `src/config/`
- Utilities in `src/utils/`

---

## 🔗 Integration Points

### Language Switching System

**Language Bar Component** (`src/components/LanguageBar.jsx`):
- Displays 8 language options with native names
- Updates URL parameter: `?lang=ar`
- Stored in localStorage: `selectedLanguage`
- Available languages: `en`, `ar`, `de`, `fr`, `hi`, `ml`, `pl`, `ta`

**Language Detection Flow**:
1. Check URL parameter: `?lang=ar`
2. Fallback to localStorage
3. Default to `en`

### Footer Related Pages Feature

**Similarity Algorithm** (`src/components/Footer.jsx`):
```javascript
const calculateSimilarity = (page1, page2) => {
  // Extract keywords from titles/subtitles
  const keywords1 = extractKeywords(page1)
  const keywords2 = extractKeywords(page2)
  
  // Count common words
  const commonWords = keywords1.filter(word => keywords2.includes(word))
  let score = commonWords.length
  
  // Topic-based bonuses
  const topics = {
    violence: ['harm', 'terrorist', 'jihad', 'expansion'],
    religious: ['comparative', 'antisemitism', 'muhammad'],
    migration: ['migration', 'expansion']
  }
  
  // Boost score for same topic category
  // Returns top 3 most similar pages
}
```

Automatically shows 3 related pages based on:
- Common keywords in title/subtitle
- Topic category relationships
- Word frequency matching

### Go to Top Button

**Implementation** (`src/components/Footer.jsx`):
- Fixed position: bottom-right corner
- Smooth scroll behavior
- Gradient button matching page theme
- Shows on all pages via Layout component

### SEO & Meta Tags

**Using react-helmet-async**:
```jsx
<Helmet>
  <title>{translations.title}</title>
  <meta name="description" content={translations.introPara1} />
  <meta property="og:title" content={translations.title} />
  <meta property="og:description" content={translations.subtitle} />
</Helmet>
```

**Best Practices**:
- Set unique title per page
- Use first paragraph as description
- Include Open Graph tags
- Keep titles under 60 characters
- Keep descriptions under 160 characters

### Analytics Integration

**Google Analytics** (`src/utils/analytics.js`):
```jsx
// AnalyticsTracker component in App.jsx
import AnalyticsTracker from './utils/analytics'

// Tracks page views on route changes
<AnalyticsTracker />
```

---

## 🛠️ Troubleshooting & Common Issues

### Translation Issues

**Problem**: Keys missing in some languages
```bash
# Solution: Validate and regenerate
npm run validate:translation-keys
npm run translate:deepl
```

**Problem**: Translation keys with numbers breaking after edits
```json
// Fix: Rename keys to descriptive names
"crime1" → "crimeGenocide"
"org2Name" → "alqaedaName"
```

**Problem**: Runtime errors for missing translation keys
```bash
# Solution: Validate and add missing keys
npm run validate:keys
# Fix the missing keys in the corresponding *_en.json files
```

### Routing Issues

**Problem**: 404 on GitHub Pages refresh
- Cause: Client-side routing vs server-side routes
- Solution: GitHub Pages handles this with `.nojekyll` + 404 fallback

**Problem**: Assets not loading on GitHub Pages
- Check `vite.config.js` base path: `/quranscopycreatedcontents/`
- Verify public folder structure

### Build Issues

**Problem**: Vite build fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run build
```

**Problem**: Large bundle size
- Check for unused imports
- Review image/asset sizes
- Consider code splitting if needed

---

## 📚 Key Files Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/config/pages.js` | Central page config | Adding/editing pages |
| `src/App.jsx` | Main router | Adding routes |
| `src/components/Layout.jsx` | Shared layout wrapper | Changing global structure |
| `src/components/Footer.jsx` | Footer with related pages | Footer features |
| `public/lang/` | Translation JSON files | Content updates |
| `package.json` | Scripts & dependencies | Adding npm scripts |
| `vite.config.js` | Build configuration | Build settings |
| `scripts/validate-translation-keys.js` | JSX→JSON key validator | Adding page mappings |
| `REACT_CONVERSION_INSTRUCTIONS.md` | HTML→JSX rules | Converting pages |
| `TRANSLATION-COMMANDS.md` | Translation workflow | Translation process |

---

## 🎨 Design System

### Typography
- Headings: System font stack with fallbacks
- Body text: Readable line-height for multi-language support
- RTL support: Automatic for Arabic language

### Spacing
- Page margins: Consistent across all pages
- Card spacing: Grid layout with gap
- Section padding: Standardized in `PageContent.css`

### Color Palette
- Gradients: Defined per page in `pages.js`
- Text: High contrast for accessibility
- Links: Underline on hover
- Buttons: Gradient backgrounds with hover effects

### Responsive Design
- Mobile-first approach
- Breakpoints handled in component CSS
- Touch-friendly button sizes
- Readable font sizes on mobile

---

## 🚀 Quick Start for AI Agents

### 🤖 AI-Specific Development Guidelines

**⚠️ CRITICAL: DO NOT RUN `npm run dev` FOR TESTING**

AI agents should **NEVER** start the dev server (`npm run dev`) because:
- ❌ AI cannot interact with browser UI to verify implementation
- ❌ Dev server keeps terminal blocked indefinitely (no useful output for AI)
- ❌ Wastes resources and provides no validation feedback
- ✅ **INSTEAD**: Use Playwright tests to verify implementation

**Correct Testing Workflow for AI:**
```bash
# ✅ CORRECT - Use Playwright to validate implementation
npm run test                  # Run all E2E tests
npm run test:headed           # Run tests with visible browser (for debugging)
npm run test:ui               # Interactive Playwright UI mode

# ❌ WRONG - Don't start dev server
npm run dev                   # AI cannot interact with browser!
```

**Why Playwright Tests?**
- ✅ Tests verify pages render correctly
- ✅ Validates translation loading
- ✅ Checks component structure and styling
- ✅ Provides concrete pass/fail feedback
- ✅ Automated verification without manual browser interaction

---

**🔴 CRITICAL: NEVER REMOVE OR SKIP VALIDATION/TEST SCRIPTS**

When completing any work, AI agents must **ALWAYS**:
- ✅ **Run `npm run build`** - This includes validation checks that catch errors
- ✅ **Run `npm run validate:all`** - Validates translation keys, formats, and structure
- ✅ **Run `npm run test`** - Runs Playwright E2E tests to verify implementation
- ❌ **NEVER** remove or comment out validation scripts in package.json
- ❌ **NEVER** skip validation steps to "save time"
- ❌ **NEVER** assume code works without running tests

**Why This Matters:**
- Build command includes `validate:keys` that catches typos like `hadith2Titl` (missing 'e')
- Validation scripts prevent broken translation keys from reaching production
- Tests catch rendering issues before deployment
- These scripts exist to catch mistakes - skipping them defeats their purpose

**Validation Workflow:**
```bash
# ✅ CORRECT - Complete validation before finishing work
npm run validate:all          # Catch translation key issues
npm run build                 # Build with validation (includes validate:keys)
npm run test                  # Verify implementation works

# ❌ WRONG - Never skip these steps
# "I'll skip validation to finish faster"
# "Build takes too long, I'll skip it"
# "Tests probably pass, no need to run"
```

**If Validation Fails:**
- ❌ Don't remove the validation script
- ❌ Don't comment out the failing check
- ✅ **FIX THE ACTUAL ERROR** (e.g., fix `hadith2Titl` → `hadith2Title`)
- ✅ Re-run validation to confirm fix works

---

**When asked to add content:**
1. ✅ Create translation file with descriptive keys (NO NUMBERS, NO NESTED OBJECTS)
2. ✅ Add to `pages.js` config
3. ✅ Create JSX component with translation loading
4. ✅ Add route to `App.jsx`
5. ✅ Add page mapping to `scripts/validate-translation-keys.js`
6. ✅ Run translation scripts
7. ✅ Run `npm run validate:keys` to check for missing keys
8. ✅ **Test with `npm run test` instead of `npm run dev`**

**When asked to edit content:**
1. ✅ Edit `public/lang/{page}_en.json`
2. ✅ Run `npm run validate:keys` to check JSX uses valid keys
3. ✅ Run `npm run translate:deepl`
4. ✅ Validate with `npm run validate:all`
5. ✅ **Test with `npm run test` to verify rendering**

**When asked to fix styling:**
1. ✅ Check component CSS file first
2. ✅ Check `PageContent.css` for shared styles
3. ✅ Verify page gradient in `pages.js`
4. ✅ **Run `npm run test` to validate visual changes**

**When converting HTML to JSX:**
1. ✅ Read `REACT_CONVERSION_INSTRUCTIONS.md` first
2. ✅ NEVER edit content during conversion
3. ✅ Use standard component pattern
4. ✅ Add to routing and translation system
5. ✅ **Validate with Playwright tests, NOT dev server**

---

## 📞 Project-Specific Terminology

- **Translation File**: JSON file in `public/lang/{page}_{lang}.json`
- **Page Config**: Entry in `src/config/pages.js` PAGES object
- **Layout Context**: Shared state from `useOutletContext()`
- **Translation Key**: JSON key in translation files (MUST be descriptive, NO NUMBERS)
- **Base Path**: `/quranscopycreatedcontents/` for GitHub Pages deployment
- **Related Pages**: Auto-generated similar content links in footer
- **Language Code**: 2-letter ISO code (en, ar, de, fr, hi, ml, pl, ta)

---

## ⚡ Performance Considerations

- **Translation Loading**: Async fetch per language change
- **Bundle Size**: Keep under 500KB for fast loading
- **Image Optimization**: No images currently (removed due to loading issues)
- **Code Splitting**: Not implemented yet, but consider for future
- **Caching**: Browser caching for translation files

---

## 🔐 Security Notes

- No authentication required (public documentation site)
- All content is static JSON
- No user data collection (except analytics)
- API keys (DeepL) stored in local scripts, not in repo

---

**Last Updated**: 2025 (Generated from codebase analysis)  
**Maintainer**: Project owner  
**AI Agent Compatibility**: GitHub Copilot, Claude, GPT-4, and similar coding assistants
**Re use components**: Always use existing UI components for consistency and maintainability, and try to create new components for repeated patterns and future reuse.
