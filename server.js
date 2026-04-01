import { createServer } from "node:http";
import { createExpressApplication } from "./src/express.js";
import "dotenv/config";
import { connectDB } from "./src/config/db.js";

async function main() {
  try {
    await connectDB();

    const server = createServer(createExpressApplication());
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

main();
