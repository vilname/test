import { CommonService } from './../shared/services/common.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
@Injectable()
export class TransferComponent implements OnInit {

  form: FormGroup

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      payerCart: new FormGroup({
        payerP1: new FormControl(null, [Validators.required.bind(this), this.validNum.bind(this)]),
        payerP2: new FormControl(null, [Validators.required, this.validNum.bind(this)]),
        payerP3: new FormControl(null, [Validators.required, this.validNum.bind(this)]),
        payerP4: new FormControl(null, [Validators.required, this.validNum.bind(this)])
      }),
      payerFio: new FormControl(null, this.validString),
      month: new FormControl(null, this.validNum),
      year: new FormControl(null, this.validNum),
      recipientCart: new FormGroup({
        recipientP1: new FormControl(null, [Validators.required, this.validNum.bind(this)]),
        recipientP2: new FormControl(null, [Validators.required, this.validNum.bind(this)]),
        recipientP3: new FormControl(null, [Validators.required, this.validNum.bind(this)]),
        recipientP4: new FormControl(null, [Validators.required, this.validNum.bind(this)])
      }),
      sumTransfer: new FormControl(null, [Validators.required, this.validNum])
    })
  }

  onSubmit(){
    this.service.setLocalStorage(this.form.value)
  }

  validNum(control: FormControl){
    if(isNaN(control.value)){
      return {
        'noNumber': true
      }
    }
  }

  validString(control: FormControl){
    let val = +control.value
    if(val > 0){
      if(!isNaN(val)){
        return {
          'noString': true
        }
      }
    }

  }

  errorFormStyle(name: string){
    return {'has-error': this.errorParams(name)}
  }

  errorParams(name: string){
    return this.form.get(`${name}`).invalid && this.form.get(`${name}`).touched
  }

  validError(type: string, group: string){
    let formGroupItem = this.form.controls[group] as FormGroup
    const itemField = formGroupItem.controls
    let errorType: {
      required?: Boolean,
      noNumber?: Boolean
    } = {}

    for(let item in itemField){
      if(itemField[item].errors){
        if(itemField[item].errors[type] && !errorType[type]){
          errorType[type] = true
        }
      }
    }

    if(errorType[type]){
      return true
    }

  }

}
