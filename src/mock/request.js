import axios from 'axios'

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const isMock = true


axios.interceptors.request.use(
    config => {
        //console.log('Request To be used');
        return config;
    },
    err => {
        return Promise.reject(err);//请求错误时，直接结束
    });

const request = {
    get: (url, params) => {
        url = url || ''
        params = params || {}
        return new Promise((resolve, reject) => {

            axios.get(url, {
                params: params
            }).then(function (res) {
                resolve(res.data)
            }).catch(function (err) {
                reject(err)
            })
        })
    },
    post: (url, params) => {
        url = url || ''
        params = params || {}
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(function (res) {
                resolve(res.data)
            }).catch(function (err) {
                reject(err)
            })
        })
    }
}
export { request }
