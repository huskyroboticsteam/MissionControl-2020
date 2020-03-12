let currData: DataPacket = {
  timestamp: 0,
  quality: 0
};

export function setData(val: DataPacket) {
  currData = val;
}

export function getData() {
  return currData;
}
