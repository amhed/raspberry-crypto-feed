const CoinGecko = require('coingecko-api');
const { Colors } = require('./constants');

const CoinGeckoClient = new CoinGecko();

const currencyList = [
  { symbol: 'BTC', id: 'bitcoin', color: Colors.orange },
  { symbol: 'ETH', id: 'ethereum', color: Colors.blue },
  { symbol: 'HNT', id: 'helium', color: Colors.cyan },
  { symbol: 'ICX', id: 'icon', color: Colors.red },
  { symbol: 'AR', id: 'arweave', color: Colors.white },
  { symbol: 'SUSHI', id: 'sushi', color: Colors.red },
  { symbol: 'RUNE', id: 'rune', color: Colors.green },
]

const refreshFeed = async() => {
  return await CoinGeckoClient.simple.price({
    ids: currencyList.map(c => c.id),
    vs_currencies: ['usd'],
  });
};

const currentPrices = [];
const getNextTickerPrice = async() => {
  if (currentPrices.length === 0) {
    const response = await refreshFeed();
    for (const [key, value] of Object.entries(response.data)) {
      const currency = currencyList.find(c => c.id === key);
      currentPrices.push({
        key: currency.symbol, 
        value: value.usd,
        color: currency.color
      });
    }
  }

  return currentPrices.pop();
}

module.exports = { refreshFeed, getNextTickerPrice };


// (async() => {
//   const feed = await refreshFeed();
//   console.log(feed);
// })();