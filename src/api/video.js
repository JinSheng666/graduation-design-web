import request from '@/utils/request';

export default{
  getVideoByUserId(data){
      return request({
        url: '/videos/video-userId/'+data,
        method: 'get'
      });
    },
    videoAdd(data){
      return request({
        url: '/videos/add-video',
        method: 'post',
        data
      });
    },
    videoRemove(data){
      return request({
        url: '/videos/video-file-delete/'+data,
        method: 'get'
      });
    },
    search(data){
      return request({
        url: '/videos/search',
        method: 'post',
        data
      });
    },
    getVideoById(data){
      return request({
        url: '/videos/find-video-id/'+data,
        method: 'get'
      });
    },
    delVideoById(data){
      return request({
        url: '/videos/delete-video/'+data,
        method: 'delete'
      });
    },
    isPrivacy(data){
      return request({
        url: '/videos/is-privacy/'+data,
        method: 'get'
      });
    },
    updateVideo(data){
      return request({
        url: '/videos//update-video',
        method: 'post',
        data
      });
    },
    getVideoByVideoId(data){
      return request({
        url: '/videos/find-video-id/'+data,
        method: 'get'
      });
    },
    privacyVideoById(data){
      return request({
        url: '/videos/privacy-video-userId/'+data,
        method: 'get'
      });
    },

}