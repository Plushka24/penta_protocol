<template>
	<div class="vue-modal" v-show="open">
		<div class="vue-modal-inner">
			<div class="vue-modal-content">
				<slot/>
				<img src="./assets/close.svg" @click="$emit('close')" class="exitListing">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			open: {
				type: Boolean,
				required: true,
			}
		}
	}
</script>