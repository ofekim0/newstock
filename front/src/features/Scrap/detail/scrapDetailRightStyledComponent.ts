import styled from 'styled-components';

export const RightTitleTopDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RightTitleBottomDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
`;

export const RightTitleBottomFilterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const ScrapCardDiv = styled.div`
  display: flex;
  padding: 0.9375rem 0.625rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0rem 1.375rem;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.newsBackgroundColor};
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
`;

export const ScrapCardLeftDiv = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border-radius: 50%;
  border: solid 0.125rem;
  border-color: #828282;
`;

export const ScrapCardRightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
`;

export const ScrapCardRightBottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;