import request from '@/utils/request';

export default{
    commentLike(data){
      return request({
        url: '/video-comment-likes/'+data,
        method: 'get'
      });
    },
  

}