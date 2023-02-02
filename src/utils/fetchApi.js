import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

/*
const options = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': '9e5e31e78dmshb9ff2979ca5d1afp18ac02jsn3356fbf0ee59',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};
*/

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "9e5e31e78dmshb9ff2979ca5d1afp18ac02jsn3356fbf0ee59",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com"
    }
  });
  return data;
};
