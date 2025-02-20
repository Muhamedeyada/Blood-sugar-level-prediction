import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface DietFormData {
  age: number;
  weight: number;
  activityLevel: string;
  dietaryRestrictions?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private baseUrl = 'https://llm-model-fine-tuning.vercel.app/api/v1/llm';

  constructor(private http: HttpClient) {}

  getDietPlanRecommendation(data: DietFormData): Observable<any> {
    const payload = {
      ...data,
      prompt: `Generate a personalized diet plan for diabetes control with the following parameters:
      Age: ${data.age}
      Weight: ${data.weight}kg
      Activity Level: ${data.activityLevel}
      Dietary Restrictions: ${data.dietaryRestrictions?.join(', ') || 'None'}`
    };

    return this.http.post(`${this.baseUrl}/gpt-4o`, payload);
  }
}
