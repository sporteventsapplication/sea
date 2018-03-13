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
      { id: 1, name: 'Anniversaire de kiki',startDate:'2018-01-15 15:00:00',endDate:'2018-01-15 16:00:00',description:'des 2' },
      { id: 2, name: 'Football Goal',startDate:'2018-01-27 14:00:00',endDate:'2018-01-28 17:00:00',description:'des 3' },
      { id: 3, name: 'Apero dans le jardin',startDate:'2018-01-05 11:00:00',endDate:'2018-01-05 15:00:00',description:'des 4' },
      { id: 4, name: 'Jeux videos',startDate:'2018-01-14 15:00:00',endDate:'2018-01-14 15:00:00',description:'des 5' },
      { id: 5, name: 'Couscous paella apericubes',startDate:'2018-01-13 15:00:00',endDate:'2018-01-13 15:00:00',description:'des 6' },
      { id: 6, name: 'Transate piscine rosé',startDate:'2018-01-20 15:00:00',endDate:'2018-01-23 15:00:00',description:'des 7' },
      { id: 7, name: 'Babyfoot cigares' ,startDate:'2018-01-01 15:00:00',endDate:'2018-01-02 15:00:00',description:'des 8'},
      { id: 8, name: 'Cinema' ,startDate:'2018-01-06 15:00:00',endDate:'2018-01-10 15:00:00',description:'des 9'},
      { id: 9, name: 'EVG en australie',startDate:'2018-01-04 15:00:00',endDate:'2018-01-04 17:00:00',description:'des 10' },
      { id: 10, name: 'Telefilm arte' ,startDate:'2018-01-30 09:00:00',endDate:'2018-01-30 09:30:00',description:'des 11'}
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