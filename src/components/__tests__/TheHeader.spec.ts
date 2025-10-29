import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

import TheHeader from '../header/TheHeader.vue'

class IntersectionObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}

const mountHeader = () => {
	const i18n = createI18n({
		legacy: false,
		locale: 'en',
		messages: {
			en: {
				header: {
					about: 'About',
					skills: 'Skills',
					activities: 'Activities',
					contact: 'Contact'
				}
			}
		}
	})

	return mount(TheHeader, {
		attachTo: document.body,
		global: {
			plugins: [i18n],
			stubs: {
				DarkModeToggle: {
					template: '<div data-test="dark-mode-toggle" />'
				},
				LanguageSwitcher: {
					template: '<div data-test="language-switcher" />'
				},
				ScrollIndicator: {
					template: '<div data-test="scroll-indicator" />'
				}
			}
		}
	})
}

describe('TheHeader', () => {
	beforeEach(() => {
		vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
	})

	afterEach(() => {
		vi.unstubAllGlobals()
	})

	it('renders the expected navigation links with translations', () => {
		const wrapper = mountHeader()

		const links = wrapper.findAll('nav a')

		expect(links).toHaveLength(4)
		expect(links.map((link) => link.text())).toEqual([
			'About',
			'Skills',
			'Activities',
			'Contact'
		])

		wrapper.unmount()
	})
})
