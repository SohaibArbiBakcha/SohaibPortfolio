import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Title from "../Title"
import Project from "./Project"
export default class ProjectList extends Component {
  state = {
    project: [],
    projectFilter: [],
  }

  componentDidMount() {
    this.setState({
      project: this.props.projects.edges,
      projectFilter: this.props.projects.edges,
    })
  }
  render() {
    return (
      <section className={styles.projects}>
        <Title titel="<My" subtitel="projects/>" />
        <div className={styles.center}>
          {this.state.project.map(({ node }) => {
            return <Project key={node.contentful_id} project={node} />
          })}
        </div>
      </section>
    )
  }
}
