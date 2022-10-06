import Link from 'next/link';
import React, { useState } from 'react';
import { BASE_PATH } from '../configs/constants';

const Navbar = () => {
  const [utilsAnchor, setUtilsAnchor] = useState();

  return (
    <>
      <div style={{ position: 'sticky', padding: '4px', backgroundColor: '#121212' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', columnGap: '8px' }}>
          <Link href="/">
            Willy Horizont&apos;s Portfolio
          </Link>
          <Link href={`${BASE_PATH}/utils/longlat-to-latlong`}>
            Longlat to Latlong
          </Link>
          <Link href={`${BASE_PATH}/utils/file-url-to-base64`}>
          File Url to Base64
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
