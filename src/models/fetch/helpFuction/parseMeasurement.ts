function parseMeasurement(measure: string | null) {
  const splitDefault = { value: 1, unit: "unit" };
  if (!measure) {
    return splitDefault;
  }

  let value = 0;
  let unit = "";

  const index = measure.split(" ");
  let doConcat = true;
  for (let i = 0; i < index.length; i++) {
    const bilangan = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (bilangan.some((num) => index[i].includes(num))) {
      value += eval(index[i]);
      doConcat = false;
    } else {
      if (doConcat) {
        unit = `${unit} ${index[i]}`;
      } else {
        doConcat = true;
        unit = index[i];
      }
    }
  }
  unit = unit.trim();
  if (unit[-1] == "s") {
    unit = unit.slice(0, -1);
  }
  return {
    value: value ? value : splitDefault.value,
    unit: unit.length ? unit.toLowerCase() : splitDefault.unit,
  };
}

export default parseMeasurement;
