// main.js

import MovieFormComponent from "./view/movie-form-component.js";
import MovieFilterComponent from "./view/movie-filter-component.js";
import FilmsPresenter from "./presenter/films-presenter.js";
import FilmsModel from "./model/films-model.js";
import { render } from "./framework/render.js";

const container = document.querySelector('.container');

// Рендерим форму перед другими компонентами
const addFilmComponent = new MovieFormComponent({
    onClick: handleNewBookButtonClick,
    isWatched: false, // Начальное состояние слайдера
});
render(addFilmComponent, container);

const filmsModel = new FilmsModel();
const filmsPresenter = new FilmsPresenter({
    boardContainer: container,
    filmsModel
});
filmsPresenter.init();

function handleNewBookButtonClick() {
    filmsPresenter.addFilm();
}
