import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', alignSelf: 'center' }}>
        <img
          src='https://blog.brawlstars.com/uploaded-images/_150x150_fit_center-center_90/logo-1.png?mtime=20181211213639'
          alt='brawlstarts'
        />
      </div>
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <input
          onChange={e => {
            setUsername(e.target.value);
          }}
          value={username}
          type='text'
          placeholder='Brawlstars ID'
        />
        <button type='submit'>Make me</button>
      </div>
      <div
        style={{ padding: '4rem 0', alignSelf: 'center', textAlign: 'center' }}
      >
        <img
          src='https://www.starlist.pro/assets/league/League8.png'
          alt='frost'
          style={{ width: '200px' }}
        />
        <h1>Frost</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: '9px',
            justifyContent: 'space-between'
          }}
        >
          <img
            src='https://www.starlist.pro/assets/icon/trophy.png'
            alt='trophies'
            style={{ width: '20px' }}
          />
          <h1>Trophies: 17,115</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: '9px',
            justifyContent: 'space-between'
          }}
        >
          <img
            src='https://www.starlist.pro/assets/icon/Ranking.png'
            alt='Highest Trophies'
            style={{ width: '20px' }}
          />
          <h1>Highest Trophies: 17,115</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: '9px',
            justifyContent: 'space-between'
          }}
        >
          <img
            src='https://www.starlist.pro/assets/club/14.png'
            alt='Club'
            style={{ width: '20px' }}
          />
          <h1>Club: 17,115</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
