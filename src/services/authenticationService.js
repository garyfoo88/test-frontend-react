import http from "./httpService";

export function login(data, config) {
  return http.post(`${process.env.REACT_APP_API_REST_ENDPOINT}/session/login`, data, config);
}

export function logout() {
  return http.post(`${process.env.REACT_APP_API_REST_ENDPOINT}/session/logout`);
}

export function getSession() {
  return http.get(`${process.env.REACT_APP_API_REST_ENDPOINT}/session`);
}

export function getInfo() {
  return http.get(`${process.env.REACT_APP_API_REST_ENDPOINT}/info`);
}
