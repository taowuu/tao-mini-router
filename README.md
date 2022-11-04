# tao-router

## router 做了什么
- router 是一个插件
- 创建 router 实例
- 添加到 vue 配置项
- 不需要注册即可使用 link view（全局注册
- 实现 install 方法注册 router 到 vue 中

## 第一步初始化环境
- `npm install`
- `npm run serve`
- 初始项目中我修改了以下
    - 新建 tao-router 存放我们自己的实现
    - mian 中引入我们自己的 tao-router
    - 删除了样式
- 移步到第二步分支

## 第二步
- 完成插件功能和两个组件
- 插件必须有 install 方法将来会被 Vue.use 调用
- 在 `tao-router.js` 实现插件功能
- install 中挂载 $router
- 移步到第三步分支

## 第三步
- 注册实现 link view 组件
- link 根据组件传入的值渲染
- view 响应式渲染当前路由对应的组件
- 此时可运行看到效果

## 完成