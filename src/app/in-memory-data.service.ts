import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  name: 'Zero' },
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ];

    const events = [
      { id: 0, name: 'Event 1' },
      { id: 1, name: 'Event 2' },
      { id: 2, name: 'Event 3' },
      { id: 3, name: 'Event 4' },
      { id: 4, name: 'Event 5' },
      { id: 5, name: 'Event 6' },
      { id: 6, name: 'Event 7' },
      { id: 7, name: 'Event 8' },
      { id: 8, name: 'Event 9' },
      { id: 9, name: 'Event 10' },
      { id: 10, name: 'Event 11' }
    ];

    return {users,events};
  }
}