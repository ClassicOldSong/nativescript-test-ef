import { DatePickerField, TimePickerField, DateTimePickerFields } from '@nativescript/datetimepicker'
import { CollectionView } from '@nativescript-community/ui-collectionview'
import { Label } from '@nativescript-community/ui-label'
import { RadListView } from 'nativescript-ui-listview'
import { CheckBox } from '@nstudio/nativescript-checkbox'

import { registerElement, makeText, makeGridLayout, makeListView, domImpl } from 'dominative'
import { setDOMImpl } from 'ef-core'

setDOMImpl(domImpl)

registerElement('DatePickerField', makeText(DatePickerField))
registerElement('TimePickerField', makeText(TimePickerField))
registerElement('DateTimePickerFields', makeGridLayout(DateTimePickerFields))
registerElement('CollectionView', makeListView(CollectionView, {force: true}))
registerElement('HTMLLabel', Label)
registerElement('RadListView', makeListView(RadListView, {force: true}))
registerElement('CheckBox', CheckBox)

// global.document = document
global.plugins = {
	DatePickerField,
	TimePickerField,
	DateTimePickerFields,
	CollectionView,
	CheckBox
}