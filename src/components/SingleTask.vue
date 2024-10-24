<template>
  <div class="task" :class="{complete:task.complete}">
    <div class="actions">
        <h3 @click="toggleDetail">{{task.title}}</h3> 
        <div>
            <span class="material-symbols-outlined" @click="deleteTask">delete</span>
            <span class="material-symbols-outlined tick"  @click="checkTask">check</span>
            <router-link :to="{name:'editTask',params:{id:task.id}}"><span class="material-symbols-outlined">edit</span></router-link>
    
        </div>
    </div>
    <div class="details" v-if="showDetails">
        <p>{{task.details}}</p>
    </div>
 
  </div>
</template>

<script>
export default {
props:['task'],
emits:['delete'],
data() {
    return {
        showDetails:false,
        uri:'http://localhost:3000/tasks/'+ this.task.id,
    }
},
methods: {
    toggleDetail(){
        this.showDetails = !this.showDetails
    },
    deleteTask(){
        fetch(this.uri,{method:'DELETE'}).then(()=>this.$emit('delete',this.task.id)).catch(err=>console.error(err.message))
    },
    checkTask(){
       fetch(this.uri,{method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            title:this.task.title,
            details:this.task.details,
            complete: !this.task.complete
        })
       }).then(()=>{this.$emit('update',this.task.id)}).catch(err=>console.error(err.message)) 
    }
},
}
</script>

<style>
.task{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 10px 20px;
    margin: 20px 0px;
    background:aliceblue;
    border-radius: 20px;
    border-left: 8px solid firebrick;
}
h3{
    cursor: pointer;
}
.details{
    padding: 20px 0px;
}
.actions{
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined{
    font-size: 25px;
    margin-left: 10px;
    color: grey;
    cursor: pointer;
}
.task.complete{
    border-left: 8px solid green;
}
.task.complete .tick{
    color:green
}
</style>