import { useMutation } from "react-query";
import { removePost } from "../../../api/services";
import { useState } from "react";
import UpdatePost from "../UpdatePost/UpdatePost";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Post = ({ post }) => {
  const [showFormUpdate, setShowFormUpdate] = useState(false);

  const {
    mutate: removePostId,
    status: removeStatus,
    error: removeError,
  } = useMutation((id) => removePost(id));


  return (
    <>
      
      {removeStatus === "loading" && <p>Removing...</p>}
      {removeStatus === "success" && <p>Removed. </p>}
      {removeStatus === "error" && <p>Error: {removeError} </p>}
      {
        <Grid key={post.id} item xs={12} sm={6} md={4} lg={3}>
          {/* <Item style={{height: "100%"}}> */}
            <Card sx={{ maxWidth: 345, height: "100%"}}>
              <CardContent style={{minHeight: "290px", textOverflow: "ellipsis", overflow: "hidden"}}>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => removePostId(post.id)}>Delete</Button>
                <Button size="small" onClick={() => setShowFormUpdate(!showFormUpdate)}>Update</Button>
              </CardActions>
              {showFormUpdate && <UpdatePost id={post.id} />}

            </Card>
        </Grid>
      }
    </>
  );
};

export default Post;
