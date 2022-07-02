<template>
	<mainLayout>
		<template #header>
			<pageHeader />
		</template>
		<template #nav-left>
			<nav-menu :navList="navList"/>
		</template>
		<template #main-content>
			main
		</template>
	</mainLayout>
</template>

<script setup>
import pageHeader from "@/components/page-header.vue";
import mainLayout from "@/layout/main-layout.vue";
import navMenu from '@/components/nav-menu.vue'

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

<style>
</style>