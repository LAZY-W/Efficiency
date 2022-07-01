<template>
	<div class="page-header">
		<div class="header-left">
			<svg-icon name="logo" style="width: 60px; height: 60px; " />
			<span>Efficiency</span>
		</div>
		<div class="header-right">
			<el-menu>
				<el-sub-menu>
					<template #title>{{ userId ? userId : 'login' }}</template>
					<el-menu-item index="2-1">item one</el-menu-item>
					<el-menu-item index="2-2">item two</el-menu-item>
					<el-menu-item index="2-3">item three</el-menu-item>
					<el-sub-menu index="2-4">
						<template #title>item four</template>
						<el-menu-item index="2-4-1">item one</el-menu-item>
						<el-menu-item index="2-4-2">item two</el-menu-item>
						<el-menu-item index="2-4-3">item three</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
			</el-menu>
		</div>
	</div>
</template>

<script setup>
import svgIcon from "@/components/svg-icon.vue";
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
			width: 100%;
			height: 100%;
			background-color: #4472C4;
			color: white;
		}
	}
}
</style>