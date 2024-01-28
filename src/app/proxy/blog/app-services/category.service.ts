import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CategoryDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiName = 'Default';
  

  createCategory = (dto: CategoryDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/category/category',
      body: dto,
    },
    { apiName: this.apiName,...config });
  

  deleteCategory = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/app/category/${id}/category`,
    },
    { apiName: this.apiName,...config });
  

  getAllCategories = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, CategoryDto[]>({
      method: 'GET',
      url: '/api/app/category/categories',
    },
    { apiName: this.apiName,...config });
  

  updateCategory = (id: string, name: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'PUT',
      url: `/api/app/category/${id}/category`,
      params: { name },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
