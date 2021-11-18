import { Button } from '../../models';

type Config = { [K: string]: Button[] };
export const buttons: Config = {
  numbers: [
    { label: 0x037, type: 'INPUT_VALUE', value: '7', color: 'dark' },
    { label: 0x038, type: 'INPUT_VALUE', value: '8', color: 'dark' },
    { label: 0x039, type: 'INPUT_VALUE', value: '9', color: 'dark' },
    { label: 0x034, type: 'INPUT_VALUE', value: '4', color: 'dark' },
    { label: 0x035, type: 'INPUT_VALUE', value: '5', color: 'dark' },
    { label: 0x036, type: 'INPUT_VALUE', value: '6', color: 'dark' },
    { label: 0x031, type: 'INPUT_VALUE', value: '1', color: 'dark' },
    { label: 0x032, type: 'INPUT_VALUE', value: '2', color: 'dark' },
    { label: 0x033, type: 'INPUT_VALUE', value: '3', color: 'dark' },
    { label: 0x030, type: 'INPUT_VALUE', value: '0', color: 'dark', span: 2 },
    { label: 0x002e, type: 'INPUT_VALUE', value: '.', color: 'dark' },
  ],
  operationsHorizontal: [
    { label: 0x043, type: 'CANCEL', color: 'gray' },
    { label: 0x00b1, type: 'NEGATE', value: '-', color: 'gray' },
    { label: 0x025, type: 'PERCENT', color: 'gray' },
  ],
  operationsVertical: [
    { label: 0x00f7, type: 'OPERATION', value: '/', color: 'orange' },
    { label: 0x078, type: 'OPERATION', value: '*', color: 'orange' },
    { label: 0x2013, type: 'OPERATION', value: '-', color: 'orange' },
    { label: 0x002b, type: 'OPERATION', value: '+', color: 'orange' },
    { label: 0x003d, type: 'RESULT', color: 'orange' },
  ],
};
