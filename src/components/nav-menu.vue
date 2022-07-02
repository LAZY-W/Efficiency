<template>
    <div class="nav-container">
        <el-menu>
            <el-sub-menu v-for="n in navList" :key="n.key">
                <template #title>{{n.name}}</template>
                <el-menu-item v-for="i in n.item" :key="i.key">{{i.name}}</el-menu-item>
                <el-sub-menu v-for="s in n.sub" :key="s.key">
                    <template #title>{{s.name}}</template>
                    <el-menu-item v-for="i in s.item" :key="i.key">{{i.name}}</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'nav-menu',
    props:{
        navList:{
            type: Array,
            // default:[]
        }
    },
    setup(props){
        return {
            navList:props.navList
        }
    }
})
</script>

<style type="text/css" scoped>
.nav-container{
    width:100%;
    height:100%;
    background-color: inherit;
}
</style>
