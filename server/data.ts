let currData: DataPacket = {
  timestamp: 0,
  quality: 0,
  temperature: 0,
  front_left: 0,
  front_right: 0,
  bottom_left: 0,
  bottom_right: 0,
  arm: 0,
  x:0,
  y:0,
  z:0,
  velocity: 0,
  voltage: false,
  voltages: 0,
  current: 0,
  camera1: "foo",
  camera2: "bar",
  camera3: "bax",
  camera4: "qux",
  x_s: 0,
  y_s: 0,
  x_tvoc: 0,
  y_tvoc: 0,
};

export function setData(val: DataPacket) {
  currData = val;
}

export function getData() {
  return currData;
}
