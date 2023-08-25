<template>
  <span>地址：{{ area }}</span>
</template>

<script>
export default {
    data() {
        return {
            area: ''
        }
    },
    create() {
        this.area = this.dsNameMap('hz') /* 杭州 */
    }
}
</script>

<style>

</style>