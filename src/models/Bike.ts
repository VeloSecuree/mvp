
export class Bike {
  id: string;
  name: string;
  model: string;
  color: string;
  currentLocation: {
    address: string;
    lastSeen: string;
  };
  imageUrl: string;

  constructor(
    id: string,
    name: string,
    model: string,
    color: string,
    currentLocation: { address: string; lastSeen: string },
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.color = color;
    this.currentLocation = currentLocation;
    this.imageUrl = imageUrl;
  }

  getDisplayTitle(): string {
    return `${this.name} (${this.model})`;
  }

  getLastSeenInfo(): string {
    return `Last seen: ${this.currentLocation.lastSeen}`;
  }
}
