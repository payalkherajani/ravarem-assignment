// features/filters/filterSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type StatusFilter = 'all' | 'active' | 'inactive'
export type SortOption =
  | 'name_asc'
  | 'name_desc'
  | 'price_asc'
  | 'price_desc'

interface FilterState {
  search: string
  status: StatusFilter
  sortBy: SortOption
}

const initialState: FilterState = {
  search: '',
  status: 'all',
  sortBy: 'name_asc',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    setStatus(state, action: PayloadAction<StatusFilter>) {
      state.status = action.payload
    },
    setSortBy(state, action: PayloadAction<SortOption>) {
      state.sortBy = action.payload
    },
    resetFilters() {
      return initialState
    },
  },
})

export const { setSearch, setStatus, setSortBy, resetFilters } =
  filterSlice.actions

export default filterSlice.reducer
