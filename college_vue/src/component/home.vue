<template>
    <div id="home">
      <div class="page_banner home_banner">
        {{ msg }}
      </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
          msg: '首页banner'
        }
    }
}
</script>
<style>
</style>