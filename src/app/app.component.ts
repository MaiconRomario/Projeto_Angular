import { Component } from '@angular/core';
import { RabbitmqServiceService } from './service/rabbitmq-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private rabbitmqService: RabbitmqServiceService) {}

  async ngOnInit() {
    await this.rabbitmqService.connectToRabbitMQ();
  }
}
