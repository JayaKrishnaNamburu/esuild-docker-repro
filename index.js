import express from 'express'
import { transformSync } from 'esbuild'

const app = express()

app.get('/', (req, res) => {
    /* Simple transform operation */
    const result = transformSync('export const a = 1000', { format: 'esm', target: 'es6'})
    res.header('ContentType', 'application/javascript').send(result.code)
})

app.listen(3000, () => {
    console.log('server running at 3000')
})