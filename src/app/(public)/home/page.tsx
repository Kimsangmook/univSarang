'use client'
// import {InputBirthday,InputName,InputPhoneNumber} from '@/app/components/signupComponents'
import React, { useState } from 'react';
import RadioButtons from '@/app/components/menu'

export default function Home() {
  const [selectedContent, setSelectedContent] = useState<string>('Content1');

  const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedContent(event.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <span className="dropdown-menu">
          {/* 여기에 드롭다운 메뉴 구현 */}
          <select>
            <option value="option1">2023 - 2</option>
            <option value="option2">2024 - 1</option>
          </select>
        </span>
        <span className="user-logo">
          User Logo
        </span>
      </header>
      <RadioButtons
        selectedContent={selectedContent}
        handleRadioButtonChange={handleRadioButtonChange}
      />
      <div className="content">
        {selectedContent}
      </div>
    </div>
  );
  }