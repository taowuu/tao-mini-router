// 实现插件
// 插件必须有 install 方法将来会被 Vue.use 调用

// 保存 Vue 构造函数避免打包进插件
// 不导入还能用
let Vue

class VueRouter {
    constructor(options) {
        this.$options = options
        // 响应化
        // 将来变化 view render 能再次执行
        // this.current = '/'
        Vue.util.defineReactive(
            this,
            "current",
            window.location.hash.slice(1) || "/"
        )
        // 监听 hash
        window.addEventListener("hashchange", () => {
            console.log('this current path', this.current)
            this.current = window.location.hash.slice(1)
        })
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
            let component = null
            // 去路由表找到当前组件对应的路由
            const route = this.$router.$options.routes.find(route => route.path === this.$router.current)
            if(route) {
                component = route.component
            }
            return h(component)
        }
    })
}

export default VueRouter
