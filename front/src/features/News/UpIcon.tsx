import styled from 'styled-components';

export const UpIconWrapper = styled.div`
  svg {
    fill: ${({ theme }) =>
      theme.highlightColor}; // theme에서 동적으로 색상 설정
  }
`;

export const UpIcon: React.FC = () => {
  return (
    <UpIconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3.5rem"
        height="3.5rem"
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M2352 4950 c-314 -31 -572 -104 -857 -245 -479 -237 -847 -606 -1085
          -1090 -170 -345 -245 -669 -244 -1060 1 -393 72 -701 244 -1050 123 -250 245
          -423 443 -624 729 -741 1834 -930 2762 -471 395 195 705 468 949 835 78 117
          200 359 251 498 169 463 187 1000 49 1479 -157 547 -505 1020 -989 1343 -201
          134 -499 264 -745 325 -213 53 -565 80 -778 60z m323 -1451 c46 -17 152 -104
          657 -537 563 -483 605 -521 633 -576 26 -53 30 -70 30 -145 0 -66 -5 -97 -21
          -132 -31 -66 -87 -124 -152 -156 -48 -24 -70 -28 -137 -28 -53 0 -96 6 -127
          18 -34 13 -168 122 -500 408 -249 214 -463 392 -475 395 -13 3 -33 3 -45 0
          -13 -3 -219 -175 -458 -381 -498 -429 -514 -440 -645 -440 -67 0 -89 5 -137
          28 -159 78 -224 274 -143 433 29 55 73 95 634 576 477 409 614 522 655 537 69
          27 160 27 231 0z"
          />
        </g>
      </svg>
    </UpIconWrapper>
  );
};