import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
const BASE_SITE_URL = process.env.VITE_BASE_SITE_URL || "/"
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {}
    },
    base: BASE_SITE_URL,
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
            babel: {
                presets: ["@emotion/babel-preset-css-prop"],
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: "@/",
                replacement: `${resolve(__dirname, "src")}/`,
            },
        ],
    },
})
