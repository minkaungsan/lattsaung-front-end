import React from 'react'
import { connect, subscription } from 'slim-redux-react'
import { Wrapper, Sort, Filter, Count } from './style'
import {sortChange, filterChange} from '../../changeTriggers/sortFilterChangeTriggers'
import Select from 'react-select'

const sort = subscription('state.sort')
const filter = subscription('state.filter')
const search = subscription('state.search')

const SortFilter = ({sort, filter, sortChange, filterChange, search}) => (
  <Wrapper>
    <Count>{search.searched ? search.events.length + ' events found.' : ''}</Count>
    <Sort>
      <i className="fa fa-sort"></i>
      <Select
        name="sort"
        value={sort}
        searchable={false}
        clearable={false}
        options={[
          {value: 'all', label: 'All'},
          {value: 'popular', label: 'Popular'},
          {value: 'start', label: 'Start Date'},
          {value: 'end', label: 'End Date'}
        ]}
        onChange={e => sortChange(e.value)}
      />
    </Sort>
    <Filter>
      <i className="fa fa-filter"></i>
      <Select
        name="filter"
        value={filter}
        searchable={false}
        clearable={false}
        options={[
          {value: 'none', label: 'None'},
          {value: 'ongoing', label: 'Ongoing'},
          {value: 'upcoming', label: 'Upcoming'},
          {value: 'finished', label: 'Finished'}
        ]}
        onChange={e => filterChange(e.value)}
      />
    </Filter>
  </Wrapper>
)

export default connect(SortFilter, { sort, filter, sortChange, filterChange, search })