import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CentroVacunacionPersonaDTO } from '../models/centro-vacunacion-persona-dto';
import { CorrespondeTalFechaDTO } from '../models/corresponde-tal-fecha-dto';
import { MedicoAdministroPersonaDTO } from '../models/medico-administro-persona-dto';
import { PersonaPrimeraDosisDTO } from '../models/persona-primera-dosis-dto';
import { PersonaSegundaDosisDTO } from '../models/persona-segunda-dosis-dto';
import { PersonaVacunaSinovacDTO } from '../models/persona-vacuna-sinovac-dto';
import { PersonasRecibieronVacunaDTO } from '../models/personas-recibieron-vacuna-dto';
import { TipoVacunaDTO } from '../models/tipo-vacuna-dto';
import { VacunaRefuerzoDTO } from '../models/vacuna-refuerzo-dto';
import { VacunasExistentesDTO } from '../models/vacunas-existentes-dto';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  pathGeneral='http://localhost:8080/';

  constructor(private http:HttpClient) { }
  /**
   * medico que administro la dosis a una persona
   * @returns lista de medicos con los pacientes
   */
  getMedicoAdministroPersona():Observable<MedicoAdministroPersonaDTO[]>{
    return this.http.get<MedicoAdministroPersonaDTO[]>(this.pathGeneral+'persona/medico-adimistro-persona');
  }
  /**
   * personas que recibieron la primera dosis
   * @returns una lista de personas con la primera dosis
   */
  getPersonaPrimeraDosis():Observable<PersonaPrimeraDosisDTO[]>{
    return this.http.get<PersonaPrimeraDosisDTO[]>(this.pathGeneral+'persona/persona-primera-dosis');
  }
  /**
   * tipos de vacuna
   * @returns una lista de tipos de vacuna
   */
  getTipoVacuna():Observable<TipoVacunaDTO[]>{
    return this.http.get<TipoVacunaDTO[]>(this.pathGeneral+'vacuna/tipo-vacuna');
  }
  /**
   *
   * @returns una lista de personas vacunadas con sinovac
   */
  getPersonaVacunaSinovac():Observable<PersonaVacunaSinovacDTO[]>{
    return this.http.get<PersonaVacunaSinovacDTO[]>(this.pathGeneral+'vacuna/persona-vacuna-sinovac');
  }
  /**
   *
   * @returns lista de personas que recibieron la vacuna
   */
  getPersonasRecibieronVacuna():Observable<PersonasRecibieronVacunaDTO[]>{
    return this.http.get<PersonasRecibieronVacunaDTO[]>(this.pathGeneral+'vacuna/persona-recibieron-vacuna');
  }
  /**
   *
   * @returns una lista de personas con la segunda dosis
   */
  getVacunaSegundaDosis():Observable<PersonaSegundaDosisDTO[]>{
    return this.http.get<PersonaSegundaDosisDTO[]>(this.pathGeneral+'vacuna/persona-segunda-dosis');
  }
  /**
   *
   * @returns una lista de personas que se vacunaron en diferentes centros
   */
  getCentroVacunacionPersona():Observable<CentroVacunacionPersonaDTO[]>{
    return this.http.get<CentroVacunacionPersonaDTO[]>(this.pathGeneral+'vacuna/centro-vacunacion-persona');
  }
  /**
   *
   * @returns lista de vacunas de refuerzo
   */
  getVacunaRefuerzo():Observable<VacunaRefuerzoDTO[]>{
    return this.http.get<VacunaRefuerzoDTO[]>(this.pathGeneral+'vacuna/vacuna-refuerzo');
  }
  /**
   *
   * @returns una lista de cronogramas para las fechas de vacunación
   */
  getCronogramasFecha():Observable<CorrespondeTalFechaDTO[]>{
    return this.http.get<CorrespondeTalFechaDTO[]>(this.pathGeneral+'cronograma/corresponde-tal-fecha');
  }
  /**
   *
   * @returns lista de vacunas ecistentes
   */
  getVacunasExistentes():Observable<VacunasExistentesDTO[]>{
    return this.http.get<VacunasExistentesDTO[]>(this.pathGeneral+'cronograma/vacunasExistentes');
  }








}
