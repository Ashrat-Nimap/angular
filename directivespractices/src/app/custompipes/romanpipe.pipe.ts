import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'romanpipe',
    standalone : true
})
export class romanpipe implements PipeTransform{
    result = 0;
    roman : any = { 
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    transform(value: any) {
        for(let i = 0; i < value.length;i++){
            let current = this.roman[value[i]];
            let next = this.roman[value[i + 1]];

            if(next > current){
                this.result += next - current
                i++;
            }else{
                this.result += current
            }
        }
        return this.result
    }

}