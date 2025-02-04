'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/libs/hooks';
import { setFilteredStatus, type TransactionStatus } from '@/libs/store/transactionsSlice';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
// import { Dialog, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';



export default function DashboardPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const [open, setOpen] = useState(false);
  const { transactions, filteredStatus } = useAppSelector((state) => state.transactions);

  const filteredTransactions = transactions.filter(
    (transaction) => filteredStatus === 'All' || transaction.status === filteredStatus
  );

  const handleStatusChange = (status: TransactionStatus | 'All') => {
    dispatch(setFilteredStatus(status));
  };

  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <div className="flex justify-between items-center mb-6 px-6 py-6">
          <div>
            <h1 className="text-3xl font-bold text-primary  ">P2P Transactions</h1>
            <p className="text-muted-foreground mt-4">Manage and track your transactions</p>
          </div>
          <div className="flex items-center gap-4 border border-white dark:border-black ">
            <Button onClick={() => router.push('/dashboard/addTransaction')}>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Transaction
            </Button>
          </div>
        </div>


        <div className='px-6'>
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center border-white dark:border-black ">
                <div className='flex flex-col space-y-3'>
                  <CardTitle>Transactions</CardTitle>
                  <CardDescription>A list of all your P2P transactions</CardDescription>
                </div>
                <Select
                  value={filteredStatus}
                  onChange={(e) => handleStatusChange(e.target.value as TransactionStatus | 'All')}
                  options={[
                    { value: 'All', label: 'All' },
                    { value: 'Pending', label: 'Pending' },
                    { value: 'Completed', label: 'Completed' },
                    { value: 'Failed', label: 'Failed' },
                  ]}

                />
              </div>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Sender</TableHead>
                    <TableHead>Receiver</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow
                      key={transaction.id}
                      className="cursor-pointer hover:bg-muted/50 border-white dark:border-black "
                      onClick={() => router.push(`dashboard/transaction/${transaction.id}`)}
                    >
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.senderName}</TableCell>
                      <TableCell>{transaction.receiverName}</TableCell>
                      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaction.status === 'Completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : transaction.status === 'Failed'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-[#fedf1971] text-yellow-800 dark:bg-yellow dark:text-yellow-200'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </TableCell>
                      <TableCell>{new Date(transaction.timestamp).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

       
      </div>

      {/* <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Create New Transaction</DialogTitle>
          </DialogHeader>
          <TransactionForm />
        </Dialog> */}
    </>
    
  );
}