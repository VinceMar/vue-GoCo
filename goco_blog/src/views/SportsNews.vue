<template>
    <Artical :newsType="newsType"></Artical>
</template>

<script>
import Artical from '@/components/Artical.vue'
export default {
    components:{
        Artical
    },
    data() {
        return {
            newsType:"sports"
        }
    },

}
</script>