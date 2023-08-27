import { $host } from "./index";

export const fetchGroups = async (groupsId: string[]) => {
    const { data } = await $host.get('api/group/', { params: { groupsId: groupsId } });
    return data
}

export const addExpense = async (groupId: string, expenseName: string, expenseType: string, expenseDate: string, expenseAmount: number) => {
    const { data } = await $host.put('api/group/', {
        groupId: groupId,
        expenseName: expenseName,
        expenseType: expenseType,
        expenseDate: expenseDate,
        expenseAmount: expenseAmount
    });
    return data
}

export const fetchExpenses = async (expensesId: string[]) => {
    const { data } = await $host.get('api/expense/', { params: { expensesId: expensesId } });
    return data
}