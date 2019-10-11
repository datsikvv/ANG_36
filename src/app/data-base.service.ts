import { Injectable } from '@angular/core';

export class Phrase {
  value: string;
  language: string;
  id: number;
}

const PHRASES: Phrase[] = [
  {value: 'Hello world', language: 'English', id: 1},
  {value: 'Hello world2', language: 'English2', id: 2},
  {value: 'Hello world3', language: 'English3', id: 3 },
  {value: 'Hello world4', language: 'English4', id: 4},
  {value: 'Hello world5', language: 'English5', id: 5}
];

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  private phraseList: Phrase[] = PHRASES;
  getById: any;

  constructor() { }

  getList(): Phrase[] {
    return this.phraseList;
  }

  getById(id: number): Phrase {
    return this.phraseList.find(item => item.id === id);
  }
}
