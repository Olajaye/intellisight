'use client';

import { Moon, Sun } from 'lucide-react';

import useTheme from '../hooks/useTheme';

export const ThemeToggle = () => {
  const {  toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
    >
      {/* {theme === 'light' ? 'Dark Mode' : 'Light Mode'} */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {/* <span className="sr-only">Toggle theme</span> */}
    </button>
  );
};

// import { useTheme } from 'next-themes';
// import { Button } from '@/components/ui/button';

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       variant="ghost"
//       size="lg"
//       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//     >
//       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }
// components/ThemeToggle.js



