import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { InternCodeComponent } from './components/register2/intern-code.component';
import { InternDetailsComponent } from './components/register1/intern-details.component';
import { InternSpotComponent } from './components/register3/intern-spot.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { Register1BComponent } from './components/register1-b/register1-b.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionComponent } from './components/register-questionnaire/question/question.component';
import { MienComponent } from './components/register-questionnaire/mien/mien.component';
import { MienComponent as SuperMienComponent } from './supervisor/components/mien/mien.component';
import { AllUsersComponent } from './supervisor/components/all-users/all-users.component';
import { OptionsListComponent } from './supervisor/components/options-list/options-list.component';
import { CreateUserComponent } from './supervisor/components/create-user/create-user.component';
import { AddTestComponent } from './supervisor/components/add-test/add-test.component';
import { TestComponent } from './entrance-form/test/test.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
