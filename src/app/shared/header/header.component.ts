import { Component, OnInit } from '@angular/core';
import { NavarService } from 'src/app/services/navar.service';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
NavarService
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu:any;
  constructor(public _NavarService:NavarService,public router:Router) { }
  
  ngOnInit(): void {
    this.menu=this._NavarService.menu;
    console.log(this.menu)
  }

  salir(){

    Swal.fire({
      title: 'Esta seguro que desea salir ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
      }
      
      this.router.navigateByUrl('login')

    })

  

  }

}
