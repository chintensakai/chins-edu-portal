import { request } from './request'

export default {
    submitLogin(userInfo) {
        return request({
            url: '/service/edu-ucenter/login',
            data: userInfo,
            method: "post"
        })
    },

    getUserInfo() {
        return request({
            url: "/service/edu-ucenter/getUserInfo",
            method: 'get'
        })
    }
}