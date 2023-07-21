const ENDPOINT_API = 'https://economia.awesomeapi.com.br/json/all';

const getCoins = async () => {
  try {
    const response = await fetch(ENDPOINT_API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCoins;
