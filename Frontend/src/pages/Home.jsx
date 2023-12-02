import React from "react";
import { Layout, Typography, Divider, Table, Card, Row, Col, Statistic, Tag, Timeline, List, Progress } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, CalendarOutlined, ClockCircleOutlined, AuditOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

// Example data for team members
const teamMembersData = [
    { key: 1, name: "enes osmanoglu", status: "Online", role: "Developer" },
    { key: 2, name: "selim koc", status: "Offline", role: "Designer" },
    // Add more team members as needed
];

// Example data for projects
const projectsData = [
    { key: 1, name: "Project A", status: "In Progress", progress: 70, lastStep: "Testing" },
    { key: 2, name: "Project B", status: "Completed", progress: 100, lastStep: "Deployment" },
    // Add more projects as needed
];

// Example data for recent activities
const activitiesData = [
    { key: 1, description: "Completed testing for Project A", time: "2 hours ago", icon: <CheckCircleOutlined style={{ color: "green" }} /> },
    { key: 2, description: "Scheduled meeting with the design team", time: "Yesterday", icon: <CalendarOutlined style={{ color: "blue" }} /> },
    // Add more activities as needed
];

// Example data for upcoming deadlines
const deadlinesData = [
    { key: 1, project: "Project B", deadline: "2023-12-15", icon: <ClockCircleOutlined style={{ color: "orange" }} /> },
    // Add more deadlines as needed
];

export const Home = () => {
    const teamMembersColumns = [
        { title: "Name", dataIndex: "name", key: "name" },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "Online" ? "green" : "red"} icon={status === "Online" ? <CheckCircleOutlined /> : <CloseCircleOutlined />}>
                    {status}
                </Tag>
            ),
        },
        { title: "Role", dataIndex: "role", key: "role" },
    ];

    const projectsColumns = [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Status", dataIndex: "status", key: "status" },
        { title: "Progress", dataIndex: "progress", key: "progress", render: (progress) => `${progress}%` },
        { title: "Last Step", dataIndex: "lastStep", key: "lastStep" },
    ];

    return (
        <div style={{ padding: "5px" }}>
            <Title level={2}>Home</Title>
            <Divider />
            <Row style={{ marginBottom: "16px" }} gutter={16}>
                <Col span={8}>
                    <Card>
                        <Statistic title="Completed Projects" value={5} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Contributions" value={150} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic title="Project Completion Rate" value={80} suffix="%" />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} sm={12}>
                    <Card title="Active Team Members" style={{ marginBottom: "16px" }}>
                        <Table dataSource={teamMembersData} columns={teamMembersColumns} pagination={false} />
                    </Card>
                </Col>
                <Col xs={24} sm={12}>
                    <Card title="Projects" style={{ marginBottom: "16px" }}>
                        <Table dataSource={projectsData} columns={projectsColumns} pagination={false} />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col xs={24} sm={12}>
                    <Card title="Recent Activities" style={{ marginBottom: "16px" }}>
                        <Timeline>
                            {activitiesData.map((activity) => (
                                <Timeline.Item key={activity.key} dot={activity.icon}>
                                    {activity.description} <Text type="secondary">{activity.time}</Text>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </Card>
                </Col>
                <Col xs={24} sm={12}>
                    <Card title="Upcoming Deadlines" style={{ marginBottom: "16px" }}>
                        <List
                            dataSource={deadlinesData}
                            renderItem={(item) => (
                                <List.Item>
                                    {item.icon} {item.project} - Deadline: {item.deadline}
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24}>
                    <Card title="Team Performance Overview">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Statistic title="Team Contributions" value={500} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Total Projects Completed" value={20} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Average Project Completion Rate" value={75} suffix="%" />
                            </Col>
                        </Row>
                        <Divider />
                        <Title level={4}>Overall Progress</Title>
                        <Progress percent={75} status="active" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

