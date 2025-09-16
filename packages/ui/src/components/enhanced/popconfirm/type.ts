export interface PopconfirmProps {
  title: string;
  content?: string;
}

export interface PopconfirmEmits {
  (e: 'confirm'): void;
}