import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { fetchMeteors } from '~/services/api';
import { Meteor, TableMeteor } from '~/types';

type Options = {
  year: string;
  mass: string;
};

function useMeteors({ year, mass }: Options) {
  const { data, isLoading } = useQuery(['meteors'], fetchMeteors);

  const years = useMemo(
    () => data && data.data.map((d: Meteor) => d.year && d.year.slice(0, 4)),
    [data],
  );

  const yearOptions = useMemo(() => {
    if (!years) return [];

    const listYears =
      years && years?.filter((y: string) => y && y.includes(year));

    const listYearsResult: string[] = [];
    listYears.forEach((y: string) => {
      if (listYearsResult.indexOf(y) < 0) {
        listYearsResult.push(y);
      }
    });

    return listYearsResult.sort((a: string, b: string) => {
      if (Number(a) > Number(b)) return -1;
      return 1;
    });
  }, [year, years]);

  const dataByYear = useMemo(
    () =>
      data &&
      data.data
        .filter((d: Meteor) => d.year && d.year.slice(0, 4) === year)
        .sort((a: Meteor, b: Meteor) => {
          if (Number(a.year) > Number(b.year)) return -1;
          return 1;
        }),
    [data, year],
  );

  const defaultYear = useMemo(
    () =>
      data &&
      data.data
        .filter((m: Meteor) => Number(m.mass) > Number(mass))
        .sort((a: Meteor, b: Meteor) =>
          Number(a.year?.slice(0, 4)) > Number(b.year?.slice(0, 4)) ? -1 : 1,
        )[0]
        ?.year?.slice(0, 4),
    [data, mass],
  );

  const dataByMassAndYear: TableMeteor[] | undefined | false = useMemo(
    () =>
      dataByYear &&
      dataByYear.length > 0 &&
      dataByYear
        .filter((d: Meteor) => Number(d.mass) > Number(mass))
        .sort((a: Meteor, b: Meteor) => {
          if (Number(a.mass) > Number(b.mass)) return -1;
          return 1;
        })
        .map((d: Meteor) => ({
          name: d.name,
          mass: d.mass,
          class: d.recclass,
          lat: d.reclat,
          lng: d.reclong,
          year: d.year && d.year.slice(0, 4),
        })),
    [dataByYear, mass],
  );

  return {
    isLoading,
    yearOptions,
    dataByYear,
    dataByMassAndYear,
    defaultYear,
  };
}

export default useMeteors;
