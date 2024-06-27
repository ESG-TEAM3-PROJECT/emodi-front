"use client";

import Image from "next/image";
import styled from "styled-components";

export type IconProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconName?: any;
  width?: number;
  height?: number;
};

const IconComponent = styled(Image)<IconProps>``;

const Icon = (props: IconProps) => {
  const { iconName, width = 30 } = props;

  const iconPath = `/icon/${iconName}.svg`;

  return (
    <IconComponent
      src={iconPath}
      alt={`${iconName}`}
      width={0}
      height={0}
      style={{ width, height: "auto" }}
    />
  );
};

export default Icon;
