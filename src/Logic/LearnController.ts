import { action, observable } from "mobx";

export class LearnController {
    @observable
    darkMode: boolean = true;

    @observable
    count: number = 0;
  
    @action
    incCount(): void {
    this.count += 1;
     console.log(this.count)
    }

    getCount() : number {
        console.log(this.count)
        return this.count;
    }
}