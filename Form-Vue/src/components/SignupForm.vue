<template>
	<form @submit.prevent="handleSubmit">
		<!-- prevents from page refresh -->
		<label>Email: </label>
		<input type="email" required v-model="email" />
		<br />
		<label>Password: </label>
		<input type="password" required v-model="password" />
		<div v-if="passError">{{ passError }}</div>
		<br />
		<button type="submit">Submit</button>
	</form>

	<select v-model="role">
		<option value="developer">Developer</option>
		<option value="designer">Designer</option>
	</select>

	<div>
		<input type="checkbox" v-model="terms" required />
		<label>Terms</label>
	</div>

	<div>
		<input type="checkbox" value="Shaked" v-model="names" />
		<label>Shaked</label>
		<input type="checkbox" value="Yossi" v-model="names" />
		<label>Yossi</label>
	</div>

	<div>
		<label>Skill:</label>
		<input type="text" v-model="tempSkill" @keypress="addSkill" />
		<!--  
        v-model updates tempSkill
        @keypress fires a method that checks if key was enter to add it to skills
        -->
	</div>
	<p>Email: {{ email }}</p>
	<p>Password: {{ password }}</p>
	<p>Role: {{ role }}</p>
	<p>Terms: {{ terms ? "Checked" : "Not Checked" }}</p>
	<p>Names: {{ names }}</p>
	<p>TempSkill: {{ tempSkill }}</p>
	<div>
		Skills:
		<div v-for="skill in skills" :key="skill" @click="removeSkill(skill)">{{ skill }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: "",
			password: "",
			role: "developer", // Setting default value to developer
			terms: false, // boolean for checked or not checked
			names: [], // array for multiple checkboxs, need name value with v-model="name"
			tempSkill: "",
			skills: [],
			passError: "",
		};
	},
	methods: {
		addSkill(e) {
			if (e.key === "Enter" && this.tempSkill) {
				if (!this.skills.includes(this.tempSkill.trim())) this.skills.push(this.tempSkill);
				this.tempSkill = "";
			}
		},
		removeSkill(skill) {
			// for (let s of this.skills) {
			// 	if (skill === s) this.skills.splice(s, 1);
			// }
			this.skills = this.skills.filter((s) => s !== skill);
		},
		handleSubmit() {
			if (this.password.length <= 6) this.passError = "Password Must be more than 6 characters";
			else this.passError = "";
		},
	},
};
</script>

<style></style>
