namespace hospital{
   export class Paciente extends Pessoa{
       
       private codPassiente: number|undefined;

    
       getCodPassiente():number|undefined{
           return this.codPassiente;
       }

       setCodPassiente(codPassiente:number):void{
           this.codPassiente = codPassiente;
       }

       
   }
}