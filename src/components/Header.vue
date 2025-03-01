<script setup>
import globe from '@/assets/icons/globe.svg?raw'
import logo from '@/assets/images/logo.png'
import { changeLang, lang } from '@/Store'
</script>

<template>
	<header>
		<div class="header-content padding" :class="{ persian: lang === 'fa' }">
			<div class="header-content__left">
				<img :src="logo" alt="logo" class="header-logo-icon">
			</div>
			<div class="header-content__right" @click="changeLang">
				<div v-html="globe" alt="globe" class="header-globe-icon"></div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-logo-icon {
	width: 120px;
}

.header-globe-icon {
	cursor: pointer;
}
</style>
