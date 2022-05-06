import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/interfaces/note';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private localStorageSvc: LocalStorageService) {
    this.notes$ = localStorageSvc.notes$.asObservable();
  }

  ngOnInit(): void {
  }

}
