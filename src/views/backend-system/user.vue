<template>
<div>
    <el-tag @click="getAlluser">查询</el-tag>
    <el-table
    :data="userTables"
    stripe
    style="width: 100%">
    <el-table-column
      prop="userId"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="code"
      label="编码">
    </el-table-column>
    <el-table-column
      prop="headSculpture"
      label="头像">
    </el-table-column>
    <el-table-column
      prop="signature"
      label="个性签名">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import userApi from '@/api/user'

export default{
    data(){
        return{
            userTables:{
                userId: "",
                userName: "",
                code: "",
                headSculpture: "",
                signature: "",
            }
        }
    },
    methods:{
        getAlluser(){
            userApi.userAll().then(res =>{
                this.userTables.userId = res.data.data.userId
                this.userTables.userName = res.data.data.userName
                this.userTables.code = res.data.data.code
                this.userTables.headSculpture = res.data.data.headSculpture
                this.userTables.signature = res.data.data.signature
            })
        }
    },
    created(){
        this.userAll;
    }
}

</script>