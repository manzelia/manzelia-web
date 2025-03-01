<script setup>
import { loading } from '@/Store';

const props = defineProps({
	text: String,
	click: Function,
});
</script>

<template>
	<div class="button" :class="{ loading }" @click="click">
		{{ loading ? '' : text }}
	</div>
</template>

<style scoped>

.button {
	width: 100%;
	border-radius: 5px;
	background: linear-gradient(90deg, #005F56 0%, #078276 83%);
	color: #fff;
	min-height: 40px;

	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	-webkit-user-select: none;
}

.button.loading::after {
	content: '';
	width: 15px;
	height: 15px;

	border: 3px solid #005F56;
	border-top: 3px solid #66aca5;
	border-radius: 50%;
	display: inline-block;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.button:hover {
	cursor: pointer;
}

</style>