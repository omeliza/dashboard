import CustomListItem from 'components/Sidebar/CustomListItem/CustomListItem';
import Logo from 'components/Logo/Logo';
import { StyledBox, StyledList } from 'components/Sidebar/styles';
import OverviewIcon from 'components/Icons/OverviewIcon';
import TicketsIcon from 'components/Icons/TicketsIcon';
import ContactsIcon from 'components/Icons/ContactsIcon';
import { PATHS } from 'constants/paths';

const listItems = [
  { index: 0, name: 'Overview', link: PATHS.overview, icon: <OverviewIcon /> },
  { index: 1, name: 'Tickets', link: PATHS.tickets, icon: <TicketsIcon /> },
  { index: 2, name: 'Contacts', link: PATHS.contacts, icon: <ContactsIcon /> },
];

const SideBar = () => (
  <StyledBox>
    <Logo size="small" />
    <StyledList>
      {listItems.map(({ icon, index, link, name }) => (
        <CustomListItem itemIndex={index} name={name} link={link} key={index}>
          {icon}
        </CustomListItem>
      ))}
    </StyledList>
  </StyledBox>
);

export default SideBar;
