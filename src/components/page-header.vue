<template>
	<div class="page-header">
		<div class="header-left">
			<svg-icon name="logo" style="width: 60px; height: 60px; " />
			<span>Efficiency</span>
		</div>
		<div class="header-right">
			<!-- <nav-menu :navList="navList"/>			 -->
			<el-menu>
				<el-sub-menu v-for="n in navList" :key="n.key">
					<template #title>{{ n.name }}</template>
					<el-menu-item v-for="i in n.item" :key="i.key">{{ i.name }}</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</div>
	</div>
</template>

<script setup>
import svgIcon from "@/components/svg-icon.vue";
// import navMenu from '@/components/nav-menu.vue'

const navList = [{
	name: 'login',
	key: '/main/login',
	item: [
		{
			name: 111,
			key: '111'
		},
		{
			name: 222,
			key: '222'
		},
		{
			name: 333,
			key: '333'
		},
	]
}]
</script>

<style lang="scss" scoped>
.page-header {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	color: white;

	.header-left {
		display: flex;
		align-items: center;
		font-size: 25px;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-style: italic;
	}

	.header-right {
		width: 200px;
		height: 100%;
		display: flex;
		align-items: center;

		.el-menu {
			height: 100%;

			.el-sub-menu {
				padding: 0 40px;
			}
		}

	}
}
</style>