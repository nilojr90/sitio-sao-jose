import React, { FC, PropsWithChildren } from 'react';
import './SocialIcon.scss';

interface SocialIconProps {
  url: string;
  network?: SocialNetwork;
}

export enum SocialNetwork {
  Link = 'link',
  Whatsapp = 'whatsapp',
  Instagram = 'instagram',
}

const SocialIcon: FC<SocialIconProps> = ({
  url,
  network,
}: PropsWithChildren<SocialIconProps>) => {
  const seletedIcon = network || SocialNetwork.Link;
  return (
    <a className="SocialIcon" href={url}>
      <img src={`./icons/${seletedIcon}.png`} alt="" />
    </a>
  );
};

export default SocialIcon;
