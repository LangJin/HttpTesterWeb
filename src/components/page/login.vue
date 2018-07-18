<template>
    <div class="login-content">
        <el-input style="margin-top: 20px;"
        type="username"
        size="small"
        placeholder="请输入账号"
        v-model="username"
        clearable>
        </el-input>
        <el-input style="margin-top: 20px;"
        type="password"
        size="small"
        placeholder="请输入密码"
        v-model="password"
        clearable>
        </el-input>
        <el-button style="margin-top: 20px;width:100%;" size="small" type="primary" v-on:click="login">登录</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: '',
            password: ''
        }
    },
    created(){
        
    },
    methods:{
        login(){
            let self = this;

            self.username,self.password;

            self.$router.push('/page1');
        }
    }
}
</script>

<style>
    .login-content{
        position: absolute;
        top: 35%;
        left: 40%;
        width: 20%;
        height: 50%;
    }
</style>


