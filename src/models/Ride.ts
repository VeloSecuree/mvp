
export class Ride {
  id: string;
  name: string;
  date: string; // Keep as string for simplicity with mock data
  distanceKm: number;
  durationMinutes: number;
  avgSpeedKmh: number;
  mapImageUrl: string;

  constructor(
    id: string,
    name: string,
    date: string,
    distanceKm: number,
    durationMinutes: number,
    avgSpeedKmh: number,
    mapImageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.distanceKm = distanceKm;
    this.durationMinutes = durationMinutes;
    this.avgSpeedKmh = avgSpeedKmh;
    this.mapImageUrl = mapImageUrl;
  }

  getFormattedDate(): string {
    return new Date(this.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  getStatsSummary(): string {
    return `${this.distanceKm.toFixed(1)} km, ${this.durationMinutes} min, ${this.avgSpeedKmh.toFixed(1)} km/h`;
  }
}
