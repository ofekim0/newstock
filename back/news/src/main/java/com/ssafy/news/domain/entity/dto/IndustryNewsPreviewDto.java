package com.ssafy.news.domain.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class IndustryNewsPreviewDto {
    private Long id;
    private String title;
    private String industry;
    private String description;
    private String media;
    private String sentiment;
    private String newsId;
    private String thumbnail;
    private LocalDateTime uploadDatetime;
}
