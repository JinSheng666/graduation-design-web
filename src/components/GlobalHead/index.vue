<template>
    <div class="navbar"> 
      
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="hover"> <!--hover -->
          <div class="avatar-wrapper">
            <img :src="avatar" class="user-avatar">
          </div>
          <el-dropdown-menu class="user-dropdown">  <!--user-dropdown-->
            <div class="user-geqian">
              <div class="avatar-xiala">
                <img :src="avatar" class="user-avatar" style="margin-left: 15px;">
                <div class="font-name">{{ name }}</div>
              </div>
              <span  style="margin-left: 22px;font-size: 15px;" v-if=" signature === null">个性签名</span>
              <span  style="margin-left: 22px;font-size: 15px;" v-else>{{ signature }}</span>
            </div>
            <el-dropdown-item @click.native="toPersonal()">个人主页</el-dropdown-item>
            <el-dropdown-item>更换头像</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <svg t="1708428798720" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http: www.w3.org/2000/svg" p-id="4242" width="25" height="25"><path d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z" fill="#000000" p-id="4243"></path></svg>
            喜欢
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <svg t="1709017060785" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2601" width="25" height="25"><path d="M512 100v64H200a8 8 0 0 0-7.996 7.75L192 172v680a8 8 0 0 0 7.75 7.996l0.25 0.004h624a8 8 0 0 0 7.996-7.75L832 852V512h64v340c0 39.367-31.594 71.355-70.81 71.99L824 924H200c-39.367 0-71.355-31.594-71.99-70.81L128 852V172c0-39.367 31.594-71.355 70.81-71.99L200 100h312z" fill="#3F454B" p-id="2602"></path><path d="M836.433 115.75l55.134 32.5-224 380-55.134-32.5z" fill="#3F454B" p-id="2603"></path><path d="M652 241v64H272v-64zM539 576v64H272v-64zM448 417v64H272v-64z" fill="#397AFF" p-id="2604"></path></svg>
            创作
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="dialogFormVisible = true">
              文章
            </el-dropdown-item>
            <el-dropdown-item @click.native="dialogVideoVisible = true">
              视频
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <svg t="1708430432049" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6576" width="25" height="25"><path d="M512 928A416 416 0 1 1 928 512 416 416 0 0 1 512 928z m0-768A352 352 0 1 0 864 512 352 352 0 0 0 512 160z m192 448H512a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v224H704a32 32 0 0 1 0 64z" fill="#333333" p-id="6577"></path></svg>
            历史
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>历史</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <svg t="1708430494176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7733" width="25" height="25"><path d="M512 851.626667a46.08 46.08 0 0 1-10.88-1.28l-384-101.12A42.666667 42.666667 0 0 1 85.333333 707.84V213.333333a42.666667 42.666667 0 0 1 53.546667-41.173333L512 270.293333l373.333333-98.133333A42.666667 42.666667 0 0 1 938.666667 213.333333v494.506667a42.666667 42.666667 0 0 1-31.786667 41.173333l-384 101.12a38.186667 38.186667 0 0 1-10.88 1.493334zM170.666667 674.986667l341.333333 89.813333 341.333333-89.813333v-405.333334l-330.88 85.973334a42.666667 42.666667 0 0 1-21.333333 0L170.666667 268.586667v406.4z m725.333333 32.853333z" p-id="7734"></path><path d="M469.333333 426.666667m42.666667 0l0 0q42.666667 0 42.666667 42.666666l0 170.666667q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-170.666667q0-42.666667 42.666667-42.666666Z" p-id="7735"></path></svg>
            学习
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>学习</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="moshi">
        <span style="font-size: 16px;margin-right: 30px;" @click="mode(moshi)">模式</span>
      </div>
      
      <!-- 文章添加 -->
      <el-dialog title="文章创作" :visible.sync="dialogFormVisible" append-to-body>
            <el-form :model="addforum" :rules="rules" ref="addforum">
                <el-form-item label="标题" :label-width="'120px'" prop="topics">
                <el-input v-model="addforum.topics"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="'120px'" prop="text">
                <el-input v-model="addforum.text" class="custom-input"></el-input>
                </el-form-item>

                <span style="margin-left: 80px;">上传视频 / 图片：</span>
                <el-upload
                style="margin-left: 80px;margin-top: 10px;"
                class="upload-demo"
                ref="upload"
                list-type="picture-card"
                action="http://localhost:8888/forums/img-video-upload"
                :on-success="handleSuccess"
                :on-remove="handleRemove"
                :auto-upload="true"
                :multiple="true"
                accept="image/*,video/*">
                <i class="el-icon-plus"></i>
                </el-upload>
              
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('addforum')">重 置</el-button>
                <el-button type="primary" @click="addForum">创 建</el-button>
            </div>
        </el-dialog>

        <!-- 视频添加 -->
      <el-dialog title="视频创作" :visible.sync="dialogVideoVisible" append-to-body>
            <el-form :model="video" :rules="videoRules" ref="video">
                <el-form-item label="标题" :label-width="'120px'" prop="title">
                <el-input v-model="video.title"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="'120px'" prop="text">
                <el-input v-model="video.text"></el-input>
                </el-form-item>

                <span style="margin-left: 80px;">上传视频：</span>
                <el-upload
                style="margin-left: 80px;margin-top: 10px;"
                class="upload-demo"
                ref="upload"
                list-type="picture-card"
                action="http://localhost:8888/videos/video-upload"
                :on-success="VideoHandleSuccess"
                :on-remove="videoHandleRemove"
                :auto-upload="true"
                :multiple="true"
                accept="video/*">
                <i class="el-icon-plus"></i>
                </el-upload>
              
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('video')">重 置</el-button>
                <el-button type="primary" @click="addVidoe">创 建</el-button>
            </div>
        </el-dialog>

    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import forumApi from '@/api/forum'
  import videoApi from '@/api/video'
  
  export default {
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar',
        'name',
        'signature'
      ]),
    },
    data(){
      return{
        moshi: 'forum',
        show3: true,
        dialogFormVisible: false,
        dialogVideoVisible:false,
        dialogVisible: false,
        addforum: {
          topics: "",
          text: "",
          picss: [],
          videos: [],      
        },
        rules: {
          text: [
            { required: true, message: '请输入内容！', trigger: 'blur' },
            { min: 1, message: '长度最少1个字符!', trigger: 'blur' }
                ]
        },
        video:{
          title:'',
          text:'',
          videos:[]
        },
        videoRules: {
          title: [
            { required: true, message: '请输入内容！', trigger: 'blur' },
            { min: 1, message: '长度最少1个字符!', trigger: 'blur' }
                ],
          text: [
            { required: true, message: '请输入内容！', trigger: 'blur' },
            { min: 1, message: '长度最少1个字符!', trigger: 'blur' }
                ]
        },
      }
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        location.reload()
      },
      //文章添加
      addForum(){
        console.log("关闭对话框！")
        this.$refs.addforum.validate(valid => {
          if (valid) {
          // 使用箭头函数确保正确的上下文
          forumApi.addForum(this.addforum).then((res) =>{
            if(res.code === 200){
              location.reload()
              this.dialogFormVisible = false;
              this.$message({
                message: '文章创建成功！',
                type: 'success'
              });
            }else{
              this.$message.error('文章创建失败！');
              this.dialogFormVisible = false;
            }
          });

          } else {
            this.dialogFormVisible = false;
            console.log('error submit!!');
            return false;
          }
        });

      },
       // 重置表单
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //上传图片
      async handleSuccess(response, file, fileList) {   //重点 async
                    //处理成功上传
                    console.log('Upload successful:', response);
            
                     // Update the fileList
                    var video = [];
                    var pics = [];
                    for (var b = 0; b < fileList.length; b++){
                          //获得文件名
                          let fileName = fileList[b].name;
                          console.log("fileName:"+fileName)
                          // 获得文件后缀
                          let fileType = fileName.substring(fileName.lastIndexOf('.') + 1);
                          console.log("后缀:"+fileType)
                          if(fileType === "mp4" || fileType === "webm" || fileType === "ogg"){
                              video.push(fileList[b].name);
                          } else if (fileType === "png" || fileType === "jpg" || fileType === "JPG" || fileType === "jpeg" || fileType === "gif"){
                              pics.push(fileList[b].name);
                          }
                        
                    }
                    console.log("pics:"+pics)
                        this.addforum.picss = pics;
                        this.addforum.videos = video;
                    //假设您的服务器响应包括每个文件的“name”属性
                    //相应地调整响应格式
                    if (response.success && response.name) {
                        file.name = response.name; // Assign the name to the file
                    }
      },
      //删除指定文件
      handleRemove(file, fileList) {
                    // Handle file removal
            // console.log("filename:"+file.name)
          forumApi.removeFile(file.name).then((res) =>{
          if(res.code === 200){
              this.$message({message: '删除成功！',type: 'success'});
          }else{
              this.$message.error('删除失败！');
          }

        })
                  
         //删除指定数组数据
         let Video = this.addforum.videos;
         this.addforum.videos = Video.filter(item => item !== file.name);
         console.log("newVideo:"+this.addforum.videos);      
                 
      },
     //跳转个人主页
     async toPersonal() {
      this.$router.push({ path: '/personal-homepage' });
      },

      //跳转视频
      async mode(moshi){
        if(moshi == 'forum'){
          this.moshi = 'video'
          this.$router.push({ path: '/video-page' });
        }else if(moshi = 'video'){
          this.$router.push({ path: '/' });
        }
  
        },
        //视频添加
        addVidoe(){
          console.log("关闭对话框！")
          this.$refs.video.validate(valid => {
            if (valid) {
            // 使用箭头函数确保正确的上下文
            videoApi.videoAdd(this.video).then((res) =>{
                if(res.code === 200){
                  location.reload()
                  this.dialogVideoVisible = false;
                  this.$message({
                    message: '视频创建成功！',
                    type: 'success'
                  });
                }else{
                  this.$message.error('视频创建失败！');
                  this.dialogVideoVisible = false;
                }
              });

              } else {
                this.dialogVideoVisible = false;
                console.log('error submit!!');
                return false;
              }
            });
          
        },
      //上传视频
      async VideoHandleSuccess(response, file, fileList) {   //重点 async
      
                    var video = [];
                    for (var b = 0; b < fileList.length; b++){
                          //获得文件名
                          let fileName = fileList[b].name;
                          console.log("fileName:"+fileName)
                          // 获得文件后缀
                          let fileType = fileName.substring(fileName.lastIndexOf('.') + 1);
                          console.log("后缀:"+fileType)
                          if(fileType === "mp4" || fileType === "webm" || fileType === "ogg"){
                              video.push(fileList[b].name);
                          }
                        
                    }
                        console.log("video:"+video)
                        this.video.videos = video;
                    //假设您的服务器响应包括每个文件的“name”属性
                    //相应地调整响应格式
                    if (response.success && response.name) {
                        file.name = response.name; // Assign the name to the file
                    }
      },
      //删除指定文件
      videoHandleRemove(file, fileList) {
                    // Handle file removal
            // console.log("filename:"+file.name)
          videoApi.videoRemove(file.name).then((res) =>{
          if(res.code === 200){
              this.$message({message: '删除成功！',type: 'success'});
          }else{
              this.$message.error('删除失败！');
          }

        })
                  
         //删除指定数组数据
         let Video = this.video.videos;
         this.video.videos = Video.filter(item => item !== file.name);
         console.log("newVideo:"+this.video.videos);      
                 
      },
    }
  }
  </script>
  
  <style>  
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 5;

  }

.right-menu {
      /* float: right;  */
      height: 100%;
      line-height: 50px;

      }

&:focus {
        outline: none;
      }
  
.avatar-container {
        margin-right: 30px;
        margin-left: 30px;
        }
  
.avatar-wrapper {
          display: flex;
          margin-top: 5px;
          position: relative;
  
        }

.font-name{
            color: #000;
            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
            font-size: 20px ;
            line-height: 1.7;
            margin-left: 15px;
          }

.user-xialakuang{
            background-color: #000;
          }
  
.user-avatar {
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50px;
    border-style: solid;
    border-width: 1px;          
          }

.user-dropdown{
    width: 200px;
}

.user-geqian{
  height: 90px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.avatar-xiala{
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  
}

.el-dropdown-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 30px;
  font-size: 15px;
  }

  .moshi{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 120px;
  }
  .moshi:hover{
    color: #409EFF;
  }

  /* .custom-input {
    width: 678px; 
    height: 60px; 
} */

  </style>
  