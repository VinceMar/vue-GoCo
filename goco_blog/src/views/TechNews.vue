<template>
    <div>
        <Artical :newsType="newsType"></Artical>
    </div>
</template>

<script>
import Artical from "@/components/Artical.vue";

export default {
  name: "tech",
  components: {
    Artical
  },
  data() {
      return {
          newsType:'technology'
      }
  },
};
</script>

