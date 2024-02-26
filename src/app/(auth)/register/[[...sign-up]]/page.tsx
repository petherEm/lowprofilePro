import Link from 'next/link'
import { SignUp } from '@clerk/nextjs'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Register() {
  return (
    <AuthLayout
      title="Sign up for an account"
      subtitle={
        <>
          Already registered?{' '}
          <Link href="/login" className="text-cyan-600">
            Sign in
          </Link>{' '}
          to your account.
        </>
      }
    >
      <SignUp />
    </AuthLayout>
  )
}
