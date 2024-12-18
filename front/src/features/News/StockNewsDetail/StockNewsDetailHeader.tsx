import styled from 'styled-components';
import StockPriceHeader from '@features/News/StockNewsDetail/StockPriceHeader';
import {
  PositiveIcon as BasePositiveIcon,
  PositiveIconText as BasePositiveIconText,
  NegativeIcon as BaseNegativeIcon,
  NegativeIconText as BaseNegativeIconText,
  NeutralIcon as BaseNeutralIcon,
  NeutralIconText as BaseNeutralIconText,
} from '@features/News/PNSubicon';
import { NewsTag, bookmarkedIcon, unbookmarkedIcon } from '../NewsIconTag';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import useAllStockStore from '@store/useAllStockStore';
import useTop10StockStore from '@store/useTop10StockStore';
import { useBookmarkStore } from '@store/useBookmarkStore';
import useAuthStore from '@store/useAuthStore';

const StockNewsDetailHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.75rem 0.625rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.25rem;
`;

const HeaderGapWrapper = styled.div<{ $gapSize: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gapSize }) => `${$gapSize}rem`};
  width: 100%;
`;

const StockNewsTitleWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 0.5rem;
  align-self: stretch;
  position: relative;
`;

const StockNewsTitleText = styled.p`
  /* color: #0448a5; */
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.6;
  text-indent: 6.5rem;
  padding-left: 0.5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  padding-left: 0.5rem;
`;

const TagBookmarkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  width: 100%;
`;

const NewsMediaText = styled.p`
  color: ${({ theme }) => theme.textColor};
  /* color: #828282; */
  font-size: 1rem;
  line-height: 1.875rem; /* 176.471% */
`;

const NewsAuthorInfoText = styled.p`
  color: ${({ theme }) => theme.grayTextColor};
  /* color: #828282; */
  font-size: 1rem;
  line-height: 1.875rem; /* 176.471% */
`;

const Border = styled.div`
  width: 100%;
  height: 0.06rem;
  background-color: ${({ theme }) => theme.grayTextColor};
  margin-top: 1rem;
`;

const PositiveIcon = styled(BasePositiveIcon)`
  position: absolute;
  width: 6rem;
  height: 3rem;
  padding: 0.3rem;
  border: 0.125rem solid #ea1212;
`;

const PositiveIconText = styled(BasePositiveIconText)`
  font-size: 2rem;
  font-weight: 500;
`;

const NegativeIcon = styled(BaseNegativeIcon)`
  position: absolute;
  width: 6rem;
  height: 3rem;
  padding: 0.3rem;
  border: 0.125rem solid #006dff;
`;

const NegativeIconText = styled(BaseNegativeIconText)`
  font-size: 2rem;
  font-weight: 500;
`;

const NeutralIcon = styled(BaseNeutralIcon)`
  position: absolute;
  width: 6rem;
  height: 3rem;
  padding: 0.3rem;
  border: 0.125rem solid #828282;
`;

const NeutralIconText = styled(BaseNeutralIconText)`
  font-size: 2rem;
  font-weight: 500;
`;

interface StockNewsDetailHeaderProps {
  title: string;
  media: string;
  uploadDate: string;
  sentiment: string;
  tagList: string[];
  stockNewsStockCodes?: string[];
  id: string;
}

const StockNewsDetailHeader: React.FC<StockNewsDetailHeaderProps> = ({
  title,
  media,
  uploadDate,
  sentiment,
  tagList,
  stockNewsStockCodes,
  id,
}) => {
  const {
    bookmarkedStockNewsIds,
    addStockBookmark,
    removeStockBookmark,
    fetchBookmarkedStockNews,
  } = useBookmarkStore(); // zustand로부터 상태 및 함수 불러오기

  const { isLogin } = useAuthStore();

  const isBookmarked = bookmarkedStockNewsIds.includes(id);

  useEffect(() => {
    if (isLogin) {
      fetchBookmarkedStockNews(); // 컴포넌트 마운트 시 북마크 상태 불러오기
    }
  }, [fetchBookmarkedStockNews, isLogin]);

  const handleBookmarkClick = async () => {
    if (!isLogin) {
      // 로그인하지 않은 상태에서는 북마크 기능 제한
      toast.error('로그인이 필요한 서비스입니다.');
      return;
    }

    try {
      if (isBookmarked) {
        await removeStockBookmark(id); // 북마크 삭제
      } else {
        await addStockBookmark(id); // 북마크 추가
      }
    } catch (error) {
      console.error('Failed to update bookmark: ', error);
    }
  };

  const date = uploadDate.split('T')[0].replace(/-/g, '.');

  const { allStock } = useAllStockStore();
  const { top10Stock } = useTop10StockStore();

  const stockCode = stockNewsStockCodes?.[0];
  const stockDetail =
    allStock?.find((s) => s.stockCode === stockCode) ||
    top10Stock?.find((s) => s.stockCode === stockCode);
  const stockName = stockDetail?.stockName || 'Unknown Stock';

  // 감정 분석에 따른 아이콘 설정
  let IconComponent;
  let IconText;

  switch (sentiment) {
    case '0': // 부정적
      IconComponent = NegativeIcon;
      IconText = <NegativeIconText>부정</NegativeIconText>;
      break;
    case '1': // 중립적
      IconComponent = NeutralIcon;
      IconText = <NeutralIconText>중립</NeutralIconText>;
      break;
    case '2': // 긍정적
      IconComponent = PositiveIcon;
      IconText = <PositiveIconText>긍정</PositiveIconText>;
      break;
    default:
      IconComponent = NeutralIcon; // 기본값으로 중립 아이콘을 사용
      IconText = <NeutralIconText>중립</NeutralIconText>;
      break;
  }

  return (
    <>
      <StockNewsDetailHeaderWrapper>
        <HeaderGapWrapper $gapSize={1.25}>
          <StockPriceHeader header={stockName} stockDetail={stockDetail!} />
          <StockNewsTitleWrapper>
            {/* <PositiveIcon>
              <PositiveIconText>긍정</PositiveIconText>
            </PositiveIcon> */}
            <IconComponent>{IconText}</IconComponent>
            <StockNewsTitleText>{title}</StockNewsTitleText>
          </StockNewsTitleWrapper>
        </HeaderGapWrapper>

        <HeaderGapWrapper $gapSize={1}>
          <InfoWrapper>
            <NewsMediaText>{media}</NewsMediaText>
            <NewsAuthorInfoText>{date}</NewsAuthorInfoText>
          </InfoWrapper>

          <TagBookmarkWrapper>
            <InfoWrapper>
              {tagList.map((tag, index) => (
                <NewsTag key={index} $tagName={tag}>
                  # {tag}
                </NewsTag>
              ))}
            </InfoWrapper>
            <div onClick={handleBookmarkClick} style={{ cursor: 'pointer' }}>
              {isBookmarked ? bookmarkedIcon : unbookmarkedIcon}
            </div>
          </TagBookmarkWrapper>
        </HeaderGapWrapper>

        <Border />
      </StockNewsDetailHeaderWrapper>
    </>
  );
};

export default StockNewsDetailHeader;
