import { useEffect, useState } from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem';
import { Grid } from './NoticeCategoryList.styled';
import axios from 'axios';

export const NoticeCategoryList = () => {
  const [sell, setSell] = useState([]);

  useEffect(() => {
    return async () => {
      const result = await axios.get(
        'https://team-project-petly-backend.onrender.com/api/notices/category/sell',
      );

      setSell(result.data.notices);
    };
  }, []);

  return (
    <Grid>
      {sell.length > 0 &&
        sell.map(item => {
          return <NoticeCategoryItem key={item._id} fetch={item} />;
        })}
    </Grid>
  );
};
