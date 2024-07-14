import request from '@/utils/request';

export default{
    forum(data){
      return request({
        url: '/forums/search',
        method: 'post',
        data
      });
    },
    addForum(data){
      return request({
        url: '/forums/add-forum',
        method: 'post',
        data
      });
    },
    removeFile(params){
      return request({
        url: '/forums/img-video-delete/'+params,
        method: 'get'
      })
    },
    upload(data){
      return request({
        url: '/forums/img-video-upload',
        method: 'post',
        data
      });
    },
    getForumByUserId(data){
      return request({
        url: '/forums/find-forum-userId/'+data,
        method: 'get'
      });
    },
    updatePrivacyById(data){
      return request({
        url: '/forums/isPrivacy-id/'+data,
        method: 'get'
      });
    },
    forumDelById(data){
      return request({
        url: '/forums/forum-delete-id/'+data,
        method: 'delete'
      });
    },
    updateForum(data){
      return request({
        url: '/forums/update-forum',
        method: 'post',
        data
      });
    },
    getForumById(data){
      return request({
        url: '/forums/select-id/'+data,
        method: 'get'
      });
    },
    privacyForumById(data){
      return request({
        url: '/forums/privacy-forum-userId/'+data,
        method: 'get'
      });
    },
  
  

}