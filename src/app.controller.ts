import { Controller, Get } from "@nestjs/common"


@Controller("/app")
export class AppController {

  @Get("/asdk")
  getRootRouter(){
    return "Hello World"
  }

  @Get("/bye")
  getByeRouter(){
    return "Bye!!"
  }
}

