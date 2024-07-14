import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',  //头像
    signature:''  //个签
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_SIGNATURE: (state, signature) => {
    state.signature = signature
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { userName, password, verificationCode} = userInfo
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password:password, verificationCode:verificationCode}).then(response => {
        const { data } = response
        commit('SET_TOKEN', data)
        setToken(data)  //调用函数赋值token
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit }) { //, state 
    return new Promise((resolve, reject) => {
      getInfo().then(response => {  //state.token
        const { data } = response

        if (!data) {
          reject('验证失败，请重新登录。')
        }

        const { userName, headSculpture , signature} = data

        // if(signature === null){
        //   commit('SET_SIGNATURE', '个性签名')
        // }else{
        //   commit('SET_NAME', userName)
        //   commit('SET_AVATAR', headSculpture)
        //   commit('SET_SIGNATURE', signature)
        //   resolve(data)
        // }
        commit('SET_NAME', userName)
        commit('SET_AVATAR', headSculpture)
        commit('SET_SIGNATURE', signature)
        resolve(data)
       
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

