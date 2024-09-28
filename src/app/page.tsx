import { repositoryName } from "@/prismicio";
import { components } from "@/slices";
import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient(repositoryName);
  const home = await client.getSingle("homepage");

  return <SliceZone slices={home.data.slices} components={components} />;
}
