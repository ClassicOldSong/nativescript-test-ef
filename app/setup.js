import { DatePickerField, TimePickerField, DateTimePickerFields } from '@nativescript/datetimepicker'
import { CollectionView } from '@nativescript-community/ui-collectionview'
import { RadListView } from 'nativescript-ui-listview'
import { CheckBox } from '@nstudio/nativescript-checkbox'
import { Fab } from '@nstudio/nativescript-floatingactionbutton'

import { registerElement, makeText, makeGridLayout, makeListView, domImpl } from 'dominative'
import { setDOMImpl } from 'ef-core'

setDOMImpl(domImpl)

registerElement('DatePickerField', makeText(DatePickerField))
registerElement('TimePickerField', makeText(TimePickerField))
registerElement('DateTimePickerFields', makeGridLayout(DateTimePickerFields))
registerElement('CollectionView', makeListView(CollectionView, {force: true}))
registerElement('RadListView', makeListView(RadListView, {force: true}))
registerElement('CheckBox', CheckBox)
registerElement('Fab', Fab)

// global.document = document
global.plugins = {
	DatePickerField,
	TimePickerField,
	DateTimePickerFields,
	CollectionView,
	CheckBox,
	Fab
}