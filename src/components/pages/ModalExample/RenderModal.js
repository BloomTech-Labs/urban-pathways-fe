import { Button, Form, Upload, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
const Example = () => {
  const [filelInputOne, setFileInputOne] = useState(false);
  const [filelInputTwo, setFileInputTwo] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleChange = info => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: false,
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleFilelInputOne = event => {
    console.log('form 1 filled', event);
    setFileInputOne(true);
  };
  const handleFilelInputTwo = event => {
    console.log('form 2 filled', event);
    setFileInputTwo(true);
  };

  useEffect(() => {
    if (filelInputOne && filelInputTwo) {
      console.log('buttonDisabled1');
      setButtonDisabled(false);
    }
  }, [filelInputOne, filelInputTwo]);

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Generate Arrears Report
      </Button>

      <Modal
        title="basic modal"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button
            key="generateReport"
            type="primary"
            disabled={buttonDisabled}
            onClick={handleOk}
          >
            Generate Report
          </Button>,
        ]}
      >
        <Form
          name="wrap"
          labelCol={{
            flex: '110px',
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
        >
          <Form.Item
            label="Upload CSV File Here"
            name="username"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload
              {...props}
              fileList={fileList}
              accept=".csv"
              onChange={handleFilelInputOne}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="Upload CSV File Here"
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload
              {...props}
              fileList={fileList}
              accept=".csv"
              onChange={handleFilelInputTwo}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Example;

// tried to add upload component to pre existing form and now it is broken lol
