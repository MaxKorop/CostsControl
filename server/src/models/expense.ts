export interface IExpense {
    amount: number;
    date: Date;
    category: string;
    expenseType: string;
    note?: string;
}