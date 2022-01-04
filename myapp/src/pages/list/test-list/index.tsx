import { getAllAlbums } from '@/services/ant-design-pro/name';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Artist',
    dataIndex: 'artist',
    key: 'artist',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];
const albumlist = await getAllAlbums()
console.log(albumlist)

export default () => {
  return (
    <Table key="id" columns={columns} dataSource={albumlist.data} />
  )
}
