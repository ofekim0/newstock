// 메인 페이지
import styled from 'styled-components';
import { Center } from '@components/Center';
import LeftNews from '@components/LeftNews';
import NewsMainHeader from '@features/News/NewsMainHeader';
import NewsMainBody from '@features/News/NewsMainBody';
import newsData from '@api/dummyData/20240907.json';

// 스타일드 컴포넌트 정의
const NewsMainCenter = styled.div`
  display: flex;
  width: 100%;
  // 화면 퍼지는거 보기 싫어서 일단 픽셀로 박아둠.
  max-width: 106rem;
  padding: 1.25rem 3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex: 1 0 0;
  align-self: stretch;
`;

const NewsMainBodyWrapper = styled.div`
  display: flex;
  padding: 1.2rem 0.25rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 1.25rem;
`;

const NewsMainPage: React.FC = () => {
  const top4News = newsData.data.slice(0, 4);

  return (
    <>
      <LeftNews />
      <Center>
        <NewsMainCenter>
          {/* 시황 뉴스 헤더 텍스트 */}
          <NewsMainHeader newsType="시황" />
          <NewsMainBodyWrapper>
            {top4News.map((news, index) => (
              <NewsMainBody
                key={index}
                newsType="시황"
                title={news.title}
                description={news.description}
                media={news.media}
                date={news.uploadDatetime}
                header="벤처/스타트업"
              />
            ))}
          </NewsMainBodyWrapper>
          <NewsMainHeader newsType="종목" />
          <NewsMainBodyWrapper>
            {top4News.map((news, index) => (
              <NewsMainBody
                key={index}
                newsType="종목"
                title={news.title}
                description={news.description}
                media={news.media}
                date={news.uploadDatetime}
                header="삼성전자"
              />
            ))}
          </NewsMainBodyWrapper>
        </NewsMainCenter>
      </Center>
    </>
  );
};

export default NewsMainPage;