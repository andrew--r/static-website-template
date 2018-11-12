module.exports = (
  { currentPage, siteData, getAssetUrl, getAbsoluteUrl },
  content = '',
) => {
  const title = currentPage.metadata.title || siteData.title;
  const description = currentPage.metadata.title || siteData.description;

  return `
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>${title}</title>
    <meta name="description" content="${description}">

    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">

    <link rel="stylesheet" href="${getAssetUrl('main.css')}">
    <link rel="icon" type="image/png" href="${getAssetUrl('favicon.png')}">

    <link rel="canonical" href="${getAbsoluteUrl(currentPage.url)}">

    ${content}
  </head>
  `;
};
