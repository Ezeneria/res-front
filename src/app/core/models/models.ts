export interface User {
  token?: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    profile: {
      birthday: string;
      state: string
      region: string
      address: string;
      snn: string;
      phone: string,
      avatar: null
    }
  };
}
export interface Question {
  id?: number;
  description: string;
  question: string;
  variant: number;
  image: string;
}

export interface Recommendations {
  title: string;
  description: string;
  question: number;
  variant: number;
}
