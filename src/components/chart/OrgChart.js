import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import { orgData } from '../../data/chart/Orgchart';
import { User, ExternalLink } from "react-feather";
import "./style.css"


export default class OrgChart extends React.Component {
  renderNode({ nodeData }) {
    return (
      <div className="org-node-container">
        <div
          className="open-user-details"
          onClick={() => {
            window.open("https://h65cz.csb.app/");
          }}
        >
          <ExternalLink size={14} />

        </div>
        <div className="org-person">
          <div>
          <img className="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm" src={nodeData.avatarSrc} width={100} alt="" />
          </div>
        </div>
        <div className="org-name">
            {nodeData.name}
        </div>
        <div className="org-title">{nodeData.designation}</div>
        <div className="org-title">compliance: {nodeData.compliance}</div>
        {nodeData.children.length > 0 && (
          <div
            className="org-node-children"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              let childNodes = document.getElementById(nodeData.id)
                .parentElement.childNodes;
              if (childNodes[1].className.includes("hidden")) {
                childNodes[0].className = "oc-node";
                childNodes[1].className = "";
              } else {
                childNodes[0].className = "oc-node isChildrenCollapsed";
                childNodes[1].className = "hidden";
              }
            }}
          >
            {nodeData.children.length} Reportees
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <OrganizationChart
        datasource={orgData}
        chartClass="sekure-org-chart"
        pan={true}
        zoom={true}
        NodeTemplate={this.renderNode}
      />
    );
  }
}
