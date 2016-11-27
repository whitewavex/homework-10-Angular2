import { Injectable } from '@angular/core';
import { Author } from './author';

@Injectable()
export class AuthorsService {

  authors: Author[] = [
    {id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: 92998-3874,
        geo: {
            lat: -37.3159,
            lng: 81.1496
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }}, {id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Wisokyburgh',
        zipcode: 92998-3874,
        geo: {
            lat: -37.3159,
            lng: 81.1496
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }}, {id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'McKenziehaven',
        zipcode: 92998-3874,
        geo: {
            lat: -37.3159,
            lng: 81.1496
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }}
  ];

  getAuthors(): Author[]{
    return this.authors;
  }

}
