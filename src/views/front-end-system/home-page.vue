<template>
<div style="background-color: #f1f2f5;">
    <GlobalHead/>
        <div class="merry-go-round">
            <div class="inputbox" :model="search">
                <svg t="1708432198094" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8711" width="20" height="20"><path d="M921.328 921.216a78.08 78.08 0 0 1-110.4 0l-144.976-140.528 36.288-37.328 145.264 140.8a25.968 25.968 0 0 0 44.64-18.144 25.76 25.76 0 0 0-7.584-18.384l-141.072-145.6 37.312-36.096 140.8 145.264a78.096 78.096 0 0 1-0.272 110.016z m-471.2-133.184a338 338 0 1 1 338-338.016 338.384 338.384 0 0 1-338 338zM448.128 176a272 272 0 1 0 272 272 272.304 272.304 0 0 0-272-272z m-144.96 421.008a208.192 208.192 0 0 1 0-294.128l36.8 36.8a156.176 156.176 0 0 0 0 220.592z" fill="#040000" p-id="8712"></path></svg>
                <input class="sousuo" type="text" @keyup.enter="searchForum" v-model="search.search" placeholder="搜索">  <!-- @keyup.enter 监听输入框的回车键事件-->
                <div class="btn" @click="searchForum">搜索</div>
            </div>

        </div>
        
    <div class="home-page">
        <div class="copy-writing">
            <el-link class="tou-gao" :underline="false" @click="dialogFormVisible = true"><i class="el-icon-edit"></i>文案投稿</el-link>

            <div class="wen-an" :model="copywriting" v-for="copy in copywriting">
                <span style="font-size: 16px;">{{ copy.text }}</span>
                <span style="text-align: right; font-size: 16px; ">— — {{ copy.userName }}</span>
            </div>
        </div>
        
        <div class="article" id="content">
            <div class="article-two" v-for="forum in forums">
                <div class="contentitem">
                    <img class="avatar" :src="forum.headSculpture" alt="" @click="toPersonalPage(forum.userId)">

                    <div class="right">
                        <div class="na_ti_gu">
                            <div class="na_ti">
                                <div class="name">
                                    {{ forum.userName }}
                                </div>  
                                <div class="time">{{ forum.createTime }}</div>
                            </div>
                        </div>
                        
                        <div class="content">{{ forum.topics }}</div>
                        <div class="content">{{ forum.text }}</div>
                        <div>
                                <el-image 
                                v-for="pics in forum.picss"
                                :key="pics"
                                style="width: 150px; height: 150px;margin-right: 1px;"
                                :src="pics" 
                                :preview-src-list="forum.picss"
                                >
                                </el-image>

                                <video 
                                v-for="video in forum.videoUrls"
                                id="vi"  
                                style="width: 150px; height: 150px;margin-right: 1px;overflow: hidden;"
                                :key="video"
                                :src="video" 
                                controls muted autoplay 
                            ></video>
                       
                        </div>
                        
                        <div class="footer">
                            <div class="footeritem">
                                <svg t="1684160703752" class="footericon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1681" width="64" height="64"><path d="M834.346057 855.835999l-644.682905 0c-47.424102 0-85.957721-38.533618-85.957721-85.957721l0-515.746324c0-47.39238 38.533618-85.957721 85.957721-85.957721l236.352009 0c11.879562 0 21.521153 9.641591 21.521153 21.521153 0 11.816117-9.641591 21.457708-21.521153 21.457708L189.663152 211.153094c-23.712051 0-42.97886 19.283182-42.97886 42.97886l0 515.746324c0 23.712051 19.266809 42.97886 42.97886 42.97886l644.682905 0c23.632233 0 42.97886-19.266809 42.97886-42.97886L877.324918 662.46285c0-11.864212 9.577123-21.521153 21.457708-21.521153s21.521153 9.657964 21.521153 21.521153l0 107.415428C920.303778 817.302381 881.737414 855.835999 834.346057 855.835999L834.346057 855.835999zM898.781602 512.005117c-11.879562 0-21.457708-9.641591-21.457708-21.457708L877.323894 241.531985 441.204096 677.621085c-4.189416 4.221138-9.657964 6.299473-15.189957 6.299473-5.548366 0-11.000542-2.078335-15.189957-6.299473-8.394181-8.394181-8.394181-21.98471 0-30.363542l436.072727-436.104449L597.92958 211.153094c-11.879562 0-21.457708-9.641591-21.457708-21.457708 0-11.879562 9.577123-21.521153 21.457708-21.521153l300.676014 0c0.591471 0 1.182942 0 1.679245 0.064468 4.332678 0.303922 8.362458 1.870604 11.592013 4.365424 1.167592 0.895393 2.222621 1.935072 3.149736 3.021823 3.229554 3.75758 5.196349 8.650007 5.276167 14.007015 0 0 0 0 0 0.064468l0 300.852022C920.303778 502.363526 910.662187 512.005117 898.781602 512.005117L898.781602 512.005117z" p-id="1682"></path></svg>
                                <span>{{ forum.attitudesCount }}</span>
                            </div>
                            <div class="footeritem" @click="openComments(forum.forumId)">
                                <svg t="1684160743020" class="footericon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1835" width="64" height="64"><path d="M834.37778 716.13833l-85.74999 0c-11.879562 0-21.505803-9.657964-21.505803-21.441335 0-11.879562 9.625218-21.537526 21.505803-21.537526l85.74999 0c23.663956 0 42.97886-19.266809 42.97886-42.97886l0-429.788603c0-23.712051-19.314904-42.97886-42.97886-42.97886l-644.682905 0c-23.712051 0-42.97886 19.266809-42.97886 42.97886l0 429.788603c0 23.712051 19.266809 42.97886 42.97886 42.97886l365.224122 0c5.692652 0 11.17655 2.318812 15.173584 6.299473l193.46934 193.404871c8.394181 8.425903 8.394181 22.032806 0 30.379914-4.14132 4.204765-9.673313 6.347568-15.141862 6.347568-5.516644 0-11.048637-2.142803-15.189957-6.347568L546.029536 716.13833 189.694875 716.13833c-47.455825 0-86.005816-38.533618-86.005816-85.957721l0-429.788603c0-47.376007 38.549991-85.957721 86.005816-85.957721l644.682905 0c47.424102 0 85.957721 38.581714 85.957721 85.957721l0 429.788603C920.335501 677.604712 881.801882 716.13833 834.37778 716.13833L834.37778 716.13833zM318.631456 458.265168c-23.760147 0-42.97886-19.218714-42.97886-42.97886s19.218714-42.97886 42.97886-42.97886c23.712051 0 42.97886 19.218714 42.97886 42.97886S342.343507 458.265168 318.631456 458.265168L318.631456 458.265168zM512.004605 458.265168c-23.743774 0-42.97886-19.218714-42.97886-42.97886s19.235087-42.97886 42.97886-42.97886c23.760147 0 42.97886 19.218714 42.97886 42.97886S535.763728 458.265168 512.004605 458.265168L512.004605 458.265168zM705.441199 458.265168c-23.760147 0-42.97886-19.218714-42.97886-42.97886s19.218714-42.97886 42.97886-42.97886c23.712051 0 42.97886 19.218714 42.97886 42.97886S729.15325 458.265168 705.441199 458.265168L705.441199 458.265168z" p-id="1836"></path></svg>
                                <span>{{ forum.commentsCount }}</span>
                            </div>
                            <div class="footeritem" @click="like(forum.forumId)">
                                <svg t="1684160579492" class="footericon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1335" width="64" height="64"><path d="M936.676677 572.443627c-18.59552 69.169359-111.428835 302.915008-115.377774 312.827775-0.431835 0.959861-0.847298 1.886977-1.343601 2.797719-18.307971 31.659047-52.012607 51.804876-88.771813 53.308113-1.390673 0.255827-2.814092 0.415462-4.285606 0.415462L404.509359 941.792697c-11.864212 0-21.441335-9.641591-21.441335-21.441335 0-11.879562 9.577123-21.537526 21.441335-21.537526l318.535777 0c1.215688-0.207731 2.51017-0.367367 3.805676-0.367367 22.960944-0.048095 43.490513-11.464099 55.114249-30.602995 8.266267-20.818141 96.079242-242.588037 113.203248-306.560024 15.31787-57.208956-18.771529-116.209722-76.012208-131.574664-8.010441-2.142803-16.868179-3.149736-27.836999-3.149736l-128.968303-0.511653c-7.099698 0-13.638625-3.518127-17.668405-9.305947-3.997034-5.835915-4.877077-13.223163-2.318812-19.85828 12.551874-32.95353 20.018939-110.389156 20.018939-207.17141 0-35.591613-28.876678-64.516386-64.420195-64.516386-35.591613 0-64.516386 28.924773-64.516386 64.516386l0 21.441335c0 142.255934-115.617228 257.873162-257.873162 257.873162-11.864212 0-21.441335-9.561773-21.441335-21.521153 0-11.799744 9.577123-21.457708 21.441335-21.457708 118.543883 0 214.894302-96.398514 214.894302-214.894302l0-21.441335c0-59.303664 48.2714-107.495246 107.495246-107.495246s107.399055 48.191582 107.399055 107.495246c0 50.957579-2.046612 136.499837-14.550391 193.452967l100.636025 0.415462c14.693654 0 27.037796 1.471514 38.822191 4.621251C910.438083 409.69087 958.166107 492.322845 936.676677 572.443627L936.676677 572.443627zM275.572778 941.79372 168.173722 941.79372c-47.424102 0-85.957721-38.518269-85.957721-85.957721l0-343.830883c0-47.376007 38.533618-85.957721 85.957721-85.957721l107.399055 0c11.879562 0 21.537526 9.657964 21.537526 21.457708l0 472.847282C297.110303 932.152129 287.452339 941.79372 275.572778 941.79372L275.572778 941.79372zM254.131443 469.026256l-85.957721 0c-23.712051 0-42.97886 19.266809-42.97886 42.97886l0 343.830883c0 23.728424 19.266809 42.97886 42.97886 42.97886l85.957721 0L254.131443 469.026256 254.131443 469.026256z" p-id="1336" fill="#e6e6e6"></path></svg>
                                <span>{{ forum.likeCount }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 评论区 -->
                <div class="forum-comment" v-if="display === 2 && forumId === forum.forumId">
                    <div class="comment-show">
                    <span style="font-size: 18px; margin-top: 15px;">评论区 {{ forum.commentsCount }}</span>
                    <div class="add-comment">
                        <img style="height: 45px;width: 45px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                        :src="avatar" alt="">
                        <div class="comment-add" :model="commentAdd">
                            <el-input
                            class="fabu"
                            placeholder="请输入内容"
                            v-model="commentAdd.comment"
                            clearable>
                            </el-input>
                           <el-button style="margin-left: 5px;" type="primary" plain @click="addComment(forum.forumId)">发布</el-button> 
                        </div>
                    </div>

                    <div  class="all-comment" v-if="true"  v-for="comment in comments">
                        <!-- 一级评论 -->
                        <div class="comment">
                            <img v-if="comment.headSculpture !== null" style="height: 45px;width: 45px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                            :src="comment.headSculpture" alt="">
                            <div class="comment-text">
                                <span style="font-size: 16px;margin-bottom: 10px;">{{ comment.userName }}</span>
                                <span style="font-size: 15px;" id="copyContent">{{ comment.comment }}</span>
                            <div style="display: flex;justify-content: flex-start;align-items: center;margin-top: 5px;">
                                <span style="font-size: 11px;margin-right: 30px;">{{ comment.createTime }}</span>
                                <div style="display: flex;align-items: center;" >
                                    <div @click="commentLike(comment.fcId)">
                                        <svg t="1709468079156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16016" width="14" height="14"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="16017"></path></svg>
                                        <span tyle="margin-left: 5px;">{{ comment.likeCount }}</span>
                                    </div>
                                    <span style="font-size: 11px;margin-left: 30px;" @click="open(comment.fcId)">回复</span>
                                </div>
                             </div>
                            </div>
                            <div style="margin-right: 30px;">
                                <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="16" height="16"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-if="name === comment.userName || name === forum.userName" @click.native="commentDelete(comment.fcId,forum.forumId)" icon="el-icon-remove">删除</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-document-copy" id="copyButton" @click.native="copyText">复制</el-dropdown-item>
                                </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                           
                        </div>

                        <!-- 二级评论 -->
                        <div v-if="comment.childComment !== null" v-for="childComment in comment.childComment">
                            <div class="comment-two">
                                <img v-if="childComment.headSculpture !== null" style="height: 40px;width: 40px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                                :src="childComment.headSculpture" alt="">
                                    <div class="comment-text">
                                    <span style="font-size: 16px;margin-bottom: 10px;">{{ childComment.userName }}</span>
                                    <span style="font-size: 16px;">{{ childComment.comment }}</span>
                                    <div style="display: flex;justify-content: flex-start;align-items: center;margin-top: 5px;">
                                        <span style="font-size: 11px;margin-right: 30px;">{{ childComment.createTime }}</span>
                                        <div style="display: flex;align-items: center;" @click="commentLike(childComment.fcId)">
                                            <svg t="1709468079156" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16016" width="14" height="14"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="16017"></path></svg>
                                            <span style="margin-left: 5px;">{{ childComment.likeCount }}</span>
                                        </div>
                                        <span style="font-size: 11px;margin-left: 30px;" @click="open(childComment.fcId)">回复</span>
                                    </div>
                                    </div>
                                <div style="margin-right: 30px;">
                                    <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                        <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="16" height="16"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item v-if="name === comment.userName || name === childComment.userName" @click.native="commentDelete(childComment.fcId,forum.forumId)" icon="el-icon-remove">删除</el-dropdown-item>
                                        <el-dropdown-item icon="el-icon-document-copy" id="copyButton" @click.native="copyText">复制</el-dropdown-item>
                                    </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                            <!-- 回复 2-->
                            <div class="yingc" v-if="display1 === 2 && childComment.fcId === fcId">
                                <img style="height: 40px;width: 40px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                                :src="avatar" alt="">
                                <div class="comment-add" :model="commentAddTwo">
                                    <el-input
                                    class="fabu"
                                    placeholder="请输入内容"
                                    v-model="commentAddTwo.comment"
                                    clearable>
                                    </el-input>
                                <el-button style="margin-left: 5px;" type="primary" plain @click="commentReply()">发布</el-button> 
                                </div>
                            </div>
                            
                        </div>

                        <!-- 回复 1-->
                        <div class="yingc" v-if="display1 === 2 && comment.fcId === fcId">
                            <img style="height: 40px;width: 40px;border-radius: 50px; margin-right: 10px;border-style: solid;border-width: 1px;" 
                            :src="avatar" alt="">
                            <div class="comment-add" :model="commentAddTwo">
                                <el-input
                                class="fabu"
                                placeholder="请输入内容"
                                v-model="commentAddTwo.comment"
                                clearable>
                                </el-input>
                            <el-button style="margin-left: 5px;" type="primary" plain @click="commentReply()">发布</el-button> 
                            </div>
                        </div>

                        <div v-else></div>
                        
                    </div>

                    <div class="empty" v-else>
                        <span>暂无评论</span>
                    </div>

                    </div>
                </div>
            </div>

                <p v-if="loading" style="text-align: center;">没有更多了</p>
                <p v-else style="text-align: center;">加载中...</p>
                
        </div>

        <div class="popular">
            <div class="bandan">
                文章推荐
                <svg t="1708611196550" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9741" width="20" height="20"><path d="M799.872 485.461333h1.92a3.157333 3.157333 0 0 1 0.128 1.749334c-5.973333 30.634667-11.648 63.232-16.981333 93.909333-3.157333 18.218667-6.229333 35.712-9.130667 51.754667-8.405333 45.994667-16.213333 82.474667-24.746667 108.16-6.272 18.730667-12.672 32.085333-19.84 40.32a23.68 23.68 0 0 1-7.424 6.101333 28.928 28.928 0 0 1-12.757333 2.389333l-175.616-0.256h-0.042667l-193.962666-0.213333H341.333333l-0.085333-0.128h-0.042667a1.237333 1.237333 0 0 1-0.256-0.384v-0.085333l-0.042666-0.256c-0.469333-47.872-1.237333-93.482667-1.962667-138.410667-0.896-53.76-1.792-106.410667-2.133333-160.554667 86.186667-40.533333 146.218667-130.56 155.306666-224.853333 5.248-21.888 13.781333-32.725333 19.669334-37.930667 6.485333-5.717333 14.08-8.533333 22.186666-8.874666 18.816-0.768 32.554667 10.496 36.266667 23.552 9.173333 32.128 15.445333 97.621333 13.098667 155.178666l-3.669334 88.832h88.917334c19.029333 0 34.645333-0.042667 49.194666-0.128 26.282667-0.085333 49.066667-0.213333 82.090667 0.128z m-264.704 389.461334l176.213333 0.256C789.333333 874.666667 817.749333 810.666667 832 768c14.72-44.202667 25.685333-107.178667 37.290667-173.866667 5.205333-29.866667 10.538667-60.544 16.384-90.581333a88.490667 88.490667 0 0 0-51.370667-98.048 106.410667 106.410667 0 0 0-33.578667-5.376c-17.664-0.170667-32.64-0.213333-46.72-0.213333l-37.333333 0.085333c-14.506667 0.085333-29.866667 0.128-48.085333 0.128 0.768-18.773333 0.768-38.613333 0-58.453333-1.749333-46.506667-7.466667-92.8-16.256-123.605334-31.744-111.402667-211.669333-127.658667-244.736 33.834667-5.888 83.413333-69.034667 159.146667-144.938667 172.501333-9.173333 1.621333-11.306667 5.12-11.306667 14.421334-0.042667 72.832 1.109333 142.933333 2.261334 213.973333 0.768 44.8 1.493333 90.026667 1.962666 136.533333 0.426667 47.146667 38.656 85.333333 85.76 85.333334l193.706667 0.256h0.128zM213.333333 490.666667a42.666667 42.666667 0 1 0-85.333333 0v341.333333a42.666667 42.666667 0 1 0 85.333333 0v-341.333333z m123.306667-51.797334v-0.042666z" fill="#14101C" p-id="9742"></path></svg>
            </div>
            <div class="popular-title">
                <div style="margin-bottom: 15px;" v-for="popular in this.populars">
                    <span style="margin-right: 10px;">{{ popular.topics }}</span>
                    <svg t="1684160579492" class="footericon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1335" width="20" height="20"><path d="M936.676677 572.443627c-18.59552 69.169359-111.428835 302.915008-115.377774 312.827775-0.431835 0.959861-0.847298 1.886977-1.343601 2.797719-18.307971 31.659047-52.012607 51.804876-88.771813 53.308113-1.390673 0.255827-2.814092 0.415462-4.285606 0.415462L404.509359 941.792697c-11.864212 0-21.441335-9.641591-21.441335-21.441335 0-11.879562 9.577123-21.537526 21.441335-21.537526l318.535777 0c1.215688-0.207731 2.51017-0.367367 3.805676-0.367367 22.960944-0.048095 43.490513-11.464099 55.114249-30.602995 8.266267-20.818141 96.079242-242.588037 113.203248-306.560024 15.31787-57.208956-18.771529-116.209722-76.012208-131.574664-8.010441-2.142803-16.868179-3.149736-27.836999-3.149736l-128.968303-0.511653c-7.099698 0-13.638625-3.518127-17.668405-9.305947-3.997034-5.835915-4.877077-13.223163-2.318812-19.85828 12.551874-32.95353 20.018939-110.389156 20.018939-207.17141 0-35.591613-28.876678-64.516386-64.420195-64.516386-35.591613 0-64.516386 28.924773-64.516386 64.516386l0 21.441335c0 142.255934-115.617228 257.873162-257.873162 257.873162-11.864212 0-21.441335-9.561773-21.441335-21.521153 0-11.799744 9.577123-21.457708 21.441335-21.457708 118.543883 0 214.894302-96.398514 214.894302-214.894302l0-21.441335c0-59.303664 48.2714-107.495246 107.495246-107.495246s107.399055 48.191582 107.399055 107.495246c0 50.957579-2.046612 136.499837-14.550391 193.452967l100.636025 0.415462c14.693654 0 27.037796 1.471514 38.822191 4.621251C910.438083 409.69087 958.166107 492.322845 936.676677 572.443627L936.676677 572.443627zM275.572778 941.79372 168.173722 941.79372c-47.424102 0-85.957721-38.518269-85.957721-85.957721l0-343.830883c0-47.376007 38.533618-85.957721 85.957721-85.957721l107.399055 0c11.879562 0 21.537526 9.657964 21.537526 21.457708l0 472.847282C297.110303 932.152129 287.452339 941.79372 275.572778 941.79372L275.572778 941.79372zM254.131443 469.026256l-85.957721 0c-23.712051 0-42.97886 19.266809-42.97886 42.97886l0 343.830883c0 23.728424 19.266809 42.97886 42.97886 42.97886l85.957721 0L254.131443 469.026256 254.131443 469.026256z" p-id="1336" fill="#e6e6e6"></path></svg>
                    <span style="color: #ff8200;">{{ popular.likeCount }}</span>
                </div>
            </div>
            <div class="zhangkai">
                <span v-if="type === 1"  @click="showContent()">全部展开</span>
                <span v-else @click="showContent()">收回</span>
            </div>
        </div>
    </div>

         <!-- 文案添加 -->
        <el-dialog title="文案投稿" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="文案" :label-width="'120px'">
                <el-input v-model="form.text" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCopyeritings">确 定</el-button>
            </div>
        </el-dialog>

</div>
</template>

<script>
import GlobalHead from '@/components/GlobalHead';
import copywritingApi from '@/api/copywriting';
import forumApi from '@/api/forum';
import forumLikeApi from '@/api/forumIike';
import popularApi from '@/api/popular';
import forumCommentApi from '@/api/forumComment';
import { mapGetters } from 'vuex';
import fcLikeApi from '@/api/forumCommentLike';
import Clipboard from "clipboard";

export default{
    name: 'HomePage',
    components:{
        GlobalHead,
    },
    computed: {
      ...mapGetters([
        'avatar',
        'name'
      ]),
    },
    data(){
        return{
            display1: 1,
            fcId:null,
            parentId:null,
            forumId:null,
            display: 1,
            loading: false,
            lastPage: false,
            dialogVisible: false,
            fetch:false,
            dialogFormVisible: false,
            totalNum:'',
            type: 1,
            form:{
                text:''
            },
            copywriting: {
                text:'',
                userName:''
            },
            search:{
                search:"",
                pageNum:1,
                pageSize:10
            },
            forums:{
                forumId: "",
                userId: "",
                userName: "",
                headSculpture: "",
                location: "",
                topics: "",
                text: "",
                picss: [],
                videoUrls: [],
                attitudesCount: "",
                commentsCount: "",
                likeCount: "",
                createTime: ""
            },
            populars:{
                popularId:"",
                forumId: "",
                userId: "",
                userName: "",
                headSculpture: "",
                location: "",
                topics: "",
                text: "",
                picss: [],
                videoUrls: [],
                attitudesCount: "",
                commentsCount: "",
                likeCount: "",
                createTime: ""
            },
            commentAdd:{
                forumId: null,
                comment: '',
                parentId: null,
            },
            commentAddTwo:{
                forumId: null,
                comment: '',
                parentId: null,
            },
            comments:{
                fcId: null,
                forumId: null,
                comment: "",
                likeCount: 0,
                createTime: "",
                headSculpture: null,
                userName: "",
                childComment: []
            },
            forumCommentCount:null,
            commentLikeCount:null,
            forumLikeCount:null,
            
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
    mounted(){
        //事件监听
        window.addEventListener("scroll", this.listenBottomOut); 

    },
    destroyed() {
        // 离开页面取消监听
        window.removeEventListener("scroll", this.listenBottomOut, false);

    },
    methods:{
      //查询文案
      allCopywritings(){
        copywritingApi.allCopywritings().then(res => {
            this.copywriting = res.data;
        })
      },
      //添加文案
      addCopyeritings(){
        if(this.form.text.length >= 2){
            copywritingApi.addCopywritings(this.form).then(res => {
                if(res.code === 200){
                    this.dialogFormVisible = false;
                    this.$message({
                    message: res.message,
                    type: 'success'
                    });
                }else{
                    this.$message.error(res.message);
                }
        })
        }else{
            this.$message.error("内容最少两个字！");
            return false;
        }
      },
      //查询文章
      async searchForum(){
        this.search.pageNum = 1;
        forumApi.forum(this.search).then(res => {
            this.forums = res.data;
            this.totalNum = Math.ceil(res.totalNum / this.search.pageSize);  //向上取整

        })
      },
      // 触底触发函数
     listenBottomOut() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  //滚动条相对于整个页面顶部的偏移量
        const clientHeight = document.documentElement.clientHeight;  //获取浏览器视口的高度，即可见区域的高度。
        const scrollHeight = document.documentElement.scrollHeight;  // 获取整个页面的高度，包括溢出部分。
        if (scrollTop + clientHeight + 50 >= scrollHeight) {
                console.log("触底了~");
			// 此处可以调用获取数据的方法
           
            this.search.pageNum ++;
           
            if(this.search.pageNum > this.totalNum){
                console.log("无数据可查询！！！")
                this.loading = true;
                return false
            }else{
                
                setTimeout(() => {
                    this.loading = false;
                    forumApi.forum(this.search).then(res => {
                    const newDate = res.data;
                    this.forums = this.forums.concat(newDate);
                })

                }, 2000)
            }
      }
    },
      //下拉刷新
      async fetchData() {
        // console.log("下拉刷新")
        // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // const scrollHeight = document.documentElement.scrollHeight;
        // const clientHeight = document.documentElement.clientHeight;
    
        // // 判断滚动条是否已经滚动到页面底部附近
        // if (scrollHeight - scrollTop - clientHeight < 200) { // 判断滚动条距离页面底部的距离是否小于100px，可以根据需要调整
        //     // 在这里触发获取数据的操作
           
        // console.log("下拉刷新")
        
        // setTimeout(() => {
        //     this.fetch = true;
        //         }, 2000)
        // }
         
        },
        // 点赞
        like(forumId){
            forumLikeApi.like(forumId).then((res) =>{
                if(res.code === 200){
                    this.searchForum(this.search);
                }else{
                    return false;
                }
            })
        },
        //跳转他人主页
        async toPersonalPage(data){
            let rows = data;
            this.$router.push({ path: '/personal-homepage?userId='+rows});
        },
        getPopular(){
            popularApi.findPopular().then((res) =>{
                if(res.code === 200){
                    this.populars = res.data;
                }else{
                    return false;
                }
            })
        },
        showContent(){
           this.type++;
            if (this.type === 2) {
                popularApi.findPopular().then((res) =>{
                if(res.code === 200){
                    this.forums = res.data;
                }else{
                    return false;
                }
            })
                console.log('popular')
                
            } else if (this.type === 3) {
                // 处理显示视频内容的逻辑
                this.searchForum();
                this.type = 1;
                console.log('forum')
            }
        },
        //获取评论
        getComments(data){
            this.comments = null;
            console.log("是否为空："+this.comments)
            forumCommentApi.getCommentById(data).then((res) =>{
                if(res.code === 200){
                    this.comments = res.data;
                }else if(res.code !== 200){
                    console.log("查询文章评论失败")
                    this.comments = null;
                    return false;
                }
            })
        },
        //评论添加
        addComment(data){
            this.commentAdd.forumId = data;
            forumCommentApi.commentAdd(this.commentAdd).then((res) =>{
                if(res.code === 200){
                    this.getCommentCount(data);
                    this.getComments(data);
                    this.commentAdd.comment = '';
                    console.log("评论添加成功！")
                }else{
                    
                    return false;
                }

            })
        },
        //打开评论区
        openComments(data){
            this.display++;
            this.forumId = data;
            console.log("fou:"+this.forumId)
            if(this.display === 2){
                this.display = 2;
                this.getComments(data);
            }else if(this.display === 3){
                this.comments = null;
                this.display = 1;
            }
        },
        //评论点赞
        commentLike(data){
            this.fcId = data;
            fcLikeApi.commentLike(data).then((res) =>{
                if(res.code === 200){
                    this.getComments(this.forumId);
                    console.log("评论点赞成功！")
                }else{
                    console.log("点赞失败！")
                    return false;
                }
            })
        },
        open(data){
            this.display1++
            this.parentId = data;
            this.fcId = data;
            console.log("data1:"+data)
            if(this.display1 === 2){
                this.display1 = 2;
            }else if(this.display1 === 3){
                this.display1 = 1;
            }
            
        },
       //评论回复
       commentReply(){
            this.commentAddTwo.forumId = this.forumId;
            this.commentAddTwo.parentId = this.parentId;
            forumCommentApi.commentAdd(this.commentAddTwo).then((res) =>{
                if(res.code === 200){
                    this.getComments(this.forumId);
                    this.commentAddTwo.comment = '';
                    this.display1 = 1;
                    console.log("评论添加成功！")
                }else{
                    return false;
                }

            })
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
        //删除评论
        commentDelete(data,forumId){
            forumCommentApi.commentRemove(data).then((res) =>{
                if(res.code === 200){
                    this.getCommentCount(forumId)
                    this.getComments(forumId)
                    console.log("删除评论成功")
                }else{
                    console.log("删除评论失败")
                    return false;
                }
            })
        },
        //获取文章评论数量
        getCommentCount(data){
            forumCommentApi.commentCount(data).then((res) =>{
                if(res.code === 200){
                    this.forumCommentCount = res.data;
                }else{
                    return false;
                }
            })
        },
        //获取评论点赞数
        getCommentLikeCount(data){
            fcLikeApi.getCommentLikeCount(data).then((res) =>{
                if(res.code === 200){
                    this.commentLikeCount = res.data;
                }else{
                    return false;
                }
            })
        },
        //获取文章点赞数
        getForumLikeCount(data){
            forumLikeApi.forumLikeCont(data).then((res) =>{
                if(res.code === 200){
                    this.forumLikeCount = res.data;
                }else{
                    return false;
                }
            })
        }
    
  

    },
    //渲染页面时调用此方法
    created(){
        this.allCopywritings();
        this.searchForum();
        this.getPopular();
    }
    
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
    justify-content: center;
    margin-top: 10px;
}

.copy-writing{
    width: 16%;
    border-radius: 7px;
    background-color: #fff;
    padding: 10px;
    height: 93vh;  /**高度为视口高度的 93%。*/
    position: sticky;    /**进行定位 */
    top: 51px; 
}

.tou-gao{
        width: 100%;
        height: 34px;
        font-size: 15px;
        border-radius: 7px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  /* 添加边框虚影效果 水平偏移、垂直偏移、模糊度和阴影颜色 */
    }

.wen-an{
        display: flex;
        flex-direction: column;
        margin: 15px 40px 10px;
        line-height: 20px;
        font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    }

.article{
    height: auto;
    width: 40%;
    margin-right: 7px;
    margin-left: 7px;
    border-radius: 7px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
}

.article-two{
    padding-bottom: 10px;
    border-bottom-style:solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(201, 206, 206);
}

.contentitem{
    display: flex;
    justify-content: center;
    width: 97%;
    background-color: white;
    padding: 20px 0px 10px 20px;
    overflow: hidden;
    margin-left: 10px;
    margin-bottom: 10px;
    
}
.contentitem .avatar{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50px;
    border-style: solid;
    border-width: 1px;   
}
.contentitem .right{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-left: 10px;
    gap: 10px;
    padding: 0px;
    width: 85%;
    height: auto;
}
.contentitem .na_ti_gu{
    display: flex;
}
.contentitem .na_ti{
    width: 520px;
}
.right .name{
    font-size: 120%;
    font-weight: bold;
    color: #000;
    display: flex;
    align-items: center;
}
.name svg{
    margin-left: 5px;
    width: 25px;
    height: 25px;
}
.right .time{
    color: gray;
    font-size: 80%;
    margin-top: 5px;
}
.right .mainpic{
    width: 90%;
}
.right video{
    width: 90%;
}
.right .footer{
    display: flex;
    justify-content: space-between;
}
.footeritem:hover{
    color: #ff8200;
}

.footeritem{
    display: flex;
    align-items: center;
    width: 100px;
    color: rgb(190, 189, 189);
    font-size: 80%;
}
.footeritem svg{
    width: 25px;
    height: 25px;
    fill: rgb(190, 189, 189);
    margin-right: 10px;
}

.forum-comment{
    width: 100%;
    height: auto;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: rgb(222, 222, 216);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(222, 222, 216);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

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

.popular{
    display: flex;
    width: 16%;
    flex-direction: column;
    border-radius: 7px;
    background-color: #fff;
    height: 93vh;  /**高度为视口高度的 93%。*/
    position: sticky;    /**进行定位 */
    top: 51px;
    z-index: 1;
}

.bandan{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;

}

.popular-title{
    height: 70%;
    width: 100%;
    font-size: 18px;
    margin-bottom: 15px;
    font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    margin-left: 20px;
}

.zhangkai{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20%;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
}

.zhangkai span:hover{
    color: #409EFF;
}

.zhangkai span{
    text-align: center;
    height: 22px;
    width: 95px;
    border-style: solid;
    border-radius: 50px;
    border-width: 1px;
}

.drawer-el{
    width: 660px;
    height: auto;
    position: absolute;
    left: 830px;
    /* top: 130px; */
    transform: translateX(-50%);

}

</style>