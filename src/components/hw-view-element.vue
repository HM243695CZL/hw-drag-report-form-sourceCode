<template>
    <div class="view-element">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hw-view-element",
        props: {
            text: {
                type: String,
                default: 'x'
            }
        },
        mounted(){
            console.log('### ' + this.text + ' ready!');
        }
    }
</script>

<style scoped>

</style>
