import { Injectable } from '@angular/core';
import * as amqp from 'amqplib';
import { queue } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RabbitmqServiceService {

  private connection: amqp.Connection |null = null;
  private channel!: amqp.Channel;

  constructor() { }

  async connectToRabbitMQ() {
    this.connection = await amqp.connect({
      hostname: '200.201.206.43',
      port: 15672,
      username: 'cloudsale',
      password: '@@33cs'
    });

    this.channel = await this.connection.createChannel();

    const queueName = 'my_queue'
    await this.channel.assertQueue(queueName, {durable:true})

    this.channel.consume(queueName, (message) => {
      if (message !== null) {
        console.log(message.content.toString());
        this.channel.ack(message);
      }
    },{noAck:false})

    console.log("Listen Rabbitmq on port 15672")
    
  }

}

