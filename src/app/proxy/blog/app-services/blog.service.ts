import type { UpdateArticleInput } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ArticleDetailDto, ArticleDto, CreateArticleInput, GetArticleDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiName = 'Default';
  

  create = (input: CreateArticleInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArticleDetailDto>({
      method: 'POST',
      url: '/api/app/blog',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArticleDetailDto>({
      method: 'GET',
      url: `/api/app/blog/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetArticleDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ArticleDto>>({
      method: 'GET',
      url: '/api/app/blog',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateArticleInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ArticleDetailDto>({
      method: 'PUT',
      url: `/api/app/blog/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
