import { useParams } from "next/navigation";

import { AvailableLocales } from "@/types";

function isValidLocale(locale: string): locale is AvailableLocales {
  return locale === "pt-br" || locale === "en-us";
}

export function useLocale() {
  const params = useParams<{ lang: string }>();

  return {
    currentLocale: isValidLocale(params.lang) ? params.lang : "en-us",
  };
}
