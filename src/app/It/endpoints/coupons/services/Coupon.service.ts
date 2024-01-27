import { Injectable, inject } from '@angular/core';
import { CouponsDto } from '../models/CouponsDto';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Coupon } from '../../../../Core/models/coupons/Coupon.models';
import { CouponPost } from '../models/CouponPost';
import { CouponDto } from '../models/CouponDto';
import { CouponPut } from '../models/CouponPut';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private apiUrl = environment.apiUrl + '/CouponAPI';
  private http = inject(HttpClient);
  constructor() {}

  create(data: CouponPost) : Observable<CouponDto> {
    return this.http.post<CouponDto>(this.apiUrl, data);
  }

  GetAll() : Observable<CouponsDto> {
    return this.http.get<CouponsDto>(this.apiUrl);
  }

  getById(id: string | number) : Observable<CouponDto> {
    return this.http.get<CouponDto>(this.apiUrl + `/${id}`);
  }

  getByCode(code: string) : Observable<CouponDto> {
    return this.http.get<CouponDto>(this.apiUrl+'GetByCode/'+code);
  }

  update(id: string | number, cuponToUpdate : CouponPut) : Observable<CouponDto> {
    return this.http.put<CouponDto>(this.apiUrl + `/${id}`, cuponToUpdate);
  }

  delete(id: string | number) : Observable<CouponDto> {
    return this.http.delete<CouponDto>(this.apiUrl + `/${id}`);
  }
}
