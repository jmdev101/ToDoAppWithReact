import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SelectedNote(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="selected-container">
      {props.selectedBoolean ? (
        <div className="edit-selected">
          <input type="text" name="title" defaultValue={props.title} onChange={(e) => props.onEditNote(e)}></input>
          <textarea required name="content" defaultValue={props.content} onChange={(e) => props.onEditNote(e)}></textarea>
        </div>
      ) : (
        <div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      )}

      {props.content ? (
        <div>
          {props.selectedBoolean ? (
            <div className="edit-content">
              <button onClick={() => props.onCloseEdit()}>Cancel</button>
              <button onClick={() => props.onSaveEdit(props.id)}>Save</button>
            </div>
          ) : (
            <div>
              <MoreHorizIcon id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}></MoreHorizIcon>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  id="menu-item"
                  onClick={() => {
                    props.onEditItem();
                    handleClose();
                  }}
                >
                  <EditOutlinedIcon />
                  Edit
                </MenuItem>

                <MenuItem
                  id="menu-item"
                  onClick={() => {
                    props.onDeleteItem(props.id);
                    handleClose();
                  }}
                >
                  <DeleteOutlinedIcon />
                  Delete
                </MenuItem>
              </Menu>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SelectedNote;
