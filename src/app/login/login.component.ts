import { Component } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private http: HttpClient, private router: Router ) { }

  username!: string;
  password!: string;

  goToLogin() {
    this.login(this.username, this.password).subscribe(data => {
      if (data != null) {
        console.log('Login successful', data);
        this.router.navigate(['/list-courses']);
      } else {
        alert('Login failed');
        // Show an error message or handle the failed login attempt.
      }
    });
  }
   
  login(username: string, password: string) {
    const body = { nom: username, motDePasse: password };
    return this.http.post<Admin>('http://localhost:2559/admin/login', body);
  }
}

interface Admin {
  id: number;
  nom: string;
  motDePasse: string;
}
