import React, { useState, useEffect } from "react";
import { Switch, List, Avatar, Button, notification } from "antd";
import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { getAvatarApi, activateUserApi, deleteUserApi } from "../../../../api/user";
import { getAccessTokenApi } from '../../../../api/auth';

import noavatar from "../../../../assets/no-avatar.png";
import Modal from "../../../Modal";
import EditUserForm from "../../Users/EditUserForm";
import CreateUserForm from "../../Users/CreateUserForm";

import "./ListUsers.scss";

const ListUsers = (props) => {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActive, setViewUsersActive] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const createUserModal = () => {
    setIsVisible(true);
    setModalTitle('Creating new user');
    setModalContent(
        <CreateUserForm setIsVisible={setIsVisible} setReloadUsers={setReloadUsers}/>
    )
  }

  return (
    <div className="list-users">

      <div className="list-users__header">

        <div className="list-users__header-switch">
          <Switch
            defaultChecked
            onChange={() => setViewUsersActive(!viewUsersActive)}
          />
          <span>
            {viewUsersActive ? <h3>Active Users</h3> : <h3>Inactive users</h3>}
          </span>
        </div>

        <Button type="primary" onClick={() => createUserModal()}>New user</Button>

      </div>
      {viewUsersActive ? (
        <UsersActive
          usersActive={usersActive}
          setIsVisible={setIsVisible}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
          setReloadUsers={setReloadUsers}
        />
      ) : (
        <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
      )}
      <Modal
        title={modalTitle}
        isVisible={isVisible}
        setIsVisible={() => setIsVisible(!isVisible)}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

function UsersActive(props) {
  const {
    usersActive,
    setIsVisible,
    setModalTitle,
    setModalContent,
    setReloadUsers,
  } = props;
  const editUser = (user) => {
    setIsVisible(true);
    setModalTitle(`Edit ${user.name} ${user.lastname}`);
    setModalContent(
      <EditUserForm
        user={user}
        setIsVisible={setIsVisible}
        setReloadUsers={setReloadUsers}
      />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={(user) => <UserActive user={user} editUser={editUser} setReloadUsers={setReloadUsers}/>}
    />
  );
}

function UserActive(props) {
  const { user, editUser, setReloadUsers } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const deactivateUser = () => {
    const token = getAccessTokenApi();
    activateUserApi(token, false, user._id).then((response) => {
      notification['success']({message: response.msg});
      setReloadUsers(true);
    }).catch(err => {
      notification['error']({message: err});
    })
  }

  const deleteUser = () => {
    const token = getAccessTokenApi();
    deleteUserApi(token, user._id).then((response) => {
      notification['success']({message: response.msg});
      setReloadUsers(true);
    });
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editUser(user)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deactivateUser()}>
          <StopOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteUser()}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : noavatar} />}
        title={`
                    ${user.name ? user.name : "..."}
                    ${user.lastname ? user.lastname : "..."}
                `}
        description={user.email}
      />
    </List.Item>
  );
}

function UsersInactive(props) {
  const { usersInactive, setReloadUsers } = props;
  
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={(user) => <UserInactive user={user} setReloadUsers={setReloadUsers}/>}
    />
  );
}

function UserInactive(props) {
  const { user, setReloadUsers } = props;

  const activateUser = () => {
    const token = getAccessTokenApi();
    activateUserApi(token, true, user._id).then((response) => {
      notification['success']({message: response.msg});
      setReloadUsers(true);
    }).catch(err => {
      notification['error']({message: err});
    })
  }

  const deleteUser = () => {
    const token = getAccessTokenApi();
    deleteUserApi(token, user._id).then((response) => {
      notification['success']({message: response.msg});
      setReloadUsers(true);
    })
  }

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => activateUser()}>
          <CheckOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteUser()}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={user.avatar ? user.avatar : noavatar} />}
        title={`
                ${user.name ? user.name : "..."}
                ${user.lastname ? user.lastname : "..."}
            `}
        description={user.email}
      />
    </List.Item>
  );
}

export default ListUsers;
