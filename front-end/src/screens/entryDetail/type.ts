export interface IEntryInfo {
    
        transactionId: number,
        category: {
            categoryId: number,
            title: string,
            value: boolean
        },
        amount: number,
        description: string,
        date: string
    
}