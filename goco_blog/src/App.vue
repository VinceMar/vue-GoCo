<template>
<div id="app">
    <Navbar></Navbar>
    <div class="container main">
        <div class="row">
            <div class="col-md-8">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
            <div class="col-md-4">
                <Sidebar></Sidebar>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
    components: {
        Navbar,
        Sidebar
    }
};
</script>

<style>
.main {
    padding: 20px;
}

.fade-enter {
    opacity: 0;
}

.fade-leave {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity .3s;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .3s;
}
</style>
