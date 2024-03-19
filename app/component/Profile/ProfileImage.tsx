'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import './ProfileImage.css';
import { useState } from 'react';
import { Modal, Fade } from '@mui/material';

const ProfileImage = () => {
    const photos = [ {'image' : 'prateek.jpeg'}];
    const [open, setOpen]=useState(false);

    const onclickview = () =>{
        setOpen(true);
    }

    const handleclose = () =>{
        setOpen(false);
    }

  return (
    <div>
        <Avatar 
        alt='...' 
        src={(`${photos[0].image}`)} 
        onDoubleClick={(e) => onclickview()}
        className='pic'
        />
        {open && (
                <div onDoubleClick={handleclose}>
                    <Modal className='modal' open={open}>
                        <Fade in={open} timeout={500}>
                            <img
                                src={(`${photos[0].image}`)} 
                                alt='...'
                                style={{ maxHeight: "95%", maxWidth: "95%" }}
                            />
                        </Fade>
                    </Modal>
                </div>
            )}
    </div>
  )
}

export default ProfileImage