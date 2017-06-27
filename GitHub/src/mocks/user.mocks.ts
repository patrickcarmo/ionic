import { User } from './../models/user.interface';

const userList: User[] = [
    {
        name: 'PaulHalliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'I make videos on my favourites technologies. Go Angular!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'paul@paulcom'
    },
    {
        name: 'Patrick',
        company: 'Conatus',
        location: 'Goiânia, BR',
        bio: 'I make videos on my favourites technologies. Go Angular!',
        avatar_url: 'http://i.imgur.com/TzWcihb.png',
        email: 'paul@paulcom'
    }
]

export const USER_LIST = userList;