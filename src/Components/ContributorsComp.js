import { Typography } from '@mui/material';
import React from 'react';
import { primaryClr, secondaryClr } from './colors';

const ContributorsComp = ({
    xClassName,
    xIsOdd,
    xTitle,
    xvalue
}) => {
    return(
        <div className={xClassName} style={{ backgroundColor: xIsOdd ? primaryClr : secondaryClr }} >
            <Typography variant='subtitle2' style={{  fontWeight:'500', color: !xIsOdd ? primaryClr : secondaryClr }} >
                {xTitle}
            </Typography>
            <Typography variant='body1' style={{  fontWeight:'700', color: !xIsOdd ? primaryClr : secondaryClr }} >
                {xvalue}
            </Typography>
        </div>
    )
}

export default ContributorsComp;