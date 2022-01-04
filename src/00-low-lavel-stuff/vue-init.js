import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import Vue from 'vue'

const regVuePlugins = async () => {
  Vue.use(ElementUI)

  // configure language
  locale.use(lang)

  Vue.config.productionTip = false
}

export {
  regVuePlugins
}
