<template>
    <header class="header flex content-center p-4 text-center duration-1000 backdrop-blur-sm hover:backdrop-blur-lg border-b hover:border-gray-3 border-gray-2">

        <div class="flex px-8">
            <img src="../../public/icon.svg" alt="Logo" class="size-12"/>
            <span class="content-center ml-2 text-xl font-bold drop-shadow-lg" @mousemove="onMousemove"
            :style="{ color: `hsl(${x}, 40%, 50%)` }">{{ Config.title }}</span>
        </div>

        <nav v-if="Config.showMenu" class="flex-1 content-center">
            <ul class="flex flex-row-reverse">
                <li v-for="(menuItem, index) in Config.menu" :key="index"
                    class="inline px-4 duration-500 text-pearly text-lg hover:text-gray-2 decoration-2 underline-offset-4 hover:underline">
                    <a :href="menuItem.itemUrl">{{ menuItem.itemName }}</a>
                </li>
            </ul>
        </nav>
        
    </header>
</template>

<script setup>
import { ref } from 'vue';
import Config from '../../config';

const x = ref(0)
function onMousemove(e) {
    x.value = e.clientX
}
</script>

<style scoped>
</style>