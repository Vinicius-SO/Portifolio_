import { ReactNode } from 'react';
// import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  children?: ReactNode;
}

export default function outlineButton({ children }: Props) {

  return (
    <Button className='text-brandBlue text-base border-2 border-brandBlue bg-brandBlue/0 hover:bg-brandBlue/10 hover:text-accent-brandBlue font-normal'>
      {children}
    </Button>
  );
}
