export var BASE_URL = "http://127.0.0.1:8000/";

export const API_BASE_URL = BASE_URL;

export const FARM_URL = {
  register: API_BASE_URL + "accounts/register/",
  login: API_BASE_URL + "accounts/login/",
  marketplace: API_BASE_URL + "api/marketplaceproducts/",
  govProduct: API_BASE_URL + "api/governmentproducts/",
  govProductCat: API_BASE_URL + "api/governmentproduct-category/",
  marketplaceCat: API_BASE_URL + "api/marketplaceproduct-category/",
};
