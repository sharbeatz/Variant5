import { AbstractComponent } from './abstract-component.js';

function createFilmListComponentTemplate() {
    return (
        `
                <div class="movie-list">
            <h2>Список Фильмов</h2>
            <div id="movie-list" class="card-container">
            
            </div>
        </div>
        `
      );
}


export default class FilmListComponent extends AbstractComponent {

  get template() {
    return createFilmListComponentTemplate();
  }

}




