// load langData.json
import langData from './langData.json'
import { ref, computed } from 'vue'

/// TODO
export const api_url = "api.manzelia.estate";

const availableLanguages = Object.keys(langData);

export const lang = ref('en');

export const changeLang = () => {
	const index = availableLanguages.indexOf(lang.value);
	lang.value = availableLanguages[(index + 1) % availableLanguages.length];
}

export const success = ref(false);
export const error = ref(false);
export const errorMessage = ref('');
export const loading = ref(false);
export const currentDateIndex = ref(0);

export const timeout = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const texts = computed(() => {
	return langData[lang.value]
})
