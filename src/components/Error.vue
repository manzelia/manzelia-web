<script setup>
import { error, errorMessage, texts } from '@/Store';
</script>

<template>
	<div class="error" :class="{ 'error--active': error }">
		<div class="error__title">{{ errorMessage }}</div>
	</div>
</template>

<style scoped>
.error {
	opacity: 0;
	display: flex;
	position: fixed;
	top: 0;
	left: 15%;
	width: 70%;
	background-color: #e57373;
	z-index: 1000;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	padding: 20px;

	transition: all 0.5s ease;
}

.error__title {
	color: #f2f2f2;
	width: 100%;
	text-align: center;
	word-break: break-all;
}

.error--active {
	opacity: 1;
}
</style>