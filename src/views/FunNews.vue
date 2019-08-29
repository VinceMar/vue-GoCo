<template>
<div>
    <Artical :newsType="newsType"></Artical>
</div>
</template>

<script>
import Artical from '@/components/Artical.vue';

export default {
    components: {
        Artical
    },
    data() {
        return {
            newsType: 'entertainment'
        }
    }
}
</script>

<style scope>

</style>
