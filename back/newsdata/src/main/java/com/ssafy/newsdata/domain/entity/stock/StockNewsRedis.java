package com.ssafy.newsdata.domain.entity.stock;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@RedisHash(value = "StockNewsRedis")
public class StockNewsRedis {
    private String id;

    private Long stockNewsId;
    private Long memberId;

    public StockNewsRedis(Long stockNewsId, Long memberId) {
        this.id = stockNewsId + "|" + memberId;
        this.stockNewsId = stockNewsId;
        this.memberId = memberId;
    }
}