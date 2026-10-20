import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: "**/*.svg",
            svgrOptions: {exportType: "named", namedExport: "ReactComponent"},
        }),
    ],
    server: {port: 3000},
    preview: {port: 4173},
    test: {
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
        globals: true,
    },
})
