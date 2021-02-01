'use strict'

const parser = require('cron-parser');

const scraperCanRun = async (scraper) => {
  const frequency = parser.parseExpression(scraper.frequency);
  const current_date = parseInt((new Date().getTime() / 1000));
  let next_execution_at = ""

  if (scraper.next_execution_at){
    next_execution_at = scraper.next_execution_at
  }
  else {
    next_execution_at = (frequency.next().getTime() / 1000);
    await strapi.query('scraper').update({
      id: scraper.id
    }, {
      next_execution_at: next_execution_at
    });
  }

  if (next_execution_at <= current_date){
    await strapi.query('scraper').update({
      id: scraper.id
    }, {
      next_execution_at: (frequency.next().getTime() / 1000)
    });
    return true
  }
  return false
}

module.exports = { scraperCanRun }
