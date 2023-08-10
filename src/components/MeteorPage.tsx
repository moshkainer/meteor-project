import { styled } from '@mui/material/styles';
import { useState } from 'react';
import useMeteors from '~/hooks/useMeteors';
import { getYearMessage, getMassMessage } from '~/utils';
import Autocomplete from './Autocomplete';
import Button from './Button';
import Input from './Input';
import Table from './Table';
import Text from './Text';

const PageWrapper = styled('div')`
  font-family: Courier, sans-serif;
  width: calc(100% - 48px);
  height: calc(100vh - 48px);
  background: #282c34;
  padding: 24px;
`;

const FlexWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin: 4px 0;
`;

const InputWrapper = styled('div')`
  position: relative;
  width: 80px;
`;

const Title = styled('div')`
  font-size: 36px;
  color: #fff;
  margin-bottom: 16px;
`;

function MeteorPage() {
  const [year, setYear] = useState<string>('');
  const [mass, setMass] = useState<string>('');

  const { yearOptions, dataByYear, dataByMassAndYear, defaultYear } =
    useMeteors({
      year,
      mass,
    });

  return (
    <PageWrapper>
      <Title>Meteors</Title>

      <FlexWrapper>
        <Text text="Filter by year:" />
        <InputWrapper>
          <Input name="year" value={year} onChange={setYear} />
          {String(year).length < 4 &&
            year !== '' &&
            yearOptions?.length > 0 && (
              <Autocomplete filterOptions={yearOptions} onChange={setYear} />
            )}
        </InputWrapper>
      </FlexWrapper>

      <FlexWrapper>
        {!!year && String(year)?.length === 4 && (
          <Text text={getYearMessage(dataByYear, year)} />
        )}

        {defaultYear !== undefined &&
          !!year &&
          String(year).length === 4 &&
          (!dataByYear || dataByYear.length === 0) && (
            <Button
              buttonText={`Try ${defaultYear}`}
              buttonAction={setYear}
              buttonActionValue={defaultYear}
            />
          )}
      </FlexWrapper>

      <FlexWrapper>
        {!!year &&
          String(year).length === 4 &&
          !!dataByYear &&
          dataByYear.length > 0 && <Text text="Filter by mass:" />}
        {!!year &&
          String(year).length === 4 &&
          !!dataByYear &&
          dataByYear.length > 0 && (
            <InputWrapper>
              <Input name="mass" value={mass} onChange={setMass} />
            </InputWrapper>
          )}
      </FlexWrapper>

      <FlexWrapper>
        {mass !== '' &&
          !!year &&
          String(year)?.length === 4 &&
          !!dataByYear &&
          !!(dataByYear.length > 0) && (
            <Text
              text={getMassMessage(dataByMassAndYear, defaultYear, mass, year)}
            />
          )}

        {defaultYear !== undefined &&
          !!year &&
          String(year).length === 4 &&
          dataByYear &&
          dataByYear.length > 0 &&
          (!dataByMassAndYear || dataByMassAndYear.length === 0) && (
            <Button
              buttonText={`Try ${defaultYear}`}
              buttonAction={setYear}
              buttonActionValue={defaultYear}
            />
          )}
      </FlexWrapper>

      <Table year={year} mass={mass} excludedFields={['year']} />
    </PageWrapper>
  );
}

export default MeteorPage;
