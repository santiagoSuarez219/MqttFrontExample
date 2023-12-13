const SensorData = ({ parametro, icon: Icon, iconColor, unidades, valor }) => {
  return (
    <div className="w-full flex justify-between p-1 mt-2">
      <div className="flex items-center">
        <Icon className={`w-8 h-8 ${iconColor}`} />   
        <p className="ml-2 text-lg">{ parametro }</p>
      </div>
      <div className="flex">
        <p className="text-lg">{valor} {unidades }</p>
      </div>
    </div>
  );
};

export default SensorData;
