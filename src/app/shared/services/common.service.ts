import { Injectable } from '@angular/core';
import { Transfer } from '../interfaces';
import { Observable, of } from 'rxjs';

/// позволяет использовать различные сторонние классы
/// providedIn - подлючаем сервис к модулю 
@Injectable({
    providedIn: 'root'
})
export class CommonService{
    constructor(){}

    setLocalStorage(form: Transfer){
        let dateTransfer = localStorage.getItem('transfer')
        let arr = []
        let key = 0
        if(dateTransfer){
            arr = JSON.parse(dateTransfer)
            key = arr.length
        }
        form.id = key
        
        let data = new Date();
        let month:any = data.getMonth()+1;
        if(month < 10){
            month = `0${month}`
        }

        let dateT = `${data.getDate()}.${month}.${data.getFullYear()}`
        form.date = dateT

        arr.push(form)

        dateTransfer = JSON.stringify(arr)
        localStorage.setItem('transfer', dateTransfer)
    }

    getLocalStorageAll():Observable<Transfer[]>{
        let storage = JSON.parse(localStorage.getItem('transfer'))
        return of(storage)
    }

    patch(id: number){
        let storage = JSON.parse(localStorage.getItem('transfer'))
        let item = storage.find((el) => {
           return el.id === id
        })
        this.setLocalStorage(item)
        return item
    }

    delete(id: number){
        let storage = JSON.parse(localStorage.getItem('transfer'))

        let delIndex = storage.findIndex(item => {
            return item.id === id
        })
        // delete storage[delIndex]
        storage.splice(delIndex, 1)

        if(storage.length !== 0){
            localStorage.setItem('transfer', JSON.stringify(storage))
        }else{
            localStorage.removeItem("transfer")
        }
        return delIndex
    }
}