import Koa from "koa";
const app = new Koa();
import router from "./api/index.js";

app.use(router.routes());

app.listen(3000);
