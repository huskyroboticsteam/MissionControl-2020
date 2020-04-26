interface DataPacket {
    timestamp: number;
    quality: number;
    temperature: number;
    x:number;
    y:number;
    z:number;
    velocity: number;
    voltage: boolean;
    voltages: number;
    current: number;
    front_left: number;
    front_right: number;
    bottom_left: number;
    bottom_right: number;
    arm: number;
    camera1: string;
    camera2: string;
    camera3: string;
    camera4: string;
}

export default DataPacket;