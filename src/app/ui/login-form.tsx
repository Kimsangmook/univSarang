'use client';
 
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
 
export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 text-tc-default-900">
        <h1>
          로그인
        </h1>
        <div className="w-full">
          <div>
            {/* <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              아이디
            </label> */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[12px] px-[17px] text-sm outline-2 placeholder:text-tc-input-500"
                id="Username"
                type="Username"
                name="username"
                placeholder="아이디"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            {/* <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              비밀번호
            </label> */}
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[12px] px-[17px] text-sm outline-2 placeholder:text-tc-input-500"
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호"
                required
                
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
        </div>
      </div>
    </form>
  );
}
 
function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button className="mt-4 w-full bg-button-default" aria-disabled={pending}>
      Log In
    </Button>
  );
}