/**
 * local数据存储的工具函数封装
 store插件封装
 */
import store from 'store'

//保存指定key和value的数据
function set(key,value) {
  store.set(key,value)
}

//获取指定key的对应的值，如果没有，返回指定的默认值
function get(key,defaultValue) {
  if (defaultValue===undefined) {
    throw new Error('get()必须指定默认值')
  }
  return store.get(key,defaultValue)
}

//删除指定key的数据,如果不穿删除所有
function remove(key) {
  if (key) {
    store.remove(key)
  }else{
    store.clearAll()
  }
}

export default {
  set,
  get,
  remove,
  KEYS:{
    USER_KET:'user_key',
    TOKEN_KEY:'token_key'
  }
}