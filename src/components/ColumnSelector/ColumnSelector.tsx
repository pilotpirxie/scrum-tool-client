function ColumnSelector({
  selectedColumn,
  onChangeColumn,
}: {
  selectedColumn: number;
  onChangeColumn: (column: number) => void;
}) {
  return (
    <div>
      <select
        className="form-select"
        onChange={(ev) => onChangeColumn(Number(ev.target.value))}
      >
        <option selected={selectedColumn === 0} value="0">
          Positives
        </option>
        <option selected={selectedColumn === 1} value="1">
          Negatives
        </option>
        <option selected={selectedColumn === 2} value="2">
          Actions
        </option>
      </select>
    </div>
  );
}

export default ColumnSelector;
