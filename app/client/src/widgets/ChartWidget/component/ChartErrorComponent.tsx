import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "constants/Colors";
import { Collapse } from "@blueprintjs/core";
import { Button, Text } from "design-system";
import CollapseToggle from "pages/Editor/Explorer/Entity/CollapseToggle";

export const ChartErrorContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.WHITE};
  overflow: hidden;
  position: absolute;
  padding: 10px 0 0 0;
  opacity: 90%;
  top: 0px;
  left: 0px;
}`;

export const CenteredDiv = styled.div`
  height: 60%;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
}`;

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * THIS IS A WIP. THE UX DESIGN FOR THIS COMPONENT HASN'T COME YET. PLEASE IGNORE THIS COMPONENT FROM REVIEW
 * @param props
 * @returns
 */

export interface ChartErrorProps {
  error: Error
}
export function ChartErrorComponent(props: ChartErrorProps) {
  const [bodyCollapsed, setBodyCollapsed] = useState(true)

  const errorMessage = () => {
    const title = "Error in Chart Data/Configuration";
    let subheading = props.error.message;;
    let body = (props.error.stack ?? "" + props.error.stack + props.error.stack) ;
    body = body + "this is a long text this is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long textthis is a long text"

    return {
      title: title,
      subheading: subheading,
      body: body,
    };
  };

  function toggleBody() {
    setBodyCollapsed(!bodyCollapsed)
  }

  return (
    <ChartErrorContainer>
      <CenteredDiv>
        <h1 style={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px", textAlign: "center" }}>
          {errorMessage().title}
        </h1>
        <p style={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", textAlign: "center" }}>
          {errorMessage().subheading}
        </p>

        <div style={{ height: "60%", display: "flex", flexFlow: "column", marginTop: "10px" }}>
          <button style={{ fontSize: "14px", fontWeight: 500 }} onClick={toggleBody}> More Details</button>
          <div style={{ height: "60%", overflowY: "scroll", marginTop: "10px" }}>
              <Collapse isOpen={!bodyCollapsed}>
                  <p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px", height: "70%" }}>
                    {errorMessage().body}
                  </p>
              </Collapse>
          </div>
        </div>
      </CenteredDiv>
      
    </ChartErrorContainer>
  );
}
