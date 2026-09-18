import { defineConfig } from "vite"
import fs from "node:fs"

export default defineConfig({
  plugins: [
    {
      name: "copy-images",
      closeBundle() {
        if (fs.existsSync("images")) {
          fs.cpSync("images", "dist/images", { recursive: true })
        }
      }
    }
  ]
})