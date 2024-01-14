'use client';

import UserList from '../_components/user-list';
import { Typography } from 'antd';
import { useAccountType } from '../../_hooks/use-account-type';

const { Title } = Typography;

const Doctor = () => {
  const { isPending, isLoading, data } = useAccountType('doctor');

  if (isPending || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title level={2}>Quản lí bác sĩ</Title>

      <UserList data={data.data} />
    </div>
  );
};

export default Doctor;
