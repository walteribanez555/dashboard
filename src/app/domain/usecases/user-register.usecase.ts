import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { UseCase } from '../../base/use-case';
import { Inject } from '@angular/core';

export class UserRegisterUseCase implements UseCase<{ phoneNum: string; password: string }, UserModel> {

  private userRepository = Inject(UserRepository)

    execute(
        params: { phoneNum: string; password: string },
    ): Observable<UserModel> {
        return this.userRepository.register(params);
    }
}
