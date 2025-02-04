'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAppDispatch } from '@/libs/hooks';
import { addTransaction } from '@/libs/store/transactionsSlice';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { ToastContainer, toast } from 'react-toastify';

const formSchema = z.object({
  senderName: z.string().min(2, 'Sender name must be at least 2 characters'),
  receiverName: z.string().min(2, 'Receiver name must be at least 2 characters'),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Amount must be a positive number',
  }),
  status: z.enum(['Pending', 'Completed', 'Failed']),
  description: z.string().optional(),
});



export function TransactionForm(){
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: '',
      receiverName: '',
      amount: '',
      status: 'Pending',
      description: '',
    },
  });

  const notify = () => toast("Transaction created successfully");

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(
      addTransaction({
        senderName: values.senderName,
        receiverName: values.receiverName,
        amount: Number(values.amount),
        status: values.status,
        description: values.description,
      })
    );
    notify()
    reset();
   
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border border-yellow p-3">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-black">Sender Name</label>
          <input
            {...register('senderName')}
            className="w-full rounded-md border border-input px-3 py-2 text-sm bg-white dark:bg-black dark:text-white text-black"
            placeholder="John Doe"
          />
          {errors.senderName && (
            <p className="text-sm text-red-500 mt-1">{errors.senderName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-black">Receiver Name</label>
          <input
            {...register('receiverName')}
            className="w-full rounded-md border border-input px-3 py-2 text-sm bg-white dark:bg-black dark:text-white text-black"
            placeholder="Jane Smith"
          />
          {errors.receiverName && (
            <p className="text-sm text-red-500 mt-1">{errors.receiverName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-black">Amount</label>
          <input
            {...register('amount')}
            type="number"
            step="0.01"
            className="w-full rounded-md border border-input px-3 py-2 text-sm bg-white dark:bg-black dark:text-white text-black"
            placeholder="100"
          />
          {errors.amount && (
            <p className="text-sm text-red-500 mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-black">Status</label>
          <Select
            {...register('status')}
            options={[
              { value: 'Pending', label: 'Pending' },
              { value: 'Completed', label: 'Completed' },
              { value: 'Failed', label: 'Failed' },
            ]}
            className='bg-white dark:bg-black dark:text-white text-black'
          />
          {errors.status && (
            <p className="text-sm text-red-500 mt-1">{errors.status.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register('description')}
            className="w-full rounded-md border border-input px-3 py-2 text-sm min-h-[100px] bg-white dark:bg-black dark:text-white text-black"
            placeholder="Transaction description"
          />
        </div>

        <Button type="submit" className="w-full bg-yellow">
          Create Transaction
        </Button>
      </form>
    </>
   
  );
}