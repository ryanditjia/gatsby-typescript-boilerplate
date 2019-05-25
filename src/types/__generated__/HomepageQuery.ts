/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomepageQuery
// ====================================================

export interface HomepageQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface HomepageQuery_site {
  __typename: "Site";
  siteMetadata: HomepageQuery_site_siteMetadata | null;
}

export interface HomepageQuery {
  site: HomepageQuery_site | null;
}
