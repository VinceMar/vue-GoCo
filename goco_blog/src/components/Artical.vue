<template>
<div class="container">
    <div class="artical-item" v-for="(item, index) in news.articles" :key="index">
            <a :href="item.url" class="title">{{item.title}}</a>
            <p class="date">
                <span>发布日期：{{item.publishedAt}}</span>
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
    </div>
</template>

<script>
export default {
    props: {
        newsType: String,
        required: true
    },
    data() {
        return {
            news: {}
        }
    },
    mounted() {
        this.axios.get("https://newsapi.org/v2/top-headlines?country=cn&category=" + this.newsType + "&apiKey=796e78b507944fafb3e963986139a7cc").then(body => {
            this.news = body.data;
        });
    }
}
</script>

<style>
.artical {
    line-height: 1.5;
}

.artical-item {
    border-bottom: 1px solid #000;
    margin-bottom: 30px;
    padding: 10px;
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
