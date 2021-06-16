import { request } from './request'

export default {
    submitLogin(userInfo) {
        return request({
            url: '/eduucenter/edu-ucenter/login',
            data: userInfo,
            method: "post"
        })
    },

    getUserInfo() {
        return request({
            url: "/eduucenter/edu-ucenter/getUserInfo",
            method: 'get'
        })
    }
}