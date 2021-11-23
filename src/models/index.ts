export type Mode = 'light' | 'dark';

export type ActionType = 'INPUT_VALUE' | 'CANCEL' | 'NEGATE' | 'OPERATION' | 'RESULT' | 'PERCENT';
export interface Button {
  label: number;
  type: ActionType;
  color: string;
  span?: number;
  value?: string;
  dti?: string;
}
