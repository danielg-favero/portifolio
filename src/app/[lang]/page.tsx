import { cache } from "react";

import { Header } from "@/components";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { repositoryName } from "@/prismicio";
import { components } from "@/slices";
import { AvailableLocales, Locales } from "@/types";
import { getLocales } from "@/utils";
import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

const client = createClient(repositoryName);

const getHome = (lang: AvailableLocales) =>
  cache(async () => await client.getSingle("homepage", { lang }));
const getHeader = (lang: AvailableLocales) =>
  cache(async () => await client.getSingle("page_header", { lang }));

export default async function Home({
  params: { lang },
}: {
  params: { lang: AvailableLocales };
}) {
  const getLocatedHome = getHome(lang);
  const getLocatedHeader = getHeader(lang);

  const home = await getLocatedHome();
  const header = await getLocatedHeader();

  const locales = (await getLocales(home, client)) as Locales[];

  return (
    <>
      <LanguageSwitcher locales={locales} />
      <Header links={header.data.links} />
      <SliceZone slices={home.data.slices} components={components} />;
    </>
  );
}
