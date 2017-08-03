export interface Scene {
	[key: string]: {
		image: string;
		hotspots?: Hotspot
	}
}

export interface Hotspot {
	[key: string]: {
		pitch: number;
		yaw: number;
		radius: number,
		distance: number
	}
}
