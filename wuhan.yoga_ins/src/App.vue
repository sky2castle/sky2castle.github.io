<template>
  <div id="app">
    <HeadNav></HeadNav>
    <div class="app-container">
      <router-view/>
    </div>
    <FooterCon></FooterCon>
  </div>
</template>

<script>
import HeadNav from '@/components/common/HeadNav'
import FooterCon from '@/components/common/FooterCon'

export default {
  name: 'App',
  data: function (){
    return {
      msg: "App"
    }
  },
  components: {
    HeadNav: HeadNav,
    FooterCon: FooterCon
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  min-width: 1280px;
  background-color: #fff;
}
</style>
