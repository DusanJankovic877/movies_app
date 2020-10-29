<template>
    <div class="pagination">
    <h1>pagination</h1>
    <button  v-if="canGoToPreviousPage" @click="currentPageChanged(-1)">pev</button>
    <span>current page {{currentPage}}</span>
    <button v-if="canGoToNextPage" @click="currentPageChanged(1)">next</button>

    </div>
</template>
<script>
const PAGE_SIZE = 5;

export default {
    name: 'Pagination',
    props: {
        numOfItems: Number
    },
    data(){
        return{
            currentPage: 1
        }
    },
    computed:{
        canGoToPreviousPage(){
            return this.currentPage > 1;
        },
        canGoToNextPage(){
            return this.currentPage * PAGE_SIZE < this.numOfItems;
        }
    },
    methods:{
        currentPageChanged(step){
            console.log(step);
            this.currentPage = this.currentPage + step;
            console.log(this.currentPage);
            this.$emit('current-page-changed', this.currentPage);
        }
    }    
}
</script>
<style scoped>

</style>