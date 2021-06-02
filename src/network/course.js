import { request } from './request'

const courses_base_url = 'service.course/edu-course'

// 获取首页热门课程
export function getHotCourses() {
    return request({
        method: 'get',
        url: courses_base_url + "/hot-courses"
    })
}
