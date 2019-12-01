const env = process.env.NODE_ENV;
const API_BASE_URL = env === 'production' ? 'https://api.torob.com' : 'http://localhost:8000';
const TOROB_HOME = 'https://torob.com/';

const BASE_URLS = {
  torob: `${API_BASE_URL}/`,
};

const urls = {
  amplitude: () => 'https://api.amplitude.com/httpapi/',
  torob: () => TOROB_HOME,
  shopPanel: () => 'https://panel.torob.com',
  ticketingPanel: () => 'https://ticketing.torob.com',
  crowdSourcePanel: () => 'https://matching.torob.com',
  auth: {
    info: () => `${BASE_URLS.torob}v4/user/details/`,
    logout: () => `${BASE_URLS.torob}v4/user/logout/`,
  },
  common: {
    shopsList: () => `${BASE_URLS.torob}v4/internet-shop/list/?format=json`,
    shopDetails: shopId => `${BASE_URLS.torob}v4/internet-shop/details/?id=${shopId}`,
    categoriesList: () => `${BASE_URLS.torob}v4/category/list/?format=json`,
  },
};

export default urls;
