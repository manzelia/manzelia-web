<script setup>
import { texts, lang } from '@/Store'
import map from '@/assets/icons/map-pin.svg?raw'
import calendar from '@/assets/icons/calendar.svg?raw'

const scrollToRegister = () => {
	const register = document.getElementById('register')
	register.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<div class="invest">
		<div class="invest__text-container padding" :class="{ 'persian-invest': lang === 'fa' }">
			<div class="invest__title">{{ texts.invest.title }}</div>
			<div class="invest__register">{{ texts.invest.register }}</div>

			<div class="invest__date-container">
				<div class="invest__date-icon" v-html="calendar"></div>
				<div class="invest__date">{{ texts.invest.date }}</div>
			</div>

			<div class="invest__address-container">
				<div class="invest__address-icon" v-html="map"></div>
				<div class="invest__address">{{ texts.invest.address }}</div>
			</div>

			<div class="invest__register-button" @click="scrollToRegister">{{ texts.invest.registerButton }}</div>
		</div>

		<div class="invest__image-container">
			<img src="@/assets/images/invest.png" alt="building" />
		</div>
	</div>
</template>

<style scoped>
.invest {
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 15px;
	width: 100%;
	height: 100%;
}

.invest__text-container {
	max-width: 600px;
	display: flex;
	flex-direction: column;
	gap: 25px;
}

.invest__title {
	min-width: 270px;
	font-size: 32px;
	font-weight: bold;
	color: #000929;
}

.invest__register {
	font-size: 20px;
	font-weight: medium;
}

.invest__address,
.invest__date {
	font-size: 14px;
}

.invest__address-container,
.invest__date-container {
	display: flex;
	align-items: center;
	gap: 10px;
}

.invest__register,
.invest__address,
.invest__date {
	color: #6C727F;
}

.invest__register-button {
	font-size: 17px;
	font-weight: bold;
	background-color: #005F56;
	color: #F9FAFC;
	padding: 10px 20px;
	border-radius: 10px;
	width: fit-content;

	cursor: pointer;
}

.invest__image-container {
	width: 100%;
	max-height: 600px;
	overflow: hidden;
}

.invest__image-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
}
</style>
