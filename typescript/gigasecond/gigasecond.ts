const MILLISECOND = 1e3;
const GIGASECOND = 1e9;

class Gigasecond {
  constructor(private _date: Date) {}

  date() {
    return new Date(this._date.getTime() + GIGASECOND * MILLISECOND);
  }
}

export default Gigasecond;
