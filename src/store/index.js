import Vue from 'vue'
import Vuex from 'vuex'
import requie from "../network";
import Cookie from 'js-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
    token:'',
    messagerecord:[],
  },
  mutations: {
    pushuser(state,payload){
      state.user.push(...payload) 
      state.user.forEach((item) => {
          item.sex = item.sex == 0 ? "男" : "女";
        });
    },
    setToken(state,val){
      state.token=val
      Cookie.set('token',val)
    },
    clearToken(state){
      state.token=''
      Cookie.remove('token')
    },
    pushMessage(state,payload){
      state.messagerecord.push(payload)
    }
  },
  actions: {
    getuser(context){
      requie({
        url: "/user/getData",
      }).then((res) => {
        context.commit("pushuser",res.data.getUserData.data.List)
      });
    }
  },
  modules: {
  }
})
