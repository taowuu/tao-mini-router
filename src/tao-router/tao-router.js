// 实现插件
// 插件必须有 install 方法将来会被 Vue.use 调用

// 保存 Vue 构造函数避免打包进插件
// 不导入还能用
let Vue

class VueRouter {
    constructor($options) {
        this.$
    }
}

VueRouter.install = function(_Vue) {
    Vue = _Vue

    // 挂载 $router
    // this.$router.push()
    // use 执行时刻早与 router 实例的创建
    // 全局混入延迟 $router 的挂载至 router 实例已经创建
    Vue.mixin({
        beforeCreate() {
            // 每个组件创建实例时都会调用
            // 根实例才有该选项
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        }
    })

    // 注册实现 link view 组件
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                require: true
            }
        },
        render(h) {
            // 创建 href 属性和使用插槽来渲染 a 标签内的值
            return h('a', {attrs: {href: '#' + this.to}}, this.$slots.default)
        }
    })

    Vue.component('router-view', {
        render(h) {
            // 获取当前路由对应的组件

            return h(null)
        }
    })
}

export default VueRouter
