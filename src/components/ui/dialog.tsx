// 'use client';

// import { cn } from '@/libs/utils';
// import { X } from 'lucide-react';
// import { useEffect, useRef } from 'react';
// import { createPortal } from 'react-dom';

// interface DialogProps {
//   open: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
//   className?: string;
// }

// export function Dialog({ open, onClose, children, className }: DialogProps) {
//   // const dialogRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };

//     if (open) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [open, onClose]);

//   if (!open) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
//       <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
//         <button
//           className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
//           onClick={onClose}
//         >
//           <X className="h-4 w-4" />
//           <span className="sr-only">Close</span>
//         </button>
//         <div className={cn('', className)}>{children}</div>
//       </div>
//     </div>,
//     document.body
//   );
// }

// export function DialogHeader({ children }: { children: React.ReactNode }) {
//   return <div className="flex flex-col space-y-1.5 text-center sm:text-left">{children}</div>;
// }

// export function DialogTitle({ children }: { children: React.ReactNode }) {
//   return <h2 className="text-lg font-semibold leading-none tracking-tight">{children}</h2>;
// }