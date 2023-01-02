<template>
	<h2>{{ title }}</h2>
	<input type="text" ref="inputRef" />
	<!-- <button @click="handleClick">Focus</button> -->
	<button @click="setText">Change Text</button>
	<Banner v-if="showBanner" :title="text + ' 1'" @close="toggleBanner" />
	<Banner v-if="showBanner" :title="text + ' 2'" @close="toggleBanner" />
	<BannerSlot v-if="showBanner">
		<div>Slot Banner {{ text + " 3" }}</div>
		<template v-slot:btn>
			<button @click="toggleBanner">Don't show Banners</button>
		</template>
	</BannerSlot>
	<button v-else @click="toggleBanner">Show Banners</button>
</template>

<script>
import Banner from "./components/Banner.vue";
import BannerSlot from "./components/BannerSlot.vue";

export default {
	data() {
		return {
			title: "Hello World",
			text: "",
			showBanner: true,
		};
	},
	components: { Banner, BannerSlot },
	methods: {
		handleClick() {
			this.$refs.inputRef.focus();
		},
		setText() {
			this.text = this.$refs.inputRef.value;
			console.log(this.text);
		},
		toggleBanner() {
			this.showBanner = !this.showBanner;
		},
	},
};
</script>

<style></style>
