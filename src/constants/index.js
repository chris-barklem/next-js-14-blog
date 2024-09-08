export const settings = {
    siteName: process.env.SITE_NAME,
    siteLogo: process.env.SITE_LOGO
}
export const mainMenu = [
    {
        icon: "users",
        route: "/users",
        label: "Users",
        loggedInRequired: false,
    },
    {
      icon: "communities",
      route: "/communities",
      label: "Communities",
      loggedInRequired: false,
    },
    {
        icon: "organizations",
        route: "/organizations",
        label: "Organizations",
        loggedInRequired: false,
      },
  ];