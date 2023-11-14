// import SarangLogo from '@/app/ui/sarang-logo';
import LoginForm from '@/app/ui/login-form';
import Link from "next/link";
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
        <div className='flex justify-end'>
          <p>아이디/비밀번호 찾기</p>
        </div>
        <div>
          <Link href = "/signup" className='flex justify-center'>
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
}