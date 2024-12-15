import {
  Controller,
  Get,
  Req,
  Res,
  HttpCode,
  Param,
  ParseIntPipe,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller('hello')
export class HelloController {
  @Get()
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).json({ message: 'Hello World!' });
  }

  @Get('other')
  @HttpCode(404)
  notFoundPage() {
    return 'not found';
  }

  @Get('bug')
  @HttpCode(500)
  errorPage() {
    return 'Error route';
  }

  @Get('new')
  @HttpCode(201)
  somethingNew() {
    return 'Something new';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    console.log(typeof num);
    return 8 + num;
  }

  @Get('active/:status')
  verifyStatus(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
