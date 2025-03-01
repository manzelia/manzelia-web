<script setup>
import { texts, lang } from '@/Store'
</script>

<template>
	<div class="about padding" :class="{ 'persian-about': lang === 'fa' }">
		<div class="about-gradient">
			<div class="about-card">
				<div class="about-card__title">
					{{ texts.about.card.title }}
				</div>

				<div class="about-card__text">
					{{ texts.about.card.text }}
				</div>
			</div>

			<div class="about-card__image">
				<img src="@/assets/images/about.png" alt="about" />
			</div>
		</div>

		<div class="about-content">
			<div class="about-description">
				<div class="about-description__text">
					{{ texts.about.description }}
				</div>
			</div>

			<div class="about-content__title">
				{{ texts.about.title }}
			</div>

			<div class="about-content__list">
				<ul>
					<li v-for="item in texts.about.list" :key="item.id">
						{{ item }}
					</li>
				</ul>
			</div>

			<div class="about-chance">
				{{ texts.about.chance }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.about {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	gap: 40px;
}

.about-gradient {
	background: linear-gradient(to bottom, #005F56, #373737);
	border-radius: 8px;
	max-height: 800px;
	max-width: 460px;

	display: flex;
	flex-direction: column;
	gap: 40px;
}

.about-card {
	position: relative;
	top: 35px;
	left: -20px;

	border: 1.5px solid #017E72;
	background: #FFFFFF;
	border-radius: 8px;
	padding: 20px;
}

.about-card__image {
	display: flex;
	justify-content: center;
	align-items: center;
}

.about-card__image img {
	width: 100%;
	height: 100%;
}

.about-card__title {
	font-size: 18px;
	font-weight: bold;
	color: #000929;
}

.about-card__text {
	font-size: 12px;
	color: #6C727F;
}

.about-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
}

.about-description, .about-content__list {
	font-size: 16px;
	color: #6C727F;
}

.about-content__title {
	font-size: 32px;
	font-weight: bold;
	color: #000929;

	text-align: center;
}

ul, li {
	padding: 0;
	margin: 0;

}

.about-chance {
	font-size: 16px;
	color: #000929;
	font-weight: bold;
}
</style>