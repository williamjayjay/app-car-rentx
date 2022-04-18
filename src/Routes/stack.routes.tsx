import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
/* ============ NATIVES E LIBS ============ */

const { Navigator, Screen } = createStackNavigator();
import { Home } from "../screens/Home";
import { StatusScreenLIFE } from "../screens/StatusScreenLIFE";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { MyCars } from "../screens/MyCars";
import { AcceptService } from "../screens/AcceptService";
/* ============ COMPONENTS E OTHERS CREATED ============ */

export function StackRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="StatusScreenLIFE" component={StatusScreenLIFE} />
      <Screen name="CarDetails" component={CarDetails} />

      <Screen name="Scheduling" component={Scheduling} />

      <Screen name="SchedulingDetails" component={SchedulingDetails} />

      <Screen name="SchedulingComplete" component={SchedulingComplete} />

      <Screen name="MyCars" component={MyCars} />

      {/* LIFEQQQ */}
      <Screen name="AcceptService" component={AcceptService} />
    </Navigator>
  );
}
