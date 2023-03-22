import React from 'react';

export const Loader = ({ size = 200, color = '#f59256' }) => {
  const randomizer = Math.floor(Math.random() * 1200) + 1;
  console.log(randomizer);

  return (
    <>
      {/*{randomizer > 0 && randomizer <= 200 && <CatLoader size={size} color={color}/>}*/}
      {/*{randomizer > 200 && randomizer <= 400 && <PigLoader size={size} color={color}/>}*/}
      {/*{randomizer > 400 && randomizer <= 600 && <KappiLoader size={size} color={color}/>}*/}
      {/*{randomizer > 600 && randomizer <= 800 && <DogLoader size={size} color={color}/>}*/}
      {/*{randomizer > 800 && randomizer <= 1000 && <FoxLoader size={size} color={color}/>}*/}
      {/*{randomizer > 1000 && randomizer <= 1200 && <GhostLoader size={size} color={color}/>}*/}
    </>
  );
};
