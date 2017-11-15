import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
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
      { id: 1, name: 'Anniversaire de kiki',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 2' },
      { id: 2, name: 'Football Goal',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 3' },
      { id: 3, name: 'Apero dans le jardin',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 4' },
      { id: 4, name: 'Jeux videos',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 5' },
      { id: 5, name: 'Couscous paella apericubes',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 6' },
      { id: 6, name: 'Transate piscine rosé',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 7' },
      { id: 7, name: 'Babyfoot cigares' ,startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 8'},
      { id: 8, name: 'Cinema' ,startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 9'},
      { id: 9, name: 'EVG en australie',startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 10' },
      { id: 10, name: 'Telefilm arte' ,startDate:'2017-09-27 15:00:00',endDate:'2017-09-28 15:00:00',description:'des 11'}
    ];

    const usersofevent = {
      "participants":[
      { id: 3, name: 'Bombasto' },   
      { id: 6, name: 'RubberMan lepige' },    
      { id: 9, name: 'Magma feufeu' },
      { id: 10, name: 'Tornado couicouic' }
    ],
    "noparticipants":[
      { id: 1, name: 'Andre Francis' },
      { id: 2, name: 'Narco de la mocha' },
      { id: 4, name: 'Celeritas de la fristas de la muerte' },
      { id: 5, name: 'Magneta coucoule' },
      { id: 7, name: 'Dynama kukoulea' },
      { id: 8, name: 'Dr IQ savate' },
    ]};
    

    return {users,events,usersofevent};
  }
}