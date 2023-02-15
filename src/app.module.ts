import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SpecialtyesModule } from './specialtyes/specialtyes.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [UserModule, SpecialtyesModule, DoctorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
