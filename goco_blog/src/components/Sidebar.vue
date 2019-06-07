<template>
<div class="card position-fixed">
    <img class="card-img-top" src="../assets/head.jpg" width="200px" alt="Card image cap">
    <div class="card-body">
        <h3 class="card-title">我的资料</h3>
        <div class="card-text">
            <p>姓名：郭晨</p>
            <p>班级：计科1702</p>
            <p>学号：20171222057</p>
            <p>后续这里可以放有用的东西</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style>
.card {
    width: 20%;
}

.card .card-title {
    margin-bottom: 20px;
    font-weight: 600;
}

.newslist {
    margin-top: 20px;
}
</style>
