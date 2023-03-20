import Vue from 'vue'
import App from './App.vue'
// import {Viewer} from 'cesium'
// import 'cesium/Build/Cesium/Widgets/widgets.css'

Vue.config.productionTip = false
// const viewer = new Viewer('cesiumContainer')

new Vue({
  render: h => h(App),
}).$mount('#app')
