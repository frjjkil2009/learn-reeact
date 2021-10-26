import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'V-Poem',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/d/c/7/1dc74a897eadae21c7e57a6403272c20.jpg'
    },
    {
      id: 2,
      name: 'Viral-Hits',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/9/2/7/39276923fe8e5cbf55b7ad88920108d1.jpg'
    },
    {
      id: 3,
      name: 'Gia Vị Rap Việt',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/3/1/5/d3151304120a054dc2d56ad41f0389bc.jpg'
    },
    {
      id: 4,
      name: 'K-Pop Hits',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/8/e/0/28e06ab1219f6defb25d271cd4c966ee.jpg'
    }
  ]
  return (
    <div>
      <h2>Lựa Chọn Hôm Nay</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;