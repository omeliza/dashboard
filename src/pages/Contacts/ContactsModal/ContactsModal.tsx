import { Modal, Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';
import Input from 'components/Input/Input';
import { addContactSchema } from 'constants/validationSchemas';
import CustomButton from 'components/CustomButton/CustomButton';
import { IContactModal } from 'interfaces/interfaces';
import {
  addContact,
  setCurrentContact,
  setCurrentContactId,
  updateContact,
} from 'redux/slices/contacts/contacts.slice';
import {
  StyledAddIcon,
  StyledForm,
  StyledPaper,
} from 'pages/Contacts/ContactsModal/styles';
import { CencelButton, StyledBtnGroup } from 'components/Modals/styles';

const ContactsModal = () => {
  const isOpen = useAppSelector((state) => state.modal.isContactModalOpen);
  const currentId = useAppSelector((state) => state.contacts.currentId);

  const currentContact = useAppSelector(
    (state) => state.contacts.currentContact,
  );
  const dispatch = useAppDispatch();

  const methods = useForm<IContactModal>({
    mode: 'onBlur',
    resolver: joiResolver(addContactSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const handleClose = () => {
    reset();
    dispatch(toggleContactModal());
    dispatch(setCurrentContactId(undefined));
    dispatch(
      setCurrentContact({
        id: undefined,
        src: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }),
    );
  };

  const cancel = () => {
    reset();
    dispatch(setCurrentContactId(undefined));
    dispatch(
      setCurrentContact({
        id: undefined,
        src: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }),
    );
  };

  const addContactSubmit = (data: IContactModal) => {
    if (!currentId) {
      dispatch(
        addContact({
          src: data.image,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          address: data.address,
        }),
      );
    } else {
      dispatch(
        updateContact({
          id: currentId,
          src: data.src,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          address: data.address,
        }),
      );
    }
    handleClose();
  };

  const changeHandler = (name: string, value: string) => {
    dispatch(
      setCurrentContact({
        ...currentContact,
        [name]: value,
      }),
    );
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <StyledPaper>
        <>
          <Typography variant="h1">
            {currentId ? 'Editing contact' : 'Add new contact'}
          </Typography>
          <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(addContactSubmit)}>
              <Button
                component="label"
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  paddingLeft: 0,
                }}
              >
                <>
                  <StyledAddIcon />
                  <Typography variant="body2">Add photo</Typography>
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    name="image"
                    onChange={(e) => changeHandler('src', e.target.value)}
                  />
                </>
              </Button>
              <Input
                placeholder="First name"
                label="First name"
                type="text"
                name="firstName"
                errorMessage={errors.firstName?.message}
                value={currentContact.firstName}
                changeHandler={(e) =>
                  changeHandler('firstName', e.target.value)
                }
              />
              <Input
                placeholder="Last name"
                label="Last name"
                type="text"
                name="lastName"
                value={currentContact.lastName}
                errorMessage={errors.lastName?.message}
                changeHandler={(e) => changeHandler('lastName', e.target.value)}
              />
              <Input
                placeholder="Email"
                label="Email"
                type="email"
                name="email"
                value={currentContact.email}
                errorMessage={errors.email?.message}
                changeHandler={(e) => changeHandler('email', e.target.value)}
              />
              <Input
                placeholder="Address"
                label="Address"
                type="text"
                name="address"
                value={currentContact.address}
                errorMessage={errors.address?.message}
                changeHandler={(e) => changeHandler('address', e.target.value)}
              />
              <StyledBtnGroup orientation="vertical">
                <CustomButton type="submit">Save</CustomButton>
                <CencelButton variant="text" onClick={cancel} type="reset">
                  Cancel
                </CencelButton>
              </StyledBtnGroup>
            </StyledForm>
          </FormProvider>
        </>
      </StyledPaper>
    </Modal>
  );
};

export default ContactsModal;
