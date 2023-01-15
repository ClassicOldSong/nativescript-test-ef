// Register plugins
import './setup.js'

import * as NSCore from '@nativescript/core'
// eslint-disable-next-line no-duplicate-imports
import { Application, ObservableArray } from '@nativescript/core'
import { android } from '@nativescript/core/application'
import { isAndroid, isIOS } from '@nativescript/core/platform'

import { document } from 'dominative'

import App from './app.eft'
import Label from './label.eft'
import BarItem from './baritem.eft'

const create = () => {
	const app = new App({
		$data: {
			items: new ObservableArray([{}, {}, {}]),
			templateListItems: new ObservableArray([{text: 'wow'}, {text: 'this'}, {text: 'is'}, {text: 'great'}]),
			collectionViewItems: new ObservableArray([
				{ index: 0, name: 'TURQUOISE', color: '#1abc9c' },
				{ index: 1, name: 'EMERALD', color: '#2ecc71' },
				{ index: 2, name: 'PETER RIVER', color: '#3498db' },
				{ index: 3, name: 'AMETHYST', color: '#9b59b6' },
				{ index: 4, name: 'WET ASPHALT', color: '#34495e' },
				{ index: 5, name: 'GREEN SEA', color: '#16a085' },
				{ index: 6, name: 'NEPHRITIS', color: '#27ae60' },
				{ index: 7, name: 'BELIZE HOLE', color: '#2980b9' },
				{ index: 8, name: 'WISTERIA', color: '#8e44ad' },
				{ index: 9, name: 'MIDNIGHT BLUE', color: '#2c3e50' }
			])
		},
		$methods: {
			reset() {
				if (isAndroid) {
					const activity = android.foregroundActivity
					const intent = activity.getIntent()

					activity.finish()
					android.context.startActivity(intent)
				} else if (isIOS) {
					// eslint-disable-next-line no-undef
					exit(0)
				}
			},
			increment({state}) {
				state.$data.count += 1
			},
			addView({state}) {
				const newView = new Label({
					$data: {
						text: state.$data.name
					}
				})

				state.views.push(newView)
			},
			removeView({state}) {
				state.views.pop()
			},
			addBarItem({state}) {
				state.barItems.push(new BarItem({$data: {title: state.$data.name}}))
				state.propedBarItems.push(new BarItem({$data: {title: state.$data.name}}))
				state.$data.sliderMaxValue = state.barItems.length + 2
			},
			removeBarItem({state}) {
				state.barItems.pop()
				state.propedBarItems.pop()
				state.$data.sliderMaxValue = state.barItems.length + 2
			},
			backToA({state}) {
				state.$data.tabSelectedIndex = 0
			},
			gotoB({state}) {
				state.$data.tabSelectedIndex = 1
			},
			addList({state}) {
				state.listItems.push(new Label({$data: {text: state.listItems.length}}))
			},
			removeList({state}) {
				state.listItems.pop()
				// if (state.$refs.listView.lastElementChild) state.$refs.listView.lastElementChild.remove()
			},
			refreshList({state}) {
				state.$refs.listView.refresh()
			},
			addRadList({state}) {
				state.$refs.radListViewTab.radListItems.push(new Label({$data: {text: state.$refs.radListViewTab.radListItems.length}}))
				state.$refs.radListViewTab.$refs.radListView.refresh()
			},
			removeRadList({state}) {
				state.$refs.radListViewTab.radListItems.pop()
				state.$refs.radListViewTab.$refs.radListView.refresh()
			},
			refreshRadList({state}) {
				state.$refs.radListViewTab.$refs.radListView.refresh()
			},
			addKeyedTemplateList({state}) {
				state.$data.items.push({})
			},
			removeKeyedTemplateList({state}) {
				state.$data.items.pop()
			},
			refreshKeyedTemplateList({state}) {
				state.$refs.keyedTemplateListView.refresh()
			},
			addTemplateList({state, value}) {
				state.$data.templateListItems.push({text: value})
			},
			removeTemplateList({state}) {
				state.$data.templateListItems.pop()
			},
			refreshTemplateList({state}) {
				state.$refs.templateListView.refresh()
			},
			createListItem({ event }) {
				const label = new Label()
				event.view = label.$refs.root
				event.view.__efModel = label
			},
			loadListItem({ event }) {
				const { view, index, item } = event
				const label = view.__efModel

				label.$data.text = `${index}, ${
					item.text
				}, some random number: ${Math.round(Math.random() * 20)}`
			},
			addCollectionView({state}) {
				state.$data.collectionViewItems.push({ index: state.$data.collectionViewItems.length, name: 'TURQUOISE', color: '#1abc9c' })
			},
			removeCollectionView({state}) {
				state.$data.collectionViewItems.pop()
			},
			refreshCollectionView({state}) {
				state.$refs.collectionViewTab.$refs.CollectionView.refresh()
			}
		}
	})

	setInterval(() => {
		app.$data.currentTime = (new Date()).toLocaleTimeString()
	}, 1000)

	global.app = app

	document.body.actionBarHidden = false

	app.$mount({target: document.body})

	return document
}

const rootView = create()

Application.run({
	create: () => rootView
		// //
		// // return frame
		//
		// return create()
		//
		//
		//

		// const frame = document.createElement('Frame')

		// const page2 = document.createElement('Page')
		// const stackLayout2 = document.createElement('StackLayout')
		// const button2 = document.createElement('Button')
		// button2.text = 'back'
		// button2.addEventListener('tap', () => {
		// 	if (frame.canGoBack()) frame.goBack()
		// })
		// stackLayout2.appendChild(button2)
		// page2.appendChild(stackLayout2)

		// const page = document.createElement('Page')
		// const stackLayout = document.createElement('StackLayout')
		// const button = document.createElement('Button')
		// button.text = 'navigate'
		// button.addEventListener('tap', () => {
		// 	frame.navigate({create: () => page2})
		// })
		// stackLayout.appendChild(button)
		// page.appendChild(stackLayout)

		// frame.appendChild(page)

		// return frame
})

global.NSCore = NSCore
global.document = document
