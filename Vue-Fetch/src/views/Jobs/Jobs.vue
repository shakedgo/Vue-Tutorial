<template>
	<div v-if="jobs.length">
		<div v-for="job in jobs" :key="job.id">
			<RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">{{ job.name }}</RouterLink>
		</div>
	</div>
	<div v-else><h1>Loading...</h1></div>
</template>

<script>
export default {
	data() {
		return {
			jobs: [],
		};
	},
	mounted() {
		fetch("http://localhost:3000/jobs")
			.then((res) => res.json())
			.then((data) => {
				this.jobs = data;
			})
			.catch((err) => console.log(err.message));
	},
};
</script>

<style></style>
