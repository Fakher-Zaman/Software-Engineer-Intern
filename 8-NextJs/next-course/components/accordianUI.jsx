'use client'
import { useState } from 'react'

import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react'

const AccordianUI = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className='w-[40rem]'>
            <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    All Users
                </AccordionHeader>
                <AccordionBody>
                    All Users
                </AccordionBody>
            </Accordion>
        </section>
    )
}

export default AccordianUI