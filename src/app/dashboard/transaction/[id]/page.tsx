'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/libs/hooks';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';


const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const transaction = useAppSelector((state) =>
    state.transactions.transactions.find((t) => t.id === params.id)
  );
  if (!transaction) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Transaction not found</h1>
      </div>
    );
  }
  return (
    <div className="dark:bg-white dark:text-black">
      <div className="">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.push('/dashboard')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="bg-card rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Transaction Details</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-muted-foreground">Transaction ID</h3>
                <p className="text-lg">{transaction.id}</p>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Status</h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : transaction.status === 'Failed'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}
                >
                  {transaction.status}
                </span>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Sender</h3>
                <p className="text-lg">{transaction.senderName}</p>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Receiver</h3>
                <p className="text-lg">{transaction.receiverName}</p>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Amount</h3>
                <p className="text-lg">${transaction.amount.toFixed(2)}</p>
              </div>
              <div>
                <h3 className="font-medium text-muted-foreground">Date</h3>
                <p className="text-lg">
                  {new Date(transaction.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="col-span-2">
                <h3 className="font-medium text-muted-foreground">Description</h3>
                <p className="text-lg">{transaction.description || 'No description'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page