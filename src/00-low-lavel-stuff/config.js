import Vue from 'vue'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY = '52532197e622cb20ee90156e53dbcb06'
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'

export const createLoading = (title) => {
  const text = title ?? 'Выполняется запрос'
  return Vue.prototype.$loading({
    lock: true,
    text,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

export const errorNotification = async (error) => {
  let msg = error.toString()
  if (error.response?.data != null && error.response?.data?.message != null) {
    msg = error.response.data.message
  }

  Notification.error({
    title: 'Внимание!',
    message: msg
  })
}
