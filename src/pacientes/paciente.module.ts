import { Module } from "@nestjs/common";
import { PacienteController } from "./paciente.controller";
import { PacienteService } from "./paciente.service";
import { Paciente } from "./paciente.interface";


@Module({imports: [],
    controllers: [PacienteController],
    providers: [PacienteService],
})

export class PacienteModule {}