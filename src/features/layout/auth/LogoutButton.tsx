"use client"

import React, {useTransition} from 'react'
import { LogOut } from 'lucide-react'
import {signOut} from 'next-auth/react'
import { Loader } from '@/components/ui/loader'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const LogoutButton = () => {
    const [isPending, setTransition] = useTransition();

  return (
    <DropdownMenuItem
      onClick={() => {
        setTransition(() => signOut());
      }}
    >
      {isPending ? (
        <Loader className="mr-2 h-4 w-4" />
      ) : (
        <LogOut className="mr-2 h-4 w-4" />
      )}
      Logout
    </DropdownMenuItem>
  );
}

export default LogoutButton