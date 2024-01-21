import { MyButton } from 'components/CustomButton/styles';
import { IButtonProps } from 'interfaces/interfaces';

const CustomButton = ({ children, type }: IButtonProps) => (
  <MyButton type={type}>{children}</MyButton>
);

export default CustomButton;
