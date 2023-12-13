import React, { useContext } from "react";
import { PiPlant } from "react-icons/pi";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

import { AppIotContext } from "../../AppIotContext";
import SensorData from "../SensorData";

const Card = () => {
  const { temperatura, humedad, co2, vaporAgua, mqttPublish } =
    useContext(AppIotContext);

  const context = {
      topic: "smartgrow/actuadores",
      qos: 0,
      payload: "Encender ventilador",
    };

  return (
    <div className="bg-secondary w-2/5 p-8 flex flex-col shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Sensores</p>
        <PiPlant className="text-green-900 w-8 h-8" />
      </div>
      <SensorData
        parametro="Temperatura"
        icon={WiThermometer}
        iconColor="text-green-900"
        unidades="°C"
        valor={temperatura != null ? temperatura : "Cargando... "}
      />
      <SensorData
        parametro={"Humedad"}
        icon={WiHumidity}
        iconColor="text-blue-900"
        unidades="%"
        valor={humedad != null ? humedad : "Cargando... "}
      />
      <SensorData
        parametro="Dioxido de Carbono"
        icon={MdCo2}
        iconColor="text-red-900"
        unidades="ppm"
        valor={co2 != null ? co2 : "Cargando... "}
      />
      <SensorData
        parametro="Vapor de agua"
        icon={WiRaindrop}
        iconColor="text-blue-900"
        unidades="%"
        valor={vaporAgua != null ? vaporAgua : "Cargando..."}
      />
      <div className="w-full flex justify-end mt-2">
        <button className="p-2 border-2 border-tertiary rounded-lg hover:bg-tertiary hover:text-white" onClick={()=>{
          mqttPublish(context)
        }}>
          Actuador
        </button>
      </div>
    </div>
  );
};

export default Card;
