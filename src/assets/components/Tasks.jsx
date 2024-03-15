//QUIERO TRAER LO QUE HAY EN EL LOCAL STORAGE Y PASARLE ESA DATA A MI HIJO SHOWTASk

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Task = ({ lsTasks }) => {
    console.log(typeof(lsTasks));

    return (
        <div>
            {lsTasks ? (
                lsTasks.map((lsTask) => (
                    <Box key={lsTask.id} sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography variant="h3" gutterBottom>
                            {lsTask.nombre}
                        </Typography>
                    </Box>
                ))
            ) : (
                <p>Sorry, no se mostraron tareas</p>
            )}
        </div>
    );
};


export default Task