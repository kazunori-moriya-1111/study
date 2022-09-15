<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about" active-class="current">About</router-link> |
    <router-link to="/article/108">108</router-link> |
    <router-link to="/article/13">13</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.current {
  color: red;
}
</style>
