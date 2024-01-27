import { Injectable, inject } from '@angular/core';
import { CouponService as itCouponService } from '../../It/endpoints/coupons/services/Coupon.service';
import { Observable, map } from 'rxjs';
import { Coupon } from '../models/coupons/Coupon.models';
import { CouponsDto } from '../../It/endpoints/coupons/models/CouponsDto';
import { CouponDto } from '../../It/endpoints/coupons/models/CouponDto';
import { CouponToPut } from '../models/coupons/CouponToPut.models';
import { CouponToPost } from '../models/coupons/CouponToPost.models';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private couponService = inject(itCouponService);

  constructor() {}

  getAllCoupons(): Observable<Coupon[]> {
    return this.couponService.GetAll().pipe(
      map((resp: CouponsDto) => {
        if (resp.isSuccess) {
          return resp.result;
        }

        throw new Error('Error en la consulta');
      })
    );
  }

  getByIdCoupons(id: string | number): Observable<Coupon> {
    return this.couponService.getById(id).pipe(
      map((resp: CouponDto) => {
        if (resp.isSuccess) {
          return resp.result!;
        }
        throw new Error('Error en la consulta');
      })
    );
  }

  getByCode(couponCode: string): Observable<Coupon> {
    return this.couponService.getByCode(couponCode).pipe(
      map((resp: CouponDto) => {
        if (resp.isSuccess) {
          return resp.result!;
        }
        throw new Error('Error en la consulta');
      })
    );
  }



  createCoupon( newCoupon : CouponToPost): Observable<Coupon> {
    return this.couponService.create(newCoupon).pipe(
      map( (resp : CouponDto) => {
        if(resp.isSuccess){
          return resp.result!
        }

        throw new Error("Error en la consulta");
      })
    )
  }

  updateCoupon(  id : string | number , couponToUpdate : CouponToPut) : Observable<Coupon>{
    return this.couponService.update(id, couponToUpdate).pipe(
      map((resp : CouponDto) => {
        if(resp.isSuccess) {
          return resp.result!
        }
        throw new Error("Error en la consulta");
      })
    )
  }


  deleteCoupon( id : string | number) : Observable<Boolean> {
     return this.couponService.delete(id).pipe(
      map( (resp : CouponDto) => {
        if(resp.isSuccess) {
          return resp.isSuccess;
        }
        throw new Error("Error en la consulta");
      })
     )
  }
}
