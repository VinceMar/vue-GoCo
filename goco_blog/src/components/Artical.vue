<template>
    <div class="artical">
      <div class="artical-item" v-for="(item, index) in articals" :key="index">
        <a :href="item.link" class="title">{{item.title}}</a>
        <p class="date">发布日期：{{item.pubdate.substring(0,10)}}</p>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
</template>


<script>
export default {
    name:'Artical',
    data() {
    return {
      articals:{}
    }
  },
  mounted() {
    this.axios.get("http://api.komavideo.com/news/list").then(body => {
      this.articals = body.data;
    });
  }
}
</script>

<style scope>
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
    color:black;
  }

  .artical-item .date {
    margin-top: 20px;
  }

  .artical .content {
    text-indent: 2em;
    overflow: hidden;
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
  }
</style>