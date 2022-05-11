import { Component } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { Note } from 'src/app/interfaces/note';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  notes$: Observable<Note[]>;
  currentNote!: Note;
  editingNote: boolean;

  constructor(private localStorageSvc: LocalStorageService) {
    this.notes$ = localStorageSvc.notes$
      .asObservable()
      .pipe(tap((res) => res.sort((noteA, noteB) => noteA.id - noteB.id)));

    this.editingNote = false;

    this.clearCurrentNote();
  }

  private clearCurrentNote(): void {
    this.currentNote = { id: 0, title: '', description: '' };
  }

  onAddNote(): void {
    try {
      this.notes$
        .pipe(
          tap(res => res.map(note => this.currentNote.id = note.id + 1)),
          first()
        )
        .subscribe();

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

  onUpdateNote(): void {
    this.localStorageSvc.editNote(this.currentNote);

    this.onCancelNote();
  }

  onDeleteNote(note: Note): void {
    this.localStorageSvc.deleteNote(note.id);
  }

  onCancelNote(): void {
    this.editingNote = false;

    this.clearCurrentNote()
  }
}
