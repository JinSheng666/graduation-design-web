import request from '@/utils/request';

export default{
    commentLike(data){
      return request({
        url: '/forum-comment-likes/'+data,
        method: 'get'
      });
    },
    getCommentLikeCount(data){
      return request({
        url: '/forum-comment-likes/comment-like-count/'+data,
        method: 'get'
      });
    },
  

}