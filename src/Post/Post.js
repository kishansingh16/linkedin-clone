import { Avatar } from '@mui/material'
import React,{forwardRef} from 'react';
import "../Post/Post.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from '../InputOption/InputOption';

const Post=forwardRef(({ name, description, message, photoUrl},ref) =>{
  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>

      <div className='post__buttons'>
      <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"/>

      <InputOption Icon={CommentIcon} title="Comment" color="gray"/>

      <InputOption Icon={ShareIcon} title="Like" color="gray"/>

      <InputOption Icon={SendIcon} title="Like" color="gray"/>
      </div>
    </div>
  )
})

export default Post
