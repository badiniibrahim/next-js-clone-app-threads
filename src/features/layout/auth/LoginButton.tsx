"use client"

import React, {useTransition} from 'react'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import {signIn} from 'next-auth/react'
import { Loader } from '@/components/ui/loader'

const LoginButton = () => {
    const [isPending, setTransition] = useTransition();

  return (
    <Button
      onClick={() => {
        setTransition(() => signIn());
      }}
    >
      {isPending ? (
        <Loader className="mr-2 h-4 w-4" />
      ) : (
        <LogIn className="mr-2 h-4 w-4" />
      )}
      Login
    </Button>
  );
}

export default LoginButton