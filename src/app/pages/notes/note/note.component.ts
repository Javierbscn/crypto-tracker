import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note';

@Component({
  selector: 'app-note',
  template: `<div class="card my-3">
    <div
      class="d-flex flex-wrap justify-content-between align-items-center card-header"
    >
      <h2 class="card-title">{{ note.title | uppercase }}</h2>
      <span>
        <button
          (click)="onEditNote()"
          class="btn btn-sm btn-info m-1"
          data-bs-toggle="modal"
          data-bs-target="#addingANote"
        >
          <img src="/assets/pencil.svg" alt="delete" />
        </button>
        <button (click)="onDeleteNote()" class="btn btn-sm btn-danger m-1">
          <img src="/assets/trash.svg" alt="delete" />
        </button>
      </span>
    </div>
    <div class="card-body">
      <p class="card-text">{{ note.description }}</p>
    </div>
  </div>`,
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note!: Note;
  @Output() editNoteClick = new EventEmitter<Note>();
  @Output() deleteNoteClick = new EventEmitter<Note>();

  onEditNote(): void {
    this.editNoteClick.emit(this.note);
  }
  onDeleteNote(): void {
    this.deleteNoteClick.emit(this.note);
  }
}
