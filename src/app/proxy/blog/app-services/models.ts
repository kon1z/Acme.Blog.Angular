import type { EntityDto } from '@abp/ng.core';

export interface UpdateArticleInput extends EntityDto {
  content?: string;
}
