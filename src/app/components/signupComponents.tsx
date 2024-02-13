// import { Button } from '@/app/ui/button'

export function InputName() {
  return (
    <form>
      <h1>이름</h1>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[12px] px-[17px] text-sm outline-2 placeholder:text-tc-input-500"
        id="name"
        type="text" 
        name="name"
        placeholder="이름"
        required
      />
    </form>
  );
}


export function InputBirthday() {
  return (
    <form>
      <h1>생년월일</h1>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[12px] px-[17px] text-sm outline-2 placeholder:text-tc-input-500"
        id="birthday"
        type="text"
        name="birthday"
        placeholder="생년월일6자리"
        required
      />
    </form>
  );
}

export function InputPhoneNumber() {
  return (
    <form>
      <h1>전화번호</h1>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[12px] px-[17px] text-sm outline-2 placeholder:text-tc-input-500"
        id="birthday"
        type="text"
        name="birthday"
        placeholder="'-'없이 숫자만 입력"
        required
      />
    </form>
  );
}

export function InputId() {
  return (
    <form>
      <h1>아이디</h1>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[12px] px-[17px] text-sm outline-2 placeholder:text-tc-input-500"
        id="birthday"
        type="text"
        name="birthday"
        placeholder="아이디"
        required
      />
    </form>
  );
}