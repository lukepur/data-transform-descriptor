import Vue from 'vue'
import Router from 'vue-router'
import DataTransformTester from '@/components/data-transform-tester'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataTransformTester',
      component: DataTransformTester
    }
  ]
})
