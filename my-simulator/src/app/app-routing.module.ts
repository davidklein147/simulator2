import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './users/components/entrance/entrance.component';
import { InternCodeComponent } from './users/components/register2/intern-code.component';
import { InternDetailsComponent } from './users/components/register1/intern-details.component';
import { InternSpotComponent } from './users/components/register3/intern-spot.component';
import { WellcomeComponent } from './users/components/wellcome/wellcome.component';
import { Register1BComponent } from './users/components/register1-b/register1-b.component';
import { LoginComponent } from './users/components/login/login.component';
import { QuestionComponent } from './components/register-questionnaire/question/question.component';
import { MienComponent } from './components/register-questionnaire/mien/mien.component';
import { MienComponent as SuperMienComponent } from './supervisor/components/mien/mien.component';
import { AllUsersComponent } from './supervisor/components/all-users/all-users.component';
import { OptionsListComponent } from './supervisor/components/options-list/options-list.component';
import { CreateUserComponent } from './supervisor/components/create-user/create-user.component';
import { AddTestComponent } from './supervisor/components/add-test/add-test.component';
import { TestComponent } from './entrance-form/test/test.component';
import { DoTestComponent } from './interns/components/do-test/do-test.component';

const routes: Routes = [
  { path: '', component: WellcomeComponent },
  { path: 'entrance', component: EntranceComponent },
  { path: 'details', component: InternDetailsComponent },
  { path: 'code', component: InternCodeComponent },
  { path: 'spot', component: InternSpotComponent },
  { path: 'thanks', component: QuestionComponent },
  { path: 'register', component: Register1BComponent },
  { path: 'login', component: LoginComponent },
  { path: 'questionnaire', component: MienComponent },
  { path: 'test', component:TestComponent },
  {
    path: 'supervisor',
    component: SuperMienComponent,
    children: [
      { path: '', component: OptionsListComponent },
      { path: 'allUsers', component: AllUsersComponent },
      { path: 'createuser', component: CreateUserComponent },
      { path: 'addtest', component: AddTestComponent },
    ]
  },
  {path: 'do-test', component: DoTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
