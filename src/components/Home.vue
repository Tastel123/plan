<template>
    <!-- <div class="jumbotron">
        <h1>任务追踪</h1>
        <p>
            <strong>
                <router-link to="/time-entries">
                    创建一个任务
                </router-link>
            </strong>
        </p>
    </div> -->
    <div class="task">
        <h1>任务追踪</h1>
        <p>
            <strong>
                <router-link to="/time-entries">
                    创建一个任务
                </router-link>
            </strong>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.task
    padding 48px 60px
    margin-bottom 30px
    color inherit
    background-color #eeeeee
    border-radius 6px
    box-sizing border-box
    h1
        font-size 63px
        margin-top 20px
        margin-bottom 10px
        font-family inherit
        font-weight 500
        line-height 1.1
    p
        margin-bottom 15px
        font-size 21px
        font-weight 200
        margin 0 0 10px
        a
            color #337ab7
            text-decoration none
</style>
