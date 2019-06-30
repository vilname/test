import { CommonService } from './../shared/services/common.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../shared/interfaces';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
@Injectable()
export class HistoryComponent implements OnInit {

  transfer:Transfer[] = []
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getLocalStorageAll()
      .subscribe(items => {
        this.transfer = items
      })
  }

  repeat(id:number){
    const newItem = this.service.patch(id)
    this.transfer.push(newItem)
  }
  delete(id:number){
    let idx = this.service.delete(id)

    this.transfer.splice(idx, 1)
    // delete this.transfer[idx]
  }

}
