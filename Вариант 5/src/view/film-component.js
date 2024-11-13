import { AbstractComponent } from './abstract-component.js';

function createFilmComponentTemplate({ bookId, title, status }) {
    return `
        <li id="${bookId}">
            <p>${title}</p>
            <p>${status ? "Просмотрено" : "Не просмотрено"}</p>
            <button class="delete-button">Удалить</button>
        </li>
    `;
}

export default class FilmComponent extends AbstractComponent {
    #handleClick;

    constructor(bookData, onClick) {
        super();
        this.bookData = bookData; 
        this.#handleClick = onClick;
        this.element.addEventListener('click', this.#clickHandler);
    }

    #clickHandler = (evt) => {
        evt.preventDefault();
        this.#handleClick();
    }

    get template() {
        return createFilmComponentTemplate(this.bookData);
    }
}
