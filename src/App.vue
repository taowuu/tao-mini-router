<template>
  <div id="app">
    <nav>
      <!-- 路由跳转链接 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>
