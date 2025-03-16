export interface Todo {
    _id: string;
    title: string;
    completed: boolean;
    userId: string;
  }
  
  export interface AuthState {
    user: string | null;
    token: string | null;
  }
  
  export interface TodoState {
    items: Todo[];
    loading: boolean;
  }
  