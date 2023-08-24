class ListItem {
    constructor(name, dueDate){
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
    }

    getName(){
        return this.name;
    }
    getDate(){
        return this.dueDate;
    }
    setName(name){
        this.name=name;
    }
    setDate(dueDate){
        this.dueDate=dueDate;
    }
    getCompleted(){
        return this.completed;
    }
    setCompleted(trueOrFalse){
        this.completed = trueOrFalse;
    }
}

export {ListItem};