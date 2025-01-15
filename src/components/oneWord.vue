<script setup>
import { ref, onMounted } from 'vue';
import Config from '../../config';

const oneWord = ref('');
const from = ref('');

const fetchOneWord = async () => {
    try {
        const response = await fetch(Config.oneWordUrl);
        const data = await response.json();
        oneWord.value = data.hitokoto;
        from.value = data.from;
    } catch (error) {
        console.error('Failed to fetch one word:', error);
    }
};

onMounted(() => {
    fetchOneWord();
});
</script>

<template>
    <div v-if="Config.showOneWord" class="one-word relative w-2/5 text-pearly text-xl selection:bg-wgreen">
        <!-- 左括弧 -->
        <div class="bracket-left inline absolute -top-10 -left-10">『</div>
        <p class="text-center tracking-wide text-2xl">{{ oneWord }}</p>
        <br />
        <p class="text-end text-gray-4">——{{ from }}</p>
        <!-- 右括弧 -->
        <div class="bracket-right inline absolute -bottom-10 -right-10">』</div>
    </div>
</template>

<style scoped>
p {
    user-select: text;
}
</style>