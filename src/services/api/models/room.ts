export interface RoomCreated<T = 1673272877> {
  id: string;
  name: string;
  api_created: true;
  privacy: 'public' | 'private';
  url: string;
  created_at: string;
  config: {
    exp: T;
  };
}
