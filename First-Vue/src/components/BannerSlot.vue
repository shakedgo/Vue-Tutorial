<template>
	<div class="container">
		<slot />
		<div><slot name="btn" /></div>
	</div>
</template>

<script>
export default {
	props: ["title"],
	methods: {
		toggle() {
			this.$emit("close"); // listening to close on parent component
			// On parent component: @close="toggleBanners"
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	padding: 10px;
	justify-content: center;
	align-items: center;
	margin: 5px;
	border: 1px solid black;
	border-radius: 8px;
}
</style>
