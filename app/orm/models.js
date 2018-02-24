import { fk, many, attr, Model } from 'redux-orm';

export class Group extends Model {
  static modelName = 'Group';

  static fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    series: many('Series'),
    // authors: many('Author', 'books'),
    // publisher: fk('Publisher', 'books'),
  };

  toString() {
    return `Group: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}

export class Series extends Model {
  static modelName = 'Series';

  static fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
  };

  toString() {
    return `Series: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}

export default [
  Group, Series
];
