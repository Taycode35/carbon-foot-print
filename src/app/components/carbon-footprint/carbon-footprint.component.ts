import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {
  public username? : string;

  //  ! => signifie que l'initialisation se fera par nous même

  constructor() {
    console.log("Le composant est instencié !")
  }

  public changeName():void {
    this.username = "Donald";
  }

  public ngOnInit(): void {
    this.username = "Donald";
  }

  ngAfterViewInit() {
    console.log("La vue est chargée !")
  }

  ngAfterViewChecked(){
    console.log("La vue du composant a été vérifiée.")
  }
}
