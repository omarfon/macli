import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SpecialtyesModule } from './specialtyes/specialtyes.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PersonaModule } from './maestros/persona/persona.module';
import { EspecialidadesModule } from './maestros/especialidades/especialidades.module';
import { DocumenTypesModule } from './maestros/documen-types/documen-types.module';
import { GendersModule } from './maestros/genders/genders.module';
import { MoneyTypesModule } from './maestros/money-types/money-types.module';
import { PrestacionesModule } from './maestros/prestaciones/prestaciones.module';
import { DoctorsModuleMaster } from './maestros/doctors/doctors.module';
import { PatientsModule } from './maestros/patients/patients.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      username:'postgres',
      password:'123456',
      host:'localhost',
      port:5433,
      database:'clini',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    UserModule, 
    SpecialtyesModule, 
    DoctorsModule, 
    PersonaModule, 
    EspecialidadesModule, 
    DocumenTypesModule, 
    GendersModule, 
    MoneyTypesModule, 
    PrestacionesModule, 
    PatientsModule,
    DoctorsModuleMaster],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
