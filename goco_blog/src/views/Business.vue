<template>
    <Article :newsType="newsType"></Article>
</template>

<script>
import Article from '@/components/Artical.vue'
export default {
    components:{
        Article
    },
    data() {
        return {
            newsType:"business"
        }
    },

}
</script>