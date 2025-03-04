
<script setup>
import { success, error , texts, currentDateIndex } from '@/Store';
import Button from './Button.vue';

const closePopup = () => {
	success.value = false;
};

const getDate = (text) => {
	const dates = texts.value.register.form.dates;

	return text.replace("{date}", dates[currentDateIndex.value]);
}

</script>

<template>
	<div v-if="true || success" class="popup">
		<div class="popup-content">
			<div class="popup-title">
				{{ texts.successPopup.success }}
			</div>

			<div class="popup-text">
				{{ getDate(texts.successPopup.congratulations) }}
			</div>

			<div class="popup-checkmark">
				<img src="@/assets/icons/checkmark.svg" alt="checkmark" />
			</div>

			<div class="close-button">
				<Button :text="texts.successPopup.close" @click="closePopup" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.popup {
	position: fixed;
	top: 15%;
	left: calc(50% - 250px);
	height: 70%;
	max-height: 500px;
	max-width: calc(min(100%, 500px));
	background: #fcfcfc;

	padding: 20px 20px;
	text-align: center;
	border-radius: 20px;
}

.popup-content {
	background: white;
	border-radius: 5px;
	text-align: center;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.close-button {
	width: 80%;
}

.popup-title {
	font-size: 16px;
	font-weight: bold;
	color: #000929;
}

.popup-text {
	font-size: 14px;
	color: #000929;
}

.popup-checkmark {
	width: 30%;
	max-width: 90px;

	display: flex;
	justify-content: center;
	align-items: center;

	border: 5px solid #BDBDBD;
	border-radius: 50%;
}

.popup-checkmark img {
	width: 100%;
}

@media (max-height: 400px) {
	.popup-checkmark {
		display: none;
	}
}

@media (max-width: 260px) {
	.popup-checkmark {
		display: none;
	}
}
	
	
@media (max-width: 570px) {
	.popup {
		left: 5%;
		width: 90%;
		max-width: 100%;
	}
}
</style>