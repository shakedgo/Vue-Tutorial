<template>
	<div v-for="job in jobs" :key="job.id">
		<RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">{{ job.name }}</RouterLink>
	</div>
</template>

<script>
export default {
	data() {
		return {
			jobs: [
				{ name: "Web Developer", id: 1 },
				{ name: "Web Designer", id: 2 },
			],
		};
	},
};
</script>

<style></style>
