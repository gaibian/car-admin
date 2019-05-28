<template>
    <div class="car-admin-container main-page">
        <div class="top-info-box">
            <el-select v-model="fenbu" placeholder="请选择分部">
                <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <el-table :data="tableData" border stripe>
            <el-table-column label="急救中心" prop="jijiu"></el-table-column>
            <el-table-column label="车牌号" prop="plate"></el-table-column>
            <el-table-column label="车编号" prop="num"></el-table-column>
            <el-table-column label="分类" prop="label"></el-table-column>
            <el-table-column label="使用日期" prop="time"></el-table-column>
            <el-table-column label="资产类别" prop="zichan"></el-table-column>
            <el-table-column label="使用人" prop="person"></el-table-column>
            <el-table-column label="出车状态">
                <template slot-scope="scope">
                    <span>{{scope.row.status | statusFilters}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleEdit">编辑</el-button>
                    <el-button @click="handleDelete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name:'carAdmin',
    data() {
        return {
            fenbu:'',
            tableData:[{
                jijiu:'中医院急救点',
                plate:'浙B542WX',
                num:'0128',
                label:'A型普通',
                time:'2019-09-23',
                zichan:'私有',
                person:'张三',
                status:'1',
            },{
                jijiu:'中医院急救点',
                plate:'浙B542WX',
                num:'0128',
                label:'A型普通',
                time:'2019-09-23',
                zichan:'私有',
                person:'张三',
                status:'1',
            },{
                jijiu:'中医院急救点',
                plate:'浙B542WX',
                num:'0128',
                label:'A型普通',
                time:'2019-09-23',
                zichan:'私有',
                person:'张三',
                status:'1',
            },{
                jijiu:'中医院急救点',
                plate:'浙B542WX',
                num:'0128',
                label:'A型普通',
                time:'2019-09-23',
                zichan:'私有',
                person:'张三',
                status:'1',
            },{
                jijiu:'中医院急救点',
                plate:'浙B542WX',
                num:'0128',
                label:'A型普通',
                time:'2019-09-23',
                zichan:'私有',
                person:'张三',
                status:'1',
            }],
            options:[{
                label:'本部分中心',
                value:'1'
            },{
                label:'江北分中心',
                value:'2'
            }]
        }
    },
    filters:{
        statusFilters(val) {
            switch(val) {
                case '1':
                return '待命中'
                break;
            }
        }
    },
    methods:{
        handleEdit() {
            console.log('编辑了')
        },
        handleDelete() {
            console.log('删除了')
        }
    }
}
</script>
<style lang="scss" scoped>
.car-admin-container{
    width:100%;
    font-size:16px;
    color:#333;
}
.top-info-box{
    width:100%;
    margin-bottom:12px;
}
</style>
