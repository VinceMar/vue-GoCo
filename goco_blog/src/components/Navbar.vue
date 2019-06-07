<template>
    <nav class="navbar navbar-expand-sm bg-dark">
      <img class="navbar-brand" src="../assets/logo.png" width="40px">
      <h2 class="title">网罗头条</h2>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/technews">科技</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/funnews">娱乐</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/sportsnews">体育</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/business">金融</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">关于</router-link>
        </li>
      </ul>
 </nav>
</template>

<style scope>

.navbar .title {
  color: white;
}

.navbar-nav {
  margin-left: 30px;
}

.nav-item {
  padding: 15px;
}

.nav-item .nav-link {
  color: white;
  font-size: 18px;
  transition: .5s;
}

.nav-item .nav-link:hover {
  color: darkgrey;
}

</style>