<template>
    <div id="clg">
      <div class="clg_container">
        <div class="clg_banner">
          <div class="page_banner">
            <img src="../assets/images/bg_banner.png" alt="bg_banner">
          </div>
        </div>
        <div class="clg_taglist_con">
          <div class="clg_taglist">
            <div class="clg_tags">
              <ul>
                <li v-for="tag in clg_tag_list" v-bind:class="{active: tag.isActive}" @click="tabChange(tag.url)"><a href="javascript:;">· {{tag.name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clg_bd_con">
          <div class="clg_bd">
            <div class="cgl_list_con" id="cgl_list_con" v-show="hasLeftTag">
              <div class="cgl_list">
                <ul>
                  <li v-for="tag in leftTag" v-bind:class="{active: tag.isTag}" @click="leftTagChange(tag.pos)">{{tag.name}}</li>
                </ul>
              </div>
            </div>
            <div class="clg_bd_l">
              <div class="clg_bd_l_img">
                <img src="../assets/images/cgl_l.png" alt="cgl_l">
              </div>
            </div>
            <div class="clg_bd_r">
              <div class="clg_iframe">
                <div :is="currentView"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import intro from './clg/intro.vue'
import orgstr from './clg/orgstr.vue'
import certrn from './clg/certrn.vue'
import cerqr from './clg/cerqr.vue'
import cper from './clg/cper.vue'


export default {
    name: 'clg',
    data () {
        return {
          msg: '瑜伽大学',
          clg_tag_list: [
            {
              'url': 'intro',
              'name': '大学简介',
              'isActive': true,
              'leftTag': [
                {
                  'pos': 'item_1',
                  'name': '大学概览',
                  'isTag': true
                },
                {
                  'pos': 'item_2',
                  'name': '瑜伽大学章程',
                  'isTag': false
                },
                {
                  'pos': 'item_3',
                  'name': '倡议书',
                  'isTag': false
                },
                {
                  'pos': 'item_4',
                  'name': '大学导师库',
                  'isTag': false
                }
              ]
            },
            {
              'url': 'orgstr',
              'name': '组织架构',
              'isActive': false,
              'leftTag': [
                {
                  'pos': 'item_1',
                  'name': '行政架构',
                  'isTag': true
                },
                {
                  'pos': 'item_2',
                  'name': '业务部门简介',
                  'isTag': false
                },
                {
                  'pos': 'item_3',
                  'name': '分院设置',
                  'isTag': false
                }
              ]
            },
            {
              'url': 'certrn',
              'name': '认证培训',
              'isActive': false,
              'leftTag': [
                {
                  'pos': 'item_1',
                  'name': '课程认证标准',
                  'isTag': true
                },
                {
                  'pos': 'item_2',
                  'name': '瑜伽大学评级标准',
                  'isTag': false
                },
                {
                  'pos': 'item_3',
                  'name': '考核细则标准',
                  'isTag': false
                },
                {
                  'pos': 'item_4',
                  'name': '教室评级标准',
                  'isTag': false
                }
              ]
            },
            {
              'url': 'cerqr',
              'name': '证书查询',
              'isActive': false
            },
            {
              'url': 'cper',
              'name': '合作交流',
              'isActive': false
            }
          ],
          leftTag: [
            {
              'pos': 'item_1',
              'name': '大学概览',
              'isTag': true
            },
            {
              'pos': 'item_2',
              'name': '瑜伽大学章程',
              'isTag': false
            },
            {
              'pos': 'item_3',
              'name': '倡议书',
              'isTag': false
            },
            {
              'pos': 'item_4',
              'name': '大学导师库',
              'isTag': false
            }
          ],
          hasLeftTag: true,
          currentView: 'intro',
          item_rect_obj: {}
        }
    },
    components: {
      intro,
      orgstr,
      certrn,
      cerqr,
      cper
    },
    methods: {
      tabChange(tabItem) {
        var that = this;
        
        this.clg_tag_list.forEach(function(tag){
          if(tag.url == tabItem){
            tag.isActive = true;
            if(tag.leftTag){
              that.leftTag = tag.leftTag;
              that.hasLeftTag = true;
            }else{
              that.hasLeftTag = false;
            }
            
          }else{
            tag.isActive = false;
          }
        });

        this.currentView = tabItem;

        this.$nextTick(function(){
          var clg_bd_r_item = document.querySelectorAll(".clg_bd_r_item")
          that.item_rect_obj = {};
          clg_bd_r_item.forEach(function(item){
            that.item_rect_obj[item.getAttribute("data-pos")] = item.getBoundingClientRect().top;
          });
        });
        

      },
      leftTagChange(pos){
        var clg_bd_r_item = document.querySelectorAll(".clg_bd_r_item");

        window.scrollTo(0,this.item_rect_obj[pos] - this.item_rect_obj['item_1']);
        
        this.leftTag.forEach(function(tag){
          if(tag.pos == pos){
            tag.isTag = true;
          }else{
            tag.isTag = false;
          }
        });
      }
    },
    mounted: function(){
      var cglListCon = document.querySelector("#cgl_list_con"),
          clg_bd_r_item = document.querySelectorAll(".clg_bd_r_item"),
          rect = cglListCon.getBoundingClientRect(),
          that = this;

        clg_bd_r_item.forEach(function(item){
          that.item_rect_obj[item.getAttribute("data-pos")] = item.getBoundingClientRect().top;
        });
      
      window.addEventListener('scroll', function(){
        cglListCon.style.position = 'fixed';
        cglListCon.style.top = rect.top + 'px';
        cglListCon.style.left = rect.left + 'px';

      });

    }
}
</script>
<style>
</style>