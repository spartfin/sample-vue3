<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [
            String,
            Number
        ]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid $color_red;
    margin-top: 16px;

    @include mq(767) {
        font-size: 12px;
    }
}
</style>
