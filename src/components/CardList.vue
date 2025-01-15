<script setup>
import Card from "./Card.vue";
import Config from "../../config";

// load sites from config file
const sites = Config.sites;
</script>

<template>

    <div class="flex flex-wrap justify-evenly items-center content-evenly">
        <!-- 列表渲染 -->
        <Card v-for="(site, index) in sites" :key="index" :siteName="site.siteName" :siteUrl="site.siteUrl"
            :imageUrl="site.imageUrl" />

    </div>
</template>

<style></style>