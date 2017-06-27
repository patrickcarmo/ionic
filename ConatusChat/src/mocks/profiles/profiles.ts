import { Profile } from './../../models/profile/profile.interface';

const userList: Profile[] = [
    { firstName: 'Patrick', lastName: 'Carmo', email: 'patrick@patrick.com', avatar: 'http://lorempixel.com/210/200/technics', dateOfBirth: new Date()},
    { firstName: 'Tatiana', lastName: 'Carmo', email: 'tatiana@tatiana.com', avatar: 'http://lorempixel.com/210/200/city', dateOfBirth: new Date()},
    { firstName: 'Ozzy', lastName: 'Carmo', email: 'ozzy@ozzy.com', avatar: 'http://lorempixel.com/210/200/sports', dateOfBirth: new Date()},
    { firstName: 'Jhon', lastName: 'Doe', email: 'jhon@jhon.com', avatar: 'assets/img/avatar.png', dateOfBirth: new Date()}
]

export const USER_LIST = userList;