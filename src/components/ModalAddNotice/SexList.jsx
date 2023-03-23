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
            value="Male"
            onChange={formik.handleChange}
            checked={formik.values.sex === 'Male'}
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
            value="Female"
            onChange={formik.handleChange}
            checked={formik.values.sex === 'Female'}
          />
          <Women />
          Female
        </LabelSex>
      </SexItem>
    </SexList>
  );
};
