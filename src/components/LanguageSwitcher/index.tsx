import { PrismicNextLink } from "@prismicio/next";

interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
}

const localeLabels = {
  "en-us": "EN",
  "pt-br": "BR",
};

const localeIcons = {
  "en-us": "🇺🇸",
  "pt-br": "🇧🇷",
};

export const LanguageSwitcher = ({ locales }: LanguageSwitcherProps) => (
  <div className="flex flex-wrap gap-3 absolute z-10 top-4 left-4 lg:top-8 lg:left-8">
    <span aria-hidden>
      {localeIcons[locales[0].lang as keyof typeof localeLabels]}
    </span>
    <ul className="flex flex-wrap gap-3">
      {locales.map((locale) => (
        <li key={locale.lang} className="first:font-semibold text-neutral-100">
          <PrismicNextLink
            href={locale.url}
            locale={locale.lang}
            aria-label={`Change language to ${locale.lang_name}`}
          >
            {localeLabels[locale.lang as keyof typeof localeLabels] ||
              locale.lang}
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  </div>
);
