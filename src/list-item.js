class ListItem {
    constructor(name, dueDate, originProjectName){
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
        this.name2 = originProjectName;
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
    getName2(){
        return this.name2;
    }
    setName2(name2){
        this.name2 = name2;
    }
}

export {ListItem};