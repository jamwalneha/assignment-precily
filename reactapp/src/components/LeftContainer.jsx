import React from 'react';
import { ResizableBox } from "react-resizable";
import {Typography, Spin} from "antd"
import { useSelector } from 'react-redux';

const LeftContainer = () => {
    const {
        isGetRequest,
        isGetSuccess,
        getData,
      } = useSelector((store) => ({
        isGetRequest: store.data_reducer.isGetRequest,
        isGetSuccess: store.data_reducer.isGetSuccess,
        getData: store.data_reducer.getData,
      }));

    return (
        <div>
            <ResizableBox
            className="custom-box box"
            width={300}
            height={250}
            handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
            handleSize={[8, 8]}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                <Typography.Title level="3">Count</Typography.Title>
                {isGetRequest && <Spin />}
                <Typography.Title level="5">{isGetSuccess && getData ? getData.count : 0}</Typography.Title>
          </ResizableBox>
        </div>
    );
};

export default LeftContainer;