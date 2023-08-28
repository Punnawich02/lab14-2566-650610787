"use client";

import { Text } from "@mantine/core";

export const Footer = (props) => {
  return (
    <div>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 {props.name} {props.stuid}
      </Text>
    </div>
  );
};
