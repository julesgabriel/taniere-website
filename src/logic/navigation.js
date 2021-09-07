import router from "../router";

export default function navigate(route, path = "") {
    router.push({path: `/${route}${path !== "" ? "/" + path : path}`})
}