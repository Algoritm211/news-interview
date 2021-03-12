import React, {useState} from 'react';
import UserAvatar from '../../../assets/user.png'
import {CommentType} from "../../../types/types";
import {Button} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {loadComments} from '../../../redux/news-reducer';

type PropsType = {
  comment: CommentType
}

const Comment: React.FC<PropsType> = ({comment}) => {

  const [replyComments, setReplyComments] = useState<Array<CommentType | number>>([])


  const onLoadReplies = async () => {
    if (comment.kids) {
      const replies = await loadComments(comment.kids as Array<number>)
      setReplyComments(replies)
    }
  }

  const repliesBlock = replyComments.map((reply) => {
    if (typeof(reply) !== 'number') {
      return <Comment comment={reply} key={reply.id} />
    }
  })

  return (
    <div className="comment">
      <a className="avatar">
        <img src={UserAvatar} width={45} height={45}/>
      </a>
      <div className="content">
        <a className="author">{comment.by}</a>
        <div className="metadata">
          <span className="date">{new Date(comment.time * 1000).toString().slice(4, 21)}</span>
        </div>
        <div className="text" dangerouslySetInnerHTML={{__html: comment.text}}>
          {/*{comment.text}*/}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
          {comment.kids && <Button onClick={onLoadReplies}>Load Replies</Button>}
          <div className="ui comments">
            {repliesBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
