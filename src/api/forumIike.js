import request from '@/utils/request';

export default{
    like(data){
      return request({
        url: '/forum-likes/add-forum-like/'+data,
        method: 'get'
      });
    },
    forumLikeCont(data){
      return request({
        url: '/forum-likes/forum-like-count/'+data,
        method: 'get'
      });
    },

    ForumCurrentUser(){
      return request({
        url: '/forum-likes/forum-like-current-user',
        method: 'get'
      });
    },
  

}