import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown'
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashBoardComponent }
];
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        SelectDropDownModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [RouterModule],
    bootstrap: []
})

export class AppRoutingModule { }