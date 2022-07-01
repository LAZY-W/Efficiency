<template>
	<mainLayout>
		<template #header>
			<pageHeader />
		</template>
		<template #nav-left>
			nav
		</template>
		<template #main-content>
			main
		</template>
	</mainLayout>
</template>

<script setup>
import pageHeader from "@/components/page-header.vue";
import mainLayout from "@/layout/main-layout.vue";
</script>

<style>
</style>