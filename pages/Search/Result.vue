<template>
	<view>
		<view class="cu-bar search bg-gray text-xxl">
			<span class="cuIcon-back_android margin-left"></span>
			<view class="search-form round text-xxl">
				<input class="padding-left" :adjust-position="false" type="text" placeholder="原发性肝癌" confirm-type="search"></input>
				<text class="cuIcon-voice text-blue" style="font-size: 44rpx;"></text>
			</view>
			<view class="action">
				<button class="cu-btn shadow-blur round">搜索</button>
			</view>
		</view>
		<view>
			<scroll-view scroll-x class="bg-gray nav">
				<view class="flex text-center justify-around">
					<view class="cu-item" :class="0==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="0">
						医院 
					</view>
					<view class="cu-item" :class="1==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="1">
						科室
					</view>
					<view class="cu-item" :class="2==TabCur?'text-blue cur':''" @tap="tabSelect" data-id="2">
						专家
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="flex margin-tb-sm">
			<picker class="bg-white radius cu-btn flex-sub margin-lr" :value="index" :range="picker">
				<text>{{picker[index]}}</text>
				<text class="cuIcon-unfold margin-left-sm"></text>
			</picker>
			<button class="cu-btn bg-white flex-sub margin-lr" @click="open()">
				<text>筛选器</text>
				<text class="cuIcon-unfold margin-left-sm"></text>
			</button>
		</view>
		<view id="filters" class=" justify-around bg-gray shadow shadow-lg you" :style="{height:myheight}">	<!--自动展开-->
			<view  >
				<text class="margin">省份</text>
				<button class="cu-btn bg-white flex-sub  margin-right margin-bottom-sm sm"@click="provinceopen" style="float:right">
					<text class="cuIcon-unfold "></text>
				</button>
				<view class=" margin-lr-lg margin-top-xs padding-left":style="{height:provinceheight,overflow:hidden}" >
					<view class="cu-tag light bg-cyan radius margin-bottom-xs " 
					v-for="(item,index) in Province" @click="showCity(index)" >{{item.value}}</view>
				</view>
			</view>
			<view class="margin-top-xs ">
				<text class="margin">市</text>
				<button class="cu-btn bg-white flex-sub  margin-right margin-lr margin-bottom-sm sm"@click="cityopen"style="float:right" >
					<text class="cuIcon-unfold  "></text>
				</button>
				<view class="margin-lr-lg margin-top-xs padding-left ":style="{height:cityheight,overflow:hidden}">
					<view class="cu-tag light bg-cyan radius margin-bottom-xs "  v-for="(item,index) in Province[number].children"
					>{{item.value}}</view>
				</view>
			</view>
		</view>
		<view>	<!--搜索结果-->
			<view class="cu-card article no-card ">
				<view class="cu-item shadow">
					<view class="title">
						<view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
					</view>
					<view class="content">
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
							<view>
								<view class="cu-tag bg-red light sm round we">正义天使</view>
								<view class="cu-tag bg-green light sm round we">史诗</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-card article no-card ">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
							<view>
								<view class="cu-tag bg-red light sm round ">正义天使</view>
								<view class="cu-tag bg-green light sm round ">史诗</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import exp from '../../area.js'
	export default {
		data() {
			return {
				TabCur:0,
				index: 0,
				picker: ['按推荐', '按收藏', '按更新'],
				showFilters:false,
				myheight:"0px",
				cityheight:'50rpx',
				provinceheight:'50rpx',
				hidden: 'hidden',
				number:0,
				Province:[],
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			open(){
				if(this.myheight=='0px')
				{
					this.myheight="auto";
				}
				else{
					this.myheight="0px";
				}
			},
			cityopen(){
				if(this.cityheight=='50rpx')
				{
					this.cityheight="auto";
				}
			
			else{
				this.cityheight='50rpx';
			}
			},
			provinceopen(){
				if(this.provinceheight=='50rpx')
				{
					this.provinceheight="auto";
				}
			
			else{
				this.provinceheight='50rpx';
			}
			},
			showCity(index){
				this.number=index;
			}
		},
		onLoad() {
			this.Province=exp;
		}
	}
</script>

<style>
	#filters{
		position: fixed;
		width: 100%;
		height: 0%;
		overflow: hidden;
		transition:height 2s;
	}
	.you{
		z-index:3;
	}
	.we{
		z-index:1;
	}
</style>
