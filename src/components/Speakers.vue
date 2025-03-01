<script setup>
import { texts } from '@/Store';
</script>

<template>
    <div class="speakers padding">
		<div class="title">
			<div class="title__text">{{ texts.speakers.title }}</div>
			<div class="have_to_say">{{ texts.speakers.have_to_say }}</div>
		</div>
		<div class="quote">
			<div class="quote__text">{{ texts.speakers.quote }}</div>
		</div>
		<div class="founder">
			<span class="founder__name">{{ texts.speakers.founder_name }}</span>
			<span class="founder__text">{{ texts.speakers.founder }}</span>
		</div>
    </div>
</template>

<style scoped>
.speakers {
	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: 20px;
	text-align: center;
}

.title {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.title__text {
	font-size: 32px;
	font-weight: bold;
	color: #000929;
}

.have_to_say {
	font-size: 16px;
	color: #6C727F;
}

.quote__text {
	font-size: 20px;
	color: #000929;
	font-weight: medium;
}

.founder__name {
	font-size: 16px;
	color: #000929;
	font-weight: bold;
}

.founder__text {
	font-size: 16px;
	color: #6C727F;
}	
</style>