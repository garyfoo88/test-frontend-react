import http from "./httpService";
import URI from "urijs";

export function search(term) {
  const uri = new URI(`${process.env.REACT_APP_API_REST_ENDPOINT}/users?`);
  if (term) uri.addSearch({ search: term });
  return http.get(uri.toString());
}
