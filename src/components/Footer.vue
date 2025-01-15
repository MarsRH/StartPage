<template>
    <footer v-if="Config.showFooter" class="py-4 text-center border-t border-gray-2 fixed bottom-0 inset-x-0 backdrop-blur">
        <div class="max-w-7xl mx-auto px-4 text-gray-1 hover:text-black duration-300">
            <p>{{ Config.footerText }}</p>
        </div>
    </footer>
</template>

<script setup>
import Config from '../../config';
</script>

<style scoped>
</style>