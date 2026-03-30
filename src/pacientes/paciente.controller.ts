import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { PacienteService } from "./paciente.service";
import type { Paciente } from "./paciente.interface";



@Controller('paciente')
export class PacienteController {

    constructor(private readonly pacienteService: PacienteService) {}

    @Post()

    create(@Body() valor: Paciente) {
        this.pacienteService.create(valor);
    return { message: "O valor foi adicionado com sucesso"}
    }

    @Get()
    findAll() {
        return this.pacienteService.findAll();
    }


    @Get(':cpf') //O ':' indica que 'cpf' é um parâmetro dinâmico
    findByCpf(@Param('cpf') cpf: string) {
        return this.pacienteService.findByCpf(cpf);
    }
}