<template>
    <div class="tab-wrapper">
        <ul>
            <li class="tab-item active">选项一</li>
            <li class="tab-item">选项一</li>
            <li class="tab-item">选项一</li>
            <li class="tab-item">选项一</li>
        </ul>
        <div class="page-wrapper">   
            <div class="page-item active">page 一</div>
            <div class="page-item">page 一</div>
            <div class="page-item">page 一</div>
            <div class="page-item">page 一</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped lang="css">
.tab-wrapper {
    width: 500px;
    height: 500px;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid #ccc;
}
.tab-wrapper ul {
    height: 50px;
    line-height: 50px;
}
.tab-wrapper ul>li {
  float: left;
  width: 25%;
  text-align: center;
  text-decoration: none;
}
.tab-item.active {
    background: #c0928c;
    color: #fff;
}
.page-item {
    position: relative;
    height: 450px;
}
.page-item.fade .inner{
    position: relative;
    width: 100%;
    height: 100%;
}
.page-item.slide .inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 2000px;
    height: 100%;
    transition: transform .3s;
     
}
.page-item {
    width: 500px;
    height: 100%;
    text-align: center;
    line-height: 450px;
    font-size: 100px;
    visibility: hidden;
}
.page-item.active {
    visibility: visible;
}
</style>