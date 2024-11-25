'use client'

import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Field, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input } from '@/components/input'
import { Link } from '@/components/link'
import { useRouter } from 'next/navigation'
import { useActionState } from 'react'
import { signIn } from './actions'

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(signIn, null)
  const router = useRouter()

  // useEffect(() => {
  //   if (state?.success) {
  //     router.push('/')
  //   }
  // }, [state])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg"
            className="mx-auto h-10 w-auto"
          />
          <Heading level={2} className="mt-6 text-center">
            Connectez-vous à votre compte
          </Heading>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form action={formAction} className="space-y-4">
              <Field>
                <Label>E-mail</Label>
                <Input id="email" name="email" type="email" autoFocus autoComplete="email" required />
              </Field>
              <Field>
                <Label>Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoFocus
                  autoComplete="current-password"
                  required
                />
              </Field>
              <div className="flex items-center justify-between">
                <CheckboxField className="flex items-center">
                  <Checkbox id="remember-me" name="remember-me" />
                  <Label>Remember me</Label>
                </CheckboxField>

                <div className="text-sm/6">
                  <Link href="#" className="font-semibold">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Sign in {isPending && 'loading'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
