import { fk, many, attr, Model } from 'redux-orm';

export class Group extends Model {
  static modelName = 'Group';

  static fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    series: many('Series')
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
    name: attr()
  };

  toString() {
    return `Series: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}

export class GroupFilter extends Model {
  static modelName = 'GroupFilter';

  static fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    size: attr(),
    type: attr(),
    url: attr(),
    parent: fk('GroupFilter'),
    groups: many('Group')
  };

  toString() {
    return `GroupFilter: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}

export class RecentFile extends Model {
  static modelName = 'RecentFile';

  static fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    size: attr(),
    type: attr(),
    url: attr()
  };

  toString() {
    return `RecentFile: ${this.name}`;
  }
  // Declare any static or instance methods you need.
}

export default [Group, Series, GroupFilter, RecentFile];
