<template>
    <div>
        <GlobalHead/>
            <div class="merry-go-round">
                <div class="inputbox" :model="search">
                    <svg t="1708432198094" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8711" width="20" height="20"><path d="M921.328 921.216a78.08 78.08 0 0 1-110.4 0l-144.976-140.528 36.288-37.328 145.264 140.8a25.968 25.968 0 0 0 44.64-18.144 25.76 25.76 0 0 0-7.584-18.384l-141.072-145.6 37.312-36.096 140.8 145.264a78.096 78.096 0 0 1-0.272 110.016z m-471.2-133.184a338 338 0 1 1 338-338.016 338.384 338.384 0 0 1-338 338zM448.128 176a272 272 0 1 0 272 272 272.304 272.304 0 0 0-272-272z m-144.96 421.008a208.192 208.192 0 0 1 0-294.128l36.8 36.8a156.176 156.176 0 0 0 0 220.592z" fill="#040000" p-id="8712"></path></svg>
                    <input class="sousuo" type="text" @keyup.enter="searchVideo" v-model="search.search" placeholder="搜索">  <!-- @keyup.enter 监听输入框的回车键事件-->
                    <div class="btn" @click="searchVideo">搜索</div>
                </div>
            </div>
            
        <div class="home-page">
            <div class="left" :model="videos">
                <div class="video-show">
                    <span class="title">{{ videos.title }}</span>
                    <span class="time">{{ videos.createTime }}</span>
                    <video 
                    :src="videos.videos[videoLength]" 
                    controls muted autoplay 
                    ></video>
                    <div class="count">
                        <div style="display: flex;align-items: center;" @click="videoLike(videos.videoId)">
                            <svg t="1709468079156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16016" width="32" height="32"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="16017"></path></svg>
                            <span>{{ videos.likeCount }}</span>
                        </div>
                        <div style="display: flex;align-items: center;">
                            <svg t="1709468117776" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="32" height="32"><path d="M878.3 98.2H145.7c-44.7 0-81 36.3-81 81V714c0 44.7 36.3 81 81 81h192.8l149.2 121.8c7.4 6 16.3 9 25.3 9 8.9 0 17.9-3 25.2-9l150-121.8h190c44.7 0 81-36.3 81-81V179.2c0.1-44.7-36.3-81-80.9-81z m1 615.8c0 0.5-0.5 1-1 1H674.1c-9.2 0-18.1 3.2-25.2 9L513.1 834.2 378.1 724c-7.1-5.8-16.1-9-25.3-9H145.7c-0.5 0-1-0.5-1-1V179.2c0-0.5 0.5-1 1-1h732.5c0.5 0 1 0.5 1 1V714z" fill="#333333" p-id="17121"></path><path d="M322.1 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#333333" p-id="17122"></path><path d="M513.1 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#333333" p-id="17123"></path><path d="M704.3 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#333333" p-id="17124"></path></svg>
                            <span>{{ videos.commentsCount }}</span>
                        </div>
                        <div style="display: flex;align-items: center;">
                            <svg t="1709468174586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18149" width="32" height="32"><path d="M922.026667 439.04l-267.221334-282.368v185.258667h-85.333333c-250.325333 0-455.253333 181.504-481.322667 413.44 115.157333-133.674667 291.925333-218.922667 480.682667-218.922667h85.077333l0.554667 185.173333 267.52-282.581333z m-438.528 189.44C268.8 662.570667 87.04 821.76 47.232 1024A529.664 529.664 0 0 1 0 805.461333C0 502.272 254.976 256.597333 569.472 256.597333V40.96a35.242667 35.242667 0 0 1 10.368-30.208 39.68 39.68 0 0 1 54.4 0l378.794667 400.298667a35.413333 35.413333 0 0 1 10.88 27.861333 35.498667 35.498667 0 0 1-10.88 27.904l-376.704 398.08a37.973333 37.973333 0 0 1-56.448 2.133333 35.114667 35.114667 0 0 1-10.410667-30.208l-0.64-215.082666c-26.88 0-53.546667 2.005333-79.701333 5.845333l-5.632 0.853333z" fill="#191919" p-id="18150"></path></svg>
                            <span>{{ videos.attitudesCount }}</span>
                        </div>
                    </div>
                    <div class="text">
                        <span style="margin-bottom: 10px;">{{ videos.text }}</span>
                    </div>
                </div>
                <div class="comment-show">
                    <span style="font-size: 20px; margin-top: 15px;">评论区 {{ videos.commentsCount }}</span>
                    <div class="add-comment">
                        <img style="height: 50px;width: 50px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                        :src="avatar" alt="">
                        <div class="comment-add" :model="commentAdd">
                            <el-input
                            class="fabu"
                            placeholder="请输入内容"
                            v-model="commentAdd.comment"
                            clearable>
                            </el-input>
                           <el-button style="margin-left: 5px;" type="primary" plain @click="addComment()">发布</el-button> 
                        </div>
                    </div>

                    <div class="all-comment" v-for="comment in comments">
                        <!-- 一级评论 -->
                        <div class="comment" v-if="true">
                            <img style="height: 50px;width: 50px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                            :src="comment.headSculpture" alt="">
                            <div class="comment-text">
                                <span style="font-size: 18px;margin-bottom: 10px;">{{ comment.userName }}</span>
                            <span style="font-size: 16px;" id="copyContent">{{ comment.comment }}</span>
                            <div style="display: flex;justify-content: flex-start;align-items: center;margin-top: 5px;">
                                <span style="font-size: 11px;margin-right: 30px;">{{ comment.createTime }}</span>
                                <div style="display: flex;align-items: center;" >
                                    <div @click="commentLike(comment.vcId)">
                                        <svg t="1709468079156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16016" width="14" height="14"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="16017"></path></svg>
                                        <span style="margin-left: 5px;">{{ comment.likeCount }}</span>
                                    </div>
                                    <span style="font-size: 11px;margin-left: 30px;" @click="open(comment.vcId)">回复</span>
                                </div>
                             </div>
                            </div>
                            <div style="width: 10%;" :model="user">
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-if="name === comment.userName || name === videos.userName" @click.native="commentDelete(comment.vcId)" icon="el-icon-remove">删除</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-document-copy" id="copyButton" @click.native="copyText">复制</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            </div>
                            <!-- 弹出框内容 -->
                           
                        </div>

                        <div class="empty" v-else>
                        <span>暂无评论</span>
                        </div>

                        <!-- 二级评论 -->
                        <div v-for="childComment in comment.childComment">
                            <div class="comment-two">
                                <img style="height: 40px;width: 40px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                                :src="childComment.headSculpture" alt="">
                                <div class="comment-text">
                                <span style="font-size: 16px;margin-bottom: 10px;">{{ childComment.userName }}</span>
                                <span style="font-size: 16px;">{{ childComment.comment }}</span>
                                <div style="display: flex;justify-content: flex-start;align-items: center;margin-top: 5px;">
                                    <span style="font-size: 11px;margin-right: 30px;">{{ childComment.createTime }}</span>
                                    <div style="display: flex;align-items: center;" @click="commentLike(childComment.vcId)">
                                        <svg t="1709468079156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16016" width="14" height="14"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="16017"></path></svg>
                                        <span style="margin-left: 5px;">{{ childComment.likeCount }}</span>
                                    </div>
                                    <span style="font-size: 11px;margin-left: 30px;" @click="open(childComment.vcId)">回复</span>
                                </div>
                                </div>
                                <div style="width: 10.5%;" :model="user">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link">
                                            <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item v-if="name === childComment.userName || name === videos.userName" @click.native="commentDelete(childComment.vcId)" icon="el-icon-remove">删除</el-dropdown-item>
                                            <el-dropdown-item icon="el-icon-document-copy" id="copyButton" @click.native="copyText">复制</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                            <!-- 回复 2-->
                            <div class="yingc" v-if="display === 2 && childComment.vcId === vcid">
                                <img style="height: 40px;width: 40px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                                :src="avatar" alt="">
                                <div class="comment-add" :model="commentAddtwo">
                                    <el-input
                                    class="fabu"
                                    placeholder="请输入内容"
                                    v-model="commentAddtwo.comment"
                                    clearable>
                                    </el-input>
                                <el-button style="margin-left: 5px;" type="primary" @keyup.enter="commentReply()" plain @click="commentReply()">发布</el-button> 
                                </div>
                            </div>
                        </div>
                        
                        <!-- 回复 1-->
                        <div class="yingc" v-if="display === 2 && comment.vcId === vcid || comment.childComment.vcId === vcid">
                            <img style="height: 40px;width: 40px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                            :src="avatar" alt="">
                            <div class="comment-add" :model="commentAddtwo">
                                <el-input
                                class="fabu"
                                placeholder="请输入内容"
                                v-model="commentAddtwo.comment"
                                clearable>
                                </el-input>
                            <el-button style="margin-left: 5px;" type="primary" @keyup.enter="commentReply()" plain @click="commentReply()">发布</el-button> 
                            </div>
                        </div>

                        <div v-else></div>
                        
                    </div>
                    

                </div>
            </div> 
            <div class="right" :model="videos">
                <div class="user-message" @click="toPersonalPage(videos.userId)">
                    <img style="height: 70px;width: 70px;border-radius: 50px;border-style: solid;border-width: 1px;"
                     :src="videos.headSculpture" alt="">
                    <span style="font-size: 25px; margin-top: 10px;">{{ videos.userName }}</span>
                </div>
                <div class="video-message">
                    <div style="display: flex;flex-direction: column;">
                        <video 
                        v-for="(video,index) in videos.videos"
                        :key="video"
                        :src="video"
                        @click="getVideoLength(index)"
                        ></video>
                    </div>
                </div>
            </div>              
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GlobalHead from '@/components/GlobalHead';
import videoApi from '@/api/video';
import videoLikeApi from '@/api/videoLike';
import videoCommentApi from '@/api/videoComment';
import VCLikeApi from '@/api/videoCommentLike';
import Clipboard from "clipboard";
import userApi from '@/api/user';


export default{
    name: 'VideoShow',
    components: {
        GlobalHead
    },
    computed: {
      ...mapGetters([
        'avatar',
        'name'
      ]),
    },
    data(){
        return{
            vcid:null,
            parentId: null,
            display: 1,
            videoLength:0,
            videoId:null,
            showPopover: false,
            user:{
                userName:''
            },
            search:{
                search:"",
                pageNum:1,
                pageSize:20
            },
            videos:{
                videoId: "",
                userId: "",
                userName: "",
                headSculpture: "",
                location: "",
                title: "",
                video: "",
                videos: [],
                text: "",
                isPrivacy: "",
                attitudesCount: 0,
                commentsCount: 0,
                likeCount: 0,
                createTime: ""
            },
            commentAdd:{
                videoId: null,
                comment: '',
                parentId: null,
            },
            commentAddtwo:{
                videoId: null,
                comment: '',
                parentId: null,
            },
            comments:{
                vcId: null,
                videoId: null,
                comment: "",
                likeCount: 0,
                createTime: "",
                headSculpture: "",
                userName: "",
                childComment: []
            },
        }
    },
    watch: {
        $route: {
          handler: function(route) {
            this.redirect = route.query && route.query.redirect
          },
          immediate: true
        }
      },
    methods:{
        searchVideo(){

        },
        //拿到视频id
        async getVideoId(){
            this.videoId = this.$route.query.videoId;
            this.getComment(this.videoId);
            videoApi.getVideoById(this.videoId).then((res) =>{
                if(res.code === 200){
                    this.videos = res.data
                }else{
                    console.log("视频查询失败")
                    return false;
                }
            })
        },
        //获得视频索引
        getVideoLength(data){
            console.log(data)
            this.videoLength = data;
        },
        //跳转他人主页
        async toPersonalPage(data){
            let rows = data;
            this.$router.push({ path: '/personal-homepage?userId='+rows});
        },
        //点赞
        videoLike(data){
            videoLikeApi.like(data).then((res) =>{
                if(res.code === 200){
                    console.log("点赞成功")
                }else{
                    return false;
                }
            })
        },
        //评论添加
        addComment(){
            this.commentAdd.videoId = this.videoId;
            videoCommentApi.commentAdd(this.commentAdd).then((res) =>{
                if(res.code === 200){
                    this.getComment(this.videoId);
                    this.commentAdd.comment = '';
                    console.log("评论添加成功！")
                }else{
                    return false;
                }

            })
        },
        //评论回复
        commentReply(){
            this.commentAddtwo.videoId = this.videoId;
            this.commentAddtwo.parentId = this.parentId;
            videoCommentApi.commentAdd(this.commentAddtwo).then((res) =>{
                if(res.code === 200){
                    this.getComment(this.videoId);
                    this.commentAddtwo.comment = '';
                    this.display = 0;
                    console.log("评论添加成功！")
                }else{
                    return false;
                }

            })
        },
        //拿到评论
        getComment(data){
            this.comments = null;
            videoCommentApi.getCommentById(data).then((res) =>{
                if(res.code === 200){
                    this.comments = res.data;
                }else{
                    console.log("拿到评论失败")
                    return false;
                }
            })
        },
        open(vcId){
            this.display++
            this.parentId = vcId;
            this.vcid = vcId;
            if(this.display === 2){
                this.display = 2;
            }else if(this.display === 3){
                this.display = 1;
            }
            
            
        },
        //评论点赞
        commentLike(data){
            VCLikeApi.commentLike(data).then((res) =>{
                if(res.code === 200){
                    this.getComment(this.videoId);
                    console.log("评论点赞成功！")
                }else{
                    console.log("点赞失败！")
                    return false;
                }
            })
        },
        handleClosePopover() {
        // 点击关闭按钮时关闭弹出框
        this.showPopover = false;
        },
        //复制
        copyText() {
            const clipboard = new Clipboard("#copyButton", {
                text: () => document.querySelector("#copyContent").textContent
            });

            clipboard.on("success", () => {
                console.log("复制成功");
                // 可以在这里添加一些反馈给用户的操作
                clipboard.destroy(); // 销毁实例，释放内存
            });

            clipboard.on("error", () => {
                console.error("复制失败");
                // 可以在这里添加一些失败时的反馈给用户的操作
                clipboard.destroy(); // 销毁实例，释放内存
            });

            // 触发点击事件
            const copyButton = document.getElementById("copyButton");
            copyButton.click();
        },
        getCurrentUser(){
            userApi.currentUser().then((res) =>{
                this.user = res.data;
                console.log(this.user.userName)
            })
        },
        //评论删除
        commentDelete(data){
            videoCommentApi.commentDelById(data).then((res) =>{
                if(res.code === 200){
                    this.getComment(this.videoId);
                    this.$message({
                    message: '评论删除成功!',
                    type: 'success'
                    });
                }
            })
        }


    },
    created(){
        this.getVideoId();
        this.getCurrentUser();
    }
}

</script>

<style lang="scss" scoped>
    .merry-go-round {
        display: flex;
        justify-content: center;
        align-items: center;
    
        }
    
    .inputbox{
        width: 33%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        background-color: rgb(239, 237, 237);
        /* position: sticky; */
        top: 6px;
        position: fixed;
        z-index: 5;
    }
    
    .inputbox .icon{
      width: 25px;
      height: 25px;
      margin-left: 15px;
    }
    
    .inputbox .sousuo{
        width: 80%;
        height: 90%;
        border: none;
        outline: none;
        font-size: 17px;
        padding-left: 20px;
        background-color: rgb(239, 237, 237);
    }
    .inputbox .btn{
        width: 17%;
        height: 100%;
        color: white;
        font-size: 100%;
        background-color: #ff8200;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .inputbox div:hover{
      background-color: #ff4d00;
    }
    
    .home-page{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        height: 100%;
        width: 100%;
        background-color: #fff;
    }
    
    .left{
        height: 1000px;
        width: 50%;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }

    .video-show{
        height: 680px;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    }

    .title{
        font-size: 25px;
        margin-bottom: 5px;
        margin-top: 10px;
    }
        
    .time{
        font-size: 15px;
        margin-bottom: 5px;
        color: #7c7474;
    }

    .video-show video{
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .count{
        display: flex;
        justify-content: flex-start;
        height: 50px;
        width: 100%;
        margin-bottom: 10px;
        border-bottom-style:solid;
        border-bottom-width: 1px;
        border-bottom-color: rgb(222, 222, 216);
        
    }

    .count div{
        margin-right: 40px;
        margin-bottom: 10px;
    }

    .count div:hover{
        color:#409EFF;
    }

    .text{
        height: 40px;
        width: 100%;
        margin-top: 10px;
        border-bottom-style:solid;
        border-bottom-width: 1px;
        border-bottom-color: rgb(222, 222, 216);
    }

    .comment-show{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    }

    .add-comment{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        height: 55px;
        width: 90%;
        display: flex;
        justify-content: flex-start;
    }

    .comment-add{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }

    .fabu{
        height: 40px;
        width: 90%;
        border-radius: 20px;
        background-color: rgb(239, 237, 237);
    }

    .all-comment{
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: rgb(222, 222, 216);
    }

    .comment{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 10px;
        height: 75px;
        
    }

    .comment-text{
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
        width: 100%;
        
    }

    .comment-two{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 60px;
        height: 75px;
    }

    .yingc{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 80%;
        margin-left: 60px;
        margin-bottom: 10px;
    }

    .empty{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color: rgb(254, 252, 252);
    }

        
    .right{
        height: 90vh;
        width: 15%;
        display: flex;
        flex-direction: column;
        position: sticky;    /**进行定位 */
        top: 60px; 
        margin-left: 10px;
        /* 内容溢出时显示滚动条 */
        overflow: auto; 
    }

    .user-message{
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: rgb(239, 237, 237);;
    }

    .video-message{
        height: 70%;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;

    }

    .video-message div{
        height: auto;
        width: 80%;
        margin-top: 10px;
        border-radius: 5px;
    }

    .video-message div video{
        margin-top: 10px;
        border-radius: 5px;
    }


    </style>