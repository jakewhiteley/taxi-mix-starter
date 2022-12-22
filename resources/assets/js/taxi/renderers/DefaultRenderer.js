import { Renderer } from '@unseenco/taxi'

export default class DefaultRenderer extends Renderer {
	onEnter() {
		console.log('on enter')
	}

	onEnterCompleted() {
		console.log('on enter completed')
	}

	onLeave() {
		console.log('on leave')
	}

	onLeaveCompleted() {
		console.log('on leave completed')
	}
}
