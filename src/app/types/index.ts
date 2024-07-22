export interface Film {
  episode_id: number;
  title: string;
  [key: string]: any; // Jika ada properti lain yang tidak diketahui
}
