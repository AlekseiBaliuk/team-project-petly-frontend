import {
  SexList,
  SexItem,
  LabelSex,
  InputSex,
} from './ModalAddNotice.styled';
import { ReactComponent as Men } from 'staticImages/icon-men.svg';
import { ReactComponent as Women } from 'staticImages/icon-women.svg';

export const SexLists = () => {
  return (
    <SexList>
      <SexItem>
        <LabelSex>
          <InputSex type="radio" name="sex" value="Male" />
          <Men />
          Male
        </LabelSex>
      </SexItem>
      <SexItem>
        <LabelSex>
          <InputSex type="radio" name="sex" value="Female" />
          <Women />
          Female
        </LabelSex>
      </SexItem>
    </SexList>
  );
};
