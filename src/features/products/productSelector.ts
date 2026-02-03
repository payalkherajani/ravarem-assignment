// features/products/productSelectors.ts
import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

const selectProducts = (state: RootState) => state.products.list
const selectFilters = (state: RootState) => state.filters

export const selectFilteredProducts = createSelector(
  [selectProducts, selectFilters],
  (products, filters) => {
    let result = [...products]

    // Status filter
    if (filters.status !== 'all') {
      result = result.filter(
        product =>
          product.status.toLowerCase() === filters.status
      )
    }

    // Search (name OR id)
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase()
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.id.toLowerCase().includes(query)
      )
    }

    // Sorting
    switch (filters.sortBy) {
      case 'name_desc':
        result.sort((a, b) =>
          b.name.localeCompare(a.name)
        )
        break

      case 'price_asc':
        result.sort((a, b) => a.price - b.price)
        break

      case 'price_desc':
        result.sort((a, b) => b.price - a.price)
        break

      case 'name_asc':
      default:
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
    }

    return result
  }
)
