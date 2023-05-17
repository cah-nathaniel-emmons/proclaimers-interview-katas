import { Injectable } from '@angular/core';
import { IMedication } from 'src/app/interfaces/medication.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicationService {
  private medications: IMedication[];

  constructor(private http: HttpClient) {
    this.medications = [
      {
        id: 'f63e0824-4f11-4620-ae81-3526a74bf6cb',
        name: 'ASPIRIN TAB 81MG',
        directionsForUse: 'Take one tablet when needed',
        condition: 'Headache',
        prescriber: {
          id: 'eabea5a0-b955-4e98-a65c-dba5ff9926d8',
          name: 'John Smith',
        },
      },
      {
        id: '8c813857-b8d4-4407-ac40-f03f287da6e9',
        name: 'PETOPROL SUC TAB 50MG ER',
        directionsForUse: 'Take one tablet twice each day',
        condition: 'Heart Health',
        prescriber: {
          id: 'f8f88868-f61e-478e-96b7-23b6c7ecacfe',
          name: 'John Smith',
        },
      },
      {
        id: '1d7e08cb-2244-42b8-a1ee-f137261efe10',
        name: 'NAPROXEN TAB 500MG',
        directionsForUse: 'Take two tablets when needed',
        condition: 'Back Pain',
        prescriber: {
          id: 'c5f64238-ee5c-4bc8-a614-1c917ca175d8',
          name: 'Self',
        },
      },
      {
        id: '086861b7-15ce-4531-9dda-b8eb0ec2c552',
        name: 'PANTOPRAZOLE TAB 40MG',
        directionsForUse: 'Take one spoonful by mouth daily',
        condition: 'Heartburn',
        prescriber: {
          id: '9159fcbe-6a78-42f6-bc28-ae88a1e4e776',
          name: 'Suzan Jones',
        },
      },
      {
        id: 'b39233d6-ca9c-48ab-a562-c3f55aa61794',
        name: 'TAMSULOSIN CAP 0.4MG',
        directionsForUse: 'Take one capsule at bedtime',
        condition: 'Blood ',
        prescriber: {
          id: '0b37759a-6846-4df7-b3b4-4479a8b2679c',
          name: 'Self',
        },
      },
      {
        id: '857e9a66-4a86-411f-a828-d1adf0272dd0',
        name: 'PROAIR HFA AER',
        directionsForUse: 'Inhale 2 puffs daily',
        condition: 'Asthma',
        prescriber: {
          id: '8a29bf20-2fdd-493d-a239-425977585229',
          name: 'Mike Sims',
        },
      },
      {
        id: '7f37c61b-7beb-495f-bf6b-5e4661c567cd',
        name: 'CLOPIDOGREL TAB 75MG',
        directionsForUse: 'Take one table 4 times a day',
        condition: 'Cancer',
        prescriber: {
          id: 'ab653f0c-fb81-4a15-8d70-3e49f08246e2',
          name: 'John Smith',
        },
      },
      {
        id: '50321787-c46b-434c-af0c-03041809dc97',
        name: 'ADEMPAS TAB 0.5MG',
        directionsForUse: 'TAKE 1/2 TABLET BY MOUTH DAILY IN THE MORNING',
        condition: 'REALLY BAD SLEEPINESS',
        prescriber: {
          id: '0721414f-a474-440a-b513-44dcfe22f2f2',
          name: 'Jack Jones',
        },
      },
      {
        id: '75de37e6-e7d9-4203-b622-64885d67bcc8',
        name: 'AMARYL TAB 4MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'SHAKING LEG',
        prescriber: {
          id: 'f9eaf3b0-e134-47e7-a444-97905c425502',
          name: 'Jack Jones',
        },
      },
      {
        id: '43f43a1d-d394-45f5-a5ef-354a70254a84',
        name: 'AMLODIPINE TAB 2.5MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'SLEEPINESS',
        prescriber: {
          id: '01ec06e8-7de4-493e-85cf-9d6636255c00',
          name: 'Jack Jones',
        },
      },
      {
        id: 'b0a139b5-896d-4540-93f0-20d2fe543f6a',
        name: 'CLOZAPINE TAB 25MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: 'ee1d2ca3-f54f-4a63-9675-3df8536024e2',
          name: 'Jack Jones',
        },
      },
      {
        id: '26a1bbb3-835e-4543-a520-80f83251d6ea',
        name: 'DIGITEK TAB 0.125MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: 'df37c369-90f8-45b4-b27d-eb47960d0e0c',
          name: 'Dr. Phil',
        },
      },
      {
        id: '62648ad8-6742-4393-8c15-b1905f4d37cc',
        name: 'GLIP/METFORM TAB 5-500MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: '447d059c-085f-490a-ae22-56c10ca8de30',
          name: 'Dr. Phil',
        },
      },
      {
        id: '1033242b-b115-48f1-9243-1b45e5e43fa3',
        name: 'HYZAAR TAB 100-25',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: 'd55501e1-3b93-45f2-9086-f0890e87c38c',
          name: 'Jack Jones',
        },
      },
      {
        id: '0f58afe0-0931-4cd9-a7db-d91acd00bc4b',
        name: 'INTELENCE TAB 200MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: 'a43c4b94-b8cf-461c-a624-3291c25d40a6',
          name: 'Dr. Phil',
        },
      },
      {
        id: '9ee0dba8-5576-4c7b-98f1-f019adfc00a1',
        name: 'LISINOPRIL TAB 20MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: '5e0d2098-1dd8-43fd-b181-502e0eb47655',
          name: 'Dr. Phil',
        },
      },
      {
        id: 'd8633c90-0343-4600-b23e-2cede5cf8683',
        name: 'PROAIR HFA AER',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: '9e4a255b-f2b7-41a1-afb1-25ab8d5f8230',
          name: 'Dr. Phil',
        },
      },
      {
        id: '7be18f67-a256-4a8c-9d60-c94459bad810',
        name: 'RISPERDAL TAB 1MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: '14e554f1-945b-489f-9253-e5eb6630bc60',
          name: 'Dr. Phil',
        },
      },
      {
        id: '6b039e06-b27d-42f5-9863-36f36049c57b',
        name: 'TOPIRAMATE TAB 200MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: 'cf0421be-8a87-4a5a-8b83-c2688902638b',
          name: 'Jack Jones',
        },
      },
      {
        id: 'fb4887f1-e6de-4f54-9641-ccc306fa1e7f',
        name: 'TRADJENTA TAB 5MG',
        directionsForUse: 'SWALLOW PILL ONCE IT IS IN YOUR MOUTH.',
        condition: 'ARTHRITIS',
        prescriber: {
          id: '92d73544-894b-4116-af0d-313e144332a2',
          name: 'Dr. Phil',
        },
      },
    ];
  }

  list(): Observable<IMedication[]> {
    return of(this.medications);
  }
}
