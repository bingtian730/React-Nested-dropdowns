// this json is for the country , state, site_name drop down, later can be modified //

export const siteLocations = [
  {
    region: "us",
    country_code: "us",
    url: "google.co.in",
    languages: [
      {
        name: "ca",
        code: "en",
        sites: [{ site_name: "site_ca_1" }, { site_name: "site_ca_2" }],
      },
      {
        name: "wa",
        code: "hi",
        sites: [{ site_name: "site_wa_1" }, { site_name: "site_wa_2" }],
      },
    ],
  },
  {
    region: "canada",
    country_code: "ca",
    url: "google.ae",
    languages: [
      {
        name: "ontario",
        code: "ar",
        sites: [{ site_name: "site_on_1" }, { site_name: "site_on_2" }],
      },
      {
        name: "british columbia",
        code: "en",
        sites: [{ site_name: "site_bc_1" }, { site_name: "site_bc_2" }],
      },
    ],
  },
];
