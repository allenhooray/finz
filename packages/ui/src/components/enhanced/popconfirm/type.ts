export interface PopconfirmProps {
  title: string;
  content?: string;
  buttonText?: {
    confirm?: string;
  }
}

export interface PopconfirmEmits {
  (e: 'confirm'): void;
}