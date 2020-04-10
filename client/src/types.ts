interface DataPacket {
    timestamp: number;
    quality: number;
    temperature: number;
    x:number;
    y:number;
    z:number;
    velocity: number;
    voltage: boolean;
    latitude: number;
    longitude: number;
}

export default DataPacket;