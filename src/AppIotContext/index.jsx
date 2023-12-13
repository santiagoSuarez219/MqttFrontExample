import { createContext, useState, useEffect } from "react";
import { useMqtt } from "./useMqtt";

const AppIotContext = createContext();

function AppIotProvider({ children }) {
  const { message, mqttConnect, mqttPublish } = useMqtt("smartgrow/sensores");

  const [temperatura, setTemperatura] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [co2, setCo2] = useState(null);
  const [vaporAgua, setVaporAgua] = useState(null);

  const handleMqttMessage = (data) => {
    const topic = data.topic;
    if (topic === "smartgrow/sensores") {
      data = JSON.parse(data.message);
      setTemperatura(data.temperatura);
      setHumedad(data.humedad);
      setCo2(data.co2);
      setVaporAgua(data.VPD);
    } else if (topic === "smartgrow/actuadores") {
      console.log(data.message);
    }
  };

  useEffect(() => {
    mqttConnect();
  },[])

  useEffect(() => {
    if (message !== null) {
      handleMqttMessage(message);
    }
  },[message])

  return (
    <AppIotContext.Provider
      value={{
        temperatura,
        humedad,
        co2,
        vaporAgua,
        mqttPublish,
      }}
    >
      {children}
    </AppIotContext.Provider>
  );
}

export { AppIotContext, AppIotProvider };