import React from "react";
import styled from "styled-components";

export default ({ items }) => (
  <div>
    {items.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </div>
);

const Item = ({ id, author, authorUrl, postUrl }) => (
  <ItemContainer>
    <img
      src={`https://picsum.photos/300/200?image=${id}`}
      alt={`by ${author}`}
    />
    <h2>{author}</h2>
    <a href={authorUrl}>View Author</a> &bull; <a href={postUrl}>View Post</a>
  </ItemContainer>
);

const ItemContainer = styled.div`
  position: relative;
  padding-left: 320px;
  height: 200px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  img {
    width: 300px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
  h2 {
  }
`;
