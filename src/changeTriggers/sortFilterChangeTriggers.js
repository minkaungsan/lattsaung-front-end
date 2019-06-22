import { changeTrigger } from 'slim-redux-react'

export const sortChange = changeTrigger('SORT_CHANGE', (data, sort) => data, 'state.sort')

export const filterChange = changeTrigger('FILTER_CHANGE', (data, filter) => data, 'state.filter')