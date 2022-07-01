<template>
    <div class="main-page">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="nav-left">
            <slot name="nav-left"></slot>
        </div>
        <div class="main-content">
            <slot name="main-content"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-page {
    width: 100%;
    height: 100vh;
    min-width: 1200px;
    padding: 60px 0 0 200px;
    position: relative;

    .header {
        width: 100%;
        height: 60px;
        padding: 0 30px;
        background-color: #4472C4;
        position: absolute;
        top: 0;
        left: 0;
    }

    .nav-left {
        width: 200px;
        position: absolute;
        top: 60px;
        left: 0;
        bottom: 0;
    }
}
</style>