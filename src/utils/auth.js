import Cookies from 'js-cookie'

const TokenKey = 'guihuayuan-token??????' // 不知道他们那边有木有弄token

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
