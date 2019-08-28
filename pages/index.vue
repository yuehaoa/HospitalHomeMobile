<template>
	<view>
		<statusBar></statusBar>
		<view id="search" class="margin-bottom-xl">
			<image src="../static/矢量智能对象.png" style="position: absolute;"></image>
			<view class="content" style="padding-top: 20rpx;">
				<view class="cu-bar search">
					<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg"></view>
					<view class="search-form round bg-white">
						<input @focus="NavToSearch" style="padding-left: 20rpx;" :adjust-position="false" type="text" placeholder="让呼吸更健康" confirm-type="search"></input>
						<text class="cuIcon-search text-blue margin-right-sm" style="font-size: 36rpx;"></text>
					</view>
					<view class="action">
						<text class="text-white">厦门</text>
						<text class="text-white text-xxl margin-left-sm">|</text>
						<view class="cu-avatar round margin-left-sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg;"></view>
					</view>
				</view>
				<view class="margin-xs flex justify-around">
					<span class="text-white" style="z-index:1;">热搜：</span>
					<span class="sm cu-tag round tag" :key="index" v-for="(tag,index) in tags">{{tag}}</span>
				</view>
			</view>
		</view>
		<view class="margin-lr-sm padding-top-sm">
			<view class="chat bg-white padding-bottom-xs">
					<p class="padding-lr-xl padding-tb-xs text-xxl" style="color: #00a7f4;">智能导诊</p>
					<view class="cu-chat">
						<view class="cu-item" style="padding: 10rpx;">
							<view class="main">
								<view class="content shadow" style="background-color: #f9f9f9;">
									<text>Hi~<br/>我是智能导诊助手</text>
								</view>
							</view>
						</view>
						<view class="cu-item self" style="padding: 10rpx;">
							<view class="main">
								<view class="content bg-blue shadow">
									<text>感冒</text>
								</view>
							</view>
						</view>
					</view>
					<view class="cu-bar input radius shadow bg-grey margin-sm" style="background-color: #f9f9f9;">
						<view class="action">
							<text class="cuIcon-voice text-blue"></text>
						</view>
						<input class="solid-bottom bg-white" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"></input>
						<button class="cu-btn bg-blue shadow">发送</button>
					</view>
			</view>
			<view style="background-color: #f9f9f9;">
				<view class="cu-bar">
					<view class="text-xl">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-bold">医院介绍</text>
					</view>
					<view class="more" @tap="SearchMore">查看更多<text class="cuIcon-playfill"></text></view>
				</view>
				<scroll-view scroll-x>
					<view class="flex text-center" id='subsCard'>
						<view class="card bg-white margin-lr-sm padding"  v-for="(hospitals,index) in hospitals1" :key="index">
							<view><image :src="hospitals.avatar" class="cu-avatar round lg margin-xs"></image></view>
							<view class=" text-xs text-black padding-sm">{{hospitals.name}}</view>
							<button id="button" class="text-xs" :class="[hospitals.state=='关注'?'bg-blue':'']" @tap="subsribe1(index)">{{hospitals.state}}</button>
						</view>
					</view>
				</scroll-view>
			</view>
			<view style="background-color: #f9f9f9;">
				<view class="cu-bar">
					<view class="text-xl">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-bold">进驻医疗机构</text>
					</view>
					<view class="more" @tap="SearchMore">查看更多<text class="cuIcon-playfill"></text></view>
				</view>
				<scroll-view scroll-x>
					<view class="flex text-center" id='subsCard'>
						<view class="card bg-white margin-lr-sm padding"  v-for="(hospitals,index) in hospitals2" :key="index">
							<view><image :src="hospitals.avatar" class="cu-avatar round lg margin-xs"></image></view>
							<view class="text-xs text-black padding-sm">{{hospitals.name}}</view>
							<button class="text-xs" :class="[hospitals.state=='关注'?'bg-blue':'']" @tap="subsribe1(index)">{{hospitals.state}}</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<scroll-view class="nav text-center bg-white" style="position: fixed;bottom: 0;left: 0;">
			<view class="cu-item" :class="0==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="0">
				<text class="cuIcon-home"></text> 首页
			</view>
			<view class="cu-item" :class="1==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="1">
				<text class="cuIcon-discover"></text> 招聘
			</view>
			<view class="cu-item" @tap="tabSelect" data-id="2">
				<view class="cu-avatar round"><image src="cuIcon-round"></image></view> 
			</view>
			<view class="cu-item" :class="3==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="3">
				<text class="cuIcon-dianhua"></text> 招投标
			</view>
			<view class="cu-item" :class="4==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="4">
				<text class="cuIcon-my"></text> 我的
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data()
		{
			return{
				TabCur: 0,
				scrollLeft: 0,
				hospitals1:[
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"已关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
				],
				hospitals2:[
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"已关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
					{
						avatar:"../static/fumou-center-template/header.jpg",
						name:"厦门大学附属翔安医院",
						state:"关注"
					},
				],
				tags:[
					"1",
					"2",
					"3",
					"4",
				]
			}
		},
		computed:{
			
		},
		methods:{
			subsribe1(index)
			{
				this.hospitals1[index].state=(this.hospitals1[index].state=='已关注')?'关注':'已关注';
			},
			subsribe2(index)
			{
				this.hospitals2[index].state=(this.hospitals2[index].state=='已关注')?'关注':'已关注';
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			SearchMore(){
			},
			NavToSearch(){
				uni.navigateTo({
					url:'./Search/search'
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f9f9f9;
	}
	#search{
		width:100%;
		image{
			position: absolute;
			width: 100%;
			height: 206rpx;
		}
		.content{
			.tag{
				min-width: 120rpx;
				background-color: rgba(#4ddbfe, 0.4);
			}
		}
	}
	.more{
		color: rgb(0, 167, 244);
	}
	.card{
		min-width: 200rpx;
		min-height: 286rpx;
	}
	#subsCard{
		button{
			padding:0 30rpx;
			height: 32rpx;
			align-items: center;
			display: inline-flex;
			justify-content: center;
			white-space: nowrap;
		}
	}
</style>
