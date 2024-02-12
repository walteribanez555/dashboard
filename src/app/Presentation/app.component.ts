import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GetUserProfileUseCase } from '../domain/usecases/get-user-profile.usecase';
import { UserImplementationRepository } from '../data/repositories/user/user-implementation.repository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
    // this.getUserUseCase.execute().subscribe({
    //   next : (resp) => {
    //     console.log({resp});
    //   },
    //   error : (err) => {
    //     console.log({err});
    //   }
    // })

  }


  // private getUserUseCase = new GetUserProfileUseCase(new UserImplementationRepository());



  title = 'template';
}
