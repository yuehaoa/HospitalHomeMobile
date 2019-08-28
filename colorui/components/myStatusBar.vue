<template>
	<view>
		<view class="cu-custom bg-brown flex" :style="{height:StatusBar+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				StatusBar: this.StatusBar
			};
		},
		name: 'abc'
	}
</script>

<style>
</style>
