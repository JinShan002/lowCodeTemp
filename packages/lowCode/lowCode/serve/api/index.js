import { writeFileSync } from "node:fs";
import Router from "koa-router";

const router = new Router();

router
  .get("/api/", (ctx, next) => {
    ctx.body = "Hlo World";
  })
  .get("/api/test", (ctx, next) => {
    writeFileSync("./test.txt", "11112222");

    ctx.body = {
      success: true,
    };
  });

export default router;
