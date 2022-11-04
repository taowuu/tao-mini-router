// 实现插件
// 插件必须有 install 方法将来会被 Vue.use 调用

// 保存 Vue 构造函数避免打包进插件
// 不导入还能用
let Vue

class VueRouter {

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
}
