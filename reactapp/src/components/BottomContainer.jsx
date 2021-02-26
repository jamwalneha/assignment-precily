import React, { useEffect, useState } from "react";
import { ResizableBox } from "react-resizable";
import { Input, Button, Typography, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addData, getData } from "../redux/actions";

const BottomContainer = () => {
  const dispatch = useDispatch();

  const [add_data, set_add_data] = useState({
    title: "",
    description: "",
  });

  const { isAddRequest, isAddSuccess, isAddError, addMessage } = useSelector(
    (store) => ({
      isAddRequest: store.data_reducer.isAddRequest,
      isAddSuccess: store.data_reducer.isAddSuccess,
      isAddError: store.data_reducer.isAddError,
      addMessage: store.data_reducer.addMessage,
    })
  );

  useEffect(() => {
    isAddError && message.error(addMessage);
    isAddSuccess && message.success(addMessage);
    isAddSuccess && set_add_data({ title: "", description: "" });
    isAddSuccess && dispatch(getData());
  }, [isAddError, isAddSuccess, addMessage, dispatch]);

  const handleChange = (type, value) => {
    set_add_data({ ...add_data, [type]: value });
  };

  const handleSubmit = () => {
    dispatch(addData(add_data));
  };
  return (
    <div>
      <ResizableBox
        className="custom-box box"
        width={1200}
        height={250}
        handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
        handleSize={[8, 8]}
        resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
      >
        <Typography.Title level="3">Add Data</Typography.Title>
        <Input
          className="containerInput"
          placeholder="Title"
          value={add_data.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Input.TextArea
          className="containerInput"
          placeholder="Description"
          value={add_data.description}
          onChange={(e) => handleChange("description", e.target.value)}
        ></Input.TextArea>
        <Button type="primary" loading={isAddRequest} onClick={handleSubmit}>
          Add
        </Button>
      </ResizableBox>
    </div>
  );
};

export default BottomContainer;
