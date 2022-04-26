import * as inquirer from "inquirer";

export class DevConsole {

    _keepAsking = false;


    constructor(){

    }

    listenOptions(options: any[], callback: Function){
        this._keepAsking = true;
        this.askOnRepeat(options, callback);
    }

    stopListening(){
        this._keepAsking = false;
    }

    private async askOnRepeat(options: any, callback: Function){
        let answer = await this.ask(options);
        if(callback){
            await callback(answer);
        }
        if(this._keepAsking){
            this.askOnRepeat(options, callback);
        }
    }

    async ask(options: any){
        let answer = await inquirer.prompt(options);
        return answer;
    }
}
