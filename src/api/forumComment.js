import request from '@/utils/request';

export default{
    getCommentById(data){
      return request({
        url: '/forum-comments/'+data,
        method: 'get'
      });
    },
    commentAdd(data){
        return request({
          url: '/forum-comments/add-comment',
          method: 'post',
          data
        });
      },
    commentRemove(data){
        return request({
          url: '/forum-comments/delete-comment/'+data,
          method: 'get'
        });
      },
    commentCount(data){
        return request({
          url: '/forum-comments/forum-comment-Count/'+data,
          method: 'get'
        });
      },
  

}