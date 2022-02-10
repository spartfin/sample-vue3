<template>
    <div class="navbar">
        <div class="navbar__logo" @click="$router.push('/')">Vue 3</div>

        <div class="navbar__btns">
            <my-button class="navbar__btn" @click="$router.push('/about')">О приложении</my-button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 15px;

    &__btns {
        margin-left: auto;
    }

    &__logo {
        cursor: pointer;

        &:hover {
            opacity: 0.6;
        }
    }

    &__btn {
        margin-right: 16px;
    }
}

@keyframes slide {
    0% {
        background-position: 0% 0%;
    }

    50% {
        background-position: 100% 0%;
    }

    100% {
        background-position: 0% 0%;
    }
}
</style>
