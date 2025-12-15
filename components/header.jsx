"use client";

import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';

const header = () => {
  const {isLoading} = useStoreUser();

  return (
    <header className='fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 support-[backdrop-filter]:bg-white/60 '>

      <nav>
       <SignedOut>
              <SignInButton />
              <br />
              <SignUpButton/>
            </SignedOut>
            
            <SignedIn>
              <UserButton />
            </SignedIn>
       </nav>     

       {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}

    </header>
  )
}

export default header