import uuid from 'uuid';

//ADD EXPENSE
export const addExpense = (
    { description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE EXPENSE(action generator)
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

})
//EDIT EXPENSE(action generator)
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

})