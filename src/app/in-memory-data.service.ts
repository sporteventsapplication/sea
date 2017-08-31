import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Jean marc Lassute' },
      { id: 1, name: 'Andre Francis' },
      { id: 2, name: 'Narco de la mocha' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas de la fristas de la muerte' },
      { id: 5, name: 'Magneta coucoule' },
      { id: 6, name: 'RubberMan lepige' },
      { id: 7, name: 'Dynama kukoulea' },
      { id: 8, name: 'Dr IQ savate' },
      { id: 9, name: 'Magma feufeu' },
      { id: 10, name: 'Tornado couicouic' }
    ];

    const events = [
      { id: 0, name: 'Pot entre amis' },
      { id: 1, name: 'Anniversaire de kiki' },
      { id: 2, name: 'Football Goal' },
      { id: 3, name: 'Apero dans le jardin' },
      { id: 4, name: 'Jeux videos' },
      { id: 5, name: 'Couscous paella apericubes' },
      { id: 6, name: 'Transate piscine rosé' },
      { id: 7, name: 'Babyfoot cigares' },
      { id: 8, name: 'Cinema' },
      { id: 9, name: 'EVG en australie' },
      { id: 10, name: 'Telefilm arte' }
    ];

    return {users,events};
  }
}