<template>
    <h1 class="title">Добро пожаловать во Vue 3</h1>

    <my-button @click="showPopup">Открыть попап</my-button>

    <my-popup v-model:show="popupVisible">Попап</my-popup>

    <my-input></my-input>
</template>

<script>
export default {
    data() {
        return {
            popupVisible: false,
        }
    },
    methods: {
        showPopup() {
            this.popupVisible = true;
        },
    }
}
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
}
</style>
