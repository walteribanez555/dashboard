import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { UseCase } from '../../base/use-case';
import { inject } from '@angular/core';

export class UserLoginUseCase implements UseCase<{ username: string; password: string }, UserModel> {

    private userRepository = inject(UserRepository);

    execute(
       params: { username: string, password: string },
    ): Observable<UserModel> {
        return this.userRepository.login(params);
    }
}
