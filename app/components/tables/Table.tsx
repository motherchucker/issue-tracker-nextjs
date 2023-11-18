import { issueStatusColorVariants, statusLabels } from '@/app/lib/constants';
import { Table as RadixTable } from '@radix-ui/themes';
import classNames from 'classnames';
import { Fragment } from 'react';

export type TTableHeader<T> = {
  key: keyof T;
  label: string;
};

type TTableColumnMap<T extends Record<string, any>> = {
  [key in TTableHeader<T>['key']]: key extends keyof T ? T[key] : never;
};

type TTableRow<T extends TTableColumnMap<any>> = {
  [key in keyof T]: T[key];
};

type TTableData<T extends TTableColumnMap<any>> = TTableRow<T>[];

type TTableProps<T extends TTableColumnMap<any>> = {
  headers: TTableHeader<T>[];
  data: TTableData<T>;
};

export default function Table<T extends TTableColumnMap<any>>({
  headers,
  data,
}: TTableProps<T>) {
  return (
    <RadixTable.Root variant="surface">
      <RadixTable.Header>
        <RadixTable.Row>
          {headers.map((header, index) => (
            <RadixTable.ColumnHeaderCell key={index}>
              {header.label}
            </RadixTable.ColumnHeaderCell>
          ))}
        </RadixTable.Row>
      </RadixTable.Header>
      <RadixTable.Body>
        {data.map((row, index) => (
          <RadixTable.Row key={index}>
            {headers.map((header, index) => (
              <Fragment key={index}>
                {index === 0 ? (
                  <RadixTable.RowHeaderCell key={index}>
                    {row[header.key]}
                  </RadixTable.RowHeaderCell>
                ) : (
                  <RadixTable.Cell
                    key={index}
                    className="max-w-xs overflow-hidden truncate"
                    title={row[header.key]}
                  >
                    {header.key === 'status' ? (
                      <div
                        className={classNames(
                          'flex w-fit items-center justify-center rounded-2xl px-3 text-white',
                          issueStatusColorVariants[row[header.key]],
                        )}
                      >
                        {statusLabels[row[header.key]]}
                      </div>
                    ) : (
                      row[header.key]
                    )}
                  </RadixTable.Cell>
                )}
              </Fragment>
            ))}
          </RadixTable.Row>
        ))}
      </RadixTable.Body>
    </RadixTable.Root>
  );
}
