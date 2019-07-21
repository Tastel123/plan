<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input type="date" class="form-control" placeholder="Date" v-model="date">
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" placeholder="Hours" v-model="totalTime">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" placeholder="Comment" v-model="comment">
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
export default {
    name: 'LogTime',
    data() {
        return {
            date: '',
            totalTime: '',
            comment: ''
        }
    },
    methods: {
        save(){}
    },
};
</script>

<style>
</style>
