<template>
	<h1>Welcome to the Reaction Time Test</h1>
	<button v-if="!test" @click="start">Click to Test</button>
	<Results v-else-if="showResults" :results="results" />
	<Block v-else :delay="delay" @end="resultHandler" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";
export default {
	data() {
		return {
			test: false,
			delay: null,
			showResults: false,
			results: null,
		};
	},
	components: { Block, Results },
	methods: {
		start() {
			this.delay = 2000 + Math.random() * 5000;
			this.test = true;
		},
		resultHandler(result) {
			this.results = result;
			this.showResults = true;
		},
	},
};
</script>

<style></style>
