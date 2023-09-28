import { useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import { ContextApp } from "../../Context";
import { SendIcon } from "../Icons";
import { LazyLoadingImg } from "../../Utils/LazyLoading";
import "./styles.css";

function CardFooter({ id }) {
  const { handleComment } = useContext(ContextApp);
  const [textComment, setTextComment] = useState("");

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleCommentCallback = useCallback(
    (id, textComment) => {
      handleComment(id, textComment);
      setTextComment("");
    },
    [handleComment]
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && textComment.trim()) {
      handleCommentCallback(id, textComment);
    }
  };

  return (
    <div className="add-comment-container">
      <picture className="avatar-user">
        <LazyLoadingImg
          src="https://raw.githubusercontent.com/Jhonatan2022/BLOG-TEMPLATE/main/Blog-RH/Assets/Alejandro.jpg"
          alt="avatar"
          title="avatar"
        />
      </picture>
      <input
        type="text"
        className="add-comment"
        placeholder="Agrega Un Comentario..."
        value={textComment}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <button
        type="button"
        className="btn-send"
        onClick={() => handleCommentCallback(id, textComment)}
        disabled={!textComment.trim()}
        aria-label="Enviar Comentario"
      >
        <SendIcon />
      </button>
    </div>
  );
}

CardFooter.propTypes = {
  id: PropTypes.number.isRequired,
};

export { CardFooter };
