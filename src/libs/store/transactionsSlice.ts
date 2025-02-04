import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TransactionStatus = 'Pending' | 'Completed' | 'Failed';

export interface Transaction {
  id: string;
  senderName: string;
  receiverName: string;
  amount: number;
  status: TransactionStatus;
  timestamp: string;
  description?: string;
}

interface TransactionsState {
  transactions: Transaction[];
  filteredStatus: TransactionStatus | 'All';
}

const initialState: TransactionsState = {
  transactions: [
    {
      id: '7658787837344',
      senderName: 'John Doe',
      receiverName: 'Jane Smith',
      amount: 500,
      status: 'Completed',
      timestamp: '2024-03-20T10:30:00Z',
      description: 'Rent payment'
    },
    {
      id: '8928298488434',
      senderName: 'Alice Johnson',
      receiverName: 'Bob Wilson',
      amount: 250,
      status: 'Pending',
      timestamp: '2024-03-20T11:15:00Z',
      description: 'Dinner split'
    },
    {
      id: '8374849383778',
      senderName: 'Sarah Brown',
      receiverName: 'Mike Davis',
      amount: 1000,
      status: 'Failed',
      timestamp: '2024-03-20T09:45:00Z',
      description: 'Car repair'
    }
  ],
  filteredStatus: 'All'
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Omit<Transaction, 'id' | 'timestamp'>>) => {
      const newTransaction: Transaction = {
        ...action.payload,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      };
      state.transactions.push(newTransaction);
    },
    setFilteredStatus: (state, action: PayloadAction<TransactionStatus | 'All'>) => {
      state.filteredStatus = action.payload;
    }
  }
});

export const { addTransaction, setFilteredStatus } = transactionsSlice.actions;
export default transactionsSlice.reducer;