<template>
	<view>
		<view id="search">
			<image src="../static/矢量智能对象.png" mode="aspectFit"></image>
			<view class="content">
				<view class="cu-bar search">
					<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg"></view>
					<view class="search-form round bg-white">
						<input @focus="NavToSearch" style="padding-left: 10px;" :adjust-position="false" type="text" placeholder="让呼吸更健康" confirm-type="search"></input>
						<text class="cuIcon-search" style="color: blue;font-size: 18px;margin-right: 10px;"></text>
					</view>
					<view class="action">
						<text class="text-white">厦门</text>
						<text class="text-white text-xxl margin-left-sm">|</text>
						<view class="cu-avatar round margin-left-sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg;"></view>
					</view>
				</view>
				<view style="margin: 5px;">
					<span style="color: white;">热搜</span>
					<span class="sm cu-tag round tag" v-for="tag in tags">{{tag}}</span>
				</view>
			</view>
		</view>
		<view style="height: 206rpx;"></view>
		<view id="body">
			<view class="chat">
					<p style="font-size: 25px;padding: 10px 15px;color: #00a7f4;">智能导诊</p>
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
					<view class="cu-bar input radius shadow bg-grey" style="background-color: #f9f9f9;margin: 10px 10px;">
						<view class="action">
							<text class="cuIcon-voice text-blue"></text>
						</view>
						<input class="solid-bottom bg-white" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"></input>
						<button class="cu-btn bg-blue shadow">发送</button>
					</view>
			</view>
			<view style="background-color: #f9f9f9;">
				<view class="cu-bar">
					<view>
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-xl text-bold">医院介绍</text>
					</view>
					<view class="more" @tap="SearchMore">查看更多<text class="cuIcon-playfill"></text></view>
				</view>
				<scroll-view scroll-x>
					<view class="flex text-center">
						<view class="card bg-white margin-lr-sm padding"  v-for="(hospitals,index) in hospitals1" :key="index">
							<view><image :src="hospitals.avatar" class="cu-avatar round lg margin-xs"></image></view>
							<view class=" text-xs text-black padding-sm">{{hospitals.name}}</view>
							<button style="padding:0 32px" class="cu-tag sm radius text-xs" :class="[hospitals.state=='关注'?'bg-blue':'']" @tap="subsribe1(index)">{{hospitals.state}}</button>
						</view>
					</view>
				</scroll-view>
			</view>
			<view style="background-color: #f9f9f9;">
				<view class="cu-bar">
					<view>
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-xl text-bold">进驻医疗机构</text>
					</view>
					<view class="more" @tap="SearchMore">查看更多<text class="cuIcon-playfill"></text></view>
				</view>
				<scroll-view scroll-x>
					<view class="flex text-center">
						<view class="card bg-white margin-lr-sm padding"  v-for="(hospitals,index) in hospitals2" :key="index">
							<view><image :src="hospitals.avatar" class="cu-avatar round lg margin-xs"></image></view>
							<view class="text-xs text-black padding-sm">{{hospitals.name}}</view>
							<button style="padding:0 32px" class="cu-tag sm radius text-xs " :class="[hospitals.state=='关注'?'bg-blue':'']" @tap="subsribe2(index)">{{hospitals.state}}</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<scroll-view class="nav text-center margin-top">
			<view class="cu-item" :class="0==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="0">
				<text class="cuIcon-home"></text> 首页
			</view>
			<view class="cu-item" :class="1==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="1">
				<text class="cuIcon-discover"></text> 招聘
			</view>
			<view class="cu-item" :class="2==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="2">
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
	#body{
		margin:5rpx 20rpx; 
	}
	#search{
		image{
			position: absolute;
			width: 750rpx;
			height: 206rpx;
		}
		.content{
			position: absolute;
			margin: 10rpx;
			.tag{
				min-width: 120rpx;
				margin: 0 20rpx;
				background-color: rgba(#4ddbfe, 0.4);
			}
		}
	}
	.chat{
			background-color: white;
			padding-bottom: 10rpx;
	}
	.more{
		color: rgb(0, 167, 244);
		image{
			width: 20rpx;
			height: 20rpx;
			margin: 10rpx;
		}
	}
	.card{
		min-width: 200rpx;
		height: 286rpx;
	}
</style>
