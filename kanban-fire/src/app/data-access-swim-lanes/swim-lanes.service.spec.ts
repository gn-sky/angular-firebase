import { TestBed } from '@angular/core/testing';

import { SwimLanesService } from './swim-lanes.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

describe('SwimLanesService', () => {
  let service: SwimLanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()), 
      ]
    });
    service = TestBed.inject(SwimLanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
