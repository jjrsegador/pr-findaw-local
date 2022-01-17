import { Component, OnInit } from '@angular/core';
import { ObservableDetalleService } from '../../servicios/observable-detalle.service';


@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  nombre:string;
  apellidos:string;
  organizacion:any;
  mail:string;
  telefono:number;
  infadic:any;
  fechaAlta:any;
  verContacto:boolean;

  constructor(private observableDetalle:ObservableDetalleService) {
    this.verContacto=false;
  }

  ngOnInit(): void {

      this.observableDetalle.recibirContacto$().subscribe(dataContacto => {

      this.nombre=dataContacto.nombre;
      this.apellidos=dataContacto.apellidos;
      this.organizacion=dataContacto.organizacion;
      this.mail=dataContacto.mail;
      this.telefono=dataContacto.telefono;
      this.infadic=dataContacto.infoadic;
      this.fechaAlta=dataContacto.fechaCreacion;

      console.log("nombre recibido de getContactoDetalle: " + this.nombre);

      this.verContacto=true;

    })

  }

  cerrarDetalle(){
    this.verContacto=false;
  }
}
