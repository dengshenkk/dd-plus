import { dest, series, src } from 'gulp'
import { run, withTaskName } from './utils'


export default series(
	withTaskName('clean', async () => run('rm -rf ./dist')),
	withTaskName('buildPackage', async () =>run('pnpm run --filter ./packages --parallel build'))
)


