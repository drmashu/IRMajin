import { Command } from './command';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}
