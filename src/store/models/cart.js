import Game from './game'

export default class Cart {
  constructor (entry) {
    this.color = entry.gsx$color.$t
    this.description = entry.gsx$description.$t
  }

  static get url () {
    return Game.gsheetTableUrl(2)
  }
}
