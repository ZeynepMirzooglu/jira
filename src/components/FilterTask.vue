<template>
    <nav class="filterNav">
        <button @click="updateFilter('all')" :class="{active:current === 'all'}">Hepsi</button>
        <button @click="updateFilter('continue')" :class="{active:current === 'continue'}">Devam Ediyor</button>
        <button @click="updateFilter('completed')" :class="{active:current === 'completed'}">Tamamlandı</button>
    </nav>
 
</template>

<script>
export default {

emits:['filterChange'],
props:['current'],
methods: {
    updateFilter(filterValue){
        this.$emit('filterChange',filterValue)
    }
},
}
</script>

<style scoped>
.filterNav button{
  display: inline-block;
  background: blue;
  color: white;
  font-size: 15px;
  margin-right: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 10px;
  text-transform: uppercase;
}
.active{
    color : black !important;
}
</style>