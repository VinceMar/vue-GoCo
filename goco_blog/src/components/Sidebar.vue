<template>
<div class="card">
    <div class="card-header bg-dark">
        <h4>实时热点</h4>
    </div>
    <ul class="newslist">
        <li class="list-item" v-for="(item, index) in news.articles" :key="index">
            {{item.title}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            news: {}
        }
    },
    mounted() {
        this.axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=796e78b507944fafb3e963986139a7cc").
        then(body => {
            this.news = body.data;
        });
    },
    methods: {}
}
</script>

<style>
.card h4 {
    color: white;
}

.newslist {
    margin-top: 20px;
}
</style>
