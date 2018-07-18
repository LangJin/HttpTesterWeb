<template>
    <div class="wrap">
        <el-container style="height:100%;width:100%;">
            <el-aside class="sidebarMenu" style="height:100%;width:10%;">
                <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
                    <template v-for="item in menu">
                        <el-menu-item :key="item.key"  :index="item.key" v-on:click="init">
                            <i :class="item.icon"></i>{{ item.title }}
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <el-header class="head-content" style="position:absolute;top:0;right:0;height:5%;width:90%;">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>{{ url }}</el-breadcrumb-item>
                </el-breadcrumb>
                <el-tag>用户: {{username}}</el-tag>
                <el-popover
                placement="top"
                width="160"
                v-model="visible2">
                    <p>确定退出吗？</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="logout">确定</el-button>
                    </div>
                    <el-button class="logout" slot="reference" size="mini" @click="visible2 = true">退出</el-button>
                </el-popover>
            </el-header>
            <el-main style="position:absolute;top:5%;right:0;height:95%;width:90%;">
                <transition name="move" mode="out-in"><router-view></router-view></transition>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            menu : [
                {icon : 'el-icon-setting', key: 'page1' , title: '首页'},
                {icon : 'el-icon-setting', key: 'page2' , title: '产品管理'},
                {icon : 'el-icon-setting', key: 'page3' , title: '项目管理'},
                {icon : 'el-icon-setting', key: 'page4' , title: '模块管理'},
                {icon : 'el-icon-setting', key: 'page5' , title: '用例管理'},
                {icon : 'el-icon-setting', key: 'page6' , title: '测试报告'},
                {icon : 'el-icon-setting', key: 'page7' , title: '公共配置'},
            ],
            url : '',
            username: "系统管理员",
            visible2: false
        }
    },
    created(){
        this.init();
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    methods:{
        init(){
            for(let i of this.menu){
                if(i.key == this.onRoutes){
                    this.url = i.title;
                }
            }
        },
        logout(){
            let self = this;
            self.visible2 = false;
            self.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    .wrap{
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    .el-breadcrumb{
        position: absolute;
        top: 35%;
        left: 2%;
    }
    .el-tag{
        position: absolute;
        right: 5%;
        top: 25%;
    }
    .head-content{
        border-bottom: 1px solid #ccc;

    }
    .el-main{
        background-color: #ececec;
    }
    .logout{
        position: absolute;
        right: 45px;
        top: 13px;
    }
    .sidebarMenu ul{
        height: 100%;
    }
</style>


