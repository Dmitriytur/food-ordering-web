import axios from "axios";

var BASE_URL = "https://5cd2866d-99bc-4d25-a7f7-ce334a348a5a.mock.pstmn.io";

export default BASE_URL;

export function getPlaces() {
  return axios.get(BASE_URL + "/places");
}

export function getPlace(id) {
  return axios.get(BASE_URL + "/places/" + id);
}
