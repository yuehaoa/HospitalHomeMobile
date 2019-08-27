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
		<view class="flex">
			<picker class="bg-white" :value="index" :range="picker">
				<view class="picker">
					{{picker[index]}}
					<text class="cuIcon-unfold margin-left-sm"></text>
				</view>
			</picker>
			<button>筛选</button>
		</view>
		<view> <!--自动展开-->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur:0,
				index: 0,
				picker: ['按推荐', '按收藏', '按更新'],
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			}
		}
	}
</script>

<style>
</style>
