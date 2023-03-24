import { SexList, SexItem, LabelSex, InputSex } from './ModalAddNotice.styled';
import { ReactComponent as Men } from 'staticImages/icon-men.svg';
import { ReactComponent as Women } from 'staticImages/icon-women.svg';

export const SexLists = ({ formik }) => {
  return (
    <SexList role="group">
      <SexItem>
        <LabelSex>
          <InputSex
            type="radio"
            name="sex"
            value="male"
            onChange={formik.handleChange}
            checked={formik.values.sex === 'male'}
          />
          <Men />
          Male
        </LabelSex>
      </SexItem>
      <SexItem>
        <LabelSex>
          <InputSex
            type="radio"
            name="sex"
            value="female"
            onChange={formik.handleChange}
            checked={formik.values.sex === 'female'}
          />
          <Women />
          Female
        </LabelSex>
      </SexItem>
    </SexList>
  );
};
