import {defineConfig} from 'vitest/config'

export default defineConfig ({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/setupText.ts'],
        coverage: {
            exclude: [
                '**/*.config.ts',
                '**/*.config.js',
                '**/*.test.ts',
                '**/*.d.ts',
                '**/types'
            ]
        }

    }
})