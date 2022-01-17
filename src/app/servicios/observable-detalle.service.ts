import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contacto } from '../interfaces/contacto';

@Injectable({
  providedIn: 'root'
})
export class ObservableDetalleService {

  private contacto$ : Subject<Contacto>;

  constructor() {
     this.contacto$ = new Subject();
   }

   emitirContacto(icontacto:Contacto) {
    /* Emisión de la info cuando se solicite*/
    this.contacto$.next(icontacto);
    }

   recibirContacto$(): Observable<Contacto> {
    /* Al no podernos SUSCRIBIR AL SUBJECT creamos un OBSERVABLE QUE SÍ QUE NOS PERMITE LA SUSCRIPCIÓN */
    return this.contacto$.asObservable();
   }

}
