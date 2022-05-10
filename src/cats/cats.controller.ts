import { Controller, Get, Header, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get() // 请求方法装饰器
  /**
   * 告诉Nest为请求创建处理程序,get/post方法和路由路径
   */
  // redirect:重定向
  @Redirect('www.baidu.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  text(): string {
    return 'this is test 通配符';
  }

  @Post()
  @Header('test', 'none')
  create(): string {
    return 'This action adds a new cat';
  }
}
