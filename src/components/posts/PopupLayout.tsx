import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const FullScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupBox = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  padding: 30px;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -35px;
  right: 0px;
  background: none;
  border: none;
  cursor: pointer;
`;

interface PopupLayoutProps {
    children: React.ReactNode;
}

export default function PopupLayout({ children }: PopupLayoutProps) {
    const navigate = useNavigate();

    return (
        <FullScreenOverlay>
            <PopupBox>
                <CloseButton onClick={() => navigate(-1)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='w-6 h-6'>
                        <path fillRule='evenodd' d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z' clipRule='evenodd' />
                    </svg>

                </CloseButton>
                {children}
            </PopupBox>
        </FullScreenOverlay>
    );
}
