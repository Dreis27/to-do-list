class ListItem {
    constructor(name, dueDate){
        this.name = name;
        this.dueDate = dueDate;
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
}

export {ListItem};