import React from "react";

import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ExchangeSvg from "../assets/exchange.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from "../assets/car.svg";

//LIFE ABAIXO
import KitchenSvg from "../assets/svgLIFE/kitchen.svg";

import RommSvg from "../assets/svgLIFE/room.svg";

import BathroomSvg from "../assets/svgLIFE/bathroom.svg";

import LivingRoomSvg from "../assets/svgLIFE/living_room.svg";

import OutsideSvg from "../assets/svgLIFE/outside.svg";

import UserSvg from "../assets/svgLIFE/user.svg";

//OTHER DEFAULT
import BroomSvg from "../assets/svgLIFE/broom.svg";
//OTHER DEFAULT

export function getAccessoryIcon(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;

    case "acceleration":
      return AccelerationSvg;

    case "gasoline_motor":
      return GasolineSvg;

    case "turning_diameter":
      return ForceSvg;

    case "electric_motor":
      return EnergySvg;

    case "hybrid_motor":
      return HybridSvg;

    case "exchange":
      return ExchangeSvg;

    case "seats":
      return PeopleSvg;

    //LIFE ABAIXO

    case "outside":
      return OutsideSvg;

    case "kitchen":
      return KitchenSvg;

    case "room":
      return RommSvg;

    case "bathroom":
      return BathroomSvg;

    case "living_room":
      return LivingRoomSvg;

    case "user":
      return UserSvg;

    default:
      return BroomSvg;
  }
}
