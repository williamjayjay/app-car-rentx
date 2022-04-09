import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
/* ============ NATIVES E LIBS ============ */

import { StackRoutes } from './stack.routes'
/* ============ COMPONENTS E OTHERS CREATED ============ */

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}