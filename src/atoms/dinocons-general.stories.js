import React from "react";

import Asterisk from "../../node_modules/mdn-minimalist/dinocons/general/asterisk.svg";
import Book from "../../node_modules/mdn-minimalist/dinocons/general/book.svg";
import CheckMark from "../../node_modules/mdn-minimalist/dinocons/general/check-mark.svg";
import Clock from "../../node_modules/mdn-minimalist/dinocons/general/clock.svg";
import Close from "../../node_modules/mdn-minimalist/dinocons/general/close.svg";
import CloseModal from "../../node_modules/mdn-minimalist/dinocons/general/close-modal.svg";
import Cogs from "../../node_modules/mdn-minimalist/dinocons/general/cogs.svg";
import Comment from "../../node_modules/mdn-minimalist/dinocons/general/comment.svg";
import Community from "../../node_modules/mdn-minimalist/dinocons/general/community.svg";
import CreditCard from "../../node_modules/mdn-minimalist/dinocons/general/credit-card.svg";
import Email from "../../node_modules/mdn-minimalist/dinocons/general/email.svg";
import External from "../../node_modules/mdn-minimalist/dinocons/general/external.svg";
import Flag from "../../node_modules/mdn-minimalist/dinocons/general/flag.svg";
import Flask from "../../node_modules/mdn-minimalist/dinocons/general/flask.svg";
import Fork from "../../node_modules/mdn-minimalist/dinocons/general/fork.svg";
import Gift from "../../node_modules/mdn-minimalist/dinocons/general/gift.svg";
import Globe from "../../node_modules/mdn-minimalist/dinocons/general/globe.svg";
import Language from "../../node_modules/mdn-minimalist/dinocons/general/language.svg";
import List from "../../node_modules/mdn-minimalist/dinocons/general/list.svg";
import Lock from "../../node_modules/mdn-minimalist/dinocons/general/lock.svg";
import Money from "../../node_modules/mdn-minimalist/dinocons/general/money.svg";
import Paperclip from "../../node_modules/mdn-minimalist/dinocons/general/paperclip.svg";
import Pencil from "../../node_modules/mdn-minimalist/dinocons/general/pencil.svg";
import Search from "../../node_modules/mdn-minimalist/dinocons/general/search.svg";
import Shield from "../../node_modules/mdn-minimalist/dinocons/general/shield.svg";
import Star from "../../node_modules/mdn-minimalist/dinocons/general/star.svg";
import Tags from "../../node_modules/mdn-minimalist/dinocons/general/tags.svg";
import Trash from "../../node_modules/mdn-minimalist/dinocons/general/trash.svg";

export default {
  title: "Atoms|Dinocons|General"
};

const wrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px"
};

const iconContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "24px",
  padding: "5px",
  border: "1px solid #212121",
  width: "100px",
  height: "100px"
};

export const general = () => (
  <>
    <h2>Brands</h2>
    <div style={wrapperStyle}>
      <div style={iconContainer}>
        <Asterisk />
      </div>
      <div style={iconContainer}>
        <Book />
      </div>
      <div style={iconContainer}>
        <CheckMark />
      </div>
      <div style={iconContainer}>
        <Clock />
      </div>
      <div style={iconContainer}>
        <Close />
      </div>
      <div style={iconContainer}>
        <CloseModal />
      </div>
      <div style={iconContainer}>
        <Cogs />
      </div>
      <div style={iconContainer}>
        <Comment />
      </div>
      <div style={iconContainer}>
        <Community />
      </div>
      <div style={iconContainer}>
        <CreditCard />
      </div>
      <div style={iconContainer}>
        <Email />
      </div>
      <div style={iconContainer}>
        <External />
      </div>
      <div style={iconContainer}>
        <Flag />
      </div>
      <div style={iconContainer}>
        <Flask />
      </div>
      <div style={iconContainer}>
        <Fork />
      </div>
      <div style={iconContainer}>
        <Gift />
      </div>
      <div style={iconContainer}>
        <Globe />
      </div>
      <div style={iconContainer}>
        <Language />
      </div>
      <div style={iconContainer}>
        <List />
      </div>
      <div style={iconContainer}>
        <Lock />
      </div>
      <div style={iconContainer}>
        <Money />
      </div>
      <div style={iconContainer}>
        <Paperclip />
      </div>
      <div style={iconContainer}>
        <Pencil />
      </div>
      <div style={iconContainer}>
        <Search />
      </div>
      <div style={iconContainer}>
        <Shield />
      </div>
      <div style={iconContainer}>
        <Star />
      </div>
      <div style={iconContainer}>
        <Tags />
      </div>
      <div style={iconContainer}>
        <Trash />
      </div>
    </div>
  </>
);
