import { Injectable, inject } from '@angular/core';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserModel } from '../../../domain/models/user.model';
import { UserEntity } from './entities/user-entity';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();
  private http = inject(HttpClient);

  login(params: { username: string; password: string }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://example.com/login', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  register(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://example.com/register', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>('https://example.com/user')
      .pipe(map(this.userMapper.mapFrom));
  }
}
