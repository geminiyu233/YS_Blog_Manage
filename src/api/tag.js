import request from '@/utils/request'

export function getTags() {
  return request({
    url: '/tag/all',
    method: 'get'
  })
}
