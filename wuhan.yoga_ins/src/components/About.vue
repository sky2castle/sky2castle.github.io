<template>
	<div class="about-container">
		<div class="banner">
			<div class="item">
				<img src="../../static/images/about_ban01.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/about_ban02.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/about_ban03.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/about_ban04.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/about_ban05.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/about_ban06.png" alt="">
			</div>
		</div>
		<div class="about-content">
			<div class="info">
				<div class="info-l">
					<div class="t">
						<h3>协会简介</h3>
						<p>Association Profile</p>
					</div>
					<div class="b">
						<p>武汉市瑜伽协会是顺应中国瑜伽行业的发展，为了规范武汉市瑜伽行业，制定武汉市瑜伽行业规则，引导武汉市瑜伽行业健康发展的，由从事瑜伽及相关行业的团体会员和个体会员自愿组成的非营利性组织。经武汉市民政局批淮注册成立。致力于推广瑜伽导师的认证与培训规范，瑜伽馆的抱团合作。统一社会信用代码：51420100MJH2497033。</p>
					</div>
				</div>
				<div class="info-r">
					<img src="../assets/images/ab.png" alt="">
				</div>
			</div>
			<div class="idea">
				<div class="ct">
					协会理念
				</div>
				<div class="ct-b">
					<span>博学厚爱、价值创新、文化慧人、专注笃行</span>
				</div>
			</div>
			<div class="mission">
				<div class="ct">
					协会使命
				</div>
				<div class="ct-b">
					<p><span>1.</span>正确引导每一位瑜伽爱好者学习博大精深的瑜伽文化，有效合理设计适合会员的课程，产生积极良好的练习效果。</p>
					<p><span>2.</span>2.积极保障从业者应当有合理的收益与回报，包括瑜伽馆投资人与经营者，教练及其他工作人员都应当得到相应的回报，及时化解经营和教学中的困难与矛盾。</p>
					<p><span>3.</span>普及与维护瑜伽文化的神圣价值，开展丰富有效的都市人健康管理课程，提升爱好者的瑜伽水平，健康水平。</p>
					<p><span>4.</span>制定与维护合理的服务收费标准，制定与维护师资人员薪资指导标准，运用有效手段杜绝不良用人行为与消费者价格欺诈行为。</p>
					<p><span>5.</span>维护安定和谐的行业局面，对于发生的各类纠纷应及时解决，减少不必要的恶性影响，维护行业形象。</p>
					<p><span>5.</span>完善自我管理，建立管理体系，强化自我发展与创新能力，为行业进步作出应有的贡献。</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'About'
    }
  }
}
</script>

<style scoped lang="less">
.about-container{
	min-height: 600px;
	.banner{
		display: flex;
		.item{
			flex: 1;
		}
	}
	.about-content{
		width: 1200px;
		margin: 0 auto;
		padding: 90px 0 160px 0;
		.info{
			display: flex;
			.info-l{
				width: 370px;
				padding-right: 60px;
				.t{
					margin-bottom: 30px;
				}
				h3{
					line-height: 36px;
					font-size: 32px;
					margin-bottom: 14px;
				}
				p{
					line-height: 28px;
					font-size: 24px;
				}
				.b{
					p{
						line-height: 24px;
						font-size: 14px;
					}
				}
			}
			.info-r{
				width: 830px;
			}
		}
		.idea{
			margin-top: 100px;
			margin-bottom: 44px;
			.ct-b{
				span{
					padding-left: 46px;
					line-height: 20px;
					font-size: 16px;
					color: #3d7a0d;
				}
			}
		}
		.ct{
			position: relative;
			height: 30px;
			line-height: 30px;
			font-size: 24px;
			font-weight: bold;
			padding-left: 46px;
			margin-bottom: 24px;
			&:before{
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				content: '';
				width: 30px;
				height: 30px;
				background-color: #ef871a;
			}
		}
		.mission{
			.ct-b{
				p{
					line-height: 24px;
					font-size: 14px;
					span{
						font-size: 20px;
						color: #3d7a0d;
					}
				}
			}
		}
	}
}
</style>