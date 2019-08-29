<template>
	<view>
		<view class="cu-custom flex" :style="[{height:StatusBar+'px'},{'background-color':color}]"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				StatusBar: this.StatusBar
			};
		},
		name: 'abc',
		props:['color']
	}
</script>

<style>
	.cu-custom {
		background-color:#a5673f ;
	}
</style>
