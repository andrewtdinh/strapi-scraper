const main = async () => {
  // Fetch the correct scraper thanks to the slug
  const slug = "jamstack-org"
  const scraper = await strapi.query('scraper').findOne({
    slug: slug
  });

  console.log(scraper);

  // If the scraper doesn't exists, is disabled or doesn't have a frequency then we do nothing
  if (scraper == null || !scraper.enabled || !scraper.frequency)
    return
}

exports.main = main;
