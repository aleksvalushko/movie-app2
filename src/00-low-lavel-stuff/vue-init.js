import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import HighchartsVue from 'highcharts-vue'
import VueMask from 'v-mask'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import VueSession from 'vue-session'
import SvgIcon from 'vue-svgicon'

const regVuePlugins = async () => {
  Vue.use(ElementUI)
  Vue.use(VueSession)
  Vue.use(VueMask)
  Vue.use(HighchartsVue)
  Vue.use(SvgIcon, {
    tagName: 'svg-icon',
    defaultWidth: '16px',
    defaultHeight: '16px'
  })
  Vue.use(VueClipboard)

  // configure language
  locale.use(lang)

  Vue.config.productionTip = false
  VueClipboard.config.autoSetContainer = true
}

export {
  regVuePlugins
}
