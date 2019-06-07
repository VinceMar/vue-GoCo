<template>
<div class="container">
    <div v-if="loading" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
    <div class="artical-item" v-for="(item, index) in news" :key="index">
        <a :href="item.url" class="title">{{item.title}}</a>
        <p class="date">
            <span>发布时间：{{item.publishedAt}}</span>
            <span>来源：{{item.source.name}}</span>
        </p>
        <div class="row">
            <div class="col-md-4">
                <img v-if="item.urlToImage" class="img" :src="item.urlToImage" alt="Error">
                <img v-else class="img" src="https://dummyimage.com/600x400/000000/fcfcfc&text=No+Pic" alt="Error">
            </div>
                <div class="col-md-8">
                    <p v-if="item.description" class="content">
                        {{item.description}}
                    </p>
                    <p v-else class="content">暂无简介</p>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button v-if="showButton&&!loading" class="btn btn-primary" @click="showMore">查看更多</button>
        </div>
    </div>
</template>

<script>
const BaseUrl = "https://newsapi.org/v2/top-headlines?country=cn&category=";
const apiKey = "796e78b507944fafb3e963986139a7cc";

function buildUrl(section) {
    return BaseUrl + section + "&apiKey=" + apiKey;
}

export default {
    props: {
        newsType: String
    },
    data() {
        return {
            num: 3, //默认显示新闻数量
            news: [], //新闻内容
            showButton: true,
            loading: true
        }
    },
    mounted() {
        this.getPosts(this.newsType);
    },
    methods: {
        getPosts(section) {
            let url = buildUrl(section);
            let vm = this;
            this.axios.get(url).then(
                function (body) {
                    vm.loading = false;
                    for (let index = 0; index < vm.num; index++) {
                        vm.news.push(body.data.articles[index]);
                    }
                }
            );
        },
        showMore() {
            let url = buildUrl(this.newsType);
            this.axios.get(url)
                .then(
                    body => {
                        this.news = body.data.articles;
                    }
                );
            this.showButton = !this.showButton;
        }
    }
}
</script>

<style>
.spinner {
  margin: 100px auto 0;
  width: 150px;
  text-align: center;
}
 
.spinner > div {
  width: 30px;
  height: 30px;
  background-color: #67CF22;
 
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
 
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.artical {
    line-height: 1.5;
}

.artical-item {
    border-bottom: 1px solid #bdc3c7;
    margin-bottom: 30px;
    padding: 10px 10px 15px 10px;
}

.artical-item .title {
    font-size: 25px;
    color: black;
}

.artical-item .date {
    margin-top: 20px;
}

.artical-item .date span {
    margin-right: 20px;
}

.artical-item .img {
    width: 100%;
    margin-right: 15px;
}

.artical .content {
    text-indent: 2em;
    /* overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; */
}
</style>
