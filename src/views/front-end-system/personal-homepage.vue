<template>
<div class="body">
    <div class="background-img">
        背景图  上
    </div>
    <div class="contentitem-per" :model="user">

        <div class="personal">
            <div class="heander">
                <img class="avatar-user" :src="user.headSculpture" alt="">
            </div>
            <div class="center-personal">
                <div class="personal-message">
                    <span class="personal-name">{{ user.userName }}</span>
                    <span>账号：{{ user.code }}</span>
                    <span>个性签名：{{ user.signature }}</span>
                    <span>个人简介：{{ user.description }}</span>
                </div>
                <div class="age-address">
                    <span style="margin-right: 40px;">地址：{{ user.location }}</span>
                    <span style="margin-right: 40px;">年龄：{{ user.age }}</span>
                    <svg v-if="user.gender == 1" t="1709208990151" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9981" width="12" height="12"><path d="M554.666667 680.021333V768h128a42.666667 42.666667 0 0 1 0 85.333333h-128v128a42.666667 42.666667 0 0 1-85.333334 0v-128h-128a42.666667 42.666667 0 0 1 0-85.333333h128v-87.978667C300.949333 659.029333 170.666667 515.413333 170.666667 341.333333 170.666667 152.810667 323.477333 0 512 0s341.333333 152.810667 341.333333 341.333333c0 174.08-130.282667 317.696-298.666666 338.688zM256 341.333333c0 141.376 114.624 256 256 256s256-114.624 256-256S653.376 85.333333 512 85.333333 256 199.957333 256 341.333333z" fill="#9099B0" p-id="9982"></path></svg>
                    <svg v-else t="1709209344162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11288" width="13" height="13"><path d="M519.658935 673.068396c81.129762 0 157.397796-31.572066 214.762295-88.937588 118.423133-118.421087 118.423133-311.085084 0-429.507194C677.057755 97.259114 600.788697 65.668629 519.658935 65.668629c-81.128739 0-157.39882 31.590486-214.744899 88.954985-118.402667 118.42211-118.402667 311.086108 0 429.507194C362.279558 641.496329 438.548616 673.068396 519.658935 673.068396zM346.474594 196.183148c46.267766-46.266743 107.764376-71.734788 173.184341-71.734788 65.419965 0 126.937041 25.468045 173.203784 71.734788 95.499028 95.500051 95.499028 250.889097 0 346.389148-46.266743 46.245254-107.765399 71.713298-173.203784 71.713298-65.420989 0-126.916575-25.468045-173.184341-71.713298C250.995009 447.072245 250.995009 291.682175 346.474594 196.183148z" fill="#d4237a" p-id="11289"></path><path d="M793.986861 800.462854 549.061592 800.462854l0.008186-71.2743c0-16.22452-13.164834-29.389354-29.391401-29.389354s-29.389354 13.163811-29.389354 29.389354l-0.007163 71.2743L245.349429 800.462854c-16.225543 0-29.389354 13.163811-29.389354 29.390377s13.163811 29.392424 29.389354 29.392424l244.925269 0-0.00614 71.236438c0 16.22452 13.163811 29.389354 29.390377 29.389354s29.391401-13.163811 29.391401-29.389354l0.007163-71.236438L793.986861 859.245655c16.225543 0 29.391401-13.165858 29.391401-29.392424S810.213427 800.462854 793.986861 800.462854z" fill="#d4237a" p-id="11290"></path></svg>
                </div>
            </div>
            <div class="zuihou" v-if="name === user.userName">
                <el-link class="link-ziliao" :underline="false" @click="dialogFormVisible = true"><i class="el-icon-tickets"></i>资料编辑</el-link>
                <el-link class="link-ziliao" :underline="false" @click="dialogPasswordVisible = true"><i class="el-icon-user"></i>账户修改</el-link>
            </div>
        </div>

        <div class="container">
            <div class="copywriting">
                <span class="tou-gao">文案</span>
                <div class="wen-an" v-for="copy in copywriting" :model="copy">
                    
                    <div class="wen-an-div">
                        <span style="font-size: 16px;width: 90%;">{{ copy.text }}</span>

                        <div style="width: 10%;" v-if="name === user.userName">
                            <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="copywritingsByIdDel(copy.copywritingId)" icon="el-icon-remove">删除</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-document-copy" id="copyButton" @click.native="openDiglog(copy.copywritingId)">修改</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="any">
                <div class="link-header">
                    <el-link class="link" :underline="false" @click="showContent('article')">文章</el-link>
                    <el-link class="link" :underline="false" @click="showContent('video')">视频</el-link>
                    <el-link v-if="name === user.userName" class="link" :underline="false" @click="showContent('privacy')">私密</el-link>
                    <el-link v-if="name === user.userName" class="link" :underline="false" @click="showContent('like')">喜欢</el-link>
                    <div v-else></div>
                </div>
                <div class="article" v-if="type === 'article'">
                    <div class="article-two" v-for="forum in forums">
                        <div class="contentitem">
                        <img class="avatar" :src="forum.headSculpture" alt="">

                        <div class="right">
                            <div class="na_ti_gu">
                                <div class="na_ti">
                                    <div style="width: 90%;">
                                        <div class="name">
                                            {{ forum.userName }}
                                        </div>  
                                        <div class="time">
                                            {{ forum.createTime }}
                                        </div>
                                    </div>
                                    
                                    <div style="width: 10%;" v-if="name === user.userName">
                                        <el-dropdown trigger="click">
                                            <span class="el-dropdown-link">
                                                <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item icon="el-icon-circle-plus" @click.native="openForumDiglog(forum.forumId)">私密</el-dropdown-item>
                                                <el-dropdown-item icon="el-icon-document-copy" @click.native="openForumUpdateDiglog(forum.forumId)">修改</el-dropdown-item>
                                                <el-dropdown-item @click.native="forumDelete(forum.forumId)" icon="el-icon-remove">删除</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
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
                    
                    
                </div>
                <div class="video-wai" v-else-if="type === 'video'">
                    <div class="video" v-for="video in this.videos">
                        <video 
                            @click="toVideoShow(video.videoId)"
                            id="vi"  
                            style="height: auto;width: 280px;overflow: hidden;"
                            :src="video.video" 
                            controls muted autoplay 
                        ></video>
                        <div style="display: flex;flex-wrap: nowrap;align-items: center;">
                            <span style="width: 85%;">{{ video.title }}</span>
                            <div style="width: 15%;" v-if="name === user.userName">
                                <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                        <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item icon="el-icon-circle-plus" @click.native="openVideoDiglog(video.videoId)">私密</el-dropdown-item>
                                        <el-dropdown-item icon="el-icon-document-copy" @click.native="openVideoUpdateDiglog(video.videoId)">修改</el-dropdown-item>
                                        <el-dropdown-item @click.native="VideoDelete(video.videoId)" icon="el-icon-remove">删除</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <!-- 私密 -->
                <div class="privacy" v-else-if="type === 'privacy'">
                    <div class="link-headerTwo">
                        <el-link class="link" :underline="false" @click="showContentTwo('articleTwo')">文章</el-link>
                        <el-link class="link" :underline="false" @click="showContentTwo('videoTwo')">视频</el-link>
                    </div>
                    <div class="article" v-if="typeTwo === 'articleTwo'">
                        <div class="article-two" v-for="forum in forums">
                            <div class="contentitem">
                            <img class="avatar" :src="forum.headSculpture" alt="">

                            <div class="right">
                                <div class="na_ti_gu">
                                    <div class="na_ti">
                                        <div style="width: 90%;">
                                            <div class="name">
                                                {{ forum.userName }}
                                            </div>  
                                            <div class="time">
                                                {{ forum.createTime }}
                                            </div>
                                        </div>
                                        
                                        <div style="width: 10%;" v-if="name === user.userName">
                                            <el-dropdown trigger="click">
                                                <span class="el-dropdown-link">
                                                    <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item icon="el-icon-circle-plus" @click.native="openForumDiglog(forum.forumId)">私密</el-dropdown-item>
                                                    <el-dropdown-item icon="el-icon-document-copy" @click.native="openForumUpdateDiglog(forum.forumId)">修改</el-dropdown-item>
                                                    <el-dropdown-item @click.native="forumDelete(forum.forumId)" icon="el-icon-remove">删除</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </div>
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
                        
                        
                    </div>
                    <div class="video-wai" v-else-if="typeTwo === 'videoTwo'">
                        <div class="video" v-for="video in this.videosP">
                            <video 
                                @click="toVideoShow(video.videoId)"
                                id="vi"  
                                style="height: auto;width: 280px;overflow: hidden;"
                                :src="video.video" 
                                controls muted autoplay 
                            ></video>
                            <div style="display: flex;flex-wrap: nowrap;align-items: center;">
                                <span style="width: 85%;">{{ video.title }}</span>
                                <div style="width: 15%;" v-if="name === user.userName">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link">
                                            <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item icon="el-icon-circle-plus" @click.native="openVideoDiglog(video.videoId)">私密</el-dropdown-item>
                                            <el-dropdown-item icon="el-icon-document-copy" @click.native="openVideoUpdateDiglog(video.videoId)">修改</el-dropdown-item>
                                            <el-dropdown-item @click.native="VideoDelete(video.videoId)" icon="el-icon-remove">删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <!-- 喜欢 -->
                <div class="like" v-else-if="type === 'like'">
                    <div class="link-headerTwo">
                        <el-link class="link" :underline="false" @click="showContentThree('articleThree')">文章</el-link>
                        <el-link class="link" :underline="false" @click="showContentThree('videoThree')">视频</el-link>
                    </div>
                    <div class="article" v-if="typeThree === 'articleThree'">
                        <div class="article-two" v-for="forum in forums">
                            <div class="contentitem">
                            <img class="avatar" :src="forum.headSculpture" alt="">

                            <div class="right">
                                <div class="na_ti_gu">
                                    <div class="na_ti">
                                        <div style="width: 90%;">
                                            <div class="name">
                                                {{ forum.userName }}
                                            </div>  
                                            <div class="time">
                                                {{ forum.createTime }}
                                            </div>
                                        </div>
                                        
                                        <div style="width: 10%;" v-if="name === user.userName">
                                            <el-dropdown trigger="click">
                                                <span class="el-dropdown-link">
                                                    <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item icon="el-icon-circle-plus" @click.native="openForumDiglog(forum.forumId)">私密</el-dropdown-item>
                                                    <el-dropdown-item icon="el-icon-document-copy" @click.native="openForumUpdateDiglog(forum.forumId)">修改</el-dropdown-item>
                                                    <el-dropdown-item @click.native="forumDelete(forum.forumId)" icon="el-icon-remove">删除</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </div>
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
                        
                        
                    </div>
                    <div class="video-wai" v-else-if="typeThree === 'videoThree'">
                        <div class="video" v-for="video in this.videosP">
                            <video 
                                @click="toVideoShow(video.videoId)"
                                id="vi"  
                                style="height: auto;width: 280px;overflow: hidden;"
                                :src="video.video" 
                                controls muted autoplay 
                            ></video>
                            <div style="display: flex;flex-wrap: nowrap;align-items: center;">
                                <span style="width: 85%;">{{ video.title }}</span>
                                <div style="width: 15%;" v-if="name === user.userName">
                                    <el-dropdown trigger="click">
                                        <span class="el-dropdown-link">
                                            <svg t="1710081053386" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2334" width="14" height="14"><path d="M512.12288 0.43008c59.12064 0 108.38016 49.26464 108.38016 108.38528s-49.26464 108.3904-108.38016 108.3904c-59.12064 0-108.39552-49.27488-108.39552-108.3904C403.73248 49.69472 453.00736 0.43008 512.12288 0.43008z m0 400.71168c59.12064 0 108.38016 49.26464 108.38016 108.38528 0 59.13088-49.26464 108.3904-108.38016 108.3904-59.12064 0-108.39552-49.26464-108.39552-108.3904s49.28-108.38528 108.39552-108.38528z m0 400.71168c59.12064 0 108.38016 49.27488 108.38016 108.38528 0 59.13088-49.26464 108.39552-108.38016 108.39552-59.12064 0-108.39552-49.26976-108.39552-108.39552 0.00512-59.1104 49.28-108.38528 108.39552-108.38528z m0 0" p-id="2335"></path></svg>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item icon="el-icon-circle-plus" @click.native="openVideoDiglog(video.videoId)">私密</el-dropdown-item>
                                            <el-dropdown-item icon="el-icon-document-copy" @click.native="openVideoUpdateDiglog(video.videoId)">修改</el-dropdown-item>
                                            <el-dropdown-item @click.native="VideoDelete(video.videoId)" icon="el-icon-remove">删除</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <!-- 资料编辑 -->
     <el-dialog title="资料编辑" :visible.sync="dialogFormVisible">
            <span style="margin-left: 120px;">上传头像：</span>
            <el-upload
                    style="margin-left: 120px;margin-bottom: 10px;"
                    ref="upload"
                    list-type="picture-card"
                    action="http://localhost:8888/users/user-img-upload"
                    :on-success="handleSuccess"
                    :on-remove="handleRemove"
                    :auto-upload="true"
                    accept="image/*">
                    <i class="el-icon-plus"></i>
            </el-upload>

            <el-form :model="user">
                <el-form-item label="昵称" :label-width="'120px'">
                <el-input v-model="user.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="个签" :label-width="'120px'">
                <el-input v-model="user.signature" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="简介" :label-width="'120px'">
                <el-input v-model="user.description" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="'120px'">
                <el-input v-model="user.location" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" :label-width="'120px'">
                <el-input v-model="user.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-select v-model="value" clearable placeholder="性别" style="margin-left: 120px;">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="userUpdate()">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 账户修改 -->
     <el-dialog title="账户修改" :visible.sync="dialogPasswordVisible">
            <el-form :model="DtoUserPassword" :ref="DtoUserPassword" :rules="passwordRules" class="login-form" auto-complete="on" label-position="left">
                <el-form-item label="原始密码" :label-width="'120px'" prop="onePassword">
                <el-input
                    :key="passwordType"
                    ref="onePassword"
                    v-model="DtoUserPassword.onePassword"
                    :type="passwordType"
                    name="onePassword"
                    tabindex="1"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
                </el-form-item>
                <el-form-item label="修改密码" :label-width="'120px'" prop="twoPassword">
                <el-input
                    :key="passwordType"
                    ref="twoPassword"
                    v-model="DtoUserPassword.twoPassword"
                    :type="passwordType"
                    name="twoPassword"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwdt">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogPasswordVisible = false">取 消</el-button>
                <el-button type="primary"  @click.native="updatePassword()">确 定</el-button>
            </div>
        </el-dialog>

        <!-- 文案修改 -->
        <el-dialog title="文案修改" :model="copy" :modal="false" :append-to-body="true" :visible.sync="dialogCopyVisible">
            <el-form>
            <el-form-item label="文案" :label-width="'120px'">
            <el-input v-model="copy.text"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogCopyVisible = false">取 消</el-button>
                <el-button type="primary" @click="copywritingsUpdate(copy)">修 改</el-button>
            </div>
        </el-dialog>

        <!-- 文章修改 -->
      <el-dialog title="文章修改" :visible.sync="dialogUpdateFormVisible" append-to-body>
            <el-form :model="updateforum" :rules="rules" ref="updateforum">
                <el-form-item label="标题" :label-width="'120px'" prop="topics">
                <el-input v-model="updateforum.topics"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="'120px'" prop="text">
                <el-input v-model="updateforum.text"></el-input>
                </el-form-item>

                <div style="display: flex;flex-wrap: nowrap;">
                    <!-- <div>
                        <span style="margin-left: 80px;">上传视频 / 图片：</span>
                        <el-upload
                        style="margin-left: 80px;margin-top: 10px;"
                        class="upload-demo"
                        ref="upload"
                        list-type="picture-card"
                        action="http://139.155.156.2:8888/forums/img-video-upload"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :auto-upload="true"
                        :multiple="true"
                        accept="image/*,video/*">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                    </div> -->

                    <div style="margin-top: 26px;margin-left: 10px;">
                        <el-image 
                        v-for="pics in updateforum.picss"
                        :key="pics"
                        style="width: 150px; height: 150px;margin-right: 1px;overflow: hidden;"
                        :src="pics" 
                        :preview-src-list="updateforum.picss"
                        >
                        </el-image>
                
                        <video 
                        v-for="video in updateforum.videos"
                        id="vi"  
                        style="width: 150px; height: 150px;margin-right: 1px;overflow: hidden;"
                        :key="video"
                        :src="video" 
                        controls muted autoplay 
                        ></video>
                       
                    </div>
                </div>
              
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('updateforum')">重 置</el-button>
                <el-button type="primary" @click="updateForum()">修 改</el-button>
            </div>
        </el-dialog>

       
        <!-- 视频修改 -->
      <el-dialog title="视频修改" :visible.sync="dialogUpdateVideoVisible" append-to-body>
            <el-form :model="updatevideo" :rules="updateVideoRules" ref="updatevideo">
                <el-form-item label="标题" :label-width="'120px'" prop="title">
                <el-input v-model="updatevideo.title"></el-input>
                </el-form-item>
                <el-form-item label="内容" :label-width="'120px'" prop="text">
                <el-input v-model="updatevideo.text"></el-input>
                </el-form-item>

                <div style="display: flex;flex-wrap: nowrap;">
                    <!-- <div>
                        <span style="margin-left: 80px;">上传视频 / 图片：</span>
                        <el-upload
                        style="margin-left: 80px;margin-top: 10px;"
                        class="upload-demo"
                        ref="upload"
                        list-type="picture-card"
                        action="http://139.155.156.2:8888/forums/img-video-upload"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        :auto-upload="true"
                        :multiple="true"
                        accept="image/*,video/*">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                    </div> -->

                    <div style="margin-top: 26px;margin-left: 10px;">
                        <video 
                        v-for="video in updatevideo.videos"
                        id="vi"  
                        style="width: 150px; height: 150px;margin-right: 1px;overflow: hidden;"
                        :key="video"
                        :src="video" 
                        controls muted autoplay 
                        ></video>
                       
                    </div>
                </div>
              
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('updatevideo')">重 置</el-button>
                <el-button type="primary" @click="videoForum()">修 改</el-button>
            </div>
        </el-dialog>

        
</div>
</template>

<script>
import forumApi from '@/api/forum';
import userApi from '@/api/user';
import copywritingsApi from '@/api/copywriting';
import videoApi from '@/api/video';
import { mapGetters } from 'vuex';
import forumLikeApi from '@/api/forumIike';
import forumCommentApi from '@/api/forumComment';
import fcLikeApi from '@/api/forumCommentLike';
import Clipboard from "clipboard";
import videoLikeApi from '@/api/videoLike';
        

export default{
    name: 'PersonalHomePage',
    computed: {
      ...mapGetters([
        'avatar',
        'name'
      ]),
    },
    data(){
        const validateOnePassword = (rule, value, callback) => {

            userApi.jiaoyanPassword(value).then((res) =>{
                if(res.code !== 200){
                    callback(new Error(res.message))
                    return false;
                }

            })
            
            if (value.length < 6) {
                    callback(new Error('密码不能少于6位！'))
                }else{
                    callback()
                }
        
    }
    const validateTwoPassword = (rule, value, callback) => {
        if (value.length < 6) {
            callback(new Error('密码不能少于6位！'))
        } else {
            callback()
        }
    }

        return{
            display1: 1,
            fcId:null,
            parentId:null,
            forumId:null,
            display: 1,
            type: 'article',
            typeTwo: 'articleTwo',
            typeThree: 'articleThree',
            visible: false,
            dialogCopyVisible: false,
            dialogFormVisible:false,
            dialogUpdateVideoVisible:false,
            dialogUpdateFormVisible:false,
            dialogPasswordVisible:false,
            copy: {
                copywritingId:null,
                text:''
            },
            copywriting: {
                copywritingId:null,
                text:''
            },
            options: [{
                value: '1',
                label: '男'
                }, {
                value: '0',
                label: '女'
                }],
            user: {
                userId: 0,
                userName: '',
                code: '',
                headSculpture: '',
                gender: '',
                age: 0,
                signature: '',
                location: '',
                home: '',
                description: ''
            },
            value:'',
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
            videos:{
                videoId: 1,
                userId: "",
                userName: "",
                headSculpture: "",
                location: "",
                title: "",
                video: "",
                videos: [],
                text: "",
                attitudesCount: 0,
                commentsCount: 0,
                likeCount: 0,
                createTime: ""
            },
            videosP:{
                videoId: 1,
                userId: "",
                userName: "",
                headSculpture: "",
                location: "",
                title: "",
                video: "",
                videos: [],
                text: "",
                attitudesCount: 0,
                commentsCount: 0,
                likeCount: 0,
                createTime: ""
            },
            DtoUserPassword:{
                onePassword:'',
                twoPassword:''
            },
            passwordRules: {
                onePassword: [{ required: true, trigger: 'blur', validator: validateOnePassword }],
                twoPassword: [{ required: true, trigger: 'blur', validator: validateTwoPassword }]
            },
            passwordType: 'password',
            code:null,
            updateforum: {
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
            updatevideo: {
                videoId: null,
                title: "",
                videos: [],
                text: ""
            },
            updateVideoRules: {
                text: [
                { required: true, message: '请输入内容！', trigger: 'blur' },
                { min: 1, message: '长度最少1个字符!', trigger: 'blur' }
                    ],
                title: [
                { required: true, message: '请输入内容！', trigger: 'blur' },
                { min: 1, message: '长度最少1个字符!', trigger: 'blur' }
                    ]
            },

        }
    },
    methods: {
        showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.OnePassword.focus()
      })
    },
    showPwdt() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.TwoPassword.focus()
      })
    },
    //上传图片
    async handleSuccess(response, file, fileList) {   //重点 async
                    //处理成功上传

                    this.user.headSculpture = file.name;
                    //假设您的服务器响应包括每个文件的“name”属性
                    //相应地调整响应格式
                    if (response.success && response.name) {
                        file.name = response.name; // Assign the name to the file
                    }
      },
      //删除指定文件
      handleRemove(file, fileList) {
                    // Handle file removal
            console.log("filename:"+file.name)
          forumApi.removeFile(file.name).then((res) =>{
          if(res.code === 200){
              this.$message({message: '删除成功！',type: 'success'});
          }else{
              this.$message.error('删除失败！');
          }

        })
                  
         //
         this.user.headSculpture = null;   
                 
      },
       // 根据用户点击的链接显示不同内容
    showContent(type) {
        this.type = type;
      if (type === 'article') {
        this.getForums();
        // 处理显示文章内容的逻辑
        console.log("文章")
      } else if (type === 'video') {
        this.getVideos();
        // 处理显示视频内容的逻辑
        console.log("视频")
      } else if (type === 'privacy'){
        this.showContentTwo(this.typeTwo);

      } else if (type === 'like'){
        this.showContentThree(this.typeThree);
      }
    },
    showContentTwo(type) {
        this.typeTwo = type;
      if (type === 'articleTwo') {
        this.privacyForumById(this.user.userId);
        // 处理显示文章内容的逻辑
        console.log("文章")
      } else if (type === 'videoTwo') {
        this.privacyVideoById(this.user.userId);
        // 处理显示视频内容的逻辑
        console.log("视频")
      }
    },
    showContentThree(type) {
        this.typeThree = type;
      if (type === 'articleThree') {
        this.ForumCurrentUser();
        // 处理显示文章内容的逻辑
        console.log("文章")
      } else if (type === 'videoThree') {
        this.VideoCurrentUser();
        // 处理显示视频内容的逻辑
        console.log("视频")
      }
    },
    //获得用户信息
    getUser(){

        let userId = this.user.userId;
        this.copywriting = null;
        if(userId === undefined || userId === 0){
            userId = null;
        }

        if(userId !== null){
            userApi.getPersonalUser(userId).then((res) =>{
                this.user = res.data
                //
                this.getCopywritings();
                //
                this.getForums();
                //
                this.getVideos();
                if(res.code === 200){
                    console.log("他人用户信息成功")
                }else{
                    console.log("他人用户信息失败")
                    return false;
                }
            })
        }else{
            userApi.loginUser().then((res) =>{
            this.user = res.data;
            //
            this.getCopywritings();
            //
            this.getForums();
            //
            this.getVideos();
            if(res.code === 200){
                    console.log("用户信息成功")
                }else{
                    console.log("用户信息失败")
                    return false;
                }
        })
        }
        },
        //用户修改
        userUpdate(){

            this.user.gender = this.value;

            let user = this.user;

            if(user.userId !== null){
                userApi.userUpdate(user).then((res) =>{
                if(res.code === 200){
                    this.dialogFormVisible = false;
                    this.getUser();
                    this.$message({
                    message: res.message,
                    type: 'success'
                    });
                }else{
                    this.$message.error(res.message);
                }
            })
            } 
        },
        async getUserId(){
            let userId = this.$route.query.userId;
            console.log("userid:"+userId)

            if(userId === undefined){
                return false;
            }

            this.user.userId = userId;

            userApi.getUserId().then((res) =>{
                console.log("res.data："+res.data)
                if(res.data === this.user.userId ){
                    this.correct = 1;
                }else{
                    this.correct = 2;
                }
            })
        },
        //获得文案
        getCopywritings(){
           
            copywritingsApi.Copywritings(this.user.userId).then((res) =>{
                if(res.code === 200){
                    this.copywriting = res.data;
                }else{
                    console.log("文案查询失败")
                }
            })
        },
        //查询文章
        getForums(){
            this.forums = null;
            forumApi.getForumByUserId(this.user.userId).then((res) =>{
                if(res.code === 200){
                    this.forums = res.data;
                }else{
                    console.log("文章查询失败")
                }
               
            })

        },
        //查询视频
        getVideos(){
            videoApi.getVideoByUserId(this.user.userId).then((res) =>{
                if(res.code === 200){
                    this.videos = res.data;
                }else{
                    console.log("查询视频失败")
                }
                
            })
        },
        //修改密码
        async updatePassword(){
            userApi.updatePassword(this.DtoUserPassword).then((res) =>{

                if( res.code === 200){
                    this.$store.dispatch('user/logout')
                    this.dialogPasswordVisible = false;
                    this.$router.push(`/login`)
                    location.reload()
                }else{
                    this.dialogPasswordVisible = true;
                }

            })
        },
        //文案修改
        copywritingsUpdate(data){
            this.dialogCopyVisible = true;
            copywritingsApi.updateCopywritings(data).then((res) =>{
                if(res.code === 200){
                    this.dialogCopyVisible = false;
                    this.getCopywritings();
                    this.$message({
                    message: '文案修改成功！',
                    type: 'success'
                    });
                }
            })
        },
        //文案删除
        copywritingsByIdDel(data){
            copywritingsApi.deleteCopywritingById(data).then((res) =>{
                if(res.code === 200){
                    this.getCopywritings();
                    this.$message({
                    message: '文案删除成功！',
                    type: 'success'
                    });
                }
            })
        },
        //
        openDiglog(data){
            this.dialogCopyVisible = true;
            copywritingsApi.copywritingById(data).then((res) =>{
                if(res.code === 200){
                    this.copy = res.data;
                }
            })
        },
        //文章不可见
        openForumDiglog(data){
            forumApi.updatePrivacyById(data).then((res) => {
                if(res.code === 200){
                    this.getForums();
                    this.$message({
                    message: '文章已修改不可见',
                    type: 'success'
                    });
                }
            })
        },
        //文章删除
        forumDelete(data){
            forumApi.forumDelById(data).then((res) =>{
                if(res.code === 200){
                    this.getForums();
                    this.$message({
                    message: '文章删除成功！',
                    type: 'success'
                    });
                }
            })
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
      //
      openForumUpdateDiglog(data){
        this.dialogUpdateFormVisible = true;
        forumApi.getForumById(data).then((res) =>{
            if(res.code === 200){
                this.updateforum = res.data;
            }
        })

      },
      //文章修改
       async updateForum(){

        var pic = [];
        var vid = [];
        for(var a = 0; a <= this.updateforum.picss.length; a++){

            if(this.updateforum.picss[a]){
                var parts = this.updateforum.picss[a].split("/");
                pic.push(parts[parts.length - 1])
            }
        }
        for(var a = 0; a <= this.updateforum.videos.length; a++){

            if(this.updateforum.videos[a]){
                var parts = this.updateforum.videos[a].split("/");
                vid.push(parts[parts.length - 1])
                console.log(parts[parts.length - 1])
            }
            }

        this.updateforum.picss = pic;
        this.updateforum.videos = vid;

        forumApi.updateForum(this.updateforum).then((res) =>{
            if(res.code === 200){
                this.dialogUpdateFormVisible = false;
                this.getForums();
                    this.$message({
                    message: '文章修改成功！',
                    type: 'success'
                    });
                }
        })

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
                    this.getComments(forumId)
                    console.log("删除评论成功")
                }else{
                    console.log("删除评论失败")
                    return false;
                }
            })
        },
        // 点赞
        like(forumId){
            forumLikeApi.like(forumId).then((res) =>{
                if(res.code === 200){
                    this.getForums();
                }else{
                    return false;
                }
            })
        },
        //跳转
        async toVideoShow(data){
            this.$router.push({ path: '/video-show?videoId='+data});
           },
           //视频私密
        openVideoDiglog(data){
            videoApi.isPrivacy(data).then((res) =>{
                if(res.code === 200){
                    this.getVideos();
                    this.privacyVideoById(this.user.userId)
                    this.$message({
                    message: '视频不可见！',
                    type: 'success'
                    });
                }
            })
           },
           //视频删除
        VideoDelete(data){
            videoApi.delVideoById(data).then((res) => {
                if(res.code === 200){
                    this.getVideos();
                    this.$message({
                    message: '视频删除成功！',
                    type: 'success'
                    });
                }
            })    
           },
           //打开修改框
        openVideoUpdateDiglog(data){
            videoApi.getVideoByVideoId(data).then((res) =>{
                if(res.code === 200){
                    this.dialogUpdateVideoVisible = true;
                    this.updatevideo = res.data;
                }
            })
        },
        //修改视频
        async videoForum(){
            var vid = [];

            for(var a = 0; a <= this.updatevideo.videos.length; a++){

                if(this.updatevideo.videos[a]){
                    var parts = this.updatevideo.videos[a].split("/");
                    vid.push(parts[parts.length - 1])
                    console.log(parts[parts.length - 1])
                }
            }
            this.updatevideo.videos = vid;

            videoApi.updateVideo(this.updatevideo).then((res) =>{
                if(res.code === 200){
                    this.dialogUpdateVideoVisible = false;
                    this.getVideos();
                    this.$message({
                    message: '视频修改成功！',
                    type: 'success'
                    });
                }
            })
        },
        //获得隐私视频
        privacyVideoById(data){
            videoApi.privacyVideoById(data).then((res) => {
                console.log(res)
                if(res.code === 200){
                    this.videosP = res.data;
                }
                console.log("查询视频失败")
            })
        },
        //获得隐私文章
        privacyForumById(data){
            forumApi.privacyForumById(data).then((res) =>{
                if(res.code === 200){
                    this.forums = res.data;
                }else{
                    console.log("文章查询失败")
                }
            })
        },
        //获得当前用户点赞文章
        ForumCurrentUser(){
            forumLikeApi.ForumCurrentUser().then((res) =>{
                if(res.code === 200){
                    this.forums = res.data;
                }else{
                    console.log("文章查询失败")
                }
            })
        },
        //获得当前用户点赞视频
        VideoCurrentUser(){
            videoLikeApi.VideoCurrentUser().then((res) => {
                console.log(res)
                if(res.code === 200){
                    this.videosP = res.data;
                }
                console.log("查询视频失败")
            })
        },

    }, 
    created(){
        this.getUserId();
        this.getUser();
        
    }  
}
</script>

<style lang="scss" scoped>
.body{
    display: flex;
    flex-direction: column;
    background-color: #f1f2f5;
}

.background-img{
    width: 100%;
    height: 150px;
    background-color: #fff;
    background-image: url("../../assets/404_images/beijing.jpg");
    background-size: 100%;
}

.contentitem-per{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.personal{
    width: 80%;
    height: 180px;
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;

}

.personal-name{
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    font-size: 30px;

}

.heander{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    
}

.avatar-user{
    position: absolute;
    left: 270px;
    top: 130px;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
}

.center-personal{
    width: 60%;
    height: 100%;
    
}

.personal-message{
    display: flex;
    flex-direction: column;
}

.personal-message span{
    font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    margin-bottom: 10px;
}

.age-address{
    font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
}

.zuihou{
    height: 40px;
    width: 300px;
    display: flex;
    justify-content: flex-end;
}

.link-ziliao{
    width: 90px;
    height: 30px;
    margin-top: 10px;
    border-style: solid;
    border-radius: 50px;
    border-width:1px
}

.container{
    display: flex;
    width: 80%;
    height: 100%;

}

.copywriting{
    width: 20%;
    height: 90vh;
    border-radius: 5px;
    background-color: #fff;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    position: sticky;    /**进行定位 */
    top: 0px;
}

.tou-gao{
    width: 100%;
    height: 30px;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    border-bottom-style:solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(201, 206, 206);
    }

.wen-an{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 5px;
        line-height: 20px;
        font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    }

.wen-an-div{
    height: 25px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.any{
    width: 80%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
}

.link-header{
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom-style:solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(201, 206, 206);
}

.link-headerTwo{
    height: 40px;
    width: 20%;
    display: flex;
    align-items: center;
    border-bottom-style:solid;
    border-bottom-width: 1px;
    border-bottom-color: rgb(201, 206, 206);
}

.link{
    margin-left: 30px;
    font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    font-size: 20px;
}

.article{
    width: 80%;
    height: 100%;
}

.contentitem{
    display: flex;
    justify-content: center;
    width: 97%;
    background-color: white;
    padding: 20px 0px 10px 20px;
    overflow: hidden;
    margin-left: 10px;
    margin-bottom: 10px;;
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
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
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

.article-two{
    display: flex;
    flex-direction: column;
    border-bottom-style:solid;
    margin-left: 20px;
    border-bottom-width: 1px;
    border-bottom-color: rgb(201, 206, 206)
}

.forum-comment{
    width: 100%;
    height: auto;
    margin-right: 20px;
    margin-left: 20px;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: rgb(222, 222, 216);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    
}

.comment-show{
        height: 100%;
        width: 100%;
        margin-bottom: 20px;
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

.video-wai{
    height: 100%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 60px;
}

.video{
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 10px;
}

.video span{
    font-family: "楷体", "KaiTi", SimKai, STKaiti, "华文楷体", serif;
    font-size: 20px;
    margin-top: 10px;

}

</style>