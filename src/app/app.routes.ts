import { Routes } from '@angular/router';
import { DietPlanComponent } from './components/diet-plan/diet-plan.component';
import { DietFormComponent } from './components/diet-form/diet-form.component';
import { PredictionFormComponent } from './components/prediction-form/prediction-form.component';
import { ResultsComponent } from './components/results/results.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'prediction', component: PredictionFormComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'diet-form', component: DietFormComponent },
  { path: 'diet-plan', component: DietPlanComponent },
];
