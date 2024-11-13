import Observable from '../framework/observable.js';
import { films } from '../mock/films.js';
import { generateId } from '../utils.js';

export default class FilmsModel extends Observable {
  #filmsBoard = films;

  get films() {
    return this.#filmsBoard;
  }
  
  addNewFilm(filmTitle, status) {
    const newFilm = {
      id: generateId(),
      title: filmTitle,
      status,
    };
    
    this.#filmsBoard.push(newFilm);
    this._notify(); // оповещаем об изменениях
    return newFilm;
  }

  deleteFilmById(filmId) {
    this.#filmsBoard = this.#filmsBoard.filter(film => film.id !== filmId);
    this._notify(); // оповещаем об изменениях
  }
}
