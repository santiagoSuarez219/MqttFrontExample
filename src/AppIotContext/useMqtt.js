import { useState, useEffect } from "react";
import mqtt from "mqtt";

const useMqtt = (topic) => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState(null);

  const mqttBrokerUrl = "ws://localhost:8083/mqtt";

  const mqttConnect = () => {
    setClient(mqtt.connect(mqttBrokerUrl));
  };

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        client.subscribe(topic);
        // client.subscribe("smartgrow/actuadores");
        console.log("connection successful");
      });

      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });

      client.on("message", (topic, message) => {
        const data = { topic, message: message.toString() };
        setMessage(data);
        console.log(`received message: ${message} from topic: ${topic}`);
      });
    }
  }, [client]);

  const mqttPublish = (context) => {
    if (client) {
      const { topic, qos, payload } = context;
      client.publish(topic, payload, qos, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        } else {
          console.log("Published successfully");
        }
      });
    }
  };

  return { message, mqttConnect, mqttPublish};
};

export { useMqtt };