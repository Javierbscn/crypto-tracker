import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../interfaces/note';

const MY_NOTES: string = '';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  notes$: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([{id: 0, title: 'hello', description: 'world'}]);

  constructor() {
    this.initialStorage();
    this.getNotes();
  }

  private initialStorage(): void {
    const items = localStorage.getItem(MY_NOTES);
    const parsedItems = items ? JSON.parse(items) : false;

    if (!parsedItems) {
      localStorage.setItem(MY_NOTES, JSON.stringify([]));
    }
  }

  private getNotes() {
    try {
      const items = localStorage.getItem(MY_NOTES);
      const parsedItems = items ? JSON.parse(items) : 'There is not notes';

      this.notes$.next(parsedItems);

      return parsedItems;
    } catch (error) {
      console.error('Error getting notes', error);
    }
  }

  addNote(note: Note): void {
    try {
      const currentNotes = this.getNotes();

      localStorage.setItem(MY_NOTES, JSON.stringify([...currentNotes, note]));

      this.notes$.next([...currentNotes, note]);
    } catch (error) {
      console.error('There was an error saving the note', error);
    }
  }

  editNote(note: Note): void {
    try {
      const currentNotes = this.getNotes();
      const oneNote = currentNotes.find((item: Note) => item.id === note.id);
      const newNote = {
        id: oneNote.id,
        title: note.title,
        description: note.description,
      };

      this.deleteNote(oneNote.id);

      this.addNote(newNote);
    } catch (error) {
      console.error('There was an error editing the note', error);
    }
  }

  deleteNote(id: number): void {
    try {
      const currentNotes = this.getNotes();
      const updatedNotes = currentNotes.filter((item: Note) => item.id !== id);

      localStorage.setItem(MY_NOTES, JSON.stringify([...updatedNotes]));

      this.notes$.next([...updatedNotes]);
    } catch (error) {
      console.error('There was an error deleting the note', error);
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error cleaning LocalStorage', error);
    }
  }
}
