import React, { useState } from "react";
import { ColorPicker, Typography, Divider, Card, Row, Col, Button, Space, Switch, Radio } from "antd";
import {
    BulbFilled,
    CloseCircleOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    AuditOutlined,
} from "@ant-design/icons";
import CustomDivider from "../components/CustomDivider";

const { Title, Text } = Typography;

export const Settings = (props) => {
    // State for settings
    const [settings, setSettings] = useState({
        darkMode: false,
        uiColor: "default", // default color
        staticNavbar: true,
        staticHeader: true,
        fontSize: 16,
        overallScale: 1,
        // Add more settings as needed
    });

    // Example data...
    // Function to update settings
    const updateSettings = (key, value) => {
        setSettings({ ...settings, [key]: value });
    };


    // Your existing components...

    return (
        <div style={{ padding: "5px" }}>
            {/* Settings Section */}
            <Card title="Settings" style={{ marginBottom: "16px" }}>
                <Space direction="vertical">
                    <Space align="start">
                        <BulbFilled />
                        <Text>Dark Mode</Text>
                        <Switch checked={settings.darkMode}
                            onChange={(value) => {
                                updateSettings("darkMode", value)
                                props.setDarkMode(value)
                                console.log(settings)
                            }} />
                    </Space>
                    <CustomDivider ></CustomDivider>
                    {/* UI Color */}
                    <Space align="start">
                        <AuditOutlined />
                        <Text>UI Color:</Text>
                        <ColorPicker size="small" showText />
                    </Space>
                    <CustomDivider ></CustomDivider>
                    {/* Static Navbar and Header */}
                    <Space align="start">
                        <CloseCircleOutlined />
                        <Text>Static Navbar:</Text>
                        <Switch
                            checked={settings.staticNavbar}
                            onChange={(value) => updateSettings("staticNavbar", value)} />
                    </Space>
                    <CustomDivider ></CustomDivider>
                    <Space align="start">
                        <CloseCircleOutlined />
                        <Text>Static Header:</Text>
                        <Switch
                            checked={settings.staticHeader}
                            onChange={(value) => updateSettings("staticHeader", value)} />
                    </Space>

                    <CustomDivider ></CustomDivider>
                    {/* Font Size */}
                    <Space align="start">
                        <CalendarOutlined />
                        <Text>Font Size:</Text>
                        <Button onClick={() => updateSettings("fontSize", settings.fontSize + 1)}>Increase</Button>
                        <Button onClick={() => updateSettings("fontSize", settings.fontSize - 1)}>Decrease</Button>
                    </Space>

                    {/* Overall Scale */}
                    <CustomDivider ></CustomDivider>
                    <Space align="start">
                        <ClockCircleOutlined />
                        <Text>Overall Scale:</Text>
                        <Button onClick={() => updateSettings("overallScale", settings.overallScale + 0.1)}>Increase</Button>
                        <Button onClick={() => updateSettings("overallScale", settings.overallScale - 0.1)}>Decrease</Button>
                    </Space>

                    <CustomDivider ></CustomDivider>
                    <Space align="start">
                        <Text>Sidebar Dock:</Text>
                        <Radio.Group onChange={e => {
                            props.setSiderType(e.target.value)
                            
                        }} defaultValue={props.siderType} size="small">
                            <Radio.Button value="dock">Dock</Radio.Button>
                            <Radio.Button value="hover">Hover</Radio.Button>
                            <Radio.Button value="mini">Minimized</Radio.Button>
                        </Radio.Group>
                    </Space>
                </Space>
            </Card>

        </div>
    );
};

