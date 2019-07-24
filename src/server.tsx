import Koa from "koa";
import Router from "koa-router";
import Static from "koa-static";
import React from "react";
import { renderToString } from "react-dom/server";
import { renderFullPage } from "./render"
import App from "./App";

const app = new Koa();
const router = new Router();

const preloadedState = [ "foo", "bar", "qaz" ]

app.use(async (ctx: Koa.Context, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
});

const getIndex = async (ctx: Koa.Context) => {
  let jsx = renderToString(<App />);
  let page = renderFullPage("hello-koa", jsx, JSON.stringify(preloadedState));
  ctx.body = page
}

router.get("/", getIndex)

app.use(Static(__dirname + "/static"))
app.use(router.routes())

console.log("dirname:", __dirname);
app.listen(8080);
