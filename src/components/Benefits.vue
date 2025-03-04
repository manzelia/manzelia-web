<script setup>
import { texts, lang } from '@/Store';

import collaboration from '@/assets/icons/collaboration.svg?raw';
import transactions from '@/assets/icons/transactions.svg?raw';
import discounts from '@/assets/icons/discounts.svg?raw';
import residency from '@/assets/icons/residency.svg?raw';

import collaboration_rel from '@/assets/icons/collaboration-rel.svg?raw';
import transactions_rel from '@/assets/icons/transactions-rel.svg?raw';
import discounts_rel from '@/assets/icons/discounts-rel.svg?raw';
import residency_rel from '@/assets/icons/residency-rel.svg?raw';

const icons = {
	'collaboration': [collaboration, collaboration_rel],
	'transactions': [transactions, transactions_rel],
	'discounts': [discounts, discounts_rel],
	'residency': [residency, residency_rel],
}

</script>

<template>
	<div class="benefits padding">
		<div class="benefit-container">
			<div class="benefit" :class="{ 'persian-benefits': lang === 'fa' }" v-for="benefit, index in texts.benefits" :key="benefit.icon">
				<div class="benefit-icon-container">
					<div class="benefit__icon">
						<div class="icon" v-html="icons[benefit.icon][0]"></div>
					</div>

					<div class="benefit__icon-rel">
						<div class="icon icon-rel" v-html="icons[benefit.icon][1]"></div>
					</div>
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

.benefit-icon-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	width: 50px;
	height: 50px;

	border-radius: 50%;
	border: 2px solid rgba(0, 95, 86, 0.25);
	
}

.icon {
	display: flex;
	justify-content: center;
	align-items: center;
}

.benefit__icon {
	width: 100%;
	height: 100%;
	border: 3px solid #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;
	background: rgba(0, 95, 86, 0.25);
}

.benefit__icon-rel {
	position: absolute;
	right: 0;
	bottom: -3px;
	width: 20px;
	height: 20px;
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