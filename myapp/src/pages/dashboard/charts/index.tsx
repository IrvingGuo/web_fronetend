import React, { useState } from 'react';
import { Line } from '@ant-design/charts';
import { getAllAlbums } from '@/services/ant-design-pro/name';

const albumlist = await getAllAlbums();
console.log(albumlist.data);

const DemoLine: React.FC = () => {
  const [album] = useState(albumlist.data);


  const config = {
    data: album,
    padding: 'auto',
    xField: 'title',
    yField: 'price',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  

  return <Line {...config} />;
};

export default DemoLine;