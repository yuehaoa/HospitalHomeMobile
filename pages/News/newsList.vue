<template>
	<view>
		<statusBar></statusBar>
		<view id="search" class="margin-bottom-xl" style="position: relative;">
			<image src="../../static/blue.png" style="position: absolute;"></image>
			<view class="content padding-top-xl">
				<view class="cu-bar search">
					<view class="cu-avatar round" style="background-image:url(../../mob/static/brand.png); background-color: rgba(0,0,0,0);"></view>
					<view class="search-form round bg-white">
						<input @tap="navToSearch()" style="padding-left: 20rpx;" :adjust-position="false" type="text" placeholder="" confirm-type="search"></input>
						<text class="cuIcon-search text-blue margin-right-sm" style="font-size: 36rpx;"></text>
					</view>
					<view class="action">
						<text class="text-white">厦门</text>
						<text class="text-white text-xxl margin-left-sm">|</text>
						<view class="cu-avatar round margin-left-sm" style="background-image:url(../../mob/static/avatar.png);"></view>
					</view>
				</view>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(tabName,index) in tabNav" :key="index" @tap="tabSelect" :data-id="index">
					{{tabName}}
				</view>
			</view>
		</scroll-view>
		<view :key="index" v-for="(item,index) in news">
			<view class="solids-bottom padding" style="background-color: white;" v-if="item.photo.length==0">
				<view class="padding-bottom-xs">
					<text class="text-xxl">{{item.title}}</text>
				</view>
					<text class="text-df">{{item.date}}</text>
			</view>
			<view class="solids-bottom flex" style="background-color: white;" v-if="item.photo.length==1">
				<view class="flex-twice padding">
					<view class="margin-bottom-sm ">
						<text class="text-xxl text-omit">{{item.title}}</text>
					</view>
					<text class="text-df">{{item.date}}</text>
				</view>
				<image class=" margin-top-lg margin-right flex-sub" mode="widthFix" :src="item.photo[0].name" ></image>
			</view>
			<view class="solids-bottom padding" style="background-color: white;" v-if="item.photo.length==3">
				<text class="text-xxl ">{{item.title}}</text>
				<view class="flex margin-tb-sm" >
					<image class="margin-lr-xs " mode="widthFix" :src="item.photo[0].name" ></image>
					<image class="margin-lr-xs " mode="widthFix" :src="item.photo[1].name" ></image>
					<image class="margin-lr-xs " mode="widthFix" :src="item.photo[2].name" ></image>
				</view>
				<text class="text-df">{{item.date}}</text>
			</view>
		</view>
		<bottom-navbar :navs='mynavs' v-on:selectchange="change($event)" :iniTabCur="TabCur+1"></bottom-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				mynavs:[
					{
						name:"首页",
						icon:"cuIcon-home",
						url:"/pages/index2"
					},
					{
						name:"招聘",
						icon:"cuIcon-discover",
						url:"/pages/News/newsList?cate=招聘"
					},
					{
						name:"招投标",
						icon:"cuIcon-dianhua",
						url:"/pages/News/newsList?cate=招投标"
					},
					{
						name:"我的",
						icon:"cuIcon-my",
						url:"/pages/profile/profile"
					},
				],
				tabNav:[
					"招聘",
					"招标",
					"知识库",
					"要闻",
					"综合",
					"快闪",
					"新思想",
				],
				news:[
					{title:'厦门大学附属翔安医院2019年度重症医学科招聘启事（增补第八批）',photo:[],date:'2019-07-19'},
					{title:'厦门大学附属翔安医院2019年度超声科、病理科等科室部分岗位招聘启事（增补第七批）',photo:[{name:'../../static/hospital0.png',date:'2019-07-16'}]},
					{title:'厦门大学附属翔安医院2019年度肿瘤科招聘启事（增补第五批）',photo:[{name:'../../static/hospital0.png'},{name:'../../static/hospital0.png'},{name:'../../static/hospital0.png'}],date:'2019-07-04'},
				]
			}
		},
		onLoad(data) {
			this.TabCur=this.tabNav.indexOf(data.cate);
		},
		methods: {
			change(index){
				this.TabCur=index-1;
				uni.redirectTo({
					url:this.mynavs[index].url
				})
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			navToSearch()
			{
				uni.navigateTo({
					url:'../Search/Search',
				})
			},
			toDetail(){
				uni.navigateTo({
					url:'./newsDetail',
				})
			}
		}
	}
</script>

<style lang="less">
	#search{
		width:100%;
		image{
			position: absolute;
			width: 100%;
			height: 206rpx;
		}
	}
	.text-omit{
		word-break: break-all;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;  
		}
	
</style>
