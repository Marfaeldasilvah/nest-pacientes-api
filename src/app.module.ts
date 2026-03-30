import { Module } from '@nestjs/common';
import { PacienteController } from './pacientes/paciente.controller';
import { PacienteService } from './pacientes/paciente.service';
import { PacienteModule } from './pacientes/paciente.module';


@Module({
  imports: [PacienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
