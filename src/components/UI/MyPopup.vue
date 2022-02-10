<template>
    <div class="popup" v-if="show" @click="hidePopup">
        <div @click.stop class="popup__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "@/mixin/toggleMixin.js"

export default {
    name: 'my-popup',
    mixins: [toggleMixin],
}
</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);

    &__content {
        min-width: 300px;
        min-height: 50px;
        padding: 24px;
        border-radius: 12px;
        background-color: #fff;
        margin: auto;
    }
}
</style>
