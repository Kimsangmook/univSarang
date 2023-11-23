// 'use server'

import { signIn, signOut } from "auth"
import { redirect } from "next/navigation"
import { Button } from '@/app/ui/button'
import {authSignOut} from '@/app/lib/actions'

export function SignIn({
  provider,
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        // "use server"
        const url = await signIn(provider, { redirect: false })
        // TODO: fix in next-auth
        redirect(url.replace("signin", "api/auth/signin"))
      }}
    >
      <Button>Sign In</Button>
    </form>
  )
}

export function SignOut() {
  return (
    <form
      action={authSignOut}
      className="w-full"
    >
      <Button>
        Sign Out
      </Button>
    </form>
  )
}