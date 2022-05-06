import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Note } from 'src/app/interfaces/note';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes$: Observable<Note[]>;
  currentNote!: Note;
  editingNote: boolean;

  constructor(private localStorageSvc: LocalStorageService) {
    this.notes$ = localStorageSvc.notes$.asObservable();

    this.editingNote = false;

    this.clearCurrentNote();
  }

  ngOnInit(): void {
  }

  private clearCurrentNote(): void {
    this.currentNote = { id: 0, title: '', description: '' };
  }

  onAddNote(): void {
    try {
      this.notes$
        .pipe(
          tap(res => res.forEach((note: Note) => this.currentNote.id = note.id + 1))
        )
        .subscribe()
        .unsubscribe();

      this.localStorageSvc.addNote(this.currentNote);

      this.clearCurrentNote();
    } catch (error) {
      console.error('Error saving note', error);
    }
  }

  onEditingNote(note: Note): void {
    this.currentNote = note;

    this.editingNote = true;
  }

  onUpdateNote(): void { }

  onDeleteNote(note: Note): void { }
}
