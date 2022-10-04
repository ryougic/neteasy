import axios from "axios";
const instance = axios.create({
    timeout:20000,
    baseURL:'/api'
})

instance.interceptors.request.use(config=>{
    let token = window.localStorage.getItem('token')
    if(token){
        config.headers['X-Nideshop-Token']=token
    }
    return config
})

instance.interceptors.response.use(config=>{
    return config.data
})

export default instance