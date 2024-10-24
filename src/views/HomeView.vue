<template>
  <FilterTask :current="current" @filterChange="changeFilter"/>
  <div v-if="tasks.length">
     <div v-for="task in filteredTasks" :key="task.id">
    <SingleTask :task="task" @delete="handleDelete" @update="handleUpdate"/>
     </div>
  </div>
</template>

<script>
import FilterTask from '@/components/FilterTask.vue';
import SingleTask from '@/components/SingleTask.vue';
export default {
  name: 'HomeView',
  components: {
  SingleTask,
  FilterTask
  },
  data() {
    return {
      tasks:[],
      current:'all'
    }
  },
  mounted(){
    fetch('http://localhost:3000/tasks').then(res=>res.json()).then(data=>this.tasks = data).catch(err=>console.error(err.message));
  },
  computed:{
        filteredTasks(){
          if(this.current === 'completed'){
           return this.tasks.filter(task=> task.complete)
          }else if(this.current === 'continue'){
            return this.tasks.filter(task=> !task.complete)
          }else{
            return this.tasks;
          }
       
        }
  },
  methods: {
    handleDelete(id){
     this.tasks = this.tasks.filter(task=> {
      return task.id !== id;
     })
    },
    handleUpdate(id){
      let myTask = this.tasks.find(task=> {return task.id === id});
      myTask.complete =!myTask.complete
    },
    changeFilter(filterValue){
     this.current = filterValue;
    }
  },
}
</script>
