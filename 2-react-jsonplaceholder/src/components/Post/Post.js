import React, {useState} from 'react';
import {Card, Columns, Content, Heading, Image, Media} from "react-bulma-components";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getSelectedPostAsync, getSinglePostCommentsAsync} from "../../features/posts/postsAPI";
import {deleteSinglePost, modalOpen} from "../../features/posts/postsSlice";

const Post = ({userId, id, title, body}) => {
    const [imageUrl, setImageUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');


    const dispatch = useDispatch();
    // grab isOpen from the store
    const isOpen = useSelector(state => state.posts.isOpen);

    // before open modal, get post data with comments
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getSelectedPostAsync(id));
        dispatch(getSinglePostCommentsAsync(id));
        dispatch(modalOpen(!isOpen));
    }

    // delete single post on click
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteSinglePost(id));
    }

    // get image url from API and set it to state
    (async () => {
        try {
            const res = id && await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
            setImageUrl(res.data.url);
            setThumbnailUrl(res.data.thumbnailUrl);
        } catch (error) {
            console.log(error.response.body);
        }
    })();
    
    return (
        <Columns.Column size={4}>
        <Card style={{ height: '100%' }}>
            <Card.Image
                size="4by3"
                src={imageUrl}
            />
            <Columns.Column>
            <Card.Content>
                <Media>
                    <Media.Item renderAs="figure" align="left">
                        <Image
                            size={64}
                            alt="64x64"
                            src={thumbnailUrl}
                        />
                    </Media.Item>
                    <Media.Item>
                        <Heading size={4}>{title}</Heading>
                    </Media.Item>
                </Media>
                <Content>
                    {body}
                </Content>
                <Columns.Column>
                    <Card.Footer>
                        <a href={'!#'} className={'card-footer-item'} onClick={(e) => handleClick(e)}>Show more</a>
                        <a href={'!#'} className={'card-footer-item'} onClick={(e) => handleDelete(e)}>Delete</a>
                    </Card.Footer>
                </Columns.Column>

            </Card.Content>
            </Columns.Column>
        </Card>
        </Columns.Column>
    );
};

export default Post;
