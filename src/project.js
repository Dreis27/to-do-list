class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    getName(){
        return this.name;
    }
    getTasks(){
        return this.tasks;
    }
    getTask(taskName){
        return this.tasks.find((task)=> task.getName() === taskName);
    }

    setName(name){
        this.name = name;
    }
    setTasks(taskArray){
        this.tasks = taskArray;
    }
    addTask(newTask){
        if(this.tasks.find((task)=> TextTrackList.getName()===newTask.getName())) return;
        this.tasks.push(newTask)
    }

    deleteTask(taskName){
        this.tasks = this.tasks.filter((task)=> task.getName() !== taskName);
    }
}