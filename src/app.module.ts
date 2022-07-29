import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, PostService],
})
export class AppModule { }
