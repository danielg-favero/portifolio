import { Header } from "@/components";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { repositoryName } from "@/prismicio";
import { components } from "@/slices";
import { getLocales } from "@/utils";
import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient(repositoryName);
  const home = await client.getSingle("homepage", { lang });
  const header = await client.getSingle("page_header", { lang });

  const locales = await getLocales(home, client);

  return (
    <>
      <LanguageSwitcher locales={locales} />
      <Header links={header.data.links} />
      <SliceZone slices={home.data.slices} components={components} />;
    </>
  );
}
