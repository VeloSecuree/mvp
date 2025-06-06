
export interface User {
  id: string;
  email: string;
  name: string;
}

// Bike and Ride interfaces are removed, will be classes in their own files.

export enum AuthStatus {
  LOADING,
  AUTHENTICATED,
  UNAUTHENTICATED,
}
