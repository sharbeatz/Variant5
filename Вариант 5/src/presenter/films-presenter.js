import Observable from '../framework/observable.js';
import FilmListComponent from '../view/film-list-component.js';
import FilmComponent from '../view/film-component.js';
import { render } from '../framework/render.js';
import MovieFormComponent from '../view/movie-form-component.js';
import MovieFilterComponent from '../view/movie-filter-component.js';

export default class FilmsPresenter {
    #filmsModel;
    #boardContainer;
    #filmListComponent = new FilmListComponent();
    #movieFilter = new MovieFilterComponent();
    

    constructor({ boardContainer, filmsModel }) {
        this.#boardContainer = boardContainer;
        this.#filmsModel = filmsModel;
        this.#filmsModel.addObserver(this.#handleModelChange.bind(this));
    }

    #handleModelChange() {
        this.#clearBoard();
        this.#renderBoard();
    }

    #clearBoard() {
        this.#filmListComponent.element.innerHTML = '';
    }

    init() {
        this.#renderBoard();
    }

    #renderMovieFilter() {
        render(this.#movieFilter, this.#boardContainer);
    }

    #renderBoard() {
        this.#renderMovieFilter();
        render(this.#filmListComponent, this.#boardContainer);
        this.#filmsModel.films.forEach(film => {
            render(new FilmComponent({
                id: film.id,
                title: film.title,
                status: film.status
            },
            () => this.deleteFilm(film.id) 
            ),
            this.#filmListComponent.element);
        });
    }

    deleteFilm(id) {
        this.#filmsModel.deleteFilmById(id);
    }
    addFilm() {
      const movieTitle = document.querySelector("#movie-title").value.trim();
      const movieStatusElement = document.querySelector("#movie-status"); 
      
 
      const movieStatus = movieStatusElement.checked;
  

      this.#filmsModel.addNewFilm(movieTitle, movieStatus);
  
   
      document.querySelector("#movie-title").value = '';
      movieStatusElement.checked = false; 
  }
  
  
}
