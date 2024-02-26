import Link from 'next/link'
import { SignIn } from '@clerk/nextjs'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { type Metadata } from 'next'
import { Sign } from 'crypto'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href="/register" className="text-cyan-600">
            Sign up
          </Link>{' '}
          for a free trial.
        </>
      }
    >
      <SignIn />
    </AuthLayout>
  )
}
