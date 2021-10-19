import { spawn } from 'child_process'
import { projectRoot } from './paths'

export const withTaskName = <T> (name: string, fn: T) => {
	return Object.assign(fn, { displayName: name })
}


export async function run (command: string) {
	return new Promise((resolve, reject) => {
		const [ cmd, ...args ] = command.split(' ')
		const processTask = spawn(cmd, args, {
			cwd: projectRoot,
			stdio: 'inherit',
			shell: true
		})
		processTask.on('close', resolve)
	})
}


export function sleep (ms: number) {
    return new Promise((resolve, reject) => {
			setTimeout(() => {
			  resolve(null)
			}, ms)
    })
}
export function clear (path: string) {
	return run('rm -rf ' + path)
}

