import Style from './CardList.module.scss';

/**
 * Card list props
 */
type CardListProps = {
  th: { label: string; colSpan?: number }[];
  td: string[][];
  title: string;
};

/**
 * Card list component
 * @param {CardListProps} props
 * @returns {Object} component
 */
const CardList = ({ th, td, title }: CardListProps) => {
  return (
    <>
      <div className={Style.cardList}>
        <h3 className={Style.title}>{title}</h3>
        <table className={Style.table} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              {th.map(({ label, colSpan = 1 }, index) => (
                <th colSpan={colSpan} key={`ith-${index}`} className={Style.th}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {td.map((items, index) => (
              <tr key={`itdr-${index}`} className={Style.tr}>
                {items.map((value, indexTd) => (
                  <td key={`itdd-${indexTd}`} className={Style.td}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardList;
