<template>
	<p v-if="job">
		{{ job.id }}
		{{ job.details }}
	</p>
	<p v-else>Loading...</p>
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
	data() {
		return {
			job: null,
		};
	},
	mounted() {
		fetch("http://localhost:3000/jobs/" + this.id)
			.then((res) => res.json())
			.then((data) => {
				this.job = data;
			})
			.catch((err) => console.log(err.message));
	},
};
</script>

<style></style>
