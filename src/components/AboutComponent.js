import React from "react";
import st from "../assets/st.jpeg";
import { Timeline, Button } from "flowbite-react";
export default function AboutComponent() {
  return (
    <div className="about">
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div className="container">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>February 2022</Timeline.Time>
              <Timeline.Title>Application Movie Projects</Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </Timeline.Body>
              <Button color="gray">
                Learn More
                {/* <HiArrowNarrowRight className="ml-2 h-3 w-3" /> */}
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>March 2022</Timeline.Time>
              <Timeline.Title>Marketing Project</Timeline.Title>
              <Timeline.Body>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti sapiente hic sit dolor, aperiam obcaecati itaque!
                </div>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>April 2022</Timeline.Time>
              <Timeline.Title>
                E-Commerce Movie Projects
              </Timeline.Title>
              <Timeline.Body>
                Get started with dozens of Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}
