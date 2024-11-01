"use client";
import { Card, Descriptions, Form, Input, Button } from "antd";
import { useUser } from "@clerk/nextjs";

export default function ContactOwner({ property }) {
  // Correctly initialize the form
  const [form] = Form.useForm();
  const user = useUser();


  const handleSendMessage = async (values) => {
    try{
        const response = await sendMessage(values.message, user.id, property.ownerId);
        console.log( response);

    } catch(error){
      console.error("Error sending message:", error);
    }
    }

  return (
    <Card>
      <h1>Contact Owner</h1>
      <Descriptions column={1} className="mt-6">
        <Descriptions.Item label="Owner">{property.owner}</Descriptions.Item>
        <Descriptions.Item label="Email">{property.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{property.phone}</Descriptions.Item>
      </Descriptions>

      {/* Display the authenticated user's name and email*/}

      

      <Form
        form={form}
        labelAlign="left"
        labelCol={{ span: 5 }}
        className="mt-2"
        onFinish={handleSendMessage}
      >
        <Form.Item label="Message" name="message">
          <Input.TextArea />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form>
    </Card>
  );
}
