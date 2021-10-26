import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
    margin-left: 10vw;
    padding-top: 5vh;
    top: 2em;
`
const Heading = styled.h2``
const Explanation = styled.p`
    width: 60%;
`


const About = () => (
    <Box>
        <Heading>
            Brewery List Page
        </Heading>
    <Explanation>
        Brewery List Page is Lists of a brewery in United States.
        The Goal of this website is to provide brewery information for the user.
        Since this list provides local to large brewing company, some of the brewery does not have enough information.
        Please support your local brewery and ENJOY!
    </Explanation>
    </Box>
)

export default About