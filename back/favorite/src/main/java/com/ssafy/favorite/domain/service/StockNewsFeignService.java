package com.ssafy.favorite.domain.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.favorite.domain.service.client.StockNewsClient;
import com.ssafy.favorite.domain.service.client.response.StockNewsDto;
import com.ssafy.favorite.global.common.CommonResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class StockNewsFeignService {
    private final StockNewsClient stockNewsClient;
    private final ObjectMapper objectMapper;

    public StockNewsDto getStockNews(String newsId) {
        // 주식 서버 호출
        CommonResponse<?> response = stockNewsClient.getStockNews(newsId);

        return objectMapper.convertValue(response.getData(), StockNewsDto.class);
    }

    public List<StockNewsDto> getStockNewsInIds(final List<String> scrapInStockNewsIds) {
        CommonResponse<?> response = stockNewsClient.getStockNewsInIds(scrapInStockNewsIds);

        // ObjectMapper를 사용해 List<IndustryNewsDto>로 변환
        List<StockNewsDto> industryNewsList = objectMapper.convertValue(
                response.getData(), new TypeReference<List<StockNewsDto>>() {
                }
        );
        return industryNewsList;
    }
}
