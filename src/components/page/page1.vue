<template>
    <div class="page1-content">
        <el-row>
            <el-col :span="11">
                <el-card shadow="always">
                    <div class="grid-content bg-purple">
                        <el-col :span="24" style="margin-left:0;">
                            <el-card shadow="hover">
                            所有统计单接口
                            </el-card>
                        </el-col>
                        <div id="chart1" class="chart-content">
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="11">
                <el-card shadow="always">
                    <div class="grid-content bg-purple-light">
                        <el-col :span="24" style="margin-left:0;">
                            <el-card shadow="hover">
                            上次用例执行时间分段统计图
                            </el-card>
                        </el-col>
                        <div id="chart2" class="chart-content">
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="11">
                <el-card shadow="always">
                    <div class="grid-content bg-purple">
                        <el-col :span="24" style="margin-left:0;">
                            <el-card shadow="hover">
                            每个项目的模块数量统计
                            </el-card>
                        </el-col>
                        <div id="chart3" class="chart-content">
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="11">
                <el-card shadow="always">
                    <div class="grid-content bg-purple-light">
                        <el-col :span="24" style="margin-left:0;">
                            <el-card shadow="hover">
                            每个模块的用例数量统计
                            </el-card>
                        </el-col>
                        <div id="chart4" class="chart-content">
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data:function(){
        return {

        }
    },
    created(){
        
    },
    mounted(){
        this.buildChart1();
        this.buildChart2();
        this.buildChart3();
        this.buildChart4();
    },
    methods:{
        buildChart1(){
            let myChart = this.$echarts.init(document.getElementById('chart1'));
            
            let option = {
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            myChart.setOption(option);
        },
        buildChart2(){
            let myChart = this.$echarts.init(document.getElementById('chart2'));
            
            let option = {
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            myChart.setOption(option);
        },
        buildChart3(){
            let myChart = this.$echarts.init(document.getElementById('chart3'));
            
            let option = {
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            myChart.setOption(option);
        },
        buildChart4(){
            let myChart = this.$echarts.init(document.getElementById('chart4'));
            
            let option = {
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            myChart.setOption(option);
        }
    }
}
</script>

<style>
    .page1-content{
        width: 99%;
        height: 98%;
        margin-left: 1%;
        margin-top: 1%;
    }
    .el-row{
        height: 49%;
    }
    .el-row:nth-child(2){
        margin-top: 1%;
    }
    .el-col{
        height: 95%;
        border-radius: 5px;
        margin-left: 45px;
        background-color: #fff;
    }
    .el-card{
        height: 100%;
    }
    .el-card__body{
        font-size: 18px;
        text-indent: 18px;
        padding:0;
    }
    .chart-content{
        height: 420px;
    }
</style>


