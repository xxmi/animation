<template>
    <el-container>
        <el-aside width="200px">
            <el-menu router
                     unique-opened>
                <el-submenu index="/css3">
                    <template slot="title">css3 动画</template>
                    <el-menu-item index="/css3/road">道路行驶动画</el-menu-item>
                    <el-menu-item index="/css3/car-road">汽车和道路行驶动画</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
  export default {
    name: 'app',
  };
</script>
