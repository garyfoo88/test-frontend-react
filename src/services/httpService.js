import axios from "axios";

axios.interceptors.response.use(
  res => res,
  error => Promise.reject(error.response || { ok: 0, data: error.toString() })
);

axios.interceptors.request.use(config => {
  const jwt = localStorage.getItem("jwt");
  const apikey = localStorage.getItem("key") || 'Mitrfd3Ev45e3tvzmOYeT7HdMe4jGEpN5rawgNGM';
  if (jwt) config.headers.common["Authorization"] = jwt;
  if (apikey) config.headers.common["x-api-key"] = apikey;
  return config;
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  options: axios.options,
  axios
};
