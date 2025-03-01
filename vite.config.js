import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// const base = "/manzelia/";
const pages = ["index"];

const fallbackPlugin = () => ({
    name: "fallback-plugin",
    apply: "serve",
    configureServer: (server) => {
        for (const page of pages) {
            server.middlewares.use(page, (req, res, next) => {
                if (!req.url?.endsWith(".html")) req.url += ".html";
                next();
            });
        }
    }
});

const getInput = () => {
    const input = {};

    for (const page of pages) {
        input[page] = fileURLToPath(new URL(`./${page}.html`, import.meta.url));
    }

    return input;
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), fallbackPlugin()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    // base,
    build: {
        rollupOptions: {
            input: getInput()
        },
    },
});
