import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
  // TODO: finish
};

export default props => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};