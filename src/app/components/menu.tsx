import React from 'react';
import styled from 'styled-components';

interface RadioButtonsProps {
  selectedContent: string;
  handleRadioButtonChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonsContainer = styled.div`
    display : flex;

`;

const RadioButtonLabel = styled.label<{ isSelected: boolean }>`
  display: block;
  margin: 5px 0;
  background-color: ${(props) => props.isSelected ? '#F0F2F4' : 'transparent'};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
  left: -9999px; /* 스크린 리더는 읽을 수 있지만, 화면에는 보이지 않음 */
`;

const RadioButtons: React.FC<RadioButtonsProps> = ({
  selectedContent,
  handleRadioButtonChange,
}) => {
  return (
    <RadioButtonsContainer>
      <RadioButtonLabel isSelected={selectedContent === 'Content1'}>
        <HiddenRadioButton
          name="content"
          value="Content1"
          checked={selectedContent === 'Content1'}
          onChange={handleRadioButtonChange}
        />
        출석 체크
      </RadioButtonLabel>
      <RadioButtonLabel isSelected={selectedContent === 'Content2'}>
        <HiddenRadioButton
          name="content"
          value="Content2"
          checked={selectedContent === 'Content2'}
          onChange={handleRadioButtonChange}
        />
        리더 보고서
      </RadioButtonLabel>
      <RadioButtonLabel isSelected={selectedContent === 'Content3'}>
        <HiddenRadioButton
          name="content"
          value="Content3"
          checked={selectedContent === 'Content3'}
          onChange={handleRadioButtonChange}
        />
        조원 목록
      </RadioButtonLabel>
    </RadioButtonsContainer>
  );
};

export default RadioButtons;
