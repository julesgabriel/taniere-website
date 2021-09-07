import axios from "axios";

export default function GetDataFetchedFromApi(route, params = "") {
    return axios.get(`${process.env.VUE_APP_API_URL}/${route}${params !== "" ? "/" + params : params}`)
}