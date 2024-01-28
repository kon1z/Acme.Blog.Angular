import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LableDto } from '../dto/models';

@Injectable({
  providedIn: 'root',
})
export class LableService {
  apiName = 'Default';
  

  addAndUpdateLableByDto = (dto: LableDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/lable/and-update-lable',
      body: dto,
    },
    { apiName: this.apiName,...config });
  

  deleteLableById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/app/lable/${id}/lable`,
    },
    { apiName: this.apiName,...config });
  

  getLablesByDto = (dto: LableDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LableDto[]>({
      method: 'GET',
      url: '/api/app/lable/lables',
      params: { id: dto.id, name: dto.name },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
