import axios from "axios";

axios.defaults.baseURL = "https://react-moments-ci-wt-app-236fb15a8717.herokuapp.com"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true ;