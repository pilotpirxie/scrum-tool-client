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
        value={selectedColumn}
        onChange={(ev) => onChangeColumn(Number(ev.target.value))}
      >
        <option value="0">Positives</option>
        <option value="1">Negatives</option>
        <option value="2">Actions</option>
      </select>
    </div>
  );
}

export default ColumnSelector;
