<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
import './assets/styles.css'
</script>

<template>
	<div id="app" class="app">
		<TheNavigation />
		<router-view />
	</div>
</template>