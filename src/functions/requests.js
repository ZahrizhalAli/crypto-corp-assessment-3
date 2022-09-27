import axios from 'axios';

export const getCoinHistories = async (limit) => {
  return await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${limit}`
  );
};

export const registerTelegram = async (text) => {
  return await axios.post(
    `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_API}/sendMessage?chat_id=1397767439&text=${text}`
  );
};
