<template>
  <div id="wrapper">
      <nav class="navbar navbar-default">
        <div class="container">
          <a href="#" class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            计划板
          </a>
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/home" href="#">首页</router-link>
            </li>
            <li>
              <router-link to="/time-entries" href="#">计划列表</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        
        <div class="col-sm-3">
          <Sidebar></Sidebar>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>

</template>

<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style lang="stylus" scoped>
// .navbar
//       position: relative;
//     min-height: 50px;
//     margin-bottom: 20px;
//     border: 1px solid transparent;

</style>
