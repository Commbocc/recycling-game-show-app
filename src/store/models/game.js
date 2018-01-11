import moment from 'moment'

export default class Game {
  constructor (data) {
    this.start = moment()
    this.expires = moment(this.start).add(this.constructor.allottedTime, 'seconds').add(1, 'seconds')
    this.setItems(data.items)
  }

  setItems (items) {
    items.forEach((item, index) => {
      item.index = index
    })
    this.items = items
  }

  timeRemaining () {
    return this.expires.diff(moment(), 'seconds')
  }

  isExpired () {
    return (this.timeRemaining() <= 0)
  }

  static get gSheetId () {
    return '1hl3MQb-uOqCHLJG8r-SrXspbLBDbLkPlnhEfA8VBHEQ'
  }

  static gsheetTableUrl (tableId) {
    return `https://spreadsheets.google.com/feeds/list/${this.gSheetId}/${tableId}/public/values?alt=json`
  }

  static get allottedTime () {
    return 5
  }

  static get itemCount () {
    return 10
  }
}
