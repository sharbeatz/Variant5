// movie-form-component.js

import { AbstractComponent } from './abstract-component.js';

function createMovieFormComponentTemplate({ isWatched = false } = {}) {
    return `
        <div class="movie-form">
            <h2>Добавить Фильм</h2>
            <form id="movie-form">
                <label for="movie-title">Название фильма:</label>
                <input type="text" id="movie-title" placeholder="Например, Начало" required />
                
                <div class="watched-toggle">
                    <label for="movie-status">Отметить как просмотренный:</label>
                    <label class="switch">
                        <input type="checkbox" id="movie-status" ${isWatched ? "checked" : ""}>
                        <span class="slider"></span>
                    </label>
                </div>

                <button type="submit">Добавить Фильм</button>
            </form>
        </div>
    `;
}

export default class MovieFormComponent extends AbstractComponent {
    #handleClick = null;

    constructor({ onClick, isWatched = false } = {}) {
        super();
        this.#handleClick = onClick;
        this.isWatched = isWatched; // Статус просмотра
        this.element.addEventListener('submit', this.#clickHandler);
    }

    #clickHandler = (evt) => {
        evt.preventDefault();
        this.#handleClick();
    }

    get template() {
        return createMovieFormComponentTemplate({ isWatched: this.isWatched });
    }
}
