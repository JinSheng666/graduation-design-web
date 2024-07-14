import request from '@/utils/request';

export default{
    like(data){
      return request({
        url: '/video-likes/add-video-like/'+data,
        method: 'get'
      });
    },

    VideoCurrentUser(){
      return request({
        url: '/video-likes/video-like-current-user',
        method: 'get'
      });
    },
  

}