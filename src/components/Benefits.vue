<script setup>
import { texts, lang } from '@/Store';

const getIconByName = (name) => {
	return new URL(`/src/assets/icons/${name}.svg`, import.meta.url).href;
}
</script>

<template>
	<div class="benefits padding">
		<div class="benefit-container">
			<div class="benefit" :class="{ 'persian-benefits': lang === 'fa' }" v-for="benefit in texts.benefits" :key="benefit.icon">
				<div class="benefit__icon">
					<img :src="getIconByName(benefit.icon)" alt="benefit-icon">
				</div>

				<div class="benefit__content">
					<div class="benefit__title">{{ benefit.title }}</div>
					<div class="benefit__text">{{ benefit.text }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.benefits {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.benefit-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.benefit {
	display: flex;
	gap: 20px;
}

.benefit__content {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.benefit__title {
	font-size: 21px;
	font-weight: bold;
	color: #000929;
}

.benefit__text {
	font-size: 14px;
	color: #4D5461;
}
</style>