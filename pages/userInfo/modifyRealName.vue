<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">修改昵称</block>
		</cu-custom>
		
		<view class="container">
			<view class="input-row border">
				<input class="uni-input" focus=true v-bind:placeholder="preNickName" type="text" maxlength=100 v-model="nickname">
				<view class="underline"></view>
			</view>
			<view class="tips tail"><text>请输入新昵称</text></view>
			
			<view class="baiban">
			</view>
			
			<view class="button-type">
					<button class="button" size="mini" type="primary" v-on:click="ModifyNickName()" >保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default
	{
		data() 
		{
			return {
				divheight:this.StatusBar,
				preNickName:'',
				nickname:'',
				currentUserGuid:'',
				tip:''
			};
		},
		onLoad()
		{
			uni.getStorage({
				key:'currentUserGuid',
				success:(res)=>{
					this.currentUserGuid=res.data;
				}
			});
			uni.getStorage({
				key:'userInfo',
				success:(res2)=>{
					this.preNickName=res2.data.RealName;
					console.log(res2.data);
				}
			});
		},
		methods:
		{
			ModifyNickName()
			{
				uni.request({
					url: 'http://hh.ricebird.cn/uc/ModifyNickName',//接口地址
					method: 'POST',//方法
					data: {
						currentUserGuid:this.currentUserGuid,
						userName:this.nickname,
					},//参数
					header:{
						'content-type':"application/x-www-form-urlencoded",
					},
					success: res => {
						this.tip=res.data.msg;
						uni.showToast({
							icon: 'none',
							title: this.tip,
							duration:3000,
							position:'center',
						})
						this.preNickName=this.nickname;
					},//成功之后操作
				});
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}
	
	.container{
		//display: flex;
		//flex: 1;
		//flex-direction: column;
		/* background-color: #efeff4; */
		padding: 5px;
	}
	.input-group {
		margin: 0 auto;
		background-color: #ffffff;
		//margin-top: 40upx;
		position: relative;
	}
	
	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}
	
	.input-row .title,.input-row input{
		height: 70upx;
		padding: 20upx 0;
		line-height: 70upx;
	}	
	
	.input-row input
	{
		margin-left: 15upx;
	}
	
	.tip-text
	{
		text-align: center;
		color: red;
	}
	
	.person{
		position: absolute;
		width: 60%;
		margin:0 20%;
		font-size: 16px;
		text-align: center;
	}
	
	.icon{
		height: 33px;
		font-size: 14px;
		line-height: 33px;
		padding-left:50rpx;
	}
	
	.header{
		margin-bottom: 30rpx;
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #ffffff;
		font-size: 30rpx;
		letter-spacing: 2rpx;
		padding: 5rpx 0;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #EFEFEF;
		
		&::before {
			content: '';
			width: 30upx;
			height: 30upx;
			position: absolute;
			left: 2%;
			background: url('../../static/fumou-center-template/arrow.png') no-repeat;
			background-size: 100%;
		}
		
		text:nth-of-type(1) {
			margin-left: 10px;
		}
		
		&:nth-of-type(8) {
			margin-top: 10px;
		}
	}
	image
	{
		margin: 0 auto;
		vertical-align:middle;
	}
	.tail
	{
		margin:0 auto;
		padding-top: 5px;
		width: 98%;
		align-content: center;
	}
	.button-type{
		margin: 0 auto;
		width: 100%;
	}
	.button
	{
		width: 100%;
	}
	.baiban
	{
		height: 150px;
	}
	
	.head{
		
		text-align: left;
		font-size: 18px;
	}
	
	.uni-input{
		margin-left: 20rpx;
		margin-right: 20rpx;
	}
	image {
		width: 40upx;
		height: 40upx;
	}
	.tips text{
		font-size:15px;
		color: #808080;
		margin: 0 auto;
	}
</style>
