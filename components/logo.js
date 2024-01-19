import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import BullIcon from './icons/bull.js';
import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 28px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    (<Link 
    href="/" 
    scroll={false}>

      <LogoBox >
        <BullIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Open Sans, sans-serif'
          fontWeight="bold"
        >
          Kaelin Bullock
        </Text>
      </LogoBox>
    </Link>)
  );
};

export default Logo;
