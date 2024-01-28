import type { EntityDto, PagedResultRequestDto } from '@abp/ng.core';

export interface ArticleDetailDto extends ArticleDto {
  content?: string;
}

export interface ArticleDto extends EntityDto<string> {
  title?: string;
  description?: string;
  createTime?: string;
}

export interface CategoryDto extends EntityDto {
  name?: string;
}

export interface CreateArticleInput extends EntityDto {
  title?: string;
  content?: string;
}

export interface GetArticleDto extends PagedResultRequestDto {
}

export interface LableDto {
  id?: string;
  name?: string;
}
