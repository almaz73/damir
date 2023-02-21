<template>
    <div class="modal" v-if="show">
        <div class="modal__block">
            <div class="modal__title">
                <h2>{{ this.title }}</h2>
            </div>
            <div class="modal__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "",
        }
    }

}
</script>

<style scoped></style>