//SETTEXTFILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//SORTBYDATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//SORTBYAMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SETSTARTDATE
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

//SETENDDATE
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})