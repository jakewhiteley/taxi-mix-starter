import { Core } from '@unseenco/taxi'

import DefaultRenderer from "./renderers/DefaultRenderer"
import DefaultTransition from "./transitions/DefaultTransition"

export default class Taxi extends Core {
	constructor() {
		super({
			renderers: {
				default: DefaultRenderer
			},
			transitions: {
				default: DefaultTransition
			}
		})

		this.on('NAVIGATE_IN', this.onNavigateIn)
		this.on('NAVIGATE_END', this.onNavigateEnd)
	}

	onNavigateIn({ to }) {
		// Update body classes
		if (to) {
			document.body.className = to.page.body.className
		}
	}

	onNavigateEnd({ from, to }) {
		// Analytics
		// if (typeof window.gtag !== 'undefined') {
		//   window.gtag('config', 'UA-49120579-1', {
		//     'page_path': window.location.pathname,
		//     'page_title': to.title,
		//     'page_location': window.location.href
		//   });
		// }
	}
}
