<template>
	<div class="head-nav-container">
		<div class="head-nav-con">
			<div class="logo-con">
				<img src="../../assets/images/wh_logo.png" alt="logo">
			</div>
			<div class="nav-con">
				<ul>
					<router-link tag="li" :to="{path: tag.url}" v-for="tag in nav" v-bind:class="{active: tag.isActive}">
                    	<span>{{tag.name}}</span>
                  	</router-link>
				</ul>
			</div>
		</div>
		<div class="head-nav-bdbt">
			<img src="../../assets/images/index_nav_bdbt.png" alt="">
		</div>
	</div>
</template>

<script>
export default {
  name: 'HeadNav',
  data () {
    return {
      msg: 'HeadNav',
      nav: [
          {
              'url': '/',
              'name': '首页',
              'isActive': true
          },
          {
              'url': '/about',
              'name': '协会概况',
              'isActive': false
          },
          {
              'url': '/memb',
              'name': '协会会员',
              'isActive': false
          },
          {
              'url': '/info',
              'name': '资讯中心',
              'isActive': false
          },
          {
              'url': '/dyna',
              'name': '社会动态',
              'isActive': false
          },
          {
              'url': '/cont',
              'name': '联系我们',
              'isActive': false
          }
      ]
    }
  },
  watch:{
	$route(to,from){
	  this.nav.forEach(function(tag){
	    if(tag.url == to.path){
	      tag.isActive = true;
	    }else{
	      tag.isActive = false;
	    }
	  });
	}
  },
  mounted: function(){
    var pathname = location.pathname;
    var that = this;
    console.log(pathname);
    

   	that.nav.forEach(function(tag,index){
   	  tag.isActive = false;
      if(tag.url == pathname){
        tag.isActive = true;
        console.log("bbb");
      }else{
      	tag.isActive = false;
      }
    });

    switch(pathname){
    	case "/rule":
    		that.nav[0].isActive = true;
    		break;
    	case "/appl":
    		that.nav[0].isActive = true;
    		break;
    }

    this.$root.bus.$on("getStr",(str)=>{

    	this.$nextTick(function () {
    		if(str.str != "/cont"){
	    		that.nav[0].isActive = true;
	    	}
    	});
    });
  }
}
</script>


<style lang="less" scoped>
@white: #fff;
@black: #000;
@active_color: #3d7a0d;

.head-nav-container{
	width: 100%;
	background-color: @white;
	.head-nav-con{
		display: flex;
		margin: 0 auto;
		width: 1200px;
		height: 100px;
		.logo-con{
			width: 350px;
			padding: 10px 0;
			img{
				width: auto;
				height: 80px;
			}
		}
		.nav-con{
			flex: 1;
			ul{
				display: flex;
				align-items: center;
				height: 100px;
				li{
					flex: 1;
					color: @black;
					font-size: 18px;
					span{
						display: inline-block;
						padding: 10px;
						border-bottom-width: 5px;
						border-bottom-style: solid;
						border-bottom-color: @white;
					}
					&.active{
						color: @active_color;
						span{
							border-bottom-color: @active_color;
						}
					}
					
				}
			}
		}
	}
	.head-nav-bdbt{
		width: 100%;
		img{
			width: auto;
			height: 16px;
		}
	}
}
</style>