import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import './tree.css';


export default function Tree({currentTree}) {
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
        <Container>
            <Box>
            {transition ? (
                <div>
                    <img className="tree tree-current" src={`/images/tree${currentImage}.gif`} />
                    <img className="tree tree-next" src={`/images/tree${nextImage}.gif`} />
                </div>
            ) : (
                <img className="tree" src={`/images/tree${currentImage}.gif`} />
            )}
            </Box>
        </Container>
    );
}   