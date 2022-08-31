import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ResidentsModule } from './residents/residents.module';
import { ProgramsModule } from './programs/programs.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    AuthModule,
    ResidentsModule,
    ProgramsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
