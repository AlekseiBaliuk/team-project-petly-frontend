import React from 'react';

import { Input } from './UserDataItem.styled';

export default function UserDataItem({ name, valueUser }) {
  return <Input name={name} valueUser={valueUser} disabled />;
}
