<template>
	<div class="footer-container">
		<div class="footer">
			<div class="footer-item">
				<div class="img">
					<img src="../../assets/images/logo.png" alt="">
				</div>
				<div class="addr">
					<span>地址：</span>
				</div>
				<div class="tel">
					<span>联系电话：027-87833993</span>
				</div>
			</div>
			<div class="footer-item">
				<div class="item-t">
					<span>友情链接</span>
				</div>
				<div class="fr-link-b">
					<div class="b-li">
						<p>相关链接：</p>
						<a href="javascript:;">国家体育总局/国家体育总局社会体育中心</a>
					</div>
					<div class="b-li">
						<p>合作协会</p>
					</div>
					<div class="b-li">
						<p>合作伙伴</p>
						<a href="javascript:;">现联金融/IDYoga平台</a>
					</div>
				</div>
			</div>
			<div class="footer-item">
				<div class="item-t">
					<span>在线留言</span>
				</div>
				<div class="online-msg-con">
					<div class="msg-input">
						<input type="text" name="name" id="name" placeholder="请输入姓名">
					</div>
					<div class="msg-input">
						<input type="text" name="mobile" id="mobiel" placeholder="请输入电话">
					</div>
					<div class="msg-input">
						<textarea name="msg" id="msg" rows="2"></textarea>
					</div>
					<div class="msg-input">
						<button>提交</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
  name: 'FooterCon',
  data () {
    return {
      msg: 'FooterCon'
    }
  }
}
</script>


<style scoped lang="less">
@white: #fff;
.footer-container{
	width: 100%;
	height: 590px;
	background-image: url("../../assets/images/bg_footer.png");
	background-repeat: no-repeat;
	color: @white;
	.footer{
		display: flex;
		width: 1200px;
		margin: 0 auto;
		&-item{
			flex: 1;
			padding-top: 140px;
			.img{
				width: 130px;
			}
			.addr,
			.tel{
				margin-top: 20px;
				span{
					position: relative;
					display: block;
					padding-left: 30px;
					line-height: 24px;
					font-size: 16px;
					text-align: left;
					&:before{
						position: absolute;
						top: 0;
						left: 0;
						display: block;
						content: '';
						width: 24px;
						height: 24px;
						background-repeat: no-repeat;
						background-size: 100% 100%;
					}
				}

			}
			.addr span:before{
				background-image: url("../../assets/images/icon_addr.png");
			}
			.tel span:before{
				background-image: url("../../assets/images/icon_tel.png");
			}
			.item-t{
				margin-bottom: 40px;
				span{
					font-size: 24px;
				}
			}
			.fr-link-b{
				.b-li{
					margin-bottom: 24px;
					font-size: 18px;
					p{
						margin-bottom: 28px;
					}
					a{
						line-height: 24px;
						color: @white;
					}
				}
			}
			.msg-input{
				margin-bottom: 20px;
				border-bottom: 1px solid @white;
				
				input[type='text']{
					width: 100%;
					height: 40px;
					line-height: 40px;
					font-size: 18px;
					border: none;
					background-color: transparent;
				}
				textarea{
					width: 100%;
					line-height: 24px;
					font-size: 18px;
					color: @white;
					border: none;
					outline: none;
					background-color: transparent;
				}
				button{
					width: 100%;
					height: 42px;
					line-height: 42px;
					font-size: 18px;
					color: @white;
					text-align: center;
					background-color: rgba(61,122,13,.5);
				}
				&:last-child{
					border-bottom: none;
				}
			}
		}
	}
}

</style>