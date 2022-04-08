import React, {Component} from 'react'
import './Userplane.css'

import { Box , Card, CardContent , Typography} from "@material-ui/core"

class CourseList extends Component {

    render() { 
        return (
            <div>
                <Card>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>


                <div>
                    <img
                        src="/assets/images/escape.png"  
                        alt='testA' 
                        className="Center"
                        />
                </div>      

                <Card>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>

                <div>
                    <img
                        src="/assets/images/cubic.png"  
                        alt='testA' 
                        className="Center"
                        />
                </div>

                <Card>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>

                <div>
                    <img
                        src="/assets/images/escape.png"  
                        alt='testA' 
                        className="Center"
                        />
                </div>

                <Card>
                    <CardContent>
                
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>

                </Card>





            </div>
  
        )
    }
}
export default CourseList;