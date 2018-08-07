import { Component, OnInit, ViewChild } from '@angular/core';
import {klientItem} from '../../models/klientItem';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-klient-form',
  templateUrl: './klient-form.component.html',
  styleUrls: ['./klient-form.component.css']
})
export class KlientFormComponent implements OnInit {
  item: klientItem = {
    name: '',
    email: '',
    age: 1,
    phone : '',
    comment: ''
  };

  klient: klientItem[];

  @ViewChild('form') form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.klient = [
      {
        id: 0,
        name: 'Petya',
        email: 'Petr@mail.ua',
        age: 25,
        phone: '+38(099) 223-34-41',
        comment: 'Orem ipsum dolor sit sit amet consectetur adipisicing'
      },
      {
        id: 0,
        name: 'John',
        email: 'Johnny@mail.ua',
        age: 35,
        phone: '+38(091) 234-54-41',
        comment: 'Orem ipsum dolor sit amet consectetur adipisicing'
      }
    ];
  }

  onSubmit(form) {
    if(form.invalid) return;
      const newItem: klientItem = {
        name: this.item.name,
        email: this.item.email,
        age: this.item.age,
        phone : this.item.phone,
        comment: this.item.comment,
        id: this.klient.length
      }
      this.klient.push(newItem);

      this.form.reset();
  }

  deleteItem(id) {
    console.log(id);
    for (let i in this.klient) {
        if(this.klient[i].id === id) {
            this.klient.splice(Number(i), 1);
        }
    }
}

}
