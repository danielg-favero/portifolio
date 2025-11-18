import { AvailableLocales, Locales } from "@/types";
import { PrismicNextLink } from "@prismicio/next";

interface LanguageSwitcherProps {
  locales: Locales[];
}

const localeLabels: Record<AvailableLocales, string> = {
  "en-us": "EN",
  "pt-br": "BR",
};

const localeIcons: Record<AvailableLocales, string> = {
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
            className="p-2"
          >
            {localeLabels[locale.lang as keyof typeof localeLabels] ||
              locale.lang}
          </PrismicNextLink>
        </li>
      ))}
    </ul>
  </div>
);
