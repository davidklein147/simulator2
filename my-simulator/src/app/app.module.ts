import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment'
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { WellcomeComponent } from './users/components/wellcome/wellcome.component';
import { EntranceComponent } from './users/components/entrance/entrance.component';
import { InternDetailsComponent } from './users/components/register1/intern-details.component';
import { InternCodeComponent } from './users/components/register2/intern-code.component';
import { InternSpotComponent } from './users/components/register3/intern-spot.component';
import { LogoComponent } from './users/components/logo/logo.component';
import { Register1BComponent } from './users/components/register1-b/register1-b.component';
import { LoginComponent } from './users/components/login/login.component';
import { QuestionComponent } from './register-questionnaire/components/question/question.component';
import { Question2Component } from './register-questionnaire/components/question2/question2.component';
import { MienComponent } from './register-questionnaire/components/mien/mien.component';
import { Question3Component } from './register-questionnaire/components/question3/question3.component';
import { Question4Component } from './register-questionnaire/components/question4/question4.component';
import { AllUsersComponent } from './supervisor/components/all-users/all-users.component';
import { MienComponent as SuperMienComponent } from './supervisor/components/mien/mien.component';
import { OptionsListComponent } from './supervisor/components/options-list/options-list.component';
import { DispleyUserComponent } from './supervisor/components/displey-user/displey-user.component';
import { CreateUserComponent } from './supervisor/components/create-user/create-user.component';
import { AddTestComponent } from './supervisor/components/add-test/add-test.component';
import { TestComponent } from './entrance-form/test/test.component';
import { DoTestComponent } from './interns/components/do-test/do-test.component';
import { AcademicsMangementComponent } from './admin/components/academics-mangement/academics-mangement.component';



@NgModule({
  declarations: [
    AppComponent,
    WellcomeComponent,
    EntranceComponent,
    InternDetailsComponent,
    InternCodeComponent,
    InternSpotComponent,
    LogoComponent,
    Register1BComponent,
    LoginComponent,
    QuestionComponent,
    Question2Component,
    MienComponent,
    Question3Component,
    Question4Component,
    AllUsersComponent,
    SuperMienComponent,
    OptionsListComponent,
    DispleyUserComponent,
    CreateUserComponent,
    AddTestComponent,
    TestComponent,
    DoTestComponent,
    AcademicsMangementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
