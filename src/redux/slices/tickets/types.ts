export interface ITicket {
  id: number | undefined;
  src: string;
  details: string;
  updated: string;
  name: string;
  customerDate: string;
  date: string;
  time: string;
  priority: string;
}

export type ActionPayloadTicketType = Pick<
  ITicket,
  'details' | 'name' | 'priority' | 'date'
>;

export type CurrentTicket = Pick<
  ITicket,
  'id' | 'details' | 'name' | 'priority' | 'date'
>;

export interface ITicketsState {
  list: ITicket[];
  currentTicketId: number | undefined;
  currentTicket: CurrentTicket;
  personPriority: string;
  searchedText: string;
  ticketOrder: string;
}
