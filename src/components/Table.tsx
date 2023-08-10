import { styled } from '@mui/material/styles';
import useMeteors from '~/hooks/useMeteors';
import { TableType, TableMeteor } from '~/types';

const TableCellWidths = [20, 220, 180, 140, 110, 110];

const TableWrapper = styled('div')`
  padding: 4px;
  width: 800px;
  border: 1px solid gray;
`;

const TableHeader = styled('div')`
  display: flex;
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid gray;
`;

const TableBody = styled('div')`
  display: flex;
  flex-direction: column;
`;

const TableRow = styled('div')`
  display: flex;
  font-size: 13px;
  color: #fff;
  padding: 3px 0;
`;

const TableCell = styled('div')<{ width: number }>`
  width: ${({ width }) => width}px;
`;

const MeteorNum = styled('div')`
  width: 20px;
`;

function Table({ year, mass, excludedFields = [] }: TableType) {
  const { dataByMassAndYear } = useMeteors({ year, mass });

  if (!dataByMassAndYear || dataByMassAndYear?.length === 0 || mass === '')
    return null;

  return (
    <TableWrapper>
      <TableHeader>
        <TableRow>
          <TableCell width={TableCellWidths[0]} />
          {Object.keys(dataByMassAndYear[0]).map((key: string, i: number) =>
            excludedFields.includes(key) ? null : (
              <TableCell key={`${i + 1}`} width={TableCellWidths[i + 1]}>
                {key}
              </TableCell>
            ),
          )}
        </TableRow>
      </TableHeader>

      <TableBody>
        {dataByMassAndYear.map((meteor: TableMeteor, i: number) => (
          <TableRow key={`${i + 1}`}>
            <MeteorNum>{i + 1}</MeteorNum>
            {Object.entries(meteor).map((obj: [string, string], j: number) =>
              excludedFields.includes(obj[0]) ? null : (
                <TableCell key={`${j + 1}`} width={TableCellWidths[j + 1]}>
                  {obj[1]}
                </TableCell>
              ),
            )}
          </TableRow>
        ))}
      </TableBody>
    </TableWrapper>
  );
}
export default Table;
