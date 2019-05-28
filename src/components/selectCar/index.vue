<template>
    <div class="select-car-container">
        <el-dialog title="选择车辆" :visible.sync="dialogTreeVisible" :modal-append-to-body="false" width="360px" center :before-close="handleClose">
            <div class="car-dialog">
                <el-scrollbar style="height:100%">
                    <el-tree
                    :data="treeData"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]"
                    :props="defaultProps">
                    </el-tree>
                </el-scrollbar>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleCancel">取 消</el-button>
                <el-button type="primary" @click="handleClick">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:'selectCar',
    props:{
        flag:{
            type: Boolean,
            default:false
        }
    },
    watch:{
        flag() {
            this.dialogTreeVisible = this.flag
        }
    },
    data() {
        return {
            carPlate:'浙B102NN',
            dialogTreeVisible:false,
            treeData:[{
                id:1,
                label:'宁波市急救中心',
                children:[{
                    id:2,
                    label:'本部分中心',
                    children:[{
                        id:101,
                        label:'浙B102NN'
                    },{
                        id:102,
                        label:'浙B102MM'
                    },{
                        id:103,
                        label:'浙B102NJ'
                    }]
                },{
                    id:3,
                    label:'海曙分中心',
                    children:[{
                        id:101,
                        label:'浙B102NN'
                    },{
                        id:102,
                        label:'浙B102MM'
                    },{
                        id:103,
                        label:'浙B102NJ'
                    }]
                },{
                    id:4,
                    label:'江北分中心',
                    children:[{
                        id:101,
                        label:'浙B102NN'
                    },{
                        id:102,
                        label:'浙B102MM'
                    },{
                        id:103,
                        label:'浙B102NJ'
                    }]
                },{
                    id:5,
                    label:'江东分中心',
                    children:[{
                        id:101,
                        label:'浙B102NN'
                    },{
                        id:102,
                        label:'浙B102MM'
                    },{
                        id:103,
                        label:'浙B102NJ'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            form:{
                center:'',
                point:'',
                plate:'',
            },
            centerOptions:[{
                label:'本部分中心',
                value:1
            },{
                label:'江北分中心',
                value:2
            },{
                label:'江东分中心',
                value:3
            },{
                label:'海曙分中心',
                value:4
            }]
        }
    },
    methods:{
        handleClose() {
            this.close()
        },
        handleClick() {
            this.close()
        },
        handleCancel() {
            this.close()
        },
        close() {
            this.dialogTreeVisible = false;
            let data = {
                carPlate:this.carPlate,
                flag: this.dialogTreeVisible
            }
            this.$emit('change',data)
        }
    }
}
</script>
<style lang="scss" scoped>
.car-dialog{
    width:100%;
    height:200px;
    overflow:hidden;
}
</style>
