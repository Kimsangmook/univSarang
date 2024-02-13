import {InputBirthday,InputName,InputPhoneNumber} from '@/app/components/signupComponents'

export default function SigninStep1() {
    return (
      // <MSWProvider>
      <div className="mx-auto" style={{ width: '350px' }}>
        <InputBirthday></InputBirthday>
        <InputName></InputName>
        <InputPhoneNumber></InputPhoneNumber>
      </div>
      // </MSWProvider>
    );
  }