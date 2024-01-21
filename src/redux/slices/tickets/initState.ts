import chrisevans from 'assets/table/chrisevans.png';
import cristianbale from 'assets/table/cristianbale.png';
import henrycavil from 'assets/table/henrycavil.png';
import mattdamon from 'assets/table/mattdamon.png';
import robertdowney from 'assets/table/robertdowney.png';
import samsmith from 'assets/table/samsmith.png';
import steverogers from 'assets/table/steverogers.png';
import tomcruise from 'assets/table/tomcruise.png';
import { ITicketsState } from 'redux/slices/tickets/types';

export const initialState: ITicketsState = {
  list: [
    {
      id: 1,
      src: tomcruise,
      details: 'Contact Email not Linked',
      updated: '1 day ago',
      name: 'Tom Cruise',
      customerDate: '24.05.2019',
      date: 'May 26, 2019',
      time: '6:30 PM',
      priority: 'high',
    },
    {
      id: 2,
      src: mattdamon,
      details: 'Adding Images to Featured Posts',
      updated: '1 day ago',
      name: 'Matt Damon',
      customerDate: '24.05.2019',
      date: 'May 26, 2019',
      time: '8:00 AM',
      priority: 'low',
    },
    {
      id: 3,
      src: robertdowney,
      details: 'When will I be charged this month?',
      updated: '1 day ago',
      name: 'Robert Downey',
      customerDate: '24.05.2019',
      date: 'May 26, 2019',
      time: '7:30 PM',
      priority: 'high',
    },
    {
      id: 4,
      src: cristianbale,
      details: 'Payment not going through',
      updated: '2 days ago',
      name: 'Cristian Bale',
      customerDate: '24.05.2019',
      date: 'May 25, 2019',
      time: '5:00 PM',
      priority: 'normal',
    },
    {
      id: 5,
      src: henrycavil,
      details: 'Unable to add replies',
      updated: '2 days ago',
      name: 'Henry Cavil',
      customerDate: '24.05.2019',
      date: 'May 25, 2019',
      time: '4:00 PM',
      priority: 'high',
    },
    {
      id: 6,
      src: chrisevans,
      details: 'Downtime since last week',
      updated: '3 days ago',
      name: 'Chris Evans',
      customerDate: '23.05.2019',
      date: 'May 25, 2019',
      time: '2:00 PM',
      priority: 'normal',
    },
    {
      id: 7,
      src: samsmith,
      details: 'Referral Bonus',
      updated: '4 days ago',
      name: 'Sam Smith',
      customerDate: '22.05.2019',
      date: 'May 25, 2019',
      time: '11:30 AM',
      priority: 'low',
    },
    {
      id: 8,
      src: steverogers,
      details: 'How do I change my password?',
      updated: '6 days ago',
      name: 'Steve Rogers',
      customerDate: '21.05.2019',
      date: 'May 24, 2019',
      time: '1:00 PM',
      priority: 'normal',
    },
  ],
  currentTicketId: undefined,
  currentTicket: {
    id: undefined,
    details: '',
    name: '',
    priority: '',
    date: '',
  },
  personPriority: '',
  searchedText: '',
  ticketOrder: '',
};
