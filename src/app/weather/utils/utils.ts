import { IMPERIAL_UNIT, METRIC_UNIT } from '../constants';

export const getUnitStrings = (unitType: string) => {
  return unitType === 'imperial' ? IMPERIAL_UNIT : METRIC_UNIT;
};
