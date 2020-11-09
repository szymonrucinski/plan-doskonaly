import { action, observable } from "mobx";

export class LearnController {
    @observable
    darkMode: boolean = true;
  
    @action
    incCount(): void {
     this.darkMode = !(this.darkMode)
    }
}