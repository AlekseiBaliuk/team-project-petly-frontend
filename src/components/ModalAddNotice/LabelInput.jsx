import { Label, Input } from './ModalAddNotice.styled';
import { ValidationMessage } from './ModalAddNotice.styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledDatePicker } from 'components/UserPage/UserDataItem/UserDataItem.styled';
import styled from 'styled-components';

const StyledModalDatePicker = styled(StyledDatePicker)`
  width: 100%;
  padding-top: 12px !important;
  & input {
    margin-left: 0;
    width: 100%;
    color: ${p => p.theme.colors.inputText};
  }
`;

export const LabelInput = ({ title, name, type, placeholder, formik }) => {
  return (
    <Label>
      {title}
      {(type === 'date' || name === 'birthday') && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledModalDatePicker
            id={name}
            name={name}
            autoOk
            format="DD.MM.YYYY"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            onFocus={name === 'birthday' ? e => (e.target.type = 'date') : null}
          />
        </LocalizationProvider>
      )}
      {name !== 'birthday' && (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          onFocus={name === 'birthday' ? e => (e.target.type = 'date') : null}
        />
      )}
      {formik.touched[name] && formik.errors[name] ? (
        <ValidationMessage>{formik.errors[name]}</ValidationMessage>
      ) : null}
    </Label>
  );
};
