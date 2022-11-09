import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['oculus@horus.com', [Validators.required, Validators.email]],
    password: ['123abc', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  login() {

    console.log(this.miFormulario.value);

    const { email, password } = this.miFormulario.value;
    this.authService.login(email, password).subscribe(ok => {
      if (ok === true) {
        this.router.navigate(['/dashboard']);
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }

}
