<template>
	<div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
	data() {
		return {
			showBlock: false,
			time: null,
			result: 0,
		};
	},
	props: ["delay"],
	methods: {
		startTimer() {
			this.time = setInterval(() => {
				this.result += 10;
			}, 10);
		},
		stopTimer() {
			clearInterval(this.time);
			console.log(this.result);
			this.$emit("end", this.result);
		},
	},
	mounted() {
		setTimeout(() => {
			this.showBlock = true;
			this.startTimer();
		}, this.delay);
	},
};
</script>

<style>
.block {
	width: 400px;
	padding: 100px;
	border-radius: 10px;
	background: lightblue;
	text-align: center;
}
</style>
