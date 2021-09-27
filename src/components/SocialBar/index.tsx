import React, { ReactElement } from 'react';
import './SocialBar.scss';
import SocialIcon, { SocialNetwork } from '../SocialIcon';

function SocialBar(): ReactElement {
  return (
    <div className="SocialBar">
      <SocialIcon
        network={SocialNetwork.Whatsapp}
        url="https://api.whatsapp.com/send?phone=5579998391328&text=Oi"
      />
      <SocialIcon
        network={SocialNetwork.Instagram}
        url="https://www.instagram.com/sitiosaojose_se/"
      />
    </div>
  );
}

export default SocialBar;
