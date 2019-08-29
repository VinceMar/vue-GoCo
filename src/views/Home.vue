<template>
  <div class="container">
    <h3>来谈谈你的想法吧</h3>
    <VssueDemo :title="title"></VssueDemo>
  </div>
</template>
<script>
import VssueDemo from '@/components/Comment.vue'
export default {
  components:{
    VssueDemo
  },
  data() {
    return {
      title:"评论"
    }
  }
}
</script>
<style scope>

</style>