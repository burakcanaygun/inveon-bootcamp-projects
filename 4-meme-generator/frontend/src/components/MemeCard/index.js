import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
const MemeCard = ({ id, name, url, box_count, cols, rows }) => {


    return (
        <ImageListItem key={id} cols={cols || 1} rows={rows || 1}>
            <img
                src={url}
                alt={name}
                loading="lazy"
            />
            <ImageListItemBar
                title={name}
                actionIcon={
                    <Link to={`/generator/${id}`} state={{
                        id, box_count
                    }}>
                        <IconButton aria-label="Edit" color={"error"}>
                            <EditIcon />
                        </IconButton>
                    </Link>
                }
            />
        </ImageListItem >
    )
}

export default MemeCard
