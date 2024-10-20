import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// eslint-disable-next-line no-unused-vars
const {REACT_APP_SRC, REACT_APP_BASE, ...rest} = process.env;

const config = {
    plugins: [react(), eslint()],
    server: {
        port: 3012
    },
    define: {
        'process.env': {
            REACT_APP_SRC,
            REACT_APP_BASE
        }
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
            'react-hook-form': require.resolve('react-hook-form'),
            '@tanstack/react-query': require.resolve('@tanstack/react-query')
        }
    }
};

const srcConfig = {
    fake: config
};

export default defineConfig(srcConfig[process.env.REACT_APP_SRC]);