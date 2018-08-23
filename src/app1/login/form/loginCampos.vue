<script>
export default {
	data () {
		return {
			user: {
				email: '',
				password: ''
			}
		}
	}
}
</script>

<template>
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<label>E-mail</label>
				<input type="email" v-model="user.email" class="form-control">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" v-model="user.password" class="form-control">
			</div>
			<button type="submit" @click="doLogin" class="btn btn-default" :disabled="!isValid">Submit</button>
		</div>
	</div>
</template>
