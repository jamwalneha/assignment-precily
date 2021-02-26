import React, { useEffect, useState } from "react";
import { ResizableBox } from "react-resizable";
import { Input, Button, Typography, message, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as dataActions from "../redux/actions";

const RightContainer = () => {
  const dispatch = useDispatch();

  const [update_data, set_update_data] = useState({
    title: "",
    description: "",
  });

  const {
    isUpdateRequest,
    isUpdateSuccess,
    isUpdateError,
    updateMessage,
    isGetRequest,
    isGetSuccess,
    getData,
  } = useSelector((store) => ({
    isUpdateRequest: store.data_reducer.isUpdateRequest,
    isUpdateSuccess: store.data_reducer.isUpdateSuccess,
    isUpdateError: store.data_reducer.isUpdateError,
    updateMessage: store.data_reducer.updateMessage,
    isGetRequest: store.data_reducer.isGetRequest,
    isGetSuccess: store.data_reducer.isGetSuccess,
    getData: store.data_reducer.getData,
  }));

  useEffect(() => {
    dispatch(dataActions.getData());
  }, [dispatch]);

  useEffect(() => {
    isGetSuccess &&
      getData &&
      set_update_data({
        title: getData.title,
        description: getData.description,
      });
  }, [isGetSuccess, getData]);

  useEffect(() => {
    isUpdateError && message.error(updateMessage);
    isUpdateSuccess && message.success(updateMessage);
    isUpdateSuccess && dispatch(dataActions.getData());
  }, [isUpdateError, isUpdateSuccess, updateMessage, dispatch]);

  const handleChange = (type, value) => {
    set_update_data({ ...update_data, [type]: value });
  };

  const handleSubmit = () => {
    dispatch(dataActions.updateData(update_data));
  };
  return (
    <div>
      <ResizableBox
        className="custom-box box"
        width={800}
        height={250}
        handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
        handleSize={[8, 8]}
        resizeHandles={["sw", "se", "nw", "ne", "w", "e", "n", "s"]}
      >
        <Typography.Title level="3">Update Data</Typography.Title>
        {isGetRequest && <Spin />}
        <Input
          className="containerInput"
          placeholder="Title"
          value={update_data.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Input.TextArea
          className="containerInput"
          placeholder="Description"
          value={update_data.description}
          onChange={(e) => handleChange("description", e.target.value)}
        ></Input.TextArea>
        <Button type="primary" loading={isUpdateRequest} onClick={handleSubmit}>
          Update
        </Button>
      </ResizableBox>
    </div>
  );
};

export default RightContainer;
