import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import biome from "vite-plugin-biome";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), biome()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
