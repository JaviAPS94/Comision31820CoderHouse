import { Application, config } from "../deps.ts";

import { router } from "./routes/index.ts";

const { PORT } = config();

const app = new Application();

app.use(router.routes());

await app.listen({ port: Number(PORT) });