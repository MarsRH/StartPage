<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

import Config from '../config';

onMounted(() => {
	document.title = Config.topTitle;
});
</script>

<template>

	<!-- Background -->
	<div class="background w-full h-full fixed bg-cover bg-center"
		:style="{ backgroundImage: `url(${Config.backgroundImageUrl})` }">

		<!-- Header -->
		<Header />

		<!-- Main Content -->
		<Main/>

		<!-- Footer -->
		<Footer />
	</div>

</template>

<style scoped></style>
