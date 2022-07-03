<template>
	<mainLayout>
		<template #header>
			<pageHeader />
		</template>
		<template #nav-left>
			<!-- <nav-menu :navList="navList"/> -->
			<el-menu>
				<el-sub-menu v-for="n in navList" :key="n.key">
					<template #title>{{ n.name }}</template>
					<el-menu-item v-for="i in n.item" :key="i.key"><span class="dot"></span>{{ i.name }}</el-menu-item>
				</el-sub-menu>
			</el-menu>
		</template>
		<template #main-content>
			main
		</template>
	</mainLayout>
</template>

<script setup>
import pageHeader from "@/components/page-header.vue";
import mainLayout from "@/layout/main-layout.vue";
// import navMenu from '@/components/nav-menu.vue'

const navList = [
	{
		name: '功能列表',
		key: '/main',
		item: [
			{
				name: 'queue',
				key: '/main/queue'
			}
		]
	}
]
</script>

<style lang="scss" scoped>
.el-menu {
	// border: 1px solid blue !important;

	.el-sub-menu {

		// border: 1px solid red;
		:deep(.el-sub-menu__title) {
			border-bottom: 1px solid silver;
			padding: 0 40px !important;


		}
	}
}

.el-menu-item {
	padding: 0 40px !important;
}

.dot {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: black;
	margin-right: 10px;
}
</style>