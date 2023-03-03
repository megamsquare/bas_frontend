
import { defineStore } from "pinia";
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ref } from "vue";

export const useRoutingStore = defineStore("routing", () => {
    const getRouter = useRouter();
    function router() {
        // console.log(getRouter.currentRoute.value.name)
        return getRouter.currentRoute;
    }


    return { router }
})