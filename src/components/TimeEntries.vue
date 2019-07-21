<template>
  <div>
    <router-link 
    to="/time-entries/log-time" 
    class="btn btn-primary"
    v-if="$route.path !== '/time-entries/log-time'"
    >创建</router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
        <p v-if="!plans.length">
            <strong>还没有任何计划</strong>
        </p>

    </div>
  </div>
</template>

<script>
export default {
  name : 'TimeEntries',
  computed: {
    plans() {
      return this.$store.state.list
    }
  }

}
</script>

<style>
</style>
