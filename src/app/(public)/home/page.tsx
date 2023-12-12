import {InputBirthday,InputName,PhoneNumber} from '@/app/components/inputComponents'
export default function Home() {
    return (
      // <MSWProvider>
      <div className="mx-auto" style={{ width: '350px' }}>
      <InputBirthday></InputBirthday>
      <InputName></InputName>
      <PhoneNumber></PhoneNumber>
      </div>
      // </MSWProvider>
    );
  }