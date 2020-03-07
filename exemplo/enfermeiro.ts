namespace hospital{
    export class Enfermeiro extends Funcionario{
        private core: number;
        

        getCore(): number{
            return this.core;
        }

        setCodFuncionario(core:number): void{
            this.core = core;
        }

        
            
        
    }
}