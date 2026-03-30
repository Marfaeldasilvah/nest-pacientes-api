import { Injectable, NotFoundException } from "@nestjs/common";
import { Paciente } from "./paciente.interface";

@Injectable()

export class PacienteService {
 private readonly pacienteList: Paciente[] = []; //PacienteList, Armazenar pacientes (é o banco de dados temporario não pode ser alterado depois de escrito)


create(valor: Paciente) { 
    this.pacienteList.push(valor); //cadastrar paciente
} 

findAll(): Paciente[] { 
    return this.pacienteList; }//lista pacientes

findByCpf(cpf: string): Paciente {
    const paciente = this.pacienteList.find(paciente => paciente.cpf === cpf);
    
    if (!paciente) {
        throw new NotFoundException('Paciente não encontrado'); //filtrar pacientes
    }

    return paciente;
    
    } 
} //Paciente é O json com os valores do paciente