<template>
  <nav class="mainNav">
    <router-link to="/">Yapılacaklar Listesi</router-link> 
    <router-link to="/add">Yeni Görev Ekle</router-link> 
  </nav>
  <router-view/>
</template>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  width: 100%;
  margin: 0px auto;
}
.mainNav{
  text-align: center;
    margin: 40px 0px;
}
.mainNav a{
  text-decoration: none;
  color: grey;
  font-size: 18px;
  margin: 0px 10px;
}
a.router-link-active{
  border-bottom: 2px solid green;
  padding-bottom: 4px; 
}
body{
  background-color: ghostwhite;
}

</style>
