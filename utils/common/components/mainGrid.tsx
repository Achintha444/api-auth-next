import '../../../styles/common.css';

import { Grid } from '../../theme/muiLib';

export default function MainGrid(prop: any) {

    const { children } = prop;

    return (
        <Grid container className='main-grid'>
            <Grid item xs={0} sm={1} md={2} />
            <Grid item className='main-item' xs={12} sm={10} md={8}>
                { children }
            </Grid>
            <Grid item xs={0} sm={1} md={2} />
        </Grid>
    )
}
