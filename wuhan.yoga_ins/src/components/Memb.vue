<template>
	<div class="memb-container">
		<div class="banner">
			<!-- <div class="item" v-for="item in banList">
				<img v-bind:src="'../assets/images/memb_ban0'+item+'.png'" alt="">
			</div> -->

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
		<div class="unit">
			<div class="title">
				<h3>会员单位</h3>
				<p>Member Units</p>
			</div>
			<div class="table">
				<table>
					<thead>
						<tr>
							<th>序号</th>
							<th>瑜伽馆名称</th>
							<th>联系人</th>
							<th>联系方式</th>
							<th>地址</th>
						</tr>
					</thead>
					<tbody>
						<tr class="item" v-for="(item, index) in units">
							<td>{{index + 1}}</td>
							<td>{{item.name}}</td>
							<td>{{item.cont}}</td>
							<td>{{item.mobile | hideNum}}</td>
							<td>{{item.addr}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="tip">
				<p>更多会员单位请下载附件查看</p>
				<a href="../../static/units.xlsx" download="">《武汉市瑜伽协会会员单位》.xlsx</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Memb',
  data () {
    return {
      msg: 'Memb',
      banList: Array.from("123456"),
      units: [
      	{
      		"name": "G+维密普拉提瑜伽工作室",
      		"cont": "姜自红",
      		"mobile": "13477035173",
      		"addr": "武汉市武昌区中山路凤凰大厦A座2单元1401室"
      	},
      	{
      		"name": "莲台瑜伽油疗养生苑",
      		"cont": "秦茜",
      		"mobile": "15327106828",
      		"addr": "武汉市江岸区循礼门船舶广场804室"
      	},
      	{
      		"name": "杜拉舞蹈瑜伽",
      		"cont": "程章丽",
      		"mobile": "18627968117",
      		"addr": "武汉市武昌区积玉桥万达公馆SOHO13号楼1710~1712室"
      	},
      	{
      		"name": "若水瑜伽馆",
      		"cont": "张老师",
      		"mobile": "15871477117",
      		"addr": "武汉市武昌区和平大道三角路水岸国际K3栋瞰江公寓2211室"
      	},
      	{
      		"name": "F瑜伽会所",
      		"cont": "周莹",
      		"mobile": "13385287400",
      		"addr": "武汉市武昌区和平大道恒大首府商铺"
      	},
      	{
      		"name": "梵心瑜伽馆",
      		"cont": "万湾",
      		"mobile": "15871490865",
      		"addr": "松竹路万达环球国际2号楼2711室"
      	},
      	{
      		"name": "竺源瑜伽",
      		"cont": "金慧慧",
      		"mobile": "18696146530",
      		"addr": "友谊大道才茂街万科金域华府4栋216室"
      	},
      	{
      		"name": "意然瑜伽会所",
      		"cont": "路顺",
      		"mobile": "18062150076",
      		"addr": "徐家棚街团结路16号东东摩四楼"
      	},
      	{
      		"name": "知行瑜伽（中南店）",
      		"cont": "范华平",
      		"mobile": "18627966751",
      		"addr": "中南天紫广场嘉园1号楼2511"
      	},
      	{
      		"name": "伽菲瑜伽（群光店）",
      		"cont": "陈老师",
      		"mobile": "18872251822",
      		"addr": "群光上苑4栋1601"
      	},
      	{
      		"name": "洛可可户外瑜伽",
      		"cont": "徐老师",
      		"mobile": "18672763924",
      		"addr": "和平大道108号"
      	},
      	{
      		"name": "OM瑜伽苑",
      		"cont": "张琳",
      		"mobile": "15971350733",
      		"addr": "安顺星苑9栋1-102地铁楚河汉街站C口不行510m"
      	},
      	{
      		"name": "栖舍瑜伽生活馆",
      		"cont": "盛老师",
      		"mobile": "15623180829",
      		"addr": "中北路安顺星苑1栋1单元201室"
      	},
      	{
      		"name": "梦和瑜伽",
      		"cont": "牛老师",
      		"mobile": "15527498806",
      		"addr": "楚河汉街中北路安顺家园竹居3号1单元1002"
      	},
      	{
      		"name": "槿.瑜伽.普拉提 生活艺术",
      		"cont": "李经理",
      		"mobile": "18186123446",
      		"addr": "珞喻路33号银泰创意城11楼1102室"
      	},
      	{
      		"name": "境合瑜伽",
      		"cont": "宋老师",
      		"mobile": "15377667669",
      		"addr": "武珞路442号中南国际城D座1-408"
      	},
      	{
      		"name": "漫瑜伽",
      		"cont": "曾老师",
      		"mobile": "17702780827",
      		"addr": "中南天紫广场嘉园大厦2号楼706-707"
      	},
      	{
      		"name": "吉木养生瑜伽馆",
      		"cont": "彭老师",
      		"mobile": "13667229918",
      		"addr": "徐东大街福星惠誉国际城（写字楼）8-1-2001"
      	},
      	{
      		"name": "梵迦瑜伽馆",
      		"cont": "张㮛",
      		"mobile": "18627138642",
      		"addr": "徐东大街福星惠誉国际城一期3-903"
      	},
      	{
      		"name": "F瑜伽会所",
      		"cont": "余星星",
      		"mobile": "17740526797",
      		"addr": "和平大道恒大首府商铺"
      	}
      ]
    }
  },
  filters: {
	hideNum: function(str){
		if(!str) return '';
		var str_arr = Array.from(str);
			str_arr  = str_arr.map(function(item,index){
      		if(index > 2 && index < 7){
      			return "*";
      		}
      		return item;
      	});
		return str_arr.join("");
	}
  }
}
</script>


<style scoped lang="less">
.memb-container{
	min-height: 600px;
	.banner{
		display: flex;
		.item{
			flex: 1;
		}
	}
	.unit{
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
		.table{
			table{
				width: 100%;
				border: 1px solid #e5e5e5;
				border-collapse: collapse;
				tr{
					height: 50px;
				}
				thead{
					background-color: #fafafa;
					th{
						font-size: 16px;
						text-align: left;
						border: 1px solid #e5e5e5;
						padding-left: 10px;
					}
				}
				tbody{
					td{
						font-size: 14px;
						border: 1px solid #e5e5e5;
						padding-left: 10px;
					}
				}
			}
		}
		.tip{
			margin-top: 40px;
			p{
				line-height: 18px;
				font-size: 14px;
				margin-bottom: 20px;
			}
			a{
				line-height: 24px;
				font-size: 20px;
				color: #3d7a0d;
				text-decoration: underline
			}
		}
	}
}
</style>