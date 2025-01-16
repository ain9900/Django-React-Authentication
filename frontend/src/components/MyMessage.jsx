import { Box } from "@mui/material";

const MyMessage = ({text}) => {
    return (
        <Box sx={{ 
            backgroundColor: '#69C9AB',
            position:'absolute',
            top:'20px',
            color: '#FFFFFF',
            width: '90%',
            height: '40px',
            padding: '8px',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            {text}
        </Box>
    )
};

export default MyMessage;
