<template>
	<view>
		<statusBar></statusBar>
		<view class="cu-bar search bg-gray text-xxl">
			<span class="cuIcon-back_android margin-left" @tap="back()" ></span>
			<view class="search-form round text-xxl">
				<input class="padding-left" :adjust-position="false" type="text" :placeholder="inikeyword" confirm-type="search" 
				v-model="keyword" @confirm="NavToRes(false)"></input>
				<text class="cuIcon-voice text-blue" style="font-size: 44rpx;"></text>
			</view>
			<view class="action">
				<button class="cu-btn shadow-blur round" @tap="NavToRes(false)">搜索</button>
			</view>
		</view>
		<view>
			<scroll-view scroll-x class="bg-gray nav" style="padding-bottom: 20rpx;">
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
		<view class="bg-white">
			<view class="cu-bar" v-show="oldKeywordList.length!=0">
				<view class="action flex" style="width: 100%;">
					<text class="cuIcon-titles text-blue"></text>
					<text class="text-xl text-bold">历史搜索</text>
					<text class="cuIcon-delete" style="margin-left: auto;" @tap="oldDelete()"></text>
				</view>
			</view>
			<view class="flex padding-sm flex-wrap">
				
				<view :key="index" v-for="(key,index) in oldKeywordList" :class="fold?'fold':'unfold'" v-if="fold?index<6:index<10"><button class="cu-btn round margin-lr-sm margin-tb-xs" @tap="NavToRes(key)" >{{key}}</button></view>
					<button class="cu-btn cuIcon margin-lr-sm margin-tb-xs" @click="btn" v-show="oldKeywordList.length>6&&fold" ><text class="cuIcon-unfold" ></text></button>
					<button class="cu-btn cuIcon margin-lr-sm margin-tb-xs" @click="btn" v-show="!fold" ><text class="cuIcon-fold" ></text></button>
					
				
			</view>
			<view>
				<view class="cu-bar">
					<view class="action flex" style="width: 100%;">
						<text class="cuIcon-titles text-blue"></text>
						<text class="text-xl text-bold">搜索发现</text>
						<text class="cuIcon-attention" style="margin-left:auto;"></text>
					</view>
				</view>
				<view class="box">
					<view class="flex">
						<view class="flex-sub  padding-sm margin-xs radius">呼吸科</view>
						<view class="flex-sub padding-sm margin-xs radius">原发性肝癌</view>
					</view>
					<view class="flex">
						<view class="flex-sub padding-sm margin-xs radius">呼吸科权威医院</view>
						<view class="flex-sub padding-sm margin-xs radius">广州医科</view>
					</view>
					<view class="flex">
						<view class="flex-sub padding-sm margin-xs radius">呼吸健康</view>
						<view class="flex-sub padding-sm margin-xs radius">医院</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.loadoldkeys();
		},
		data() {
			return {
				TabCur:0,
				inikeyword:"原发性肝癌",
				keyword:"",
				oldKeywordList:[],
				fold:true
				
			}
		},
		methods: {
			btn:function()
			{
				this.fold=!this.fold;
			},
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKeywordList = [];
							uni.removeStorage({
								key: 'oldkeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			loadoldkeys(){
				uni.getStorage({
					key:'oldkeys',
					success: (res) => {
						var OldKeys=res.data;
						this.oldKeywordList=OldKeys;
					}
				});
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			},
			back(){
				uni.navigateBack({
					
				})
			},
			NavToRes(key){
				
				key=key?key:this.keyword?this.keyword:this.inikeyword;
				this.keyword=key;
				this.saveKeyword(key);
				
				uni.navigateTo({
					url:'./Result?keyword=' + this.keyword,
				})
				
			},
			saveKeyword(key)
			{
				uni.getStorage({
					key:'oldkeys',
					success: (res) => {
						var Oldkeys=res.data;
						if(Oldkeys.indexOf(key)==-1)
						Oldkeys.push(key);
						Oldkeys.length>10 && Oldkeys.pop();
						uni.setStorage({
							key:'oldkeys',
							data:Oldkeys
						})
						this.oldKeywordList=Oldkeys;
					},
					fail:(e)=>{
						var OldKeys=[key];
						uni.setStorage({
							key:'oldkeys',
							data:OldKeys
						});
						this.oldKeywordList=OldKeys;
					}
					
				});
			}
		}
	}
</script>

<style>
	page{
		background-color: #FFF;
	}
</style>
