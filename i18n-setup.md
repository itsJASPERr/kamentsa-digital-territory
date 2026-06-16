# Internationalization (i18n) Setup Guide

This project uses a custom i18n system to support multiple languages (English and Spanish). The implementation is lightweight and maintainable.

## Project Structure

```
src/
├── i18n/
│   ├── translations.ts      # All translation strings
│   └── utils.ts             # Helper functions
├── components/
│   ├── HomePage.astro       # Main page component (shared)
│   └── LanguageSwitcher.astro # Language switcher UI
├── pages/
│   ├── index.astro          # Default (English)
│   ├── en/
│   │   └── index.astro      # English version
│   └── es/
│       └── index.astro      # Spanish version
```

## How It Works

### 1. **Translations** (`src/i18n/translations.ts`)
All content is stored in a centralized object with English (`en`) and Spanish (`es`) variants:

```typescript
export const translations = {
  en: {
    nav: { donateNow: "Donate Now" },
    hero: { title: "Weaving Sacred Memory" },
    // ...
  },
  es: {
    nav: { donateNow: "Donar Ahora" },
    hero: { title: "Tejiendo Memoria Sagrada" },
    // ...
  }
}
```

### 2. **Translation Function** (`src/i18n/utils.ts`)
The `t()` function retrieves translated strings:

```typescript
t('en', 'nav.donateNow')  // Returns: "Donate Now"
t('es', 'nav.donateNow')  // Returns: "Donar Ahora"
```

### 3. **Shared Page Component** (`src/components/HomePage.astro`)
The main page content is in a reusable component that accepts a `lang` prop:

```astro
---
interface Props {
  lang: Language;
}
---
<h2>{t(lang, 'hero.title')}</h2>
```

### 4. **Language Routes**
- `/` → English (default)
- `/en/` → English version
- `/es/` → Spanish version

### 5. **Language Switcher**
The `LanguageSwitcher.astro` component provides links to switch languages:
- Located in top-right corner
- Uses relative URL manipulation to maintain current section
- Styled to match the site design

## Adding New Content

### To add a new translatable string:

1. Open `src/i18n/translations.ts`
2. Add the key to both `en` and `es` objects:

```typescript
// Example: Adding a testimonial section
testimonials: {
  heading: "Community Voices",  // English
  // ...
}

// Spanish equivalent
testimonials: {
  heading: "Voces de la Comunidad",
  // ...
}
```

3. Use it in a component:

```astro
<h3>{t(lang, 'testimonials.heading')}</h3>
```

### To add a new page in multiple languages:

1. Create the page at `src/pages/en/new-page.astro`
2. Create `src/pages/es/new-page.astro`
3. Both can import the same component or have separate implementations
4. Add translations for any new content

## Fallback Behavior

- If a translation key is missing in Spanish, it will fall back to English
- If a key doesn't exist in either language, the key path is returned

## Supported Languages

Currently configured: English (`en`) and Spanish (`es`)

To add a new language (e.g., French):
1. Add a new language object in `translations.ts`
2. Add directory `src/pages/fr/`
3. Create `src/pages/fr/index.astro` using `lang="fr"`
4. Update the language switcher logic if needed

## Styling

The language switcher uses custom styling in `src/components/LanguageSwitcher.astro`. It positions the switcher in the top-right corner with:
- Responsive design
- Hover effects matching the site's color scheme
- Fixed positioning that stays visible while scrolling

## Performance

- Translations are pre-rendered at build time
- No runtime translation library needed
- Separate HTML files for each language (SEO friendly)
- Language is part of the URL structure for proper routing

## Future Enhancements

Possible improvements:
- Add more languages
- Implement language detection based on browser preferences
- Add client-side translation switching
- Integrate with a CMS for easier translation management
- Add language-specific metadata for SEO

## Testing

Test the translations:

```bash
# Build the project
npm run build

# Check generated files
ls dist/en/index.html  # English version
ls dist/es/index.html  # Spanish version
ls dist/index.html     # Default (English)

# Run dev server
npm run dev
# Visit: http://localhost:4321/
#        http://localhost:4321/en/
#        http://localhost:4321/es/
```

## Troubleshooting

**Translations not appearing?**
- Check that the key path is correct in `translations.ts`
- Verify the language code is being passed correctly to the `t()` function
- Look for console errors in browser dev tools

**Language switcher not working?**
- Ensure current path includes language code (`/en/` or `/es/`)
- Check browser console for JavaScript errors

**Build errors?**
- Verify all imports are correct
- Run `npm install` to ensure dependencies are installed
- Clear `.astro` cache: `rm -rf .astro`
