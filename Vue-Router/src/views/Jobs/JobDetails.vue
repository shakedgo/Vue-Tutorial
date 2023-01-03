<template>
	{{ id }}
</template>

<script>
export default {
	// data() {
	// 	return {
	// 		id: this.$route.params.id,
	// 	};
	// },
	// Instead of doing this to get the params, we can set the props true in the index
	// And set props to 'id'
	props: ["id"],
};
</script>

<style></style>
