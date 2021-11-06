import React, { useCallback, useState } from "react";
import { Card, Col } from "react-bootstrap";

export const content = (
  Component,
  defaultTitle = "DefaultTitle",
  style = {}
) => (props) => {
  const [title, setTitle] = useState(defaultTitle);

  const getPageParameters = (storageName) => {
    let urlPageParam = new URLSearchParams(window.location.search).get("page");
    // let currentSort = sessionStorage.getItem(`${storageName}-sort`);
    let pageSize = sessionStorage.getItem("pageSize");

    return {
      page: urlPageParam ? urlPageParam : 1,
      size: pageSize ? pageSize : 25,
      // currentSort: currentSort ? JSON.parse(currentSort) : null,
    };
  };

  return (
    <Col className="content-page" sm={12} md={8} lg={9} style={style}>
      <Card>
        <Card.Header>
          <div>{title}</div>
        </Card.Header>
        <div className="Content">
          <Card.Body>
            <Component
              {...props}
              getPageParameters={getPageParameters}
              title={title}
              setTitle={useCallback(
                (t) => {
                  setTitle(t);
                },
                [setTitle]
              )}
            />
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};
