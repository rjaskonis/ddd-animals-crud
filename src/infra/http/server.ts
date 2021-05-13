import moduleAlias from "module-alias";

if (process.env.NODE_ENV !== "development") moduleAlias();

import app from "@/infra/http/app";

const PORT = app.get("PORT");

app.listen(PORT, () => console.log(`*Server listening on port ${PORT}*`));
