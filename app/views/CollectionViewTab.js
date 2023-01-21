import Tab from './CollectionViewTab.eft'
import Item from './CollectionViewItem.eft'

const CollectionViewTab = class extends Tab {
	constructor(...args) {
		super(...args)

		this.$methods.createCollectionItem = ({event}) => {
			const item = new Item()
			event.view = item.$refs.root
			event.view.__efModel = item
		}

		this.$methods.loadCollectionItem = ({event}) => {
			const { view, item } = event
			const _item = view.__efModel

			_item.$data.item = item
		}
	}
}

export default CollectionViewTab