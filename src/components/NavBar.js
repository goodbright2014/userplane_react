import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



const NavBar = () => {


    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography gutterBottom variant="h5" component="div">
                    Scene representation 에 대한 탐구
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;