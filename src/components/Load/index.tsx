import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
/* ============ NATIVES E LIBS ============ */

/* ============ COMPONENTS E OTHERS CREATED ============ */

export function Load() {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.colors.main}
      size="large"
      style={{
        flex: 1,
      }}
    />
  );
}
