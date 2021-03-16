import axios from "axios";

axios.interceptors.response.use(
  res => res,
  error => Promise.reject(error.response || { ok: 0, data: error.toString() })
);

axios.interceptors.request.use(config => {
  const jwt = localStorage.getItem("jwt");
  const apikey = localStorage.getItem("key");
  config.headers.common["accept"] = "application/json, text/plain, */*";
  config.headers.common["x-api-key"] = apikey || "Mitrfd3Ev45e3tvzmOYeT7HdMe4jGEpN5rawgNGM";
  if (jwt) config.headers.common["Authorization"] = jwt;
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
