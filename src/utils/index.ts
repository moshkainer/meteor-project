import { Meteor, TableMeteor } from '~/types';

export const getYearMessage = (
  dataByYear: Meteor[] | undefined,
  year: string,
) => `
    Found ${
      dataByYear && dataByYear.length > 0 ? dataByYear?.length : 'No'
    } Meteor${dataByYear?.length !== 1 ? 's' : ''} in ${year}`;

export const getMassMessage = (
  dataByMassAndYear: TableMeteor[] | undefined | false,
  defaultYear: string | undefined,
  mass: string,
  year: string,
) =>
  year &&
  String(year).length === 4 &&
  (!dataByMassAndYear || dataByMassAndYear?.length === 0)
    ? `
        Could Not Find Any Meteors With Mass Larger Than ${mass} in ${
          !defaultYear ? '.. like, EVER!' : year
        }`
    : `
        Found ${dataByMassAndYear && dataByMassAndYear.length} Meteor${
          dataByMassAndYear && dataByMassAndYear.length !== 1 ? 's' : ''
        } With Mass Larger Than ${mass} in ${year}`;
