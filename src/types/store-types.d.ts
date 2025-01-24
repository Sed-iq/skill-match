interface NavStore {
  current_select: number;
  setSelection: (index: number) => void;
}
interface AuthSlide {
  current_slide: number;
  forward: () => void;
  backward: () => void;
}

interface SigninInputStore {
  full_name: string;
  email: string;
  password: string;
  password_again: string;
  setFullName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setPasswordAgain: (value: string) => void;
}
