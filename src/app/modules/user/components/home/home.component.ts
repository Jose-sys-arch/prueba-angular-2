import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuario="";
  intentosFallidos=0;
  horaInicio=""
  horaFin=""

  constructor(
    private homeService:HomeService
  ){
    
  }

  ngOnInit(){
    this.homeService.getInfoUser().subscribe((data)=>{
      this.usuario=data.user;
    });

    this.homeService.getInfoSessions().subscribe((data)=>{
      this.intentosFallidos=data.intentosFallidos??0;
      this.horaInicio=data.fecha_ingreso;
      this.horaFin=data.fechaCierre;
    });
  }
}
