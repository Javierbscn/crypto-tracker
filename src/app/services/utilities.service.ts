import { Injectable } from '@angular/core';
import { mergeMap, Observable, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  static intervalPetition(
    intervalOfTime: number,
    apiCall: () => Observable<any>,
    conditionToContinue: (apiResponse: any) => boolean
  ): Observable<any> {
    return timer(0, intervalOfTime).pipe(
      mergeMap(() => apiCall()),
      takeWhile((actualResult: any) => conditionToContinue(actualResult), true)
    );
  }
}
