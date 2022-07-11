<template>
    <div class="wrap">
        <div class="title">
            <span :class="{ 'is-active': isActive == `/${item.path}` }"
                v-for="item in titleOptions[0] && titleOptions[0].children" @click="handleRoute(item)">
                {{ item.title }}
            </span>
        </div>
        <div class="content">
            <div class="contain">
                <router-view></router-view>
            </div>
            <div class="footer">
                底部@copy alaner出品
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

let titleOptions = ref([]);
let route = useRouter();
onMounted(() => {
    titleOptions.value = route.options.routes;
})
let isActive = computed(() => {
    return route.currentRoute.value.path;
})

function handleRoute(item) {
      if (route.currentRoute.value.path!=`/${item.path}`) {
        route.push(item.path);
    }
}
</script>
<style lang="scss" scoped>
.wrap {
    display: flex;
    flex-direction: flex;
    height: 100vh;
}

.title {
    width: 200px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: gray;
    cursor: pointer;

    span {
        width: 150px;
        line-height: 50px;
        background: rgb(223, 212, 185);
        margin: 20px;

        &:hover {
            background: rgb(82, 82, 81);
        }

        &.is-active {
            background: rgb(112, 164, 132);
        }
    }
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.contain {
    flex: 1;
    position: relative;
}


.footer {
    line-height: 3vh;
    background: rgb(201, 192, 192);
    width: 100%;
}
</style>