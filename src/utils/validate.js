/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  // const valid_map = ['admin', 'editor']  //限定只能'admin', 'editor'才可以登录
  // return valid_map.indexOf(str.trim()) >= 0  //如果不是，表达式不成立
  return true;
}
