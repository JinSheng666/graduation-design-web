import request from '@/utils/request';

export default{
    allCopywritings(){
      return request({
        url: '/copy-writings',
        method: 'get'
      });
    },
    addCopywritings(data){
      return request({
        url: '/copy-writings/add-copy-writing',
        method: 'post',
        data
      });
    },
    copywritingsPage(data){
        return request({
          url: '/copy-writings/copy-writing-page',
          method: 'post',
          data
        });
      },
      deleteCopywritings(data){
        return request({
          url: '/copy-writings/delete-copy-writing',
          method: 'delete',
          data
        });
      },
      deleteCopywritingById(data){
        return request({
          url: '/copy-writings/delete-copywriting-byId/'+data,
          method: 'delete'
        });
      },
      updateCopywritings(data){
        return request({
          url: '/copy-writings/update-copy-writing',
          method: 'post',
          data
        });
      },
      userIdCopywritings(){
        return request({
          url: '/copy-writings/userId-copy-writing',
          method: 'get'
        });
      },
      Copywritings(data){
        return request({
          url: '/copy-writings/userId-copy-writing/'+data,
          method: 'get'
        });
      },
      copywritingById(data){
        return request({
          url: '/copy-writings/copy-writing-id/'+data,
          method: 'get'
        });
      },
    
  }