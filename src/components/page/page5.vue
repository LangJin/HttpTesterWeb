<template>
    <div class="page5-content">
        <el-table
            :data="tableData3"
            border
            style="width: 100%;height:100%;">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column
            label="操作"
            width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData3: [{
                date: '2016-05-03',
                name: '王4虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    }
}
</script>

<style>
    .page5-content{
        width: 98%;
        height: 95%;
        margin-left: 1%;
        margin-top: 1%;
        background-color: #ffffff;
    }
</style>
