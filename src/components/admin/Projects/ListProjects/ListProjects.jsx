import React, { useState, useEffect } from "react";
import { Button, Divider, Image, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CreateProjectForm from "../CreateProjectForm";
import EditFormProjects from "../EditFormProjects";
import { deleteProjectApi, getImageApi } from "../../../../api/projects";
import Modal from "../../../Modal";

import "./ListProjects.scss";

const ListProjects = (props) => {
  const { getProjects, setReloadProjects } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const createProjectModal = () => {
    setIsVisible(true);
    setModalTitle('Creating new user');
    setModalContent(
        <CreateProjectForm setIsVisible={setIsVisible} setReloadProjects={setReloadProjects}/>
    )
  }

  return (
    <div>
      <Button type="primary" onClick={() => createProjectModal()}>New project</Button>
      <Divider />
      <ProjectsList
        getProjects={getProjects}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
        setIsVisible={setIsVisible}
        setReloadProjects={setReloadProjects}
      />

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

function ProjectsList(props) {
  const {
    getProjects,
    setModalContent,
    setModalTitle,
    setIsVisible,
    setReloadProjects,
  } = props;
  const editProject = (project) => {
    setIsVisible(true);
    setModalTitle(`Edit ${project.name} `);
    setModalContent(
      <EditFormProjects
        project={project}
        setIsVisible={setIsVisible}
        setReloadProjects={setReloadProjects}
      />
    );
  };

  const deleteProject = (project) => {
    deleteProjectApi(project)
      .then((response) => {
        notification["success"]({ message: response.msg });
        setReloadProjects(true);
      })
      .catch((error) => {
        notification["error"]({ message: error.msg });
      });
  };


  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        {getProjects.map((project) => {
          return (
            <div className="card" key={project._id}>
              <Image width={200} src={project.img} className="project-img" />
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.desc}</p>
              <h4 className="project-card__tech">{project.tech}</h4>
              <Divider />
              <a href={project.link} target="_blank" className="project-link">
                Go to project
              </a>
              <div className="button-container">
                <Button
                  className="edit-btn"
                  onClick={() => editProject(project)}
                >
                  <EditOutlined />
                </Button>
                <Button
                  className="delete-btn"
                  onClick={() => deleteProject(project._id)}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProjects;
