namespace hospital{
    export class Hospital{
        private nome:string;
        private enfermeiros:Array<Enfermeiro> = [];
        private paciente: Array<Paciente> = [];
        private medicos: Array<Medico> = [];

        getNome():string{
            return this.nome;
        }

        addEnfermeiros(enfermeiros:Enfermeiro):void{
            this.enfermeiros.push(enfermeiros);
        }

        getEnfermeiros():string{
            return this.enfermeiros;
        }

        setAtividade(atividade:string):void{
            this.atividade = atividade;
        }

         getCidade():string{
            return this.cidade;
        }

        setCidade(cidade:string):void{
            this.cidade = cidade;
        }

        addCliente(cliente:Cliente):void{
            this.clientes.push(cliente);
        }

        addFuncionario(funcionario:Funcionario):void{
            this.funcionarios.push(funcionario);
        }

        getCliente(){
            return this.clientes;
        }

        getFuncionario(){
            return this.funcionarios;
        }

    }
}