<template>
    <input class="form-control  ml-auto col-sm-2" type="text" placeholder="Search" @input="handleInput">
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'MovieSearch',

    methods:{
        ...mapMutations(['setSearchText']),
        handleInput(event){
            this.setSearchText(event.target.value)
        }
    }

}
</script>
<style scoped>

</style>