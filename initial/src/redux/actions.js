export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING"
  }
}

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters
  }
}

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR"
  }
}

export const activeFilterChanged = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter
  }
}
