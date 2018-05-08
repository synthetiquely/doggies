import { transformBreeds } from './transformations';

export class Api {
  constructor(url) {
    this.url = url || 'https://dog.ceo/api';
  }

  getBreedsList = async () =>
    fetch(`${this.url}/breeds/list/all`)
      .then(response => response.json().then(json => json.message))
      .then(breeds => transformBreeds(breeds));

  getDoggosByBreed = async breed =>
    fetch(`${this.url}/breed/${breed}/images`).then(response =>
      response.json().then(json => json.message));

  getRandomDoggo = async () =>
    fetch(`${this.url}/breeds/image/random`).then(response =>
      response.json().then(json => json.message));
}
