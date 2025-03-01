<script setup>
import Header from './components/Header.vue'
import Invest from './components/Invest.vue'
import About from './components/About.vue'
import Speakers from './components/Speakers.vue'
import Benefits from './components/Benefits.vue'
import Register from './components/Register.vue'
import Contact from './components/Contact.vue'
import SuccesPopup from './components/SuccessPopup.vue'
import Error from './components/Error.vue'
</script>

<template>
	<div class="container">
		<Header />

		<div class="container-content">
			<Invest />
			<About />
		</div>

		<Speakers />
		<Benefits />
		<Register />
		<Contact />

		<SuccesPopup />
		<Error />
	</div>
</template>

<style scoped>

.container {
	display: flex;
	flex-direction: column;

	gap: 60px;
}

.container-content {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

</style>
