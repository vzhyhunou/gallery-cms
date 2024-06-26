import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

const config = {
    plugins: [react(), eslint()],
    server: {
        port: 3012
    },
    define: {
        'process.env': process.env
    },
    build: {
        outDir: process.env.BUILD_PATH
    },
    base: process.env.REACT_APP_BASE,
    /* https://github.com/orgs/react-hook-form/discussions/3894
    ... useForm has been imported from react-hook-form/dist/index.cjs.js otherwise
    useFormContext has been imported from react-hook-form/dist/index.esm.mjs */
    resolve: {
        alias: {
            'react-hook-form': require.resolve('react-hook-form')
        }
    }
};

const srcConfig = {
    fake: config
};

export default defineConfig(srcConfig[process.env.REACT_APP_SRC]);