import request from '@/utils/request';

export default{
    getCommentById(data){
      return request({
        url: '/video-comments/'+data,
        method: 'get'
      });
    },
    commentAdd(data){
        return request({
          url: '/video-comments/add-comment',
          method: 'post',
          data
        });
      },
    commentRemove(data){
        return request({
          url: '/video-comments/delete-comment/'+data,
          method: 'get'
        });
      },
    commentDelById(data){
        return request({
            url: '/video-comments/delete-comment-id/'+data,
            method: 'get'
          });
        },

}