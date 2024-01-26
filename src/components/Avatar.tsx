import { Component } from "solid-js";
import {
  Avatar as SolidUiAvatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar";

interface AvatarProps {
  img?: string;
  text: string;
}

const Avatar: Component<AvatarProps> = ({ img, text }) => {
  return (
    <SolidUiAvatar>
      {img && <AvatarImage src={img} />}
      <AvatarFallback>{text}</AvatarFallback>
    </SolidUiAvatar>
  );
};

export default Avatar;
