<template>
    <div style="background-color: #f1f2f5;">
        <GlobalHead/>
            <div class="merry-go-round">
                <div class="inputbox" :model="search">
                    <svg t="1708432198094" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8711" width="20" height="20"><path d="M921.328 921.216a78.08 78.08 0 0 1-110.4 0l-144.976-140.528 36.288-37.328 145.264 140.8a25.968 25.968 0 0 0 44.64-18.144 25.76 25.76 0 0 0-7.584-18.384l-141.072-145.6 37.312-36.096 140.8 145.264a78.096 78.096 0 0 1-0.272 110.016z m-471.2-133.184a338 338 0 1 1 338-338.016 338.384 338.384 0 0 1-338 338zM448.128 176a272 272 0 1 0 272 272 272.304 272.304 0 0 0-272-272z m-144.96 421.008a208.192 208.192 0 0 1 0-294.128l36.8 36.8a156.176 156.176 0 0 0 0 220.592z" fill="#040000" p-id="8712"></path></svg>
                    <input class="sousuo" type="text" @keyup.enter="searchVideo" v-model="search.search" placeholder="搜索">  <!-- @keyup.enter 监听输入框的回车键事件-->
                    <div class="btn" @click="searchVideo">搜索</div>
                </div>
            </div>
            
        <div class="home-page">
            <div class="all-video">
                <div class="video-show" v-for="videos in this.videos"  @click="toVideoShow(videos.videoId)">
                    <video 
                        style="height: auto;width: 280px;border-radius: 5px;"
                        :src="videos.video" 
                        controls muted autoplay  
                    ></video>
                    <div class="count">
                        <div style="display: flex;align-items: center;margin-right: 30px;">
                            <svg t="1709468117776" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17120" width="20" height="20"><path d="M878.3 98.2H145.7c-44.7 0-81 36.3-81 81V714c0 44.7 36.3 81 81 81h192.8l149.2 121.8c7.4 6 16.3 9 25.3 9 8.9 0 17.9-3 25.2-9l150-121.8h190c44.7 0 81-36.3 81-81V179.2c0.1-44.7-36.3-81-80.9-81z m1 615.8c0 0.5-0.5 1-1 1H674.1c-9.2 0-18.1 3.2-25.2 9L513.1 834.2 378.1 724c-7.1-5.8-16.1-9-25.3-9H145.7c-0.5 0-1-0.5-1-1V179.2c0-0.5 0.5-1 1-1h732.5c0.5 0 1 0.5 1 1V714z" fill="#333333" p-id="17121"></path><path d="M322.1 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#333333" p-id="17122"></path><path d="M513.1 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#333333" p-id="17123"></path><path d="M704.3 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" fill="#333333" p-id="17124"></path></svg>
                            <span>{{ videos.commentsCount }}</span>
                        </div>
                        <div style="display: flex;align-items: center;">
                            <svg t="1709468079156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16016" width="20" height="20"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="16017"></path></svg>
                            <span>{{ videos.likeCount }}</span>
                        </div>
                    </div>
                    <span style="margin-top: 5px;">{{ videos.title }}</span>
                    <div class="user-geren">
                        <img style="height: 30px;width: 30px;border-radius: 50px;margin-right: 5px;" :src="videos.headSculpture" alt="">
                        <span style="margin-right: 10px;">{{ videos.userName }}</span>
                        <span>{{ videos.createTime }}</span>
                    </div>
                </div>
            </div> 
            <div class="end-show">
                <p v-if="loading" style="text-align: center;">没有更多了</p>
                <p v-else style="text-align: center;">加载中...</p>  
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import GlobalHead from '@/components/GlobalHead';
    import videoApi from '@/api/video';


    export default{
        name: 'VideoPage',
        components:{
        GlobalHead,
    },
        data(){
            return{
                loading:false,
                totalNum:'',
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
            async searchVideo(){
                this.search.pageNum = 1;
                videoApi.search(this.search).then((res) =>{
                    if(res.code === 200){
                        this.videos = res.data
                        this.totalNum = Math.ceil(res.totalNum / this.search.pageSize);  //向上取整

                    }else{
                        console.log("视频查询失败")
                        return false;
                    }
                    
                })
            },
           async toVideoShow(data){
            this.$router.push({ path: '/video-show?videoId='+data});
           },
           // 触底触发函数
            listenBottomOut() {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  //滚动条相对于整个页面顶部的偏移量
                const clientHeight = document.documentElement.clientHeight;  //获取浏览器视口的高度，即可见区域的高度。
                const scrollHeight = document.documentElement.scrollHeight;  // 获取整个页面的高度，包括溢出部分。
                if (scrollTop + clientHeight + 10 >= scrollHeight) {
                        console.log("触底了~");
                    // 此处可以调用获取数据的方法
                
                    this.search.pageNum ++;
                    console.log("pageNum:"+this.search.pageNum)
                    console.log("totalNum:"+this.totalNum)
                    if(this.search.pageNum > this.totalNum){
                        console.log("无数据可查询！！！")
                        this.loading = true;
                        return false
                    }else{
                        
                        setTimeout(() => {
                            this.loading = false;
                            videoApi.search(this.search).then(res => {
                            const newDate = res.data;
                            this.videos = this.videos.concat(newDate);
                        })

                        }, 2000)
                    }
            }
            },
        },
        mounted() {
            this.searchVideo();
            //事件监听
            window.addEventListener("scroll", this.listenBottomOut); 
        },
        destroyed() {
            // 离开页面取消监听
            window.removeEventListener("scroll", this.listenBottomOut, false);

        },
    }
    
    
    </script>
    
    <style lang="scss" scoped>
    .merry-go-round {
        height: 160px;
        width: 100%;
        background-color: rgb(93, 99, 99);
        background-image: url("../../assets/404_images/beijing.jpg");
        background-size: 100%;
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
        /* justify-content: center; */
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        height: 100%;
        width: 100%;
        background-color: #f1f2f5;
    }

    .end-show{
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    
    .all-video{
        height: 100%;
        width: 1495px;
        border-radius: 5px;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
    }

    .video-show{
        width: 285px;
        height: 280px;
        margin-left: 12px;
        margin-top: 10px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
    }

    .count{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        width: 100%;
    }
    
    .user-geren{
        margin-top: 5px;
        height: 40px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    </style>