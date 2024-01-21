import { Modal, Typography } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { FormProvider, useForm } from 'react-hook-form';

import Input from 'components/Input/Input';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import SelectBlock from 'pages/Tickets/SelectBlock/SelectBlock';
import { addTicketSchema } from 'constants/validationSchemas';
import { ITicketModal } from 'interfaces/interfaces';
import { toggleTicketModal } from 'redux/slices/modal/modal.slice';
import CustomButton from 'components/CustomButton/CustomButton';
import {
  addTicket,
  setCurrentTicket,
  setCurrentTicketId,
  updateTicket,
} from 'redux/slices/tickets/tickets.slice';
import { ActionPayloadTicketType } from 'redux/slices/tickets/types';
import {
  StyledPaper,
  StyledTicketForm,
} from 'pages/Tickets/TicketModal/styles';
import { CencelButton, StyledBtnGroup } from 'components/Modals/styles';
import { StyledLabel } from 'components/Input/styles';

const TicketModal = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.modal.isTicketModalOpen);
  const currentId = useAppSelector((state) => state.tickets.currentTicketId);
  const currentTicket = useAppSelector((state) => state.tickets.currentTicket);

  const methods = useForm<ITicketModal>({
    mode: 'onBlur',
    resolver: joiResolver(addTicketSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClose = () => {
    reset();
    dispatch(toggleTicketModal());
    dispatch(setCurrentTicketId(undefined));
    dispatch(
      setCurrentTicket({
        id: undefined,
        details: '',
        name: '',
        priority: undefined,
      }),
    );
  };
  const cancel = () => {
    reset();
    dispatch(setCurrentTicketId(undefined));
    dispatch(
      setCurrentTicket({
        id: undefined,
        details: '',
        name: '',
        priority: undefined,
        date: '',
      }),
    );
  };

  const addTicketSubmit = (data: ActionPayloadTicketType) => {
    if (!currentId) {
      dispatch(
        addTicket({
          details: data.details,
          name: data.name,
          date: data.date,
          priority: data.priority,
        }),
      );
    } else {
      dispatch(
        updateTicket({
          id: currentId,
          details: data.details,
          name: data.name,
          priority: data.priority,
          date: data.date,
        }),
      );
    }
    handleClose();
  };

  const changeHandler = (name: string, value: string) => {
    dispatch(
      setCurrentTicket({
        ...currentTicket,
        [name]: value,
      }),
    );
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <StyledPaper>
        <>
          <Typography variant="h1">Add new ticket</Typography>
          <FormProvider {...methods}>
            <StyledTicketForm onSubmit={handleSubmit(addTicketSubmit)}>
              <>
                <Input
                  placeholder="Add description"
                  label="Ticket details"
                  type="text"
                  name="details"
                  value={currentTicket.details}
                  changeHandler={(e) =>
                    changeHandler('details', e.target.value)
                  }
                  errorMessage={errors.details?.message}
                />
                <Input
                  placeholder="Name"
                  label="Customer name"
                  type="text"
                  name="name"
                  value={currentTicket.name}
                  errorMessage={errors.name?.message}
                  changeHandler={(e) => changeHandler('name', e.target.value)}
                />
                <Input
                  type="date"
                  label="Date"
                  placeholder="Date"
                  name="date"
                  min={new Date().toISOString().split('T')[0]}
                  // value={currentTicket.date}
                  errorMessage={errors.date?.message}
                  changeHandler={(e) => changeHandler('date', e.target.value)}
                />
                <StyledLabel>
                  {'Priority'.toUpperCase()}
                  <SelectBlock />
                </StyledLabel>
                {errors.priority && (
                  <Typography variant="overline">
                    {errors.priority.message}
                  </Typography>
                )}
                <StyledBtnGroup orientation="vertical">
                  <CustomButton type="submit">Save</CustomButton>
                  <CencelButton variant="text" onClick={cancel}>
                    Cancel
                  </CencelButton>
                </StyledBtnGroup>
              </>
            </StyledTicketForm>
          </FormProvider>
        </>
      </StyledPaper>
    </Modal>
  );
};

export default TicketModal;
