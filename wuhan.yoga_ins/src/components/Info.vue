<template>
	<div class="info-container">
		<div class="banner">
			<div class="item">
				<img src="../../static/images/memb_ban01.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/memb_ban02.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/memb_ban03.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/memb_ban04.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/memb_ban05.png" alt="">
			</div>
			<div class="item">
				<img src="../../static/images/memb_ban06.png" alt="">
			</div>
		</div>
		<div class="center">
			<div class="title">
				<h3>资讯中心</h3>
				<p>Information Center</p>
			</div>
			<div class="content">
				<section>
					<div class="ct">
						3.1《关于教学与练习伤害处理办法的通知》
					</div>
					<div class="des">
						<div class="from">
							呈现市体育、民政局：
						</div>
						<div class="cont">
							<p class="tip">为了更好地普及瑜伽健身养生的效果，鉴于瑜伽课上因不当教学或练习可能导致的练习者各类伤害情况的发生。现将有关的预防及处理办法给出以下建议。</p>
							<div class="b">
								<div>一、防止与杜绝以下现象发生：</div>
								<p>1.防止肌肉、肌键等拉伤与青於现象；</p>
								<p>2.防止关节脱臼，杜绝关节活动超限等练习；</p>
								<p>3.杜绝脊椎活动超限，防止颈椎，腰椎等部位的伤害</p>
								<p>4.杜绝施加外力方式强压或强拉方式练习；</p>
								<p>5.杜绝心血管疾病及其他身体状况不佳的人员进入混班练习；</p>
								<p>6.杜绝重大恶性教学事故发生。</p>
							</div>
							<div class="b">
								<div>二、伤害处理与调节办法：</div>
								<p>1.肌肉酸胀疼痛等现象，凡不影响正常活动，但练习时会有不适时，应建议练习者休息，休息时间应不计入相关卡项的有效期；</p>
								<p>2.凡导致活动受限，痉挛，眩晕，呕吐，呼吸困难等现象时应及时放松休息观察，若未改善或症状有加重趋势时应及时就医，瑜伽馆应承担相应的就医费用及相关联的其他费用；</p>
								<p>3.出现重大恶性事故或因此产生重大纠纷时，应第一时间报案，等候处理；</p>
								<p>4.发生纠纷时，协会本着公正、公平的角度，以第三方身份参与调节，调节三次后，双方未能达成共识，视当时双方放弃调节；</p>
								<p>5.协会将建立教学与练习事故纠纷处理备案制度，对于不作为及有意规避责任者，协会将会视情节程度予以告诫或列入非诚信经营黑名单，并在协会网站予以发布相关通告与黑名单信息。</p>
							</div>
						</div>
						<div class="sign">
							<div>武汉瑜伽协会</div>
							<div>2018.1.18</div>
						</div>
					</div>
				</section>
				<section>
					<div class="ct">
						3.2《武汉市瑜伽行业师资人员薪资指导标准》
					</div>
					<div class="des">
						<div class="item">
							<p>一.全职人员（单位：元）</p>
							<div class="img fullTime">
								<img src="../../static/images/full_time.png" alt="">
							</div>
						</div>
						<div class="item">
							<p>二.兼职人员（单位：元）</p>
							<div class="img partTime">
								<img src="../../static/images/part_time.png" alt="">
							</div>
						</div>
					</div>
				</section>
				<section>
					<div class="ct">
						3.3《武汉市瑜伽从业者劳动保障调查表》
					</div>
					<div class="des">
						<p>为保障武汉市瑜伽从业者的劳动利益，促进武汉市瑜伽行业的健康发展，武汉市瑜伽馆协会现特此表调查行业现状；<a href="javascript:;">附件下载《武汉市瑜伽从业者劳动保障调查表》</a>:</p>
						<div class="inq">
							
						</div>
						<div class="r">
							<div>武汉市瑜伽协会</div>
							<div>2018.4.26</div>
						</div>
					</div>
				</section>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      msg: 'Info'
    }
  }
}
</script>


<style scoped lang="less">
.info-container{
	min-height: 600px;
	.banner{
		display: flex;
		.item{
			flex: 1;
		}
	}
	.center{
		width: 1200px;
		margin: 0 auto;
		padding: 90px 0 80px 0;
		.title{
			margin-bottom: 40px;
			h3{
				line-height: 34px;
				font-size: 30px;
				margin-bottom: 16px;
			}
			p{
				line-height: 24px;
				font-size: 20px;
			}
		}
		.content{
			.ct{
				position: relative;
				height: 30px;
				line-height: 30px;
				font-size: 24px;
				padding-left: 36px;
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
			.des{
				.from{
					line-height: 22px;
					font-size: 18px;
					font-weight: bold;
					margin-bottom: 40px;
				}
				.cont{
					.tip{
						line-height: 18px;
						font-size: 14px;
						margin-bottom: 36px;
					}
					.b{
						margin-bottom: 40px;
						div{
							line-height: 24px;
							font-size: 16px;
						}
						p{
							line-height: 24px;
							font-size: 14px;
						}
					}
				}
				.sign{
					margin-bottom: 90px;
					div{
						line-height: 24px;
						font-size: 18px;
						font-weight: bold;
						text-align: right;
					}
				}
				.item{
					margin-bottom: 60px;
					p{
						line-height: 20px;
						font-size: 16px;
						margin-bottom: 24px;
					}
				}
				& > p {
					line-height: 18px;
					font-size: 14px;
					margin-bottom: 30px;
				}
				.inq{
					min-height: 290px;
					border: 4px solid #000;
					margin-bottom: 30px;
				}
				.r{
					div{
						line-height: 24px;
						font-size: 16px;
						text-align: right;
						padding-right: 50px;
					}
				}

			}
		}
	}
}
</style>