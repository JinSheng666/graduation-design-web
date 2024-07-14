import request from '@/utils/request';

export default{
    findPopular(){
      return request({
        url: '/populars',
        method: 'get'
      });
    },
    popularById(data){
        return request({
          url: '/populars//popular-id/'+data,
          method: 'get'
        });
      },
  

}