<script setup>
import { texts } from '@/Store';

import mapPinIcon from '@/assets/icons/map-pin.svg?raw';
import mailIcon from '@/assets/icons/mail.svg?raw';
import phoneIcon from '@/assets/icons/phone.svg?raw';
import instagramIcon from '@/assets/icons/instagram.svg?raw';
</script>

<template>
	<div class="contact padding">
		<div class="contact__content">
			<div class="contact__title">
				{{ texts.contact.title }}
			</div>
			<div class="contact__info">
				<div class="contact__info__mail contact__info__item">
					<div class="contact__info__mail__icon ">
						<div class="contact__info__mail__icon contact__info__item__icon" v-html="mailIcon"></div>
					</div>
					<div class="contact__info__mail__text">
						{{ texts.contact.mail }}
					</div>
				</div>
				<div class="contact__info__phone contact__info__item">
					<div class="contact__info__phone__icon">
						<div class="contact__info__phone__icon contact__info__item__icon" v-html="phoneIcon"></div>
					</div>
					<div class="contact__info__phone__text">
						{{ texts.contact.phone }}
					</div>
				</div>
				<div class="contact__info__instagram contact__info__item">
					<div class="contact__info__instagram__icon">
						<div class="contact__info__instagram__icon contact__info__item__icon" v-html="instagramIcon"></div>
					</div>
					<div class="contact__info__instagram__text">
						{{ texts.contact.instagram }}
					</div>
				</div>
				<div class="contact__info__address contact__info__item">
					<div class="contact__info__address__icon">
						<div class="contact__info__address__icon contact__info__item__icon" v-html="mapPinIcon"></div>
					</div>
					<div class="contact__info__address__text">
						{{ texts.contact.address }}
					</div>
				</div>
			</div>
			<div class="contact__trademark">
				&#169;{{ texts.contact.trademark }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.contact {
	background-color: #005F56;
	text-align: center;

	padding-top: 20px;
	padding-bottom: 10px;
}

.contact__content {
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 30px;
}

.contact__title {
	font-size: 32px;
	font-weight: bold;
	color: #fff;
}

.contact__info {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.contact__info__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	font-size: 16px;
	color: rgba(255, 255, 255, 0.7);
}

.contact__info__item__icon {
	width: 40px;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	border: 0.8px solid #2bbe9b;
	background-color: rgba(43, 190, 155, 0.2);
}

.contact__trademark {
	font-size: 10px;
	color: rgba(255, 255, 255, 0.5);
}
</style>
