import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from './components/account/account.component';
import { CadastrarCursos } from './components/cursos/cadastrar-cursos/cadastrar-cursos.component';
import { ListarCursos } from './components/cursos/listar-cursos/listar-cursos.component';
import { RelatorioPresencaComponent } from './components/cursos/relatorio-presenca/relatorio-presenca.componente';
import { ConfirmarPresencaComponent } from './components/cursos/confirmar-presenca/confirmar-presenca.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: DashBoardComponent},
    {path: 'account', component: AccountComponent},
    {path: 'cadastrarCursos', component: CadastrarCursos},
    {path: 'listarCursos', component: ListarCursos},
    {path: 'relatorioPresenca', component: RelatorioPresencaComponent},
    {path: 'confirmarPresenca', component: ConfirmarPresencaComponent}
];
