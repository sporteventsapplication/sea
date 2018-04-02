import { User } from '../users/user';

export class Event  {
    constructor(
        public id:number,
        public name: string,
        public startDate: string,
        public endDate : string,
        public description : string,
        public users:User[]){}
    
}