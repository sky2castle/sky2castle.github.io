<template>
	<div class="home-container">
		<div class="banner">
			<div class="item">
				<img src="../../static/images/index_ban01.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/index_ban02.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/index_ban03.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/index_ban04.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/index_ban05.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/index_ban06.png" alt="">
			</div>
		</div>
		<section class="index-item">
			<div class="item-t-1">
				<h3>协会动态</h3>
				<p>Association of dynamic</p>
			</div>
			<div class="item-b-1">
				<div class="img-con">
					<div class="img-p">
						<p>武汉市瑜伽协会第一次会员大会现场图集</p>
						<p>武汉市瑜伽协会第一次会员大会现场图集</p>
					</div>
				</div>
				<div class="img-con">
					<div class="img-p">
						<p>武汉市瑜伽协会第一次会员大会现场图集</p>
						<p>武汉市瑜伽协会第一次会员大会现场图集</p>
					</div>
				</div>
				<div class="img-con">
					<div class="img-p">
						<p>武汉市瑜伽协会第一次会员大会现场图集</p>
						<p>武汉市瑜伽协会第一次会员大会现场图集</p>
					</div>
				</div>
			</div>
		</section>
		<div class="cate-list-con">
			<div class="cate-list">
				<router-link tag="a" :to="{path: item.url}" v-for="item in item_list" v-bind:class="'cate-list-item'" v-on:click.native="on(item.url)">
					<div class="cate-list-b">
						<h4>{{item.name}}</h4>
						<p>{{item.en}}</p>
						<span class="d-arrow"></span>
					</div>
              	</router-link>

				<!-- <a class="cate-list-item" href="javascript:;">
					<div class="cate-list-b">
						<h4>协会章程</h4>
						<p>Association System</p>
						<span class="d-arrow"></span>
					</div>
				</a>
				<a class="cate-list-item" href="javascript:;">
					<div class="cate-list-b">
						<h4>申请入会</h4>
						<p>Apply For Membership</p>
						<span class="d-arrow"></span>
					</div>
				</a>
				<a class="cate-list-item" href="javascript:;">
					<div class="cate-list-b">
						<h4>联系我们</h4>
						<p>Contact Us</p>
						<span class="d-arrow"></span>
					</div>
				</a> -->
			</div>
		</div>
		<section class="index-item">
			<div class="item-t-2">
				<h3>协会成员</h3>
				<p>Members Of The Association</p>
			</div>
			<div class="item-b-2">
				<ul>
					<li>
						<img src="" alt="">
						<p>瑜伽馆LOGO展示</p>
					</li>
					<li>
						<img src="" alt="">
						<p>瑜伽馆LOGO展示</p>
					</li>
					<li>
						<img src="" alt="">
						<p>瑜伽馆LOGO展示</p>
					</li>
					<li>
						<img src="" alt="">
						<p>瑜伽馆LOGO展示</p>
					</li>
					<li>
						<img src="" alt="">
						<p>瑜伽馆LOGO展示</p>
					</li>
					<li>
						<img src="" alt="">
						<p>瑜伽馆LOGO展示</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>


<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      item_list: [
      	{
      		"name": "协会章程",
      		"en": "Association System",
      		"url": "/rule"
      	},
      	{
      		"name": "申请入会",
      		"en": "Apply For Membership",
      		"url": "/appl"
      	},
      	{
      		"name": "联系我们",
      		"en": "Contact Us",
      		"url": "/cont"
      	}
      ]
    }
  },
  methods: {
  	on(str){
  		this.$root.bus.$emit("getStr",{"str": str});
  	}
  }
}
</script>


<style scoped lang="less">
.home-container{
	min-height: 600px;
	.banner{
		display: flex;
		.item{
			flex: 1;
		}
	}
	.index-item{
		width: 1200px;
		margin: 0 auto;
		.item-t-1{
			margin-top: 90px;
			h3{
				line-height: 44px;
				font-size: 40px;
			}
			p{
				line-height: 28px;
				font-size: 24px;
			}
		}
		.item-t-2{
			margin-top: 160px;
			text-align: center;
			h3{
				line-height: 50px;
				font-size: 46px;
				font-weight: bold;
				margin-bottom: 14px;
			}
			p{
				line-height: 28px;
				font-size: 24px;
			}
		}
		.item-b-1{
			margin-top: 48px;
			padding-bottom: 140px;
			.img-con{
				display: flex;
				align-items: center;
				min-height: 190px;
				background-color: #9b9b9b;
				margin-bottom: 32px;
				.img-p{
					width: 100%;
					p{
						text-align: center;
						font-size: 24px;
						color: #fff;
						margin-bottom: 24px;
						&:last-child{
							margin-bottom: 0;
						}
					}
				}
			}
		}
		.item-b-2{
			padding-bottom: 160px;
			ul{
				zoom: 1;
				overflow: hidden;
				li{
					float: left;
					width: calc( 100% /3 );
					img{
						min-height: 140px;
					}
					p{
						line-height: 30px;
						font-size: 26px;
						text-align: center;
					}
				}
			}
		}
	}
	.cate-list-con{
		.cate-list{
			zoom: 1;
			overflow: hidden;
			a{
				float: left;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: calc( 100% / 3 - 16px);
				height: 286px;
				background-color: #3d7a0d;
				margin-right: 24px;
				color: #fff;
				text-align: center;
				&:last-child{
					margin-right: 0;
				}
				.cate-list-b{
					display: inline-block;
					min-width: 280px;
					margin: 0 auto;
					h4{
						line-height: 36px;
						font-size: 32px;
						margin-bottom: 16px;
					}
					p{	
						line-height: 24px;
						font-size: 20px;
						margin-bottom: 28px;
					}
					span{
						position: relative;
						display: block;
						width: 100%;
						height: 4px;
						background-color: #fff;
						&:after{
							position: absolute;
							bottom: -32px;
							left: 50%;
							display: block;
							content: '';
							width: 0;
							height: 0;
							transform: translateX(-50%);
							border-top: 16px solid #fff;
							border-bottom: 16px solid transparent;
							border-left: 22px solid transparent;
							border-right: 22px solid transparent;
						}
					}
				}
			}
		}
	}
}
</style>