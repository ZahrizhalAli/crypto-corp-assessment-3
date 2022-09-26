import axios from 'axios';

export const getCoinHistories = async (limit) => {
  return await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${limit}`
  );
};
