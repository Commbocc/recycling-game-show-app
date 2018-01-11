import Game from './game'

export default class Item {
  constructor (entry) {
    this.name = entry.gsx$name.$t
    this.cart = entry.gsx$cart.$t
    this.imageSrc = entry.gsx$imagesrc.$t
    this.answer = null
    this.correct = null
  }

  static get url () {
    return Game.gsheetTableUrl(1)
  }
}
