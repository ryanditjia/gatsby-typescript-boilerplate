/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CreatePagesQuery
// ====================================================

export interface CreatePagesQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  siteUrl: string | null;
}

export interface CreatePagesQuery_site {
  __typename: "Site";
  siteMetadata: CreatePagesQuery_site_siteMetadata | null;
}

export interface CreatePagesQuery {
  site: CreatePagesQuery_site | null;
}
