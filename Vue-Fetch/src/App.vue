<template>
	<nav>
		<!-- RouterLink = react's <Link to="/"> -->
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink :to="{ name: 'about' }">About</RouterLink>
		<RouterLink to="/jobs">Jobs</RouterLink>
	</nav>
	<RouterView />
	<!-- RouterView = react's Outlet -->
</template>

<script></script>
<style></style>
