import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { useEffect, useState } from 'react';
import './tree.css';

const DIMENTIONS = {
    h: '300px',
    w: '300px' 
}

export default function Tree({currentTree, progress}) {
    const [currentImage, setCurrentImage] = useState(currentTree);
    const [nextImage, setNextImage] = useState(null);
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        if (currentTree !== currentImage) {
        setNextImage(currentTree);
        setTransition(true);
        }
    }, [currentTree, currentImage]);

    useEffect(() => {
        if (transition) {
        setTimeout(() => {
            setCurrentImage(nextImage);
            setNextImage(null);
            setTransition(false);
        }, 3000);
        }
    }, [transition, nextImage]);

    console.log('current', currentImage, 'next', nextImage);

    return (
        <Container sx={{ alignItems: 'center'}} maxWidth='sm'>
            <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'center'    }}>
                <Box sx={{ height: DIMENTIONS.h, width: DIMENTIONS.w}}>
                    {transition ? (
                        <>   
                            <img alt="I's a tree bro" sx={{height: '200px'}} className="tree tree-current" src={`/images/tree_${currentImage}.gif`} />
                            <img alt="I's a tree bro" className="tree tree-next" src={`/images/tree_${nextImage}.gif`} />
                        </>
                    ) : (
                        <img alt="I's a tree bro" className="tree" src={`/images/tree_${currentImage}.gif`} />
                    )}
                </Box>
                <Box>
                    <LinearProgressWithLabel sx={{height: '20px', width: DIMENTIONS.w}} value={progress} />
                </Box>
            </Box>
        </Container>
    );
}

