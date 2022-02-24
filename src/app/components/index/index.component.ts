import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  //medicoAdministroPersona:any[]=[];
  result:any[]=[];
  resultValidation:any;
  constructor(private generalService:GeneralService) { }

  ngOnInit(): void {
    this.getTipoVacuna();
  }
  async getMedicoAdministroPersona(){
    this.getConsultaGeneral(this.generalService.getMedicoAdministroPersona());
  }
  async getPersonaPrimeraDosis(){
    this.getConsultaGeneral(this.generalService.getPersonaPrimeraDosis());
  }
  async getTipoVacuna(){
    this.getConsultaGeneral(this.generalService.getTipoVacuna());
  }
  async getPersonaVacunaSinovac(){
    this.getConsultaGeneral(this.generalService.getTipoVacuna());
  }
  async getPersonasRecibieronVacuna(){
    this.getConsultaGeneral(this.generalService.getPersonasRecibieronVacuna());
  }
  async getVacunaSegundaDosis(){
    this.getConsultaGeneral(this.generalService.getVacunaSegundaDosis())
  }
  async getCentroVacunacionPersona(){
    this.getConsultaGeneral(this.generalService.getCentroVacunacionPersona());
  }
  async getVacunaRefuerzo(){
    this.getConsultaGeneral(this.generalService.getVacunaRefuerzo());
  }
  async getCronogramasFecha(){
    this.getConsultaGeneral(this.generalService.getCronogramasFecha());
  }
  async getVacunasExistentes(){
    this.getConsultaGeneral(this.generalService.getVacunasExistentes());
  }
  /**
   *
   * @param consulta general
   */
  async getConsultaGeneral(consulta:any){
    this.result=await lastValueFrom(consulta);
    this.resultValidation=this.result[0];
  }
  submit(valor:number){
    switch(valor){
      case 1:{
        //¿Qué tipo de vacunas se tiene?
        this.result=[];
        this.getTipoVacuna();
        break;
      }
      case 2:{
        // ¿Qué personas van a tomar su primera dosis?
        this.result=[];
        this.getPersonaPrimeraDosis();
        break;
      }
      case 3:{
         // ¿Cuántas vacunas existen?
         this.result=[];
        this.getVacunasExistentes()
        break;
      }
      case 4:{
        // ¿Qué médico administró la dosis de la persona?
        this.result=[];
        this.getMedicoAdministroPersona();
        break;
      }
      case 5:{
        // ¿Qué vacuna recibieron las personas?
        this.result=[];
        this.getPersonasRecibieronVacuna();
        break;
      }
      case 6:{
        // ¿Cuales fueron las personas vacunadas con Sinovac?
        this.result=[];
        this.getPersonaVacunaSinovac();
        break;
      }
      case 7:{
          // ¿Cuales son las personas que van a tomar su segunda vacuna
        this.result=[];
        this.getVacunaSegundaDosis();
        break;
      }
      case 8:{
        // ¿A qué centro de vacunación asistió la persona?
        this.result=[];
        this.getCentroVacunacionPersona();
        break;
      }
      case 9:{
        // ¿Cuántas personas van a recibir la vacuna de refuerzo?
        this.result=[];
        this.getVacunaRefuerzo();
        break;
      }
      case 10:{
        // ¿Qué personas corresponden a tal fecha?
        this.result=[];
        this.getCronogramasFecha();
        break;
      }
    }

  }







}
