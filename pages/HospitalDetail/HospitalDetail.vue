<template>
	<view>
		<statusBar></statusBar>
		<view id="HospitalInfo">
			<view class="head bg-white">
				<image src="../../static/hospital.png" mode="aspectFill"></image>
				<view class="nav flex">
					<view class="padding-lr">
						<button class="cu-btn cuIcon bg-grey text-xl" @click="back">
							<text class="cuIcon-back"></text>
						</button>
					</view>
					<view class="padding-lr" style="margin-left: auto;">
						<button class="cu-btn cuIcon margin-lr-xs bg-grey text-xl">
							<text class="cuIcon-favor"></text>
						</button>
						<button class="cu-btn cuIcon margin-lr-xs bg-grey text-xl">
							<text class="cuIcon-share"></text>
						</button>
						<button class="cu-btn cuIcon margin-lr-xs bg-grey text-xl">
							<text class="cuIcon-more"></text>
						</button>
					</view>
				</view>
			<view class="Info margin-left">
					<view class="action text-xxl margin-tb-sm">	<!--医院名称与地址-->
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-bold" style="color: #000;">{{name}}</text>
						<text class="text-df margin-left">{{area}}</text>
					</view>
					<view class="flex margin-bottom margin-left-sm margin-top-xs" id="tags">
						<view class="radius cu-tag line-blue padding-lr-sm text-black" :key="index" v-for="(tag,index) in tags">{{tag}}</view>
					</view>
					<view class="flex margin-left-sm padding-bottom-sm">
						<view class="flex justify-between basis-lg">
							<view class="collection" :key="key" v-for="(value,key) in collections">{{key}}:{{value}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view id="Contact" class="bg-white flex justify-between align-center margin-tb-sm padding-lr padding-tb-sm">
			<view class="text-xl">
				<p :key="key" v-for="(value,key) in contacts">{{key}}:{{value}}</p>
			</view>
			<view>
				<button class="cu-btn" @click="NavDepartList()">查看科室</button>
			</view>
		</view>
		<view id="HospitalDetail" class="bg-white">
			<scroll-view class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(tabName,index) in tabNav" :key="index" @tap="tabSelect" :data-id="index">
						{{tabName}}<span v-if="index==1">({{dptInfoNum}})</span>
					</view>
				</view>
			</scroll-view>
			<view>
				<ul class="flex justify-between padding-lr padding-tb-sm" style="list-style:none">
					<li v-show="TabCur==0"><p>{{abs}}</p></li>
					<li v-show="TabCur==1"><p>{{departInfo}}</p></li>
					<li v-show="TabCur==2"><p>{{recuit}}</p></li>
					<li v-show="TabCur==3"><p>{{bid}}</p></li>
				</ul>
			</view>
			<view class="more flex justify-end align-center padding-lr-sm padding-bottom-sm">
				<text>查看更多</text>
				<text class="cuIcon-playfill"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data()
		{
			return{
				TabCur: 0,
				scrollLeft: 0,
				dptInfoNum: 51,
				tabNav:[
					"医院概况",
					"科室信息",
					"人才招聘",
					"招投标信息"
				],
				abs:"厦门大学附属翔安医院（以下简称翔安医院）位于厦门市翔安区翔安东路2000号，是由厦门市政府与厦门大学共同投资建设的非营利性公立医院。",
				departInfo:"科室信息科室信息科室信息科室信息科室信息",
				recuit:"招聘信息招聘信息招聘信息招聘信息招聘信息招聘信息",
				bid:"招投标信息招投标信息招投标信息招投标信息招投标信息",
				name: "厦门大学附属翔安医院",
				area: "福建厦门",
				tags: [
					"三甲",
					"综合",
					"市级",
					"公立",
				],
				collections:{
					科室:51,
					专家:59,
					点击数:14
				},
				contacts: {
					挂号电话:"0592-2889000",
					急诊电话:"0592-2889000"
				},
			}
		},
		methods:{
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			NavDepartList() {
				uni.navigateTo({
					url: '../DepartList/DepartList',
					success: res => {},
				});
			},
			back(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss">
	#HospitalInfo{
		.head{
			position: relative;
			image{
				width:100%;
			}
			.nav{
				width: 100%;
				position: absolute;
				top: 40rpx;
			}
		}
		.Info{
			.collection{
				color: rgb(0, 167, 244);
			}
		}
	}
	#tags{
		view{
			margin-right:20rpx;
			height: 40rpx;
		}
		view:after{
			border: 1rpx solid #00A7F4;
		}
	}
	#Contact{
		button{
			color:rgb(3, 182, 226);
			background-color: rgb(224, 244, 254);
		}
	}
	#HospitalDetail{
		.more{
			color: rgb(0, 167, 244);
		}
	}
</style>
