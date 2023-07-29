// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for About documents
 */
interface AbstractDocumentData {
  /**
   * abstract field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: abstract.abstract
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  abstract: prismic.KeyTextField;

  /**
   * graduation field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: abstract.graduation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  graduation: prismic.KeyTextField;

  /**
   * university field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: abstract.university
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  university: prismic.KeyTextField;

  /**
   * city field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: abstract.city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  city: prismic.KeyTextField;

  /**
   * curiculum field in *About*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: abstract.curiculum
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  curiculum: prismic.LinkToMediaField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `abstract`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AbstractDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<AbstractDocumentData>,
    "abstract",
    Lang
  >;

/**
 * Content for Experience documents
 */
interface ExperienceDocumentData {
  /**
   * company_logo field in *Experience*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.company_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  company_logo: prismic.ImageField<never>;

  /**
   * title field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * start_date field in *Experience*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.start_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  start_date: prismic.DateField;

  /**
   * end_date field in *Experience*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.end_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  end_date: prismic.DateField;

  /**
   * description field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Experience document from Prismic
 *
 * - **API ID**: `experience`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienceDocumentData>,
    "experience",
    Lang
  >;

/**
 * Content for Links documents
 */
interface LinksDocumentData {
  /**
   * instagram field in *Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: links.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;

  /**
   * linkedin field in *Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: links.linkedin
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin: prismic.LinkField;

  /**
   * github field in *Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: links.github
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github: prismic.LinkField;
}

/**
 * Links document from Prismic
 *
 * - **API ID**: `links`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LinksDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<LinksDocumentData>, "links", Lang>;

export type AllDocumentTypes =
  | AbstractDocument
  | ExperienceDocument
  | LinksDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AbstractDocument,
      AbstractDocumentData,
      ExperienceDocument,
      ExperienceDocumentData,
      LinksDocument,
      LinksDocumentData,
      AllDocumentTypes,
    };
  }
}
