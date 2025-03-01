<script setup>
import { texts, timeout, loading, currentDateIndex, success, error, lang, errorMessage, api_url } from '@/Store';
import Button from './Button.vue';

const arrows = ['arrow1', 'arrow2'];

const firstName = defineModel('First Name');
const lastName = defineModel('Last Name');
const email = defineModel('Email');
const phone = defineModel('Phone');

const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const changeDate = () => {
	currentDateIndex.value = (currentDateIndex.value + 1) % arrows.length;
}

const getArrow = () => {
	const arrowName = arrows[currentDateIndex.value];
	return new URL(`/src/assets/icons/${arrowName}.svg`, import.meta.url).href;
}

const register = async () => {
	if (loading.value) return ;
	
	loading.value = true;
	let errored = false;
	
	try {

		if (!firstName.value || !lastName.value || !email.value || !phone.value) {
			errorMessage.value = texts.value.register.error;

			throw new Error();
		}

		if (!emailTest.test(email.value)) {
			errorMessage.value = texts.value.register.emailError;

			throw new Error();
		}

		let response = await fetch(`${api_url}/sheets/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName.value,
				lastName: lastName.value,
				email: email.value,
				phoneNumber: phone.value,
				expoDate: texts.value.register.form.dates[currentDateIndex.value],
			}),
		});

		response = await response.json();
		
		console.log(response);
		
		if (!response.ok) {
			throw new Error('Registration failed');
		}
	} catch (err) {
		errored = true;

		console.log(err);
	} finally {

		loading.value = false;

		if (errored) {

			if (!errorMessage.value) {
				errorMessage.value = texts.value.error.error;
			}

			error.value = true;
			await timeout(3000);
			error.value = false;

			errorMessage.value = '';

			return ;
		}

		success.value = true;
	}
}
</script>

<template>
	<div class="register padding" id="register" :class="{ 'persian-register': lang === 'fa' }">
		<div class="register__content">
			<div class="register__text_content">
				<div class="register__no_spam">{{ texts.register.no_spam }}</div>
				<div class="register__title">{{ texts.register.title }}</div>
				<div class="register__text">{{ texts.register.text }}</div>
			</div>
			<div class="register__form">
				<div class="row">
					<div class="register__form__input">
						<input type="text" :placeholder="texts.register.form.first_name" v-model="firstName" />
					</div>
					<div class="register__form__input">
						<input type="text" :placeholder="texts.register.form.last_name" v-model="lastName" />
					</div>
				</div>
				<div class="register__form__input">
					<input type="email" :placeholder="texts.register.form.email" v-model="email" />
				</div>
				<div class="register__form__input">
					<input type="text" :placeholder="texts.register.form.phone" v-model="phone" />
				</div>

				<div class="register__form__date">
					<div class="register__form__date__text_container">
						<div class="register__form__date__text_container__icon">
							<img src="@/assets/icons/calendar.svg" alt="calendar" class="register__form__date__text_container__icon__image">
						</div>
						<div class="register__form__date__text">
							{{ texts.register.form.dates[currentDateIndex] }}
						</div>
					</div>
					<div class="register__form__change_date" @click="changeDate">
						<img :src="getArrow()" alt="arrow" class="register__form__change_date__arrow">
					</div>
				</div>

				<Button :text="texts.register.form.button" :click="register" />
			</div>
		</div>
		<div class="register__form__limited">
			{{ texts.register.form.limited }}
		</div>
	</div>
</template>

<style scoped>
.register {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 20px;
}

.register__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
}

.register__no_spam {
	font-size: 25px;
	font-weight: bold;
	color: #005F56;
}

.register__title {
	font-size: 33px;
	font-weight: bold;
	color: #000929;
}

.register__text {
	font-size: 16px;
	color: #6C727F;
	opacity: 0.5;
}

.register__text_content {
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 10px;
}

.register__form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
}

.row {
	width: 100%;
	display: flex;
	gap: 10px;
}

.register__form__input {
	width: 100%;
}

.register__form__input input, .register__form__date {
	padding: 10px 20px;
	width: 100%;
	border-radius: 5px;
	background-color: #fff;
	color: #6C727F;
	font-size: 12px;

	border: none;
}

.register__form__input input:focus {
	outline: none;
}

.register__form__input input::placeholder {
	color: #6C727F;
}

.register__form__limited {
	font-size: 12px;
	color: #6C727F;
}

.register__form__date {
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
}

.register__form__date__text_container, .register__form__date__text_container__icon {
	display: flex;
	align-items: center;
	gap: 10px;
}

.register__form__change_date {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

.register__form__change_date__arrow {
	width: 14px;
	height: 14px;
}
</style>