import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private apiService:ApiService) {}

    ngOnInit() {
      let checkboxes = document.querySelectorAll('input[type=checkbox');

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', (event) => {
          let label = (<HTMLLabelElement>( 
            (<HTMLInputElement>event.target).nextSibling
          )).getAttribute('data-label');

          if (label) {
            this.apiService.sendData(label).subscribe((response: any) => {
              console.log(response)
            })
          }
        })
      }) 
    }
}
