<template>
	<view class="nav text-center bg-white" style="position: fixed; bottom: 0; width: 100%;">
		<view class="cu-bar tabbar bg-white">
			<view class="action" :class="index==TabCur?'text-blue cur':''" @tap="tabSelect" :data-id=index v-for="(nav,index) in navs" :key=index>
				<view class="flex-sub":class="textsize">
					<text :class="nav.icon"></text>
					<text>{{nav.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				TabCur:0,
				scrollLeft:0,
			};
		},
		props:{
			navs:Array,
			textsize:{
				type:String,
				default:''
			}
		},
		methods:{
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.$emit('selectchange',e.currentTarget.dataset.id);
			}
		}
	}	
</script>

<style>
</style>
