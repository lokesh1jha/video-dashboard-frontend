import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const dummyData = [
  {
    key: '1',
    serialNumber: '1',
    videoName: 'Video 1',
    uploadedAt: '2024-02-28',
    status: 'Processed',
  },
  {
    key: '2',
    serialNumber: '2',
    videoName: 'Video 2',
    uploadedAt: '2024-02-27',
    status: 'Processing',
  },
  {
    key: '3',
    serialNumber: '3',
    videoName: 'Video 3',
    uploadedAt: '2024-02-26',
    status: 'Pending',
  },
];

function History() {
  return (
    <Table dataSource={dummyData} pagination={false}>
      <Column title="S.no." dataIndex="serialNumber" key="serialNumber" />
      <Column title="Name of Video" dataIndex="videoName" key="videoName" />
      <Column title="Uploaded At" dataIndex="uploadedAt" key="uploadedAt" />
      <Column title="Status" dataIndex="status" key="status" />
    </Table>
  );
}

export default History;
