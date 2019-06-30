import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
    {path: '', component: TransferComponent, pathMatch: 'full'},
    {path: 'history', component: HistoryComponent}
]

/// @NgModule - говорим ангуляру что из себя представляет файл, так же есть пайпы, директивы, компоненты
/// и наверно что то еще
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

/// экспортирую чтобы можно было через import притянуть роуты
export class AppRoutingModule{

}