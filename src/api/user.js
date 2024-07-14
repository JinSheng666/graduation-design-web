import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export default{
  userAll(){
    return request({
      url: '/users/userAll',
      method: 'get'
      
    });
  },
  addUser(data){
    return request({
      url: '/users/addUser',
      method: 'post',
      data
    });
  },
  loginUser(){
    return request({
      url: '/users/loginUser',
      method: 'get'
    });
  },
  getPersonalUser(data){
    return request({
      url: '/users/getPersonalUser/'+data,
      method: 'get'
    });
  },
  userUpdate(data){
    return request({
      url: '/users/updateUser',
      method: 'post',
      data
    });
  },
  getUserId(){
    return request({
      url: '/users/getUserIdByToken',
      method: 'get'
    });
  },
  updatePassword(data){
    return request({
      url: '/users/updatePassword',
      method: 'post',
      data
    });
  },
  jiaoyanPassword(data){
    return request({
      url: '/users/updatePassword/'+data,
      method: 'get'
    });
  },
  currentUser(){
    return request({
      url: '/users//currentUser',
      method: 'get'
    });
  },
  
}


