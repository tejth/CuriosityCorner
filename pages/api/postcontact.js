import * as fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const contactDataDir = path.join(process.cwd(), "contactdata");

      // Ensure the directory exists
      if (!fs.existsSync(contactDataDir)) {
        fs.mkdirSync(contactDataDir);
      }

      // Read the existing files in the directory
      const data = await fs.promises.readdir(contactDataDir);

      // Generate a new file name
      const newFileName = path.join(contactDataDir, `${data.length + 1}.json`);

      // Write the new file
      await fs.promises.writeFile(newFileName, JSON.stringify(req.body));

      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error handling POST request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // Handle other HTTP methods
  }
}
