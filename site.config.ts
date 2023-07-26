import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b121b4be537a4c9a8f9df97562654cf7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Freelance desarrollador de software en Barcelona. PHP, Symfony, Wordpress, React, NextJs, Flutter',
  domain: 'victordel.com',
  author: 'Victor',

  // open graph metadata (optional)
  description: 'Freelance Desarrollador de software en Barcelona. Desarrollo de páginas web y aplicaciones móviles. Desarrollador Symfony, React, Next, Flutter',
  language: 'es',
  // social usernames (optional)
  // twitter: '',
  // github: 'transitive-bullshit',
  linkedin: 'vicalle',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/contacto': '1de97bc744fc4e2d8912c7909827a813',
    '/blog': '316aca82457142768e83ec0f985c4a4d'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Contacta',
      pageId: '1de97bc744fc4e2d8912c7909827a813'
    },
    {
      title: 'Blog',
      pageId: '316aca82457142768e83ec0f985c4a4d'
    },
  ]
})
