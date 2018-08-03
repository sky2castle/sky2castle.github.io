<template>
    <div id="app">
        <nav>
          <div class="nav_con">
            <div class="nav_lt">
              <div class="logo_con">
                <img src="./assets/images/logo.png" title="logo" alt="logo">
                <div class="page_title_con">
                  <h2>IDyoga瑜伽</h2>
                  <p>家庭健康客流服务平台</p>
                </div>
              </div>
            </div>
            <div class="nav_rt">
              <div class="nav_li">
                <ul>
                  <router-link tag="li" :to="{path: tag.url}" v-for="tag in page_tag" v-bind:class="{active: tag.isActive}">
                    <a>{{tag.name}}</a>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div class="page_container page_home">
          <router-view>
            
          </router-view>
        </div>
        <footer :class='[isIndex ? "index_bg" : ""]'>
          <div class="footer_con">
            <div class="footer_item footer_lt">
              <div class="item_t">合作伙伴</div>
              <div class="item_list_con">
                <ul>
                  <li>武汉预约协会</li>
                  <li>湖南省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>江西省瑜伽协会</li>
                  <li>澳大利亚亚健康与营养协会</li>
                </ul>
              </div>
            </div>
            <div class="footer_item footer_ct">
              <div class="item_t">联系方式</div>
              <div class="contact_con">
                <p>办公地址：</p>
                <p>广州市天河区棠安路288号天盈创意园2042房</p>
                <p>联系电话：</p>
                <p>020-85525496</p>
              </div>
            </div>
            <div class="footer_item footer_rt">
              <div class="item_t">官方公众号</div>
              <div class="qr_code_con">
                <div class="qr_code_item qr_code_lt">
                  <img src="./assets/images/code.png" alt="">
                  <p>IDyoga订阅号</p>
                </div>
                <div class="qr_code_item qr_code_rt">
                  <img src="./assets/images/code.png" alt="">
                  <p>IDyoga服务号</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
</template>

<script>
import home from './component/home.vue'
export default {
    name: 'app',
    data () {
        return {
          msg: '瑜伽大学',
          page_tag: [
              {
                  'url': '/home',
                  'name': '首页',
                  'isActive': true
              },
              {
                  'url': '/intro',
                  'name': '公司简介',
                  'isActive': false
              },
              {
                  'url': '/service',
                  'name': '产品服务',
                  'isActive': false
              },
              {
                  'url': '/plat',
                  'name': '平台合作',
                  'isActive': false
              },
              {
                  'url': '/clg',
                  'name': '瑜伽大学',
                  'isActive': false
              },
              {
                  'url': '/act',
                  'name': '活动花絮',
                  'isActive': false
              },
              {
                  'url': '/zpyc',
                  'name': '诚聘英才',
                  'isActive': false
              }
          ],
          isIndex: true
        }
    },
    components: {
      home 
    },
    watch:{
      $route(to,from){
        if(to.path != '/home'){
          this.isIndex = false;
        }
        this.page_tag.forEach(function(tag){
          if(tag.url == to.path){
            tag.isActive = true;
          }else{
            tag.isActive = false;
          }
        });
      }
    },
    created: function(){
      var pathname = location.pathname;
      this.page_tag.forEach(function(tag){
        if(tag.url == pathname){
          tag.isActive = true;
        }else{
          tag.isActive = false;
        }
      });
    }
}
</script>
<style>
/*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}*/
</style>

